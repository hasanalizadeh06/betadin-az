'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function DezinfekciyaPosleUdaleniyaZuba() {
  const t = useTranslations('Blogs.DezinfekciyaPosleUdaleniyaZuba');
  const [isScrollTracked, setIsScrollTracked] = useState(false);
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false);
  const [navTitleHidden, setNavTitleHidden] = useState<boolean>(true);

  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Скроллинг40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Скроллинг80');
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
    setIsScrollTracked(true);

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
                <h1 className="page-header-title-text">
                  {t('header.title')}
                </h1>
                <picture>
                  <source
                    srcSet="/icon-230x224.webp 1x"
                    type="image/webp"
                  />
                  <Image
                    height={112}
                    width={115}
                    src="/icon.png"
                    alt={t('header.imageAlt')}
                  />
                </picture>
              </div>
              <div className="page-header-body">
                <p>
                  {t('header.subtitle')}
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li>
                  <a href="#kak-zazhivaet-ranka-posle-udaleniya-zuba">
                    {t('nav.2.text')}
                  </a>
                </li>
                <li>
                  <a href="#obrabotka-polosti-rta-posle-udaleniya-zuba">
                    {t('nav.3.text')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source
                    srcSet="/banner-dezinfekcziya-posle-udaleniya-1460x1230.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    fetchPriority="high"
                    height={615}
                    width={730}
                    src="/banner-dezinfekcziya-posle-udaleniya-1460x1230.webp"
                    alt="Баннер дезинфекция после удаления"
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
          <h2 className="h2" id="kakie-zuby-udalyayut">
            {t('sections.extraction_title')}
          </h2>

          <div className="exlude-turbo">
            <picture className="banner-betadin banner-circle">
              <source
                srcSet="/circle-1006x1010.webp 2x"
                type="image/webp"
              />
              <Image
                height={505}
                width={503}
                src="/circle-503x505.webp"
                alt="Декоративные элементы"
              />
            </picture>
          </div>

          <div className="list-base">
            <p>
              {t('sections.extraction_intro')}<sup>
                <a href="#literatura-0">1</a>
              </sup>
              :
            </p>
            <ul>
              {t.raw('sections.extraction_list').map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <h2 className="h2" id="kak-zazhivaet-ranka-posle-udaleniya-zuba">
            {t('sections.healing_title')}
          </h2>

          <h3 className="h3">{t('sections.normal_healing_title')}</h3>

          <p>
            {t('sections.healing_para1')}
          </p>

          <p>
            {t('sections.healing_para2')}
          </p>

          <picture className="img-normal">
            <source
              srcSet="/illyustracziya-uz-2at4x-1300x1300.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={650}
              width={650}
              src="/illyustracziya-uz-2at4x-1300x1300.webp"
              alt="Заживление после удаления зуба"
            />
          </picture>

          <div className="green">
            <p>
              {t('sections.warning_bleeding')}
            </p>
          </div>

          <p>
            {t('sections.complications_para')}
            <sup>
              <a href="#literatura-0">1</a>
            </sup>
          </p>

          <h3 className="h3">{t('sections.alveolitis_title')}</h3>

          <p>
            {t('sections.alveolitis_para')}
            <sup>
              <a href="#literatura-0">1</a>
            </sup>
            .
          </p>

          <div className="green">
            <p>
              {t('sections.alveolitis_warning')}
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
            </p>
          </div>

          <h2 className="h2" id="obrabotka-polosti-rta-posle-udaleniya-zuba">
            {t('sections.mouth_care_title')}
          </h2>

          <p>
            {t('sections.mouth_care_intro')}
            <sup>
              <a href="#literatura-1">2</a>
            </sup>
            .
          </p>

          <div className="green">
            <p>
              {t('sections.effectiveness_warning')}
              <sup>
                <a href="#literatura-1">2</a>
              </sup>
            </p>
          </div>

          <div className="list-base">
            <p>{t('sections.requirements_intro')}</p>
            <ul>
              {t.raw('sections.requirements_list').map((item: string, idx: number) => (
                <li key={idx}>
                  {idx === 4 ? (
                    <>
                      {item}
                      <sup>
                        <a href="#literatura-1">2</a>
                      </sup>
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="h3">{t('sections.betadin_title')}</h3>

          <div className="product-block">
            <div className="banner-product-img">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/banner-betadin-927x916.webp 2x"
                  type="image/webp"
                />
                <Image
                  height={916}
                  width={927}
                  src="/banner-betadin-927x916.webp"
                  alt="Бетадин"
                />
              </picture>
            </div>
            <p>{t('sections.betadin_properties')}</p>
            <ul>
              {t.raw('sections.betadin_list').map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="buttons">
              <Link className="btn btn-green btn-green-instruction" href="/betadin-rastvor-instruktsiya/">
                {t('sections.instruction_button')}
              </Link>
            </p>
          </div>

          <div className="green">
            <p>
              {t('sections.betadin_instructions')}
              <sup>
                <a href="#literatura-4">5</a>
              </sup>
              <sup>
                <a href="#literatura-5">6</a>
              </sup>
            </p>
          </div>

          <p>
            {t('sections.betadin_contraindications')}
            <sup>
              <a href="#literatura-4">5</a>
            </sup>
            .
          </p>

          <h3 className="h3">{t('sections.chlorhexidine_title')}</h3>

          <picture className="img-normal">
            <source
              srcSet="/hlorgeksedin-scaled-1300x300.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={150}
              width={650}
              src="/hlorgeksedin-scaled-1300x300.webp"
              alt="Хлоргексидин"
            />
          </picture>

          <p>
            {t('sections.chlorhexidine_para')}
            <sup>
              <a href="#literatura-2">3</a>
            </sup>
            <sup>
              <a href="#literatura-2">3</a>
            </sup>
            .
          </p>

          <h3 className="h3">{t('sections.permanganate_title')}</h3>

          <p>
            {t('sections.permanganate_para')}
            <sup>
              <a href="#literatura-3">4</a>
            </sup>
            .
          </p>

          <picture className="img-normal">
            <source
              srcSet="/od-a3-2at4x-1300x332.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={166}
              width={650}
              src="/od-a3-2at4x-1300x332.webp"
              alt="Марганцовка"
            />
          </picture>

          <h2 className="h2" id="chto-nuzhno-i-ne-nuzhno-delat-posle-udaleniya-zuba">
            {t('sections.do_dont_title')}
          </h2>

          <div className="list-base">
            <ul>
              {t.raw('sections.do_dont_list').map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <picture className="img-normal">
            <source
              srcSet="/illyustracziya-uz-4-3at4x-1300x650.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={325}
              width={650}
              src="/illyustracziya-uz-4-3at4x-1300x650.webp"
              alt="Дезинфекция после удаления зуба"
            />
          </picture>

          <div className="exlude-turbo">
            <picture className="banner-betadin banner-quastion">
              <source
                srcSet="/quastion-1115x1084.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={542}
                width={558}
                src="/quastion-558x542.webp"
                alt="Декоративные элементы"
              />
            </picture>
          </div>

          <h2 className="h2" id="chasto-zadavaemye-voprosy">{t('faq_title')}</h2>

          {t.raw('faq').map((item: any, idx: number) => (
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
                srcSet="/moshkova-novyj-406x406 (1).webp"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={203}
                width={203}
                src="/moshkova-novyj-406x406 (1).webp"
                alt="Мошкова Елена Михайловна"
              />
            </picture>
          </div>

          <div className="h2 h2-read-more" id="chitat-po-teme">
            {t('readMore')}
          </div>

          <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
            <div className="swiper-wrapper">
              {t.raw('relatedArticles').map((article: any, idx: number) => (
                <div key={idx} className={`swiper-slide ${idx === 0 ? 'swiper-slide-prev' : idx === 1 ? 'swiper-slide-active' : 'swiper-slide-next'}`}>
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet={article.imgpicture}
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src={article.img}
                        alt={article.title}
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
                      <Link href={article.link}>{article.moreText}</Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="h2" id="spisok-literatury">
            {t('literature.title')}
          </h2>

          <ol className="literature">
            {t.raw('literature.items').map((item: string, idx: number) => (
              <li key={idx} id={`literatura-${idx}`}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
