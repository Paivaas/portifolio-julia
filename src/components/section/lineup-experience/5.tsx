import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronsUpDown, ChevronsDownUp } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function ExperienceTimeline() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  function soundOpenCollapsible() {
    const audio = new Audio('/sounds/sound-bubble.mp3');
    audio.play();
  }

  return (
    <div className="grid gap-x-4 grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs transition-transform duration-300 ease-in-out hover:scale-105">
      <div />
      <div />
      <p>{t('line-up.5.data')}</p>

      <div />
      <p className=" text-white w-6 text-2xl h-6 rounded-full flex justify-center items-center">
        🏆
      </p>
      <h1 className="font-semibold text-sm"> {t('line-up.5.title')} </h1>

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col justify-end items-end mt-6 relative bottom-11 "
      >
        <CollapsibleTrigger
          onClick={soundOpenCollapsible}
          className="flex items-center gap-2 text-brown-800 font-medium text-end cursor-pointer"
        >
          {isOpen ? (
            <p className="text-[#a19c9e]">{t('line-up.commun.assignments2')} </p>
          ) : (
            <p className="text-brown-800">{t('line-up.commun.assignments2')} </p>
          )}
          {isOpen ? (
            <ChevronsDownUp className="text-[#a19c9e]" size={16} />
          ) : (
            <ChevronsUpDown className="text-brown-800" size={16} />
          )}
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-4 flex flex-col gap-6 relative top-10 left-130">
          <div>
            <Card className="w-72  md:w-212.5 text-justify">
              <CardHeader>{t('line-up.5.more.1.title')}</CardHeader>

              <CardContent className="space-y-2">
                <div className="flex gap-4">
                  <Image
                    src="/hs-imagem.jpg"
                    alt=""
                    width={400}
                    height={200}
                    className="w-100 h-50 rounded-sm object-cover"
                  />

                  <Image
                    src="/hs-imagem1.jpg"
                    alt="Foto de perfil"
                    width={400}
                    height={200}
                    className="w-100 h-50 rounded-sm object-cover"
                  />
                </div>

                <CardDescription>{t('line-up.5.more.1.description')}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <div className="flex justify-center items-center">
        {' '}
        <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl"></span>{' '}
      </div>
      <div>
        <span className="text-zinc-500"> {t('line-up.5.location')} </span>
        <p></p>
      </div>
    </div>
  );
}
