'use client';
import { useLocale } from 'next-intl';
import TroficheskieYazvyNogAz from '@/pages-contents/encyclopedia/subpages/TroficheskieYazvyNogAz';
import TroficheskieYazvyNog from '@/pages-contents/encyclopedia/subpages/TroficheskieYazvyNog';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <TroficheskieYazvyNogAz /> : <TroficheskieYazvyNog /> ;
}