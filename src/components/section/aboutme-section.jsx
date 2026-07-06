import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { useState } from "react";
import { WordRotate } from "@/components/ui/word-rotate";
import { Highlighter } from "@/components/ui/highlighter";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BadgeCheck, BookmarkIcon } from "lucide-react"

function HoverHighlighter({ children, action, color }) {
  const [active, setActive] = useState(false);

  return (
    <span onMouseEnter={() => setActive(true)}>
      <Highlighter action={active ? action : ""} color={color}>
        {children}
      </Highlighter>
    </span>
  );
}
export default function AboutMe() {
  const { t } = useTranslation();
  const [clicado, setClicado] = useState(false);

  
  function soundOpenTabsCam() {
    const audio = new Audio('/sounds/sound-cam.mp3');
    audio.play();

    setClicado((prev) => !prev);
  }

  const Img = clicado ? "./foto-cam2.svg" : "./foto-cam.svg";


  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-8 pt-12 md:gap-12 rounded-3xl">
       <Button onClick={soundOpenTabsCam} className='cursor-pointer'> 
          <div className="relative w-64 h-64 md:w-95 md:h-75 shrink-0">
            <Image src={Img} alt="Foto de perfil" fill className="object-fit rotate-[-10deg]" />
          </div>
        </Button>
      <div className="flex flex-col gap-4 text-center md:text-left">
        {/* <h2 className="text-5xl">{t('about-me.title')}</h2> */}

        <WordRotate duration={3800} className="text-sm text-black dark:text-white" words={["Experiencia em Cybersecurity","Desenvolvedora Front-end","Formada em Gestão de TI","Estudante de Marketing"]}/>


        <Badge variant="secondary">
        {t('about.experience')}
        <BadgeCheck data-icon="inline-start"  />
      </Badge>
        <p className="text-sm text-justify w-112.5 leading-loose">
          {t('about.text.1')}
          <HoverHighlighter action="highlight" color="#FFE7F4">{t('about.text.2')}</HoverHighlighter>
          {t('about.text.3')}
          <HoverHighlighter action="underline" color="#D472A7">{t('about.text.4')}</HoverHighlighter>
          {t('about.text.5')}
          <HoverHighlighter action="underline" color="#D472A7">{t('about.text.6')}</HoverHighlighter>
          {t('about.text.7')}
          <HoverHighlighter action="" color="#FF9800">{t('about.text.8')}</HoverHighlighter>
          <HoverHighlighter action="highlight" color="#FFE7F4">{t('about.text.9')}</HoverHighlighter>
          {t('about.text.10')}
        </p>

        
      </div>
    </section>
  );
}