import { div } from 'framer-motion/client';
import { useTranslation } from 'react-i18next';

export default function Experience1() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="grid gap-x-4 grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs transition-transform duration-300 ease-in-out hover:scale-105">
        <div />
        <div />
        <p>2027 Janeiro - 2030 Dezembro</p>

        <div />
        <p className="bg-black text-white w-6 h-6 rounded-full flex justify-center items-center">
          {' '}
          5
        </p>
        <h1 className="font-semibold text-sm"> Graduação - Marketing </h1>

        <div />
        <div className="flex justify-center items-center">
          {' '}
          <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl"></span>{' '}
        </div>
        <div>
          <span className="text-zinc-500"> Fatec </span>
          <p> {t('line-up.2.description')}</p>
        </div>
      </div>

      {/* <div className="grid gap-x-4 grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs transition-transform duration-300 ease-in-out hover:scale-105">
        <div />
        <div />
        <p>2027 Janeiro - 2030 Dezembro</p>

        <div />
        <p className="bg-black text-white w-6 h-6 rounded-full flex justify-center items-center">
          {' '}
          6
        </p>
        <h1 className="font-semibold text-sm"> Curso técnico - Publicidade </h1>

        <div />
        <div className="flex justify-center items-center"></div>
        <div>
          <span className="text-zinc-500"> Fatec </span>
          <p> {t('line-up.2.description')}</p>
        </div>
      </div> */}

      <div className="grid gap-x-4 grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs transition-transform duration-300 ease-in-out hover:scale-105">
        <div />
        <div />
        <p>2028 Julho - 2028 Setembro</p>

        <div />
        <p className=" text-white text-2xl w-6 h-6 rounded-full flex justify-center items-center">
          ✈️
        </p>
        <h1 className="font-semibold text-sm"> intercâmbio profissionalizante - VET </h1>

        <div />
        <div className="flex justify-center items-center"></div>
        <div>
          <span className="text-zinc-500"> Italia / Malta </span>
          <p> {t('line-up.2.description')}</p>
        </div>
      </div>
    </div>
  );
}
