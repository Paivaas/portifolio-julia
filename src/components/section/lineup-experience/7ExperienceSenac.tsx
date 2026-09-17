import { SenacDetails } from '@/components/section/lineup-experience/SenacDetails';
import { div } from 'framer-motion/client';
import { useTranslation } from 'react-i18next';

export default function ExperienceSenac() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="grid gap-x-4 grid-cols-[20px_24px_290px] sm:grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs transition-transform duration-300 ease-in-out hover:scale-105">
        <div />
        <div />
        <p>2026 Agosto - Cursando</p>

        <div />
        <p className="text-2xl text-white w-6 h-6 rounded-full flex justify-center items-center">
          {' '}
          🎓
        </p>
        <h1 className="font-semibold text-sm">
          {' '}
          Curso - Storytelling e Storydoing como Estratégia de Comunicação
        </h1>

        <div />
        <div className="flex justify-center items-center">
          {' '}
          <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl"></span>{' '}
        </div>
        <div className="pb-6 sm:pb-0">
          <span className="text-zinc-500"> Senac </span>
          <p>
            Curso voltado a criação de narrativas para promover pessoas, marcas, produtos ou
            serviços.
          </p>
        </div>
      </div>

      <div className="grid gap-x-4 grid-cols-[20px_24px_290px] sm:grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs transition-transform duration-300 ease-in-out hover:scale-105">
        <div />
        <div />
        <p>2026 Setembro - Cursando</p>

        <div />
        <p className="text-2xl text-white w-6 h-6 rounded-full flex justify-center items-center">
          {' '}
          🎓
        </p>
        <h1 className="font-semibold text-sm"> Curso - Analista de Marketing em Mídias Sociais</h1>

        <div />
        <div className="flex justify-center items-center">
          {' '}
          {/* <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl"></span>{' '} */}
        </div>
        <div className="pb-6 sm:pb-0">
          <span className="text-zinc-500"> Senac </span>
          <p>
            Curso voltado a criação de conteúdo para redes sociais, uso de ferramentas,
            estruturação, execução e monitoramento de campanhas de marketing em mídias sociais.
          </p>
        </div>
      </div>
    </div>
  );
}

// <>
//   <div className="grid gap-x-4  grid-cols-[20px_24px_290px] sm:grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs transition-transform duration-300 ease-in-out hover:scale-105">
//     <div />
//     <div />
//     <p> </p>

//     <div />
//     <p className="text-2xl text-white w-6 h-6 rounded-full flex justify-center items-center"> 🎓</p>
//     <h1 className="font-semibold text-sm">Especializações </h1>

//     <div className="block sm:hidden"></div>
//     <div className="hidden sm:block">
//       <SenacDetails />
//     </div>
//     <div className="flex justify-center items-center">
//       {/* <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl"></span> */}
//     </div>
//     <div className="pb-6 sm:pb-0">
//       <span className="text-zinc-500"> </span>
//       <p></p>
//       <div className="block sm:hidden">
//         {/* {' '} */}
//         <SenacDetails />
//       </div>
//     </div>
//   </div>
// </>;
