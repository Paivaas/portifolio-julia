'use client';

import '@/i18n/settings';

import LineUp from '@/components/section/LineUp';
import AboutMe from '@/components/section/AboutMe';
import Contact from '@/components/section/Contact';
import Projects from '@/components/section/Projects';
import Header from '@/components/section/Header';
import Tools from '@/components/section/Tools';

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
            <LineUp />
          </Reveal>
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
        </div>
      </div>
    </CursorSparkles>
  );
}
