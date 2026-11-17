#!/usr/bin/env node
/**
 * Reorganiza e otimiza as imagens de /public.
 *
 *   npm i -D sharp
 *   node scripts/organize-images.mjs --dry-run   # só mostra o que vai fazer
 *   node scripts/organize-images.mjs             # copia + converte para WebP
 *
 * - NÃO apaga nada: os arquivos antigos continuam em /public até você conferir o site
 *   e remover manualmente (a lista dos que sobraram aparece no final).
 * - Os caminhos novos são os mesmos de src/lib/images.ts.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC = path.resolve(process.argv.find((a) => a.startsWith('--public='))?.split('=')[1] ?? 'public');
const DRY = process.argv.includes('--dry-run');
const QUALITY = 80;

// [arquivo(s) antigo(s) — usa o primeiro que existir, caminho novo, largura máxima em px]
const MAP = [
  // perfil (SVG: só move)
  [['foto-cam3.svg'], 'images/profile/profile-default.svg'],
  [['foto-cam.svg'], 'images/profile/profile-camera.svg'],

  // logos (exibidos em 40x40 -> 160px cobre telas 4x)
  [['certification/santander.png'], 'images/logos/santander.webp', 160],
  [['certification/orango.jpg'], 'images/logos/orango.webp', 160],
  [['certification/senac.png'], 'images/logos/senac.webp', 160],
  [['certification/senai.png', 'senai.png'], 'images/logos/senai.webp', 160],
  [['certification/fluxo.jpg'], 'images/logos/fluxo.webp', 160],
  [['certification/hp.png'], 'images/logos/hp.webp', 160],
  [['certification/sesi.png'], 'images/logos/sesi.webp', 160],
  [['fgv.png'], 'images/logos/fgv.webp', 160],

  // banners das atividades (cards de ~384px -> 1000px cobre retina)
  [['fluxoBANNER.png'], 'images/activities/fluxo-sem-tabu.webp', 1000],
  [['palesytraSENAC.png'], 'images/activities/senac-palestra-ia.webp', 1000],
  [['palestraFGV.png'], 'images/activities/fgv-marketing-day.webp', 1000],

  // hackathon
  [['hs-imagem.jpg'], 'images/experience/hackathon/coffee-talk.webp', 1000],
  [['hs-imagem3.jpg'], 'images/experience/hackathon/process.webp', 1000],
  [['hs-imagem1.jpg'], 'images/experience/hackathon/group.webp', 1000],
  [['hs-imagem2.jpg'], 'images/experience/hackathon/evaluator.webp', 1000],

  // Keeggo / Visual Mix
  [['details/lgpdBanner.png'], 'images/experience/keeggo/lgpd.webp', 800],
  [['details/cyberBanner.jpg'], 'images/experience/keeggo/cyber.webp', 800],
  [['details/react.png'], 'images/experience/visualmix/react-1.webp', 800],
  [['details/react2.jpg'], 'images/experience/visualmix/react-2.webp', 800],

  // projeto
  [['banner3.png'], 'images/projects/gerenciador-marmitas.webp', 600],

  // ícones raster de /tools (exibidos em 20x20): convertidos no mesmo lugar
  [['tools/icon1.png'], 'tools/icon1.webp', 80],
  [['tools/foguete.png'], 'tools/foguete.webp', 80],
  [['tools/marketing.png'], 'tools/marketing.webp', 80],
];

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
const used = new Set();
let before = 0;
let after = 0;
const rows = [];
const missing = [];

for (const [olds, dest, maxWidth] of MAP) {
  const src = olds.map((o) => path.join(PUBLIC, o)).find((p) => fs.existsSync(p));
  if (!src) {
    missing.push(olds[0]);
    continue;
  }
  olds.forEach((o) => used.add(path.join(PUBLIC, o)));

  const out = path.join(PUBLIC, dest);
  const size0 = fs.statSync(src).size;
  before += size0;

  if (!DRY) {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    if (dest.endsWith('.svg')) {
      fs.copyFileSync(src, out);
    } else {
      await sharp(src)
        .rotate() // respeita a orientação EXIF de fotos de celular
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(out);
    }
  }
  const size1 = DRY ? 0 : fs.statSync(out).size;
  after += size1;
  rows.push({ de: path.relative(PUBLIC, src), para: dest, antes: kb(size0), depois: DRY ? '-' : kb(size1) });

  if (dest.endsWith('.svg') && size0 > 100 * 1024) {
    console.warn(`⚠  ${dest} tem ${kb(size0)}: SVG pesado (provavelmente tem imagem raster embutida). Passe pelo svgo ou exporte como WebP.`);
  }
}

console.table(rows);
if (!DRY) console.log(`\nTotal: ${kb(before)} -> ${kb(after)} (${(100 - (after / before) * 100).toFixed(0)}% menor)`);
if (missing.length) console.warn(`\n⚠  Não encontrei (confira o nome/pasta):\n  - ${missing.join('\n  - ')}`);

// arquivos que ainda estão em /public e não foram tratados
const leftovers = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (path.relative(PUBLIC, p).startsWith('images') || e.name === 'sounds') continue;
      walk(p);
    } else if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(e.name) && !used.has(p) && !p.includes(`${path.sep}tools${path.sep}`)) {
      leftovers.push(path.relative(PUBLIC, p));
    }
  }
})(PUBLIC);
if (leftovers.length) console.log(`\nOutras imagens em /public que NÃO são usadas pelo código (candidatas a apagar):\n  - ${leftovers.join('\n  - ')}`);
console.log(`\nAntigos preservados. Depois de testar o site, apague os originais mapeados acima.`);
