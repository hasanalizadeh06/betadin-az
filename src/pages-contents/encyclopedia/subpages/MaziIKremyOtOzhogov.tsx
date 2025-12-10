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

export default function MaziIKremyOtOzhogov() {
  const t = useTranslations('Blogs.MaziIKremyOtOzhogov');
  const [scrollTriggered, setScrollTriggered] = useState<Triggered>({
    40: false,
    80: false,
  });

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

  return (
    <main>
      <article>
        <div className="container-page-header">
          <div className="container">
            <div className="page-header page-header-breadcrumbs">
              <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="/">
                    <span property="name">{t('sections.breadcrumb_home')}</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="/encyclopedia/">
                    <span property="name">{t('sections.breadcrumb_encyclopedia')}</span>
                  </Link>
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
                  <h1 className="page-header-title-text">
                    {t('sections.header_title')}
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-115x112.webp 1x, /icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/icon-230x224.webp"
                      alt={t('sections.alt_header_icon')}
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">{t('sections.subtitle_burns')}</h2>
                <div className="page-header-body">
                  <p>
                    {t('sections.intro_definition')}
                    <sup>
                      <a href="#literatura-13">13</a>
                    </sup>
                    .
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#vospalitelnaya-faza">{t('sections.toc_inflammatory_phase')}</a>
                  </li>
                  <li>
                    <a href="#faza-regeneracii">{t('sections.toc_regeneration_phase')}</a>
                  </li>
                  <li>
                    <a href="#faza-sozrevaniya-rubcovoy-tkani">{t('sections.toc_scar_maturation_phase')}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/frame-655-4-730x615.webp 1x, /frame-655-4-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/frame-655-4-1460x1230.webp"
                      alt={t('sections.alt_header_banner')}
                      width={730}
                      height={615}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#chem-lechat-ozhogi">{t('sections.nav_treat_burns')}</a>
                </li>
                <li>
                  <a href="#kak-vybrat-maz-ot-ozhogov">{t('sections.nav_choose_ointment')}</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">{t('sections.nav_faq')}</a>
                </li>
                <li>
                  <a href="#spisok-literatury">{t('sections.nav_literature')}</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross">{t('sections.table_of_contents')}</div>
            </nav>
          </div>
        </div>

        <nav className="nav-content nav-content-fixed nav-content-title-hidden">
          <ul>
            <li>
              <a href="#chem-lechat-ozhogi">{t('sections.nav_treat_burns')}</a>
            </li>
            <li>
              <a href="#kak-vybrat-maz-ot-ozhogov">{t('sections.nav_choose_ointment')}</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">{t('sections.nav_faq')}</a>
            </li>
            <li>
              <a href="#spisok-literatury">{t('sections.nav_literature')}</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross">{t('sections.table_of_contents')}</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">{t('sections.disclaimer')}</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <h3 className="h3" id="vidy-ozhogov">
              {t('sections.burn_types_title')}
            </h3>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/circle-1006x1010.webp"
                  alt={t('sections.alt_decorative')}
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>{t('sections.thermal_burn_title')}</strong>
                </p>
                <p>
                  {t('sections.thermal_burn_desc_1')}{' '}
                  <a href="/encyclopedia/termicheskij-ozhog-kozhi/">{t('sections.thermal_burn_desc_2')}</a> ({t('sections.thermal_burn_desc_3')})
                  {t('sections.thermal_burn_desc_4')}.
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>{t('sections.solar_burn_title')}</strong>
                </p>
                <p>
                  {t('sections.solar_burn_desc_1')}{' '}
                  <strong>{t('sections.solar_burn_desc_2')}</strong> – {t('sections.solar_burn_desc_3')}
                </p>
              </div>
            </div>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>{t('sections.chemical_burn_title')}</strong>
                </p>
                <p>
                  {t('sections.chemical_burn_desc_1')}
                  <strong> {t('sections.chemical_burn_desc_2')}</strong>.
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>{t('sections.electrical_burn_title')}</strong>
                </p>
                <p>
                  {t('sections.electrical_burn_desc_1')} <strong>{t('sections.electrical_burn_desc_2')}</strong>{' '}
                  {t('sections.electrical_burn_desc_3')}.
                </p>
              </div>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('sections.thermal_burn_block_title')}</strong>
                </p>
                <p>
                  {t('sections.thermal_burn_block_desc_1')}
                  {t('sections.thermal_burn_block_desc_2')}
                </p>
                <a
                  href="/encyclopedia/termicheskij-ozhog-kozhi/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('sections.read_more_button')}
                </a>
              </div>
              <picture>
                <source
                  srcSet="/termicheskij-ozhog-kozhi-prevyu-310x210.webp 1x, /termicheskij-ozhog-kozhi-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/termicheskij-ozhog-kozhi-prevyu-620x420.webp"
                  alt={t('sections.alt_thermal_burn_preview')}
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3" id="stepeni-porazheniya-kozhi-i-tkaney">
              {t('sections.burn_severity_title')}
            </h3>

            <p>
              <strong>{t('sections.burn_severity_intro')}</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-12-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-12-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-12-1300x650.webp"
                alt={t('sections.alt_burn_severity')}
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              <strong>{t('sections.first_degree_burn')}</strong> {t('sections.first_degree_desc')}.
            </p>

            <p>
              {t('sections.second_degree_intro')} <strong>{t('sections.second_degree_burn')}</strong>{t('sections.second_degree_desc')}.
            </p>

            <p>
              <strong>{t('sections.third_fourth_degree_burn')}</strong> {t('sections.third_fourth_degree_desc')}.
            </p>

            <h3 className="h3" id="pervaya-pomoshch-pri-ozhogah">
              {t('sections.first_aid_title')}
            </h3>

            <div className="list-base">
              <p>
                {t('sections.first_aid_intro')}
              </p>

              <p>
                <strong>{t('sections.chemical_burn_first_aid')}</strong> {t('sections.chemical_burn_first_aid_desc')}:
              </p>

              <ul>
                <li>
                  <strong>{t('sections.acid_burn_aid')}</strong> {t('sections.acid_burn_aid_desc')}.
                </li>
                <li>
                  <strong>{t('sections.alkaline_burn_aid')}</strong> {t('sections.alkaline_burn_aid_desc')}.
                </li>
              </ul>
            </div>

            <div className="big">
              <div className="line">
                <p>
                  <strong>{t('sections.first_aid_step_1')}</strong>
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t('sections.first_aid_step_2')}</strong>
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>{t('sections.first_aid_step_3')}</strong>
                </p>
              </div>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-3-7-650x150.webp 1x, /istockphoto-1341663000-2048x2048-2-3-7-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-3-7-1300x300.webp"
                alt={t('sections.alt_first_aid')}
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h2 className="h2" id="chem-lechat-ozhogi">
              {t('sections.treatment_title')}
            </h2>

            <p>
              {t('sections.treatment_intro_1')}
            </p>

            <p>
              {t('sections.treatment_intro_2_1')} <strong>{t('sections.treatment_intro_2_2')}</strong>. {t('sections.treatment_intro_2_3')}
            </p>

            <p>
              {t('sections.treatment_intro_3')} <strong>{t('sections.treatment_intro_3_2')}</strong>.
            </p>

            <p>
              {t('sections.treatment_intro_4')}
            </p>

            <p>
              {t('sections.treatment_intro_5_1')} <strong>{t('sections.treatment_intro_5_2')}</strong> {t('sections.treatment_intro_5_3')}
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.treatment_intro_6_1')}
              <a href="/encyclopedia/obrabotka-ran/" title="Обработка ран">
                {t('sections.treatment_intro_6_2')}
              </a>
              .
            </p>

            <h3 className="h3" id="obrabotka-ozhogov">
              {t('sections.burn_processing_title')}
            </h3>

            <p>
              {t('sections.burn_processing_intro')}
            </p>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.rinse_wound_title')}</strong>
                  </p>
                  <p>{t('sections.rinse_wound_desc')}</p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>{t('sections.disinfect_wound_title')}</strong>
                  </p>
                  <p>
                    {t('sections.disinfect_wound_intro')} <span style={{ color: '#0f780b' }}>{t('sections.betadin_solution_highlighted')}<sup>®</sup></span>. {t('sections.disinfect_comparison')}{' '}
                    <a href="/encyclopedia/rastvor-joda/">{t('sections.iodine_link_text')}</a>, фукорцин){t('sections.disinfect_comfort')}
                  </p>
                  <p>
                    Препараты <strong><span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span></strong> – {t('sections.betadin_forms_intro')}{' '}
                    <a href="/encyclopedia/povidon-jod/">{t('sections.povidon_iodine_link')}</a>{t('sections.iodine_complex')}{' '}
                    <a href="/encyclopedia/jod/">{t('sections.iodine_link')}</a> {t('sections.iodine_alcohol_free')}
                    <sup>
                      <a href="#literatura-2">2,14</a>
                    </sup>
                    .
                  </p>
                </div>
              </div>
              <div className="line">
                <p>
                  <strong>{t('sections.processing_step_3')}</strong>
                </p>
              </div>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-13-650x150.webp 1x, /istockphoto-1341663000-2048x2048-2-13-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-13-1300x300.webp"
                alt={t('sections.alt_burn_processing')}
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h2 className="h2" id="kak-vybrat-maz-ot-ozhogov">
              {t('sections.choose_ointment_title')}
            </h2>

            <p>
              {t('sections.choose_ointment_intro_start')}{' '}
              <a href="/encyclopedia/rana-ili-tsarapina-na-ruke/" title="Рана или царапина на руке">
                {t('sections.choose_ointment_intro_wounds')}
              </a>
              {t('sections.choose_ointment_intro_middle')}{' '}
              <strong>{t('sections.choose_ointment_intro_end')}</strong>.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-3-8-650x150.webp 1x, /istockphoto-1341663000-2048x2048-2-3-8-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-3-8-1300x300.webp"
                alt={t('sections.alt_burn_phases')}
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="vospalitelnaya-faza">
              {t('sections.inflammatory_phase_title')}
            </h3>

            <p>
              <strong>{t('sections.inflammatory_phase_intro_1')}</strong> {t('sections.inflammatory_phase_intro_2')}. {t('sections.inflammatory_phase_intro_3')}
            </p>

            <h4 className="h4" id="maz-na-osnove-povidon-yoda-betadin">
              {t('sections.betadin_ointment_title')}
            </h4>

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

              <p>
                {t('sections.betadin_ointment_intro_1')} <strong><span style={{ color: '#0f780b' }}>{t('sections.betadin_ointment_intro_2')}<sup>®</sup></span></strong> {t('sections.betadin_ointment_intro_3')}{' '}
                <strong><span style={{ color: '#0f780b' }}>{t('sections.betadin_ointment_intro_4')}<sup>®</sup></span></strong>{t('sections.betadin_ointment_intro_5')}
                <sup>
                  <a href="#literatura-3">4</a>
                </sup>
