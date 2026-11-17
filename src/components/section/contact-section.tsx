import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import CursorSparkles from '@/components/ui/CursorSparkles';
import { playSound } from '@/lib/sounds';

export default function Contact() {
  const { t } = useTranslation();

  function sendWhatsAppMessage() {
    const phone = '5511970167820';
    const message = t('contact.whatsapp-message');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  function copyEmail() {
    const email = 'juliapoliver12@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      playSound('bubble');
      toast.success(t('contact.copy-email.title'), {
        description: t('contact.copy-email.description'),
      });
    });
  }

  function soundOpenTabs() {
    playSound('blop');
  }

  return (
    <CursorSparkles>
      <section className="w-full  flex flex-col gap-4 items-center ">
        <h1 className="text-7xl" style={{ fontFamily: 'var(--font-kapakana)' }}>
          {' '}
          {t('contact.category')}
        </h1>
        <div>
          <Tabs
            defaultValue="email"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <TabsList variant="line">
              <TabsTrigger value="email" onClick={soundOpenTabs}>
                {t('contact.tabs.email')}
              </TabsTrigger>
              <TabsTrigger value="linkedin" onClick={soundOpenTabs}>
                {t('contact.tabs.linkedin')}
              </TabsTrigger>
              <TabsTrigger value="phone" onClick={soundOpenTabs}>
                {t('contact.tabs.phone')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <button onClick={copyEmail} className="flex items-center gap-1 cursor-pointer">
                juliapoliver12@gmail.com
                <Copy size={12} />
              </button>
            </TabsContent>

            <TabsContent className="flex flex-row-reverse items-center gap-1" value="linkedin">
              <ExternalLink size={12} />
              <a
                className="hover:text-zinc-600"
                href="https://www.linkedin.com/in/juliapaivadeoliveira/"
              >
                {t('contact.view-linkedin')}
              </a>
            </TabsContent>
            <TabsContent value="phone">
              <button
                onClick={sendWhatsAppMessage}
                className="flex items-center gap-1 cursor-pointer"
              >
                {t('contact.send-message')}
                <ExternalLink size={12} />
              </button>
            </TabsContent>
          </Tabs>
        </div>

        <p className="text-zinc-200 pt-12 text-[10px]"> {t('contact.footer')}</p>
      </section>
    </CursorSparkles>
  );
}
