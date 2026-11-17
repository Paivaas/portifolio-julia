import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { IMG } from '@/lib/images';

// O título de cada curso vem das traduções: certifications.<id>
// `detail` (opcional): período e descrição, vindos de line-up.senac.<detail> (cursos do Senac em andamento)
const certifications: {
  id: string;
  org: string;
  logo: string;
  hours: string;
  detail?: 'storytelling' | 'social';
}[] = [
  { id: 'ai_marketing', org: 'Google & Santander', logo: IMG.logos.santander, hours: '2h' },
  { id: 'growth', org: 'Google & Santander', logo: IMG.logos.santander, hours: '8h' },
  { id: 'creative_design', org: 'Orango', logo: IMG.logos.orango, hours: '10h' },
  { id: 'agile', org: 'Orango', logo: IMG.logos.orango, hours: '12h' },
  { id: 'storytelling', org: 'SENAC', logo: IMG.logos.senac, hours: '36h', detail: 'storytelling' },
  { id: 'social_analyst', org: 'SENAC', logo: IMG.logos.senac, hours: '48h', detail: 'social' },
  { id: 'lgpd', org: 'SENAI', logo: IMG.logos.senai, hours: '4h' },
  { id: 'social_industry', org: 'SENAI', logo: IMG.logos.senai, hours: '8h' },
  { id: 'digital_marketing', org: 'SENAI', logo: IMG.logos.senai, hours: '12h' },
  { id: 'design_thinking', org: 'SENAI', logo: IMG.logos.senai, hours: '4h' },
  { id: 'excel', org: 'SENAI', logo: IMG.logos.senai, hours: '20h' },
  { id: 'leadership', org: 'SENAI', logo: IMG.logos.senai, hours: '12h' },
  { id: 'cyber', org: 'SENAI', logo: IMG.logos.senai, hours: '4h' },
  { id: 'ict', org: 'SENAI', logo: IMG.logos.senai, hours: '8h' },
];

export default function Certification() {
  const { t } = useTranslation();

  return (
    <section className="w-90  sm:w-full flex flex-col gap-8 py-12 justify-center h-fit  items-center">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {certifications.map(({ id, org, logo, hours, detail }) => (
          <Card key={id} className="w-94 sm:w-96">
            <CardHeader>
              <div className="flex gap-2">
                <div className="w-10 h-10 shrink-0">
                  <Image
                    src={logo}
                    alt={t('certifications.logo_alt', { org })}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <CardTitle className="text-sm">{t(`certifications.${id}`)}</CardTitle>
                  <CardDescription>{org}</CardDescription>
                </div>
              </div>
              <CardAction>{hours}</CardAction>
            </CardHeader>
            {detail && (
              <CardContent className="flex flex-col gap-1">
                <p className="text-xs font-medium">{t(`line-up.senac.${detail}.data`)}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`line-up.senac.${detail}.description`)}
                </p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
