import { useTranslation } from 'react-i18next'
import { Particles } from "@/components/ui/particles"
import { TypingAnimation } from "@/components/ui/typing-animation"

export default function Menu() {
  const { t } = useTranslation();
  return (
   <section className="w-full h-[50vh]">
    <div className="relative h-full w-full overflow-hidden">
     <Particles />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
        <TypingAnimation startOnView  style={{ fontFamily: "var(--font-kapakana)" }} className='text-9xl' >
          {t('header.title')}
        </TypingAnimation>
        <p className='text-zinc-700'>{t('commun.area')}</p>
      </div>
    </div>
  </section>
  )}
