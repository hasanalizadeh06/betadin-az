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

export default function JodMaz() {
  const t = useTranslations('Blogs.JodMaz');
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
                    {t('header.intro')}
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#povidon-yod">{t.raw('header.anchors')[0]}</a>
                  </li>
                  <li>
                    <a href="#maz-na-osnove-povidon-yoda-betadin">{t.raw('header.anchors')[1]}</a>
                  </li>
                  <li>
                    <a href="#chasto-zadavaemye-voprosy">{t.raw('header.anchors')[2]}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-3-1-730x615.webp 1x, /kartinka-banner-3-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-3-1-1460x1230.webp"
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
                  <a href="#povidon-yod">{t.raw('nav_headers')[0]}</a>
                </li>
                <li>
                  <a href="#pokazaniya-k-naznacheniyu-mazi-betadin">
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
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t('tableOfContents')}</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            <li>
              <a href="#povidon-yod">{t.raw('nav_headers')[0]}</a>
            </li>
            <li>
              <a href="#pokazaniya-k-naznacheniyu-mazi-betadin">
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
                  alt="Декоративные элементы"
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <div className="list-base">
              <p>
                <strong>
                  {t('sections.ideal_ointment_title')}
                  <sup>
                    <a href="#spisok-literatury">5</a>
                  </sup>
                  :
                </strong>
              </p>
              <ul>
                {t.raw('sections.ideal_ointment_items').map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                {t('sections.ideal_ointment_conclusion')}
              </p>
            </div>

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

            <h2 className="h2" id="povidon-yod">
              {t('sections.povidon_title')}
            </h2>

            <h3 className="h3">{t('sections.mechanism_title')}</h3>

            <p>{t('sections.mechanism_p1')}</p>

            <p>
              {t('sections.mechanism_p2')}
            </p>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                {t('sections.video_title')}
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video about ointment properties"
                ></iframe>
              </div>
              <div className="iframe_desc">
                {t('sections.video_desc')}
              </div>
            </div>

            <h3 className="h3" id="maz-na-osnove-povidon-yoda-betadin">
              {t('sections.ointment_title')}
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
                    alt="Бетадин"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p></p>

              <p>
                {t('sections.ointment_composition')}
              </p>

              <p></p>

              <p>
                {t('sections.ointment_mechanism')}
              </p>

              <ul>
                {t.raw('sections.ointment_microorganisms').map((item: string) => (
                  <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>

              <p></p>

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

            <div className="list-base">
              <p>
                <strong>
                  {t('sections.quick_action_title')}
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>
                  :
                </strong>
              </p>
              <ul>
                {t.raw('sections.quick_action_items').map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              {t('sections.macrogol_p1')}
            </p>

            <p>
              {t('sections.macrogol_p2')}
            </p>

            <p>
              {t('sections.macrogol_p3')}
            </p>

            <p>
              {t('sections.hemostatic_p1')}
            </p>

            <p>
              {t('sections.biofilm_p1')}
            </p>

            <p>
              <strong>{t('sections.biofilm_title')}</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-31-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-31-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-31-1300x650.webp"
                alt={t('sections.biofilm_image_alt')}
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              {t('sections.resistance_p1')}
            </p>

            <p>
              {t('sections.healing_speed_p1')}
            </p>

            <p>
              {t('sections.phases_p1')}
            </p>

            <p>
              {t('sections.efficacy_p1')}
            </p>

            <h2 className="h2" id="pokazaniya-k-naznacheniyu-mazi-betadin">
              {t('sections.indications_title')}
            </h2>

            <p>
              {t('sections.indications_intro')}
            </p>

            <div className="list-base">
              <p>
                <strong>
                  {t('sections.indications_list_title')}
                </strong>
              </p>
              <ul>
                {t.raw('sections.indications').map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <h3 className="h3">{t('sections.application_title')}</h3>

            <p>
              {t('sections.application_text')}
            </p>

            <h3 className="h3">{t('sections.special_instructions_title')}</h3>

            <div className="list-base">
              <ul>
                {t.raw('sections.special_instructions').map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              {t('sections.combined_warning')}
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

            <h3 className="h3">{t('sections.faq_q1_title')}</h3>

            <p>
              {t('sections.faq_q1_text')}
            </p>

            <h3 className="h3">
              {t('sections.faq_q2_title')}
            </h3>

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
                        <source
                          srcSet={idx === 0 ? '/chem-obrabotat-ranu-rebenku-prevyu-246x166.webp' : idx === 1 ? '/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp' : '/povidon-jod-prevyu-620x420.webp'}
                          type="image/webp"
                        />
                        <Image
                          src={idx === 0 ? '/chem-obrabotat-ranu-rebenku-prevyu-246x166.webp' : idx === 1 ? '/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp' : '/povidon-jod-prevyu-620x420.webp'}
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
