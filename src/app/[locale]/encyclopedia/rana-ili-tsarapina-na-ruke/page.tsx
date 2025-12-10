'use client';
import { useLocale } from 'next-intl';
import RanaIliTsarapinaNaRukeAz from '@/pages-contents/encyclopedia/subpages/RanaIliTsarapinaNaRukeAz';
import RanaIliTsarapinaNaRuke from '@/pages-contents/encyclopedia/subpages/RanaIliTsarapinaNaRuke';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <RanaIliTsarapinaNaRukeAz /> : <RanaIliTsarapinaNaRuke /> ;
}