'use client';
import { useLocale } from 'next-intl';
import PovidonJodAz from '@/pages-contents/encyclopedia/subpages/PovidonJodAz';
import PovidonJod from '@/pages-contents/encyclopedia/subpages/PovidonJod';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <PovidonJodAz /> : <PovidonJod /> ;
}