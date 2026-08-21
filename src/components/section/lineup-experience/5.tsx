import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronsUpDown, ChevronsDownUp, Podium, Trophy } from 'lucide-react';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      <p className="text-white w-6 text-2xl h-6 rounded-full flex justify-center items-center">
        🏆
      </p>

      <h1 className="font-semibold text-sm">{t('line-up.5.title')}</h1>

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col justify-end items-end mt-6 relative bottom-11"
      >
        <CollapsibleTrigger
          onClick={soundOpenCollapsible}
          className="flex items-center gap-2 text-brown-800 font-medium text-end cursor-pointer"
        >
          {isOpen ? (
            <p className="text-[#a19c9e]">{t('line-up.commun.assignments2')}</p>
          ) : (
            <p className="text-brown-800">{t('line-up.commun.assignments2')}</p>
          )}

          {isOpen ? (
            <ChevronsDownUp className="text-[#a19c9e]" size={16} />
          ) : (
            <ChevronsUpDown className="text-brown-800" size={16} />
          )}
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-4 flex flex-col gap-6 relative top-10 left-70">
          <Card className="w-72 md:w-120.5 ">
            <CardHeader>
              <CardHeader className="p-0 m-0">{t('line-up.5.more.1.title')}</CardHeader>
              <CardDescription> Do planejamento até o primeiro lugar!</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 ">
                <div className="group relative overflow-hidden rounded-sm">
                  <Image
                    src="/hs-imagem.jpg"
                    alt="Imagem da experiência"
                    width={800}
                    height={400}
                    className="w-full h-30 rounded-sm object-cover"
                  />

                  <span className=" absolute inset-0 flex items-end text-start p-4 bg-black/50  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Coffe talk: Ricardo Kamel Managing Director, HP
                  </span>
                </div>

                <div className="group relative overflow-hidden rounded-sm">
                  <Image
                    src="/hs-imagem3.jpg"
                    alt="Imagem da experiência"
                    width={800}
                    height={400}
                    className="w-full h-30 rounded-sm object-cover"
                  />

                  <span className=" absolute inset-0 flex items-end text-start p-4 bg-black/50  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Processo de organização e criação do grupo
                  </span>
                </div>

                <div className="group relative overflow-hidden rounded-sm">
                  <Image
                    src="/hs-imagem1.jpg"
                    alt="Imagem da experiência"
                    width={800}
                    height={400}
                    className="w-full h-30 rounded-sm object-cover"
                  />

                  <span className=" absolute inset-0 flex items-end text-start p-4 bg-black/50  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Foto em grupo com todos os participantes
                  </span>
                </div>

                <div className="group relative overflow-hidden rounded-sm">
                  <Image
                    src="/hs-imagem2.jpg"
                    alt="Imagem da experiência"
                    width={800}
                    height={400}
                    className="w-full h-30 rounded-sm object-cover"
                  />

                  <span className=" absolute inset-0 flex items-end text-start p-4 bg-black/50  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Avaliadora: Regina Higa Operations Manager,HP
                  </span>
                </div>

                <Tabs className=" col-span-2 pt-2">
                  <TabsList variant="line" className="w-full justify-cent4er">
                    <TabsTrigger value="account">Desafio</TabsTrigger>
                    <TabsTrigger value="password">Processo</TabsTrigger>
                    <TabsTrigger value="result">Resultado</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="space-y-2">
                    <p>
                      O desafio já começou na montagem dos grupos, reunindo alunos de duas escolas
                      diferentes. O primeiro obstáculo foi trabalhar com pessoas que eu ainda não
                      conhecia e entender como seria a dinâmica e a organização do grupo.
                    </p>
                    <p>
                      A proposta principal era solucionar um problema de comunicação que a HP tinha
                      com os clientes em relação ao suporte dos produtos. A nossa solução consistiu
                      na criação de um meio de comunicação acessível, baseado em uma abordagem
                      omnichannel, que possibilitasse oferecer suporte mais eficiente e otimizado
                      para todos os consumidores da HP.
                    </p>

                    <div className="space-x-2">
                      <Badge className="bg-orange-50 text-orange-700 ">Inovação </Badge>
                      <Badge className="bg-orange-50 text-orange-700 ">Trabalho em equipe </Badge>
                      <Badge className="bg-orange-50 text-orange-700 ">Tecnologia </Badge>
                    </div>
                  </TabsContent>
                  <TabsContent value="password" className="space-y-2 ">
                    <p>
                      Foram quatro dias intensos de produção, seguidos por um dia dedicado à
                      apresentação do projeto. Durante esse período, passamos por diferentes etapas
                      de planejamento, pesquisa e desenvolvimento, organizando mapas de ideias,
                      definindo prioridades e compartilhando conhecimentos entre os integrantes do
                      grupo.
                    </p>

                    <p>
                      Ao longo de todo o processo, também contamos com o acompanhamento de
                      representantes da HP e dos professores, que estiveram presentes para orientar,
                      acompanhar nossa evolução e contribuir com diferentes perspectivas.
                    </p>

                    <div className="space-x-2">
                      <Badge className="bg-blue-50 text-blue-700 ">Planejamento </Badge>
                      <Badge className="bg-blue-50 text-blue-700 ">Coocriação </Badge>
                    </div>
                  </TabsContent>
                  <TabsContent value="result" className="space-y-2 ">
                    <p>
                      Ao final, fomos vencedores, o que nos proporcionou uma experiência ainda mais
                      próxima da HP. Tivemos a oportunidade de conhecer sua fábrica, centro de
                      reciclagem, áreas de P&D e laboratórios, além de participar de um Coffee Talk
                      com Ricardo Kamel, MD da HP Brasil, e seu time de diretores.
                    </p>
                    <p>
                      Foi uma oportunidade de apresentar nossa ideia, conhecer diferentes áreas da
                      empresa e entender, na prática, como a HP trabalha para desenvolver suas
                      soluções.
                    </p>

                    <div className="space-x-2">
                      <Badge className="bg-orange-50 text-orange-700 ">Conquista </Badge>
                      <Badge className="bg-orange-50 text-orange-700 ">Experiencia </Badge>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      <div className="flex justify-center items-center">
        <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl" />
      </div>

      <div>
        <span className="text-zinc-500">{t('line-up.5.location')}</span>
        <p />
      </div>
    </div>
  );
}
