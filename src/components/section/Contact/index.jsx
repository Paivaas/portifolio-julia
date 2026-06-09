import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const enviarWhatsApp = () => {
  const numero = "5511970167820"; // código do país + DDD + número
  const mensagem = "Olá! Vi seu portfólio e gostaria de conversar.";
  
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
};

export default function Contact() {
  const { t } = useTranslation();
  return (
   <section className="w-full flex flex-col gap-4 items-center">
      <h1 className='text-7xl' style={{ fontFamily: "var(--font-kapakana)" }}>Contato</h1>
      <div> <Tabs defaultValue="overview" className="w-full h-full flex flex-col justify-center items-center">
        <TabsList variant="line">
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="linkedin">Linkedin</TabsTrigger>
        </TabsList>
        
        <TabsContent value="email">contatojupaioliver12@gmail.com</TabsContent>
        <TabsContent value="linkedin"> <a className='hover:text-zinc-600' href="https://www.linkedin.com/in/juliapaivadeoliveira/">Ver perfil</a></TabsContent>
        </Tabs>
      </div>
  </section>

  )}