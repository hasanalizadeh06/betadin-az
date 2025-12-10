'use client';
import { useLocale } from 'next-intl';
import ZudVIntimnojZoneAz from '@/pages-contents/encyclopedia/subpages/ZudVIntimnojZoneAz';
import ZudVIntimnojZone from '@/pages-contents/encyclopedia/subpages/ZudVIntimnojZone';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <ZudVIntimnojZoneAz /> : <ZudVIntimnojZone /> ;
}