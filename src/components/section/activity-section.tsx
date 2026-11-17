'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import Certification from '@/components/section/certification-section';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { IMG } from '@/lib/images';

// Título e descrição vêm das traduções: activities.items.<id>.title / .description
// A categoria vem de activities.categories.<category>
const activities = [
  {
    id: 'fluxo',
    org: 'Fluxo Sem Tabu',
    logo: IMG.logos.fluxo,
    banner: IMG.activities.fluxo,
    category: 'volunteering',
    badgeColor: 'bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300',
  },
  {
    id: 'senac_talk',
    org: 'SENAC',
    logo: IMG.logos.senac,
    banner: IMG.activities.senacTalk,
    category: 'talk',
    badgeColor: 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
  },
  {
    id: 'fgv',
    org: 'Fundação Getulio Vargas (FGV)',
    logo: IMG.logos.fgv,
    banner: IMG.activities.fgv,
    category: 'talk',
    badgeColor: 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
  },
  {
    id: 'npaadc',
    org: 'SENAI',
    logo: IMG.logos.senai,
    banner: IMG.hackathon.process,
    category: 'extracurricular',
    badgeColor: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
  },
  {
    id: 'idea_challenge',
    org: 'SENAI & HP',
    logo: IMG.logos.hp,
    banner: IMG.hackathon.group,
    category: 'hackathon',
    badgeColor: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  },
  {
    id: 'cyber_leader',
    org: 'SESI',
    logo: IMG.logos.sesi,
    banner: IMG.hackathon.group,
    category: 'extracurricular',
    badgeColor: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
  },
  {
    id: 'class_rep',
    org: 'SENAI',
    logo: IMG.logos.senai,
    banner: IMG.hackathon.group,
    category: 'extracurricular',
    badgeColor: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
  },
];

// 'courses' é uma categoria extra: mostra os cursos/certificações em vez dos cards de atividades
const categories = ['all', 'courses', ...new Set(activities.map((activity) => activity.category))];

export default function Activity() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredActivities =
    selectedCategory === 'all' || selectedCategory === 'courses'
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
            {t(`activities.categories.${category}`)}
          </button>
        ))}
      </div>

      {selectedCategory === 'courses' ? (
        <Certification />
      ) : (
      <div className="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredActivities.map((activity) => {
          const title = t(`activities.items.${activity.id}.title`);

          return (
            <Card key={activity.id} className="w-full max-w-96 overflow-hidden">
              <CardHeader>
                <div className="flex min-w-0 items-center gap-3">
                  <Image
                    src={activity.logo}
                    alt={t('activities.logo_alt', { org: activity.org })}
                    width={40}
                    height={40}
                    className="shrink-0 object-contain"
                  />

                  <div className="min-w-0">
                    <CardTitle className="text-sm">{title}</CardTitle>
                    <CardDescription>{activity.org}</CardDescription>
                  </div>
                </div>

                <CardAction>
                  <Badge className={activity.badgeColor}>
                    {t(`activities.categories.${activity.category}`)}
                  </Badge>
                </CardAction>
              </CardHeader>

              <CardContent>
                <div className="relative h-42 w-full overflow-hidden rounded-lg">
                  <Image
                    src={activity.banner}
                    alt={t('activities.banner_alt', { title })}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="bg-accent/20 m-2  border-t">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`activities.items.${activity.id}.description`)}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      )}

      {/* Mensagem caso não existam resultados */}
      {selectedCategory !== 'courses' && filteredActivities.length === 0 && (
        <p className="text-sm text-muted-foreground">{t('activities.empty')}</p>
      )}
    </section>
  );
}
