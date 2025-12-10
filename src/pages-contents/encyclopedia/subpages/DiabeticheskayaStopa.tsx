'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function DiabeticheskayaStopa() {
  const t = useTranslations('Blogs.DiabeticheskayaStopa');
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false);
  const [navTitleHidden, setNavTitleHidden] = useState<boolean>(true);

  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Скроллинг40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Скроллинг80');
        }
      },
    };

    const triggered: Triggered = {
      40: false,
      80: false,
    };

    function checkScroll() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor(((scrollTop + winHeight) / docHeight) * 100);

      for (const percent of [40, 80]) {
        if (scrollPercent >= percent && !triggered[percent]) {
          triggered[percent] = true;
          scrollGoals[percent]();
        }
      }

      if (Object.values(triggered).every((v) => v)) {
        window.removeEventListener('scroll', checkScroll);
      }
    }

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useEffect(() => {
    const checkPosition = () => {
      if (typeof window === 'undefined') return;
      const threshold = 1000;
      const scrollY = window.scrollY ?? window.pageYOffset;
      if (scrollY >= threshold) {
        setNavTitleHidden(false);
      } else {
        setNavTitleHidden(true);
        setSecondaryNavOpened(false);
      }
    };

    // initial check
    checkPosition();

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, []);

  return (
    <main>
      <article>
        <div className="container-page-header">
          <div className="container">
            <div className="page-header page-header-breadcrumbs">
              <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
              <li property="itemListElement" typeof="ListItem">
                <Link property="item" typeof="WebPage" href="/">
                  <span property="name">{t('breadcrumb.home')}</span>
                </Link>
                <meta property="position" content="1" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <Link property="item" typeof="WebPage" href="/encyclopedia/">
                  <span property="name">{t('breadcrumb.encyclopedia')}</span>
                </Link>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">{t('breadcrumb.current')}</span>
                <meta property="position" content="3" />
              </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">{t('header.title')}</h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/icon-230x224.webp"
                      alt={t('header.imageAlt')}
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">{t('header.subtitle')}</h2>
                <div className="page-header-body">
                  <p>
                    <strong>{t('breadcrumb.current')}</strong> {t('header.intro')}
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  {t.raw('header.anchors').map((anchor: any, idx: number) => (
                    <li key={idx}>
                      <a href={anchor.href}>{anchor.text}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-7-730x611.webp 1x, /kartinka-banner-7-1460x1222.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-7-1460x1222.webp"
                      alt="Диабетическая стопа: лечение, мази, кремы, средства"
                      width={730}
                      height={611}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
              <ul>
                {t.raw('nav').map((item: any, idx: number) => (
                  <li key={idx}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t('tableOfContents')}</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            {t.raw('nav').map((item: any, idx: number) => (
              <li key={idx}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}>{t('tableOfContents')}</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">{t('disclaimer')}</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <h2 className="h2" id="prichiny-vozniknoveniya">
              {t('sections.causes_title')}
            </h2>

            <p>
              {t('sections.causes_para1')}
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/circle-1006x1010.webp"
                  alt="Декоративные элементы"
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <p>
              {t('sections.causes_para2')}
            </p>

            <h2 className="h2" id="simptomy">
              {t('sections.symptoms_title')}
            </h2>

            <p>
              {t('sections.symptoms_para1')}
            </p>

            <p>
              {t('sections.symptoms_para2')}
            </p>

            <p>
              {t('sections.symptoms_para3')}
            </p>

            <p>
              {t('sections.symptoms_para4')}
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              .
            </p>

            <div className="list-base">
              <p>
                <strong>{t('sections.forms_label')}</strong> {t('sections.forms_desc')}
              </p>
              <ul>
                {t.raw('sections.forms').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              <strong>{t('sections.depth_label')}</strong>
            </p>

            <div className="big">
              {t.raw('sections.depth').map((item: string, idx: number) => (
                <div key={idx} className="line">
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <h2 className="h2" id="diagnostika">
              {t('sections.diagnosis_title')}
            </h2>

            <p>
              {t('sections.diagnosis_para1')}
            </p>

            <p>
              {t('sections.diagnosis_para2')}
            </p>

            <p>
              {t('sections.diagnosis_para3')}
            </p>

            <p>
              {t('sections.diagnosis_para4')}
            </p>

            <p>
              {t('sections.diagnosis_para5')}
            </p>

            <p>
              {t('sections.diagnosis_para6')}
            </p>

            <p>
              {t('sections.diagnosis_para7')}
            </p>

            <h2 className="h2" id="lechenie-diabeticheskoy-stopy">
              {t('sections.treatment_title')}
            </h2>

            <p>{t('sections.treatment_intro1')}</p>

            <h3 className="h3">{t('sections.conservative_title')}</h3>

            <p>
              {t('sections.conservative_para1')}
            </p>

            <p>
              {t('sections.conservative_para2')}
            </p>

            <p>{t('sections.conservative_para3')}</p>

            <h3 className="h3">{t('sections.surgical_title')}</h3>

            <p>
              {t('sections.surgical_para1')}
            </p>

            <p>
              {t('sections.surgical_para2')}
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
            </p>

            <h3 className="h3">{t('sections.local_title')}</h3>

            <p>{t('sections.local_para1')}</p>

            <p>
              {t('sections.local_para2')}
              <sup>
                <a href="#literatura-1">2</a>
              </sup>
            </p>

            <div className="list-base">
              <p>{t('sections.antiseptics_intro')}</p>
              <ul>
                {t.raw('sections.antiseptics_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <h3 className="h3">{t('sections.betadin_title')}</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/banner-betadin-mobile-315x252.webp 1x, /banner-betadin-mobile-630x503.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/banner-betadin-927x916.webp 1x, /banner-betadin-1853x1832.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-1853x1832.webp"
                    alt="Бетадин"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                {t('sections.betadin_para1')}
                <sup>
                  <a href="#literatura-8">9</a>
                </sup>
                .
              </p>

              <p>
                {t('sections.betadin_para2')}
                <sup>
                  <a href="#literatura-18">18</a>
                </sup>
              </p>

              <p>
                {t('sections.betadin_para3')}
              </p>

              <p>
                {t('sections.betadin_para4')}
                <sup>
                  <a href="#literatura-8">9</a>
                </sup>
                . {t('sections.betadin_para5')}
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
                .
              </p>

              <p>
                {t('sections.betadin_para5')}
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  {t('sections.instruction_button')}
                </a>
              </p>
            </div>

            <h4 className="h4">{t('sections.chlorhexidine_title')}</h4>

            <p>
              {t('sections.chlorhexidine_para')}
              <sup>
                <a href="#literatura-1">2</a>
              </sup>
              <sup>
                <a href="#literatura-19">19</a>
              </sup>
              .
            </p>

            <h4 className="h4">{t('sections.hydrogen_title')}</h4>

            <p>
              {t('sections.hydrogen_para')}
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
            </p>

            <h4 className="h4">{t('sections.permanganate_title')}</h4>

            <p>
              {t('sections.permanganate_para')}
              <sup>
                <a href="#literatura-3">4</a>
              </sup>
            </p>

            <h4 className="h4">{t('sections.benzylammonium_title')}</h4>

            <p>
              {t('sections.benzylammonium_para')}
              <sup>
                <a href="#literatura-4">5</a>
              </sup>
            </p>

            <h4 className="h4">{t('sections.polyhexanide_title')}</h4>

            <p>
              {t('sections.polyhexanide_para')}
              <sup>
                <a href="#literatura-6">7</a>
              </sup>
            </p>

            <h4 className="h4">{t('sections.eosin_title')}</h4>

            <p>
              {t('sections.eosin_para')}
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
            </p>

            <p>{t('sections.ointments_intro')}</p>

            <h3 className="h3">{t('sections.ointments_title')}</h3>

            <h4 className="h4">{t('sections.betadin_ointment_title')}</h4>

            <p>
              {t('sections.betadin_ointment_para1')}
              <sup>
                <a href="#literatura-8">9</a>
              </sup>
              <sup>
                <a href="#literatura-16">17</a>
              </sup>
            </p>

            <p>
              {t('sections.betadin_ointment_para2')}
              <sup>
                <a href="#literatura-9">10</a>
              </sup>
            </p>

            <h4 className="h4">{t('sections.dioxidin_title')}</h4>

            <p>
              {t('sections.dioxidin_para')}
              <sup>
                <a href="#literatura-10">11</a>
              </sup>
            </p>

            <h4 className="h4">{t('sections.silver_title')}</h4>

            <p>
              {t('sections.silver_para')}
              <sup>
                <a href="#literatura-12">13</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.sorbents_para')}
              <sup>
                <a href="#literatura-13">14</a>
              </sup>
               {t('sections.sorbents_para2')}
            </p>

            <h4 className="h4">{t('sections.zinc_title')}</h4>

            <p>
              {t('sections.zinc_para')}
            </p>

            <p>
              {t('sections.effectiveness_para')}
            </p>

            <p>
              {t('sections.criteria_para')}
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="profilaktika">
              {t('sections.prevention_title')}
            </h2>

            <p>
              {t('sections.prevention_para1')}
            </p>

            <p>
              {t('sections.prevention_para2')}
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-558x542.webp 1x, /quastion-1115x1084.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/quastion-1115x1084.webp"
                  alt="Декоративные элементы"
                  width={558}
                  height={542}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              {t('faq_title')}
            </h2>

            {t.raw('faq').map((item: any, idx: number) => (
              <div key={idx}>
                <h3 className="h3">{item.q}</h3>
                <p>
                  {item.a}
                </p>
              </div>
            ))}

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('author.name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('author.role')}</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-406x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/moshkova-novyj-406x406 (1).webp"
                  alt="Мошкова Елена Михайловна"
                  width={203}
                  height={203}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              {t('readMore')}
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                {t.raw('relatedArticles').map((article: any, idx: number) => (
                  <div key={idx} className={`swiper-slide ${idx === 0 ? 'swiper-slide-active' : ''}`}>
                    <div className="slide-image">
                      <picture>
                        <source
                          srcSet={article.imgpicture}
                          type="image/webp"
                        />
                        <Image
                          src={article.img}
                          alt={article.title}
                          width={246}
                          height={166}
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </div>
                    <div className="slide-body">
                      <p className="slide-title">
                        <strong>{article.title}</strong>
                      </p>
                      <p>{article.description}</p>
                      <p className="slide-more">
                        <Link href={article.link}>{article.moreText}</Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="h2" id="spisok-literatury">
              {t('literature.title')}
            </h2>

            <ol className="literature">
              {t.raw('literature.items').map((item: string, idx: number) => (
                <li key={idx} id={`literatura-${idx}`}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
