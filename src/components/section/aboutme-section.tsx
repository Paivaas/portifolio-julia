import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Megaphone } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t } = useTranslation();
  const [clicado, setClicado] = useState(false);

  function soundOpenTabsCam() {
    const audio = new Audio('/sounds/sound-cam.mp3');
    audio.play();

    setClicado((prev) => !prev);
  }

  const Img = clicado ? './foto-cam.svg' : './foto-cam3.svg';

  return (
    <section className="flex w-85 sm:w-full max-w-7xl flex-col items-center justify-center gap-8 rounded-3xl  px-0 py-10 md:flex-row md:gap-12 md:px-10 md:py-12">
      <Button
        onClick={soundOpenTabsCam}
        className="h-auto w-auto shrink-0 cursor-pointer bg-white p-0 hover:bg-white"
      >
        <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-75 md:w-95">
          <Image src={Img} alt="Foto de perfil" fill className="object-contain rotate-[-10deg]" />
        </div>
      </Button>

      <div className="flex w-full max-w-2xl flex-col gap-4 text-center md:text-left">
        <h1>{t('about.title')}</h1>

        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
          <Badge className="bg-orange-50 text-orange-700" variant="secondary">
            {t('about.badge1')}
          </Badge>

          <Badge className="bg-orange-50 text-orange-700" variant="secondary">
            {t('about.badge2')}
            <BadgeCheck data-icon="inline-start" />
          </Badge>
        </div>

        <p className="w-full text-justify text-sm leading-loose">{t('about.text.0')}</p>

        <Badge
          className="w-fit self-center bg-pink-50 text-pink-700 md:self-start"
          variant="secondary"
        >
          {t('about.badge3')}
          <Megaphone data-icon="inline-start" />
        </Badge>

        <p className="w-full text-justify text-sm leading-loose">{t('about.text.1')}</p>
      </div>
    </section>
  );
}
