'use client';

import ObrabotkaShvov from '@/pages-contents/encyclopedia/subpages/ObrabotkaShvov';
import ObrabotkaShvovAz from '@/pages-contents/encyclopedia/subpages/ObrabotkaShvovAz';
import { useLocale } from 'next-intl';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <ObrabotkaShvovAz /> : <ObrabotkaShvov />;
}

        
