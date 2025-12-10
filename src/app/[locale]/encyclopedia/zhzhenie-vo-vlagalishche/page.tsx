'use client';
import { useLocale } from 'next-intl';
import ZhzhenieVoVlagalishcheAz from '@/pages-contents/encyclopedia/subpages/ZhzhenieVoVlagalishcheAz';
import ZhzhenieVoVlagalishche from '@/pages-contents/encyclopedia/subpages/ZhzhenieVoVlagalishche';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <ZhzhenieVoVlagalishcheAz /> : <ZhzhenieVoVlagalishche /> ;
}