'use client';
import { useLocale } from 'next-intl';
import PorezyAz from '@/pages-contents/encyclopedia/subpages/PorezyAz';
import Porezy from '@/pages-contents/encyclopedia/subpages/Porezy';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <PorezyAz /> : <Porezy /> ;
}