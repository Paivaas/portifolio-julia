import { useTranslation } from 'react-i18next';

import { CyberDetails } from '@/components/section/lineup-experience/CyberDetails';

export default function ExperienceTimeline() {
  const { t } = useTranslation();

  return (
    <div className="grid gap-x-4  grid-cols-[20px_24px_290px] sm:grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs transition-transform duration-300 ease-in-out hover:scale-105">
      <div />
      <div />
      <p>{t('line-up.4.data')}</p>

      <div />
      <p className="bg-[#DE5CA2] text-white w-6 h-6 rounded-full flex justify-center items-center">
        {' '}
        4
      </p>
      <h1 className="font-semibold text-sm"> {t('line-up.4.title')} </h1>
      <div className="block sm:hidden"></div>
      <div className="hidden sm:block">
        <CyberDetails />
      </div>
      <div className="flex justify-center items-center">
        {' '}
        {/* <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl"></span>{' '} */}
      </div>
      <div className="pb-6 sm:pb-0">
        <span className="text-zinc-500"> {t('line-up.4.location')} </span>
        <p></p>
        <div className="block sm:hidden">
          {' '}
          <CyberDetails />
        </div>
      </div>
    </div>
  );
}
