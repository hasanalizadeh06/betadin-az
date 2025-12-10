'use client';
import { useLocale } from 'next-intl';
import RanySInfekciejAz from '@/pages-contents/encyclopedia/subpages/RanySInfekciejAz';
import RanySInfekciej from '@/pages-contents/encyclopedia/subpages/RanySInfekciej';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <RanySInfekciejAz /> : <RanySInfekciej /> ;
}