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

export default function Jod() {
  const t = useTranslations('Blogs.Jod');
  const [scrollTriggered, setScrollTriggered] = useState<Triggered>({
    40: false,
    80: false,
  });
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
              <ol className="breadcrumb" vocab="https://schema.org/">
                <li property="itemListElement">
                  <Link property="item" href="/">
                    <span property="name">{t('breadcrumb.home')}</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement">
                  <Link property="item" href="/encyclopedia/">
                    <span property="name">{t('breadcrumb.encyclopedia')}</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement">
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
                      srcSet="/icon-230x224.webp, /icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/icon-230x224.webp"
                      alt={t('header.alt')}
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">{t('header.subtitle')}</h2>
                <div className="page-header-body">
                  <p>
                    {t('header.intro')}
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
                      srcSet="/kartinka-banner-1-1-730x615.webp 1x, /kartinka-banner-1-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-1-1-1460x1230.webp"
                      alt={t('header.banner_alt')}
                      width={730}
                      height={615}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
              <ul>
                {t.raw('nav_headers').map((header: string, idx: number) => {
                  const hrefMap: { [key: number]: string } = {
                    0: '#shchitovidnaya-zheleza-i-yod',
                    1: '#gde-iskat-mikroelement-yod',
                    2: '#otkrytie-yoda',
                    3: '#radiaciya-i-yod',
                    4: '#yod-v-sovremennoy-diagnostike-zabolevaniy',
                    5: '#kak-rabotaet-yod-iz-domashney-aptechki',
                    6: '#rastvor-yoda-v-obshchevrachebnoy-praktike',
                    7: '#rastvor-yoda-v-dermatologii',
                    8: '#proba-minora-v-praktike-vracha-kosmetologa',
                    9: '#osobennosti-ispolzovaniya-rastvora-yoda',
                    10: '#pravila-obrabotki-ranevoy-poverhnosti-yodom',
                    11: '#otlichie-povidon-yoda-ot-spirtovogo-yodnogo-rastvora',
                    12: '#mery-predostorozhnosti-pri-ispolzovanii-lineyki-sredstv-betadin',
                  };
                  return (
                    <li key={idx}>
                      <a href={hrefMap[idx]}>{header}</a>
                    </li>
                  );
                })}
                <li>
                  <a href="#spisok-literatury">{t.raw('nav_headers')[13]}</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t('tableOfContents')}</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            {t.raw('nav_headers').map((header: string, idx: number) => {
              const hrefMap: { [key: number]: string } = {
                0: '#shchitovidnaya-zheleza-i-yod',
                1: '#gde-iskat-mikroelement-yod',
                2: '#otkrytie-yoda',
                3: '#radiaciya-i-yod',
                4: '#yod-v-sovremennoy-diagnostike-zabolevaniy',
                5: '#kak-rabotaet-yod-iz-domashney-aptechki',
                6: '#rastvor-yoda-v-obshchevrachebnoy-praktike',
                7: '#rastvor-yoda-v-dermatologii',
                8: '#proba-minora-v-praktike-vracha-kosmetologa',
                9: '#osobennosti-ispolzovaniya-rastvora-yoda',
                10: '#pravila-obrabotki-ranevoy-poverhnosti-yodom',
                11: '#otlichie-povidon-yoda-ot-spirtovogo-yodnogo-rastvora',
                12: '#mery-predostorozhnosti-pri-ispolzovanii-lineyki-sredstv-betadin',
              };
              return (
                <li key={idx}>
                  <a href={hrefMap[idx]}>{header}</a>
                </li>
              );
            })}
            <li>
              <a href="#spisok-literatury">{t.raw('nav_headers')[13]}</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}>{t('tableOfContents')}</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">{t('disclaimer')}</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              {t('sections.intro_p1')}
            </p>

            <p>
              {t('sections.intro_p2')}
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/circle-1006x1010.webp"
                  alt={t('sections.decor_alt')}
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="shchitovidnaya-zheleza-i-yod">
              {t('sections.thyroid_title')}
            </h2>

            <p>
              {t('sections.thyroid_p1')}
            </p>

            <p>
              {t('sections.thyroid_p2')}
            </p>

            <h2 className="h2" id="gde-iskat-mikroelement-yod">
              {t('sections.sources_title')}
            </h2>

            <p>
              {t('sections.sources_p1')}
            </p>

            <p>
              {t('sections.sources_p2')}
            </p>

            <h2 className="h2" id="otkrytie-yoda">
              {t('sections.discovery_title')}
            </h2>

            <p>
              {t('sections.discovery_text')}
            </p>

            <h2 className="h2" id="radiaciya-i-yod">
              {t('sections.radiation_title')}
            </h2>

            <p>
              {t('sections.radiation_text')}
            </p>

            <h2 className="h2" id="yod-v-sovremennoy-diagnostike-zabolevaniy">
              {t('sections.diagnostics_title')}
            </h2>

            <p>
              {t('sections.diagnostics_text')}
            </p>

            <h2 className="h2" id="kak-rabotaet-yod-iz-domashney-aptechki">
              {t('sections.home_title')}
            </h2>

            <p>
              {t('sections.home_text')}
            </p>

            <h2 className="h2" id="rastvor-yoda-v-obshchevrachebnoy-praktike">
              {t('sections.general_practice_title')}
            </h2>

            <p>
              {t('sections.general_practice_text')}
            </p>

            <h2 className="h2" id="rastvor-yoda-v-dermatologii">
              {t('sections.dermatology_title')}
            </h2>

            <p>
              {t('sections.dermatology_intro')}
            </p>

            <p>
              <strong>{t('sections.balcer_title')}</strong>
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>{' '}
              {t('sections.balcer_text')}
            </p>

            <p>
              Для диагностики герпетиформного дерматита Дюринга (разновидность пузырного дерматоза) можно провести{' '}
              <strong>пробу Ядассона</strong>
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              {t('sections.jadassohn_text')}
            </p>

            <p>
              <strong>{t('sections.microsporya_title')}</strong> {t('sections.microsporya_text')}
            </p>

            <h2 className="h2" id="proba-minora-v-praktike-vracha-kosmetologa">
              {t('sections.minor_title')}
            </h2>

            <p>
              {t('sections.minor_text')}
            </p>

            <h2 className="h2" id="osobennosti-ispolzovaniya-rastvora-yoda">
              {t('sections.features_title')}
            </h2>

            <p>
              {t('sections.features_p1')}
            </p>

            <p>
              {t('sections.features_p2')}
            </p>

            <p>
              {t('sections.features_p3')}
            </p>

            <h2 className="h2" id="pravila-obrabotki-ranevoy-poverhnosti-yodom">
              {t('sections.wound_rules_title')}
            </h2>

            <p>
              {t('sections.wound_rules_text')}
              <a href="/encyclopedia/chem-obrabotat-ranu-rebenku/" title="Чем обработать рану ребенку">
                {t('sections.wound_rules_link')}
              </a>
            </p>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                {t('sections.video1_title')}
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={t('sections.video1_alt')}
                ></iframe>
              </div>
              <div className="iframe_desc">
                {t('sections.video1_desc')}
              </div>
            </div>

            <h2 className="h2" id="otlichie-povidon-yoda-ot-spirtovogo-yodnogo-rastvora">
              {t('sections.difference_title')}
            </h2>

            <p>
              {t('sections.difference_text')}
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('sections.block_title')}</strong>
                </p>
                <p>
                  {t('sections.block_desc')}
                </p>
                <a
                  href="/encyclopedia/povidon-jod/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('sections.block_button')}
                </a>
              </div>
              <picture>
                <source
                  srcSet="/povidon-jod-prevyu-310x210.webp 1x, /povidon-jod-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/povidon-jod-prevyu-620x420.webp"
                  alt={t('sections.block_alt')}
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3" id="formy-vypuska-betadin">
              {t('sections.forms_title')}
            </h3>

            <ul className="wp-block-list">
              {t.raw('sections.forms').map((form: string, idx: number) => (
                <li key={idx}>{form}</li>
              ))}
            </ul>

            <h2 className="h2">{t('sections.betadin_series_title')}</h2>

            <h3 className="h3" id="rastvor-betadin-dlya-pacientov-poliklinik-i-bolnic">
              {t('sections.solution_clinics_title')}
            </h3>

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
                    alt={t('sections.solution_clinics_alt')}
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                {t('sections.solution_clinics_p1')}
                <sup>
                  <a href="#spisok-literatury">12</a>
                </sup>
                .
              </p>

              <p>
                {t('sections.solution_clinics_p2')}
              </p>

              <p>
                {t('sections.solution_clinics_p3')}
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  {t('sections.solution_instruction')}
                </a>
              </p>
            </div>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                {t('sections.video1_title')}
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={t('sections.video1_alt')}
                ></iframe>
              </div>
              <div className="iframe_desc">
                {t('sections.video1_desc')}
              </div>
            </div>

            <h3 className="h3" id="rastvor-betadin-v-praktike-stomatologov-i-otorinolaringolov-lor-vrachey">
              {t('sections.stomatology_title')}
            </h3>

            <p>
              {t('sections.stomatology_text')}
              <sup>
                <a href="#spisok-literatury">7, 12, 13</a>
              </sup>
              .
            </p>

            <h3 className="h3" id="betadin-v-ginekologii-i-venerologii">
              {t('sections.gynecology_title')}
            </h3>

            <p>
              {t('sections.gynecology_text')}
              <sup>
                <a href="#spisok-literatury">7, 8</a>
              </sup>
              .
            </p>

            <h3 className="h3" id="maz-betadin-v-dermatologii">
              {t('sections.ointment_dermatology_title')}
            </h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/banner-betadin-maz-mobile-315x226.webp 1x, /banner-betadin-maz-mobile-630x451.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/banner-betadin-maz-927x916.webp 1x, /banner-betadin-maz-1853x1832.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-maz-1853x1832.webp"
                    alt={t('sections.ointment_alt')}
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                {t('sections.ointment_p1')}
                <sup>
                  <a href="#spisok-literatury">12</a>
                </sup>
                . {t('sections.ointment_p2')}
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-maz-instruktsiya/"
                >
                  {t('sections.ointment_instruction')}
                </a>
              </p>
            </div>

            <h2 className="h2" id="mery-predostorozhnosti-pri-ispolzovanii-lineyki-sredstv-betadin">
              {t('sections.precautions_title')}
            </h2>

            <p>
              {t('sections.precautions_text')}
              <sup>
                <a href="#spisok-literatury">12</a>
              </sup>
              . {t('sections.precautions_note')}
              <sup>
                <a href="#spisok-literatury">12</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.important_text')}
            </p>

            <div className="green">
              <p>
                <strong>{t('sections.important_title')}</strong>
              </p>
              <p>{t('sections.important_text')}</p>
            </div>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('sections.author_name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('sections.author_role')}</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-406x406 (1).webp, /moshkova-novyj-406x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/moshkova-novyj-406x406 (1).webp"
                  alt={t('sections.author_alt')}
                  width={203}
                  height={203}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              {t('sections.read_more_title')}
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                {t.raw('sections.slider_articles').map((article: any, idx: number) => (
                  <div key={idx} className={`swiper-slide ${idx === 0 ? 'swiper-slide-active' : ''}`}>
                    <div className="slide-image">
                        <picture>
                        <source
                          srcSet={
                          idx === 0
                            ? '/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp,'
                            : idx === 1
                            ? '/rany-u-detej-prevyu-246x166.webp,'
                            : '/diabeticheskaya-stopa-lechenie-mazi-kremy-sredstva-prevyu-246x166.webp,'
                          }
                          type="image/webp"
                        />
                        <img
                          src={
                          idx === 0
                            ? '/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp'
                            : idx === 1
                            ? '/rany-u-detej-prevyu-246x166.webp'
                            : '/diabeticheskaya-stopa-lechenie-mazi-kremy-sredstva-prevyu-246x166.webp'
                          }
                          alt={article.alt}
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
                        <Link href={article.link}>{t('sections.read_more_title')}</Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="h2" id="spisok-literatury">
              {t('sections.literatura_title')}
            </h2>

            <ol className="literature">
              {t.raw('sections.literatura').map((item: string, idx: number) => (
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
