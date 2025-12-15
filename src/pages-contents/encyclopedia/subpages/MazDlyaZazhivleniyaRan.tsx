
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const MazDlyaZazhivleniyaRan: React.FC = () => {
  const t = useTranslations('Blogs.MazDlyaZazhivleniyaRan');
  const triggeredRef = useRef<Record<number, boolean>>({ 25: false, 50: false, 75: false, 100: false });
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false);
  const [navTitleHidden, setNavTitleHidden] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scrollGoals: { [k: number]: () => void } = {
      25: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг25'),
      50: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг50'),
      75: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг75'),
      100: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг100'),
    };
    const checkScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor(((scrollTop + winHeight) / docHeight) * 100);
      for (const percent of [25, 50, 75, 100]) {
        if (scrollPercent >= percent && !triggeredRef.current[percent]) {
          triggeredRef.current[percent] = true;
          scrollGoals[percent]?.();
          // eslint-disable-next-line no-console
          console.log(percent);
        }
      }
      if ((Object.values(triggeredRef.current) as boolean[]).every((v) => v)) {
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
        <div className="container-page-header">
          <div className="container">
            <div className="page-header page-header-breadcrumbs">
              <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="https://betadin.ru">
                    <span property="name">{t('sections.breadcrumb_home')}</span>
                  </a>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/">
                    <span property="name">{t('sections.breadcrumb_article')}</span>
                  </a>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">{t('sections.breadcrumb_article')}</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">{t('sections.header_title')}</h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      decoding="async"
                      height={112}
                      width={115}
                      src="/icon-230x224.webp"
                      alt={t('sections.alt_header_icon')}
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">{t('sections.subtitle_wounds')}</h2>
                <div className="page-header-body">
                  <p>
                    {t('sections.intro_definition')}
                    <br />
                    {t('sections.intro_definition_2')}
                    <br />
                    {t('sections.intro_definition_3')}<sup>
                      <a href="#spisok-literatury">1,2</a>
                    </sup>
                    . {t('sections.intro_symptoms')}
                    <br />
                    {t('sections.intro_symptoms_list')}
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#fazy-zazhivleniya-ran">{t('sections.nav_list_1')}</a>
                  </li>
                  <li>
                    <a href="#algoritm-perevyazki-s-ispolzovaniem-mazi-dlya-zazhivleniya-ran">{t('sections.nav_list_2')}</a>
                  </li>
                  <li>
                    <a href="#maz-na-osnove-povidon-yoda">{t('sections.nav_list_3')}</a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1217/d1c1188d2dec388f4e906e32a13bc60c8455c004ccd2b5cafc152668ab3a5ed2-730x615/kartinka-banner-1-730x615.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1217/d1c1188d2dec388f4e906e32a13bc60c8455c004ccd2b5cafc152668ab3a5ed2-730x615/kartinka-banner-1-1460x1230.jpg.webp 2x"
                      type="image/webp"
                    />
                    <img
                      fetchPriority="high"
                      decoding="async"
                      height={615}
                      width={730}
                      src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1217/d1c1188d2dec388f4e906e32a13bc60c8455c004ccd2b5cafc152668ab3a5ed2-730x615/kartinka-banner-1-730x615.jpg.webp"
                      srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1217/d1c1188d2dec388f4e906e32a13bc60c8455c004ccd2b5cafc152668ab3a5ed2-730x615/kartinka-banner-1-730x615.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1217/d1c1188d2dec388f4e906e32a13bc60c8455c004ccd2b5cafc152668ab3a5ed2-730x615/kartinka-banner-1-1460x1230.jpg.webp 2x"
                      alt={t('sections.alt_banner_ointment')}
                    />
                  </picture>
                </div>
              </div>
            </div>
            <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
              <ul>
                <li>
                  <a href="#fazy-zazhivleniya-ran">{t.raw('sections.toc_phases')}</a>
                </li>
                <li>
                  <a href="#ranozazhivlyayushchie-mazi">{t.raw('sections.toc_ointments')}</a>
                </li>
                <li>
                  <a href="#maz-na-osnove-povidon-yoda">{t.raw('sections.toc_povidon')}</a>
                </li>
                <li>
                  <a href="#algoritm-perevyazki-s-ispolzovaniem-mazi-dlya-zazhivleniya-ran">{t.raw('sections.toc_algorithm')}</a>
                </li>
                <li>
                  <a href="#chto-vliyaet-na-zazhivlenie-kozhi-bez-oslozhneniy">{t.raw('sections.toc_healing')}</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">{t.raw('sections.toc_faq')}</a>
                </li>
                <li>
                  <a href="#spisok-literatury">{t.raw('sections.toc_literature')}</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t.raw('sections.table_of_contents')}</div>
            </nav>
          </div>
        </div>
        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            <li>
              <a href="#fazy-zazhivleniya-ran">{t.raw('sections.toc_phases')}</a>
            </li>
            <li>
              <a href="#ranozazhivlyayushchie-mazi">{t.raw('sections.toc_ointments')}</a>
            </li>
            <li>
              <a href="#maz-na-osnove-povidon-yoda">{t.raw('sections.toc_povidon')}</a>
            </li>
            <li>
              <a href="#algoritm-perevyazki-s-ispolzovaniem-mazi-dlya-zazhivleniya-ran">{t.raw('sections.toc_algorithm')}</a>
            </li>
            <li>
              <a href="#chto-vliyaet-na-zazhivlenie-kozhi-bez-oslozhneniy">{t.raw('sections.toc_healing')}</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">{t.raw('sections.toc_faq')}</a>
            </li>
            <li>
              <a href="#spisok-literatury">{t.raw('sections.toc_literature')}</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}>{t.raw('sections.table_of_contents')}</div>
        </nav>
        <div className="home-container">
          <div className="new-disclaimer"> {t('sections.disclaimer')}</div>
        </div>
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <div className="list-base">
              <p>
                <strong>{t('sections.wound_types_intro')}</strong>
              </p>
              <ul>
                {t.raw('sections.wound_types_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.jpg.webp 2x" type="image/webp" />
                <img decoding="async" height={505} width={503} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp" alt={t('sections.alt_decorative')} />
              </picture>
            </div>
            <p><strong>{t('sections.duration_intro')}</strong></p>
            <div className="two-column">
              <div className="column">
                <p><strong>{t('sections.duration_acute_title')}</strong></p>
                <p>{t('sections.duration_acute_desc')}</p>
              </div>
              <div className="column">
                <p><strong>{t('sections.duration_chronic_title')}</strong></p>
                <p>{t('sections.duration_chronic_desc')}</p>
              </div>
            </div>
            <picture className="img-normal">
              <source srcSet="/istockphoto-1341663000-2048x2048-2-2-2-650x150.webp, /istockphoto-1341663000-2048x2048-2-2-2-1300x300.webp" type="image/webp" />
              <img loading="lazy" decoding="async" height={150} width={650} src="/istockphoto-1341663000-2048x2048-2-2-2-650x150.png.webp" alt={t('sections.alt_dressing_algorithm')} />
            </picture>
            <h2 className="h2" id="chto-vliyaet-na-zazhivlenie-kozhi-bez-oslozhneniy">{t('sections.affects_healing_title')}</h2>
            <div className="list-base">
              <ul>
                {t.raw('sections.affects_healing_list').map((item: string, idx: number) => (
                  <li key={idx}>
                    {idx === t.raw('sections.affects_healing_list').length - 1 ? (
                      <>{item}<sup><a href="#spisok-literatury">1,2,3,4</a></sup></>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="h2" id="fazy-zazhivleniya-ran">{t('sections.phases_title')}</h2>
            <p>{t('sections.phases_intro')}<sup><a href="#spisok-literatury">1,2</a></sup>. {t('sections.phases_intro_2')}</p>
            <div className="big">
              <div className="line">
                <div>
                  <p><strong>{t('sections.phase1_title')}</strong></p>
                  <p>
                    {t('sections.phase1_desc_1')} <a href="/encyclopedia/rany-s-infekciej/">{t('sections.phase1_infection_link')}</a>. {t('sections.phase1_desc_2')}
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p><strong>{t('sections.phase2_title')}</strong></p>
                  <p>
                    {t('sections.phase2_desc')}
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p><strong>{t('sections.phase3_title')}</strong></p>
                  <p>{t('sections.phase3_desc')}</p>
                </div>
              </div>
            </div>
            <h2 className="h2" id="ranozazhivlyayushchie-mazi">{t('sections.ointments_title')}</h2>
            <p>{t('sections.ointments_intro')}</p>
            <div className="iframe">
              <div className="bg_default bg_green" />
              <div className="h3 h3_green iframe-title">{t('sections.video_title')}</div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={t('sections.video_iframe_title')}
                />
              </div>
              <div className="iframe_desc">{t('sections.video_desc')}</div>
            </div>
            <h2 className="h2" id="maz-na-osnove-povidon-yoda">{t('sections.povidon_title')}</h2>
            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source media="(max-width: 767px)" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bec2f26cdcf5c0bdc3093eb38b75d41a081dfe6a4f0bb975c2bedca93889e813-315x310/banner-betadin-maz-mobile-315x226.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bec2f26cdcf5c0bdc3093eb38b75d41a081dfe6a4f0bb975c2bedca93889e813-315x310/banner-betadin-maz-mobile-630x451.webp 2x" type="image/webp" />
                  <img loading="lazy" decoding="async" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-927x916.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-1853x1832.jpg 2x" width={927} height={916} src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-927x916.jpg" alt="Бетадин" />
                </picture>
              </div>
              <p>
                {t('sections.povidon_p1_1')} <a href="/encyclopedia/povidon-jod/">{t('sections.povidon_link')}</a> {t('sections.povidon_p1_2')}
              </p>
              <p>{t('sections.povidon_p2')}</p>
              <p>{t('sections.povidon_p3')}<sup><a href="#spisok-literatury">5</a></sup>. {t('sections.povidon_p4')}<sup><a href="#spisok-literatury">12</a></sup>. {t('sections.povidon_p5')}<sup><a href="#spisok-literatury">14</a></sup>.</p>
              <p>{t('sections.povidon_p6_1')}<a href="/encyclopedia/jod/">{t('sections.povidon_jod_link')}</a>{t('sections.povidon_p6_2')}<sup><a href="#spisok-literatury">13</a></sup>.</p>
              <p className="buttons"><a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-maz-instruktsiya/">{t('sections.instruction_button')}</a></p>
            </div>
            <h3 className="h3">{t('sections.antibiotic_title')}</h3>
            <p>{t('sections.antibiotic_intro')}<sup><a href="#spisok-literatury">1,2,5</a></sup>. {t('sections.antibiotic_intro_2')}</p>
            <h4 className="h4" id="maz-so-sulfanilamidom">{t('sections.sulfanilamide_title')}</h4>
            <p>{t('sections.sulfanilamide_desc')}</p>
            <h4 className="h4" id="maz-s-bacitracinom-i-neomicinom">{t('sections.bacitracin_title')}</h4>
            <p>{t('sections.bacitracin_desc')}</p>
            <h4 className="h4" id="maz-s-dekspantenolom">{t('sections.dexpanthenol_title')}</h4>
            <p>{t('sections.dexpanthenol_desc_1')}</p>
            <p>{t('sections.dexpanthenol_desc_2')}</p>
            <h4 className="h4" id="maz-s-naftlanskoy-rafinirovannoy-neftyu">{t('sections.naftlan_title')}</h4>
            <p>{t('sections.naftlan_desc_1')}</p>
            <p>{t('sections.naftlan_desc_2')}</p>
            <h4 className="h4" id="maz-s-dioksometiltetragidropirimidinom">{t('sections.dioxo_title')}</h4>
            <p>{t('sections.dioxo_desc_1')}</p>
            <p>{t('sections.dioxo_desc_2')}</p>
            <h4 className="h4" id="maz-s-hloramfenikolom-i-dioksometiltetragidropirimidinom">{t('sections.chloramphenicol_title')}</h4>
            <p>{t('sections.chloramphenicol_desc_1')}</p>
            <p>{t('sections.chloramphenicol_desc_2')}</p>
            <picture className="img-normal">
              <source srcSet="/istockphoto-1341663000-2048x2048-2-2-3-650x150.webp" type="image/webp" />
              <img loading="lazy" decoding="async" height={150} width={650} src="/istockphoto-1341663000-2048x2048-2-2-3-650x150.webp" alt={t('sections.alt_dressing_algorithm')} />
            </picture>
            <h3 className="h3" id="maz-s-serebrom">{t('sections.silver_title')}</h3>
            <p>{t('sections.silver_desc_1')}<sup><a href="#spisok-literatury">10,11</a></sup>.</p>
            <p>{t('sections.silver_desc_2')}</p>
            <div className="green"><p><strong>{t('sections.ointment_guidelines')}</strong></p></div>
            <h2 className="h2" id="algoritm-perevyazki-s-ispolzovaniem-mazi-dlya-zazhivleniya-ran">{t('sections.algorithm_title')}</h2>
            <div className="big">
              <div className="line">
                <div>
                  <p><strong>{t('sections.bandaging_prep_title')}</strong></p>
                  <p>{t('sections.bandaging_prep_intro')}</p>
                  <ul>
                    {t.raw('sections.bandaging_prep_items').map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p><strong>{t('sections.hand_washing_title')}</strong></p>
                  <p>{t('sections.hand_washing_desc')}</p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p><strong>{t('sections.wound_processing_title')}</strong></p>
                  <p>{t('sections.wound_processing_desc')}<sup><a href="#spisok-literatury">1,2</a></sup>.</p>
                </div>
              </div>
            </div>
            <div className="green"><p>{t('sections.daily_care_note')}</p></div>
            <picture className="img-normal">
              <source srcSet="/istockphoto-1341663000-2048x2048-2-2-3-650x150.webp" type="image/webp" />
              <img loading="lazy" decoding="async" height={150} width={650} src="/istockphoto-1341663000-2048x2048-2-2-3-650x150.webp" alt="Алгоритм перевязки раны с мазью" />
            </picture>
            <div className="block-with-image">
              <div className="block-with-image__green">
                <p><strong>{t('sections.infected_wounds_title')}</strong></p>
                <p>{t('sections.infected_wounds_desc')}</p>
                <a href="/encyclopedia/rany-s-infekciej/" className="btn btn-green" target="_blank" rel="noreferrer">{t('sections.more_button')}</a>
              </div>
              <picture>
                <source srcSet="/rany-s-infekcziej-prevyu-246x166 (1).webp" type="image/webp" />
                <img loading="lazy" decoding="async" height={210} width={310} src="/rany-s-infekcziej-prevyu-246x166 (1).webp" alt="Раны с инфекцией-превью" />
              </picture>
            </div>
            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.jpg.webp 2x" type="image/webp" />
                <img loading="lazy" decoding="async" height={542} width={558} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg.webp" alt={t('sections.alt_decorative')} />
              </picture>
            </div>
            <h2 className="h2" id="chasto-zadavaemye-voprosy">{t('sections.faq_title')}</h2>
            <h3 className="h3" id="chem-obrabatyvat-gnoynye-rany">{t('sections.faq_q1_title')}</h3>
            <p>{t('sections.faq_q1_text')}</p>
            <h3 className="h3" id="kakaya-maz-podoydet-dlya-zazhivleniya-rany-na-noge">{t('sections.faq_q2_title')}</h3>
            <p>{t('sections.faq_q2_text')}</p>
            <h3 className="h3" id="kakaya-maz-podoydet-dlya-zazhivleniya-ran-pri-diabete">{t('sections.faq_q3_title')}</h3>
            <p>{t('sections.faq_q3_text')}</p>
            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('sections.author_name')}</p>
                <div className="autor-subtitle" />
                <p className="autor-footer">{t('sections.author_role')}</p>
              </div>
              <picture>
                <source srcSet="/kraskovskij-novyj-470x406 (1).webp, /kraskovskij-novyj-470x406 (1).webp" type="image/webp" />
                <img loading="lazy" decoding="async" height={203} width={235} src="/kraskovskij-novyj-470x406 (1).webp" alt="" />
              </picture>
            </div>
            <div className="h2 h2-read-more" id="chitat-po-teme">{t('sections.read_more_title')}</div>
            <div className="slider-normal">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide-image">
                  <picture>
                  <img loading="lazy" decoding="async" height={166} width={246} src="/chem-obrabotat-ranu-rebenku-prevyu-246x166.webp" alt={t.raw('sections.slider_articles')[0].alt} />
                  </picture>
                  </div>
                  <div className="slide-body">
                  <p className="slide-title"><strong>{t.raw('sections.slider_articles')[0].title}</strong></p>
                  <p>{t.raw('sections.slider_articles')[0].description}</p>
                  <p className="slide-more"><a href={t.raw('sections.slider_articles')[0].link}> {t('sections.slider_more')} </a></p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-image">
                  <picture>
                  <img loading="lazy" decoding="async" height={210} width={310} src="/povidon-jod-prevyu-620x420.webp" alt={t.raw('sections.slider_articles')[1].alt} />
                  </picture>
                  </div>
                  <div className="slide-body">
                  <p className="slide-title"><strong>{t.raw('sections.slider_articles')[1].title}</strong></p>
                  <p>{t.raw('sections.slider_articles')[1].description}</p>
                  <p className="slide-more"><a href={t.raw('sections.slider_articles')[1].link}> {t('sections.slider_more')} </a></p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-image">
                  <picture>
                  <img loading="lazy" decoding="async" height={166} width={246} src="/rany-s-infekcziej-prevyu-246x166 (1).webp" alt={t.raw('sections.slider_articles')[2].alt} />
                  </picture>
                  </div>
                  <div className="slide-body">
                  <p className="slide-title"><strong>{t.raw('sections.slider_articles')[2].title}</strong></p>
                  <p>{t.raw('sections.slider_articles')[2].description}</p>
                  <p className="slide-more"><a href={t.raw('sections.slider_articles')[2].link}> {t('sections.slider_more')} </a></p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="h2" id="spisok-literatury">Список литературы</h2>
            <ol className="literature">
              <li id="literature-0">Завражанов А. А., Гвоздев М. Ю., Крутова В. А. и др. Раны и раневой процесс// Учебно-методическое пособие для интернов, ординаторов и практических врачей// Краснодар 2016.</li>
              <li id="literature-1">Гостищев В.К. и др. Общая хирургия//ГЭОТАР-Медиа, Москва 2005.</li>
              <li id="literature-2">Cooper P. A review of different wound types and their principles of management in Wound Healing: a systematic approach to advanced wound healing and management. – 2005.</li>
              <li id="literature-3">Kujath P, Michelsen A. Wounds — from physiology to wound dressing. Dtsch Arztebl Int. 2008;105(13):239-248. doi:10.3238/arztebl.2008.0239.</li>
              <li id="literature-4">Харкевич Д. А. Фармакология//Учебник для студентов медицинских вузов// ГЭОТАР-Медиа, Москва 2009.</li>
              <li id="literature-5">Лебедев Н.Н., Розанов В.Е., Шихметов А.Н. Алгоритм ведения больного с инфицированной раной в амбулаторных условиях с применением повидон-йода. Амбулаторная хирургия. 2018;(3-4):51-56.</li>
              <li id="literature-6">Gus’kova TA, Golovanova IV, Budanova LI, Kuzovkin VA. Vliianie dioksidina na émbriogenez krys [Effect of dioxidine on rat embryogenesis]. Farmakol Toksikol. 1982 Nov-Dec;45(6):85-8. Russian. PMID: 7152009.</li>
              <li id="literature-7">Brendel K, Duhamel RC, Shepard TH. Embryotoxic drugs. Biol Res Pregnancy Perinatol. 1985;6(1):1-54. PMID: 2579682.</li>
              <li id="literature-8">Shashkina LF, Ivanova VM, Lavrik OI, Proĭnova VA, Nechushkina LV. Izuchenie kantserogennoĭ aktivnosti dioksidina [Carcinogenic activity of dioxidine]. Farmakol Toksikol. 1985 Jan- Feb;48(1):77-80. Russian. PMID: 3979542.</li>
              <li id="literature-9">Benjamin A. Lipsky, Christopher Hoey, Topical Antimicrobial Therapy for Treating Chronic Wounds, Clinical Infectious Diseases, Volume 49, Issue 10, 15 November 2009, Pages 1541–1549, https://doi.org/10.1086/644732.</li>
              <li id="literature-10">Linden L, Emmans P 3rd, Safranek S. Topical preparations for wound healing. Am Fam Physician. 2014 Jun 15;89(12):978-9. PMID: 25162167.</li>
              <li id="literature-11">Борисов И. В. Повидон-йод – новые возможности знакомого препарата//Раны и раневые Инфекции 2021, 8 (3): 12-18.</li>
              <li id="literature-12">Яремчук Ан.А., Хишова О.М., Половко Н.П. Обоснование состава многокомпонентной мази для лечения гнойных ран в первой фазе раневого процесса// Вестник фармации №3 (57) 2012.</li>
              <li id="literature-13">Bigliardi L.P. et al. Povidone iodine in wound healing: A review of current concepts and practices International Journal of Surgery 44 (2017).</li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
};

export default MazDlyaZazhivleniyaRan;
