'use client';
import { useLocale } from 'next-intl';
import OzhogUDetej from '@/pages-contents/encyclopedia/subpages/OzhogUDetej'
import OzhogUDetejAz from '@/pages-contents/encyclopedia/subpages/OzhogUDetejAz';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <OzhogUDetejAz /> : <OzhogUDetej /> ;
}