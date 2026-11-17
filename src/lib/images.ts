/**
 * Mapa único de imagens do projeto.
 * Todas as imagens ficam em /public/images/<categoria>/ e (exceto SVG) em formato WebP.
 * Para trocar/renomear uma imagem, mexa só aqui.
 *
 * Use `node scripts/organize-images.mjs` para mover + converter os arquivos antigos de /public
 * para esta estrutura.
 */
export const IMG = {
  profile: {
    default: '/images/profile/profile-default.svg',
    camera: '/images/profile/profile-camera.svg',
  },

  logos: {
    santander: '/images/logos/santander.webp',
    orango: '/images/logos/orango.webp',
    senac: '/images/logos/senac.webp',
    senai: '/images/logos/senai.webp',
    fluxo: '/images/logos/fluxo.webp',
    hp: '/images/logos/hp.webp',
    sesi: '/images/logos/sesi.webp',
    fgv: '/images/logos/fgv.webp',
  },

  activities: {
    fluxo: '/images/activities/fluxo-sem-tabu.webp',
    senacTalk: '/images/activities/senac-palestra-ia.webp',
    fgv: '/images/activities/fgv-marketing-day.webp',
  },

  hackathon: {
    coffeeTalk: '/images/experience/hackathon/coffee-talk.webp',
    process: '/images/experience/hackathon/process.webp',
    group: '/images/experience/hackathon/group.webp',
    evaluator: '/images/experience/hackathon/evaluator.webp',
  },

  keeggo: {
    lgpd: '/images/experience/keeggo/lgpd.webp',
    cyber: '/images/experience/keeggo/cyber.webp',
  },

  visualmix: {
    react1: '/images/experience/visualmix/react-1.webp',
    react2: '/images/experience/visualmix/react-2.webp',
  },

  projects: {
    marmitas: '/images/projects/gerenciador-marmitas.webp',
  },
} as const;
