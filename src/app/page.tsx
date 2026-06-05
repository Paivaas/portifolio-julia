'use client';

import '@/i18n/settings';
import Header from '@/components/section/header';
import Menu from '@/components/section/menu';
import LineUp from '@/components/section/LineUp';
import AboutMe from '@/components/section/aboutMe';

export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <Menu></Menu>
      <Header></Header>
      <AboutMe></AboutMe>
      <LineUp></LineUp>
    </div>
  );
}
