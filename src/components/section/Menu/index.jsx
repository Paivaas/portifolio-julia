import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/i18n/LanguageSelector';

export default function Menu() {
  const { t } = useTranslation();
  return (
    <menu className="flex justify-between p-4">
        <p >{t('header.name')}</p>
       <LanguageSelector />
    </menu>
  )
}