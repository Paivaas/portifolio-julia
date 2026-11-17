import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { playSound } from '@/lib/sounds';

export function SenacDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();


  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col justify-end items-start sm:items-end sm:mt-4 mt-2 relative sm:bottom-9 "
    >
      <CollapsibleTrigger
        onClick={() => playSound('bubble')}
        className="flex items-center gap-2  font-medium text-end cursor-pointer"
      >
        {isOpen ? (
          <p className="text-[#a19c9e]">{t('line-up.senac.view_courses')}</p>
        ) : (
          <p className="text-black">{t('line-up.senac.view_courses')}</p>
        )}
        {isOpen ? (
          <ChevronsDownUp className="text-[#a19c9e]" size={16} />
        ) : (
          <ChevronsUpDown className="text-black" size={16} />
        )}
      </CollapsibleTrigger>

      <CollapsibleContent className="mt-4 flex flex-col gap-6 relative sm:top-4 sm:left-75 right-2">
        <div>
          <Card className="w-72 md:w-122.5 text-justify">
            <CardContent>
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">{t('line-up.senac.tab_marketing')}</TabsTrigger>
                  <TabsTrigger value="password">{t('line-up.senac.tab_tech')}</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <p>
                    {t('certifications.storytelling')}{' '}
                    <span className="text-black/40">• SENAC</span>
                  </p>
                  <p>
                    {t('certifications.social_analyst')}{' '}
                    <span className="text-black/40">• SENAC</span>
                  </p>

                  <p>
                    {t('certifications.growth')}{' '}
                    <span className="text-black/40">• Google/Santander</span>
                  </p>
                  <p>
                    {t('certifications.ai_marketing')}{' '}
                    <span className="text-black/40">• Google/Santander</span>
                  </p>

                  {/* <p>
                Inbound Marketing: estratégias e práticas{' '}
                <span className="text-black/40"> • SENAC</span>
              </p> */}
                </TabsContent>
                <TabsContent value="password">{/* TODO: cursos de tecnologia */}</TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
