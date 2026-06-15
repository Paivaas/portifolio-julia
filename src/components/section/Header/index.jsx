import { useTranslation } from 'react-i18next'
import { Particles } from "@/components/ui/particles"
import { TypingAnimation } from "@/components/ui/typing-animation"
import LanguageSelector from '@/i18n/LanguageSelector';

export default function Menu() {
  const { t } = useTranslation();
  return (
   <section className="w-full h-[60vh]">
    
    <div className="relative h-full w-full overflow-hidden ">
     <Particles />
     
      <div className="absolute inset-0 z-10 flex flex-col h-full justify-between pb-24 items-center">
        <menu className="w-full flex justify-between p-4">
                <p >{t('header.name')}</p>
               <LanguageSelector />
            </menu>
       <div>
         <TypingAnimation startOnView  style={{ fontFamily: "var(--font-kapakana)" }} className='text-9xl' >
          {t('header.title')}
        </TypingAnimation>
        <p className='text-zinc-700'>{t('commun.area')}</p>
       </div>
      </div>
    </div>
  </section>
  )}
