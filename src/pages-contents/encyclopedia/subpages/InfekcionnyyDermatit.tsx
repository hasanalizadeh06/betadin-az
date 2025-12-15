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

export default function InfekcionnyyDermatit() {
  const t = useTranslations('Blogs.InfekcionnyyDermatit');
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
                  <h1 className="page-header-title-text">{t('header.title')}</h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
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
                    <p dangerouslySetInnerHTML={{ __html: t.raw('header.intro') }} />
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#prichiny-vozniknoveniya-infekcionnogo-dermatita">{t('nav_headers.causes')}</a>
                  </li>
                  <li>
                    <a href="#simptomy-infekcionnogo-dermatita">{t('nav_headers.symptoms')}</a>
                  </li>
                  <li>
                    <a href="#lechenie-infekcionnogo-dermatita">{t('nav_headers.treatment')}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/banner-infekczionnyj-dermatit-730x615.webp 1x, /banner-infekczionnyj-dermatit-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/banner-infekczionnyj-dermatit-1460x1230.webp"
                      alt="Дезинфекция после удаления зуба"
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
                  <a href="#prichiny-vozniknoveniya-infekcionnogo-dermatita">
                    {t('nav_headers.causes_full')}
                  </a>
                </li>
                <li>
                  <a href="#vidy-infekcionnogo-dermatita">{t('nav_headers.types')}</a>
                </li>
                <li>
                  <a href="#simptomy-infekcionnogo-dermatita">{t('nav_headers.symptoms_full')}</a>
                </li>
                <li>
                  <a href="#kak-diagnostiruyut-infekcionnyy-dermatit">{t('nav_headers.diagnostics')}</a>
                </li>
                <li>
                  <a href="#lechenie-infekcionnogo-dermatita">{t('nav_headers.treatment_full')}</a>
                </li>
                <li>
                  <a href="#profilaktika-infekcionnogo-dermatita">{t('nav_headers.prevention')}</a>
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
              <a href="#prichiny-vozniknoveniya-infekcionnogo-dermatita">
                {t('nav_headers.causes_full')}
              </a>
            </li>
            <li>
              <a href="#vidy-infekcionnogo-dermatita">{t('nav_headers.types')}</a>
            </li>
            <li>
              <a href="#simptomy-infekcionnogo-dermatita">{t('nav_headers.symptoms_full')}</a>
            </li>
            <li>
              <a href="#kak-diagnostiruyut-infekcionnyy-dermatit">{t('nav_headers.diagnostics')}</a>
            </li>
            <li>
              <a href="#lechenie-infekcionnogo-dermatita">{t('nav_headers.treatment_full')}</a>
            </li>
            <li>
              <a href="#profilaktika-infekcionnogo-dermatita">{t('nav_headers.prevention')}</a>
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
            <h2 className="h2" id="prichiny-vozniknoveniya-infekcionnogo-dermatita">
              {t('sections.causes_title')}
            </h2>

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

            <div className="list-base">
              <p>
                {t('sections.predisposing_intro')}
                <sup>
                  <a href="#spisok-literatury">1</a>
                </sup>
                :
              </p>
              <ul>
                {t.raw('sections.predisposing_factors').map((factor: string, idx: number) => (
                  <li key={idx}>{factor}</li>
                ))}
              </ul>
            </div>

            <h2 className="h2" id="vidy-infekcionnogo-dermatita">
              {t('sections.types_title')}
            </h2>

            <div className="list-base">
              <p>{t('sections.types_intro')}</p>
              <ul>
                {t.raw('sections.types_list').map((type: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: type }} />
                ))}
              </ul>
            </div>

            <h2 className="h2" id="simptomy-infekcionnogo-dermatita">
              {t('nav_headers.symptoms_full')}
            </h2>

            <p>
              {t('sections.symptoms_intro')}
            </p>

            <h3 className="h3">{t('sections.pyoderma_title')}</h3>

            <p>
              {t('sections.pyoderma_intro')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/illyustracziya-id-2-v3at4x-650x325.webp 1x, /illyustracziya-id-2-v3at4x-1300x649.webp 2x"
                type="image/webp"
              />
              <Image
                src="/illyustracziya-id-2-v3at4x-1300x649.webp"
                alt="Стафилодермии"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h4 className="h4">{t('sections.staphy_title')}</h4>

            <p>
                <p dangerouslySetInnerHTML={{ __html: t.raw('sections.staphy_desc') }} />
            </p>

            <h4 className="h4">{t('sections.strepto_title')}</h4>

            <p>
              <p dangerouslySetInnerHTML={{ __html: t.raw('sections.strepto_desc') }} />
            </p>

            <p>
              {t('sections.strepto_types')}
            </p>

            <h3 className="h3">{t('sections.fungal_title')}</h3>

            <p>
              {t('sections.fungal_intro')}
            </p>

            <div className="list-base">
              <p>
                {t('sections.fungal_types_intro')}
                <sup>
                  <a href="#spisok-literatury">1</a>
                </sup>
                :
              </p>
              <ul>
                {t.raw('sections.fungal_types_list').map((type: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: type }} />
                ))}
              </ul>
            </div>

            <h3 className="h3">{t('sections.viral_title')}</h3>

            <p>
              {t('sections.viral_herpes_desc')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.viral_hpv_desc')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.viral_other_desc')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.viral_mollusk_desc')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h3 className="h3">{t('sections.parasitic_title')}</h3>

            <p>
              {t('sections.parasitic_desc')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <p>{t('sections.parasitic_complication')}</p>

            <h2 className="h2" id="kak-diagnostiruyut-infekcionnyy-dermatit">
              {t('nav_headers.diagnostics')}
            </h2>

            <p>
              {t('sections.diagnostics_intro')}
            </p>

            <div className="list-base">
              <p>{t('sections.diagnostics_on_visit')}</p>
              <ul>
                {t.raw('sections.diagnostics_methods').map((method: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: method }} />
                ))}
              </ul>
            </div>

            <p>
              {t('sections.diagnostics_consult')}
            </p>

            <h2 className="h2" id="lechenie-infekcionnogo-dermatita">
              {t('nav_headers.treatment_full')}
            </h2>

            <div className="list-base">
              <p>
                {t('sections.treatment_intro')}
                <sup>
                  <a href="#spisok-literatury">1</a>
                </sup>
                :
              </p>
              <ul>
                {t.raw('sections.treatment_approaches').map((approach: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: approach }} />
                ))}
              </ul>
            </div>

            <h3 className="h3">{t('sections.local_title')}</h3>

            <p>
              {t('sections.local_intro')}
            </p>

            <h3 className="h3">{t('sections.local_title')}</h3>

            <p>
              {t('sections.local_intro')}
            </p>

            <h4 className="h4">{t('sections.povidon_solution_title')}</h4>

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
                {t('sections.povidon_solution_intro')}
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
                :
              </p>
              <ul>
                {t.raw('sections.povidon_solution_benefits').map((benefit: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: benefit }} />
                ))}
              </ul>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  {t('sections.betadin_instruction')}
                </a>
              </p>
            </div>

            <h4 className="h4">{t('sections.povidon_ointment_title')}</h4>

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
                    alt="Бетадин"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                {t('sections.povidon_ointment_text1')}
                <sup>
                  <a href="#spisok-literatury">13</a>
                </sup>
              </p>

              <p>
                {t('sections.povidon_ointment_text2')}
                <sup>
                  <a href="#spisok-literatury">10</a>
                </sup>
                .
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-maz-instruktsiya/"
                >
                  {t('sections.betadin_instruction')}
                </a>
              </p>
            </div>

            <div className="green">
              <p>
                {t('sections.betadin_active_use')}
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
                .
              </p>
            </div>

            <h4 className="h4">{t('sections.fukortsyn_title')}</h4>

            <p>{t('sections.fukortsyn_text')}</p>

            <picture className="img-normal">
              <source
                srcSet="/fukorczin-scaled-650x150.webp 1x, /fukorczin-scaled-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/fukorczin-scaled-1300x300.webp"
                alt="«Фукорцин»"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              {t('sections.fukortsyn_info')}
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              .
            </p>

            <h4 className="h4">{t('sections.brilliant_title')}</h4>

            <p>
              {t('sections.brilliant_text')}
            </p>

            <picture className="img-normal">
              <source
                srcSet="/od-a4-2at4x-650x167.webp 1x, /od-a4-2at4x-1300x334.webp 2x"
                type="image/webp"
              />
              <Image
                src="/od-a4-2at4x-1300x334.webp"
                alt="«Зелёнка»"
                width={650}
                height={167}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              {t('sections.brilliant_info')}
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>

            <h4 className="h4">{t('sections.salicylic_title')}</h4>

            <p>
              {t('sections.salicylic_text')}
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/saliczilovaya-kislota-1-scaled-650x150.webp, /saliczilovaya-kislota-1-scaled-650x150.webp"
                type="image/webp"
              />
              <Image
                src="/saliczilovaya-kislota-1-scaled-650x150.webp"
                alt="«Салициловая кислота»"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h4 className="h4">{t('sections.permanganate_title')}</h4>

            <p>
              {t('sections.permanganate_text')}
            </p>

            <picture className="img-normal">
              <source
                srcSet="/od-a3-2at4x-650x166.webp, /od-a3-2at4x-650x166.webp"
                type="image/webp"
              />
              <Image
                src="/od-a3-2at4x-650x166.webp"
                alt="Перманганат калия"
                width={650}
                height={166}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              {t('sections.permanganate_info')}
              <sup>
                <a href="#spisok-literatury">7</a>
              </sup>
              .
            </p>

            <h4 className="h4">{t('sections.chlorhexidine_title')}</h4>

            <p>
              {t('sections.chlorhexidine_text')}
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
            </p>

            <figure className="wp-block-image size-large">
              <Image
                src="/hlorgeksedin-scaled-1300x300.webp"
                alt="Хлоргексидин"
                width={1024}
                height={236}
                loading="lazy"
                decoding="async"
              />
            </figure>

            <h2 className="h2" id="profilaktika-infekcionnogo-dermatita">
              {t('sections.prevention_title')}
            </h2>

            <p>
              {t('sections.prevention_text')}
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
              {t('sections.faq_title')}
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
                  srcSet="/moshkova-novyj-406x406 (1).webp, /moshkova-novyj-406x406 (1).webp"
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
                          srcSet={idx === 0 ? "/impetigo-prevyu-246x166.webp 1x, /impetigo-prevyu-491x332.webp 2x" : idx === 1 ? "/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp,/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp" : "/maz-na-osnove-joda-prevyu-246x166 (1).webp, /maz-na-osnove-joda-prevyu-246x166 (1).webp"}
                          type="image/webp"
                        />
                        <Image
                          src={idx === 0 ? "/impetigo-prevyu-491x332.webp" : idx === 1 ? "/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp" : "/maz-na-osnove-joda-prevyu-246x166 (1).webp"}
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
                        <Link href={article.link}>Подробнее</Link>
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
                <li key={idx} id={`literatura-${idx}`}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
