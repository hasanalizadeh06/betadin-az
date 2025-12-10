'use client';
import { useLocale } from 'next-intl';
import Piodermiya from '@/pages-contents/encyclopedia/subpages/Piodermiya';
import PiodermiyaAz from '@/pages-contents/encyclopedia/subpages/PiodermiyaAz';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <PiodermiyaAz /> : <Piodermiya /> ;
}