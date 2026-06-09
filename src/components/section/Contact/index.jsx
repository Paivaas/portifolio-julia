
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from 'lucide-react';


export default function Contact() {
  return (
   <section className="w-full flex flex-col gap-4 items-center pb-12">
      <h1 className='text-7xl' style={{ fontFamily: "var(--font-kapakana)" }}>Contato</h1>
      <div> <Tabs defaultValue="overview" className="w-full h-full flex flex-col justify-center items-center">
        <TabsList variant="line">
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="linkedin">Linkedin</TabsTrigger>
        </TabsList>
        <p className="text-sm text-zinc-300">Fale comigo!</p>
        <TabsContent value="email">contatojupaioliver12@gmail.com</TabsContent>
        <TabsContent className="flex flex-row-reverse items-center gap-1" value="linkedin"> <ExternalLink size={12}/> <a className='hover:text-zinc-600' href="https://www.linkedin.com/in/juliapaivadeoliveira/">Ver perfil</a></TabsContent>
        </Tabs>
      </div>
  </section>

  )}