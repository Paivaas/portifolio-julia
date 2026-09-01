'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { DragDropProvider, useDraggable, useDroppable } from '@dnd-kit/react';
import type { DragEndEvent } from '@dnd-kit/react';

interface GameItem {
  id: string;
  name: string;
  previewImage: string;
  characterImage: string;
}

const items: GameItem[] = [
  {
    id: 'pink-hair',
    name: 'Batom',
    previewImage: '/game/batom.gif',
    characterImage: '/game/defaultcbatom.svg',
  },
  {
    id: 'black-hair',
    name: 'Blush',
    previewImage: '/game/blush.jpg',
    characterImage: '/game/default_batom_blush.svg',
  },
  {
    id: 'glasses',
    name: 'Com óculos',
    previewImage: '/game/glasses-preview.png',
    characterImage: '/game/menina-oculos.png',
  },
];

interface DraggableProps {
  item: GameItem;
}

function Draggable({ item }: DraggableProps) {
  const { ref, isDragging } = useDraggable({
    id: item.id,
  });

  return (
    <button
      ref={ref}
      type="button"
      className="flex flex-col items-center rounded-lg border bg-white p-3 shadow-sm transition"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <div className="relative h-16 w-16">
        <Image
          src={item.previewImage}
          alt={item.name}
          fill
          unoptimized
          className="object-contain"
        />
      </div>
      <p className="mt-2 text-sm font-medium">{item.name}</p>
    </button>
  );
}

interface CharacterProps {
  image: string;
  showEffect: boolean;
  effectKey: number;
}

function Character({ image, showEffect, effectKey }: CharacterProps) {
  const { ref } = useDroppable({
    id: 'character',
  });

  return (
    <div ref={ref} className="relative h-80 w-80 overflow-hidden rounded-lg border bg-gray-50">
      {/* PERSONAGEM */}
      <Image src={image} alt="Personagem" fill unoptimized className="object-contain" />

      {/* EFEITO TEMPORÁRIO */}
      {showEffect && (
        <Image
          key={effectKey}
          src="/game/stars.gif"
          alt="Efeito de estrelas"
          fill
          unoptimized
          className="pointer-events-none absolute z-10 object-cover"
        />
      )}
    </div>
  );
}

export default function AppGameTeste() {
  const [characterImage, setCharacterImage] = useState('/game/default.svg');
  const [showEffect, setShowEffect] = useState(false);
  const [effectKey, setEffectKey] = useState(0);

  function handleDragEnd(event: DragEndEvent) {
    if (event.canceled) return;

    const targetId = event.operation.target?.id;

    if (targetId !== 'character') return;

    const draggedId = String(event.operation.source?.id);

    const selectedItem = items.find((item) => item.id === draggedId);

    if (!selectedItem) return;

    // TROCA A IMAGEM
    setCharacterImage(selectedItem.characterImage);

    // REINICIA O EFEITO
    setEffectKey((previous) => previous + 1);
    setShowEffect(true);
  }

  useEffect(() => {
    if (!showEffect) return;

    const timer = setTimeout(() => {
      setShowEffect(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [showEffect, effectKey]);

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <main className="flex flex-col items-center gap-10 p-8 md:flex-row md:items-start md:justify-center">
        {/* ITENS */}
        <section>
          <h2 className="mb-5 text-xl font-bold">Escolha uma opção</h2>

          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <Draggable key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* PERSONAGEM */}
        <section>
          <h2 className="mb-5 text-xl font-bold">Arraste aqui</h2>

          <Character image={characterImage} showEffect={showEffect} effectKey={effectKey} />
        </section>
      </main>
    </DragDropProvider>
  );
}
