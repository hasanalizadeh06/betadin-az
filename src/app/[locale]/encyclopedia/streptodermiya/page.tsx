'use client';
import { useLocale } from 'next-intl';
import StreptodermiyaAz from '@/pages-contents/encyclopedia/subpages/StreptodermiyaAz';
import Streptodermiya from '@/pages-contents/encyclopedia/subpages/Streptodermiya';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <StreptodermiyaAz /> : <Streptodermiya /> ;
}