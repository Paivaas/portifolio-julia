'use client'

import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value)
  }

  return (
    <div>
      <select
        onChange={(e) => handleChangeLanguage(e.target.value)}
        id="language-select"
      >
        <option value="pt">Português</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}