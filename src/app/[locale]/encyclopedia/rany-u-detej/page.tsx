'use client';
import { useLocale } from 'next-intl';
import RanyUDetejAz from '@/pages-contents/encyclopedia/subpages/RanyUDetejAz';
import RanyUDetej from '@/pages-contents/encyclopedia/subpages/RanyUDetej';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <RanyUDetejAz /> : <RanyUDetej /> ;
}