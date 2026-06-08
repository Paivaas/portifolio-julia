'use client'

import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLanguage = i18n.language.startsWith('pt') ? 'en' : 'pt'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 border rounded-md cursor-pointer"
    >
      {i18n.language.startsWith('pt') ? '🇧🇷 PT' : '🇺🇸 EN'}
    </button>
  )
}