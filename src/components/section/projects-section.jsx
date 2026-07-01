

import Image from "next/image";


export default function Projects() {
  return (
      <section className="w-full flex flex-col gap-8 py-12 justify-center  items-center">
  

        <div className="flex flex-wrap w-screen md:w-[80vw] gap-8 justify-center  relative z-10">

          <div className="w-75">
            <p className="text-xs">2025</p>
            <h1 className="text-sm font-semibold">Painel de metricas NPS</h1>
            <p className="text-xs">🟢 Produção, prototipação e criação de painel </p>
            <div className="relative w-[300px] h-[200px] bg-zinc-100 rounded-sm mt-2 overflow-hidden border-2">
              <Image src="/painel.png" alt="figma" fill  className="object-cover"  />
            </div>
          </div>

          <div className="w-75">
              <p className="text-xs">2025</p>
              <h1 className="text-sm font-semibold">Planejamento de Marketing</h1>
              <p className="text-xs">🟡Descrição</p>
              <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2"></div>
          </div>

        <div className="w-75">
            <p className="text-xs">2025</p>
            <h1 className="text-sm font-semibold">Plano de melhoria </h1>
            <p className="text-xs">🟡 Descrição</p>
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2"></div>
          </div>

        

        </div>
        
      </section>
  )
}


