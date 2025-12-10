"use client";
import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

const MazKremPreparatyPriTroficheskihYazvah: React.FC = () => {
  const t = useTranslations('Blogs.MazKremPreparatyPriTroficheskihYazvah');
  const triggeredRef = useRef<Record<number, boolean>>({ 25: false, 50: false, 75: false, 100: false });
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
                    <span property="name">{t('sections.breadcrumb_encyclopedia')}</span>
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
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <img
                      decoding="async"
                      height={112}
                      width={115}
                      src="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png"
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.png 2x"
                      alt={t('sections.alt_header_icon')}
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">{t('sections.page_header_subtitle')}</h2>
                <div className="page-header-body">
                  <p>{t('sections.intro_definition')}</p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#vidy-mazey-i-kremov-ot-troficheskih-yazv">{t('sections.anchor_1')}</a>
                  </li>
                  <li>
                    <a href="#lechenie-troficheskih-yazv">{t('sections.anchor_2')}</a>
                  </li>
                  <li>
                    <a href="#maz-na-osnove-povidon-ioda">{t('sections.anchor_3')}</a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2397/f4bd2ada700e0178420e73dad9a673c8f88cca0f65809cc0443ab1c9cd7a4345-730x615/frame-656-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2397/f4bd2ada700e0178420e73dad9a673c8f88cca0f65809cc0443ab1c9cd7a4345-730x615/frame-656-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <img
                      fetchPriority="high"
                      decoding="async"
                      height={615}
                      width={730}
                      src="https://betadin.ru/wp-content/uploads/imagesv3/2397/f4bd2ada700e0178420e73dad9a673c8f88cca0f65809cc0443ab1c9cd7a4345-730x615/frame-656-730x615.jpg"
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2397/f4bd2ada700e0178420e73dad9a673c8f88cca0f65809cc0443ab1c9cd7a4345-730x615/frame-656-730x615.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/2397/f4bd2ada700e0178420e73dad9a673c8f88cca0f65809cc0443ab1c9cd7a4345-730x615/frame-656-1460x1230.jpg 2x"
                      alt={t('sections.alt_header_banner')}
                    />
                  </picture>
                </div>
              </div>
            </div>
            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#prichiny-poyavleniya-i-vidy-troficheskih-yazv">{t('sections.nav_1')}</a>
                </li>
                <li>
                  <a href="#diagnostika">{t('sections.nav_2')}</a>
                </li>
                <li>
                  <a href="#lechenie-troficheskih-yazv">{t('sections.nav_3')}</a>
                </li>
                <li>
                  <a href="#vidy-mazey-i-kremov-ot-troficheskih-yazv">{t('sections.nav_4')}</a>
                </li>
                <li>
                  <a href="#profilaktika">{t('sections.nav_5')}</a>
                </li>
                <li>
                  <a href="#otvety-na-voprosy">{t('sections.nav_6')}</a>
                </li>
                <li>
                  <a href="#spisok-literatury">{t('sections.nav_7')}</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross"> {t('sections.table_of_contents')}</div>
            </nav>
          </div>
        </div>
        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#prichiny-poyavleniya-i-vidy-troficheskih-yazv">{t('sections.nav_1')}</a>
            </li>
            <li>
              <a href="#diagnostika">{t('sections.nav_2')}</a>
            </li>
            <li>
              <a href="#lechenie-troficheskih-yazv">{t('sections.nav_3')}</a>
            </li>
            <li>
              <a href="#vidy-mazey-i-kremov-ot-troficheskih-yazv">{t('sections.nav_4')}</a>
            </li>
            <li>
              <a href="#profilaktika">{t('sections.nav_5')}</a>
            </li>
            <li>
              <a href="#otvety-na-voprosy">{t('sections.nav_6')}</a>
            </li>
            <li>
              <a href="#spisok-literatury">{t('sections.nav_7')}</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross"> {t('sections.table_of_contents')}</div>
        </nav>
        <div className="home-container">
          <div className="new-disclaimer"> {t('sections.disclaimer')}</div>
        </div>
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              {t('sections.intro_paragraph')}
            </p>
            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <img
                  decoding="async"
                  height={505}
                  width={503}
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg"
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.jpg 2x"
                  alt={t('sections.alt_decorative')}
                />
              </picture>
            </div>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2400/164d7b9884aeaa6933d388fadffcdb154f4b568a5b024ea95c0f8a9cd0a1be09-650x0/rectangle-212-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2400/164d7b9884aeaa6933d388fadffcdb154f4b568a5b024ea95c0f8a9cd0a1be09-650x0/rectangle-212-1300x650.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/2400/164d7b9884aeaa6933d388fadffcdb154f4b568a5b024ea95c0f8a9cd0a1be09-650x0/rectangle-212-650x325.png"
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2400/164d7b9884aeaa6933d388fadffcdb154f4b568a5b024ea95c0f8a9cd0a1be09-650x0/rectangle-212-650x325.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/2400/164d7b9884aeaa6933d388fadffcdb154f4b568a5b024ea95c0f8a9cd0a1be09-650x0/rectangle-212-1300x650.png 2x"
                alt={t('sections.alt_ulcer_formation')}
              />
            </picture>
            <h3 className="h3">{t('sections.primary_symptoms_title')}</h3>
            <p>{t('sections.primary_symptoms_p1')}</p>
            <p>{t('sections.primary_symptoms_p2')}</p>
            <h2 className="h2" id="prichiny-poyavleniya-i-vidy-troficheskih-yazv">{t('sections.causes_title')}</h2>
            <p>{t('sections.causes_intro_p1')}</p>
            <p>{t('sections.causes_intro_p2')}</p>
            <div className="list-base">
              <p><strong>{t('sections.causes_list_intro')}</strong></p>
              <ul>
                <li>{t('sections.cause_1')}</li>
                <li>{t('sections.cause_2')}</li>
                <li>{t('sections.cause_3')}</li>
                <li>{t('sections.cause_4')}</li>
                <li>{t('sections.cause_5')}</li>
                <li>{t('sections.cause_6')}</li>
                <li>{t('sections.cause_7')}</li>
                <li>{t('sections.cause_8')}</li>
                <li>{t('sections.cause_9')}</li>
                <li>{t('sections.cause_10')}</li>
              </ul>
            </div>
            <h2 className="h2" id="diagnostika">{t('sections.diagnostics_title')}</h2>
            <p>{t('sections.diagnostics_intro')}</p>
            <div className="list-base">
              <p><strong>{t('sections.diagnostics_specialists')}</strong></p>
              <ul>
                <li>{t('sections.diagnostic_method_1')}</li>
                <li>{t('sections.diagnostic_method_2')}</li>
                <li>{t('sections.diagnostic_method_3')}</li>
              </ul>
            </div>
            <div className="list-base">
              <p><strong>{t('sections.diagnostics_depth_intro')}</strong></p>
              <ul>
                <li>{t('sections.ulcer_depth_1')}</li>
                <li>{t('sections.ulcer_depth_2')}</li>
                <li>{t('sections.ulcer_depth_3')}</li>
              </ul>
            </div>
            <div className="green">
              <p>{t('sections.ulcer_size_classification')}</p>
            </div>
            <div className="iframe">
              <div className="bg_default bg_green" />
              <div className="h3 h3_green iframe-title">{t('sections.iframe_title_choose_ointment')}</div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/7de01729aaf5056b179900bface5b278/?p=Lc09mJZvNvKBsatikqztqQ"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={t('sections.iframe_title_choose_ointment')}
                />
              </div>
              <div className="iframe_desc">{t('sections.iframe_desc_choose_ointment')}</div>
            </div>
            <h2 className="h2" id="lechenie-troficheskih-yazv">{t('sections.treatment_title')}</h2>
            <p>{t('sections.treatment_intro')}</p>
            <div className="list-base">
              <p><strong>{t('sections.treatment_varicose_intro')}</strong></p>
              <ul>
                <li>{t('sections.treatment_varicose_1')}</li>
                <li>{t('sections.treatment_varicose_2')}</li>
                <li>{t('sections.treatment_varicose_3')}</li>
              </ul>
            </div>
            <div className="list-base">
              <p><strong>{t('sections.treatment_arterial_intro')}</strong></p>
              <ul>
                <li>{t('sections.treatment_arterial_1')}</li>
                <li>{t('sections.treatment_arterial_2')}</li>
              </ul>
            </div>
            <div className="list-base">
              <p><strong>{t('sections.treatment_nerve_intro')}</strong></p>
              <ul>
                <li>{t('sections.treatment_nerve_1')}</li>
                <li>{t('sections.treatment_nerve_2')}</li>
                <li>{t('sections.treatment_nerve_3')}</li>
              </ul>
            </div>
            <p>{t('sections.treatment_medications')}</p>
            <div className="green"><p><strong>{t('sections.treatment_warning')}</strong></p></div>
            <div className="block-with-image">
              <div className="block-with-image__green">
                <p><strong>{t('sections.block_image_title')}</strong></p>
                <p>{t('sections.block_image_description')}</p>
                <a href="/encyclopedia/lechenie-troficheskih-yazv/" className="btn btn-green" target="_blank" rel="noreferrer">{t('sections.block_image_button')}</a>
              </div>
              <picture>
                <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1902/96c2da485ef175cfa5fee13575d8e8c2a6520e4abb85805a71bbb7908fabb134-310x235/lechenie-troficheskih-yazv-prevyu-310x210.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/1902/96c2da485ef175cfa5fee13575d8e8c2a6520e4abb85805a71bbb7908fabb134-310x235/lechenie-troficheskih-yazv-prevyu-620x420.webp 2x" type="image/webp" />
                <img loading="lazy" decoding="async" height={210} width={310} src="https://betadin.ru/wp-content/uploads/imagesv3/1902/96c2da485ef175cfa5fee13575d8e8c2a6520e4abb85805a71bbb7908fabb134-310x235/lechenie-troficheskih-yazv-prevyu-310x210.png" alt="" />
              </picture>
            </div>
            <p>{t('sections.surgical_treatment_intro')}</p>
            <p>{t('sections.external_therapy_title_p')}</p>
            <p>{t('sections.all_ulcers_infected')}</p>
            <p>{t('sections.ulcer_toilet_procedure')}</p>
            <p>{t('sections.peripheral_dermatitis')}</p>
            <p>{t('sections.draining_sorbents')}</p>
            <p>{t('sections.granulation_care')}</p>
            <h2 className="h2" id="vidy-mazey-i-kremov-ot-troficheskih-yazv">{t('sections.ointment_types_title')}</h2>
            <h3 className="h3">{t('sections.water_soluble_ointments_title')}</h3>
            <p>{t('sections.water_soluble_ointments_intro')}</p>
            <h4 className="h4" id="maz-na-osnove-povidon-ioda">{t('sections.betadin_ointment_title')}</h4>
            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source media="(max-width: 767px)" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bec2f26cdcf5c0bdc3093eb38b75d41a081dfe6a4f0bb975c2bedca93889e813-315x310/banner-betadin-maz-mobile-315x226.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bec2f26cdcf5c0bdc3093eb38b75d41a081dfe6a4f0bb975c2bedca93889e813-315x310/banner-betadin-maz-mobile-630x451.webp 2x" type="image/webp" />
                  <img loading="lazy" decoding="async" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-927x916.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-1853x1832.jpg 2x" width={927} height={916} src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-927x916.jpg" alt={t('sections.alt_banner_product')} />
                </picture>
              </div>
              <p>{t('sections.betadin_povidon_iod_intro')}</p>
              <p><strong>{t('sections.betadin_ointment_uses_title')}</strong></p>
              <ul>
                <li>{t('sections.betadin_use_1')}</li>
                <li>{t('sections.betadin_use_2')}</li>
                <li>{t('sections.betadin_use_3')}</li>
                <li>{t('sections.betadin_use_4')}</li>
              </ul>
              <p><img loading="lazy" decoding="async" className="aligncenter wp-image-3270 size-full" src="https://betadin.ru/wp-content/uploads/2022/12/istockphoto-1341663000-2048x2048-2-4.png" alt={t('sections.alt_action_ointment')} width={2600} height={600} srcSet="https://betadin.ru/wp-content/uploads/2022/12/istockphoto-1341663000-2048x2048-2-4.png 2600w, https://betadin.ru/wp-content/uploads/2022/12/istockphoto-1341663000-2048x2048-2-4-300x69.png 300w, https://betadin.ru/wp-content/uploads/2022/12/istockphoto-1341663000-2048x2048-2-4-1024x236.png 1024w, https://betadin.ru/wp-content/uploads/2022/12/istockphoto-1341663000-2048x2048-2-4-768x177.png 768w, https://betadin.ru/wp-content/uploads/2022/12/istockphoto-1341663000-2048x2048-2-4-1536x354.png 1536w, https://betadin.ru/wp-content/uploads/2022/12/istockphoto-1341663000-2048x2048-2-4-2048x473.png 2048w" sizes="(max-width: 2600px) 100vw, 2600px" /></p>
              <p>{t('sections.betadin_application_procedure')}</p>
              <p className="buttons"><a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-maz-instruktsiya/">{t('sections.instruction_button')}</a></p>
            </div>
            <p>{t('sections.betadin_solution_description')}</p>
            <picture className="img-normal">
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3303/415860c04a2309882ba479eaa2f844679fc05432369ec14f2e171725fbc67db9-650x0/medical-kit-and-bandaid-509398-488-1-2-650x325.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/3303/415860c04a2309882ba479eaa2f844679fc05432369ec14f2e171725fbc67db9-650x0/medical-kit-and-bandaid-509398-488-1-2-1300x650.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/uploads/imagesv3/3303/415860c04a2309882ba479eaa2f844679fc05432369ec14f2e171725fbc67db9-650x0/medical-kit-and-bandaid-509398-488-1-2-650x325.png" alt={t('sections.alt_treatment_solution')} />
            </picture>
            <p>{t('sections.solution_properties')}</p>
            <div className="iframe">
              <div className="bg_default bg_green" />
              <div className="h3 h3_green iframe-title">{t('sections.video_title_povidon_iod')}</div>
              <div className="iframe-container">
                <iframe src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={t('sections.iframe_title_povidon_iod')} />
              </div>
              <div className="iframe_desc">{t('sections.video_desc_povidon_iod')}</div>
            </div>
            <h4 className="h4">{t('sections.other_ointment_title')}</h4>
            <p>{t('sections.other_ointment_description')}</p>
            <h3 className="h3">{t('sections.hydrogel_products_title')}</h3>
            <p>{t('sections.hydrogel_products_intro')}</p>
            <h4 className="h4">{t('sections.metronidazole_gel_title')}</h4>
            <p>{t('sections.metronidazole_gel_description')}</p>
            <p>{t('sections.draining_sorbents_enzymes')}</p>
            <h4 className="h4">{t('sections.clostridiopeptidase_ointment_title')}</h4>
            <p>{t('sections.clostridiopeptidase_ointment_description')}</p>
            <h3 className="h3">{t('sections.venotonics_title')}</h3>
            <p>{t('sections.venotonics_description')}</p>
            <h2 className="h2" id="spisok-literatury">{t('sections.literatura_title')}</h2>
            <ol className="literature">
              <li id="literature-0">{t('sections.literatura_item_0')}</li>
              <li id="literature-1">{t('sections.literatura_item_1')}</li>
              <li id="literature-2">{t('sections.literatura_item_2')}</li>
              <li id="literature-3">{t('sections.literatura_item_3')}</li>
              <li id="literature-4">{t('sections.literatura_item_4')}</li>
              <li id="literature-5">{t('sections.literatura_item_5')}</li>
              <li id="literature-6">{t('sections.literatura_item_6')}</li>
              <li id="literature-7">{t('sections.literatura_item_7')}</li>
              <li id="literature-8">{t('sections.literatura_item_8')}</li>
              <li id="literature-9">{t('sections.literatura_item_9')}</li>
              <li id="literature-10">{t('sections.literatura_item_10')}</li>
              <li id="literature-11">{t('sections.literatura_item_11')}</li>
              <li id="literature-12">{t('sections.literatura_item_12')}</li>
              <li id="literature-13">{t('sections.literatura_item_13')}</li>
              <li id="literature-14">{t('sections.literatura_item_14')}</li>
              <li id="literature-15">{t('sections.literatura_item_15')}</li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
};

export default MazKremPreparatyPriTroficheskihYazvah;
