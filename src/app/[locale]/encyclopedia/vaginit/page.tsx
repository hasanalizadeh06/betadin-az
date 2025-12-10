'use client';
import { useLocale } from 'next-intl';
import VaginitAz from '@/pages-contents/encyclopedia/subpages/VaginitAz';
import Vaginit from '@/pages-contents/encyclopedia/subpages/Vaginit';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <VaginitAz /> : <Vaginit /> ;
}