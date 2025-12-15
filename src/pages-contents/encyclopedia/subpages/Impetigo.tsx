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

export default function Impetigo() {
  const t = useTranslations('Blogs.Impetigo');
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
                    <strong>Импетиго</strong> – {t('header.intro')}
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#kak-lechat-impetigo">{t('nav_headers.treatment')}</a>
                  </li>
                  <li>
                    <a href="#lechenie-impetigo-mestnymi-preparatami">{t('nav_headers.treatment')}</a>
                  </li>
                  <li>
                    <a href="#profilaktika-impetigo">{t('nav_headers.treatment')}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-6-726x615.webp 1x, /kartinka-banner-6-1453x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-6-1453x1230.webp"
                      alt="Импетиго"
                      width={726}
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
                  <a href="#nebulleznoe-impetigo">{t('nav_headers.non_bullous')}</a>
                </li>
                <li>
                  <a href="#bulleznoe-impetigo">{t('nav_headers.bullous')}</a>
                </li>
                <li>
                  <a href="#ektima">{t('nav_headers.ectima')}</a>
                </li>
                <li>
                  <a href="#diagnostika-impetigo">{t('nav_headers.diagnostics')}</a>
                </li>
                <li>
                  <a href="#kak-lechat-impetigo">{t('nav_headers.treatment')}</a>
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
              <a href="#nebulleznoe-impetigo">{t('nav_headers.non_bullous')}</a>
            </li>
            <li>
              <a href="#bulleznoe-impetigo">{t('nav_headers.bullous')}</a>
            </li>
            <li>
              <a href="#ektima">{t('nav_headers.ectima')}</a>
            </li>
            <li>
              <a href="#diagnostika-impetigo">{t('nav_headers.diagnostics')}</a>
            </li>
            <li>
              <a href="#kak-lechat-impetigo">{t('nav_headers.treatment')}</a>
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
              {t('sections.peak_season')}
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . {t('sections.contagious')}
            </p>

            <p>
              {t('sections.outbreaks')}
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
              {t('sections.immune_compromised')}
            </p>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-1-650x350.webp 1x, /mask-group-1-1300x700.webp 2x"
                type="image/webp"
              />
              <Image
                src="/mask-group-1-1300x700.webp"
                alt="Люди с диабетом или ослабленным иммунитетом склонны к импетиго"
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">{t('sections.causative_agents_title')}</h3>

            <div className="list-base">
              <p>{t('sections.causative_agents_intro')}</p>
              <ul>
                {t.raw('sections.causative_agents_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              {t('sections.golden_staph')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
            </p>

            <h3 className="h3" id="vidy-impetigo">
              {t('sections.types_title')}
            </h3>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>{t('sections.primary_title')}</strong>
                </p>
                <p>{t('sections.primary_desc')}</p>
              </div>
              <div className="column">
                <p>
                  <strong>{t('sections.secondary_title')}</strong>
                </p>
                <p>{t('sections.secondary_desc')}</p>
                <p>
                  <strong>Например</strong>, {t('sections.secondary_example')}
                </p>
              </div>
            </div>

            <p>
              {t('sections.classification')}
              <sup>
                <a href="#spisok-literatury">4,11</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="nebulleznoe-impetigo">
              {t('sections.non_bullous_title')}
            </h2>

            <p>
              {t('sections.non_bullous_desc1')}
              <sup>
                <a href="#spisok-literatury">2, 3</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.non_bullous_desc2')}
            </p>

            <p>
              {t('sections.non_bullous_desc3')}
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-2-6-650x325.webp 1x, /istockphoto-1341663000-2048x2048-2-2-6-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-2-6-1300x650.webp"
                alt="Небуллезное импетиго"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              {t('sections.non_bullous_desc4')}
            </p>

            <h2 className="h2" id="bulleznoe-impetigo">
              {t('sections.bullous_title')}
            </h2>

            <p>
              {t('sections.bullous_desc1')}
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.bullous_desc2')}
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-2-7-650x325.webp 1x, /istockphoto-1341663000-2048x2048-2-2-7-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-2-7-1300x650.webp"
                alt="Буллезное импетиго"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              {t('sections.bullous_desc3')}
            </p>

            <h2 className="h2" id="ektima">
              {t('sections.ectima_title')}
            </h2>

            <p>{t('sections.ectima_desc')}</p>

            <h2 className="h2" id="diagnostika-impetigo">
              {t('sections.diagnostics_section_title')}
            </h2>

            <div className="list-base">
              <p>
                {t('sections.diagnostics_intro')}
                <sup>
                  <a href="#spisok-literatury">2,9</a>
                </sup>
                :
              </p>
              <ul>
                <li>
                  <strong>Визуальный осмотр</strong> {t('sections.diagnostics_visual')}
                </li>
                <li>
                  <strong>Микроскопическое исследование.</strong> {t('sections.diagnostics_microscopy')}
                </li>
                <li>
                  <strong>Клинический анализ крови.</strong> {t('sections.diagnostics_blood')}
                </li>
                <li>
                  <strong>Микроскопия мазков отделяемого</strong> {t('sections.diagnostics_smear')}
                </li>
                <li>
                  <strong>Бактериальный посев</strong> {t('sections.diagnostics_culture')}
                </li>
              </ul>
            </div>

            <h2 className="h2" id="kak-lechat-impetigo">
              {t('sections.treatment_section_title')}
            </h2>

            <p>
              {t('sections.treatment_goal')}
            </p>

            <div className="list-base">
              <p>
                {t('sections.treatment_local_intro')}
              </p>
              <ul>
                {t.raw('sections.treatment_situations').map((item: string, idx: number) => (
                  <li key={idx}>
                    {item}
                    {idx === t.raw('sections.treatment_situations').length - 1 && (
                      <>
                        <br />
                        <br />
                        {t('sections.treatment_oral')}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('sections.povidon_title')}</strong>
                </p>
                <p>
                  {t('sections.povidon_char')}
                </p>
                <a href="/encyclopedia/povidon-jod/" className="btn btn-green" target="_blank" rel="noopener noreferrer">
                  {t('sections.povidon_more')}
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

            <h3 className="h3" id="lechenie-impetigo-mestnymi-preparatami">
              {t('sections.local_treatment_title')}
            </h3>

            <p>{t('sections.local_treatment_intro')}</p>

            <div className="list-base">
              <p>{t('sections.local_treatment_options')}</p>
              <ul>
                <li>
                  <strong>Кератолитические мази</strong> {t('sections.local_keratolytic')}
                </li>
                <li>
                  <strong>Местные дезинфицирующие средства</strong> – {t('sections.local_antiseptic')} <br />
                </li>
                <li>
                  <strong>{t('sections.local_antibacterial')}</strong>
                </li>
                <li>
                  <strong>Комбинированные кортикостероидные мази/кремы</strong> {t('sections.local_corticosteroid')}
                </li>
              </ul>
            </div>

            <p>
              {t('sections.treatment_recommendations')}
              <sup>
                <a href="#spisok-literatury">4,5</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.antimicrobial_use')}
            </p>

            <h3 className="h3">{t('sections.betadin_treatment_title')}</h3>

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
                {t('sections.betadin_spectrum')}
                <sup>
                  <a href="#spisok-literatury">7,8</a>
                </sup>
                .
              </p>

              <p>
                {t('sections.betadin_biofilm')}
              </p>

              <p>
                {t('sections.betadin_no_resistance')}
                <sup>
                  <a href="#spisok-literatury">6</a>
                </sup>
                .
              </p>

              <p>
                {t('sections.betadin_no_burning')}
              </p>

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

            <h3 className="h3" id="profilaktika-impetigo">
              {t('sections.prevention_title')}
            </h3>

            <div className="list-base">
              <p>
                {t('sections.prevention_intro')}
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                :
              </p>
              <ul>
                {t.raw('sections.prevention_recommendations').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

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
              {t('sections.faq_a2_part1')}
            </p>

            <p>
              {t('sections.faq_a2_part2')}
            </p>

            <h3 className="h3">{t('sections.faq_q3')}</h3>

            <p>
              {t('sections.faq_a3')}
            </p>

            <h3 className="h3">{t('sections.faq_q4')}</h3>

            <p>
              {t('sections.faq_a4')}
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('sections.author_name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('sections.author_role')}</p>
              </div>
              <picture>
                <source
                  srcSet="/tamrazova-olga-borisovna-1-179x203.webp 1x, /tamrazova-olga-borisovna-1-359x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/tamrazova-olga-borisovna-1-359x406.webp"
                  alt="Тамразова Ольга Борисовна"
                  width={179}
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
                          srcSet={idx === 0 ? '/maz-na-osnove-joda-prevyu-246x166 (1).webp, /maz-na-osnove-joda-prevyu-246x166 (1).webp' : idx === 1 ? '/polivinilpirrolidon-povidon-prevyu-246x166.webp 1x, /polivinilpirrolidon-povidon-prevyu-491x332.webp 2x' : '/puzyrchatka-prevyu-1-246x166.webp 1x, /puzyrchatka-prevyu-1-491x332.webp 2x'}
                          type="image/webp"
                        />
                        <Image
                          src={idx === 0 ? '/maz-na-osnove-joda-prevyu-246x166 (1).webp' : idx === 1 ? '/polivinilpirrolidon-povidon-prevyu-491x332.webp' : '/puzyrchatka-prevyu-1-491x332.webp'}
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
