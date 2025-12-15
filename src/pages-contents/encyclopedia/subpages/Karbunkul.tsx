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

export default function Karbunkul() {
  const t = useTranslations('Blogs.Karbunkul');
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false);
  const [navTitleHidden, setNavTitleHidden] = useState<boolean>(true);
  
  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Scrolling40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Scrolling80');
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
                      alt="Header icon"
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
                  <li>
                    <a href="#diagnostika">{t.raw('header.anchors')[0]}</a>
                  </li>
                  <li>
                    <a href="#lechenie">{t.raw('header.anchors')[1]}</a>
                  </li>
                  <li>
                    <a href="#rastvor-povidon-yoda">{t.raw('header.anchors')[2]}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/frame-759-730x615.webp 1x, /frame-759-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/frame-759-1460x1230.webp"
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
                <li>
                  <a href="#simptomy">{t.raw('nav_headers')[0]}</a>
                </li>
                <li>
                  <a href="#prichiny-poyavleniya-karbunkula">{t.raw('nav_headers')[1]}</a>
                </li>
                <li>
                  <a href="#diagnostika">{t.raw('nav_headers')[2]}</a>
                </li>
                <li>
                  <a href="#lechenie">{t.raw('nav_headers')[3]}</a>
                </li>
                <li>
                  <a href="#profilaktika">{t.raw('nav_headers')[4]}</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">{t.raw('nav_headers')[5]}</a>
                </li>
                <li>
                  <a href="#spisok-literatury">{t.raw('nav_headers')[6]}</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t.raw('tableOfContents')}</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            <li>
              <a href="#simptomy">{t.raw('nav_headers')[0]}</a>
            </li>
            <li>
              <a href="#prichiny-poyavleniya-karbunkula">{t.raw('nav_headers')[1]}</a>
            </li>
            <li>
              <a href="#diagnostika">{t.raw('nav_headers')[2]}</a>
            </li>
            <li>
              <a href="#lechenie">{t.raw('nav_headers')[3]}</a>
            </li>
            <li>
              <a href="#profilaktika">{t.raw('nav_headers')[4]}</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">{t.raw('nav_headers')[5]}</a>
            </li>
            <li>
              <a href="#spisok-literatury">{t.raw('nav_headers')[6]}</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}>{t.raw('tableOfContents')}</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">{t('disclaimer')}</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              {t('sections.size_and_location')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
            </p>

            <p>
              <strong>{t('sections.formation_title')}</strong>
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/circle-1006x1010.webp"
                  alt="Decorative elements"
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-6-scaled-650x350.webp 1x, /mask-group-6-scaled-1300x700.webp 2x"
                type="image/webp"
              />
              <Image
                src="/mask-group-6-scaled-1300x700.webp"
                alt={t('sections.formation_title')}
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h2 className="h2" id="simptomy">
              {t('sections.symptoms_title')}
            </h2>

            <div className="list-base">
              <ul>
                <li>
                  <strong>{t('sections.general_symptoms').split(':')[0]}:</strong> {t('sections.general_symptoms').split(':')[1]}
                </li>
                <li>
                  <strong>{t('sections.local_symptoms').split(':')[0]}:</strong> {t('sections.local_symptoms').split(':')[1]}
                </li>
              </ul>
            </div>

            <h2 className="h2" id="prichiny-poyavleniya-karbunkula">
              {t('sections.causes_title')}
            </h2>

            <p>{t('sections.causes_intro')}</p>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>{t('sections.external_title')}</strong>
                </p>
                <p>
                  <strong>{t('sections.external_title')}</strong> {t('sections.external_text')}
                  <sup>
                    <a href="#spisok-literatury">2</a>
                  </sup>
                  .
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>{t('sections.internal_title')}</strong>
                </p>
                <p>
                  <strong>{t('sections.internal_title')}</strong> {t('sections.internal_text')}
                  <sup>
                    <a href="#spisok-literatury">2</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <p>
              {t('sections.microorganism_text')}
            </p>

            <h2 className="h2" id="diagnostika">
              {t('sections.diagnosis_title')}
            </h2>

            <p>
              {t('sections.diagnosis_intro')}
            </p>

            <p>{t('sections.diagnosis_differential')}</p>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>
                      <Link href="/encyclopedia/furunkul/">{t('sections.furunkul_text').split(':')[0]}</Link>
                    </strong>
                  </p>
                  <p>
                    {t('sections.furunkul_text').split(':')[1]}
                  </p>
                </div>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.abscess_text').split(':')[0]}</strong>
                  </p>
                  <p>
                    {t('sections.abscess_text').split(':')[1]}
                  </p>
                </div>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>
                      {t('sections.pseudofurunculosis_text').split(':')[0]}
                      <sup>
                        <a href="#spisok-literatury">1</a>
                      </sup>
                    </strong>
                  </p>
                  <p>
                    {t('sections.pseudofurunculosis_text').split(':')[1]}
                  </p>
                </div>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>
                      {t('sections.pyogenic_granuloma_text').split(':')[0]}
                      <sup>
                        <a href="#spisok-literatury">1</a>
                      </sup>
                    </strong>
                  </p>
                  <p>
                    {t('sections.pyogenic_granuloma_text').split(':')[1]}
                  </p>
                </div>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.hidradenitis_text').split(':')[0]}</strong>
                  </p>
                  <p>
                    {t('sections.hidradenitis_text').split(':')[1]}
                  </p>
                </div>
              </div>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-14-650x325.webp 1x, /istockphoto-1341663000-2048x2048-2-14-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-14-1300x650.webp"
                alt="Abscess opening"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h2 className="h2" id="lechenie">
              {t('sections.treatment_title')}
            </h2>

            <div className="green">
              <p>
                {t('sections.treatment_warning')}
              </p>
            </div>

            <p>
              {t('sections.treatment_surgical')}
            </p>

            <p>
              {t('sections.treatment_antibiotics')}
            </p>

            <p>
              {t('sections.treatment_local')}
            </p>

            <div className="list-base">
              <p>
                <strong>{t('sections.treatment_local_includes')}</strong>
              </p>
              <ul>
                {t.raw('sections.treatment_local_items').map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('sections.block_title')}</strong>
                </p>
                <p>
                  {t('sections.block_desc')}
                </p>
                <Link href="/encyclopedia/povidon-jod/" className="btn btn-green" target="_blank">
                  {t('sections.block_button')}
                </Link>
              </div>
              <picture>
                <source
                  srcSet="/povidon-jod-prevyu-620x420.webp"
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

            <h3 className="h3">{t('sections.disinfectants_title')}</h3>

            <p>
              {t('sections.disinfectants_text')}
            </p>

            <p>
              {t('sections.disinfectants_suitable')}
            </p>

            <h4 className="h4" id="rastvor-povidon-yoda">
              {t('sections.solution_title')}
            </h4>

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
                    alt="Betadin"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                {t('sections.solution_intro')}
              </p>

              <p>
                {t('sections.solution_alcohol')} <Link href="/encyclopedia/rastvor-joda/">{t('sections.solution_alcohol').match(/раствор йода|йода/)?.[0]}</Link> {t('sections.solution_alcohol').split('раствор йода')[1]}
              </p>

              <p>
                {t('sections.solution_polymer')} <Link href="/encyclopedia/jod/">{t('sections.solution_polymer').match(/йода|йод/)?.[0]}</Link> {t('sections.solution_polymer').split('йода')[1]} <Link href="/encyclopedia/polivinilpirrolidon/">{t('sections.solution_polymer').match(/повидону|повидон/)?.[0]}</Link>{'}'}
              </p>

              <p>
                {t('sections.solution_usage')}
              </p>

              <p>
                {t('sections.solution_carbuncle')}
              </p>

              <p>
                {t('sections.solution_ointment')} <Link href="/encyclopedia/obrabotka-ran/">раны</Link>
                <sup>
                  <a href="#spisok-literatury">7</a>
                </sup>
                {'. '}
              </p>

              <p>
                {t('sections.solution_efficacy')} <Link href="/encyclopedia/rany-s-infekciej/">инфицированных ран</Link>
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                .
              </p>

              <p>
                {t('sections.solution_safety')}
                <sup>
                  <a href="#spisok-literatury">4</a>
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
                  {t('sections.solution_button')}
                </a>
              </p>
            </div>

            <h4 className="h4">{t('sections.chlorhexidine_title')}</h4>

            <p>
              {t('sections.chlorhexidine_text')}
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              .
            </p>

            <h4 className="h4">{t('sections.permanganate_title')}</h4>

            <p>
              {t('sections.permanganate_text')}
              <sup>
                <a href="#spisok-literatury">7</a>
              </sup>
            </p>

            <h3 className="h3">{t('sections.proteolytic_title')}</h3>

            <p>
              {t('sections.proteolytic_text')}
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
            </p>

            <h3 className="h3">{t('sections.epithelialization_title')}</h3>

            <div className="list-base">
              <p>
                <strong>{t('sections.epithelialization_intro')}</strong>
              </p>
              <ul>
                {t.raw('sections.epithelialization_items').map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="h2" id="profilaktika">
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
                  alt="Decorative elements"
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

            <h3 className="h3">{t('sections.faq_q1_title')}</h3>

            <p>
              {t('sections.faq_q1_text')}
            </p>

            <h3 className="h3">{t('sections.faq_q2_title')}</h3>

            <p>
              {t('sections.faq_q2_text')}
            </p>

            <h3 className="h3">{t('sections.faq_q3_title')}</h3>

            <p>
              {t('sections.faq_q3_text')}
            </p>

            <h3 className="h3">{t('sections.faq_q4_title')}</h3>

            <p>
              {t('sections.faq_q4_text')}
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
                  <div key={idx} className={idx === 0 ? 'swiper-slide swiper-slide-active' : 'swiper-slide'}>
                    <div className="slide-image">
                      <picture>
                      <Image
                        src={
                        idx === 0
                          ? '/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp'
                          : idx === 1
                          ? '/povidon-jod-prevyu-620x420.webp'
                          : '/follikulit-prevyu-246x166 (1).webp'
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
                      <p>
                        {article.description}
                      </p>
                      <p className="slide-more">
                        <Link href={article.link}>{t('sections.block_button')}</Link>
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
