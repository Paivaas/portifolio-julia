"use client"

import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { Computer } from "lucide-react"
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Tools() {
  return (
    <div className="flex justify-center items-start">

        <div className="flex flex-col h-f  gap-4 text-center md:text-left ">
            <h2 className='text-3xl'>Ferramentas</h2>
            <p className='text-sm text-justify' >Usadas no trabalho</p>
        </div>
   
        <div className="relative flex h-80 w-80 items-center justify-center overflow-hidden">

            <OrbitingCircles iconSize={40} radius={130} speed={1}>
                <Image src="/tools/figma.svg" alt="figma" fill className="object-fit"/>
                <Image src="/tools/git.svg" alt="git" fill className="object-fit"/>
                <Image src="/tools/react.svg" alt="react" fill className="object-fit"/>
                <Image src="/tools/typescript.svg" alt="tailwind" fill className="object-fit"/>
            </OrbitingCircles>

            <OrbitingCircles iconSize={40} radius={70} reverse speed={1}>
                <Image src="/tools/tailwind.svg" alt="tailwind" fill className="object-fit"/>
                <Image src="/tools/linux.svg" alt="tailwind" fill className="object-fit"/>
                <Image src="/tools/node.svg" alt="node" fill className="object-fit"/>
            </OrbitingCircles>

        </div>

    </div>
  )
}