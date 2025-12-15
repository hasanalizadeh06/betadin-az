'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ScrollGoals { [key: number]: () => void; }
interface Triggered { [key: number]: boolean; }

export default function ZudVIntimnojZone() {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

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

    const triggered: Triggered = { 40: false, 80: false };

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
    return () => { window.removeEventListener('scroll', checkScroll); };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 1000;
      setNavTitleHidden(scrolled);
      if (scrolled) {
        setSecondaryNavOpened(false);
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
                    <span property="name">Главная</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="/encyclopedia/">
                    <span property="name">Зуд в интимной зоне</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Зуд в интимной зоне</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Зуд в интимной зоне: причины, лечение, профилактика</h1>
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
                <h2 className="page-header-subtitle">Причины зуда в интимной зоне</h2>
                <div className="page-header-body">
                  <p>Зуд в интимной зоне – это всегда повод для обращения к врачу и выявления причины его появления.</p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#ginekologicheskie-zabolevaniya-svyazannye-s-zudom-v-oblasti-polovyh-organov">Заболевания, связанные с зудом</a>
                  </li>
                  <li>
                    <a href="#lechenie-zuda-v-intimnoy-zone">Лечение зуда в интимной зоне</a>
                  </li>
                  <li>
                    <a href="#profilaktika">Профилактика</a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1613/979987aa3b9fb78750752310a620b350379a81bd07b7afe95950047d5161bf3f-730x615/kartinka-banner-4-1-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1613/979987aa3b9fb78750752310a620b350379a81bd07b7afe95950047d5161bf3f-730x615/kartinka-banner-4-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="https://betadin.ru/wp-content/uploads/imagesv3/1613/979987aa3b9fb78750752310a620b350379a81bd07b7afe95950047d5161bf3f-730x615/kartinka-banner-4-1-730x615.jpg"
                      alt="Зуд в интимной зоне"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}`}>
              <ul>
                <li>
                  <a href="#ginekologicheskie-zabolevaniya-svyazannye-s-zudom-v-oblasti-polovyh-organov">Гинекологические заболевания, связанные с зудом в области половых органов</a>
                </li>
                <li>
                  <a href="#diagnostika-prichiny-poyavleniya-zuda-v-intimnoi-zone">Диагностика</a>
                </li>
                <li>
                  <a href="#lechenie-zuda-v-intimnoy-zone">Лечение зуда в интимной зоне</a>
                </li>
                <li>
                  <a href="#profilaktika">Профилактика</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Список литературы</a>
                </li>
              </ul>
              <div
                className="nav-content-title nav-content-title-cross"
                onClick={() => setNavOpened(!navOpened)}
              >
                Содержание
              </div>
            </nav>
          </div>
        </div>
        <nav
          className={`nav-content nav-content-fixed${navTitleHidden ? '' : ' nav-content-title-hidden'}${secondaryNavOpened ? ' nav-content__open' : ''}`}
        >
          <ul>
            <li>
              <a href="#ginekologicheskie-zabolevaniya-svyazannye-s-zudom-v-oblasti-polovyh-organov">Гинекологические заболевания, связанные с зудом в области половых органов</a>
            </li>
            <li>
              <a href="#diagnostika-prichiny-poyavleniya-zuda-v-intimnoi-zone">Диагностика</a>
            </li>
            <li>
              <a href="#lechenie-zuda-v-intimnoy-zone">Лечение зуда в интимной зоне</a>
            </li>
            <li>
              <a href="#profilaktika">Профилактика</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="#spisok-literatury">Список литературы</a>
            </li>
          </ul>
          <div
            className="nav-content-title nav-content-title-cross"
            onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}
          >
            Содержание
          </div>
        </nav>
        <div className="home-container">
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Зуд в интимной зоне не является самостоятельным заболеванием, это симптом, который может свидетельствовать о каком-то патологическом состоянии репродуктивной системы или организма в целом.
            </p>
            <div className="list-base">
              <p>
                <strong>Причины появления дискомфорта и зуда в интимной зоне у женщин можно разделить на 2 группы:</strong>
              </p>
              <ul>
                <li>Негинекологические причины появления зуда</li>
                <li>Гинекологические причины появления зуда в интимной зоне</li>
              </ul>
            </div>
            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  height={505}
                  width={503}
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg"
                  alt="Декоративные элементы"
                />
              </picture>
            </div>

            <h3 className="h3">Негинекологические причины</h3>
            <p>
              Причины негинекологического характера могут быть связаны с кожными заболеваниями наружных половых органов (например,{' '}
              <Link href="/encyclopedia/gerpes/" title="23. Герпес мазь">
                грибковые поражения
              </Link>
              , псориаз, экзема), аллергическими реакциями, системными заболеваниями в организме (например, гепатит), глистными инвазиями, неврологическими заболеваниями (неврозы), длительный стресс, а также рядом факторов образа жизни (например, ношение тесной синтетической одежды)
              <sup><a href="#spisok-literatury">1-5</a></sup>.
            </p>

            <h3 className="h3">Гинекологические причины</h3>
            <p>
              Наиболее часто зуд в области наружных половых органов вызывают различные заболевания, передающиеся половым путём. На первом месте по частоте встречаются инфекционно-воспалительные заболевания вульвы (вульвит) и влагалища (вагинит), нарушение нормальной микрофлоры влагалища и наружных половых органов, а также дисбаланс гормонов (как правило, недостаточное гормональное влияние на репродуктивные органы)
              <sup><a href="#spisok-literatury">1-5</a></sup>.
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1618/181dd6f937caef106b39e902f4466e1235b1637b38c620342524e05140ad6d69-650x0/medical-kit-and-bandaid-509398-488-1-32-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1618/181dd6f937caef106b39e902f4466e1235b1637b38c620342524e05140ad6d69-650x0/medical-kit-and-bandaid-509398-488-1-32-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/1618/181dd6f937caef106b39e902f4466e1235b1637b38c620342524e05140ad6d69-650x0/medical-kit-and-bandaid-509398-488-1-32-650x325.png"
                alt="Гинекологические причины зуда"
              />
            </picture>

            <h2 className="h2" id="ginekologicheskie-zabolevaniya-svyazannye-s-zudom-v-oblasti-polovyh-organov">
              Гинекологические заболевания, связанные с зудом в области половых органов
            </h2>
            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>Инфекционные заболевания</strong>
                  </p>
                  <ul>
                    <li>Инфекции, передаваемые половым путем (<strong>ИППП</strong>: трихомониаз, хламидиоз, генитальный герпес, гонорея)</li>
                    <li>Вульвовагинальный кандидоз (или «молочница)</li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Нарушение микрофлоры влагалища</strong>
                  </p>
                  <ul>
                    <li>
                      <Link href="/encyclopedia/bakterialnyj-vaginoz/">Бактериальный вагиноз</Link>
                    </li>
                    <li>Дисбактериоз и избыточный рост условно-патогенной флоры на фоне длительного приёма антибиотиков</li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Гормональный дисбаланс</strong>
                  </p>
                  <ul>
                    <li>
                      Недостаток влияния женских половых гормонов эстрогенов в менопаузе, при преждевременной недостаточности яичников, после хирургических операций на яичниках и матке, при отсутствии менструации на фоне чрезмерного увлечения диетами и спортом.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Фоновые гинекологические заболевания</strong>
                  </p>
                  <ul>
                    <li>Дистрофические и воспалительные заболевания вульвы</li>
                    <li>Кондиломы (папилломы)</li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Предраковые заболевания вульвы и влагалища</strong>
                  </p>
                  <ul>
                    <li>
                      Предраковое поражение вульвы диспластического характера, связанное с изменениями в клетках эпителия (интраэпителиальные неоплазии в области вульвы и влагалища
                      <sup><a href="#spisok-literatury">1-5</a></sup>)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="green">
              <p>
                Следует помнить, что зуд в интимной области редко является единственным проявлением болезни. Как правило, данный симптом сочетается с другими, более характерными для той или иной патологии. Например, <strong>при гипоэстрогении</strong> (недостатке эстрогенов) нередко появляются и другие признаки: приливы жара, потливость, нарушения сна, эмоциональные нарушения. При <strong>ИППП зуд</strong> сочетается с патологическими выделениями из влагалища (могут быть желтые или зеленые, с неприятным запахом). <strong>При вагинитах</strong> (воспалительных процессах во влагалище) появляются боль, отек и покраснение, <strong>при бактериальном вагинозе</strong> выделения имеют характерный «рыбный»{' '}
                <Link href="/encyclopedia/zapah-v-intimnoj-zone/">запах</Link>
                . <strong>Вульвовагинальный кандидоз (молочница)</strong> нередко сопровождается обильными или умеренными «творожистыми» выделениями из влагалища.
              </p>
            </div>

            <p>
              В последние годы нередко наблюдаются сочетания молочницы с другими воспалительными и невоспалительными заболеваниями влагалища, например с бактериальным вагинозом. При проведении лабораторной диагностики выявляются сразу несколько возбудителей патологического процесса
              <sup><a href="#spisok-literatury">7</a></sup>.
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Свечи от вагинита</strong>
                </p>
                <p>Лечение вагинита местными препаратами в форме вагинальных свечей. Как выбрать свечи от воспаления во влагалище?</p>
                <a href="/encyclopedia/svechi-ot-vaginita/" className="btn btn-green" target="_blank" rel="noreferrer">
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-310x210.png"
                  alt="Свечи от вагинита - превью"
                />
              </picture>
            </div>

            <h2 className="h2" id="diagnostika-prichiny-poyavleniya-zuda-v-intimnoi-zone">
              Диагностика причины появления зуда в интимной зоне
            </h2>
            <p>Чтобы правильно установить причину появления зуда в интимной зоне, врач на приеме оценивает все имеющиеся жалобы у пациента, проводит осмотр, назначает лабораторные тесты и другие виды обследования.</p>

            <div className="green">
              <p>Наиболее часто с жалобами на зуд в интимной зоне обращаются к гинекологу.</p>
            </div>

            <div className="list-base">
              <p>
                <strong>Обычный алгоритм диагностики при этом включает:</strong>
              </p>
              <ul>
                <li>
                  <strong>Гинекологический осмотр на кресле</strong>. Врач сможет оценить, имеются ли еще какие-либо проявления заболевания (отек, покраснение, патологические выделения, неприятный запах и прочие)
                </li>
                <li>
                  <strong>Забор мазков для лабораторного исследования</strong> (микроскопическое исследование, посев микроорганизмов из мазка на специальные среды для выявления вида возбудителя, его численности и реакцию на действие разных лекарств)
                </li>
                <li>
                  <strong>Кольпоскопия, вульвоскопия</strong> (осмотр влагалища, вульвы под увеличением с помощью специального инструмента — кольпоскопа)
                </li>
                <li>
                  <strong>Биопсия измененных участков вульвы и последующее гистологическое исследование биоптата</strong> для диагностики и подтверждения предраковых/раковых поражений
                </li>
                <li>
                  При необходимости назначаются: <strong>гормональное обследование, консультация смежных специалистов</strong>
                </li>
              </ul>
            </div>

            <h2 className="h2" id="lechenie-zuda-v-intimnoy-zone">
              Лечение зуда в интимной зоне
            </h2>
            <p>Схему и конкретные препараты для лечения заболеваний, при которых наблюдается зуд в интимной зоне, выбирают с учетом выявленной причины.</p>

            <div className="list-base">
              <p>
                <strong>Препараты, которые могут использоваться для избавления от зуда в области половых органов:</strong>
              </p>
              <ul>
                <li>
                  <strong>Антибактериальные препараты</strong> (назначают при ИППП). Как правило, такие препараты обладают широким спектром действия и направлены на уничтожение возбудителя инфекции.
                </li>
                <li>
                  <strong>Противогрибковые препараты</strong>. Данная группа лекарств обладает губительным действием в отношении различных видов грибов рода Candida — возбудителей молочницы.
                </li>
                <li>
                  <strong>Препараты для заместительной гормональной терапии</strong> (ЗГТ), содержащие аналог натуральных женских половых гормонов. Назначаются с целью замещения недостающего количества эстрогенов в женском организме. Применяются системно или местно во влагалище.
                </li>
                <li>
                  <strong>Препараты, содержащие полезные лактобактерии</strong>. Назначают при дисбактериозе во влагалище с целью увеличения количества представителей полезной флоры.
                </li>
                <li>
                  <strong>Местные антисептики</strong>. Препараты с широким спектром действия, которые назначают как при отдельных часто встречающихся заболеваниях, сопровождающихся зудом, так и при смешанных инфекциях.
                </li>
              </ul>
            </div>

            <h3 className="h3">Препараты Бетадин® в лечении заболеваний, сопровождающихся зудом в интимной области</h3>
            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/e367d1b34f2621dac4bba93779ac51d93fe1d94967f4d45ee45569d04cecb2a0-315x310/banner-betadin-svechi-mobile-315x235.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/e367d1b34f2621dac4bba93779ac51d93fe1d94967f4d45ee45569d04cecb2a0-315x310/banner-betadin-svechi-mobile-630x470.webp 2x"
                    type="image/webp"
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/e367d1b34f2621dac4bba93779ac51d93fe1d94967f4d45ee45569d04cecb2a0-315x310/banner-betadin-svechi-mobile-315x235.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/e367d1b34f2621dac4bba93779ac51d93fe1d94967f4d45ee45569d04cecb2a0-315x310/banner-betadin-svechi-mobile-630x470.jpg 2x"
                  />
                  <source
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-927x916.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-1853x1832.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    loading="lazy"
                    width={927}
                    height={916}
                    src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-927x916.jpg"
                    alt="Бетадин"
                  />
                </picture>
              </div>
              <p>
                Средства Бетадин<sup>®</sup> относятся к местным антисептическим препаратам. Выпускаются в виде вагинальных свечей,{' '}
                <Link href="/encyclopedia/jod-maz/">мази</Link> и раствора для наружного применения. Действующее вещество препаратов Бетадин<sup>®</sup> — <Link href="/encyclopedia/povidon-jod/">повидон-йод</Link>, из которого при нанесении/введении лекарства высвобождается активный <Link href="/encyclopedia/jod/">йод</Link>.
              </p>
              <p>
                Йод обладает широким спектром действия на грамм-положительные и грамм-отрицательные бактерии, вирусы, грибки и их споры, а также некоторые простейшие.
              </p>
              <p>
                Действие средств Бетадин<sup>®</sup> основано на разрушении структуры белков важных для жизни возбудителей и последующей гибели клеток микроорганизмов. В лабораторных исследованиях Бетадин<sup>®</sup> продемонстрировал антисептические свойства на большом количестве микроорганизмов менее чем через одну минуту
                <sup><a href="#spisok-literatury">8</a></sup>.
              </p>
              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-svechi-instruktsiya/">
                  Инструкция
                </a>
              </p>
            </div>

            <div className="green">
              <p>
                В исследовании зарубежных авторов среди 180 женщин, у которых диагностировали те или иные заболевания вульвы и влагалища (кандидоз, трихомониаз), вагинальные свечи с повидон-йодом существенно уменьшали симптомы зуда, жжения, покраснения слизистой влагалища и кожи наружных половых органов как при краткосрочном (5-7 дней после окончания лечения), так и при длительном наблюдении (спустя 3-4 недели после окончания лечения)
                <sup><a href="#spisok-literatury">9</a></sup>.
              </p>
            </div>

            <div className="list-base">
              <p>
                <strong>Свечи Бетадин<sup>®</sup> могут широко использоваться при зуде в интимной области. Их преимуществами можно считать:</strong>
              </p>
              <ul>
                <li>Способность купировать симптомы (за счет разрушающего воздействия на вредоносные микроорганизмы)</li>
                <li>Простоту и удобство применения</li>
                <li>Широкий спектр действия на большинство микроорганизмов, связанных с заболеваниями вульвы и влагалища</li>
                <li>
                  Способность создавать условия для восстановления и поддержания собственной микрофлоры влагалища женщины
                  <sup><a href="#spisok-literatury">10</a></sup>.
                </li>
              </ul>
            </div>

            <div className="list-base">
              <p>
                <strong>Основные ограничения применения Бетадин<sup>®</sup>:</strong>
              </p>
              <ul>
                <li>Беременность и период лактации</li>
                <li>Нарушения функции щитовидной железы</li>
                <li>Гиперчувствительность к компонентам препарата</li>
              </ul>
            </div>

            <div className="green">
              <p>
                При лечении вагинита или вульвовагинального кандидоза назначают Бетадин<sup>®</sup> свечи 200 мг – по 1 свече на ночь во влагалище в течение 7 дней.
              </p>
            </div>

            <h2 className="h2" id="profilaktika">
              Профилактика причин возникновения зуда
            </h2>
            <p>Поскольку существует множество причин гинекологического и негинекологического характера для появления зуда в интимной области, то рекомендуется обращаться к врачу и не заниматься самодиагностикой и самолечением.</p>

            <div className="list-base">
              <p>Для снижения риска развития заболеваний интимной сферы, сопровождающихся зудом, необходимо соблюдать профилактические мероприятия:</p>
              <ul>
                <li>Избегать случайных половых контактов, использовать барьерную контрацепцию (презерватив)</li>
                <li>Исключить бесконтрольный прием антибиотиков</li>
                <li>Соблюдать правила интимной гигиены</li>
                <li>Вести здоровый образ жизни</li>
                <li>Ежегодно проходить диспансерное наблюдение у специалистов, в том числе у гинеколога</li>
              </ul>
            </div>

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
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg"
                  alt="Декоративные элементы"
                />
              </picture>
            </div>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              Часто задаваемые вопросы
            </h2>

            <h3 className="h3">С чем может быть связан непостоянный зуд в интимной зоне во время и сразу после менструации?</h3>
            <p>
              Менструальная кровь является хорошей питательной средой для размножения бактерий, в том числе способных вызвать воспаление во влагалище. Во время и сразу после менструации может произойти сдвиг в балансе нормальной микрофлоры с активным размножением условно-патогенных микроорганизмов и развитием симптомов заболевания. В середине и во второй фазе цикла под действием эстрогенов и активного размножения лактобактерий рост условно-патогенных микробов может прекращаться. После этого симптомы, например зуд, исчезают.
            </p>

            <h3 className="h3">При появлении зуда в интимной области обязательно ли обследоваться половому партнеру?</h3>
            <p>
              Обследование и лечение полового партнера обязательно, если есть подозрение на инфекционный характер зуда в интимной зоне или уже установлена инфекционная причина его появления.
            </p>

            <h3 className="h3">Нужно ли соблюдать определенную диету при зуде во влагалище?</h3>
            <p>
              Какие-либо особенности питания не являются средством лечения зуда интимной зоны, однако изменение рациона питания могут способствовать облегчению симптомов за счёт положительного влияния на иммунитет.
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Молчанов Олег Леонидович</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Автор статьи</p>
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
                  src="https://betadin.ru/wp-content/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-235x203.png"
                  alt="Молчанов Олег Леонидович"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              Читать по теме
            </div>
            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
                <div className="swiper-slide swiper-slide-active" style={{ marginRight: '29px' }}>
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-0x166/bakterialnyj-vaginoz-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-0x166/bakterialnyj-vaginoz-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-0x166/bakterialnyj-vaginoz-prevyu-246x166.png"
                        alt="Бактериальный вагиноз - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Бактериальный вагиноз</strong>
                    </p>
                    <p>Почти в 90% случаев патологических выделений у женщин диагностируется бактериальный вагиноз. Почему возникает это заболевание, и как его лечить?</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/bakterialnyj-vaginoz/">Подробнее</a>
                    </p>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-next" style={{ marginRight: '29px' }}>
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-0x166/lechenie-vaginita-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-0x166/lechenie-vaginita-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-0x166/lechenie-vaginita-prevyu-246x166.png"
                        alt="Лечение вагинита - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Лечение вагинита</strong>
                    </p>
                    <p>Когда возникает вагинит — воспаление слизистой оболочки влагалища? Причины появления и лечение данного заболевания.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/vaginit/">Подробнее</a>
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ marginRight: '29px' }}>
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
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1943/0712bddef472146be1c64ae65c0c0d678ea5a1250eebd4f83c6cd8e96b5e38fb-0x166/zapah-v-intimnoj-zone-prevyu-246x166.png"
                        alt="Запах в интимной зоне - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Запах в интимной зоне</strong>
                    </p>
                    <p>Запахи из влагалища – норма и патология. Лечение заболеваний, сопровождающихся появлением неприятного запаха.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/zapah-v-intimnoj-zone/">Подробнее</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="h2" id="spisok-literatury">
              Список литературы
            </h2>
            <ol className="literature">
              <li id="literatura-0">
                Woelber L, Prieske K, Mendling W, Schmalfeldt B, Tietz HJ, Jaeger A. Vulvar pruritus-Causes, Diagnosis and Therapeutic Approach. Dtsch Arztebl Int. 2020 Feb 21;116(8):126-133. doi: 10.3238/arztebl.2020.0126.
              </li>
              <li id="literatura-1">
                Calleja-Agius J, Brincat MP. The urogenital system and the menopause. Climacteric. 2015;18 Suppl 1:18-22. doi: 10.3109/13697137.2015.1078206. PMID: 26366796.
              </li>
              <li id="literatura-2">
                Savas JA, Pichardo RO. Female Genital Itch. Dermatol Clin. 2018 Jul;36(3):225-243. doi: 10.1016/j.det.2018.02.006. Epub 2018 Apr 26. PMID: 29929595.
              </li>
              <li id="literatura-3">
                Kesić V, Vieira-Baptista P, Stockdale CK. Early Diagnostics of Vulvar Intraepithelial Neoplasia. Cancers (Basel). 2022;14(7):1822. Published 2022 Apr 4. doi:10.3390/cancers14071822
              </li>
              <li id="literatura-4">
                Raef HS, Elmariah SB. Vulvar Pruritus: A Review of Clinical Associations, Pathophysiology and Therapeutic Management. Front Med (Lausanne). 2021;8: 649402. Published 2021 Apr 7. doi:10.3389/fmed.2021.649402
              </li>
              <li id="literatura-5">
                Lambert J. Pruritus in female patients. Biomed Res Int. 2014;2014:541867. doi: 10.1155/2014/541867. Epub 2014 Mar 10. PMID: 24711996; PMCID: PMC3966341.
              </li>
              <li id="literatura-6">
                Клинические рекомендации по ведению больных урогенитальным кандидозом – 2020 //Российское общество дерматовенерологов и косметологов, Москва
              </li>
              <li id="literatura-7">
                Инструкции по применению Бетадин<sup>®</sup> суппозитории РН: П №015282/01.
              </li>
              <li id="literatura-8">
                Petersen EE, Weissenbacher ER, Hengst P, et al. Local treatment of vaginal infections of varying etiology with dequalinium chloride or povidone iodine. A randomised, double-blind, active-controlled, multicentric clinical study. Arzneimittelforschung. 2002;52(9):706-715. doi:10.1055/s-0031-1299955
              </li>
              <li id="literatura-9">
                Wewalka G, Stary A, Bosse B, Duerr HE, Reimer K. Efficacy of povidone-iodine vaginal suppositories in the treatment of bacterial vaginosis. Dermatology. 2002;204 Suppl 1:79-85. doi: 10.1159/000057731
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
