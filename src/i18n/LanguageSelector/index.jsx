'use client'

import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function LanguageSelector() {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value)
  }

  return (
    <Select onValueChange={handleChangeLanguage}>
      <SelectTrigger>
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="pt">pt-BR</SelectItem>
          <SelectItem value="en">en-US</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}