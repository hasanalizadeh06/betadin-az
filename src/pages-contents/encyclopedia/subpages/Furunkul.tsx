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

export default function Furunkul() {
  const t = useTranslations('Blogs.Furunkul');
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
                      srcSet="/icon-230x224.webp, /icon-230x224.webp"
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
                      <a href="#literatura">{t('header.refs')}</a>
                    </sup>
                    .
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#kak-lechat-furunkul">{t('nav_headers.treatment')}</a>
                  </li>
                  <li>
                    <a href="#mestnoe-lechenie-furunkula-v-zavisimosti-ot-stadii-razvitiya">
                      {t('nav_headers.home_treatment')}
                    </a>
                  </li>
                  <li>
                    <a href="#antisepticheskaya-obrabotka-preparatami-na-osnove-povidon-yoda-betadin">
                      {t('nav_headers.antiseptic_treatment')}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-5-730x615.webp 1x, /kartinka-banner-5-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-5-1460x1230.webp"
                      alt="Фурункул: лечение, мази и кремы"
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

            <p>{t('sections.intro_para2')}
              <strong>({t('sections.mkb_label')})</strong>, {t('sections.intro_para2_cont')}
              <strong>{t('sections.mkb_code')}</strong> {t('sections.intro_para2_end')}
              <strong>{t('sections.mkb_code_num')}</strong>.
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
              <strong>Образование фурункула</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-25-650x352.webp 1x, /medical-kit-and-bandaid-509398-488-1-25-1300x704.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-25-1300x704.webp"
                alt="Образование фурункула"
                width={650}
                height={352}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="kakie-simptomy-mogut-soprovozhdat-poyavlenie-furunkula">
              {t('sections.symptoms_title')}
            </h3>

            <div className="list-base">
              <ul>
                {t.raw('sections.symptoms_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="h2" id="prichiny-vozniknoveniya-furunkula">
              {t('sections.causes_title')}
            </h2>

            <div className="list-base">
              <ul>
                {t.raw('sections.causes_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <h3 className="h3" id="faktory-provociruyushchie-poyavlenie-furunkula">
              {t('sections.risk_factors_title')}
            </h3>

            <div className="list-base">
              <p>
                <strong>
                  {t('sections.risk_factors_intro')}
                </strong>
              </p>
              <ul>
                {t.raw('sections.risk_factors_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="h2" id="kak-voznikaet-furunkul">
              {t('sections.development_title')}
            </h2>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-26-650x352.webp 1x, /medical-kit-and-bandaid-509398-488-1-26-1300x704.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-26-1300x704.webp"
                alt={t('sections.development_title')}
                width={650}
                height={352}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.maturation_stage')}</strong>
                  </p>
                  <ul>
                    <li>
                      Формирование отечного и болезненного уплотнения (инфильтрата) ярко-красного
                      цвета.
                    </li>
                    <li>
                      Накопление жидкости в замкнутой полости, о чем говорит появление симптома
                      флюктуации (зыбления) в центральной части уплотнения.
                    </li>
                    <li>
                      Формирование гнойно-некротического стержня (основание волоса, окруженное гноем и
                      омертвевшей тканью).
                    </li>
                    <li>Вскрытие фурункула с отделением гнойно-некротических масс.</li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.healing_stage')}</strong>
                  </p>
                  <ul>
                    <li>
                      Заполнение образовавшейся «емкости» молодой соединительной тканью (грануляционной).
                    </li>
                    <li>
                      Образование рубца (шрам, грубая соединительная ткань)
                      <sup>
                        <a href="#literatura">{t('sections.healing_ref')}</a>
                      </sup>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="h2" id="diagnostika">
              {t('sections.diagnosis_title')}
            </h2>

            <p>
              {t('sections.diagnosis_intro')}
            </p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>{t('sections.diagnosis_visual')}</strong> {t('sections.diagnosis_visual_text')}
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t('sections.diagnosis_culture')}</strong> {t('sections.diagnosis_culture_text')}
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t('sections.diagnosis_biochemical')}</strong> — {t('sections.diagnosis_biochemical_text')}
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t('sections.diagnosis_cbc')}</strong> — {t('sections.diagnosis_cbc_text')}
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t('sections.diagnosis_ifa')}</strong> — {t('sections.diagnosis_ifa_text')}
                  рецидивах заболевания
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <h2 className="h2" id="kak-lechat-furunkul">
              {t('sections.treatment_title')}
            </h2>

            <p>{t('sections.treatment_intro')}</p>

            <h3 className="h3" id="hirurgicheskoe-lechenie">
              {t('sections.surgical_title')}
            </h3>

            <div className="list-base">
              <p>
                {t('sections.surgical_intro')}
              </p>
              <ul>
                {t.raw('sections.surgical_list').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <h3 className="h3" id="lechenie-napravlennoe-na-vozbuditelya-etiotropnoe-lechenie">
              {t('sections.etiotropic_title')}
            </h3>

            <p>
              {t('sections.etiotropic_text')}
              <sup>
                <a href="#literatura">{t('sections.etiotropic_ref')}</a>
              </sup>
              .
            </p>

            <div className="green">
              <p>
                <strong>
                  {t('sections.warning')}
                </strong>
              </p>
            </div>

            <h3 className="h3" id="mestnoe-lechenie-furunkula-v-zavisimosti-ot-stadii-razvitiya">
              {t('sections.local_treatment_title')}
            </h3>

            <h4 className="h4" id="stadiya-razvitiya-uplotneniya-infiltrata">
              {t('sections.infiltration_stage')}
            </h4>

            <p>
              {t('sections.infiltration_treatment_intro')}
            </p>

            <p>
              {t('sections.infiltration_compresses')}
              <sup>
                <a href="#literatura">{t('sections.infiltration_ref')}</a>
              </sup>
              :
            </p>

            <div className="list-base">
              <ul>
                {t.raw('sections.medications_list').map((item: any, idx: number) => (
                  <li key={idx}>
                    <strong>{item.name}</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              {t('sections.infiltration_after_discharge')}
              <sup>
                <a href="#literatura">{t('sections.infiltration_after_ref')}</a>
              </sup>
              .
            </p>

            <h4 className="h4" id="stadiya-zazhivleniya">
              {t('sections.healing_stage_local')}
            </h4>

            <p>
              {t('sections.healing_stage_text')}
            </p>

            <p>
              {t('sections.antiseptic_importance')}
            </p>

            <h4 className="h4" id="antisepticheskaya-obrabotka-preparatami-na-osnove-povidon-yoda-betadin">
              {t('sections.betadin_antiseptic_title')}
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
                    alt="Бетадин"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                {t('sections.betadin_iodophores')}
                <sup>
                  <a href="#literatura">{t('sections.betadin_iodophores_ref')}</a>
                </sup>
                .<br />
                {t('sections.betadin_antimicrobial')}
                <sup>
                  <a href="#literatura">{t('sections.betadin_antimicrobial_ref')}</a>
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
                  {t('sections.instruction')}
                </a>
              </p>
            </div>

            <div className="list-base">
              <ul>
                {t.raw('sections.betadin_action_list').map((item: any, idx: number) => (
                  <li key={idx}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              {t('sections.betadin_forms')}
            </p>

            <div className="list-base">
              <ul>
                {t.raw('sections.betadin_application').map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="h2" id="profilaktika">
              {t('sections.prevention_title')}
            </h2>

            <div className="list-base">
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

            <h3 className="h3" id="kakie-zabolevaniya-imeyut-shozhie-simptomy">
              {t('sections.faq_similar_q')}
            </h3>

            <p>
              {t('sections.faq_similar_a')}
              <sup>
                <a href="#literatura">{t('sections.faq_similar_ref')}</a>
              </sup>
              .
            </p>

            <h3 className="h3" id="mogut-li-pri-furunkuleze-voznikat-oslozhneniya">
              {t('sections.faq_complications_q')}
            </h3>

            <p>
              {t('sections.faq_complications_a')}
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h3 className="h3" id="k-kakomu-vrachu-obratitsya">
              {t('sections.doctor_title')}
            </h3>

            <p>
              {t('sections.doctor_text')}
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('sections.author_name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('sections.author_label')}</p>
              </div>
              <picture>
                <source
                  srcSet="/kraskovskij-novyj-470x406 (1).webp, /kraskovskij-novyj-470x406 (1).webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/kraskovskij-novyj-470x406 (1).webp"
                  alt={t('sections.author_name')}
                  width={235}
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
                          srcSet={`${idx === 0 ? '/povidon-jod-prevyu-246x166 (1).webp' : idx === 1 ? '/maz-na-osnove-joda-prevyu-246x166 (1).webp' : '/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp'} 1x, ${idx === 0 ? '/povidon-jod-prevyu-246x166 (1).webp' : idx === 1 ? '/maz-na-osnove-joda-prevyu-246x166 (1).webp' : '/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp'} 2x`}
                          type="image/webp"
                        />
                        <Image
                          src={idx === 0 ? '/povidon-jod-prevyu-246x166 (1).webp' : idx === 1 ? '/maz-na-osnove-joda-prevyu-246x166 (1).webp' : '/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp'}
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

            <h2 className="h2" id="spisok-literatury">
              {t('sections.literature_title')}
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