. <a href="/encyclopedia/jod-maz/">{t('sections.betadin_ointment_intro_6')}</a>
                <span style={{ color: '#0f780b' }}>
                  <strong>{t('sections.betadin_ointment_intro_7')}<sup>®</sup></strong>
                </span>
                ) {t('sections.betadin_ointment_intro_8')}. {t('sections.betadin_ointment_treatment')}{' '}
                <a href="/encyclopedia/rany-s-infekciej/">{t('sections.betadin_ointment_treatment_link')}</a> {t('sections.betadin_ointment_benefits')}{' '}
                <span style={{ color: '#0f780b' }}>
                  <strong>Бетадин<sup>®</sup></strong>
                </span>
                {t('sections.betadin_ointment_benefits_desc')}
                <sup>
                  <a href="#literatura-2">3</a>
                </sup>
. <strong><span style={{ color: '#0f780b' }}>Betadin®</span></strong> {t('sections.betadin_ointment_approved')}
                <sup>
                  <a href="#literatura-1">2,4</a>
                </sup>
                .
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-maz-instruktsiya/"
                >
                  {t('sections.betadin_ointment_instruction')}
                </a>
              </p>
            </div>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                {t('sections.betadin_video_title')}
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={t('sections.betadin_video_title')}
                ></iframe>
              </div>
              <div className="iframe_desc">
                {t('sections.betadin_video_desc')}
              </div>
            </div>

            <h4 className="h4" id="mery-predostorozhnosti-pri-ispolzovanii-povidon-yoda-betadin">
              {t('sections.betadin_precautions_title')}
            </h4>

            <p>
              {t('sections.betadin_precautions_1')}
            </p>

            <p>
              {t('sections.betadin_precautions_2')}
            </p>

            <h4 className="h4" id="maz-s-sulfadiazinom-serebra">
              {t('sections.sulfadiazine_ointment_title')}
            </h4>

            <p>
              {t('sections.sulfadiazine_ointment_desc').split('.')[0]}.
              <sup>
                <a href="#literatura-6">7</a>
              </sup>
