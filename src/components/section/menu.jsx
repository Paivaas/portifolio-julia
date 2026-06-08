import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/i18n/LanguageSelector';

export default function Menu() {
  const { t } = useTranslation();
  return (
    <menu className="flex justify-between">
        <LanguageSelector />
        <p >{t('header.name')}</p>
    </menu>
  )
}