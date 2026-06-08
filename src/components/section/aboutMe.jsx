import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { WordRotate } from "@/components/ui/word-rotate"

export default function AboutMe() {
  const { t } = useTranslation();
  return (
   <section className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
    <div className="relative w-64 h-64 md:w-95 md:h-75 shrink-0">
      <Image
        src="/foto-cam.svg"
        alt="Foto de perfil"
        fill
        className="object-fit rotate-[-10deg]"
      />
    </div>

    <div className="w-full max-w-150 flex flex-col gap-4 text-center md:text-left">
      <h2 className='text-6xl' >{t('about-me.title')}</h2>
      <WordRotate
      className="text-sm  text-black dark:text-white"
      words={["Experiencia em Cybersecurity", "Desenvolvedora Front-end" , "Formada em Gestão de TI" , "Estudante de Marketing"]}
    />
      <p className='text-sm' >{t('about-me.content')}</p>
    </div>
  </section>

  )}