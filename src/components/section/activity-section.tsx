'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
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

const activities = [
  {
    title: 'Coordenação de voluntários',
    organization: 'Fluxo Sem Tabu',
    logo: '/certification/fluxo.jpg',
    banner: '/fluxoBANNER.png',
    category: 'Voluntariado',
    badgeColor: 'bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300',
    description:
      'Atuação voluntária na ABCD Nossa Casa, em ação promovida pela ONG Fluxo Sem Tabu. Auxiliei na gestão dos voluntários e na condução de dinâmicas educativas com crianças, incentivando o respeito, os limites e o trabalho em equipe.',
  },
  {
    title: 'Habilidades para o Futuro do Trabalho na Era da IA',
    organization: 'SENAC',
    logo: '/certification/senac.png',
    banner: '/palesytraSENAC.png',
    category: 'Palestra',
    badgeColor: 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
    description:
      'Participação em palestra sobre as transformações do mercado de trabalho, as competências do futuro e o impacto da inteligência artificial nas profissões.',
  },
  {
    title: 'Marketing Day',
    organization: 'Fundação Getulio Vargas (FGV)',
    logo: '/fgv.png',
    banner: '/palestraFGV.png',
    category: 'Palestra',
    badgeColor: 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
    description:
      'Participação em evento sobre o impacto da inteligência artificial no marketing, explorando tendências, automação e as interações entre pessoas e tecnologia.',
  },
  {
    title: 'Participação no NPAADC',
    organization: 'SENAI',
    logo: '/certification/senai.png',
    banner: '/hs-imagem3.jpg',
    category: 'Extracurricular',
    badgeColor: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
    description:
      'Participação em iniciativas de prevenção e conscientização dos alunos sobre possíveis situações de risco, contribuindo para um ambiente escolar mais seguro.',
  },
  {
    title: 'Desafio de Ideias',
    organization: 'SENAI & HP',
    logo: '/certification/hp.png',
    banner: '/hs-imagem1.jpg',
    category: 'Hackathon',
    badgeColor: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    description:
      'Participação em um desafio de inovação, com foco na criação de ideias e soluções para problemas reais.',
  },
  {
    title: 'Cyber Leader',
    organization: 'SESI',
    logo: '/certification/sesi.png',
    banner: '/hs-imagem1.jpg',
    category: 'Extracurricular',
    badgeColor: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
    description:
      'Participação em um desafio de inovação, com foco na criação de ideias e soluções para problemas reais.',
  },
  {
    title: 'Representante de turma',
    organization: 'SENAI',
    logo: '/certification/senai.png',
    banner: '/hs-imagem1.jpg',
    category: 'Extracurricular',
    badgeColor: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
    description:
      'Participação em um desafio de inovação, com foco na criação de ideias e soluções para problemas reais.',
  },
];

export default function Activity() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(activities.map((activity) => activity.category))];

  const filteredActivities =
    selectedCategory === 'Todas'
      ? activities
      : activities.filter((activity) => activity.category === selectedCategory);

  return (
    <section className="flex h-fit w-full flex-col items-center justify-center gap-8 py-12">
      {/* Filtro de categorias */}
      <div className="flex w-full flex-wrap justify-center gap-2 px-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background hover:bg-muted'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards filtrados */}
      <div className="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredActivities.map((activity) => (
          <Card key={activity.title} className="w-full max-w-96 overflow-hidden">
            <CardHeader>
              <div className="flex min-w-0 items-center gap-3">
                <Image
                  src={activity.logo}
                  alt={`Logo ${activity.organization}`}
                  width={40}
                  height={40}
                  className="shrink-0 object-contain"
                />

                <div className="min-w-0">
                  <CardTitle className="text-sm">{activity.title}</CardTitle>
                  <CardDescription>{activity.organization}</CardDescription>
                </div>
              </div>

              <CardAction>
                <Badge className={activity.badgeColor}>{activity.category}</Badge>
              </CardAction>
            </CardHeader>

            <CardContent>
              <div className="relative h-42 w-full overflow-hidden rounded-lg">
                <Image
                  src={activity.banner}
                  alt={`Imagem da atividade ${activity.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="bg-accent/20 m-2  border-t">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mensagem caso não existam resultados */}
      {filteredActivities.length === 0 && (
        <p className="text-sm text-muted-foreground">
          Nenhuma atividade encontrada nessa categoria.
        </p>
      )}
    </section>
  );
}
