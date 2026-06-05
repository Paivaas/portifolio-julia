import { useTranslation } from 'react-i18next'
;import { kapakana } from '@/fonts/kapanaka'

export default function Menu() {
  const { t } = useTranslation();
  return (
     <section className="w-full flex flex-col justify-center items-center">
        <p className={`${kapakana.className} text-9xl`}>{t('header.title')}</p>
        <p>{t('header.name')}</p>
      </section>

  )}
