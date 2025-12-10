"use client"
import React, { JSX } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function Navbar(): JSX.Element {
  const t = useTranslations('navbar')
  const currentLocale = typeof window !== 'undefined' ? window.location.pathname.split("/")[1] || 'az' : 'az';

  const handleLanguageChange = () => {
    const cur = typeof window !== 'undefined' ? window.location.pathname.split("/")[1] : 'az';
    const nextLocale = cur === "az" ? "ru" : "az";
    const newPath = window.location.pathname.replace(/^\/(az|ru)/, "/" + nextLocale);
    window.location.pathname = newPath;
  };

  return (
    <div className="header-wrapper">
      <div className="container container-header">
        <Link href="/" className="logo">
          <img src="/logo.svg" alt="Бетадин" />
        </Link>

        <nav className="menu-desktop">
          <ul id="menu-new-v-shapke" className="menu">
            <li className="menu-lvl-2 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
              <Link href="#" className="link">{t('products')}</Link>
              <ul>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-rastvor/">{t('products_items.solution')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-maz/">{t('products_items.ointment')}</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link href="/svechi/">{t('products_items.candles')}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-lvl-2 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
              <Link href="#" className="link">{t('treatment_rules')}</Link>
              <ul>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/encyclopedia/obrabotka-ran/">{t('treatment_rules_items.wound_care')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/encyclopedia/lechenie-troficheskih-yazv/">{t('treatment_rules_items.trophic_ulcers')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/encyclopedia/obrabotka-prolezhnej/">{t('treatment_rules_items.bedsores')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/encyclopedia/vaginit/">{t('treatment_rules_items.vaginitis')}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-lvl-2 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
              <Link href="#" className="link">{t('instructions')}</Link>
              <ul>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-rastvor-instruktsiya/">{t('instructions_items.solution')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-maz-instruktsiya/">{t('instructions_items.ointment')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-svechi-instruktsiya/">{t('instructions_items.candles')}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/betadine-frequently-asked-questions/" className="link">{t('faq')}</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/encyclopedia/" className="link">{t('encyclopedia')}</Link>
            </li>
          </ul>

          <div className="hamburger">
            <div className="burgerBox">
              <div className="burgerInner" />
            </div>
          </div>

          <div className="language-selector ml-4">
            <button
              onClick={handleLanguageChange}
              className="language-button flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1 text-sm font-medium"
              aria-label="Change language"
            >
              {currentLocale === 'ru' ? (
                <svg className="h-5 w-6" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path fill="#fff" d="M0 0h9v3H0z" />
                  <path fill="#d52b1e" d="M0 3h9v3H0z" />
                  <path fill="#0039a6" d="M0 2h9v2H0z" />
                </svg>
              ) : (
                <svg className="h-5 w-6" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path fill="#00b9e4" d="M0 0h9v2H0z" />
                  <path fill="#ed2939" d="M0 2h9v2H0z" />
                  <path fill="#3f9c35" d="M0 4h9v2H0z" />
                  <circle cx="4.5" cy="3" r="0.9" fill="#fff" />
                  <circle cx="4.7" cy="3" r="0.75" fill="#ed2939" />
                </svg>
              )}
              <span className="lang-text uppercase">{currentLocale === 'ru' ? 'RU' : 'AZ'}</span>
            </button>
          </div>

          <style>{`
            .menu-desktop{display:flex;align-items:center;}
            @media(max-width:1023px){
              .btn.btn-buy{display:none;}
            }
          `}</style>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
