'use client';
import { useLocale } from 'next-intl';
import ProlezhniAz from '@/pages-contents/encyclopedia/subpages/ProlezhniAz';
import Prolezhni from '@/pages-contents/encyclopedia/subpages/Prolezhni';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <ProlezhniAz /> : <Prolezhni /> ;
}