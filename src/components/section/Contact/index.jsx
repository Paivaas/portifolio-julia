
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import CursorSparkles from "@/components/ui/CursorSparkles"

export default function Contact() {

  function sendWhatsAppMessage() {
    const phone = "5511970167820";
    const message = "Oi, Julia! Vim através do seu portifólio.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  function soundOpenTabs() {
    const audio = new Audio('/sounds/sound-blop.mp3');
    audio.play();
  } 
  const { t } = useTranslation();
  return (
    <CursorSparkles>
    
      <section className="w-full flex flex-col gap-4 items-center ">
          <h1 className='text-7xl' style={{ fontFamily: "var(--font-kapakana)" }}>Contato</h1>
          <div>
             <Tabs defaultValue="email" className="w-full h-full flex flex-col justify-center items-center">
              <TabsList variant="line">
                <TabsTrigger value="email" onClick={soundOpenTabs}>Email</TabsTrigger>
                <TabsTrigger value="linkedin" onClick={soundOpenTabs}>Linkedin</TabsTrigger>
                <TabsTrigger value="telefone" onClick={soundOpenTabs}>Telefone</TabsTrigger>
              </TabsList>

              <TabsContent value="email">
                contatojupaioliver12@gmail.com
              </TabsContent>

              <TabsContent 
                className="flex flex-row-reverse items-center gap-1" 
                value="linkedin"
              >
                <ExternalLink size={12}/>
                <a 
                  className="hover:text-zinc-600" 
                  href="https://www.linkedin.com/in/juliapaivadeoliveira/"
                >
                  Ver perfil
                </a>
              </TabsContent>
              <TabsContent value="telefone">
                <button onClick={sendWhatsAppMessage} className="flex items-center gap-1 cursor-pointer">
                   Enviar mensagem 
                   <ExternalLink size={12}/>

                </button>
              </TabsContent>
            </Tabs>
          </div>
          
        <p className="text-zinc-200 pt-12"> Julia Paiva | Frontend Developer © 2026  Todos os direitos reservados.</p>
      </section>
  
  </CursorSparkles>

  )}