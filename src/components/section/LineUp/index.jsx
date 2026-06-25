import Experience1 from "@/components/section/LineUp/Experience/1"
import Experience2 from "@/components/section/LineUp/Experience/2"
import Experience3 from "@/components/section/LineUp/Experience/3"
import Experience4 from "@/components/section/LineUp/Experience/4"
import Reveal from '@/components/ui/Reveal';
import { useTranslation } from 'react-i18next'
import { WordRotate } from "@/components/ui/word-rotate"
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";
import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  const { t } = useTranslation();

  return (
<section className="flex gap-16 md:gap-24 w-full justify-center items-center px-6 flex-col ">

       <h1 className="text-4xl" >Formação & Experiência</h1>
      <div className="flex flex-col  h-full items-start md:items-start gap-4 md:gap-8 justify-end ">
        
        <Reveal><Experience1></Experience1></Reveal>
        <Reveal><Experience2></Experience2></Reveal>
        <Reveal><Experience3></Experience3></Reveal>
        <Reveal><Experience4></Experience4></Reveal>
      </div>

    </section>
  );
}