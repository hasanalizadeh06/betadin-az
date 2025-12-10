'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

const rdfaType = (value: string) => ({ ['typeof']: value });

export default function Antiseptiki() {
  const t = useTranslations("Blogs.Antiseptiki");
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
            <ol
              className="breadcrumb"
              vocab="https://schema.org/"
              {...rdfaType('BreadcrumbList')}
            >
              <li property="itemListElement" {...rdfaType('ListItem')}>
                <Link property="item" {...rdfaType('WebPage')} href="/">
                  <span property="name">{t("breadcrumb.home")}</span>
                </Link>
                <meta property="position" content="1" />
              </li>
              <li property="itemListElement" {...rdfaType('ListItem')}>
                <Link property="item" {...rdfaType('WebPage')} href="/encyclopedia/">
                  <span property="name">{t("breadcrumb.encyclopedia")}</span>
                </Link>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" {...rdfaType('ListItem')}>
                <span property="name">{t("breadcrumb.current")}</span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>

          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                <h1 className="page-header-title-text">
                  {t("header.title")}
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
                    alt="Иконка на странице"
                  />
                </picture>
              </div>
              <div className="page-header-body">
                <p>
                  {t("header.description")}
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li>
                  <a href="#chto-takoe-antiseptiki">{t("header.anchors.what_is")}</a>
                </li>
                <li>
                  <a href="#kak-vybrat-antiseptik">{t("header.anchors.choose")}</a>
                </li>
              </ul>
            </div>

            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source
                    srcSet="/banner-antiseptiki-1460x1230.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    fetchPriority="high"
                    height={615}
                    width={730}
                    src="/banner-antiseptiki-730x615.webp"
                    alt="Баннер антисептики"
                  />
                </picture>
              </div>
            </div>
          </div>

          <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
            <ul>
              <li>
                <a href="#chto-takoe-antiseptiki">{t("sections.what_is_antiseptics")}</a>
              </li>
              <li>
                <a href="#klassifikaciya-antiseptikov">{t("sections.classification")}</a>
              </li>
              <li>
                <a href="#razlichiya-v-deystvii-antiseptikov">{t("sections.differences")}</a>
              </li>
              <li>
                <a href="#osobennosti-mehanizmov-deystviya-razlichnyh-antiseptikov">
                  {t("sections.mechanisms")}
                </a>
              </li>
              <li>
                <a href="#formy-vypuska-antisepticheskih-sredstv">
                  {t("sections.forms")}
                </a>
              </li>
              <li>
                <a href="#kak-vybrat-antiseptik">{t("sections.how_to_choose")}</a>
              </li>
              <li>
                <a href="#pravila-ispolzovaniya-antiseptika-pri-obrabotke-ran">
                  {t("sections.usage_rules")}
                </a>
              </li>
              <li>
                <a href="#chasto-zadavaemye-voprosy">{t("sections.faq")}</a>
              </li>
              <li>
                <a href="#spisok-literatury">{t("sections.bibliography")}</a>
              </li>
            </ul>
            <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t("tableOfContents")}</div>
          </nav>
        </div>
      </div>

      <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
        <ul>
          <li>
            <a href="#chto-takoe-antiseptiki">{t("sections.what_is_antiseptics")}</a>
          </li>
          <li>
            <a href="#klassifikaciya-antiseptikov">{t("sections.classification")}</a>
          </li>
          <li>
            <a href="#razlichiya-v-deystvii-antiseptikov">{t("sections.differences")}</a>
          </li>
          <li>
            <a href="#osobennosti-mehanizmov-deystviya-razlichnyh-antiseptikov">
              {t("sections.mechanisms")}
            </a>
          </li>
          <li>
            <a href="#formy-vypuska-antisepticheskih-sredstv">
              {t("sections.forms")}
            </a>
          </li>
          <li>
            <a href="#kak-vybrat-antiseptik">{t("sections.how_to_choose")}</a>
          </li>
          <li>
            <a href="#pravila-ispolzovaniya-antiseptika-pri-obrabotke-ran">
              {t("sections.usage_rules")}
            </a>
          </li>
          <li>
            <a href="#chasto-zadavaemye-voprosy">{t("sections.faq")}</a>
          </li>
          <li>
            <a href="#spisok-literatury">{t("sections.bibliography")}</a>
          </li>
        </ul>
        <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}>{t("tableOfContents")}</div>
      </nav>

      <div className="home-container">
        <div className="new-disclaimer">{t("disclaimer")}</div>
      </div>

      <div className="page-content-wrapper">
        <div className="container container-middle page-content">
          <div className="green">
            <p>
              <strong>{t("definitions.asepticTitle")}</strong> – {t("definitions.asepticDesc")}
            </p>
            <p>
              <strong>{t("definitions.antisepticTitle")}</strong> – {t("definitions.antisepticDesc")}
            </p>
          </div>

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

          <p>{t("mainText")}</p>

          <h2 className="h2" id="chto-takoe-antiseptiki">
            {t("whatIsAntiseptics.title")}
          </h2>

          <p>
            <strong>{t("whatIsAntiseptics.definitionTitle")}</strong> {t("whatIsAntiseptics.definitionDesc")}
            <sup>
              <a href="#literatura-1">2</a>
            </sup>
            <sup>
              <a href="#literatura-2">3</a>
            </sup>
            .
          </p>

          <div className="list-base">
            <p>{t("whatIsAntiseptics.indications")}</p>
            <ul>
              <li>
                <strong>{t("whatIsAntiseptics.items.0.title")}</strong> {t("whatIsAntiseptics.items.0.desc")}
              </li>
              <li>
                <strong>{t("whatIsAntiseptics.items.1.title")}</strong> {t("whatIsAntiseptics.items.1.desc")}
              </li>
              <li>
                <strong>{t("whatIsAntiseptics.items.2.title")}</strong> {t("whatIsAntiseptics.items.2.desc")}
              </li>
            </ul>
          </div>

          <picture className="img-normal">
            <source
              srcSet="/antiseptik-il-2at4x-1300x302.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={151}
              width={650}
              src="/antiseptik-il-2at4x-650x151.webp"
              alt="Применение антисептиков"
            />
          </picture>

          <div className="iframe">
            <div className="bg_default bg_green"></div>
            <div className="h3 h3_green iframe-title">
              {t("whatIsAntiseptics.videoTitle")}
            </div>
            <div className="iframe-container">
              <iframe
                className="lazyloaded"
                src="https://rutube.ru/play/embed/8dee1b1386be765d5ab04baab017db42/?p=mCzhItoqMIKSzDZWNydYOA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="iframe_desc">
              {t("whatIsAntiseptics.videoDescription")}
            </div>
          </div>

          <h2 className="h2" id="klassifikaciya-antiseptikov">
            {t("classification.title")}
          </h2>

          <div className="list-base">
            <p>{t("classification.intro")}</p>
            <ul>
              <li>
                <strong>{t("classification.items.0.title")}</strong> {t("classification.items.0.desc")}
              </li>
              <li>
                <strong>{t("classification.items.1.title")}</strong> {t("classification.items.1.desc")}
              </li>
              <li>
                <strong>{t("classification.items.2.title")}</strong> {t("classification.items.2.desc")}
              </li>
              <li>
                <strong>{t("classification.items.3.title")}</strong> {t("classification.items.3.desc")}
              </li>
            </ul>
          </div>

          <div className="green">
            <p>{t("classification.note")}</p>
          </div>

          <p>{t("classification.chemical")}</p>

          <h2 className="h2" id="razlichiya-v-deystvii-antiseptikov">
            {t("differences.title")}
          </h2>

          <div className="list-base">
            <p>{t("differences.intro")}</p>
            <ul>
              <li>
                <strong>{t("differences.locationTitle")}</strong> {t("differences.locationDesc")}
              </li>
              <li>
                <strong>{t("differences.speedTitle")}</strong> {t("differences.speedDesc")}
              </li>
            </ul>
          </div>

          <p>
            {t("differences.ideal")}
            <sup>
              <a href="#literatura-1">2</a>
            </sup>
            <sup>
              <a href="#literatura-2">3</a>
            </sup>
            <sup>
              <a href="#literatura-4">5</a>
            </sup>
            .
          </p>

          <h2 className="h2" id="osobennosti-mehanizmov-deystviya-razlichnyh-antiseptikov">
            {t("mechanisms.title")}
          </h2>

          <picture className="img-normal">
            <source
              srcSet="/antiseptik-il-3-1at4x-1300x650.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={325}
              width={650}
              src="/antiseptik-il-3-1at4x-650x325.webp"
              alt="Действие антисептиков"
            />
          </picture>

          <h3 className="h3">{t("mechanisms.iodine.title")}</h3>

          <p>{t("mechanisms.iodine.para1")}</p>

          <p>{t("mechanisms.iodine.para2")}</p>

          <div className="green">
            <p>
              <strong>{t("mechanisms.iodine.iodoforTitle")}</strong> – {t("mechanisms.iodine.iodoforDesc")}
              <sup>
                <a href="#literatura-10">11</a>
              </sup>
              <sup>
                <a href="#literatura-11">12</a>
              </sup>
              <sup>
                <a href="#literatura-12">13</a>
              </sup>
              <sup>
                <a href="#literatura-13">14</a>
              </sup>
              .
            </p>
          </div>

          <p>
            {t("mechanisms.iodine.betadinePrelude")}
            <strong>{t("mechanisms.iodine.betadineTitle1")}</strong> {t("mechanisms.iodine.betadineTitle2")}
            <sup>
              <a href="#literatura-10">11</a>
            </sup>
            <sup>
              <a href="#literatura-11">12</a>
            </sup>
            <sup>
              <a href="#literatura-12">13</a>
            </sup>
            <sup>
              <a href="#literatura-13">14</a>
            </sup>
            .
          </p>

          <h4 className="h4">{t("mechanisms.betadineSection.title")}</h4>

          <p>
            {t("mechanisms.betadineSection.descIntro")}
            <strong>{t("mechanisms.betadineSection.descBold")}</strong>
            {t("mechanisms.betadineSection.descRest")}
          </p>

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
            <p>{t("mechanisms.betadineSection.properties")}</p>
            <ul>
              {t.raw("mechanisms.betadineSection.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="buttons">
              <Link
                className="btn btn-green btn-green-instruction"
                href="/betadin-rastvor-instruktsiya/"
              >
                {t("mechanisms.betadineSection.instruction")}
              </Link>
            </p>
          </div>

          <h4 className="h4">{t("mechanisms.indications.title")}</h4>

          <div className="list-base">
            <p>{t("mechanisms.indications.intro")}</p>
            <p>{t("mechanisms.indications.activities")}</p>
            <ul>
              {t.raw("mechanisms.indications.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <h3 className="h3">{t("mechanisms.peroxide.title")}</h3>

          <p>{t("mechanisms.peroxide.para1")}</p>

          <p>{t("mechanisms.peroxide.para2")}</p>

          <h3 className="h3">{t("mechanisms.chlorhexidine.title")}</h3>

          <p>{t("mechanisms.chlorhexidine.description")}</p>

          <h3 className="h3">{t("mechanisms.dyes.title")}</h3>

          <h4 className="h4">{t("mechanisms.dyes.methyleneBlue.title")}</h4>

          <p>{t("mechanisms.dyes.methyleneBlue.descPart1")}</p>

          <h4 className="h4">{t("mechanisms.dyes.brilliantGreen.title")}</h4>

          <p>{t("mechanisms.dyes.brilliantGreen.para1")}</p>

          <p>{t("mechanisms.dyes.brilliantGreen.para2")}</p>

          <h2 className="h2" id="formy-vypuska-antisepticheskih-sredstv">
            {t("forms.title")}
          </h2>

          <div className="list-base">
            <p>{t("forms.intro")}</p>
            <ul>
              {t.raw("forms.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <h2 className="h2" id="kak-vybrat-antiseptik">
            {t("hooseAntiseptic.title")}
          </h2>

          <p>{t("hooseAntiseptic.intro")}</p>

          <div className="big">
            <div className="line">
              <p>
                {t("hooseAntiseptic.surfaceWoundsText")}
                <strong>{t("hooseAntiseptic.surfaceWoundsBrand")}</strong>
                {t("hooseAntiseptic.surfaceWoundsEnd")}
              </p>
            </div>
            <div className="line">
              <p>
                {t("hooseAntiseptic.surgicalText")}
                <strong>{t("hooseAntiseptic.surgicalBrand")}</strong>
                {t("hooseAntiseptic.surgicalEnd")}
              </p>
            </div>
          </div>

          <h2 className="h2" id="pravila-ispolzovaniya-antiseptika-pri-obrabotke-ran">
            {t("usageRules.title")}
          </h2>

          <p>{t("usageRules.intro")}</p>

          <div className="big">
            <div className="line">
              <p>
                <strong>{t("usageRules.washingTitle")}</strong> {t("usageRules.washingDesc")}
              </p>
            </div>
            <div className="line">
              <p>
                <strong>{t("usageRules.bleedingTitle")}</strong> {t("usageRules.bleedingDesc")}
              </p>
            </div>
            <div className="line">
              <p>
                <strong>{t("usageRules.treatmentTitle")}</strong> {t("usageRules.treatmentDesc")}
              </p>
            </div>
            <div className="line">
              <p>
                <strong>{t("usageRules.dailyTitle")}</strong> {t("usageRules.dailyDesc")}
                <sup>
                  <a href="#literatura-17">18</a>
                </sup>
                <sup>
                  <a href="#literatura-18">19</a>
                </sup>
                <sup>
                  <a href="#literatura-19">20</a>
                </sup>
                <sup>
                  <a href="#literatura-20">21</a>
                </sup>
                .
              </p>
            </div>
          </div>

          <picture className="img-normal">
            <source
              srcSet="/antiseptik-il-5at4x-1300x302.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={151}
              width={650}
              src="/antiseptik-il-5at4x-650x151.webp"
              alt="Алгоритм применения антисептиков"
            />
          </picture>

          <div className="green">
            <p>
              <strong>{t("usageRules.warningTitle")}</strong> {t("usageRules.warningDesc")}
            </p>
          </div>

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

          <h2 className="h2" id="chasto-zadavaemye-voprosy">
            {t("faq.title")}
          </h2>

          <h3 className="h3">{t("faq.q1")}</h3>

          <p>{t("faq.a1")}</p>

          <h3 className="h3">{t("faq.q2")}</h3>

          <p>{t("faq.a2")}</p>

          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">{t("author.name")}</p>
              <div className="autor-subtitle"></div>
              <p className="autor-footer">{t("author.title")}</p>
            </div>
            <picture>
              <source
                srcSet="/moshkova-novyj-406x406 (1).webp 2x"
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
            {t("relatedArticles.title")}
          </div>

          <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-slide-active">
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="/rastvor-joda-prevyu-246x166 (2).webp"
                      type="image/webp"
                    />
                    <Image
                      loading="lazy"
                      height={166}
                      width={246}
                      src="/rastvor-joda-prevyu-246x166 (2).webp"
                      alt="Раствор йода - превью"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>{t.raw("relatedArticles.articles")[0].title}</strong>
                  </p>
                  <p>{t.raw("relatedArticles.articles")[0].description}</p>
                  <p className="slide-more">
                    <Link href="/encyclopedia/rastvor-joda/">{t("relatedArticles.more")}</Link>
                  </p>
                </div>
              </div>

              <div className="swiper-slide swiper-slide-next">
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="/polivinilpirrolidon-povidon-730x615.webp"
                      type="image/webp"
                    />
                    <Image
                      loading="lazy"
                      height={166}
                      width={246}
                      src="/polivinilpirrolidon-povidon-730x615.webp"
                      alt="Поливинилпирролидон (повидон) - превью"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>{t.raw("relatedArticles.articles")[1].title}</strong>
                  </p>
                  <p>
                    {t.raw("relatedArticles.articles")[1].description}
                  </p>
                  <p className="slide-more">
                    <Link href="/encyclopedia/polivinilpirrolidon/">{t("relatedArticles.more")}</Link>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
                      type="image/webp"
                    />
                    <Image
                      loading="lazy"
                      height={166}
                      width={246}
                      src="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
                      alt="Мазь на основе йода - превью"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>{t.raw("relatedArticles.articles")[2].title}</strong>
                  </p>
                  <p>
                    {t.raw("relatedArticles.articles")[2].description}
                  </p>
                  <p className="slide-more">
                    <Link href="/encyclopedia/jod-maz/">{t("relatedArticles.more")}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="h2" id="spisok-literatury">
            {t("sections.bibliography")}
          </h2>

          <ol className="literature">
            <li id="literatura-0">
              Luque G., Mareca D. Basics concepts about asepsis and antiseptics. Med Intensiva (Engl Ed).
              2019 Mar;43 Suppl 1:2-6. English, Spanish. doi: 10.1016/j.medin.2018.11.003. Epub 2019 Jan
              11. PMID: 30638958.
            </li>
            <li id="literatura-1">
              Del Río-Carbajo L, Vidal-Cortés P. Types of antiseptics, presentations and rules of use. Med
              Intensiva (Engl Ed). 2019 Mar;43 Suppl 1:7-12. English, Spanish. doi:
              10.1016/j.medin.2018.09.013. Epub 2018 Nov 15. PMID: 30447857.
            </li>
            <li id="literatura-2">
              Низамова Г.Р. Применение антисептиков: от новаторских идей Н.И. Пирогова до современности.
              Вестник ОХиТА. 2021. №1 (02). URL: https://cyberleninka.ru/article/n/primenenie-antiseptikov-ot-novatorskih-idey-n-i-pirogova-do-sovremennosti
              (дата обращения: 09.08.2023).
            </li>
            <li id="literatura-3">
              Голуб В.А., Косивцов А. О. Асептика и антисептика: Учебное пособие. Волгоград: Изд-во
              ВолгГМУ, 2019.
            </li>
            <li id="literatura-4">
              Лыков И.Н., Асирова Э.И. Изучение сравнительной антибактериальной активности
              антисептиков. МНИЖ. 2022. №3-1 (117). URL:
              https://cyberleninka.ru/article/n/izuchenie-sravnitelnoy-antibakterialnoy-aktivnosti-antiseptikov
              (дата обращения: 09.08.2023).
            </li>
            <li id="literatura-5">
              Williamson D, Carter G, Howden B. Current and Emerging Topical Antibacterials and
              Antiseptics: Agents, Action, and Resistance Patterns. Clin Microbiol Rev. 2017 Jul;30(3):827-860.
              doi: 10.1128/CMR.00112-16. PMID: 28592405; PMCID: PMC5475228.
            </li>
            <li id="literatura-6">
              Дрововозова Т.И., Паненко Н.Н., Кулакова Е.С. Исследование бактерицидной активности
              пероксида водорода в сточных водах. МНИЖ. 2016. №7-4 (49). URL:
              https://cyberleninka.ru/article/n/issledovanie-bakteritsidnoy-aktivnosti-peroksida-vodoroda-v-stochnyh-vodah
              (дата обращения: 13.08.2023).
            </li>
            <li id="literatura-7">
              Salas С, Gómez F, Villar M, Martín R. Antisépticos. Clorhexidina [Antiseptic agents:
              chlorhexidine]. Rev Enferm. 2000 Sep;23(9):637-40. Spanish. PMID: 11111679.
            </li>
            <li id="literatura-8">
              Мирзалимова С.А., Гулямова И.Б., Мухамедиев М.Г. Исследование сорбции метиленового синего
              и бриллиантового зеленого гидрогелем сополимера акриламида-n-лимонной кислоты. Universum:
              химия и биология. 2020. №9 (75). URL:
              https://cyberleninka.ru/article/n/issledovanie-sorbtsii-metilenovogo-sinego-i-brilliantovogo-zelenogo-gidrogelem-sopolimera-akrilamida-n-limonnoy-kisloty
              (дата обращения: 13.08.2023).
            </li>
            <li id="literatura-9">
              Дегтярева Е. И., Атанасова Ю. В., Никифоренко В. А. Изучение бактерицидных свойств
              красителей по отношению к условно-патогенной микрофлоре. Веснік Магілёўскага дзяржаўнага
              ўніверсітэта імя А. А. Куляшова. Сер. В. Прыродазнаўчыя навукі (матэматыка, фізіка, біялогія),
              2017.
            </li>
            <li id="literatura-10">
              Морозов А.М., Сергеев А.Н., Кадыков В.А., Аскеров Э.М., Жуков С.В., Беляк М.А., Пельтихина
              О.В., Пашкова А.Л. Об истории развития антисептики как начала современной хирургии. Современные
              проблемы науки и образования – № 3. 2020.
            </li>
            <li id="literatura-11">
              Gershenfeld L. Povidone-iodine as a topical antiseptic. Am J Surg. 1957 Dec;94(6):938-9. doi:
              10.1016/0002-9610(57)90086-7. PMID: 13478818.
            </li>
            <li id="literatura-12">
              Bigliardi P, Alsagoff S, El-Kafrawi H, Pyon J, Wa C, Villa M. Povidone iodine in wound
              healing: A review of current concepts and practices. Int J Surg. 2017 Aug;44:260-268. doi:
              10.1016/j.ijsu.2017.06.073. Epub 2017 Jun 23. PMID: 28648795.
            </li>
            <li id="literatura-13">
              Challacombe S, Kirk-Bayley J, Sunkaraneni V, Combes J. Povidone iodine. Br Dent J. 2020
              May;228(9):656-657. doi: 10.1038/s41415-020-1589-4. PMID: 32385428.
            </li>
            <li id="literatura-14">
              Zamora J.L. Povidone-iodine and wound infection. Surgery. 1984. Vol. 95
            </li>
            <li id="literatura-15">
              Михальский В.В., Горюнов С.В., Богданов А.Е. и др. Применение препарата «Бетадин» в
              лечении инфицированных ран. Русский медицинский журнал. Хирургия. Урология. 2010. Т.18. №29
            </li>
            <li id="literatura-16">
              Даценко Б.М. Теория и практика местного лечения гнойных ран. Проблемы лекарственной
              терапии. К.: Здоров'я. 1995.
            </li>
            <li id="literatura-17">
              Инструкция по медицинскому применению Бетадин Раствор. РН: П№015282/03.
            </li>
            <li id="literatura-18">
              Kramer A, Dissemond J, Kim S, Willy C, Mayer D, Papke R, Tuchmann F, Assadian O. Consensus
              on Wound Antisepsis: Update 2018. Skin Pharmacol Physiol. 2018;31(1):28-58. doi:
              10.1159/000481545. Epub 2017 Dec 21. PMID: 29262416.
            </li>
            <li id="literatura-19">
              Земляной А.Б., Афиногенова А.Г., Матвеев С.А. Применение антисептиков в лечении ран с
              высоким риском инфицирования. Вестник Национального медико-хирургического Центра им. Н. И.
              Пирогова. 2020. №2. URL:
              https://cyberleninka.ru/article/n/primenenie-antiseptikov-v-lechenii-ran-s-vysokim-riskom-infitsirovaniya
              (дата обращения: 13.08.2023).
            </li>
            <li id="literatura-20">
              Белобородов В. А., Кельчевская Е. А. Асептика, антисептика: учебное пособие. Иркутский
              государственный медицинский университет, Кафедра общей хирургии. Иркутск : ИГМУ, 2022
            </li>
            <li id="literatura-21">
              Клец О. П., Левента А. И. и соавт. Учебное пособие. Антисептические средства. Иркутск ИГМУ
              2012.
            </li>
          </ol>
        </div>
      </div>
    </article>
  );
}
