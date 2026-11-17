import {
  Bot,
  Braces,
  Brush,
  Bug,
  Code,
  CodeXml,
  Component,
  Database,
  Eye,
  FileCode,
  Fish,
  Flame,
  Gavel,
  GitBranch,
  Globe,
  Layers,
  Lightbulb,
  Lock,
  Megaphone,
  MessagesSquare,
  Network,
  Palette,
  PenLine,
  Radar,
  Rocket,
  Router,
  Send,
  Share2,
  Shield,
  ShieldCheck,
  Smartphone,
  Target,
  Terminal,
  Users,
  Wind,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { RippleButton } from '@/components/ui/ripple-button';
import { useTranslation } from 'react-i18next';

// Ícones SVG inline (lucide): sem requisições de rede, sem decodificar imagens.
type Skill = [icon: LucideIcon, name: string, color: string];

const skills: { title: string; items: Skill[] }[] = [
  {
    title: 'tools.2',
    items: [
      [Radar, 'Darktrace', '#D1F6CA'],
      [Wrench, 'Ivanti', '#ADD8E6'],
      [Eye, 'Privacy Tools', '#FFE7F4'],
      [Terminal, 'Kali Linux', '#D1F6CA'],
      [Gavel, 'LGPD', '#ADD8E6'],
      [Bug, 'Pentest', '#D1F6CA'],
      [Fish, 'Phishing', '#FFE7F4'],

      [Network, 'tools.items.networks', '#ADD8E6'],
      [Flame, 'Firewall', '#D1F6CA'],
      [Router, 'Cisco', '#D1F6CA'],

      [ShieldCheck, 'RTA', '#FFE7F4'],
    ],
  },
  {
    title: 'tools.1',
    items: [
      [Component, 'React', '#ADD8E6'],
      [CodeXml, 'Node.js', '#D1F6CA'],
      [Braces, 'TypeScript', '#ADD8E6'],
      [Wind, 'Tailwind', '#ADD8E6'],
      [Palette, 'Figma', '#FFE7F4'],
      [GitBranch, 'Git', '#FFE7F4'],
      [Code, 'VS Code', '#D1F6CA'],

      [Smartphone, 'Android Studio', '#ADD8E6'],
      [FileCode, 'JavaScript', '#FFE7F4'],
      [Globe, 'HTML', '#FFE7F4'],
      [Layers, 'CSS', '#D1F6CA'],
      [Database, 'MySQL', '#D1F6CA'],
      [Send, 'Postman', '#D1F6CA'],
    ],
  },
  {
    title: 'tools.3',
    items: [
      [Megaphone, 'tools.items.digital_marketing', '#ADD8E6'],
      [PenLine, 'Storytelling', '#FFE7F4'],
      [Users, 'CRM', '#D1F6CA'],
      [Shield, 'Branding', '#D1F6CA'],
      [Brush, 'tools.items.creative_design', '#D1F6CA'],
      [Share2, 'tools.items.social', '#ADD8E6'],
      [Rocket, 'Growth Marketing', '#D1F6CA'],
      [Lightbulb, 'tools.items.content', '#FFE7F4'],
      [MessagesSquare, 'tools.items.communication', '#D1F6CA'],
      [Target, 'tools.items.strategy', '#FFE7F4'],
    ],
  },
];

export default function Tools() {
  const { t } = useTranslation();
  return (
    <section className=" w-90 sm:w-full  flex flex-col sm:grid sm:grid-cols-3 gap-14 sm:gap-2 py-12 justify-center  items-start">
      {skills.map((skill) => (
        <section
          className="flex w-fit justify-center flex-col items-center gap-2 "
          key={skill.title}
        >
          <h1>{t(skill.title)}</h1>
          <div className="flex gap-2 flex-wrap sm:w-100 w-fit justify-center pb-6">
            {skill.items.map(([Icon, name, color]) => {
              // Itens com chave 'tools.items.*' são traduzidos; os demais são nomes próprios
              const label = name.startsWith('tools.') ? t(name) : name;
              return (
                <RippleButton key={name} className="rounded-full" rippleColor={color}>
                  <div className="flex gap-2 items-center">
                    <Icon size={18} aria-hidden="true" className="shrink-0" />
                    <p>{label}</p>
                  </div>
                </RippleButton>
              );
            })}
          </div>
        </section>
      ))}
    </section>
  );
}