. {t('sections.sulfadiazine_ointment_desc').split('.').slice(1).join('.')}
              <sup>
                <a href="#literatura-11">12</a>
              </sup>
              .
            </p>

            <div className="green">
              <p>
                {t('sections.warning_text')}
              </p>
            </div>

            <h3 className="h3" id="faza-regeneracii">
              {t('sections.regeneration_phase_title')}
            </h3>

            <p>
              {t('sections.regeneration_phase_intro')}
            </p>

            <h4 className="h4" id="mazi-na-osnove-pantotenovoy-kisloty">
              {t('sections.pantothenic_acid_title')}
            </h4>

            <p>
              {t('sections.pantothenic_acid_desc').split('.')[0]}.
              <sup>
                <a href="#literatura-4">5</a>
              </sup>
              {t('sections.pantothenic_details')}
              <sup>
                <a href="#literatura-4">5</a>
              </sup>
              .
            </p>

            <h4 className="h4" id="kremy-na-osnove-vodnogo-ekstrakta-pshenicy">
              {t('sections.wheat_extract_title')}
            </h4>

            <p>
              {t('sections.wheat_extract_desc').split('.')[0]}.
              <sup>
                <a href="#literatura-5">6</a>
              </sup>
              {t('sections.wheat_extract_details')}
              <sup>
                <a href="#literatura-5">6</a>
              </sup>
              .
            </p>

            <h4 className="h4" id="krem-na-osnove-soli-lantana">
              {t('sections.lanthanum_salt_title')}
            </h4>

            <p>
              {t('sections.lanthanum_salt_desc').split('.')[0]}.
              <sup>
                <a href="#literatura-8">9</a>
              </sup>
