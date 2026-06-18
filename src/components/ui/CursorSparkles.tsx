import { useEffect, useRef, ReactNode } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SparkleState {
  count: number;
  last: {
    starTimestamp: number;
    starPosition: Position;
    mousePosition: Position;
  };
}

interface SparkleConfig {
  starAnimationDuration: number;
  minimumTimeBetweenStars: number;
  minimumDistanceBetweenStars: number;
  glowDuration: number;
  maximumGlowPointSpacing: number;
  colors: string[];
  sizes: string[];
  animations: string[];
}

interface CursorSparklesProps {
  children?: ReactNode;
  className?: string;
}

const styles = `
  .sparkle-wrapper {
    position: relative;
  }

  .sparkle-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 50;
    overflow: hidden;
  }
  .star {
    position: absolute;
    z-index: 51;
    animation-fill-mode: forwards;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }

  @keyframes fall-1 {
    0% {
      transform: translate(-50%, -50%) translate(0px, 0px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(0.25);
      opacity: 0;
    }
    5% {
      transform: translate(-50%, -50%) translate(10px, -10px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(25px, 200px) rotateX(180deg) rotateY(270deg) rotateZ(90deg) scale(1);
      opacity: 0;
    }
  }

  @keyframes fall-2 {
    0% {
      transform: translate(-50%, -50%) translate(0px, 0px) rotateX(-20deg) rotateY(10deg) scale(0.25);
      opacity: 0;
    }
    10% {
      transform: translate(-50%, -50%) translate(-10px, -5px) rotateX(-20deg) rotateY(10deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-10px, 160px) rotateX(-90deg) rotateY(45deg) scale(0.25);
      opacity: 0;
    }
  }

  @keyframes fall-3 {
    0% {
      transform: translate(-50%, -50%) translate(0px, 0px) rotateX(0deg) rotateY(45deg) scale(0.5);
      opacity: 0;
    }
    15% {
      transform: translate(-50%, -50%) translate(7px, 5px) rotateX(0deg) rotateY(45deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(20px, 120px) rotateX(-180deg) rotateY(-90deg) scale(0.5);
      opacity: 0;
    }
  }
`;

const config: SparkleConfig = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 75,
  maximumGlowPointSpacing: 10,
  colors: ['255, 192, 203', '218, 112, 214', '252, 15, 192'],
  sizes: ['1.4rem', '1rem', '0.6rem'],
  animations: ['fall-1', 'fall-2', 'fall-3'],
};

const rand = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const selectRandom = <T,>(items: T[]): T => items[rand(0, items.length - 1)];
const px = (v: number): string => `${v}px`;
const ms = (v: number): string => `${v}ms`;
const calcDistance = (a: Position, b: Position): number =>
  Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);

export default function CursorSparkles({ children, className }: CursorSparklesProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<SparkleState | null>(null);

  if (stateRef.current === null) {
    stateRef.current = {
      count: 0,
      last: {
        starTimestamp: 0,
        starPosition: { x: 0, y: 0 },
        mousePosition: { x: 0, y: 0 },
      },
    };
  }

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const state = stateRef.current!;
    state.last.starTimestamp = Date.now();

    const createStar = (position: Position): void => {
      const star = document.createElement('span');
      const color = selectRandom(config.colors);
      star.className = 'star';
      star.textContent = '✦';
      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.fontSize = selectRandom(config.sizes);
      star.style.color = `rgb(${color})`;
      star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.7)`;
      star.style.animationName = config.animations[state.count++ % 3];
      star.style.animationDuration = ms(config.starAnimationDuration);
      canvas.appendChild(star);
      setTimeout(() => star.parentNode?.removeChild(star), config.starAnimationDuration);
    };

    const createGlowPoint = (position: Position): void => {
      const glow = document.createElement('div');
      glow.className = 'glow-point';
      glow.style.left = px(position.x);
      glow.style.top = px(position.y);
      canvas.appendChild(glow);
      setTimeout(() => glow.parentNode?.removeChild(glow), config.glowDuration);
    };

    const createGlow = (lastPos: Position, current: Position): void => {
      const distance = calcDistance(lastPos, current);
      const quantity = Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);
      const dx = (current.x - lastPos.x) / quantity;
      const dy = (current.y - lastPos.y) / quantity;
      for (let i = 0; i < quantity; i++) {
        createGlowPoint({ x: lastPos.x + dx * i, y: lastPos.y + dy * i });
      }
    };

    const getRelativePosition = (clientX: number, clientY: number): Position => {
      const rect = wrapper.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const handleMove = (clientX: number, clientY: number): void => {
      const mousePosition = getRelativePosition(clientX, clientY);
      const { last } = state;

      if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = { ...mousePosition };
      }

      const now = Date.now();
      const hasMovedFarEnough =
        calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars;
      const hasBeenLongEnough = now - last.starTimestamp > config.minimumTimeBetweenStars;

      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);
        last.starTimestamp = now;
        last.starPosition = { ...mousePosition };
      }

      createGlow(last.mousePosition, mousePosition);
      last.mousePosition = { ...mousePosition };
    };

    const onMouseMove = (e: MouseEvent): void => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent): void => {
      e.preventDefault();
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onMouseLeave = (): void => {
      state.last.mousePosition = { x: 0, y: 0 };
    };

    wrapper.addEventListener('mousemove', onMouseMove);
    wrapper.addEventListener('touchmove', onTouchMove, { passive: false });
    wrapper.addEventListener('mouseleave', onMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', onMouseMove);
      wrapper.removeEventListener('touchmove', onTouchMove);
      wrapper.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`sparkle-wrapper ${className ?? ''}`}>
      <div ref={canvasRef} className="sparkle-canvas" />
      {children}
    </div>
  );
}
