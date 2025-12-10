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

export default function Follikulit() {
  const t = useTranslations('Blogs.Follikulit');
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

    // initial check
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
                      alt={t('header.imageAlt')}
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
                      <a href="#literature">1</a>
                    </sup>
                    .
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#diagnostika">{t('nav_headers.diagnostika')}</a>
                  </li>
                  <li>
                    <a href="#kak-lechat-follikulit">{t('nav_headers.lechat_follikulit')}</a>
                  </li>
                  <li>
                    <a href="#Preparaty-ispolzuemye-dlya-obrabotki-i-lecheniya-ochagov-follikulita">
                      {t('nav_headers.obrabotka')}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/frame-655-1-730x615.webp 1x, /frame-655-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/frame-655-1-1460x1230.webp"
                      alt="Фолликулит"
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
            <p>{t('sections.intro_para1')}</p>

            <p>{t('sections.intro_para2')}</p>

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

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-38-650x352.webp 1x, /medical-kit-and-bandaid-509398-488-1-38-1300x704.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-38-1300x704.webp"
                alt="Волосяной фолликул"
                width={650}
                height={352}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">{t('sections.incidence_title')}</h3>

            <p>
              {t('sections.incidence_text')}
              <sup>
                <a href="#literature">26</a>
              </sup>
              .
            </p>

            <h3 className="h3">{t('sections.appearance_title')}</h3>

            <p>
              <strong>{t('sections.appearance_intro')}</strong>
            </p>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>{t('sections.superficial_title')}</strong>
                </p>
                <p>
                  {t('sections.superficial_text')}
                  <sup>
                    <a href="#literature">3</a>
                  </sup>
                  .
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>{t('sections.deep_title')}</strong>
                </p>
                <p>
                  {t('sections.deep_text')}
                  <sup>
                    <a href="#literature">17</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <p>
              <strong>{t('sections.types_title')}</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-650x350.webp 1x, /mask-group-1300x700.webp 2x"
                type="image/webp"
              />
              <Image
                src="/mask-group-1300x700.webp"
                alt={t('sections.types_title')}
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h2 className="h2" id="faktory-predraspolagayushchie-k-poyavleniyu-follikulita">
              {t('sections.factors_title')}
            </h2>

            <p>
              <strong>
                {t('sections.factors_intro')}
                <sup>
                  <a href="#literature">6</a>
                </sup>
              </strong>
            </p>

            <ul className="wp-block-list">
              {t.raw('sections.factors_list').map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="h2" id="prichiny-vozniknoveniya-follikulita">
              {t('sections.causes_title')}
            </h2>

            <p>{t('sections.causes_intro')}</p>

            <div className="list-base">
              <ul>
                {t.raw('sections.causes_list').map((item: any, idx: number) => (
                  <li key={idx}>
                    <strong>{item.title}</strong> – {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="h2" id="diagnostika">
              {t('sections.diagnosis_title')}
            </h2>

            <p>
              <strong>
                {t('sections.diagnosis_strong')}
                <sup>
                  <a href="#literature">2</a>
                </sup>
                {t('diagnosis_footer')}
              </strong>
            </p>

            <div className="big">
              {t.raw('sections.diagnosis_points').map((item: any, idx: number) => (
                <div className="line" key={idx}>
                  <p>
                    <strong>{item.title}</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="h2" id="kak-lechat-follikulit">
              {t('sections.treatment_title')}
            </h2>

            <div className="list-base">
              <p>
                {t('sections.treatment_intro')}
              </p>
              <ul>
                {t.raw('sections.treatment_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              {t('sections.treatment_staphylococcus')}
            </p>

            <p>
              {t('sections.treatment_malassezia')}
            </p>

            <p>
              {t('sections.treatment_herpes')}
            </p>

            <p>
              {t('sections.treatment_molluscum')}
            </p>

            <p>
              {t('sections.treatment_demodex')}
              <sup>
                <a href="#literature">22</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.treatment_eosinophilic')}
              <sup>
                <a href="#literature">23</a>
              </sup>
              .
            </p>

            <h3 className="h3" id="Preparaty-ispolzuemye-dlya-obrabotki-i-lecheniya-ochagov-follikulita">
              {t('preparations_title')}
            </h3>

            <div className="list-base">
              <p>
                {t('preparations.surface_treatment_title')}
                <sup>
                  <a href="#literature">17</a>
                </sup>
                :
              </p>
              <ul>
                {t.raw('preparations.surface_items').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="list-base">
              <p>{t('preparations.primary_treatment_title')}</p>
              <ul>
                {t.raw('preparations.primary_items').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="list-base">
              <p>
                {t('preparations.healing_title')}
              </p>
              <ul>
                {t.raw('preparations.healing_items').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="list-base">
              <p>
                {t('preparations.systemic_title')}
              </p>
              <ul>
                {t.raw('preparations.systemic_items').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('ointment_block.title')}</strong>
                </p>
                <p>
                  {t('ointment_block.description')}
                </p>
                <a href="/encyclopedia/jod-maz/" className="btn btn-green" target="_blank" rel="noopener noreferrer">
                  {t('ointment_block.button')}
                </a>
              </div>
              <picture>
                <source
                  srcSet="/jod-prevyu-246x166 (1).webp,jod-prevyu-246x166 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/jod-prevyu-246x166 (1).webp"
                  alt={t('ointment_block.alt_text')}
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3">{t('iodofor_section.h3_title')}</h3>

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
                {t('iodofor_section.para1')}
              </p>

              <p>
                {t('iodofor_section.para2')}
                <sup>
                  <a href="#literature">25</a>
                </sup>
                .
              </p>

              <p>
                {t('iodofor_section.para3')}
              </p>

              <ul>
                {t.raw('iodofor_section.usage_items').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <p>
                {t('iodofor_section.para4')}
                <sup>
                  <a href="#literature">28,29</a>
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
                  {t('instruction')}
                </a>
              </p>
            </div>

            <h2 className="h2" id="profilaktika-follikulita">
              {t('sections.prevention_title')}
            </h2>

            <div className="list-base">
              <p>
                {t('sections.prevention_intro')}
              </p>
              <ul>
                {t.raw('sections.prevention_list').map((item: string, idx: number) => (
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

            {t.raw('sections.faq').map((item: any, idx: number) => (
              <div key={idx}>
                <h3 className="h3">{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('author.name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('author.role')}</p>
              </div>
              <picture>
                <source
                  srcSet="/kraskovskij-novyj-470x406 (1).webp, /kraskovskij-novyj-470x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/kraskovskij-novyj-470x406 (1).webp"
                  alt="Красковский Федор Янович"
                  width={235}
                  height={203}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              {t('readMore')}
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                {t.raw('slider_articles').map((article: any, idx: number) => (
                  <div className="swiper-slide" key={idx}>
                    <div className="slide-image">
                        <picture>
                        <source
                          srcSet={`${idx < 2 ? '/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp' : '/povidon-jod-prevyu-246x166 (1).webp'} 1x, ${idx < 2 ? '/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp' : '/povidon-jod-prevyu-246x166 (1).webp'} 2x`}
                          type="image/webp"
                        />
                        <Image
                          src={idx < 2 ? '/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp' : '/povidon-jod-prevyu-246x166 (1).webp'}
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
                        <Link href={article.link}>{article.button}</Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="h2" id="literature">
              {t('literature.title')}
            </h2>

            <ol className="literature">
              <li id="literatura-0">
                Luelmo-Aguilar J, Santandreu MS. Folliculitis: recognition and management. Am J Clin Dermatol.
                2004;5(5):301-310. doi:10.2165/00128071-200405050-00003.
              </li>
              <li id="literatura-1">
                Winters RD, Mitchell M. Folliculitis. In: StatPearls. Treasure Island (FL): StatPearls Publishing;
                May 1, 2022.
              </li>
              <li id="literatura-2">
                Review. J Investig Dermatol Symp Proc. 2001 Dec;6(3):170.
              </li>
              <li id="literatura-3">
                Chiller K, Selkin BA, Murakawa GJ. Skin microflora and bacterial infections of the skin. J Investig
                Dermatol Symp Proc. 2001;6(3):170-174. doi:10.1046/j.0022-202x.2001.00043.x.
              </li>
              <li id="literatura-4">
                Neubert U, Jansen T, Plewig G. Bacteriologic and immunologic aspects of gram-negative folliculitis: a
                study of 46 patients. Int J Dermatol. 1999;38(4):270-274. doi:10.1046/j.1365-4362.1999.00688.x.
              </li>
              <li id="literatura-5">
                Suzuki C, Hase M, Shimoyama H, Sei Y. Treatment Outcomes for Malassezia Folliculitis in the
                Dermatology Department of a University Hospital in Japan. Med Mycol J. 2016;57(3):E63-E66.
                doi:10.3314/mmj.16-00003.
              </li>
              <li id="literatura-6">
                Jang KA, Kim SH, Choi JH, Sung KJ, Moon KC, Koh JK. Viral folliculitis on the face. Br J Dermatol.
                2000;142(3):555-559. doi:10.1046/j.1365-2133.2000.03378.x.
              </li>
              <li id="literatura-7">
                Rusiecka-Ziółkowska J, Nokiel M, Fleischer M. Demodex — an old pathogen or a new one?. Adv Clin Exp
                Med. 2014;23(2):295-298. doi:10.17219/acem/37081.
              </li>
              <li id="literatura-8">
                Basarab T, Russell Jones R. HIV-associated eosinophilic folliculitis: case report and review of the
                literature. Br J Dermatol. 1996;134(3):499-503.
              </li>
              <li id="literatura-9">
                Laing ME, Laing TA, Mulligan NJ, Keane FM. Eosinophilic pustular folliculitis induced by chemotherapy.
                J Am Acad Dermatol. 2006;54(4):729-730. doi:10.1016/j.jaad.2005.10.048
              </li>
              <li id="literatura-10">
                Ellis E, Scheinfeld N. Eosinophilic pustular folliculitis: a comprehensive review of treatment options.
                Am J Clin Dermatol. 2004;5(3):189-197. doi:10.2165/00128071-200405030-00007.
              </li>
              <li id="literatura-11">
                Wen SC, Lee LY, Daley AJ, Chow CW, Phillips R, Gwee A. Persistent Folliculitis in An Immunocompetent
                Child. J Paediatr Child Health. 2018;54(11):1281-1282. doi:10.1111/jpc.14200.
              </li>
              <li id="literatura-12">
                Firsowicz M, Boyd M, Jacks SK. Follicular occlusion disorders in Down syndrome patients. Pediatr
                Dermatol. 2020;37(1):219-221. doi:10.1111/pde.14012.
              </li>
              <li id="literatura-13">
                Bury K, Leavy JE, O'Connor A, Jancey J. Prevalence, Prevention and Treatment of Saddle Sores among
                Female Competitive Cyclists: A Scoping Review Protocol. Methods Protoc. 2020;3(1):4. Published 2020
                Jan 6. doi:10.3390/mps3010004.
              </li>
              <li id="literatura-14">
                Haddad Junior V. Profile of skin diseases in a community of fishermen in the northern coast of the
                state of São Paulo: the expected and the unusual. An Bras Dermatol. 2019;94(1):24-28.
                doi:10.1590/abd1806-4841.20197174.
              </li>
              <li id="literatura-15">
                Lopez FA, Lartchenko S. Skin and soft tissue infections. Infect Dis Clin North Am. 2006;20(4):759-vi.
                doi:10.1016/j.idc.2006.09.006.
              </li>
              <li id="literatura-16">
                Кожные и венерические болезни: учебник/ под ред. О. Ю. Олисовой. – М.: Практическая медицина,
                2017. – 288 с.
              </li>
              <li id="literatura-17">
                Lopez FA, Lartchenko S. Skin and soft tissue infections. Infect Dis Clin North Am. 2006;20(4):759-vi.
                doi:10.1016/j.idc.2006.09.006.
              </li>
              <li id="literatura-18">
                Laureano AC, Schwartz RA, Cohen PJ. Facial bacterial infections: folliculitis. Clin Dermatol.
                2014;32(6):711-714. doi:10.1016/j.clindermatol.2014.02.009.
              </li>
              <li id="literatura-19">
                Luelmo-Aguilar J, Santandreu MS. Folliculitis: recognition and management. Am J Clin Dermatol.
                2004;5(5):301-310.
              </li>
              <li id="literatura-20">
                Hald M, Arendrup MC, Svejgaard EL, et al. Evidence-based Danish guidelines for the treatment of
                Malassezia-related skin diseases. Acta Derm Venereol. 2015;95(1):12-19.
              </li>
              <li id="literatura-21">
                In Dermatol. Sep Oct 2010;28(5):502 4.Demodex mites: facts and controversiesDirk M Elston PMID:
                20797509 DOI: 10.1016/j.clindermatol.2010.03.006.
              </li>
              <li id="literatura-22">
                Salem DA, El-Shazly A, et al. Evaluation of the efficacy of oral ivermectin in comparison with
                ivermectin-metronidazole combined therapy in the treatment of ocular and skin lesions of Demodex
                folliculorum. Int J Infect Dis. 2013;17(5):e343-e347.
              </li>
              <li id="literatura-23">
                Rajendran PM, Dolev JC, Heaphy MR Jr, Maurer T. Eosinophilic folliculitis: before and after the
                introduction of antiretroviral therapy. Arch Dermatol. 2005;141(10):1227-1231.
              </li>
              <li id="literatura-24">
                Dumville JC, McFarlane E, Edwards P, Lipp A, Holmes A, Liu Z. Preoperative skin antiseptics for
                preventing surgical wound infections after clean surgery. Cochrane Database Syst Rev.
                2015;2015(4):CD003949. Published 2015 Apr 21.
              </li>
              <li id="literatura-25">
                Клинические рекомендации Пиодемии // «Российское общество дерматовенерологов и косметологов» 2020.
              </li>
              <li id="literatura-26">
                Кубанов А.А., Галлямова Ю.А., Гревцева А.С., Грибанов Н.В. Современные методы диагностики
                демодекоза // Вестник дерматологии и венерологии. — 2016. — Т. 92. — №1,с.47-54.
              </li>
              <li id="literatura-27">
                Инструкция по медицинскому применению ЛП Бетадин раствор РУ П №015282/03.
              </li>
              <li id="literatura-28">
                Инструкция по медицинскому применению ЛП Бетадин<sup>®</sup> (мазь), РУ : П №015282/02.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
