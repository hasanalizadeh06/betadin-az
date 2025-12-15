'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function KesarevoSechenie() {
  const t = useTranslations('Blogs.KesarevoSechenie');
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false);
  const [navTitleHidden, setNavTitleHidden] = useState<boolean>(true);

  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Scrolling40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Scrolling80');
        }
      },
    };

    const triggered: Triggered = {
      40: false,
      80: false,
    };

    const checkScroll = () => {
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
          console.log(percent);
        }
      }

      if (Object.values(triggered).every((v) => v)) {
        window.removeEventListener('scroll', checkScroll);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
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
        {/* Header Section */}
        <div className="container-page-header">
          <div className="container">
            {/* Breadcrumb Navigation */}
            <div className="page-header page-header-breadcrumbs">
              <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/">
                    <span property="name">{t('breadcrumb.home')}</span>
                  </a>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/encyclopedia/">
                    <span property="name">{t('breadcrumb.encyclopedia')}</span>
                  </a>
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
                      srcSet="/icon-230x224.webp 1x, /icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      height={112}
                      width={115}
                      src="/icon.png"
                      alt="Header icon"
                      priority
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">{t('header.subtitle')}</h2>
                <div className="page-header-body">
                  <p>
                    <strong>{t('header.subtitle')}</strong> – {t('header.intro')}
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#vidy-razrezov-pri-kesarevom-sechenii">{t.raw('header.anchors')[0]}</a>
                  </li>
                  <li>
                    <a href="#algoritm-obrabotki-shvov-posle-kesareva-secheniya">
                      {t.raw('header.anchors')[1]}
                    </a>
                  </li>
                  <li>
                    <a href="#rastvor-povidon-yoda-betadin">{t.raw('header.anchors')[2]}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-2-1460x1230.webp, /kartinka-banner-2-1460x1230.webp"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/kartinka-banner-2-1460x1230.webp"
                      alt={t('header.banner_alt')}
                      priority
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
              <ul>
                <li>
                  <a href="#algoritm-obrabotki-shvov-posle-kesareva-secheniya">
                    {t.raw('nav_headers')[0]}
                  </a>
                </li>
                <li>
                  <a href="#vozmozhnye-oslozhneniya--pri-nepravilnoy-obrabotke-ili-ee-otsutstvii">
                    {t.raw('nav_headers')[1]}
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">{t.raw('nav_headers')[2]}</a>
                </li>
                <li>
                  <a href="#spisok-literatury">{t.raw('nav_headers')[3]}</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t.raw('tableOfContents')}</div>
            </nav>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            <li>
              <a href="#algoritm-obrabotki-shvov-posle-kesareva-secheniya">
                {t.raw('nav_headers')[0]}
              </a>
            </li>
            <li>
              <a href="#vozmozhnye-oslozhneniya--pri-nepravilnoy-obrabotke-ili-ee-otsutstvii">
                {t.raw('nav_headers')[1]}
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">{t.raw('nav_headers')[2]}</a>
            </li>
            <li>
              <a href="#spisok-literatury">{t.raw('nav_headers')[3]}</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}>{t.raw('tableOfContents')}</div>
        </nav>

        {/* Disclaimer */}
        <div className="home-container">
          <div className="new-disclaimer">{t('disclaimer')}</div>
        </div>

        {/* Main Content */}
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              {t('sections.intro_p1')}
            </p>

            <p>
              {t('sections.intro_p2')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={505}
                  width={503}
                  src="/circle-503x505.webp"
                  alt="Decorative elements"
                />
              </picture>
            </div>

            <p>
              {t('sections.modern_increase')}
            </p>

            <p>
              {t('sections.planned_vs_emergency')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
            </p>

            <p>
              {t('sections.antiseptic_preparation')}
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('sections.block_title')}</strong>
                </p>
                <p>
                  {t('sections.block_desc')}
                </p>
                <a href="/encyclopedia/povidon-jod/" className="btn btn-green" target="_blank">
                  {t('sections.block_button')}
                </a>
              </div>
              <picture>
                <source
                  srcSet="/povidon-jod-prevyu-620x420.webp"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="/povidon-jod-prevyu-620x420.webp"
                  alt={t('sections.block_alt')}
                />
              </picture>
            </div>

            {/* Section: Виды разрезов */}
            <h3 className="h3" id="vidy-razrezov-pri-kesarevom-sechenii">
              {t('sections.incision_types_title')}
            </h3>
            <div className="list-base">
              <p>
                {t('sections.incision_types_intro')}
              </p>
              <ul>
                {t.raw('sections.incision_types').map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="green">
              <p>
                {t('sections.complex_surgery')}
                <sup>
                  <a href="#spisok-literatury">1</a>
                </sup>
                . 
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
              </p>
            </div>

            <div className="list-base">
              <p>
                {t('sections.access_types_intro')}
              </p>
              <ul>
                {t.raw('sections.access_types').map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-1-1300x652.webp, /istockphoto-1341663000-2048x2048-2-1-1300x652.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={326}
                width={650}
                src="/istockphoto-1341663000-2048x2048-2-1-650x326.webp"
                alt={t('sections.incision_image_alt')}
              />
            </picture>

            {/* Section: Наложение швов */}
            <h3 className="h3">{t('sections.suturing_title')}</h3>
            <div className="big">
              <div className="line">
                <p>
                  {t('sections.suturing_p1')}
                </p>
              </div>
              <div className="line">
                <p>
                  {t('sections.suturing_p2')}
                </p>
              </div>
              <div className="line">
                <p>
                  {t('sections.post_surgery')}
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                {t('sections.video_title')}
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="iframe_desc">
                {t('sections.video_desc')}
              </div>
            </div>

            {/* Section: Алгоритм обработки швов */}
            <h2 className="h2" id="algoritm-obrabotki-shvov-posle-kesareva-secheniya">
              {t('sections.algorithm_title')}
            </h2>
            <p>
              {t('sections.algorithm_p1')}
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.algorithm_p2')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . <br />
            </p>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.rinsing_title')}</strong>
                  </p>
                  <p>
                    {t('sections.rinsing_text')}
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.disinfection_title')}</strong>
                  </p>
                  <p>
                    {t('sections.disinfection_p1')}
                  </p>
                  <p>{t('sections.disinfection_p2')}</p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.bandage_title')}</strong>
                  </p>
                  <p>
                    {t('sections.bandage_text')}
                  </p>
                </div>
              </div>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-3-2-1300x300 (1).webp, /istockphoto-1341663000-2048x2048-2-3-2-1300x300 (1).webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="/istockphoto-1341663000-2048x2048-2-3-2-1300x300 (1).webp"
                alt={t('sections.algorithm_image_alt')}
              />
            </picture>

            {/* Subsection: Раствор повидон-йода */}
            <h3 className="h3" id="rastvor-povidon-yoda-betadin">
              {t('sections.solution_title')}
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
                    loading="lazy"
                    width={927}
                    height={916}
                    src="/banner-betadin-927x916.webp"
                    alt="Betadin solution"
                  />
                </picture>
              </div>
              <p>
                {t('sections.solution_intro')}
              </p>
              <p>
                {t('sections.solution_active')}
                <sup>
                  <a href="#spisok-literatury">4</a>
                </sup>
                .
              </p>
              <p>
                {t('sections.solution_usage')}
                <sup>
                  <a href="#spisok-literatury">8</a>
                </sup>
              </p>
              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  {t('sections.solution_button')}
                </a>
              </p>
            </div>

            {/* Subsection: Мазь Бетадин */}
            <h3 className="h3">{t('sections.ointment_title')}</h3>
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
                    loading="lazy"
                    width={927}
                    height={916}
                    src="/banner-betadin-maz-927x916.webp"
                    alt="Betadin ointment"
                  />
                </picture>
              </div>
              <ul>
                <li>{t('sections.ointment_action_1')}</li>
                <li>
                  {t('sections.ointment_action_2')}
                </li>
              </ul>
              <p>
                {t('sections.ointment_usage')}
              </p>
              <p>
                {t('sections.ointment_efficacy')}
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                .
              </p>
              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  href="/betadin-maz-instruktsiya/"
                >
                  {t('sections.ointment_button')}
                </a>
              </p>
            </div>

            {/* Subsection: Растворы перекиси водорода и марганцовки */}
            <h3 className="h3">{t('sections.hydrogen_peroxide_title')}</h3>
            <p>
              {t('sections.hydrogen_peroxide_text')}
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              , 
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.hydrogen_peroxide_allergy')}
              <sup>
                <a href="#spisok-literatury">7</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.permanganate_text')}
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
            </p>

            {/* Subsection: Раствор хлоргексидина */}
            <h3 className="h3">{t('sections.chlorhexidine_title')}</h3>
            <p>
              {t('sections.chlorhexidine_text')}
              <sup>
                <a href="#spisok-literatury">9</a>
              </sup>
            </p>

            <p>
              {t('sections.chlorhexidine_warning')}
              <sup>
                <a href="#spisok-literatury">11</a>
              </sup>
              .
            </p>

            {/* Subsection: Уход за рубцом */}
            <h3 className="h3">{t('sections.scar_care_title')}</h3>
            <p>
              {t('sections.scar_care_text')}
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-1-1-1300x650.webp, /istockphoto-1341663000-2048x2048-2-1-1-1300x650.webp"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/istockphoto-1341663000-2048x2048-2-1-1-1300x650.webp"
                alt={t('sections.scar_image_alt')}
              />
            </picture>

            {/* Section: Возможные осложнения */}
            <h2 className="h2" id="vozmozhnye-oslozhneniya--pri-nepravilnoy-obrabotke-ili-ee-otsutstvii">
              {t('sections.complications_title')}
            </h2>
            <p>
              {t('sections.complications_temp')}
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.recovery_strategy')}
            </p>

            <p>
              {t('sections.early_mobilization')}
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            <p>
              <strong>{t('sections.complications_intro')}</strong>
            </p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>{t('sections.suture_dehiscence')}</strong>
                </p>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.scar_formation_title')}</strong>
                  </p>
                  <ul>
                    <li>
                      {t('sections.scar_hypertrophic')}
                      <sup>
                        <a href="#spisok-literatury">10</a>
                      </sup>
                      .
                    </li>
                    <li>
                      {t('sections.keloid_formation')}
                      <sup>
                        <a href="#spisok-literatury">10</a>
                      </sup>
                      .
                    </li>
                    <li>
                      {t('sections.hypertrophic_scar')}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.infection_title')}</strong>
                  </p>
                  <p>
                    {t('sections.infection_text')}
                  </p>
                </div>
              </div>
            </div>

            <p>
              {t('sections.infection_prevention')}
            </p>

            <p>
              {t('sections.itching_note')}
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-558x542.webp 1x, /quastion-1115x1084.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={542}
                  width={558}
                  src="/quastion-558x542.webp"
                  alt="Decorative elements"
                />
              </picture>
            </div>

            {/* Section: FAQ */}
            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              {t('sections.faq_title')}
            </h2>

            <h3 className="h3">{t('sections.faq_q1_title')}</h3>
            <p>
              {t('sections.faq_q1_text')}
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            <h3 className="h3">{t('sections.faq_q2_title')}</h3>
            <p>
              {t('sections.faq_q2_text')}
            </p>

            <h3 className="h3">{t('sections.faq_q3_title')}</h3>
            <div className="list-base">
              <p>
                {t('sections.faq_q3_intro')}
                <sup>
                  <a href="#spisok-literatury">10</a>
                </sup>
                :
              </p>
              <ul>
                {t.raw('sections.faq_q3_items').map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              {t('sections.faq_q3_prevention')}
            </p>

            <h3 className="h3">{t('sections.faq_q4_title')}</h3>
            <p>
              {t('sections.faq_q4_text')}
            </p>

            {/* Author Section */}
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
                  loading="lazy"
                  height={203}
                  width={203}
                  src="/moshkova-novyj-406x406 (1).webp"
                  alt={t('sections.author_alt')}
                />
              </picture>
            </div>

            {/* Related Articles Section */}
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
                        srcSet={idx === 0 ? '/maz-na-osnove-joda-prevyu-246x166 (1).webp' : idx === 1 ? '/povidon-jod-prevyu-620x420.webp' : '/rany-s-infekcziej-prevyu-246x166 (1).webp'}
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src={idx === 0 ? '/maz-na-osnove-joda-prevyu-246x166 (1).webp' : idx === 1 ? '/povidon-jod-prevyu-620x420.webp' : '/rany-s-infekcziej-prevyu-246x166 (1).webp'}
                        alt={article.alt}
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
                        <a href={article.link}>{t('sections.read_more_title')}</a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* References Section */}
            <h2 className="h2" id="spisok-literatury">
              {t('sections.literatura_title')}
            </h2>
            <ol className="literature">
              {t.raw('sections.literatura').map((item: string, idx: number) => (
                <li key={idx} id={`literature-${idx}`}>
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
