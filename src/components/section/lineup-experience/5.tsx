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
              <CardHeader>Desafio de ideias HP e SENAI</CardHeader>

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

                <CardDescription>
                  Participei do Desafio de Ideias, uma iniciativa promovida pela HP em parceria com
                  o SENAI, que proporcionou uma experiência de inovação, aprendizado e trabalho em
                  equipe. Ao lado de profissionais e estudantes, desenvolvi novas perspectivas,
                  aprimorei habilidades e tive a oportunidade de aprender com mentores durante todo
                  o processo. Como resultado, minha equipe foi vencedora do desafio, tornando essa
                  experiência ainda mais marcante para minha trajetória profissional.
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Trabalho em equipe</Badge>
                  <Badge variant="outline">Criatividade</Badge>
                  <Badge variant="outline">Inovação</Badge>
                  <Badge variant="outline">Resolução de problemas</Badge>
                  <Badge variant="outline">Pensamento estratégico</Badge>
                  <Badge variant="outline">Comunicação</Badge>
                  <Badge variant="outline">Apresentação de ideias</Badge>
                  <Badge variant="outline">Ideação</Badge>
                  <Badge variant="outline">Desenvolvimento de soluções</Badge>
                  <Badge variant="outline">Organização</Badge>
                  <Badge variant="outline">Adaptabilidade</Badge>
                  <Badge variant="outline">Proatividade</Badge>
                </div>
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
