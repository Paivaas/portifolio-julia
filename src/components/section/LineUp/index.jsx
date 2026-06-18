import Experience1 from "@/components/section/LineUp/Experience/1"
import Experience2 from "@/components/section/LineUp/Experience/2"
import Experience3 from "@/components/section/LineUp/Experience/3"
import Experience4 from "@/components/section/LineUp/Experience/4"
import Reveal from '@/components/ui/Reveal';
import { useTranslation } from 'react-i18next'
import { WordRotate } from "@/components/ui/word-rotate"
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";

export default function ExperienceTimeline() {
  const { t } = useTranslation();

  return (
<section className="flex gap-16 md:gap-24 w-full justify-center items-start px-6 flex-col md:p-0 md:flex-row">

      <div className="flex flex-col  md:w-120 h-full items-start md:items-start gap-4 md:gap-8 justify-end">
        <Reveal>
          <div className="bg-gray-200 w-80 md:w-120 h-60 rounded-md relative overflow-hidden">
            <Image
              src="/profile.png"
              alt="Foto de perfil"
              className="object-cover object-[50%_15%]"
              fill
            />
          </div>
        </Reveal>

        <WordRotate duration={3800}  className="text-sm  text-black dark:text-white"  words={["Experiencia em Cybersecurity", "Desenvolvedora Front-end" , "Formada em Gestão de TI" , "Estudante de Marketing"]}
        />
       
        <Reveal><h1 className="text-4xl md:text-2xl">Sobre mim:</h1></Reveal> 
        <Reveal>
          
         <p className="text-sm"> {t("about-me.content")}</p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center md:items-start">
        <div className="flex">
          <h1 className="text-4xl md:text-5xl">Line up</h1>
        </div>
        
        <Reveal><Experience1></Experience1></Reveal>
        <Reveal><Experience2></Experience2></Reveal>
        <Reveal><Experience3></Experience3></Reveal>
        <Reveal><Experience4></Experience4></Reveal>
      </div>

    </section>
  );
}