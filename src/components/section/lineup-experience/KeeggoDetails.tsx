import { ChevronsDownUp, ChevronsUpDown, Lightbulb, MoveRight, Trophy, Wrench } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function KeggoDetails() {
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
              <div className="grid grid-cols-2  gap-2 ">
                <div className="group relative overflow-hidden rounded-sm">
                  <Image
                    src="/details/lgpdBanner.png"
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
                    src="/details/cyberBanner.jpg"
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
                    <p> {t('line-up.3.more.1.title')}</p>
                    <p className="text-xs"> {t('line-up.3.more.1.description')}</p>

                    <p className="mt-4"> {t('line-up.3.more.2.title')}</p>
                    <p className="text-xs"> {t('line-up.3.more.2.description')}</p>
                  </TabsContent>
                  <TabsContent value="password" className="space-y-4  text-xs sm:text-normal">
                    <p>
                      Além das minhas entregas já esperadas, uma das minhas principais contribuições
                      ocorreu durante um{' '}
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="font-semibold underline decoration-dotted underline-offset-4 cursor-help">
                            RTA físico
                          </button>
                        </PopoverTrigger>

                        <PopoverContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="font-semibold">O que é um RTA físico?</h4>
                            <div className="text-sm text-muted-foreground">
                              <p>
                                RTA físico é uma simulação de ameaças reais para identificar
                                vulnerabilidades na segurança, nos processos e nas pessoas de uma
                                organização.
                              </p>
                              <p>
                                Neste projeto, o objetivo era simular um acesso não autorizado às
                                instalações e avaliar vulnerabilidades no prédio e no comportamento
                                dos colaboradores.
                              </p>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      .Diante das dificuldades enfrentadas pelo Pentester Sênior em uma etapa do
                      projeto, me ofereci para conduzir a ação de Engenharia Social. A execução foi
                      bem-sucedida, permitindo a conclusão da avaliação e garantindo resultados para
                      a entrega à liderança. Segundo o próprio responsável técnico, essa
                      contribuição foi essencial para que o projeto pudesse ser finalizado.
                    </p>
                    <div className="space-x-2 ">
                      <Badge className="bg-blue-50 text-blue-700 ">Proatividade </Badge>
                      <Badge className="bg-blue-50 text-blue-700 ">Iniciativa </Badge>
                    </div>
                  </TabsContent>
                  <TabsContent value="result" className="space-y-2  sm:text-normal">
                    <h1>Principais ferramentas usadas:</h1>
                    <p className="text-xs">
                      Darktrace • Ivanti • Privacy Tools • Kali Linux • Cisco
                    </p>

                    <h1>Aprendi na pratica:</h1>
                    <p className="text-xs">
                      LGPD • Pentest • Phishing • Engenharia Social • Segurança da Informação •
                      Privacidade e Proteção de Dados • Gestão de Vulnerabilidades • Análise de
                      Riscos • Resposta a Incidentes • Red Team Assessment (RTA) • Blue Team •
                      Monitoramento de Segurança • Detecção de Ameaças • Análise de Logs • Segurança
                      de Redes • TCP/IP • DNS • DHCP • Firewall • VPN • Controle de Acessos •
                      Segmentação de Redes • Linux • Processos e Serviços • Segurança Física
                    </p>

                    <div className="flex justify-center gap-2">
                      <Badge className="bg-blue-50 text-blue-700 ">ISO 27001 </Badge>
                      <Badge className="bg-blue-50 text-blue-700 ">ISO 27002 </Badge>
                      <Badge className="bg-blue-50 text-blue-700 ">ISO 27003 </Badge>
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
