'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function Gerpes() {
  const t = useTranslations('Blogs.Gerpes');
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
                  <h1 className="page-header-title-text">{t('header.title')}</h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp 1x, /icon-230x224.webp 2x"
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
                    {t('header.intro')}
                    <sup>
                      <a href="#spisok-literatury">1</a>
                    </sup>
                    .
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
                    <a href="#lechenie-gerpesa">{t('nav_headers.treatment')}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-730x615.webp 1x, /kartinka-banner-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-1460x1230.webp"
                      alt="Мазь от герпеса"
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
            <p>
              {t('sections.intro_para1')}
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
              {t('sections.intro_para2')}
            </p>

            <h2 className="h2" id="tipy-gerpesa">
              {t('sections.types_title')}
            </h2>

            <div className="list-base">
              <p>
                <strong>{t('sections.types_intro')}</strong>
              </p>
              <ul>
                {t.raw('sections.types_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="h2" id="simptomy">
              {t('sections.symptoms_title')}
            </h2>

            <p>{t('sections.symptoms_intro')}</p>

            <h3 className="h3">{t('sections.stages_title')}</h3>

            <div className="big">
              {t.raw('sections.stages_list').map((stage: string, idx: number) => (
                <div key={idx} className="line">
                  <p>{stage}</p>
                </div>
              ))}
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-2-650x150.webp 1x, /istockphoto-1341663000-2048x2048-2-2-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-2-1300x300.webp"
                alt="Стадии развития герпеса 1"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-3-1-650x150.webp 1x, /istockphoto-1341663000-2048x2048-2-3-1-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-3-1-1300x300.webp"
                alt="Стадии развития герпеса 2"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">{t('sections.simple_herpes_title')}</h3>

            <p>
              {t('sections.simple_herpes_distribution')}
            </p>

            <p>
              {t('sections.simple_herpes_accumulation')}
            </p>

            <p>
              {t('sections.simple_herpes_first_episode')}
            </p>

            <p>
              {t('sections.simple_herpes_recurrence')}
            </p>

            <p>
              {t('sections.simple_herpes_location')}
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <h3 className="h3">{t('sections.kaposhi_exema_title')}</h3>

            <p>
              {t('sections.kaposhi_exema_predisposing')}
            </p>

            <p>
              {t('sections.kaposhi_exema_incubation')}
            </p>

            <h3 className="h3">{t('sections.genital_herpes_title')}</h3>

            <p>
              {t('sections.genital_herpes_transmission')}
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <h3 className="h3">{t('sections.herpes_zoster_title')}</h3>

            <p>
              {t('sections.herpes_zoster_description')}
            </p>

            <p>
              {t('sections.herpes_zoster_atypical')}
            </p>

            <h3 className="h3">{t('sections.chickenpox_title')}</h3>

            <p>
              {t('sections.chickenpox_incubation')}
            </p>

            <p>
              {t('sections.chickenpox_mild')}
            </p>

            <p>
              {t('sections.chickenpox_moderate')}
            </p>

            <p>
              {t('sections.chickenpox_severe')}
            </p>

            <h2 className="h2" id="diagnostika">
              {t('sections.diagnostics_title')}
            </h2>

            <p>
              {t('sections.diagnostics_description')}
            </p>

            <div className="list-base">
              <p>
                <strong>{t('sections.diagnostics_intro')}</strong>
              </p>
              <ul>
                {t.raw('sections.diagnostics_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              {t('sections.diagnostics_secondary')}
              <a href="/encyclopedia/piodermiya/" title="Пиодермия: лечение/мазь/крем/средства">
                {t('sections.diagnostics_link')}
              </a>
              . {t('sections.diagnostics_hiv')}
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('sections.pyoderma_title')}</strong>
                </p>
                <p>
                  {t('sections.pyoderma_description')}
                </p>
                <a
                  href="/encyclopedia/piodermiya/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('sections.pyoderma_button')}
                </a>
              </div>
              <picture>
                <source
                  srcSet="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp, /piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp"
                  alt="Пиодермия: лечение, мази, кремы, средства - превью"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="lechenie-gerpesa">
              {t('sections.treatment_title')}
            </h2>

            <div className="list-base">
              <p>
                <strong>{t('sections.treatment_intro')}</strong>
              </p>
              <ul>
                {t.raw('sections.treatment_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="h2" id="vidy-sredstv-ot-gerpesa">
              {t('sections.remedies_title')}
            </h2>

            <p>
              {t('sections.remedies_intro')}
            </p>

            <p>
              {t.rich('sections.remedies_comparison')}
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

              <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_solution_para1') }} />

              <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_solution_para2') }} />

              <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_solution_para3') }} />

              <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_solution_para4') }} />

              <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_solution_para5') }} />

              <p dangerouslySetInnerHTML={{ __html: t.raw('sections.betadin_solution_para6') }} />

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

            <h3 className="h3">{t('sections.ointments_title')}</h3>

            <div className="list-base">
              <p>{t('sections.ointments_intro')}</p>
              <ul>
                <li>
                  {t('sections.ointments_acyclovir')}
                  <sup>
                    <a href="#spisok-literatury">6</a>
                  </sup>
                </li>
                <li>
                  {t('sections.ointments_penciclovir')}
                  <sup>
                    <a href="#spisok-literatury">7</a>
                  </sup>
                </li>
                <li>
                  {t('sections.ointments_tetrachloroglycopyranoside')}
                  <sup>
                    <a href="#spisok-literatury">9</a>
                  </sup>
                </li>
              </ul>
            </div>

            <p>
              {t('sections.ointments_remember')}
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

            <p>{t('sections.prevention_para3')}</p>

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
                  srcSet="/moshkova-novyj-406x406 (1).webp, /moshkova-novyj-812x812 (1).webp"
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
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/borodavki-mazi-kremy-lechenie-pervyu-246x166.webp 1x, /borodavki-mazi-kremy-lechenie-pervyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/borodavki-mazi-kremy-lechenie-pervyu-491x332.webp"
                        alt="Бородавки: мази, кремы, лечение - первью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t.raw('sections.slider_articles')[0].title}</strong>
                    </p>
                    <p>
                      {t.raw('sections.slider_articles')[0].description}
                    </p>
                    <p className="slide-more">
                      <Link href={t.raw('sections.slider_articles')[0].link}>{t('sections.slider_more')}</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp, /piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp"
                        alt="Пиодермия: лечение, мази, кремы, средства - превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t.raw('sections.slider_articles')[1].title}</strong>
                    </p>
                    <p>
                      {t.raw('sections.slider_articles')[1].description}
                    </p>
                    <p className="slide-more">
                      <Link href={t.raw('sections.slider_articles')[1].link}>{t('sections.slider_more')}</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/impetigo-prevyu-246x166.webp 1x, /impetigo-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/impetigo-prevyu-246x166.webp"
                        alt="Импетиго-превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t.raw('sections.slider_articles')[2].title}</strong>
                    </p>
                    <p>
                      {t.raw('sections.slider_articles')[2].description}
                    </p>
                    <p className="slide-more">
                      <Link href={t.raw('sections.slider_articles')[2].link}>{t('sections.slider_more')}</Link>
                    </p>
                  </div>
                </div>
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
