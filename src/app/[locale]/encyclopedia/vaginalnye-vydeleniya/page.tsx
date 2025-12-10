'use client';
import { useLocale } from 'next-intl';
import VaginalnyeVydeleniyaAz from '@/pages-contents/encyclopedia/subpages/VaginalnyeVydeleniyaAz';
import VaginalnyeVydeleniya from '@/pages-contents/encyclopedia/subpages/VaginalnyeVydeleniya';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <VaginalnyeVydeleniyaAz /> : <VaginalnyeVydeleniya /> ;
}