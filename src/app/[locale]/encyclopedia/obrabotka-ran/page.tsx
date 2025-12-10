'use client';

import { useLocale } from 'next-intl';
import ObrabotkaRanAz from '@/pages-contents/encyclopedia/subpages/ObrabotkaRanAz';
import ObrabotkaRan from '@/pages-contents/encyclopedia/subpages/ObrabotkaRan';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <ObrabotkaRanAz /> : <ObrabotkaRan />;
}
