'use client';

import { useTranslation } from 'react-i18next';
import { playSound } from '@/lib/sounds';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const isPt = i18n.language.startsWith('pt');

  const toggleLanguage = () => {
    playSound('blop');
    const newLanguage = isPt ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage);
    document.documentElement.lang = newLanguage === 'pt' ? 'pt-BR' : 'en';
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={isPt ? 'Change language to English' : 'Mudar idioma para Português'}
      className="px-2 sm:px-4 py-1 sm:py-2 border rounded-md cursor-pointer"
    >
      {isPt ? '🇧🇷 PT' : '🇺🇸 EN'}
    </button>
  );
}
