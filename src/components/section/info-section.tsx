'use client';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

import AboutMe from '@/components/section/aboutme-section';
import Reveal from '@/components/ui/Reveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import AppGameTeste from '@/components/section/projects/PageGame';

// Abas que não aparecem na primeira dobra são carregadas só quando necessárias (code splitting)
const Tools = dynamic(() => import('@/components/section/tools-section'));
const Activity = dynamic(() => import('@/components/section/activity-section'));

export default function Info() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center gap-12">
      <Tabs defaultValue="aboutme" className=" items-center ">
        <TabsList variant="line" className="bg-white flex gap-12 ">
          <TabsTrigger value="aboutme">{t('tabs.about')}</TabsTrigger>
          <TabsTrigger value="tools">{t('tabs.tools')}</TabsTrigger>
          <TabsTrigger value="activity">{t('tabs.activities')}</TabsTrigger>
          {/* <TabsTrigger value="projects">{t('tabs.projects')}</TabsTrigger> */}
        </TabsList>

        <TabsContent value="aboutme">
          <Reveal>
            <AboutMe />
          </Reveal>
        </TabsContent>

        <TabsContent value="tools">
          <Reveal>
            <Tools />
          </Reveal>
        </TabsContent>

        <TabsContent value="activity">
          <Reveal>
            <Activity />
          </Reveal>
        </TabsContent>

        {/* <TabsContent value="projects">
          <Reveal>
            <AppGameTeste />
          </Reveal>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
