type SoundName = 'blop' | 'bubble' | 'cam';

const cache = new Map<SoundName, HTMLAudioElement>();

/**
 * Toca um som reaproveitando o mesmo elemento <audio> (em vez de criar um novo a cada clique,
 * o que refaz a requisição e acumula objetos na memória). Erros de autoplay são ignorados.
 */
export function playSound(name: SoundName) {
  if (typeof window === 'undefined') return;

  let audio = cache.get(name);
  if (!audio) {
    audio = new Audio(`/sounds/sound-${name}.mp3`);
    audio.preload = 'auto';
    cache.set(name, audio);
  }

  audio.currentTime = 0;
  audio.play().catch(() => {});
}
