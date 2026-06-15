
import CursorSparkles from "@/components/ui/CursorSparkles"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
  return (
      <section className="w-full flex flex-col gap-8  justify-center  items-center">
    
        <h1 className='text-5xl'>Projetos</h1>

        <div className="flex flex-wrap w-screen md:w-[80vw] gap-4 justify-center  relative z-10">

          <div className="w-75">
            <p className="text-xs">2025</p>
            <h1 className="text-sm font-semibold">Consumo de API</h1>
            <p className="text-xs">🟢 Descrição</p>
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2"></div>
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

          <div className="w-75">
            <p className="text-xs">2025</p>
            <h1 className="text-sm font-semibold">RTA Físico — Projeto Corporativo</h1>
            <p className="text-xs"> 🔵 CyberSecurity • Red Team</p>
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2">
              
            </div>
          </div>

        <div className="w-75">
            <p className="text-xs">2025</p>
            <h1 className="text-sm font-semibold">Plano de melhoria </h1>
            <p className="text-xs">Descrição</p>
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2"></div>
          </div>

          <div className="w-75">
            <p className="text-xs">2025</p>
            <h1 className="text-sm font-semibold">Plano de melhoria </h1>
            <p className="text-xs">Descrição</p>
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2"></div>
          </div>


        </div>
        
      </section>
  )
}


