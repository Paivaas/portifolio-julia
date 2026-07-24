
import { useTranslation } from 'react-i18next';

import Image from "next/image";
import { ExternalLink   } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {Sheet1} from "@/components/section/projects-itens/sheet1"

export default function Projects() {
  const { t } = useTranslation();
  return (
      <section className="w-full flex flex-col gap-8 py-12 justify-center  items-center">
  
        <div className="flex flex-wrap w-screen md:w-[80vw] gap-8 justify-center  relative z-10">

          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="w-75 space-y-2">
              <Skeleton className="h-3 w-10" />
              <Skeleton className="h-5 w-52" />

              <div className="flex gap-4 pt-4">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-4 w-24" />
              </div>

              <Skeleton className="w-[300px] h-[150px] rounded-sm" />

              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-36 rounded-full" />
                <Skeleton className="h-6 w-26 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-40 rounded-full" />
                <Skeleton className="h-6 w-38 rounded-full" />
              </div>
            </div>
          ))}

        <div className="w-75 space-y-2">
            <p className="text-xs">{t('projects.1.year')}</p>
            <h1 className="text-sm font-semibold">{t('projects.1.title')}</h1>

            <div className="flex gap-4 text-zinc-400 pt-4">
                <button className="flex items-center gap-1"> < Sheet1 /> </button>
               <button className="flex items-center gap-1"><a href="https://gerenciador-marmitas.vercel.app/">{t('projects.view-project')}</a> <ExternalLink size={12}/></button>
            </div>

             <div className="relative w-[300px] h-[150px] bg-zinc-100 rounded-sm mt-2 overflow-hidden border-2">
              <Image src="/banner3.png" alt="figma" fill  className="object-cover"  />
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge className="bg-zinc-50 text-zinc-700"> {t('projects.1.tags.1')} </Badge> ∙
              <Badge className="bg-blue-50 text-blue-700"> {t('projects.1.tags.2')} </Badge>
              <Badge className="bg-cyan-50 text-cyan-700"> {t('projects.1.tags.3')} </Badge>
              <Badge className="bg-orange-50 text-orange-700"> {t('projects.1.tags.4')} </Badge>
              <Badge className="bg-pink-50 text-pink-700">  {t('projects.1.tags.5')} </Badge>
              <Badge className="bg-green-50 text-green-700"> {t('projects.1.tags.6')} </Badge>

            </div>
          </div>

        

        </div>
        
      </section>
  )
}


