"use client"
import { useTranslation } from 'react-i18next';

import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Projects from '@/components/section/Projects';

import AboutMe from '@/components/section/AboutMe';



export default function Info() {
  const { t } = useTranslation();

  
   function soundCam() {
    const audio = new Audio('/sounds/sound-cam.mp3');
    audio.play();
  } 

  return (
    <div className="flex justify-center items-center gap-12 ">

      <Tabs defaultValue="account" className=" items-center ">
        <TabsList className="bg-white flex gap-12">
          <TabsTrigger onClick={soundCam} value="aboutme">Sobre mim </TabsTrigger>
          <TabsTrigger value="projects">Projetos</TabsTrigger>
          <TabsTrigger value="tools">Ferramentas</TabsTrigger>
        </TabsList>
        <TabsContent value="aboutme"> <AboutMe />  </TabsContent>
        <TabsContent value="projects"> <Projects /> </TabsContent>
        <TabsContent value="tools"> <Projects /> </TabsContent>
      </Tabs>

    </div>
  )
}