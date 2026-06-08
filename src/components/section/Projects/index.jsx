import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const enviarWhatsApp = () => {
  const numero = "5511970167820"; // código do país + DDD + número
  const mensagem = "Olá! Vi seu portfólio e gostaria de conversar.";
  
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
};

export default function Projects() {
  const { t } = useTranslation();
  return (
   <section className="w-full flex flex-col gap-4 items-center">
       
  </section>

  )}