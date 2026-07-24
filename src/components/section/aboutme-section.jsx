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

  const Img = clicado ? "./foto-cam.svg" : "./foto-cam3.svg";


  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-8 pt-12 md:gap-12 rounded-3xl">
       <Button onClick={soundOpenTabsCam} className='cursor-pointer bg-white hover:bg-white'> 
          <div className="relative w-64 h-64 md:w-95 md:h-75 shrink-0">
            <Image src={Img} alt="Foto de perfil" fill className="object-fit rotate-[-10deg]" />
          </div>
        </Button>
      <div className="flex flex-col gap-4 text-center md:text-left">

        {/* <WordRotate duration={3800} className="text-sm text-black dark:text-white" words={["Experiencia em Cybersecurity","Desenvolvedora Front-end","Graduanda em Gestão de TI"]}/> */}

        <h1>
           {t('about.title')}
        </h1>
        <div className='flex items-center gap-2'>
          <Badge variant="secondary">
        {t('about.badge1')}
        <BadgeCheck data-icon="inline-start"  />
      </Badge>
      <Badge variant="secondary">
        {t('about.badge2')}
        <BadgeCheck data-icon="inline-start"  />
      </Badge>
        </div>
        <p className="text-sm text-justify w-152.5 leading-loose">
          {t('about.text.0')}

        </p>

         <p className="text-sm text-justify w-152.5 leading-loose">
          {t('about.text.1')}

        </p>
      </div>
    </section>
  );
}