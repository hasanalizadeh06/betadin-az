'use client';
import { useLocale } from 'next-intl';
import SvechiOtVaginitaAz from '@/pages-contents/encyclopedia/subpages/SvechiOtVaginitaAz';
import SvechiOtVaginita from '@/pages-contents/encyclopedia/subpages/SvechiOtVaginita';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <SvechiOtVaginitaAz /> : <SvechiOtVaginita /> ;
}