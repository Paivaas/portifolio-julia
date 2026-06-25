import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { useState } from "react";
import { WordRotate } from "@/components/ui/word-rotate";
import { Highlighter } from "@/components/ui/highlighter";

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

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-8 pt-12 md:gap-12 rounded-3xl">
      <div className="relative w-64 h-64 md:w-95 md:h-75 shrink-0">
        <Image src="/foto-cam.svg" alt="Foto de perfil" fill className="object-fit rotate-[-10deg]" />
      </div>

      <div className="flex flex-col gap-4 text-center md:text-left">
        {/* <h2 className="text-5xl">{t('about-me.title')}</h2> */}

        <WordRotate duration={3800} className="text-sm text-black dark:text-white" words={["Experiencia em Cybersecurity","Desenvolvedora Front-end","Formada em Gestão de TI","Estudante de Marketing"]}/>

        <p className="text-sm text-justify w-112.5 leading-loose">
          Me chamo Julia Paiva, tenho{" "}
          <HoverHighlighter action="highlight" color="#FFE7F4">19 anos e sou de São Paulo.</HoverHighlighter>{" "}
          Iniciei meus estudos na área da tecnologia aos 16 anos com o curso técnico em{" "}
          <HoverHighlighter action="underline" color="#D472A7">Desenvolvimento de Sistemas</HoverHighlighter>{" "}
          e dei sequência quando optei por cursar{" "}
          <HoverHighlighter action="underline" color="#D472A7">Gestão da Tecnologia da Informação.</HoverHighlighter>{" "}
          Apesar de ter uma boa base e experiências práticas na área analítica,{" "}
          <HoverHighlighter action="" color="#FF9800">meu perfil é extremamente comunicativo e, acima de tudo, criativo.</HoverHighlighter>{" "}
          <HoverHighlighter action="highlight" color="#FFE7F4">Atualmente eu curso marketing</HoverHighlighter>{" "}
          para complementar meu perfil criativo com uma visão mais estratégica, voltada para comunicação.
        </p>
      </div>
    </section>
  );
}