import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

import { useTranslation } from 'react-i18next';

export default function Certification() {
  const { t } = useTranslation();
  return (
    <section className="w-90 sm:w-full flex flex-col gap-8 py-12 justify-center h-fit  items-center">
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <div>
                <Image src={`/certification/santander.png`} alt="oi" width={40} height={40} />
              </div>{' '}
              <div>
                <CardTitle className="text-sm">IA Prática para o Marketing</CardTitle>
                <CardDescription>Google & santander</CardDescription>
              </div>
            </div>
            <CardAction>2h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <Image src={`/certification/santander.png`} alt="oi" width={40} height={40} />
              <div>
                <CardTitle className="text-sm">Estratégia de growth marketing</CardTitle>
                <CardDescription>Google & santander</CardDescription>
              </div>
            </div>
            <CardAction>8h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <Image src={`/certification/orango.jpg`} alt="oi" width={40} height={40} />
              <div>
                <CardTitle className="text-sm">Design Criativo: Tipos e formas</CardTitle>
                <CardDescription>Orango</CardDescription>
              </div>
            </div>
            <CardAction>10h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <div className="w-10 h-10">
                <Image src={`/certification/orango.jpg`} alt="oi" width={40} height={40} />
              </div>{' '}
              <div>
                <CardTitle className="text-sm">
                  Gestão ágil de projetos com Scrum e Kanban{' '}
                </CardTitle>
                <CardDescription>Orango</CardDescription>
              </div>
            </div>
            <CardAction>12h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <div className="w-15 h-15">
                <Image src={`/certification/senac.png`} alt="oi" width={40} height={40} />
              </div>
              <div>
                <CardTitle className="text-sm">
                  {' '}
                  Storytelling e Storydoing como Estratégia de Comunicação
                </CardTitle>
                <CardDescription>Senac</CardDescription>
              </div>
            </div>
            <CardAction>36h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <div className="w-10 h-10">
                <Image src={`/certification/senac.png`} alt="oi" width={40} height={40} />
              </div>
              <div>
                <CardTitle className="text-sm">Analista de Marketing em Mídias Sociais</CardTitle>
                <CardDescription>Senac</CardDescription>
              </div>
            </div>
            <CardAction>48h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <div className="w-10 h-10">
                <Image src={`/senai.png`} alt="oi" width={40} height={40} />
              </div>{' '}
              <div>
                <CardTitle className="text-sm">Privacidade e proteção de dados(LGPD)</CardTitle>
                <CardDescription>Senai</CardDescription>
              </div>
            </div>
            <CardAction>4h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <Image src={`/certification/senai.png`} alt="oi" width={40} height={40} />
              <div>
                <CardTitle className="text-sm">Redes Sociais na Indústria</CardTitle>
                <CardDescription>SENAI</CardDescription>
              </div>
            </div>
            <CardAction>8h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <Image src={`/senai.png`} alt="oi" width={40} height={40} />
              <div>
                <CardTitle className="text-sm">Fundamentos do Marketing Digital</CardTitle>
                <CardDescription>SENAI</CardDescription>
              </div>
            </div>
            <CardAction>12h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <Image src={`/senai.png`} alt="oi" width={40} height={40} />
              <div>
                <CardTitle className="text-sm">Design Thinking</CardTitle>
                <CardDescription>SENAI</CardDescription>
              </div>
            </div>
            <CardAction>4h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <Image src={`/senai.png`} alt="oi" width={40} height={40} />
              <div>
                <CardTitle className="text-sm">Excel Básico</CardTitle>
                <CardDescription>Senai</CardDescription>
              </div>
            </div>
            <CardAction>20h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <Image src={`/senai.png`} alt="oi" width={40} height={40} />
              <div>
                <CardTitle className="text-sm">Estilos de Gestão e Liderança </CardTitle>
                <CardDescription>Senai</CardDescription>
              </div>
            </div>
            <CardAction>12h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <Image src={`/senai.png`} alt="oi" width={40} height={40} />
              <div>
                <CardTitle className="text-sm"> Por dentro da segurança cibernética</CardTitle>
                <CardDescription>Senai</CardDescription>
              </div>
            </div>
            <CardAction>4h</CardAction>
          </CardHeader>
        </Card>

        <Card className="w-96">
          <CardHeader>
            <div className="flex justify-beetween gap-2">
              <div className="w-10 h-10">
                <Image src={`/senai.png`} alt="oi" width={40} height={40} />
              </div>{' '}
              <div>
                <CardTitle className="text-sm">Tecnologia da Informação e comunicação</CardTitle>
                <CardDescription>Senai</CardDescription>
              </div>
            </div>
            <CardAction>8h</CardAction>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}

// • Storytelling e Storydoing como Estratégia de Comunicação • 36h – SENAC (Cursando)
// // • Analista de Marketing em Mídias Sociais • 48h – SENAC (Cursando)
// • Privacidade e proteção de dados(LGPD) • 4h – SENAI (Concluído)
// • Regulamentação da LGPD e atuação da ANPD • 4h – SENAI (Concluído)
// Por dentro da segurança cibernética • 4h – SENAI (Concluído)
// • Competência Transversal – Tecnologia da Informação e comunicação • 8h – SENAI (Concluído)
