'use client';
import { useLocale } from 'next-intl';
import SmeshannyeInfekciiVGinekologiiAz from '@/pages-contents/encyclopedia/subpages/SmeshannyeInfekciiVGinekologiiAz';
import SmeshannyeInfekciiVGinekologii from '@/pages-contents/encyclopedia/subpages/SmeshannyeInfekciiVGinekologii';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <SmeshannyeInfekciiVGinekologiiAz /> : <SmeshannyeInfekciiVGinekologii /> ;
}