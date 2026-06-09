'use client';

import '@/i18n/settings';
import Header from '@/components/section/Header/index';
import Menu from '@/components/section/Menu';
import LineUp from '@/components/section/LineUp';
import AboutMe from '@/components/section/AboutMe';
import Certifications from '@/components/section/Certifications';
import Contact from '@/components/section/Contact';

import { Pointer } from '@/components/ui/pointer';

export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <Pointer />
      <Menu></Menu>
      <div className="flex flex-col gap-24">
        <Header></Header>
        <AboutMe></AboutMe>
        <LineUp></LineUp>
        <Certifications></Certifications>
        <Contact></Contact>
      </div>
    </div>
  );
}
