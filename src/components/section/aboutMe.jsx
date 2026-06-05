import { useTranslation } from 'react-i18next';
import Image from "next/image";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="w-full h-[80vh] flex justify-center items-center gap-12 ">
        <div className="relative w-95 h-75 ">
          <Image
            src="/icon-profile.jpg"
            alt="Foto de perfil"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="w-150 flex flex-col gap-4">
          <h2>{t('about-me.title')}</h2>
          <p>{t('about-me.description')}</p>
          <p>{t('about-me.content')}</p>
        </div>
    </section>

  )}