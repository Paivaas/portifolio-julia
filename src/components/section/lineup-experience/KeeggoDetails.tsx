import { ChevronsDownUp, ChevronsUpDown, Lightbulb, Wrench } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { IMG } from '@/lib/images';
import { playSound } from '@/lib/sounds';

const IMAGE_SIZES = '(min-width: 768px) 220px, 140px';

export function KeggoDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const badges = t('details.keeggo.badges', { returnObjects: true }) as string[];

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col justify-end sm:items-end  mt-2 sm:mt-6 relative sm:bottom-11 "
    >
      <CollapsibleTrigger
        onClick={() => playSound('bubble')}
        className="flex items-center gap-2 text-[#DE5CA2] font-medium text-end cursor-pointer"
      >
        {isOpen ? (
          <p className="text-[#a19c9e]">{t('line-up.commun.assignments1')} </p>
        ) : (
          <p className="text-[#DE5CA2]">{t('line-up.commun.assignments1')} </p>
        )}
        {isOpen ? (
          <ChevronsDownUp className="text-[#a19c9e]" size={16} />
        ) : (
          <ChevronsUpDown className="text-[#DE5CA2]" size={16} />
        )}
      </CollapsibleTrigger>

      <CollapsibleContent className="mt-4 flex flex-col gap-6 relative sm:top-10 sm:left-70 right-2">
        <div>
          <Card className="w-72 md:w-112.5 text-justify">
            <CardContent>
              <div className="grid grid-cols-2  gap-2 ">
                <div className="group relative overflow-hidden rounded-sm">
                  <Image
                    src={IMG.keeggo.lgpd}
                    alt={t('details.image_alt')}
                    width={800}
                    height={400}
                    sizes={IMAGE_SIZES}
                    className="w-full h-30 rounded-sm object-cover"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-sm">
                  <Image
                    src={IMG.keeggo.cyber}
                    alt={t('details.image_alt')}
                    width={800}
                    height={400}
                    sizes={IMAGE_SIZES}
                    className="w-full h-30 rounded-sm object-cover"
                  />
                </div>

                <Tabs defaultValue="account" className=" col-span-2 pt-2">
                  <TabsList variant="line" className="w-full justify-center">
                    <TabsTrigger value="account" className="text-xs">
                      {t('details.tabs.duties')}
                    </TabsTrigger>

                    <TabsTrigger value="password" className="text-xs sm:tex-normal">
                      <Lightbulb className="hidden sm:block" />
                      {t('details.tabs.contributions')}
                    </TabsTrigger>

                    <TabsTrigger value="result" className="text-xs sm:tex-normal">
                      <Wrench className="hidden sm:block" />
                      {t('details.tabs.tools')}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="account" className="space-y-2 text-sm sm:text-normal">
                    <p> {t('line-up.3.more.1.title')}</p>
                    <p className="text-xs"> {t('line-up.3.more.1.description')}</p>

                    <p className="mt-4"> {t('line-up.3.more.2.title')}</p>
                    <p className="text-xs"> {t('line-up.3.more.2.description')}</p>
                  </TabsContent>

                  <TabsContent value="password" className="space-y-4  text-xs sm:text-normal">
                    <p>
                      {t('details.keeggo.contrib_before')}
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="font-semibold underline decoration-dotted underline-offset-4 cursor-help">
                            {t('details.keeggo.rta_label')}
                          </button>
                        </PopoverTrigger>

                        <PopoverContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="font-semibold">{t('details.keeggo.rta_title')}</h4>
                            <div className="text-sm text-muted-foreground">
                              <p>{t('details.keeggo.rta_p1')}</p>
                              <p>{t('details.keeggo.rta_p2')}</p>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      {t('details.keeggo.contrib_after')}
                    </p>
                    <div className="space-x-2 ">
                      {badges.map((badge) => (
                        <Badge key={badge} className="bg-blue-50 text-blue-700 ">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="result" className="space-y-2  sm:text-normal">
                    <h1>{t('details.tools_used')}</h1>
                    <p className="text-xs">{t('details.keeggo.tools_list')}</p>

                    <h1>{t('details.learned')}</h1>
                    <p className="text-xs">{t('details.keeggo.learned_list')}</p>

                    <div className="flex justify-center gap-2">
                      <Badge className="bg-blue-50 text-blue-700 ">ISO 27001</Badge>
                      <Badge className="bg-blue-50 text-blue-700 ">ISO 27002</Badge>
                      <Badge className="bg-blue-50 text-blue-700 ">ISO 27003</Badge>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
