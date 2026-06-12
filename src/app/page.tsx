'use client';

import '@/i18n/settings';
import Header from '@/components/section/Header/index';
import Menu from '@/components/section/Menu';
import LineUp from '@/components/section/LineUp';
import AboutMe from '@/components/section/AboutMe';
import Contact from '@/components/section/Contact';
import Projects from '@/components/section/Projects';

import { Pointer } from '@/components/ui/pointer';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Pointer />
      <Menu></Menu>
      <div className="flex flex-col gap-24">
        <Header></Header>
        <AboutMe></AboutMe>
        <LineUp></LineUp>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
}
