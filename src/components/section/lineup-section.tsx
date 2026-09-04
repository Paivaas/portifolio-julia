import Experience1 from '@/components/section/lineup-experience/1';
import Experience2 from '@/components/section/lineup-experience/2';
import Experience3 from '@/components/section/lineup-experience/3';
import Experience4 from '@/components/section/lineup-experience/4';
import Experience5 from '@/components/section/lineup-experience/5';
import Experience6 from '@/components/section/lineup-experience/6';
import ExperienceSenac from '@/components/section/lineup-experience/7ExperienceSenac';

import Reveal from '@/components/ui/Reveal';
import { useTranslation } from 'react-i18next';

export default function ExperienceTimeline() {
  const { t } = useTranslation();

  return (
    <section className="flex gap-16 md:gap-24 w-full justify-center items-center sm:px-6 flex-col ">
      <h1 className="text-2xl sm:text-4xl">{t('line-up.commun.category')}</h1>
      <div className="flex flex-col  h-full items-start md:items-start gap-4 md:gap-8 justify-end ">
        <Reveal>
          <Experience1></Experience1>
        </Reveal>
        <Reveal>
          <Experience5></Experience5>
        </Reveal>
        <Reveal>
          <Experience2></Experience2>
        </Reveal>
        <Reveal>
          <Experience3></Experience3>
        </Reveal>
        <Reveal>
          <Experience4></Experience4>
        </Reveal>
        <Reveal>
          <ExperienceSenac />
        </Reveal>
      </div>
    </section>
  );
}
