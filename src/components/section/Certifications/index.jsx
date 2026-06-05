import { useTranslation } from 'react-i18next';

import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

import { kapakana } from '@/fonts/kapanaka'

export default function Certifications() {
  const { t } = useTranslation();
  return (
   <section className="w-full h-[50vh] flex flex-col gap-4 items-center">

      <h1 className={`${kapakana.className} text-7xl`}>Certificações</h1>
        <div className=' flex flex-row gap-4'>
            
            <Card className="w-full h-fit flex gap-0 max-w-sm p-4">
                <div className='flex gap-4'>
                    <div className="relative w-14 h-14  shrink-0">
                    <Image
                        src="/darktrace.png"
                        alt="Foto de perfil"
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
                <div>
                        <p>Darktrace</p>
                        <CardTitle className='text-sm'>Threat Visualizer Part 1 - Familiarization</CardTitle>
                        <CardDescription className='text-xs'>Emitido em jun de 2025 · Expira em jun de 2028</CardDescription>
                </div>
                </div>
            </Card>

            <Card className="w-full h-fit flex gap-0 max-w-sm p-4">
                <div className='flex gap-4'>
                    <div className="relative w-14 h-14  shrink-0">
                    <Image
                        src="/senai.png"
                        alt="Foto de perfil"
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
                <div>
                        <p>Darktrace</p>
                        <CardTitle className='text-sm'>Threat Visualizer Part 1 - Familiarization</CardTitle>
                        <CardDescription className='text-xs'>Emitido em jun de 2025 · Expira em jun de 2028</CardDescription>
                </div>
                </div>
            </Card>
            <Card className="w-full h-fit flex gap-0 max-w-sm p-4">
                <div className='flex gap-4'>
                    <div className="relative w-14 h-14  shrink-0">
                    <Image
                        src="/darktrace.png"
                        alt="Foto de perfil"
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
                <div>
                        <p>Darktrace</p>
                        <CardTitle className='text-sm'>Threat Visualizer Part 1 - Familiarization</CardTitle>
                        <CardDescription className='text-xs'>Emitido em jun de 2025 · Expira em jun de 2028</CardDescription>
                </div>
                </div>
            </Card>

        </div>

        <div className=' flex flex-row gap-4'>
            
            <Card className="w-full h-fit flex gap-0 max-w-sm p-4">
                <div className='flex gap-4'>
                    <div className="relative w-14 h-14  shrink-0">
                    <Image
                        src="/darktrace.png"
                        alt="Foto de perfil"
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
                <div>
                        <p>Darktrace</p>
                        <CardTitle className='text-sm'>Threat Visualizer Part 1 - Familiarization</CardTitle>
                        <CardDescription className='text-xs'>Emitido em jun de 2025 · Expira em jun de 2028</CardDescription>
                </div>
                </div>
            </Card>

            <Card className="w-full h-fit flex gap-0 max-w-sm p-4">
                <div className='flex gap-4'>
                    <div className="relative w-14 h-14  shrink-0">
                    <Image
                        src="/senai.png"
                        alt="Foto de perfil"
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
                <div>
                        <p>Darktrace</p>
                        <CardTitle className='text-sm'>Threat Visualizer Part 1 - Familiarization</CardTitle>
                        <CardDescription className='text-xs'>Emitido em jun de 2025 · Expira em jun de 2028</CardDescription>
                </div>
                </div>
            </Card>
            <Card className="w-full h-fit flex gap-0 max-w-sm p-4">
                <div className='flex gap-4'>
                    <div className="relative w-14 h-14  shrink-0">
                    <Image
                        src="/senai.png"
                        alt="Foto de perfil"
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
                <div>
                        <p>Darktrace</p>
                        <CardTitle className='text-sm'>Threat Visualizer Part 1 - Familiarization</CardTitle>
                        <CardDescription className='text-xs'>Emitido em jun de 2025 · Expira em jun de 2028</CardDescription>
                </div>
                </div>
            </Card>

        </div>


  </section>

  )}