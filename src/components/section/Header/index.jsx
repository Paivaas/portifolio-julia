import { useTranslation } from 'react-i18next'
import { Particles } from "@/components/ui/particles"
import { TypingAnimation } from "@/components/ui/typing-animation"
import LanguageSelector from '@/i18n/LanguageSelector';
import { SparklesText } from '@/components/ui/sparkles-text';
import { ChevronDown } from 'lucide-react';
import CursorSparkles from "@/components/ui/CursorSparkles"

export default function Menu() {
  const { t } = useTranslation();
  return (
    <CursorSparkles className='flex flex-col justify-center items-center'>
      <section className="w-full h-[60vh]">
        
        <div className="relative h-full w-full overflow-hidden ">
        
          <div className="absolute inset-0 z-10 flex flex-col h-full justify-between pb-24 items-center">
            <menu className="w-full flex justify-evenly p-4 text-xs">
                  <p>2026</p>
                  <p className='text-sm font-semibold'>Bem vindo(a) ao meu:</p>
                  <LanguageSelector />
            </menu>
            <div className='flex flex-col items-end'>
              <TypingAnimation startOnView className='font-semibold text-5xl md:text-9xl' >
                {t('header.title')}
              </TypingAnimation>
              <p className='text-zinc-700'>{t('commun.area')}</p>
              <SparklesText colors={{ first: '#F4CE61', second: '#DE9FC1' }} className="font-semibold text-sm md:text-2xl" >Julia Paiva de Oliveira</SparklesText>
             
            </div>
          </div>
        </div>
      </section>
      <ChevronDown />
    </CursorSparkles>
  )}
