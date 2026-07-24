import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { poppins } from '@/fonts/poppins';
import { kapakana } from '@/fonts/kapanaka';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Julia Paiva',
  description:
    'Desenvolvedora Front-end especializada em React, Next.js, TypeScript e Tailwind CSS. Conheça meus projetos e entre em contato.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${kapakana.variable} text-[#2B2B2B] antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
