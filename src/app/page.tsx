'use client';

import '@/i18n/settings';

import Menu from '@/components/section/Menu';
import LineUp from '@/components/section/LineUp';
import AboutMe from '@/components/section/AboutMe';
import Contact from '@/components/section/Contact';
import Projects from '@/components/section/Projects';
import Header from '@/components/section/Header/index';

import { Pointer } from '@/components/ui/pointer';
import Reveal from '@/components/ui/Reveal';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Pointer />

      <div className="flex flex-col gap-24">
        <Header />

        <Reveal>
          <AboutMe />
        </Reveal>

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
  );
}
