'use client';
import { useLocale } from 'next-intl';
import RastvorJodaAz from '@/pages-contents/encyclopedia/subpages/RastvorJodaAz';
import RastvorJoda from '@/pages-contents/encyclopedia/subpages/RastvorJoda';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <RastvorJodaAz /> : <RastvorJoda /> ;
}