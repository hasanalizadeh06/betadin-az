'use client';

import { useLocale } from 'next-intl';
import ObezzarazhivanieIDezinfekcziya from '@/pages-contents/encyclopedia/subpages/ObezzarazhivanieIDezinfekcziya'
import ObezzarazhivanieIDezinfekcziyaAz from '@/pages-contents/encyclopedia/subpages/ObezzarazhivanieIDezinfekcziyaAz'

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <ObezzarazhivanieIDezinfekcziyaAz /> : <ObezzarazhivanieIDezinfekcziya />;
}