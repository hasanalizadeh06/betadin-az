'use client';

import { useLocale } from 'next-intl';
import ObrabotkaProlezhnej from '@/pages-contents/encyclopedia/subpages/ObrabotkaProlezhnej'
import ObrabotkaProlezhnejAz from '@/pages-contents/encyclopedia/subpages/ObrabotkaProlezhnejAz'

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <ObrabotkaProlezhnejAz /> : <ObrabotkaProlezhnej />;
}