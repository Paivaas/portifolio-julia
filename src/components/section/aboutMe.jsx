import { useTranslation } from 'react-i18next';
import Image from "next/image";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
   <section className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-6">
    <div className="relative w-64 h-64 md:w-95 md:h-75 shrink-0">
      <Image
        src="/icon-profile.jpg"
        alt="Foto de perfil"
        fill
        className="object-cover rounded-sm"
      />
      
    </div>

    <div className="w-full max-w-150 flex flex-col gap-4 text-center md:text-left">
      <h2>{t('about-me.title')}</h2>
      <p>{t('about-me.description')}</p>
      <p>{t('about-me.content')}</p>
    </div>
  </section>

  )}