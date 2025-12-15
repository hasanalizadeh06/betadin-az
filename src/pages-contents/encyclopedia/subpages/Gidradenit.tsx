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

export default function Gidradenit() {
  const t = useTranslations('Blogs.Gidradenit');
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
                  <h1 className="page-header-title-text">
                    {t('header.title')}
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp, /icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/icon-230x224.webp"
                      alt="картинка у заголовка"
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">{t('header.subtitle')}</h2>
                <div className="page-header-body">
                  <p>
                    <strong>{t('header.intro')}</strong>
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#simptomy">{t('nav_headers.symptoms')}</a>
                  </li>
                  <li>
                    <a href="#diagnostika">{t('nav_headers.diagnostics')}</a>
                  </li>
                  <li>
                    <a href="#lechenie">{t('nav_headers.treatment')}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/frame-655-2-730x615.webp 1x, /frame-655-2-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/frame-655-2-1460x1230.webp"
                      alt="Гидраденит: лечение, мази, кремы, средства"
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
                <li>
                  <a href="#simptomy">{t('nav_headers.symptoms')}</a>
                </li>
                <li>
                  <a href="#vozmozhnye-oslozhneniya">{t('nav_headers.complications')}</a>
                </li>
                <li>
                  <a href="#diagnostika">{t('nav_headers.diagnostics')}</a>
                </li>
                <li>
                  <a href="#lechenie">{t('nav_headers.treatment')}</a>
                </li>
                <li>
                  <a href="#profilaktika">{t('nav_headers.prevention')}</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">{t('nav_headers.faq')}</a>
                </li>
                <li>
                  <a href="#spisok-literatury">{t('nav_headers.literature')}</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t('tableOfContents')}</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            <li>
              <a href="#simptomy">{t('nav_headers.symptoms')}</a>
            </li>
            <li>
              <a href="#vozmozhnye-oslozhneniya">{t('nav_headers.complications')}</a>
            </li>
            <li>
              <a href="#diagnostika">{t('nav_headers.diagnostics')}</a>
            </li>
            <li>
              <a href="#lechenie">{t('nav_headers.treatment')}</a>
            </li>
            <li>
              <a href="#profilaktika">{t('nav_headers.prevention')}</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">{t('nav_headers.faq')}</a>
            </li>
            <li>
              <a href="#spisok-literatury">{t('nav_headers.literature')}</a>
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
              {t('sections.intro_para1')}
            </p>

            <p>
              {t('sections.intro_para2')}
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
              {t('sections.pathogenesis_para1')}
            </p>

            <p>
              <strong>{t('sections.pathogenesis_title')}:</strong>
            </p>

            <p>
              {t('sections.pathogenesis_para2')}
            </p>

            <p>
              {t('sections.pathogenesis_para3')}
            </p>

            <div className="list-base">
              <p>
                <strong>{t('sections.predisposing_factors_title')}</strong>
              </p>
              <ul>
                <li>
                  {t('sections.predisposing_factors_obesity')}
                </li>
                <li>
                  {t('sections.predisposing_factors_smoking')}
                </li>
              </ul>
            </div>

            <p>
              {t('sections.bacteria_info')}
            </p>

            <h2 className="h2" id="simptomy">
              {t('sections.symptoms_title')}
            </h2>

            <p>
              {t('sections.symptoms_intro')}
            </p>

            <h3 className="h3">{t('sections.stage1_title')}</h3>

            <p>
              {t('sections.stage1_desc')}
            </p>

            <h3 className="h3">{t('sections.stage2_title')}</h3>

            <p>
              {t('sections.stage2_desc')}
            </p>

            <h3 className="h3">{t('sections.stage3_title')}</h3>

            <p>
              {t('sections.stage3_description')}
            </p>

            <h2 className="h2" id="vozmozhnye-oslozhneniya">
              {t('nav_headers.complications')}
            </h2>

            <p>
              {t('sections.complications_scars')}
            </p>

            <p>
              {t('sections.complications_cancer')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="diagnostika">
              {t('nav_headers.diagnostics')}
            </h2>

            <p>
              {t('sections.diagnostics_desc')}
            </p>

            <p>
              {t('sections.diagnostics_blood_test')}
            </p>

            <p>
              {t('sections.diagnostics_pathogen')}
            </p>

            <p>
              {t('sections.diagnostics_ultrasound')}
            </p>

            <h2 className="h2" id="lechenie">
              {t('nav_headers.treatment')}
            </h2>

            <p>
              {t('sections.treatment_intro')}
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <h3 className="h3">{t('sections.external_therapy_title')}</h3>

            <p>
              {t('sections.external_therapy_desc')}
            </p>

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
                <strong>Раствор Повидон-йода</strong> (
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>
                <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_solution_desc') }} />
              </p>

              <p>
                {t('sections.betadin_mechanism')}
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
                .
              </p>

              <p>
                <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_no_alcohol') }} />
              </p>

              <p>
                <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_ointment') }} />
                <sup>
                  <a href="#spisok-literatury">10</a>
                </sup>
                .
              </p>

              <p>
                <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_efficacy') }} />
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                .
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  {t('sections.betadin_instruction_button')}
                </a>
              </p>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('sections.povidon_iod_info')}</strong>
                </p>
                <p>
                  {t('sections.povidon_iod_desc')}
                </p>
                <a
                  href="/encyclopedia/povidon-jod/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('sections.povidon_iod_button')}
                </a>
              </div>
              <picture>
                <source
                  srcSet="/povidon-jod-prevyu-620x420.webp"
                  type="image/webp"
                />
                <Image
                  src="/povidon-jod-prevyu-620x420.webp"
                  alt="Повидон-йод - превью"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h4 className="h4">{t('sections.nitrofural_title')}</h4>

            <p>
              <strong>
                {t('sections.nitrofural_desc')}
                <sup>
                  <a href="#spisok-literatury">4</a>
                </sup>
              </strong>
            </p>

            <p>
              {t('sections.nitrofural_warning')}
            </p>

            <h2 className="h2" id="profilaktika">
              {t('nav_headers.prevention')}
            </h2>

            <p>
              {t('sections.prevention_desc')}
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
              {t('nav_headers.faq')}
            </h2>

            <h3 className="h3">{t('sections.faq_q1')}</h3>

            <p>
              {t('sections.faq_a1')}
            </p>

            <h3 className="h3">{t('sections.faq_q2')}</h3>

            <p>
              {t('sections.faq_a2')}
            </p>

            <h3 className="h3">{t('sections.faq_q3')}</h3>

            <p>
              {t('sections.faq_a3')}
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('sections.author_name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('sections.author_role')}</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-203x203 (1).webp, /moshkova-novyj-406x406 (1).webp"
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
              {t('sections.read_more_title')}
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                {t.raw('sections.slider_articles').map((article: any, idx: number) => (
                  <div key={idx} className={`swiper-slide ${idx === 0 ? 'swiper-slide-active' : ''}`}>
                    <div className="slide-image">
                        <picture>
                        <source
                          srcSet={idx === 0 
                          ? '/povidon-jod-prevyu-620x420.webp'
                          : idx === 1
                          ? '/follikulit-prevyu-246x166 (1).webp'
                          : '/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp'
                          }
                          type="image/webp"
                        />
                        <Image
                          src={idx === 0 
                          ? '/povidon-jod-prevyu-620x420.webp'
                          : idx === 1
                          ? '/follikulit-prevyu-246x166 (1).webp'
                          : '/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp'
                          }
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
                      <p>
                        {article.description}
                      </p>
                      <p className="slide-more">
                        <Link href={article.link}>{t('sections.slider_more')}</Link>
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
