"use client"
import { useTranslation } from 'react-i18next';

import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Projects from '@/components/section/Projects';

import AboutMe from '@/components/section/AboutMe';

import Reveal from '@/components/ui/Reveal';


export default function Info() {
  const { t } = useTranslation();

  
  function soundOpenTabs() {
    const audio = new Audio('/sounds/sound-blop.mp3');
    audio.play();
  } 
  function soundOpenTabsCam() {
    const audio = new Audio('/sounds/sound-cam.mp3');
    audio.play();
  } 

  return (
    <div className="flex justify-center items-center gap-12 ">

      <Tabs defaultValue="aboutme" className=" items-center ">
        <TabsList className="bg-white flex gap-12 ">
          <TabsTrigger  value="aboutme" onClick={soundOpenTabs}>Sobre mim </TabsTrigger>
          <TabsTrigger value="projects" onClick={soundOpenTabs}>Projetos</TabsTrigger>
          <TabsTrigger value="tools" onClick={soundOpenTabs}>Ferramentas</TabsTrigger>
        </TabsList>
        <TabsContent value="aboutme"> <Reveal>  <AboutMe />  </Reveal>  </TabsContent>
        <TabsContent value="projects"><Reveal>  <Projects />  </Reveal></TabsContent>
        <TabsContent value="tools"><Reveal>  <Projects />  </Reveal> </TabsContent>
      </Tabs>

    </div>
  )
}