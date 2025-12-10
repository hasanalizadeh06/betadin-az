'use client';
import { useLocale } from 'next-intl';
import PuzyrchatkaAz from '@/pages-contents/encyclopedia/subpages/PuzyrchatkaAz';
import Puzyrchatka from '@/pages-contents/encyclopedia/subpages/Puzyrchatka';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <PuzyrchatkaAz /> : <Puzyrchatka /> ;
}