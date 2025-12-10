'use client';
import { useLocale } from 'next-intl';
import ZapahVIntimnojZoneAz from '@/pages-contents/encyclopedia/subpages/ZapahVIntimnojZoneAz';
import ZapahVIntimnojZone from '@/pages-contents/encyclopedia/subpages/ZapahVIntimnojZone';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <ZapahVIntimnojZoneAz /> : <ZapahVIntimnojZone /> ;
}