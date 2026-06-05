import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="w-full h-[80vh] flex justify-center items-center gap-12 ">
        <div className="w-75 h-75 bg-gray-200"></div>
        <div className="w-150 flex flex-col gap-4">
          <h2>{t('about-me.title')}</h2>
          <p>{t('about-me.description')}</p>
          <p>{t('about-me.content')}</p>
        </div>
    </section>

  )}