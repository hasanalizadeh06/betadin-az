'use client';
import { useLocale } from 'next-intl';
import PolivinilpirrolidonAz from '@/pages-contents/encyclopedia/subpages/PolivinilpirrolidonAz';
import Polivinilpirrolidon from '@/pages-contents/encyclopedia/subpages/Polivinilpirrolidon';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <PolivinilpirrolidonAz /> : <Polivinilpirrolidon /> ;
}