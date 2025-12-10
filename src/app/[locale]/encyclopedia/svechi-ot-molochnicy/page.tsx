'use client';
import { useLocale } from 'next-intl';
import SvechiOtMolochnicyAz from '@/pages-contents/encyclopedia/subpages/SvechiOtMolochnicyAz';
import SvechiOtMolochnicy from '@/pages-contents/encyclopedia/subpages/SvechiOtMolochnicy';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <SvechiOtMolochnicyAz /> : <SvechiOtMolochnicy /> ;
}