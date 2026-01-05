import { useTranslations } from "next-intl";

export default function ExternalResourcesPage() {
  const t = useTranslations("cookieBanner");
  return (
    <div dangerouslySetInnerHTML={{ __html: t.raw("externalResourcesPage.content") }} />
  );
}