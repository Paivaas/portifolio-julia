import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../app/i18n/components/languageSelector';
import { kapakana } from '@/font';

export default function Menu() {
  const { t } = useTranslation();
  return (
    <menu className="flex justify-between">
        <LanguageSelector />
        <p className={`${kapakana.className}`}>{t('header.welcome')}</p>
    </menu>

  )
}