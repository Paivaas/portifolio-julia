import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronsDownUp, ChevronsUpDown, MoveRight } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function HackatonDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  function soundOpenCollapsible() {
    const audio = new Audio('/sounds/sound-bubble.mp3');
    audio.play();
  }

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col  sm:justify-end sm:items-end mt-2 sm:mt-6 sm:relative sm:bottom-11 "
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

      <CollapsibleContent className="mt-4 flex flex-col gap-6 relative sm:top-10 sm:left-70 right-2">
        <Card className="w-72 md:w-120.5 ">
          <CardHeader>
            <CardHeader className="p-0 m-0">{t('line-up.5.title')}</CardHeader>
            <CardDescription> {t('line-up.5.description')}</CardDescription>
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
                  {t('line-up.5.image-description1')}
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
                  {t('line-up.5.image-description2')}
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
                  {t('line-up.5.image-description3')}
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
                  {t('line-up.5.image-description4')}
                </span>
              </div>

              <Tabs defaultValue="account" className=" col-span-2 pt-2">
                <TabsList variant="line" className="w-full justify-cent4er">
                  <TabsTrigger value="account">{t('line-up.5.TabsTrigger1')}</TabsTrigger>
                  <MoveRight />

                  <TabsTrigger value="password">{t('line-up.5.TabsTrigger2')}</TabsTrigger>
                  <MoveRight />

                  <TabsTrigger value="result">{t('line-up.5.TabsTrigger3')}</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="space-y-2 text-xs sm:text-normal">
                  <p>{t('line-up.5.initial.1')}</p>
                  <p>{t('line-up.5.initial.2')} </p>

                  <div className="space-x-2">
                    <Badge className="bg-orange-50 text-orange-700 ">
                      {t('line-up.5.initial.tag1')}
                    </Badge>
                    <Badge className="bg-orange-50 text-orange-700 ">
                      {t('line-up.5.initial.tag2')}
                    </Badge>
                    <Badge className="bg-orange-50 text-orange-700 ">
                      {t('line-up.5.initial.tag3')}
                    </Badge>
                  </div>
                </TabsContent>
                <TabsContent value="password" className="space-y-2  text-xs sm:text-normal">
                  <p>{t('line-up.5.process.1')}</p>
                  <p>{t('line-up.5.process.2')}</p>

                  <div className="space-x-2">
                    <Badge className="bg-blue-50 text-blue-700 ">
                      {t('line-up.5.process.tag1')}
                    </Badge>
                    <Badge className="bg-blue-50 text-blue-700 ">
                      {t('line-up.5.process.tag2')}
                    </Badge>
                  </div>
                </TabsContent>
                <TabsContent value="result" className="space-y-2  text-xs sm:text-normal">
                  <p>{t('line-up.5.final.1')}</p>
                  <p>{t('line-up.5.final.2')}</p>
                  <div className="space-x-2">
                    <Badge className="bg-orange-50 text-orange-700 ">
                      {t('line-up.5.final.tag1')}
                    </Badge>
                    <Badge className="bg-orange-50 text-orange-700 ">
                      {t('line-up.5.final.tag2')}
                    </Badge>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}
