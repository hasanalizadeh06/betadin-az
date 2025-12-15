'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function RastvorJoda() {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);
  const [scrollTriggered, setScrollTriggered] = useState<Triggered>({
    40: false,
    80: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) {
        setNavTitleHidden(true);
        setSecondaryNavOpened(false);
      } else {
        setNavTitleHidden(false);
      }
    };

    const handleResize = () => {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                  <span property="name">Раствор йода</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Раствор йода: свойства, показания, способы применения
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
                <h2 className="page-header-subtitle">Что из себя представляет раствор йода</h2>
                <div className="page-header-body">
                  <p>
                    Йодсодержащие антисептики для местного применения, несмотря на то что их объединяет
                    общее составляющее – йод, состоят из различных его форм. Например, смеси элементарного
                    йода, йодида калия, воды, спирта или глицерина.
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#ispolzovanie-preparatov-betadin-na-osnove-povidon-yoda">Применение</a>
                  </li>
                  <li>
                    <a href="#preimushchestva-povidon-yoda-pered-spirtovym-rastvorom-yoda">Повидон-йод</a>
                  </li>
                  <li>
                    <a href="#rastvor-betadin-">Раствор Бетадин®</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-2-1-730x615.webp, /kartinka-banner-2-1-730x615.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-2-1-730x615.webp"
                      alt="Раствор йода"
                      width={730}
                      height={615}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}${navTitleHidden ? ' nav-content-title-hidden' : ''}`}>
              <ul>
                <li>
                  <a href="#yodnye-rastvory-pokazaniya-k-primeneniyu">
                    Йодные растворы: показания к применению
                  </a>
                </li>
                <li>
                  <a href="#osobye-ukazaniya-pri-obrabotke-rastvorami-yoda">
                    Особые указания при обработке растворами йода
                  </a>
                </li>
                <li>
                  <a href="#preimushchestva-povidon-yoda-pered-spirtovym-rastvorom-yoda">
                    Преимущества повидон-йода перед спиртовым раствором йода
                  </a>
                </li>
                <li>
                  <a href="#ispolzovanie-preparatov-betadin-na-osnove-povidon-yoda">
                    Использование препаратов Бетадин® на основе повидон-йода
                  </a>
                </li>
                <li>
                  <a href="#mery-predostorozhnosti-pri-ispolzovanii-sredstv-na-osnove-povidon-yoda">
                    Меры предосторожности, при использовании средств на основе повидон-йода
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Список литературы</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened((prev) => !prev)}>Содержание</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${secondaryNavOpened ? ' nav-content__open' : ''}${navTitleHidden ? '' : ' nav-content-title-hidden'}`}>
          <ul>
            <li>
              <a href="#yodnye-rastvory-pokazaniya-k-primeneniyu">
                Йодные растворы: показания к применению
              </a>
            </li>
            <li>
              <a href="#osobye-ukazaniya-pri-obrabotke-rastvorami-yoda">
                Особые указания при обработке растворами йода
              </a>
            </li>
            <li>
              <a href="#preimushchestva-povidon-yoda-pered-spirtovym-rastvorom-yoda">
                Преимущества повидон-йода перед спиртовым раствором йода
              </a>
            </li>
            <li>
              <a href="#ispolzovanie-preparatov-betadin-na-osnove-povidon-yoda">
                Использование препаратов Бетадин® на основе повидон-йода
              </a>
            </li>
            <li>
              <a href="#mery-predostorozhnosti-pri-ispolzovanii-sredstv-na-osnove-povidon-yoda">
                Меры предосторожности, при использовании средств на основе повидон-йода
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="#spisok-literatury">Список литературы</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened((prev) => !prev)}>Содержание</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Основное активное вещество в составе этих растворов – молекулярный{' '}
              <a href="/encyclopedia/jod/" title="Йод">
                йод
              </a>
              , губительный для грамположительных и грамотрицательных бактерий, возбудителей грибковой
              инфекции
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Из-за этого растворы йода широко используются как обеззараживающие средства для обработки и
              лечения кожи и слизистых оболочек. Кроме того, йод оказывает местнораздражающее воздействие на
              ткани, благодаря которому усиливается микроциркуляция в травмированных тканях. Вследствие чего
              уменьшается отёк, рассасываются воспалительные элементы и уменьшаются синяки.
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
              Йодид калия – вспомогательный компонент, способствующий растворению йода в воде и глицерине
              <sup>4</sup>.
            </p>

            <h2 className="h2" id="yodnye-rastvory-pokazaniya-k-primeneniyu">
              Йодные растворы: показания к применению
            </h2>

            <h3 className="h3">Дезинфекция</h3>

            <p>
              Для обработки ссадин и порезов чаще всего используют <strong>спиртовой раствор</strong> с
              концентрацией йода 5%. Спиртовая основа средства нивелирует раздражающий эффект молекулярного
              йода и замедляет его выведение
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Спиртосодержащий раствор йода используют в лечении воспалительных элементов, им обрабатывают
              кожу перед инвазивными манипуляциями: инъекциями, пункциями и установкой катетеров
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Крупные раны обрабатывают только по краю из-за риска развития йодизма (избыток йода в организме,
              при котором возможны такие реакции, как отёк Квинке, слёзо- и слюнотечение, возникновение
              акнеформной сыпи)
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . К тому же спиртовой раствор йода может вызвать дерматит и ожог кожи
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h3 className="h3">Проба Бальцера</h3>

            <p>
              В дерматологии для подтверждения диагноза отрубевидного лишая при помощи спиртового раствора йода
              выполняют <strong>пробу Бальцера</strong>
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Участки кожи с характерными высыпаниями смазывают спиртовым раствором йода, если роговой слой
              кожи разрыхлен вследствие присутствия дрожжеподобного гриба Malassezia furfur, пятна
              окрашиваются в тёмно-коричневый цвет.
            </p>

            <h3 className="h3">Проба Минора</h3>

            <p>
              Перед коррекцией гипергидроза (повышенного потоотделения) кожи подмышечных впадин и ладоней
              проводят йодокрахмальную пробу Минора
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              . Предварительно высушенную проблемную зону обрабатывают 5% спиртовым раствором йода, затем
              припудривают крахмалом, при выделении капель пота появляется синее окрашивание, характеризующее
              гипергидроз.
            </p>

            <h2 className="h2" id="osobye-ukazaniya-pri-obrabotke-rastvorami-yoda">
              Особые указания при обработке растворами йода
            </h2>

            <p>
              Антисептики, содержащие йод, снижают свою обеззараживающую способность в присутствии примеси
              гноя, крови и жира, это необходимо учитывать при обработке раневых поверхностей. Одновременное
              использование с другими (кислотными или щелочными) антисептиками также снижает эффективность
              обработки кожи. Данные средства полностью несовместимы с аммиаком, эфирными эссенциями,
              ферментативными препаратами
              <sup>
                <a href="#spisok-literatury">1, 4</a>
              </sup>
              . Спиртовой раствор йода и водный раствор Люголя с осторожностью применяют у детей
              <sup>
                <a href="#spisok-literatury">1, 4</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="preimushchestva-povidon-yoda-pered-spirtovym-rastvorom-yoda">
              Преимущества повидон-йода перед спиртовым раствором йода
            </h2>

            <p>
              С середины ХХ века в медицине активно используют в качестве антисептического средства –{' '}
              <a href="/encyclopedia/povidon-jod/" title="Повидон йод">
                повидон-йод
              </a>
              .
            </p>

            <p>
              Молекулу йода присоединили к безопасной молекуле полимера-
              <a href="/encyclopedia/polivinilpirrolidon/" title="Поливинилпирролидон (повидон)">
                повидона
              </a>
              , который выполняет роль его носителя. Это позволило сохранить высокие антисептические качества
              йода, уменьшить всасывание йода в кровоток. При взаимодействии с кожей комплекса повидон-йода
              происходит постепенное высвобождение молекул активного йода, которые вызывают гибель большинства
              бактерий, возбудителей грибковой инфекции, одноклеточных простейших микроорганизмов и вирусов
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>

            <div className="list-base">
              <p>
                <strong>Обработка раствором повидон-йода (даже свежих ран):</strong>
              </p>
              <ul>
                <li>не вызывает жжения</li>
                <li>не обжигает кожу и раневую поверхность</li>
                <li>не оставляет стойкого окрашивания</li>
                <li>при необходимости легко смывается водой</li>
                <li>
                  учитывая, что при местном использовании всасывание йода в организм минимально, развитие
                  йодизма маловероятно
                </li>
                <li>разрешено к использованию даже у маленьких детей (с месяца жизни)</li>
              </ul>
            </div>

            <div className="list-base">
              <p>
                <strong>
                  Раствором повидон-йода
                  <sup>
                    <a href="#spisok-literatury">5</a>
                  </sup>
                  :
                </strong>
              </p>
              <ul>
                <li>лечат и обеззараживают раневые поверхности в хирургии, стоматологии, травматологии</li>
                <li>обрабатывают ожоговые раны, пролежни, язвы</li>
                <li>в дерматологии лечат бактериальные, грибковые и вирусные инфекций кожи</li>
                <li>дезинфицируют полость рта при стоматологических вмешательствах</li>
                <li>обрабатывают кожу перед оперативным вмешательством, выполнением инъекций, пункций и т.д.</li>
                <li>
                  проводят санацию родовых путей, а также широко применяют в гинекологии при проведении «малых»
                  операций (установке внутриматочных спиралей, абортов)
                </li>
              </ul>
            </div>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                Про действие раствора повидон-йода смотрите в коротком видео:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Видео про действие раствора повидон-йода"
                ></iframe>
              </div>
              <div className="iframe_desc">
                Из видео вы узнаете, для чего можно применять повидон-йод, как он воздействует на микробы и какими
                преимуществами обладает.
              </div>
            </div>

            <h2 className="h2" id="ispolzovanie-preparatov-betadin-na-osnove-povidon-yoda">
              Использование препаратов Бетадин® на основе повидон-йода
            </h2>

            <div className="list-base">
              <p>
                <strong>
                  На основе повидон-йода создана линейка препаратов{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>
                  :
                </strong>
              </p>
              <ul>
                <li>10% раствор для наружного применения</li>
                <li>мазь 10%</li>
                <li>вагинальные свечи (суппозитории), 200 мг</li>
              </ul>
            </div>

            <h3 className="h3" id="rastvor-betadin-">
              Раствор Бетадин®
            </h3>

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
                <strong>
                  Для лечения и обеззараживания ссадин, ран, язв, ожогов, инфицированных кожных покровов и
                  слизистых
                </strong>{' '}
                оболочек рекомендован неразбавленный раствор{' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>
                . Средством смазывают раневую поверхность 2 раза в день или используют в качестве влажного
                компресса. Курс лечения подбирается индивидуально
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                .
              </p>

              <p>
                <strong>Для использования в дренажных системах</strong> 10% раствор повидон-йода (
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>
                ) разбавляют от 10-100 раз.
              </p>

              <p>
                <strong>С целью обработки кожи пациента перед инвазивной манипуляцией</strong>
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>{' '}
                неразбавленный 10% раствор повидон-йода (
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>
                ) распределяют по коже в течение 5 минут, далее состав смывают. Процедуру необходимо повторить
                дважды.
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

            <h3 className="h3">Мазь Бетадин®</h3>

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
                <strong>
                  Мазь{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>
                </strong>{' '}
                10% на основе повидон-йода используют на разных стадиях раневого процесса (в стадию воспаления и
                фазу заживления) для обеззараживания и улучшения оттока гноя от раны
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
                . Повидон-йод приводит к гибели различных болезнетворных микроорганизмов, а макрогол, входящий в
                состав мази, помогает очистить рану от гноя
                <sup>
                  <a href="#spisok-literatury">10</a>
                </sup>
                .{' '}
                <strong>
                  Мазь{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>
                </strong>{' '}
                аккуратно распределяют по гнойной ране <strong>(не втирают)</strong> 2-3 раза в день и выполняют
                перевязку
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                .
              </p>

              <p>
                При лечении инфицированных ран под салфетками, пропитанными раствором или{' '}
                <strong>
                  мазью{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>
                </strong>
                , в течение первых 5-7 суток уменьшался отёк и количество гнойного отделяемого, отмечалось
                уменьшение боли
                <sup>
                  <a href="#spisok-literatury">6</a>
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

            <h3 className="h3">Вагинальные свечи Бетадин®</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/banner-betadin-svechi-mobile-315x235.webp 1x, /banner-betadin-svechi-mobile-630x470.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/banner-betadin-svechi-927x916.webp 1x, /banner-betadin-svechi-1853x1832.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-svechi-1853x1832.webp"
                    alt="Бетадин"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                Повидон-йод в составе вагинальных свечей используется при лечении острого и хронического{' '}
                <a href="/encyclopedia/svechi-ot-vaginita/">вагинитов</a>, кандидоза («молочницы»), трихомониаза
                <sup>
                  <a href="#spisok-literatury">6</a>
                </sup>
                .
              </p>

              <p>
                <strong>При острых вагинитах</strong> после подмывания используют по одной вагинальной свече
                (суппозитории){' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>{' '}
                200 мг – 1 раза в сутки в течение 7 дней.
              </p>

              <p>
                <strong>При хронических и подострых вагинитах</strong> – по 1 вагинальной свече (суппозитории){' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>{' '}
                200 мг 1 раз в сутки перед сном 14 дней подряд.
              </p>

              <p>
                <strong>С профилактической целью</strong> для предоперационной подготовки в гинекологии – препарат
                вводят во влагалище 2 раза в сутки (утром и вечером перед сном) в течение 1-7 дней.
              </p>

              <p>
                Использование вагинальных суппозиториев{' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>{' '}
                возможно во время менструации
                <sup>
                  <a href="#spisok-literatury">6, 8</a>
                </sup>
                .
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

            <h2 className="h2" id="mery-predostorozhnosti-pri-ispolzovanii-sredstv-na-osnove-povidon-yoda">
              Меры предосторожности при использовании средств на основе повидон-йода
            </h2>

            <p>
              Необходимо избегать попадания средств с повидон-йодом в глаза! <br />
              При возникновении зуда или покраснения кожи использование данных антисептиков необходимо
              прекратить.
            </p>

            <p>
              Учитывая, что это йодсодержащий препарат, при наличии заболеваний щитовидной железы рекомендовано
              перед использованием посоветоваться <br />
              с врачом.
            </p>

            <p>
              Не рекомендовано использование повидон-йода перед лечением радиоактивным йодом, при почечной
              недостаточности, герпетиформном дерматите Дюринга (разновидность пузырного дерматоза). Не назначают
              беременным женщинам (начиная с 3-го месяца), а также при кормлении грудью
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              . Девушкам, не достигшим подросткового возраста, применение вагинальных суппозиторий{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Бетадин<sup>®</sup>
              </mark>{' '}
              противопоказано
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              .
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Повидон йод</strong>
                </p>
                <p>
                  Характеристики и свойства повидон-йода. Для чего применяется повидон-йод? Инструкция по
                  применению раствора, мази, свечей Бетадин<sup>®</sup> с повидон-йодом.
                </p>
                <a
                  href="/encyclopedia/povidon-jod/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="/povidon-jod-prevyu-620x420.webp"
                  type="image/webp"
                />
                <Image
                  src="/povidon-jod-prevyu-620x420.webp"
                  alt="Повидон-йод - превью"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-1115x1084.webp"
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
              Часто задаваемые вопросы
            </h2>

            <h3 className="h3">С какого возраста можно использовать раствор Бетадин®?</h3>

            <p>
              Раствор{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Бетадин<sup>®</sup>
              </mark>{' '}
              разрешен к использованию у взрослых и детей с первого месяца жизни
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>

            <h3 className="h3">
              Возможно ли совместное использование 10% раствора Бетадин® со спиртовым раствором йода, зелёнки,
              фукорцина?
            </h3>

            <p>
              10% раствор{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Бетадин<sup>®</sup>
              </mark>{' '}
              несовместим с другими дезинфицирующими <br />
              и антисептическими средствами, особенно содержащими щелочи, ферменты <br />и ртуть. С
              обеззараживающей и лечебной целью вместо комбинации средств можно использовать раствор{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Бетадин<sup>®</sup>
              </mark>
              . Препарат активен в отношении большинства бактерий и простейших одноклеточных организмов,
              возбудителей грибковой инфекции, вирусов
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              . Используется для лечения ран в период воспаления и формирования новых покровных тканей, не
              вызывает жжения.
            </p>

            <h3 className="h3">Как долго можно использовать средства на основе повидон-йода?</h3>

            <p>
              Длительность использования препаратов на основе повидон-йода определяется инструкцией к
              лекарственному средству или по решению врача. Однако, если после начала лечения наблюдается
              ухудшение, появилось жжение и зуд, терапию повидон-йодом необходимо прекратить и обратиться к своему
              лечащему врачу.
            </p>

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
                        srcSet="/polivinilpirrolidon-povidon-prevyu-246x166.webp"
                        type="image/webp"
                      />
                      <Image
                        src="/polivinilpirrolidon-povidon-prevyu-246x166.webp"
                        alt="Поливинилпирролидон (повидон) - превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Поливинилпирро­лидон (повидон)</strong>
                    </p>
                    <p>Поливинилпирролидон (повидон): применение, использование в комплексе повидон-йод.</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/polivinilpirrolidon/">Подробнее</Link>
                    </p>
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
                        alt="Повидон-йод - превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Повидон йод</strong>
                    </p>
                    <p>
                      Характеристики и свойства повидон-йода. Для чего применяется повидон-йод? Инструкция по
                      применению раствора, мази, свечей Бетадин<sup>®</sup> с повидон-йодом.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/povidon-jod/">Подробнее</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp"
                        type="image/webp"
                      />
                      <Image
                        src="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp"
                        alt="Мазь для заживления ран- превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Мазь для заживления ран</strong>
                    </p>
                    <p>Какие бывают заживляющие мази, и как выбрать самую эффективную.</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/maz-dlya-zazhivleniya-ran/">Подробнее</Link>
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
                Инструкция по медицинскому применению ЛП раствор йода спиртовой 5%, РЛС.
              </li>
              <li id="literatura-1">
                Бутов Ю.С., Скрипкин Ю.К. Иванов О.Л. Национальное руководство по дерматовенерологии //
                ГЭОТАР- Медиа 2017, Москва.
              </li>
              <li id="literatura-2">
                Бауман Л. Косметическая дерматология: принципы и практика //«МЕДпресс-информ» 2012 Москва.
              </li>
              <li id="literatura-3">Инструкция по медицинскому применению ЛП раствор Люголя ЛП 008222-020622.</li>
              <li id="literatura-4">
                Инструкция по медицинскому применению ЛП Бетадин<sup>®</sup> (раствор, мазь), РУ П №015282/03, П
                №015282/02
              </li>
              <li id="literatura-5">
                Инструкция по медицинскому применению ЛП Бетадин<sup>®</sup> (суппозитории вагинальные), РУ П
                №015282/017.
              </li>
              <li id="literatura-6">
                Михальский В.В., Богданов А.Е., Жилина С.В., и др. «Применение препарата Бетадин<sup>®</sup> в
                лечении инфицированных ран» //РМЖ №29, 23.12.2010.
              </li>
              <li id="literatura-7">
                Богомазова И.М. , Белоусова В.С. , Максимов М.Л. Эффективность использования препарата Бетадин
                <sup>®</sup> при бактериальном вагинозе // РМЖ Мать и дитя. №19 от 09.09.2014.
              </li>
              <li id="literatura-8">
                Блатун Л.А. Местное медикаментозное лечение ран. Хирургия. Журнал им. Н.И. Пирогова. 2011;(4):51
                59.
              </li>
              <li id="literatura-9">
                Яремчук Ан.А. и соавт. Обоснование состава многокомпонентной мази для лечения гнойных ран в первой
                фазе раневого процесса. Вестник фармации №3 (57) 2012.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
