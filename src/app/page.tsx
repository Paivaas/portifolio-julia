'use client';

import '@/i18n/settings';
import Header from '@/components/section/header';
import Menu from '@/components/section/menu';
import LineUp from '@/components/section/LineUp';
import AboutMe from '@/components/section/aboutMe';
import Certifications from '@/components/section/Certifications';

import { Pointer } from '@/components/ui/pointer';

export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <Pointer />
      <Menu></Menu>
      <div className="flex flex-col gap-34">
        <Header></Header>
        <AboutMe></AboutMe>
        <LineUp></LineUp>
        <Certifications></Certifications>
      </div>
    </div>
  );
}
