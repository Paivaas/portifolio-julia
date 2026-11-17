# O que mudou e o que falta

## 1. Imagens (PASSO OBRIGATÓRIO antes do deploy)
O código agora aponta para `/images/<categoria>/...webp` (mapa único em `src/lib/images.ts`).
O zip não trazia a pasta `public/`, então rode uma vez na raiz do projeto:

    npm i -D sharp
    node scripts/organize-images.mjs --dry-run   # confere o plano
    node scripts/organize-images.mjs             # copia + converte (não apaga nada)

Depois de testar o site, apague os originais antigos. O script lista os que sobraram sem uso.
Se algum nome de arquivo antigo estiver diferente do esperado, ele avisa em "Não encontrei".

## 2. Textos para VOCÊ confirmar
- `activities.items.cyber_leader` e `class_rep`: no original eram cópias do texto do Hackathon.
  Escrevi versões genéricas, ajuste com o que você realmente fez.
- EN do Keeggo citava "Sompo Seguros" e o PT não. Removi do EN (nome de cliente). Se quiser, coloque nos dois.
- Badges: PT dizia "2 anos" e EN "2+ anos". Padronizei em "2 anos trabalhando com TI" / "4+ anos estudando TI".
- `6.tsx` (Fatec / intercâmbio) não aparece na timeline e usa a descrição da graduação em TI. Falta texto próprio.
- `SenacDetails` (também não exibido): aba "Tecnologia" ficava com "Change your password here."; agora está vazia com TODO.
- `info-section.tsx` importava `components/section/projects/PageGame`, que não veio no zip. O import e a aba
  "Projetos" (que já estava escondida) ficaram comentados.

## 3. Otimizações aplicadas
- `i18n debug: false` (estava logando tudo no console em produção).
- Removido `bootstrap-icons` (CSS + fonte carregados, mas nenhuma classe `bi-*` usada).
- Abas Cursos / Ferramentas / Atividades com `next/dynamic` (só baixam quando abertas).
- `sizes` em todas as imagens `fill`/responsivas; foto de perfil com `priority`; as duas versões da foto ficam
  montadas, então o clique troca sem novo download.
- Sons: um `<audio>` reaproveitado por som (`src/lib/sounds.ts`) em vez de `new Audio()` a cada clique.
- Removidos imports quebrados `from 'framer-motion/client'` (6.tsx e 7ExperienceSenac.tsx).
- `/senai.png` e `/certification/senai.png` eram o mesmo logo duplicado: agora é um só.
- Certificados e atividades viraram listas de dados (antes eram ~14 blocos copiados).

## 4. Ainda recomendo (precisa de package.json / next.config, que não vieram)
- `next.config`: `images: { formats: ['image/avif', 'image/webp'], minimumCacheTTL: 31536000 }`.
- Seu `page.tsx` inteiro é `'use client'`. Mover o i18n para um provider client e deixar a página como server component reduz o JS inicial.
- `CursorSparkles` envolve o Header em `page.tsx` E dentro de `header-section.tsx` (efeito duplicado, dois listeners de mouse).
  Provavelmente só um é necessário; não mexi porque muda o visual.
- Fontes: carrega Geist, Geist Mono, Poppins e Kapakana. Se Geist Mono não for usada, remova.
- Timeline renderiza os detalhes duas vezes (versão mobile e desktop via `hidden`). Dá para renderizar só uma.
- ~36 ícones SVG em `/tools` = 36 requisições. Um sprite ou SVGs inline resolve.
- Confira o peso de `profile-default.svg` / `profile-camera.svg`: SVG com imagem embutida costuma ser o maior culpado.
- Sons .mp3: confira se estão comprimidos (<50 KB cada é o ideal).
