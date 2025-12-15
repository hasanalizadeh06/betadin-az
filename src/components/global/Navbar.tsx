"use client"
import React, { JSX, useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function Navbar(): JSX.Element {
  const t = useTranslations('navbar')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLocale, setCurrentLocale] = useState('az')
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const locale = window.location.pathname.split("/")[1] || 'az'
      setCurrentLocale(locale === 'ru' ? 'ru' : 'az')
    }
  }, [])

  const handleLanguageChange = () => {
    const cur = typeof window !== 'undefined' ? window.location.pathname.split("/")[1] : 'az';
    const nextLocale = cur === "az" ? "ru" : "az";
    const newPath = window.location.pathname.replace(/^\/(az|ru)/, "/" + nextLocale);
    window.location.pathname = newPath;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setOpenSubmenu(null)
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenSubmenu(null)
  }

  const toggleSubmenu = (menuId: string, e: React.MouseEvent) => {
    e.preventDefault()
    setOpenSubmenu(openSubmenu === menuId ? null : menuId)
  }

  return (
    <div className="header-wrapper">
      <div className="container container-header">
        <Link href="/" className="logo">
          <img src={currentLocale === 'az' ? '/logo (1).png' : '/logo.svg'} alt="Бетадин" />
        </Link>

        <nav className={`menu-desktop ${isMenuOpen ? 'menu-desktop-mobile' : ''}`}>
          <ul id="menu-new-v-shapke" className="menu">
            <li className={`menu-lvl-2 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${openSubmenu === 'products' ? 'submenu-open' : ''}`}>
              <Link href="#" className="link" onClick={(e) => toggleSubmenu('products', e)}>
                {t('products')}
                <span className="submenu-arrow">›</span>
              </Link>
              <ul className="submenu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-rastvor/" onClick={closeMenu}>{t('products_items.solution')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-maz/" onClick={closeMenu}>{t('products_items.ointment')}</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link href="/svechi/" onClick={closeMenu}>{t('products_items.candles')}</Link>
                </li>
              </ul>
            </li>

            <li className={`menu-lvl-2 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${openSubmenu === 'treatment' ? 'submenu-open' : ''}`}>
              <Link href="#" className="link" onClick={(e) => toggleSubmenu('treatment', e)}>
                {t('treatment_rules')}
                <span className="submenu-arrow">›</span>
              </Link>
              <ul className="submenu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/encyclopedia/obrabotka-ran/" onClick={closeMenu}>{t('treatment_rules_items.wound_care')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/encyclopedia/lechenie-troficheskih-yazv/" onClick={closeMenu}>{t('treatment_rules_items.trophic_ulcers')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/encyclopedia/obrabotka-prolezhnej/" onClick={closeMenu}>{t('treatment_rules_items.bedsores')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/encyclopedia/vaginit/" onClick={closeMenu}>{t('treatment_rules_items.vaginitis')}</Link>
                </li>
              </ul>
            </li>

            <li className={`menu-lvl-2 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${openSubmenu === 'instructions' ? 'submenu-open' : ''}`}>
              <Link href="#" className="link" onClick={(e) => toggleSubmenu('instructions', e)}>
                {t('instructions')}
                <span className="submenu-arrow">›</span>
              </Link>
              <ul className="submenu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-rastvor-instruktsiya/" onClick={closeMenu}>{t('instructions_items.solution')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-maz-instruktsiya/" onClick={closeMenu}>{t('instructions_items.ointment')}</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/betadin-svechi-instruktsiya/" onClick={closeMenu}>{t('instructions_items.candles')}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/betadine-frequently-asked-questions/" className="link" onClick={closeMenu}>{t('faq')}</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/encyclopedia/" className="link" onClick={closeMenu}>{t('encyclopedia')}</Link>
            </li>
          </ul>

          <div className={`hamburger ${isMenuOpen ? 'burgerWhite' : ''}`} onClick={toggleMenu}>
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
              .menu-desktop .menu {
                display: none;
              }
              .menu-desktop.menu-desktop-mobile {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #0f780c;
                z-index: 9999;
                flex-direction: column;
                justify-content: flex-start;
                padding: 80px 20px 20px;
                overflow-y: auto;
              }
              .menu-desktop.menu-desktop-mobile .menu {
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 0;
              }
              .menu-desktop.menu-desktop-mobile .menu > li {
                width: 100%;
                border-bottom: 1px solid rgba(255,255,255,0.15);
              }
              .menu-desktop.menu-desktop-mobile .menu > li > a.link {
                color: #fff;
                font-size: 18px;
                font-weight: 500;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 5px;
                text-decoration: none;
              }
              .menu-desktop.menu-desktop-mobile .menu > li > a.link .submenu-arrow {
                font-size: 20px;
                transition: transform 0.3s ease;
                transform: rotate(90deg);
              }
              .menu-desktop.menu-desktop-mobile .menu > li.submenu-open > a.link .submenu-arrow {
                transform: rotate(-90deg);
              }
              .menu-desktop.menu-desktop-mobile .menu .submenu {
                display: none;
                position: static;
                background: transparent;
                box-shadow: none;
                padding: 0 0 10px 20px;
              }
              .menu-desktop.menu-desktop-mobile .menu .submenu-open .submenu {
                display: block;
              }
              .menu-desktop.menu-desktop-mobile .menu .submenu li a {
                color: rgba(255,255,255,0.85);
                font-size: 16px;
                padding: 10px 5px;
                display: block;
                text-decoration: none;
              }
              .menu-desktop.menu-desktop-mobile .hamburger {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
              }
              .menu-desktop.menu-desktop-mobile .hamburger .burgerInner,
              .menu-desktop.menu-desktop-mobile .hamburger .burgerInner::before,
              .menu-desktop.menu-desktop-mobile .hamburger .burgerInner::after {
                background-color: #fff;
              }
              .menu-desktop.menu-desktop-mobile .hamburger .burgerBox::before,
              .menu-desktop.menu-desktop-mobile .hamburger .burgerBox::after {
                background-color: #fff;
              }
              .menu-desktop.menu-desktop-mobile .language-selector {
                margin-top: 20px;
                align-self: flex-start;
              }
              .menu-desktop.menu-desktop-mobile .language-selector .language-button {
                background: rgba(255,255,255,0.2);
                color: #fff;
              }
              .menu-desktop.menu-desktop-mobile .language-selector .lang-text {
                color: #fff;
              }
              .hamburger {
                display: flex;
                cursor: pointer;
                z-index: 1000;
              }
              .submenu-arrow {
                display: inline-block;
              }
            }
            @media(min-width:1024px){
              .hamburger {
                display: none;
              }
              .submenu-arrow {
                display: none;
              }
            }
          `}</style>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
