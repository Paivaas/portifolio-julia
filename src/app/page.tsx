'use client';

import '@/i18n/settings';

import LineUp from '@/components/section/LineUp';
import Contact from '@/components/section/Contact';
import Header from '@/components/section/Header';
import Info from '@/components/section/Info';

import { Pointer } from '@/components/ui/pointer';
import Reveal from '@/components/ui/Reveal';
import CursorSparkles from '@/components/ui/CursorSparkles';

export default function Home() {
  return (
    <CursorSparkles>
      <div className="flex flex-col style={{ fontFamily: 'var(--font-poppins)' }}">
        <Pointer />

        <div className="flex flex-col gap-24">
          <Header />
          <Reveal>
            <Info />
          </Reveal>
          <Reveal>
            <LineUp />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
        </div>
      </div>
    </CursorSparkles>
  );
}
