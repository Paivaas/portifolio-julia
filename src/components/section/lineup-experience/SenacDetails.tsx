import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function SenacDetails() {
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
      className="flex flex-col justify-end items-start sm:items-end sm:mt-4 mt-2 relative sm:bottom-9 "
    >
      <CollapsibleTrigger
        onClick={soundOpenCollapsible}
        className="flex items-center gap-2  font-medium text-end cursor-pointer"
      >
        {isOpen ? (
          <p className="text-[#a19c9e]">Ver cursos</p>
        ) : (
          <p className="text-black">Ver cursos</p>
        )}
        {isOpen ? (
          <ChevronsDownUp className="text-[#a19c9e]" size={16} />
        ) : (
          <ChevronsUpDown className="text-black" size={16} />
        )}
      </CollapsibleTrigger>

      <CollapsibleContent className="mt-4 flex flex-col gap-6 relative sm:top-10 sm:left-75 right-2">
        <div>
          <Card className="w-72 md:w-122.5 text-justify">
            <CardContent>
              <p>
                {' '}
                Storytelling e Storydoing como Estratégia de Comunicação{' '}
                <span className="text-black/40">• SENAC</span>
              </p>
              <p>
                Analista de Marketing em Mídias Sociais{' '}
                <span className="text-black/40">• SENAC</span>
              </p>

              <p>
                Estratégia de growth marketing{' '}
                <span className="text-black/40">• Google/Santander</span>
              </p>
              <p>
                IA Prática para o Marketing{' '}
                <span className="text-black/40">• Google/Santander</span>
              </p>

              {/* <p>
                Inbound Marketing: estratégias e práticas{' '}
                <span className="text-black/40">• SENAC</span>
              </p> */}
            </CardContent>
          </Card>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
