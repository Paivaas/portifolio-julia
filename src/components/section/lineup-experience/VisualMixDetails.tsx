import { ChevronsDownUp, ChevronsUpDown, Lightbulb, Wrench } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function VisualMixDetails() {
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
                    src="/details/react.png"
                    alt="Imagem da experiência"
                    width={800}
                    height={400}
                    className="w-full h-30 rounded-sm object-cover"
                  />

                  {/* <span className=" absolute inset-0 flex items-end text-start p-4 bg-black/50  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t('line-up.5.image-description1')}
                  </span> */}
                </div>

                <div className="group relative overflow-hidden rounded-sm">
                  <Image
                    src="/details/react2.jpg"
                    alt="Imagem da experiência"
                    width={800}
                    height={400}
                    className="w-full h-30 rounded-sm object-cover"
                  />

                  {/* <span className=" absolute inset-0 flex items-end text-start p-4 bg-black/50  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t('line-up.5.image-description2')}
                  </span> */}
                </div>

                <Tabs defaultValue="account" className=" col-span-2 pt-2">
                  <TabsList variant="line" className="w-full justify-center">
                    <TabsTrigger value="account" className="text-xs">
                      Atribuições
                    </TabsTrigger>

                    <TabsTrigger value="password" className="text-xs sm:tex-normal">
                      {' '}
                      <Lightbulb className="hidden sm:block" />
                      Contribuições
                    </TabsTrigger>

                    <TabsTrigger value="result" className="text-xs sm:tex-normal">
                      {' '}
                      <Wrench className="hidden sm:block" />
                      Ferramentas
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="space-y-2 text-sm sm:text-normal">
                    <p> {t('line-up.4.more.1.title')}</p>
                    <p className="text-xs"> {t('line-up.4.more.1.description')}</p>

                    <p className="mt-4"> {t('line-up.4.more.2.title')}</p>
                    <p className="text-xs"> {t('line-up.4.more.2.description')}</p>
                  </TabsContent>
                  <TabsContent value="password" className="space-y-4  text-xs sm:text-normal">
                    <div className="space-x-2 space-y-2 ">
                      <div>
                        Atuei no time de Inovação e Desenvolvimento da empresa, onde tive a
                        oportunidade de criar e apresentar aplicações web como soluções para
                        melhorar processos internos. Entre as minhas contribuições, desenvolvi a
                        ferramenta RDV, uma aplicação que impacta diretamente os setores de
                        Implantação e Administração da empresa.{' '}
                        <p>
                          O RDV foi desenvolvido para facilitar o gerenciamento dos custos
                          relacionados a viagens corporativas. A ferramenta permite registrar e
                          organizar notas e gastos realizados durante a viagem, além de reunir os
                          comprovantes em um único lugar. Ao final, é possível exportar os
                          comprovantes e gerar automaticamente uma planilha com as informações
                          organizadas, facilitando o envio e a análise dos dados pelo setor
                          administrativo.
                        </p>
                      </div>
                      <Badge className="bg-blue-50 text-blue-700 ">Inovação </Badge>
                      <Badge className="bg-blue-50 text-blue-700 ">Automação </Badge>
                    </div>
                  </TabsContent>
                  <TabsContent value="result" className="space-y-2  sm:text-normal">
                    <h1>Principais ferramentas usadas:</h1>
                    <p className="text-xs">
                      React • Node.js • TypeScript • Tailwind CSS • Figma • Git • VS Code • Postman
                    </p>

                    <h1>Bibliotecas e conceitos aprendidos:</h1>
                    <p className="text-xs">
                      React Hooks • Props • State • Context API • React Router • APIs REST • Axios •
                      Fetch API • Zod • Zustand • React Hook Form • shadcn/ui • Lucide React • Clean
                      Architecture • TypeScript • Git • Versionamento de Código • Consumo de APIs •
                      JSON • HTTP • CRUD • Autenticação • Validação de Formulários • Gerenciamento
                      de Estado • Componentes Reutilizáveis
                    </p>
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
