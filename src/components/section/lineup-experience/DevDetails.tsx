import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function DevDetails() {
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
      className="flex flex-col justify-end sm:items-end  mt-2 sm:mt-6 relative sm:bottom-11 "
    >
      <CollapsibleTrigger
        onClick={soundOpenCollapsible}
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
              <p> {t('line-up.3.more.1.title')}</p>
              <p className="text-xs"> {t('line-up.3.more.1.description')}</p>

              <p className="mt-4"> {t('line-up.3.more.2.title')}</p>
              <p className="text-xs"> {t('line-up.3.more.2.description')}</p>
            </CardContent>
          </Card>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
