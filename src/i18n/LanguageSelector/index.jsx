'use client'

import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const audio = new Audio('/sounds/sound-blop.mp3');
    audio.play();
    const newLanguage = i18n.language.startsWith('pt') ? 'en' : 'pt'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 sm:px-4 py-1 sm:py-2 border rounded-md cursor-pointer"
    >
      {i18n.language.startsWith('pt') ? '🇧🇷 PT' : '🇺🇸 EN'}
    </button>
  )
}