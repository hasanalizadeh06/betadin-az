import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTranslations, getMessages } from 'next-intl/server';  // ✅ getMessages əlavə edin
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import "@/styles/template.css";

type LocaleParamsPromise = Promise<{ locale: string }>;

type LocaleLayoutProps = {
  children?: React.ReactNode;
  params?: LocaleParamsPromise;
};

async function resolveLocale(params?: LocaleParamsPromise) {
  if (params) {
    return params;
  }

  return Promise.resolve({ locale: routing.defaultLocale });
}

export async function generateMetadata(
  { params }: LocaleLayoutProps
): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: 'Index' });
  
  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: {
        url: '/icon.png',
        type: 'image/png'
      }
    }
  }
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await resolveLocale(params);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // ✅ Messages yükləyin
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />      
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}