import { useTranslation } from 'react-i18next'
;import { kapakana } from '@/fonts/kapanaka'
import { Particles } from "@/components/ui/particles"

export default function Menu() {
  const { t } = useTranslation();
  return (
   <section className="w-full h-[50vh]">
  <div className="relative h-full w-full overflow-hidden">
    <Particles />

    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
      <p className={`${kapakana.className} text-9xl`}>
        {t('header.title')}
      </p>
      <p>{t('header.name')}</p>
    </div>
  </div>
</section>
  )}
