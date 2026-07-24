"use client"
import { useTranslation } from 'react-i18next';
import "bootstrap-icons/font/bootstrap-icons.css";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Projects from '@/components/section/projects-section';
import AboutMe from '@/components/section/aboutme-section';
import Tools from '@/components/section/tools-section';
import Reveal from '@/components/ui/Reveal';


export default function Info() {
  const { t } = useTranslation();


  function soundOpenTabs() {
    const audio = new Audio('/sounds/sound-blop.mp3');
    audio.play();
  } 
  
  return (
    <div className="flex justify-center items-center gap-12 ">

      <Tabs defaultValue="aboutme" className=" items-center ">
        <TabsList variant="line" className="bg-white flex gap-12 ">
          <TabsTrigger  value="aboutme"> {t('categories.1')} </TabsTrigger>
          <TabsTrigger value="tools">{t('categories.2')}</TabsTrigger>
          {/* <TabsTrigger value="projects">{t('categories.3')}</TabsTrigger> */}
        </TabsList>
        <TabsContent value="aboutme"> <Reveal>  <AboutMe />  </Reveal>  </TabsContent>
        <TabsContent value="tools"><Reveal>  <Tools />  </Reveal> </TabsContent>
        <TabsContent value="projects"><Reveal>  <Projects />  </Reveal> </TabsContent>
      </Tabs>

    </div>
  )
}