. {t('sections.lanthanum_salt_desc').split('.').slice(1).join('.')}
              <sup>
                <a href="#literatura-6">7</a>
              </sup>
              .
            </p>

            <h4 className="h4" id="preparaty-s-kombinaciey-aminitrozol--metiluracil--oblepihovoe-maslo">
              {t('sections.combination_drugs_title')}
            </h4>

            <p>
              {t('sections.combination_drugs_desc').split('.')[0]}.
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
. {t('sections.combination_drugs_desc').split('.').slice(1).join('.')}
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
              .
            </p>

            <p>
              {t('sections.vitamins_desc')}
            </p>

            <h3 className="h3" id="faza-sozrevaniya-rubcovoy-tkani">
              {t('sections.scar_phase_title')}
            </h3>

            <p>
              {t('sections.scar_phase_intro_1')}
            </p>

            <p>
              {t('sections.scar_phase_intro_2')}
            </p>

            <h4 className="h4" id="geli-i-kremy-na-osnove-silikona">
              {t('sections.silicon_gel_title')}
            </h4>

            <p>
              {t('sections.silicon_gel_desc')}
            </p>

            <h4 className="h4" id="krem-s-gialuronidazoy">
              {t('sections.hyaluronic_acid_title')}
            </h4>

            <p>
              {t('sections.hyaluronic_acid_desc')}
            </p>

            <p>
              <br />
              {t('sections.consult_doctor')}
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

            <h3 className="h3" id="mozhno-li-mochit-ozhogovuyu-poverhnost-v-period-lecheniya">
              {t('sections.faq_q1')}
            </h3>

            <p>
              {t('sections.faq_a1_1')}
            </p>

            <h3 className="h3" id="kak-dolgo-zazhivayut-ozhogi">
              {t('sections.faq_q2')}
            </h3>

            <p>
              {t('sections.faq_a2_1')}
            </p>

            <p>
              {t('sections.faq_a2_2')}
            </p>

            <h3 className="h3" id="oshibki-kotorye-nelzya-dopuskat-pri-lechenii-ozhogov">
              {t('sections.faq_q3')}
            </h3>

            <div className="list-base">
              <ul>
                <li>{t('sections.faq_a3_1')}</li>
                <li>{t('sections.faq_a3_2')}</li>
                <li>{t('sections.faq_a3_3')}</li>
                <li>{t('sections.faq_a3_4')}</li>
                <li>{t('sections.faq_a3_5')}</li>
                <li>{t('sections.faq_a3_6')}</li>
              </ul>
            </div>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('sections.author_name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('sections.author_role')}</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-203x203.webp 1x, /moshkova-novyj-406x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/moshkova-novyj-406x406.webp"
                  alt={t('sections.author_name')}
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
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/rastvor-joda-prevyu-246x166.webp 1x, /rastvor-joda-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/rastvor-joda-prevyu-491x332.webp"
                        alt="Раствор йода - превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t('sections.slider_article_1_title')}</strong>
                    </p>
                    <p>{t('sections.slider_article_1_desc')}</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/rastvor-joda/">{t('sections.slider_article_1_link')}</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/rany-s-infekcziej-prevyu-246x166.webp 1x, /rany-s-infekcziej-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/rany-s-infekcziej-prevyu-491x332.webp"
                        alt="Раны с инфекцией-превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t('sections.slider_article_2_title')}</strong>
                    </p>
                    <p>{t('sections.slider_article_2_desc')}</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/rany-s-infekciej/">{t('sections.slider_article_2_link')}</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/termicheskij-ozhog-kozhi-prevyu-246x166.webp 1x, /termicheskij-ozhog-kozhi-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/termicheskij-ozhog-kozhi-prevyu-491x332.webp"
                        alt="Термический ожог кожи-превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t('sections.slider_article_3_title')}</strong>
                    </p>
                    <p>{t('sections.slider_article_3_desc')}</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/termicheskij-ozhog-kozhi/">{t('sections.slider_article_3_link')}</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="h2" id="spisok-literatury">
              {t('sections.literatura_title')}
            </h2>

            <ol className="literature">
              <li id="literatura-0">{t('sections.literatura_item_0')}</li>
              <li id="literatura-1">{t('sections.literatura_item_1')}</li>
              <li id="literatura-2">{t('sections.literatura_item_2')}</li>
              <li id="literatura-3">{t('sections.literatura_item_3')}</li>
              <li id="literatura-4">{t('sections.literatura_item_4')}</li>
              <li id="literatura-5">{t('sections.literatura_item_5')}</li>
              <li id="literatura-6">{t('sections.literatura_item_6')}</li>
              <li id="literatura-7">{t('sections.literatura_item_7')}</li>
              <li id="literatura-8">{t('sections.literatura_item_8')}</li>
              <li id="literatura-9">{t('sections.literatura_item_9')}</li>
              <li id="literatura-10">{t('sections.literatura_item_10')}</li>
              <li id="literatura-11">{t('sections.literatura_item_11')}</li>
              <li id="literatura-12">{t('sections.literatura_item_12')}</li>
              <li id="literatura-13">{t('sections.literatura_item_13')}</li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
