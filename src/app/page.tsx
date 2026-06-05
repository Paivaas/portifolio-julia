'use client';

import '@/i18n/settings';
import Header from '@/components/section/header';
import Menu from '@/components/section/menu';
import LineUp from '@/components/section/lineup';

export default function Home() {
  return (
    <div className="flex flex-col p-4 ">
      <Menu></Menu>
      <Header></Header>
      <LineUp></LineUp>
    </div>
  );
}
