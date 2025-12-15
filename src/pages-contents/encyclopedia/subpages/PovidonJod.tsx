'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function PovidonJod() {
  const [scrollTriggered, setScrollTriggered] = useState<Triggered>({
    40: false,
    80: false,
  });
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

    const handleScroll = () => {
      const shouldHideTitle = window.scrollY >= 1000;
      setNavTitleHidden(shouldHideTitle);

      if (shouldHideTitle) {
        setSecondaryNavOpened(false);
      }
    };

    const handleResize = () => {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    };

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('scroll', handleScroll);
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
                    <span property="name">Энциклопедия</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Повидон-йод</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Повидон-йод: свойства, показания и сферы применения
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/icon-230x224.webp"
                      alt="картинка у заголовка"
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Как раньше лечили раны?</h2>
                <div className="page-header-body">
                  <p>
                    На протяжении многих веков врачи широко использовали для заживления ран отвары
                    некоторых растений (ромашки, шиповника, полыни), примочки из вина, также в
                    раны засыпали серу, медный купорос.
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#otkrytie-yoda-i-povidon-yoda">Открытие повидон-йода</a>
                  </li>
                  <li>
                    <a href="#produkciya-na-osnove-povidon-yoda">Препараты</a>
                  </li>
                  <li>
                    <a href="#oblasti-primeneniya-betadin-povidon-yod">Области применения</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/polivinilpirrolidon-povidon-730x615.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/polivinilpirrolidon-povidon-730x615.webp"
                      alt="Поливинилпирролидон"
                      width={730}
                      height={615}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content ${navOpened ? 'nav-content__open' : ''}`}>
              <ul>
                <li>
                  <a href="#otkrytie-yoda-i-povidon-yoda">Открытие йода и повидон-йода</a>
                </li>
                <li>
                  <a href="#produkciya-na-osnove-povidon-yoda">Продукция на основе повидон-йода</a>
                </li>
                <li>
                  <a href="#oblasti-primeneniya-betadin-povidon-yod">
                    Области применения Бетадин® (повидон-йод)
                  </a>
                </li>
                <li>
                  <a href="#preimushchestva-povidon-yoda">Преимущества повидон-йода</a>
                </li>
                <li>
                  <a href="#mery-predostorozhnosti-i-protivopokazaniya">
                    Меры предосторожности и противопоказания
                  </a>
                </li>
                <li>
                  <a href="#spisok-literatury">Список литературы</a>
                </li>
              </ul>
              <div
                className="nav-content-title nav-content-title-cross"
                onClick={() => setNavOpened((prev) => !prev)}
              >
                Содержание
              </div>
            </nav>
          </div>
        </div>

        <nav
          className={`nav-content nav-content-fixed ${secondaryNavOpened ? 'nav-content__open' : ''} ${navTitleHidden ? '' : 'nav-content-title-hidden'}`}
        >
          <ul>
            <li>
              <a href="#otkrytie-yoda-i-povidon-yoda">Открытие йода и повидон-йода</a>
            </li>
            <li>
              <a href="#produkciya-na-osnove-povidon-yoda">Продукция на основе повидон-йода</a>
            </li>
            <li>
              <a href="#oblasti-primeneniya-betadin-povidon-yod">
                Области применения Бетадин® (повидон-йод)
              </a>
            </li>
            <li>
              <a href="#preimushchestva-povidon-yoda">Преимущества повидон-йода</a>
            </li>
            <li>
              <a href="#mery-predostorozhnosti-i-protivopokazaniya">
                Меры предосторожности и противопоказания
              </a>
            </li>
            <li>
              <a href="#spisok-literatury">Список литературы</a>
            </li>
          </ul>
          <div
            className="nav-content-title nav-content-title-cross"
            onClick={() => setSecondaryNavOpened((prev) => !prev)}
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
              Раньше народные методы были главной надеждой на выздоровление у пациентов с
              заразными кожными болезнями, ранами и травмами.
            </p>

            <p>
              Со временем был раскрыт секрет некоторых веществ и их способности препятствовать
              росту микроорганизмов или вызывать их гибель. Первые стали называть{' '}
              <strong>антисептиками</strong>, вторые –{' '}
              <strong>дезинфектантами или бактерицидными средствами.</strong>
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp"
                  type="image/webp"
                />
                <Image
                  src="/circle-503x505.webp"
                  alt="Декоративные элементы"
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="otkrytie-yoda-i-povidon-yoda">
              Открытие йода и повидон-йода
            </h2>

            <p>
              В 1811 году Бернард Куртуа открыл антисептические свойства йода, с тех пор раствор
              на его основе широко используется в медицине.
            </p>

            <p>
              В 50 гг. ХХ века в дополнение к нему пришло{' '}
              <strong>
                антисептическое средство нового поколения – повидон-йод. Повидон-йод
              </strong>
              , который стали считать безопасным элементом, ученые смогли уменьшить его
              токсичность и обеспечить комфортное использование без жжения.
            </p>

            <p>
              Учитывая то, что вещество обладает антисептическим, бактерицидным, дезинфицирующим,
              противовирусным действием, а также оно обладает эффектом против одноклеточных
              организмов
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              , повидон-йод быстро завоевал огромную популярность у пациентов и врачей.
            </p>

            <p>
              <strong>Как работает повидон-йод?</strong>
            </p>

            <p>
              Клетки каждого живого организма состоят из белков, микробные клетки не исключение.
              При контакте повидон-йода с белками (в составе ферментов или структурных белков)
              патогенных микроорганизмов образуются соединения (йодамины), в результате чего
              данные белки инактивируются или разрушаются, что приводит к гибели
              микроорганизмов. При этом не развивается устойчивость возбудителей к препарату
              <sup>
                <a href="#spisok-literatury">2, 3</a>
              </sup>
              . Благодаря наличию повидона йод высвобождается из препарата равномерно в течение
              длительного времени, что позволяет лучше воздействовать на опасные микроорганизмы.
            </p>

            <p>При этом важно помнить – препарат не вызывает жжения, так как не содержит спирт.</p>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                Про эффекты повидон-йода смотрите в коротком видео:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Видео о эффектах повидон-йода"
                ></iframe>
              </div>
              <div className="iframe_desc">
                Из видео вы узнаете, какими уникальными свойствами обладает повидон-йод, где его
                применяют и как используют.
              </div>
            </div>

            <h2 className="h2" id="produkciya-na-osnove-povidon-yoda">
              Продукция на основе повидон-йода
            </h2>

            <div className="list-base">
              <p>
                На основе повидон-йода были созданы различные формы лекарственных препаратов{' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>
                :
              </p>
              <ul>
                <li>10% раствор для наружного применения</li>
                <li>мазь 10%</li>
                <li>вагинальные свечи (суппозитории), 200 мг</li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-7-scaled-650x325.webp"
                type="image/webp"
              />
              <Image
                src="/mask-group-7-scaled-650x325.webp"
                alt="Продукция на основе повидон-йода"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Использование повидон-йода в медицинских учреждениях</h3>

            <p>
              Антисептики на основе повидон-йода широко используются в медицинских учреждениях. В
              поликлиниках и стационарах ими можно обрабатывать кожу, в том числе перед забором
              крови из вены или перед выполнением инъекции. Хирурги обеззараживают раствором кожу
              пациента перед операцией, обрабатывают как «чистые» операционные раны, так и с
              признаками воспаления. Часто повидон-йод включают в ежедневный уход для
              предотвращения и лечения гнойных осложнений после установки дренажей, катетеров и
              др. Благодаря вяжущему действию он способствует остановке кровотечения, а за счет
              снижения микробной нагрузки оказывает противовоспалительное действие
              <sup>
                <a href="#spisok-literatury">16</a>
              </sup>
              . Повидон-йод помогает увеличивать скорость заживления хронических{' '}
              <a href="/encyclopedia/troficheskie-yazvy-nog/">язв</a> нижних конечностей
              <sup>
                <a href="#spisok-literatury">17</a>
              </sup>
              .
            </p>

            <h3 className="h3">Повидон-йод в дерматологии</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    srcSet="/banner-betadin-927x916.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-927x916.webp"
                    alt="Бетадин"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                Многие кожные болезни сопровождаются зудом и связанными с ним расчёсами. Расчёсы
                являются входными воротами для присоединения патогенных микроорганизмов. Такие
                кожные болезни, как экзема, инверсный псориаз с локализациями на крупных складках,
                экссудативный псориаз и другие могут сопровождаться мокнутием (воспалением
                участков кожи с избыточно влажной поверхностью) и нарушением целостности кожи. Эти
                дерматозы находятся в зоне риска по присоединению вторичной инфекции как
                бактериальной, так и грибковой природы. В связи с этим врачи кроме терапии
                основного заболевания с профилактической и лечебной целью используют средства с{' '}
                <strong>антисептическим, противогрибковым</strong> и{' '}
                <strong>антибактериальным</strong> эффектами. Часто используют при этом{' '}
                <strong>повидон-йод</strong>.
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  Инструкция
                </a>
              </p>
            </div>

            <h3 className="h3">Повидон-йод в косметологии</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    srcSet="/banner-betadin-maz-927x916.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-maz-927x916.webp"
                    alt="Бетадин"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                В косметологии раствором повидон-йода обрабатывают кожу перед установкой
                лифтинговых и армирующих нитей, обрабатывают раны и рекомендуют в домашний уход
                кожи после удаления доброкачественных новообразований кожи.
              </p>

              <p>
                Повидон-йод в форме мази (
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>{' '}
                мазь, 10%) также используют при многих кожных проблемах: трофических язвах,
                пролежнях
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                . Имеются данные об эффекте воздействия на вирусы герпеса и папилломы человека
                <sup>
                  <a href="#spisok-literatury">19</a>
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
                  Инструкция
                </a>
              </p>
            </div>

            <h3 className="h3">Повидон-йод в гинекологии</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    srcSet="/svechi-553x512.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/svechi-553x512.webp"
                    alt="Бетадин"
                    width={553}
                    height={512}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                <strong>В амбулаторной гинекологии</strong> повидон-йод используют в качестве
                местного антисептика при прижигании эрозий, удалении полипов, установке
                внутриматочных спиралей.
              </p>

              <p>
                Акушеры-гинекологи используют вагинальные свечи (
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>{' '}
                свечи, 200 мг)
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>{' '}
                в лечении воспалительных заболеваний органов малого таза: урогенитальные инфекции
                грибковой природы, трихомониаз
                <sup>
                  <a href="#spisok-literatury">7</a>
                </sup>
                . Вагинальные свечи{' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>{' '}
                также назначают с профилактической целью перед плановыми диагностическими или
                лечебными вмешательствами в гинекологии.
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-svechi-instruktsiya/"
                >
                  Инструкция
                </a>
              </p>
            </div>

            <h2 className="h2" id="oblasti-primeneniya-betadin-povidon-yod">
              Области применения Бетадин® (повидон-йод)
            </h2>

            <div className="list-base">
              <ul>
                <li>
                  Для обработки ран и ссадин можно использовать 10% неразбавленный раствор{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>
                  .
                </li>
                <li>
                  На раневые и ожоговые поверхности, а также кожные покровы с признаками
                  инфицирования наносят раствор{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>{' '}
                  в разведении 1:10 или неразбавленный раствор
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>{' '}
                  на 1–2 секунды, затем состав необходимо смыть.
                </li>
                <li>
                  При кожных поражениях с присоединением инфекции можно использовать мазь{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>
                  , входящий в ее состав повидон-йод борется с бактериями, вирусами и грибами, а
                  макрогол «вытягивает» из раны загрязнения
                  <sup>
                    <a href="#spisok-literatury">20</a>
                  </sup>
                  . Средство наносят тонким слоем на кожу 2-3 раза в сутки
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>
                  .
                </li>
                <li>
                  Обработка кожи пациента для последующего оперативного вмешательства: на коже
                  выдерживают 3-5 секунд раствора повидон-йода, после чего антисептик необходимо
                  смыть стерильной водой. Для обеззараживания манипуляцию проводят два раза.
                </li>
                <li>
                  При стоматологических операциях раствор{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>{' '}
                  используется для дезинфекции полости рта
                  <sup>
                    <a href="#spisok-literatury">21</a>
                  </sup>
                  .
                </li>
                <li>
                  Обеззараживание кожи рук медицинского персонала: 10% раствор повидон-йода для
                  наружного применения распределяют ладонями в течение 5 минут, далее состав
                  смывают. Процедуру необходимо повторить 2 раза
                  <sup>
                    <a href="#spisok-literatury">14</a>
                  </sup>
                  .
                </li>
                <li>
                  При острых вагинитах (после подмывания) используют по 1 вагинальной свече
                  (суппозитории){' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>{' '}
                  200 мг. Вводят глубоко во влагалище 1 раза в сутки в течение 7 дней. При
                  хронических и подострых вагинитах – по 1 вагинальной свече (суппозитории) 1 раз
                  в сутки перед сном 14 дней подряд
                  <sup>
                    <a href="#spisok-literatury">9</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Раны у детей</strong>
                </p>
                <p>
                  Ввиду повышенной активности и любознательности дети нередко получают травмы. Как
                  правильно обработать ранку ребенку?
                </p>
                <a
                  href="/encyclopedia/rany-u-detej/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="/rany-u-detej-prevyu-246x166.webp, /rany-u-detej-prevyu-246x166.webp"
                  type="image/webp"
                />
                <Image
                  src="/rany-u-detej-prevyu-246x166.webp"
                  alt="Раны у детей-превью"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="preimushchestva-povidon-yoda">
              Преимущества повидон-йода
            </h2>

            <div className="list-base">
              <p>Повидон-йод применяется во многих областях медицины за счет:</p>
              <ul>
                <li>
                  <strong>Широкого спектра действия</strong> (активен в отношении грибов, вирусов,
                  простейших).
                </li>
                <li>
                  <strong>Воздействия на биопленки</strong> – опасной формы жизни некоторых
                  микроорганизмов, при которой многие лекарственные средства не оказывают эффекта
                  на болезнетворные микробы и бактерии.
                </li>
                <li>
                  Высокого профиля безопасности – при местном применении почти не происходит
                  реабсорбции йода.
                </li>
                <li>
                  <strong>Щадящего антисептического эффекта</strong> – не вызывает чувство жжения и
                  не препятствует образованию новой ткани.
                </li>
                <li>
                  <strong>Контролирования площади обработки</strong> – при использовании раствора на
                  коже образуется коричневый окрас, который вскоре исчезает. При желании средство{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>{' '}
                  легко смывается обычной водой с кожи.
                </li>
              </ul>
            </div>

            <h2 className="h2" id="mery-predostorozhnosti-i-protivopokazaniya">
              Меры предосторожности и противопоказания
            </h2>

            <div className="list-base">
              <ul>
                <li>
                  Необходимо избегать попадания средств с повидон-йодом в глаза. При возникновении
                  зуда или покраснения кожи использование данных антисептиков необходимо прекратить.
                </li>
                <li>
                  В случае наличия заболеваний щитовидной железы перед применением необходимо
                  проконсультироваться с врачом.
                </li>
                <li>
                  Не используют данную группу средств перед лечением с использованием
                  радиоактивного йода, при почечной недостаточности, герпетиформном дерматите
                  Дюринга (разновидность пузырного дерматоза). Также не рекомендовано использование
                  беременным женщинам (начиная с 3-го месяца), а также при кормлении грудью
                  <sup>
                    <a href="#spisok-literatury">9</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Мошкова Елена Михайловна</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Автор статьи</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-406x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/moshkova-novyj-406x406 (1).webp"
                  alt="Мошкова Елена Михайловна"
                  width={203}
                  height={203}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              Читать по теме
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/rany-s-infekcziej-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/rany-s-infekcziej-prevyu-246x166 (1).webp"
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
                      <strong>Раны с инфекцией</strong>
                    </p>
                    <p>
                      Далеко не все ссадины и порезы заживают быстро и без осложнений. Как лечить
                      инфицированные раны?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/rany-s-infekciej/">Подробнее</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/lechenie-troficheskih-yazv-prevyu-246x166.webp"
                        type="image/webp"
                      />
                      <Image
                        src="/lechenie-troficheskih-yazv-prevyu-246x166.webp"
                        alt="Лечение трофических язв-превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Лечение трофических язв</strong>
                    </p>
                    <p>
                      Трофические язвы — длительно незаживающие раны, возникающие из-за нарушения
                      питания тканей. Как и чем лечить такие образования?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/lechenie-troficheskih-yazv/">Подробнее</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/svechi-ot-vaginita-prevyu-246x166 (1).webp, /svechi-ot-vaginita-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/svechi-ot-vaginita-prevyu-246x166 (1).webp"
                        alt="Vaginit şamları - önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Свечи от вагинита</strong>
                    </p>
                    <p>
                      Лечение вагинита местными препаратами в форме вагинальных свечей. Как
                      выбрать свечи от воспаления во влагалище?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/svechi-ot-vaginita/">Подробнее</Link>
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
                Инструкция по применению ЛП Бетадин<sup>®</sup> (раствор, мазь), РУ П №015282/03,
                №015282/02.
              </li>
              <li id="literatura-1">
                Wade RG, Burr NE, McCauley G, Bourke G, Efthimiou O. The Comparative Efficacy of
                Chlorhexidine Gluconate and Povidone-iodine Antiseptics for the Prevention of
                Infection in Clean Surgery: A Systematic Review and Network Meta-analysis. Ann Surg.
                2021;274(6):e481-e488. doi:10.1097/SLA.0000000000004076.
              </li>
              <li id="literatura-2">
                Zellner P. R. and Bugyi S. Povidone–iodine in the treatment of burn patients. –
                //Journal of Hospital Infection, 1985, V. 6. – Р.139–140.
              </li>
              <li id="literatura-3">
                Гавриленко Ю.В. Эффективность использования раствора Бетадин<sup>®</sup> при
                местном лечении хронического тонзиллита у детей // Здоровья Украины, 2014.
              </li>
              <li id="literatura-4">
                Михальский В.В., Богданов А.Е., Жилина С.В., Привиденцев А.И, Аникин А.И., Ульянина
                А.А. Применение препарата Бетадин<sup>®</sup> в лечении инфицированных ран, РМЖ №29
                12/2010.
              </li>
              <li id="literatura-5">
                Богомазова И. М. , Белоусова В. С. , Максимов М. Л. «Эффективность использования
                препарата Бетадин<sup>®</sup> при бактериальном вагинозе»// РМЖ. Мать и дитя. №19
                от 09.09.2014.
              </li>
              <li id="literatura-6">
                Логутова Л.С., Гаспарян Н. Д., Будыкина Т. С., Дуб Н. В., Бабунашвили Е. Л.
                Применение Бетадин<sup>®</sup> для лечения бактериальной инфекции у женщин
                репродуктивного возраста. //Российский вестник акушера-гинеколога, № 6, 2005.
              </li>
              <li id="literatura-7">
                Осипов И.С., Леонов С.В. Использование антимикробного средства «Бетадин» в
                хирургической клинике. М: «Эгис»– 1990. – № 3. – С.7–10.
              </li>
              <li id="literatura-8">
                Бетадин<sup>®</sup> суппозитории. Инструкция по медицинскому применению (РН:
                П№015282/01).
              </li>
              <li id="literatura-9">
                Lachapelle J.-M., Castel O., Casado A. F., et al. Antiseptics in the era of
                bacterial resistance: a focus on povidone iodine. Clin Pract. 2013; 10(5): 579-592.
              </li>
              <li id="literatura-10">
                Lacey R. W., Catto A. Action of povi-done-iodine against methicillin-sensitive and
                -resistant cultures of Staphylococcus aureus. Postgrad Med J. 1993; 69 (Suppl 3):
                S78-S83.
              </li>
              <li id="literatura-11">
                Malone M., Bjarnsholt T., McBain A. J., et al. The prevalence of biofilms in chronic
                wounds: a systematic review and meta-analysis of published data. J Wound Care. 2017;
                26 (1): 20-25.
              </li>
              <li id="literatura-12">
                Кудыкин М. Н. Повидон-йод в основе лечения инфицированных ран. //РМЖ. 2013; 34:
                1755.
              </li>
              <li id="literatura-13">
                Родин А. В., Привольнев В. В., Савкин В. А. Применение повидон-йода для лечения и
                профилактики раневых инфекций в практике врача-хирурга. Амбулаторная хирургия.
                2017; 3-4 (67-68): 43-51.
              </li>
              <li id="literatura-14">
                Hoekstra M. J., Westgate S. J., Mueller S. Povidone-iodine ointment demonstrates in
                vitro efficacy against biofilm formation. Int Wound J. 2017; 14 (1): 172-179.
              </li>
              <li id="literatura-15">
                Kumar K. S., Reddy G.V., Naidu G., Pandiarajan R. Role of povidone iodine in
                periapical surgeries: Hemostyptic and anti-inflammatory. Ann Maxillofac Surg. 2011;
                1 (1): 107-111.
              </li>
              <li id="literatura-16">
                Pierard-Franchimont C., Paquet P., Arrese J. E., Pierard G.E. Healing rate and
                bacterial necrotizing vasculitis in venous leg ulcers. Dermatology. 1997; 194 (4):
                383-387.
              </li>
              <li id="literatura-17">
                Королева И.А., Кожухов А.А. Место повидон-йода в офтальмологической практике //
                РМЖ «Клиническая офтальмология». 2018;1:45–49.
              </li>
              <li id="literatura-18">
                Дубровина С.О., Красильникова Л.В., Ардинцева О.А. и др. Влияние повидон-йода на
                эрадикацию высокоонкогенных типов ВПЧ у женщин с поражением шейки матки. РМЖ. Мать
                и дитя. 2018;1(2):156-161. DOI: 10.32364/2618-8430-2018-1-2-156-161.
              </li>
              <li id="literatura-19">
                Блатун Л.А. Местное медикаментозное лечение ран. Хирургия. Журнал им. Н.И.
                Пирогова. 2011;(4):51 59.
              </li>
              <li id="literatura-20">
                R. Rahn Postgrad Med J, 1993; 69(Suppl.3): 4-9, Отделение хирургической стоматологии,
                университет г. Франкфурта, Германия.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
