"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const COOKIE_KEY = "betadin_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("cookieBanner");
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem(COOKIE_KEY);
      setVisible(!consent);
    }
  }, []);

  const handleConsent = (value: string) => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible || pathname.includes("/external-resources")) return null;

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(15, 15, 15, 0.8)", zIndex: 9998, pointerEvents: "auto", opacity: 1, transition: "opacity 0.3s" }}></div>
      <div className="cookie-banner betadin js-cookie-banner" style={{ position: "fixed", zIndex: 9999 }}>
        <div className="cookie-banner__wrapper">
          <h5 className="cookie-banner__title">{t.raw("title")}</h5>
          <p className="cookie-banner__text">
            {t.raw("text1")}<br />
            {t.raw("text2")}<br />
            {t.raw("text3")} <a className="cookie-banner__text-link" href="/external-resources">{t.raw("link")}</a> {t.raw("text4")}
          </p>
          <div className="cookie-banner__button-wrapper">
            <button className="cookie-banner__button cookie-banner__button-first js-cookie-button" onClick={() => handleConsent("accepted")}>{t.raw("allow")}</button>
            <button className="cookie-banner__button cookie-banner__button-second js-cookie-button" onClick={() => handleConsent("declined")}>{t.raw("decline")}</button>
          </div>
        </div>
      </div>
    </>
  );
}
