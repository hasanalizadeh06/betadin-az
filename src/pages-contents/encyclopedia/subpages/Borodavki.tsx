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

export default function Borodavki() {
  const [scrollTriggered, setScrollTriggered] = useState<Triggered>({
    40: false,
    80: false,
  });
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false);
  const [navTitleHidden, setNavTitleHidden] = useState<boolean>(true);
  const t = useTranslations("Blogs.Borodavki");

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
                      alt={t('imageAlts.headerIcon')}
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">{t('header.subtitle')}</h2>
                <div className="page-header-body">
                  <p>{t('header.intro')}</p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#metody-lecheniya-borodavok">{t('treatment.title')}</a>
                  </li>
                  <li>
                    <a href="#kak-udalyayut-virusnye-borodavki">{t('localRemedies.title')}</a>
                  </li>
                  <li>
                    <a href="#mestnye-sredstva-dlya-udaleniya-borodavok">{t('ointment.title')}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/borodavki-730x615.webp 1x, /borodavki-730x615.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/borodavki-730x615.webp"
                      alt={t('imageAlts.mainImage')}
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
                {t.raw('nav').map((item: any, i: number) => (
                  <li key={i}>
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
            {t.raw('nav').map((item: any, i: number) => (
              <li key={i}>
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
            <p>{t('header.intro')}</p>

            <h2 className="h2" id="vidy-borodavok-simptomy-prichiny-vozniknoveniya-diagnostika">{t('sections.types')}</h2>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp"
                  type="image/webp"
                />
                <Image
                  src="/circle-503x505.webp"
                  alt={t('imageAlts.decorative')}
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3" id="obychnye-vulgarnye-borodavki">{t('sections.vulgar')}</h3>

            <p>{t('types.vulgar_p1')} <sup><a href="#spisok-literatury">2</a></sup></p>
            <p>{t('types.vulgar_p2')}</p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-27-650x352.webp"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-27-650x352.webp"
                alt={t('imageAlts.vulgar')}
                width={650}
                height={352}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>{t('types.vulgar_p3')}</p>

            <p>{t('types.vulgar_p4')}</p>

            <h3 className="h3" id="podoshvennye-borodavki">{t('sections.plantar')}</h3>

            <div className="green">
              <p>
                {t('types.plantar_p1')}
              </p>
            </div>

            <p>{t('types.plantar_p2')}</p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-28-650x352.webp"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-28-650x352.webp"
                alt={t('imageAlts.plantar')}
                width={650}
                height={352}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>{t('types.plantar_p2')}</p>

            <h3 className="h3" id="ploskie-borodavki">{t('sections.flat')}</h3>

            <p>{t('types.flat_p1')}</p>

            <p>{t('types.flat_p2')}</p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-29-650x352.webp"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-29-650x352.webp"
                alt={t('imageAlts.flat')}
                width={650}
                height={352}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>{t('types.flat_p2')}</p>

            <h3 className="h3" id="anogenitalnye-borodavki">{t('sections.anogenital')}</h3>

            <h4 className="h4" id="ostrokonechnye-kondilomy">{t('sections.condyloma')}</h4>

            <p>{t('types.anogenital_p1')}</p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-30-650x352.webp"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-30-650x352.webp"
                alt={t('imageAlts.anogenital')}
                width={650}
                height={352}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>{t('types.anogenital_p2')}</p>

            <p>{t('types.anogenital_p3')}</p>

            <h4 className="h4" id="gigantskaya-kondiloma-bushke-levenshteyna">{t('sections.giant')}</h4>

            <p>{t('types.giant_p1')}</p>

            <p>{t('types.giant_p2')}</p>

            <p>{t('types.giant_p3')}</p>

            <h4 className="h4" id="bovenoidnyy-papulez-i-bolezn-bouena">{t('sections.bovenoid')}</h4>

            <p>{t('types.bovenoid_p1')} <sup><a href="#spisok-literatury">3</a></sup></p>

            <p>{t('types.bovenoid_p2')} <sup><a href="#spisok-literatury">2</a></sup></p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('block.title')}</strong>
                </p>
                <p>{t('block.p1')}</p>
                <a href={t('block.linkHref')} className="btn btn-green" target="_blank" rel="noopener noreferrer">
                  {t('block.linkText')}
                </a>
              </div>
              <picture>
                <source
                  srcSet="/povidon-jod-prevyu-620x420.webp"
                  type="image/webp"
                />
                <Image
                  src="/povidon-jod-prevyu-620x420.webp"
                  alt={t('imageAlts.povidonPreview')}
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3" id="borodavki-seboreynye-seboreynyy-keratoz">{t('sections.seborrheic')}</h3>

            <p>{t('types.seborrheic_p1')}</p>

            <h2 className="h2" id="metody-lecheniya-borodavok">{t('treatment.title')}</h2>

            <div className="green">
              <p>{t('treatment.pretest')} <sup><a href="#spisok-literatury">4</a></sup></p>
            </div>

            <p>{t('treatment.pretest')}</p>

            <h3 className="h3" id="kak-udalyayut-virusnye-borodavki">{t('treatment.title')}</h3>

            <div className="big">
              <div className="line">
                <p>
                  <strong>{t.raw('treatment.methods')[0]}</strong>
                  <sup>
                    <a href="#spisok-literatury">4</a>
                  </sup>
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t.raw('treatment.methods')[1]}</strong>
                  <sup>
                    <a href="#spisok-literatury">4</a>
                  </sup>
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t.raw('treatment.methods')[2]}</strong>
                  <sup>
                    <a href="#spisok-literatury">4</a>
                  </sup>
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t.raw('treatment.methods')[3]}</strong>
                  <sup>
                    <a href="#spisok-literatury">4</a>
                  </sup>
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t.raw('treatment.methods')[4]}</strong>
                  <sup>
                    <a href="#spisok-literatury">4</a>
                  </sup>
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t.raw('treatment.methods')[5]}</strong>
                  <sup>
                    <a href="#spisok-literatury">4</a>
                  </sup>
                </p>
              </div>
            </div>

            <h4 className="h4" id="mestnye-sredstva-dlya-udaleniya-borodavok">{t('localRemedies.title')}</h4>

            <div className="list-base">
              <ul>
                {t.raw('localRemedies.items').map((item: string, i: number) => (
                  <li key={i}>{item} {i===0 && <sup><a href="#spisok-literatury">6</a></sup>}{i===1 && <sup><a href="#spisok-literatury">7</a></sup>}</li>
                ))}
              </ul>
            </div>

            <h2 className="h2" id="uhod-posle-udaleniya-borodavok-i-lechenie-vozmozhnyh-oslozhneniy">{t('postCare.title')}</h2>

            <p>{t('postCare.p1')}</p>

            <p>{t('postCare.p1')}</p>

            <p>{t('postCare.p2')}</p>

            <h3 className="h3" id="preparaty-betadin-dlya-obrabotki-kozhi-i-slizistoy-posle-udaleniya-borodavok">{t('products.intro_p1')}</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    srcSet="/banner-betadin-927x916.webp"
                    type="image/webp"
                  />
                  <Image
                      src="/banner-betadin-927x916.webp"
                      alt={t('imageAlts.betadinBanner')}
                      width={927}
                      height={916}
                      loading="lazy"
                      decoding="async"
                    />
                </picture>
              </div>

              <p>{t('products.intro_p1')} <sup><a href="#spisok-literatury">9</a></sup></p>

              <p>{t('products.solution_p1')} <sup><a href="#spisok-literatury">9</a></sup></p>

              <p>{t('products.afterRemoval')} <sup><a href="#spisok-literatury">9</a></sup></p>

              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" rel="noopener noreferrer" href="/betadin-rastvor-instruktsiya/">{t('products.instructionButton')}</a>
              </p>
            </div>

            <div className="list-base">
              <p><strong>{t('ointment.title')}</strong></p>
              <ul>
                {t.raw('ointment.items').map((item: string, i: number) => (
                  <li key={i}>{item}{i===1 && <><sup><a href="#spisok-literatury">10</a></sup> <sup><a href="#spisok-literatury">11</a></sup></>}</li>
                ))}
              </ul>
            </div>

            <p>{t('ointment.usage')} <sup><a href="#spisok-literatury">9</a></sup></p>

            <h2 className="h2" id="profilaktika-poyavleniya-borodavok">{t('prevention.title')}</h2>

            <p>{t('prevention.p1')}</p>

            <p>{t('prevention.p2')}</p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-558x542.webp"
                  type="image/webp"
                />
                <Image
                  src="/quastion-558x542.webp"
                  alt={t('imageAlts.decorative')}
                  width={558}
                  height={542}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">{t('faq.title')}</h2>

            <h3 className="h3" id="zarazny-li-borodavki">{t('faq.q1')}</h3>
            <p>{t('faq.a1')}</p>

            <h3 className="h3" id="nuzhno-li-udalyat-borodavki">{t('faq.q2')}</h3>
            <p>{t('faq.a2')}</p>

            <h3 className="h3">{t('faq.q3')}</h3>
            <p>{t('faq.a3')}</p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('author.name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('author.role')}</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-406x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/moshkova-novyj-406x406 (1).webp"
                  alt={t('imageAlts.authorPhoto')}
                  width={203}
                  height={203}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">{t('readMore')}</div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/maz-na-osnove-joda-prevyu-246x166.webp"
                        alt={t('imageAlts.slide1')}
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{t.raw('relatedSlides')[0].title}</strong></p>
                    <p>{t.raw('relatedSlides')[0].description}</p>
                    <p className="slide-more"><Link href={t.raw('relatedSlides')[0].href}>{t.raw('relatedSlides')[0].more}</Link></p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/povidon-jod-prevyu-620x420.webp"
                        type="image/webp"
                      />
                      <Image
                        src="/povidon-jod-prevyu-620x420.webp"
                        alt={t('imageAlts.slide2')}
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{t.raw('relatedSlides')[1].title}</strong></p>
                    <p>{t.raw('relatedSlides')[1].description}</p>
                    <p className="slide-more"><Link href={t.raw('relatedSlides')[1].href}>{t.raw('relatedSlides')[1].more}</Link></p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp"
                        alt={t('imageAlts.slide3')}
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{t.raw('relatedSlides')[2].title}</strong></p>
                    <p>{t.raw('relatedSlides')[2].description}</p>
                    <p className="slide-more"><Link href={t.raw('relatedSlides')[2].href}>{t.raw('relatedSlides')[2].more}</Link></p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="h2" id="spisok-literatury">{t('literature.title')}</h2>
            <ol className="literature">
              {t.raw('literature.items').map((item: string, i: number) => (
                <li key={i} id={`literatura-${i}`} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
