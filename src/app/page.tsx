'use client';

import '@/i18n/settings';

import LineUp from '@/components/section/lineup-section';
import Contact from '@/components/section/contact-section';
import Header from '@/components/section/header-section';
import Info from '@/components/section/info-section';

import { Pointer } from '@/components/ui/pointer';
import Reveal from '@/components/ui/Reveal';
import CursorSparkles from '@/components/ui/CursorSparkles';

export default function Home() {
  return (
    <div className="flex flex-col style={{ fontFamily: 'var(--fontx-poppins)' }} no-scrollbar">
      <Pointer />
      <div className="flex flex-col gap-24">
        <CursorSparkles>
          <Header />
        </CursorSparkles>

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
  );
}
