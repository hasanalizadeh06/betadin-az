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

export default function BakterialnyjVaginoz() {
  const t = useTranslations("Blogs.BakterialnyjVaginoz");
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
                      height={112}
                      width={115}
                      src="/icon-230x224.webp"
                      alt="картинка у заголовка"
                    />
                  </picture>
                </div>
                <div className="page-header-body">
                  <p>{t('intro.p1')}</p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#prichiny-vozniknoveniya-bakterialnogo-vaginoza">{t('header.anchors.prichiny')}</a>
                  </li>
                  <li>
                    <a href="#lechenie-bakterialnogo-vaginoza">{t('header.anchors.lechenie')}</a>
                  </li>
                  <li>
                    <a href="#profilakticheska-bakterialnogo-vaginoza">{t('header.anchors.profilaktika')}</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2151/32f34511e3fe099202439f509a3f68d34eca4cb1b7570b7e1a0891d26424bf62-730x615/bakterialnyj-vaginoz-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2151/32f34511e3fe099202439f509a3f68d34eca4cb1b7570b7e1a0891d26424bf62-730x615/bakterialnyj-vaginoz-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/images/encyclopedia/bakterialnyj-vaginoz-header.jpg"
                      alt="Бактериальный вагиноз"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
              <ul>
                <li>
                  <a href="#chto-takoe-bakterialnyy-vaginoz">{t('whatIs.title')}</a>
                </li>
                <li>
                  <a href="#prichiny-vozniknoveniya-bakterialnogo-vaginoza">{t('causes.title')}</a>
                </li>
                <li>
                  <a href="#simptomy-bakterialnogo-vaginoza">{t('symptoms.title')}</a>
                </li>
                <li>
                  <a href="#diagnostika-bakterialnogo-vaginoza">{t('diagnosis.title')}</a>
                </li>
                <li>
                  <a href="#oslozhneniya-bakterialnogo-vaginoza">{t('complications.title')}</a>
                </li>
                <li>
                  <a href="#lechenie-bakterialnogo-vaginoza">{t('treatment.title')}</a>
                </li>
                <li>
                  <a href="#profilakticheska-bakterialnogo-vaginoza">{t('prevention.title')}</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">{t('faq.title')}</a>
                </li>
                <li>
                  <a href="#literatura">{t('literature.title')}</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>{t('tableOfContents')}</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            <li>
              <a href="#chto-takoe-bakterialnyy-vaginoz">{t('whatIs.title')}</a>
            </li>
            <li>
              <a href="#prichiny-vozniknoveniya-bakterialnogo-vaginoza">{t('causes.title')}</a>
            </li>
            <li>
              <a href="#simptomy-bakterialnogo-vaginoza">{t('symptoms.title')}</a>
            </li>
            <li>
              <a href="#diagnostika-bakterialnogo-vaginoza">{t('diagnosis.title')}</a>
            </li>
            <li>
              <a href="#oslozhneniya-bakterialnogo-vaginoza">{t('complications.title')}</a>
            </li>
            <li>
              <a href="#lechenie-bakterialnogo-vaginoza">{t('treatment.title')}</a>
            </li>
            <li>
              <a href="#profilakticheska-bakterialnogo-vaginoza">{t('prevention.title')}</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">{t('faq.title')}</a>
            </li>
            <li>
              <a href="#literatura">{t('literature.title')}</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}>{t('tableOfContents')}</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">{t('disclaimer')}</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>{t('intro.p1')}</p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  height={505}
                  width={503}
                  src="/images/decorative/circle.jpg"
                  alt="Декоративные элементы"
                />
              </picture>
            </div>

            <div className="green">
              <p>
                <strong>{t('stats')} <sup><a href="#literatura-0">1</a></sup></strong>
              </p>
            </div>

            <h2 className="h2" id="chto-takoe-bakterialnyy-vaginoz">{t('whatIs.title')}</h2>
            <p>
              {t('whatIs.p1')} <sup><a href="#literatura-0">1,2</a></sup>.
            </p>

            <div className="green">
              <p>{t('whatIs.icd')}</p>
            </div>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1142/66dc00513d3b33088b9729211dbf88ea0e5a0512a5203791ea1de45f34ca286d-650x0/istockphoto-1341663000-2048x2048-2-2-1-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1142/66dc00513d3b33088b9729211dbf88ea0e5a0512a5203791ea1de45f34ca286d-650x0/istockphoto-1341663000-2048x2048-2-2-1-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/bacterial-vaginosis.png"
                alt="бактериальный вагиноз"
              />
            </picture>

            <h3 className="h3" id="normalnaya-mikroflora-vlagalishcha">{t('normalMicroflora.title')}</h3>
            <p>{t('normalMicroflora.p1')}</p>

            <p>
              {t('normalMicroflora.p2')}
              <sup>
                <a href="#literatura-1">2,3</a>
              </sup>
            </p>

            <h2 className="h2" id="prichiny-vozniknoveniya-bakterialnogo-vaginoza">{t('causes.title')}</h2>
            <p>{t('causes.p1')}</p>

            <p>
              {t('causes.p2')}
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
            </p>

            <div className="green">
              <p>{t('causes.biofilms')}</p>
            </div>

            <h2 className="h2" id="simptomy-bakterialnogo-vaginoza">{t('symptoms.title')}</h2>
            <p>{t('symptoms.p1')}</p>

            <div className="list-base">
              <p>{t('symptoms.listIntro')}</p>
              <ul>
                {t.raw('symptoms.list').map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t('block.itchTitle')}</strong>
                </p>
                <p>{t('block.itchDesc')}</p>
                <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/" className="btn btn-green" target="_blank" rel="noreferrer">
                  {t('block.more')}
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1938/1624f25edba39d1d283c2a4b74ce9420e366b5350ca2cf4012f5ba213939d029-310x235/zud-v-intimnoj-zone-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1938/1624f25edba39d1d283c2a4b74ce9420e366b5350ca2cf4012f5ba213939d029-310x235/zud-v-intimnoj-zone-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="/images/encyclopedia/zud-v-intimnoj-zone.png"
                  alt="Зуд в интимной зоне - превью"
                />
              </picture>
            </div>

            <h2 className="h2" id="diagnostika-bakterialnogo-vaginoza">{t('diagnosis.title')}</h2>
            <p>{t('diagnosis.intro')}</p>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>{t.raw('diagnosis.criteria')[0]}</strong>
                  </p>
                  <p>
                    {t.raw('diagnosis.details')[0]}
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>{t.raw('diagnosis.criteria')[1]}</strong>
                  </p>
                  <p>
                    {t.raw('diagnosis.details')[1]}
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>{t.raw('diagnosis.criteria')[2]}</strong>
                  </p>
                  <p>
                    {t.raw('diagnosis.details')[2]}
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>{t.raw('diagnosis.criteria')[3]}</strong>
                  </p>
                  <p>
                    {t.raw('diagnosis.details')[3]}
                    <sup>
                      <a href="#literatura-0">1,5</a>
                    </sup>
                  </p>
                </div>
              </div>
            </div>

            <p>{t('diagnosis.pcr')}</p>

            <h2 className="h2" id="oslozhneniya-bakterialnogo-vaginoza">{t('complications.title')}</h2>
            <p>{t('complications.p1')}</p>

            <p>
              {t('complications.p2')}
              <sup>
                <a href="#literatura-0">1,6</a>
              </sup>
            </p>

            <div className="green">
              <p>
                <strong>{t('complications.warning1')}</strong>
              </p>
              <p>{t('complications.warning2')}</p>
            </div>

            <h2 className="h2" id="lechenie-bakterialnogo-vaginoza">{t('treatment.title')}</h2>
            <p>{t('treatment.p1')}</p>
            <p>{t('treatment.p2')}</p>

            <h2 className="h2" id="profilakticheska-bakterialnogo-vaginoza">{t('prevention.title')}</h2>
            <div className="list-base">
              <p>{t('prevention.intro')}</p>
              <ul>
                {t.raw('prevention.items').map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <p>{t('prevention.p2')}</p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={542}
                  width={558}
                  src="/images/decorative/question.jpg"
                  alt="Декоративные элементы"
                />
              </picture>
            </div>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">{t('faq.title')}</h2>

            <h3 className="h3" id="kak-mozhno-lechit-bakterialnyy-vaginoz-vo-vremya-beremennosti">{t('faq.q1')}</h3>
            <p>{t('faq.a1')}</p>

            <h3 className="h3" id="cherez-kakoe-vremya-posle-lecheniya-proizvodyatsya-kontrolnye-issledovaniya-chtoby-podtverdit-izlechenie">{t('faq.q2')}</h3>
            <p>{t('faq.a2')}</p>

            <h3 className="h3" id="vliyaet-li-vnutrimatochnaya-spiral-na-razvitie-bakterialnogo-vaginoza">{t('faq.q3') || 'Влияет ли внутриматочная спираль на развитие бактериального вагиноза?'}</h3>
            <p>{t('faq.a3') || 'Согласно мнению специалистов, длительное присутствие в матке инородного тела, которым является внутриматочная спираль, может быть связано с различными нарушениями микрофлоры влагалища, в том числе с развитием бактериального вагиноза.'}</p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t('author.name')}</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">{t('author.role')}</p>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-235x203.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-470x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={203}
                  width={235}
                  src="/images/authors/molchanov.png"
                  alt="Молчанов Олег Леонидович"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              {t('readMore')}
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1943/0712bddef472146be1c64ae65c0c0d678ea5a1250eebd4f83c6cd8e96b5e38fb-0x166/zapah-v-intimnoj-zone-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1943/0712bddef472146be1c64ae65c0c0d678ea5a1250eebd4f83c6cd8e96b5e38fb-0x166/zapah-v-intimnoj-zone-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/zapah-v-intimnoj-zone-preview.png"
                        alt="Запах в интимной зоне - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t.raw('relatedSlides')[0].title}</strong>
                    </p>
                    <p>{t.raw('relatedSlides')[0].description}</p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/zapah-v-intimnoj-zone/">{t.raw('relatedSlides')[0].more}</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide swiper-slide-next">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1938/1624f25edba39d1d283c2a4b74ce9420e366b5350ca2cf4012f5ba213939d029-0x166/zud-v-intimnoj-zone-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1938/1624f25edba39d1d283c2a4b74ce9420e366b5350ca2cf4012f5ba213939d029-0x166/zud-v-intimnoj-zone-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/zud-v-intimnoj-zone-preview.png"
                        alt="Зуд в интимной зоне - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t.raw('relatedSlides')[1].title}</strong>
                    </p>
                    <p>{t.raw('relatedSlides')[1].description}</p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/">{t.raw('relatedSlides')[1].more}</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1941/b65c09d755556c83e2539368eb43285e6bab6fe7479e0cebc3797bb4ba62c6e7-0x166/zhzhenie-vo-vlagalishhe-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1941/b65c09d755556c83e2539368eb43285e6bab6fe7479e0cebc3797bb4ba62c6e7-0x166/zhzhenie-vo-vlagalishhe-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/zhzhenie-vo-vlagalishche-preview.png"
                        alt="Жжение во влагалище - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t.raw('relatedSlides')[2].title}</strong>
                    </p>
                    <p>{t.raw('relatedSlides')[2].description}</p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/zhzhenie-vo-vlagalishche/">{t.raw('relatedSlides')[2].more}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="h2" id="literatura">{t('literature.title')}</h2>
            <ol className="literature">
              <li id="literatura-0">
                Клинические рекомендации по ведению больных бактериальным вагинозом// Российское дерматовенерологов и косметологов, Москва – 2021.
              </li>
              <li id="literatura-1">
                Bagnall P, Rizzolo D. Bacterial vaginosis: A practical review. JAAPA. 2017 Dec;30(12):15-21. doi: 10.1097/01.JAA.0000526770.60197.fa. PMID: 29135564.
              </li>
              <li id="literatura-2">
                Onderdonk AB, Delaney ML, Fichorova RN. The Human Microbiome during Bacterial Vaginosis. Clin Microbiol Rev. 2016; 29(2):223-238. doi:10.1128/CMR.00075-15.
              </li>
              <li id="literatura-3">
                Reiter S, Kellogg Spadt S. Bacterial vaginosis: a primer for clinicians. Postgrad Med. 2019 Jan;131(1):8-18. doi:10.1080/00325481.2019.1546534. Epub 2018 Nov 30 PMID: 30424704.
              </li>
              <li id="literatura-4">
                Хрянин А .А., Кнорринг Г. Ю. Современные представления о бактериальном вагинозе// Гинекология. 2021; 23 (1):37–42. DOI: 10.26442/20795696.2021.1.200680.
              </li>
              <li id="literatura-5">
                Gillet E, Meys JF, Verstraelen H, et al. Association between bacterial vaginosis and cervical intraepithelial neoplasia: systematic review and meta-analysis. PLoS One. 2012;7(10):e45201. doi:10.1371/journal.pone.0045201.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
