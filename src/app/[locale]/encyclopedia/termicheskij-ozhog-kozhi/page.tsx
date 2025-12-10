'use client';
import { useLocale } from 'next-intl';
import TermicheskijOzhogKozhiAz from '@/pages-contents/encyclopedia/subpages/TermicheskijOzhogKozhiAz';
import TermicheskijOzhogKozhi from '@/pages-contents/encyclopedia/subpages/TermicheskijOzhogKozhi';

export default function Page() {
  const locale = useLocale();

  return locale === 'az' ? <TermicheskijOzhogKozhiAz /> : <TermicheskijOzhogKozhi /> ;
}