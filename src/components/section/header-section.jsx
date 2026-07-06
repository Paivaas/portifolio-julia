import { TypingAnimation } from "@/components/ui/typing-animation"
import LanguageSelector from '@/i18n/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import CursorSparkles from "@/components/ui/CursorSparkles"
import { AuroraText } from "@/components/ui/aurora-text"
import { Highlighter } from "@/components/ui/highlighter"

export default function Menu() {
  const { t } = useTranslation();

  return (

    <CursorSparkles className='flex flex-col justify-center items-center '>
      <section className="w-full h-100 flex flex-col justify-between pb-24 items-center">

     
            <menu className="flex gap-70 p-4 text-xs">
                  <p>{t('portfolio.year')}</p>
                  <p className='text-sm font-semibold'>{t('portfolio.subtitle')}</p>
                  <LanguageSelector />
            </menu>
          
            <div className='flex flex-col items-end'>
              <TypingAnimation  startOnView className='font-semibold text-5xl md:text-9xl' >
                {t('portfolio.title')}
              </TypingAnimation>
              <p className='text-zinc-700'></p>
              <AuroraText colors={["#DE9FC1", "#AF5AAE", "#FF60B6"]} >{t('portfolio.area')}</AuroraText>
               
              <h2> {t('profile.name')}</h2>
             
          </div>
      </section>
      <ChevronDown  />
    </CursorSparkles>
  )}