 'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type NavItem = { text: string; href: string };
type LinkItem = { text: string; href: string };
type SlideItem = { title: string; description: string; more: string; href: string };

const ChemObrabotatRanuRebenku: React.FC = () => {
  const t = useTranslations('Blogs.ChemObrabotatRanuRebenku');
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false);
  const [navTitleHidden, setNavTitleHidden] = useState<boolean>(true);

  useEffect(() => {
    const scrollGoals: { [key: number]: () => void } = {
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

    const triggered: { [key: number]: boolean } = {
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

  const getList = <T = string>(key: string): T[] => {
    const value = t.raw(key);
    return Array.isArray(value) ? (value as T[]) : [];
  };

  const headerAnchors = getList<string>('header.anchors');
  const introParagraphs = getList<string>('introParagraphs');
  const navItems = getList<NavItem>('nav');
  const listItems = getList<string>('sections.list_items');
  const halogenLinks = getList<LinkItem>('sections.halogen_links');
  const forChildrenItems = getList<string>('sections.for_children_items');
  const anilineList = getList<string>('sections.aniline.list');
  const anilineParagraphs = getList<string>('sections.aniline.paragraphs');
  const anilineWarnings = getList<string>('sections.aniline.warning_paragraphs');
  const oxidizersList = getList<string>('sections.oxidizers_list');
  const acidsList = getList<string>('sections.acids_list');
  const phenolsList = getList<string>('sections.phenols_list');
  const zincList = getList<string>('sections.zinc_list');
  const silverList = getList<string>('sections.silver_list');
  const quatsList = getList<string>('sections.quats_list');
  const stageItems = getList<string>('sections.stage_items');
  const advantagesList = getList<string>('sections.advantages_list');
  const surgeryParagraphs = getList<string>('surgery_paragraphs');
  const relatedSlides = getList<SlideItem>('relatedSlides');
  const literatureItems = getList<string>('literature.items');

  return (
    <main>
      <article>
        <div className="container-page-header">
          <div className="container">
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
                  <p>{t('header.intro.p1')}</p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li><a href="#antisepticheskie-obezzarazhivayushchie-sredstva-dlya-obrabotki-ran">{headerAnchors[0] ?? ''}</a></li>
                  <li><a href="#pervichnaya-dovrachebnaya-obrabotka-ran">{headerAnchors[1] ?? ''}</a></li>
                  <li><a href="#lechenie-ran-hirurgicheskim-putem">{headerAnchors[2] ?? ''}</a></li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source srcSet="/frame-655-9-730x615.webp 1x, /frame-655-9-730x615.webp 2x" type="image/webp" />
                    <img height={615} width={730} src="/frame-655-9-730x615.webp" alt={t('imageAlts.mainImage')} />
                  </picture>
                </div>
              </div>
            </div>
            <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
              <ul>
                {navItems.map((n, i) => (
                  <li key={i}><a href={n.href}>{n.text}</a></li>
                ))}
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t('tableOfContents')}</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            {navItems.map((n, i) => (
              <li key={i}><a href={n.href}>{n.text}</a></li>
            ))}
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}>{t('tableOfContents')}</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">{t('disclaimer')}</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x" type="image/webp" />
                <img height={505} width={503} src="/circle-503x505.webp" alt={t('imageAlts.decorative')} />
              </picture>
            </div>

            {/* Intro paragraphs rendered above from translations */}

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">{t('video.title')}: </div>
              <div className="iframe-container">
                <iframe
                  className="lazyloaded"
                  src="https://rutube.ru/play/embed/b4d481279bdfcbafbb01e36ea31c0c4b/?p=aVSDYD--vLEfYAnNlSgG-Q"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={t('video.title')}
                />
              </div>
              <div className="iframe_desc">{t('video.description')}</div>
            </div>


            <h2 className="h2" id="antisepticheskie-obezzarazhivayushchie-sredstva-dlya-obrabotki-ran">{t('sections.antiseptics_title')}</h2>

            <p>{t('sections.antiseptics_para')}</p>

            <div className="list-base">
              <p>{t('sections.list_intro')}</p>
              <ul>
                {listItems.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </div>

            <h3 className="h3" id="galogenosoderzhashchie-soedineniya-yod-i-povidon-yod">{t('sections.halogen_title')}</h3>

            <div className="list-base">
              <ul>
                {halogenLinks.map((link, i) => (
                  <li key={i}><a href={link.href}>{link.text}</a></li>
                ))}
              </ul>
            </div>

            <p>{t('sections.iod_para1')}</p>

            <p>{t('sections.iod_para2')}</p>

            <div className="green">
              <p><strong>{t('sections.betadin_highlight')}</strong></p>
            </div>

            <div className="list-base">
              <p>{t('sections.for_children')}</p>
              <ul>
                {forChildrenItems.map((it, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p><strong>{t('sections.iod_block.title')}</strong></p>
                <p>{t('sections.iod_block.desc')}</p>
                <a href="/encyclopedia/jod/" className="btn btn-green" target="_blank" rel="noopener noreferrer">{t('sections.iod_block.more')}</a>
              </div>
              <picture>
                <source srcSet="/jod-prevyu-246x166 (1).webp" type="image/webp" />
                <img height={210} width={310} src="/jod-prevyu-246x166 (1).webp" alt={t('imageAlts.iodPreview')} />
              </picture>
            </div>

            <h3 className="h3" id="anilinovye-krasiteli-zelenka">{t('sections.aniline.title')}</h3>

            <div className="list-base">
              <ul>
                {anilineList.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>

            {anilineParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="green">
              <p><strong>{t('sections.aniline.warning_title')}</strong></p>
              {anilineWarnings.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <picture className="img-normal">
              <source srcSet="/medical-kit-and-bandaid-509398-488-1-38-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-38-650x325.webp 2x" type="image/webp" />
              <img height={325} width={650} src="/medical-kit-and-bandaid-509398-488-1-38-650x325.webp" alt={t('imageAlts.anilinePreview')} />
            </picture>

            <h3 className="h3" id="okisliteli-margancovka-i-perekis-vodoroda">{t('sections.oxidizers_title')}</h3>

            <div className="list-base">
              <ul>
                {oxidizersList.map((it, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ul>
            </div>

            <p dangerouslySetInnerHTML={{ __html: t('sections.oxidizers_para1') }} />

            <p dangerouslySetInnerHTML={{ __html: t('sections.oxidizers_para2') }} />

            <p><strong>{t('sections.oxidizers_side_effects_title')}</strong></p>
            <p dangerouslySetInnerHTML={{ __html: t('sections.oxidizers_side_effects_para') }} />

            <div className="green">
              <p><strong>{t('sections.important')}</strong></p>
              <p>{t('sections.oxidizers_warning')}</p>
            </div>

            <h3 className="h3" id="kisloty-bornaya-kislota-benzoynaya-kislota">{t('sections.acids_title')}</h3>

            <div className="list-base">
              <ul>
                {acidsList.map((it, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ul>
            </div>

            <p dangerouslySetInnerHTML={{ __html: t('sections.acids_para1') }} />

            <p dangerouslySetInnerHTML={{ __html: t('sections.acids_para2') }} />

            <h3 className="h3" id="preparaty-soderzhashchie-fenoly-rezorcin-vhodit-v-sostav-fukorcina">{t('sections.phenols_title')}</h3>

            <div className="list-base">
              <ul>
                {phenolsList.map((it, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ul>
            </div>

            <p dangerouslySetInnerHTML={{ __html: t('sections.phenols_para') }} />

            <h3 className="h3" id="preparaty-cinka">{t('sections.zinc_title')}</h3>

            <div className="list-base">
              <ul>
                {zincList.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>

            <p>{t('sections.zinc_para')}</p>

            <h3 className="h3" id="preparaty-vismuta">{t('sections.bismuth_title')}</h3>

            <p>{t('sections.bismuth_para')}</p>

            <h3 className="h3" id="soedineniya-tyazhelyh-metallov-serebro">{t('sections.silver_title')}</h3>

            <div className="list-base">
              <ul>
                {silverList.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>

            <p>{t('sections.silver_para')}</p>

            <h3 className="h3" id="chetvertichno-ammonievye-soedineniya-s-poverhnostnoy-aktivnostyu">{t('sections.quats_title')}</h3>

            <div className="list-base">
              <ul>
                {quatsList.map((it, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ul>
            </div>

            <p dangerouslySetInnerHTML={{ __html: t('sections.quats_para') }} />

            <p>{t('sections.quats_use')}</p>

            <h2 className="h2" id="pervichnaya-dovrachebnaya-obrabotka-ran">{t('care_steps_title')}</h2>

            <p>{t('care_steps.opening_para')}</p>

            <picture className="img-normal">
              <source srcSet="/medical-kit-and-bandaid-509398-488-1-5-650x325.webp" type="image/webp" />
              <img height={325} width={650} src="/medical-kit-and-bandaid-509398-488-1-5-650x325.webp" alt={t('imageAlts.firstAid')} />
            </picture>

            <h3 className="h3" id="osnovnye-etapy-pervichnoy-obrabotki-ran">{t('care_steps_title')}</h3>

            <div className="big">
              <div className="line">
                <div>
                  <p><strong>{t('care_steps.washing_title')}</strong></p>
                  <p>{t('care_steps.washing_desc')}</p>
                  <p>{t('care_steps.processing_desc')}</p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p><strong>{t('care_steps.processing_title')}</strong></p>
                  <p>{t('care_steps.processing_desc')}</p>
                  <p>{t('care_steps.bandage_desc')}</p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p><strong>{t('care_steps.bandage_title')}</strong></p>
                  <p>{t('care_steps.bandage_desc')}</p>
                  <p>{t('care_steps.bleeding_desc')}</p>
                </div>
              </div>
            </div>

            <picture className="img-normal">
              <source srcSet="/istockphoto-1341663000-2048x2048-2-3-6-650x150.webp" type="image/webp" />
              <img height={150} width={650} src="/istockphoto-1341663000-2048x2048-2-3-6-650x150.webp" alt={t('imageAlts.bandage')} />
            </picture>

            <h3 className="h3" id="preimushchestva-rastvora-betadin">{t('sections.advantages_title')}</h3>

            <div className="list-base">
              <ul>
                {advantagesList.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>

            <div className="green">
              <p><strong>{t('sections.important')}</strong></p>
              <p>{t('sections.betadin_warning')}</p>
            </div>

            <h2 className="h2" id="lechenie-ran-hirurgicheskim-putem">{t('surgery_title')}</h2>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source media="(max-width: 767px)" srcSet="/banner-betadin-927x916.webp 1x, /banner-betadin-1853x1832.webp 2x" type="image/webp" />
                  <source srcSet="/banner-betadin-927x916.webp 1x, /banner-betadin-1853x1832.webp 2x" type="image/webp" />
                  <img srcSet="/banner-betadin-927x916.webp 1x, /banner-betadin-1853x1832.webp 2x" width={927} height={916} src="/banner-betadin-927x916.webp" alt={t('imageAlts.bannerProduct')} />
                </picture>
              </div>
              {surgeryParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>{t('instruction_button') === undefined ? 'Инструкция' : t('instruction_button')}</p>
              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-rastvor-instruktsiya/" rel="noopener noreferrer">{t('instruction_button')}</a>
              </p>
            </div>

            <div className="list-base">
              <p>{t('sections.stage_intro')}</p>
              <ul>
                {stageItems.map((it, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ul>
            </div>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source srcSet="/quastion-558x542.webp 1x, /quastion-1115x1084.webp 2x" type="image/webp" />
                <img height={542} width={558} src="/quastion-558x542.webp" alt={t('imageAlts.decorative')} />
              </picture>
            </div>

            <h2 className="h2" id="otvety-na-voprosy">{t('faq_title')}</h2>

            <h3 className="h3" id="otmozhno-li-ispolzovat-betadin-maz-pri-lechenii-ran">{t('faq.0.q')}</h3>

            <p>{t('faq.0.a')}</p>

            <h3 className="h3" id="kak-umenshit-bolevye-oshchushcheniya-pri-obrabotke-ran">{t('faq.1.q')}</h3>

            <p>{t('faq.1.a')}</p>

            <h3 className="h3" id="vsegda-li-nuzhno-prinimat-antibiotiki-pri-lechenii-rany">{t('faq.2.q')}</h3>

            <p>{t('faq.2.a')}</p>

            <p>{surgeryParagraphs[2] ?? ''}</p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('author.name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('author.role')}</p>
              </div>
              <picture>
                <source srcSet="/moshkova-novyj-406x406 (1).webp" type="image/webp" />
                <img height={203} width={203} src="/moshkova-novyj-406x406 (1).webp" alt={t('imageAlts.author')} />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">{t('readMore')}</div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/jod-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <img loading="lazy" decoding="async" height={166} width={246} src="/jod-prevyu-246x166 (1).webp" alt={t('imageAlts.slide1')} />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{relatedSlides[0]?.title ?? ''}</strong></p>
                    <p>{relatedSlides[0]?.description ?? ''}</p>
                    <p className="slide-more"><Link href={relatedSlides[0]?.href ?? '#'}>{relatedSlides[0]?.more ?? ''}</Link></p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/povidon-jod-prevyu-620x420.webp"
                        type="image/webp"
                      />
                      <img loading="lazy" decoding="async" height={210} width={310} src="/povidon-jod-prevyu-620x420.webp" alt={t('imageAlts.slide2')} />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{relatedSlides[1]?.title ?? ''}</strong></p>
                    <p>{relatedSlides[1]?.description ?? ''}</p>
                    <p className="slide-more"><Link href={relatedSlides[1]?.href ?? '#'}>{relatedSlides[1]?.more ?? ''}</Link></p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/rany-s-infekcziej-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <img loading="lazy" decoding="async" height={166} width={246} src="/rany-s-infekcziej-prevyu-246x166 (1).webp" alt={t('imageAlts.slide3')} />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{relatedSlides[2]?.title ?? ''}</strong></p>
                    <p>{relatedSlides[2]?.description ?? ''}</p>
                    <p className="slide-more"><Link href={relatedSlides[2]?.href ?? '#'}>{relatedSlides[2]?.more ?? ''}</Link></p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="h2" id="spisok-literatury">{t('literature.title')}</h2>

            <ol className="literature">
              {literatureItems.map((it, i) => (
                <li key={i} id={`literature-${i}`}>{it}</li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ChemObrabotatRanuRebenku;
