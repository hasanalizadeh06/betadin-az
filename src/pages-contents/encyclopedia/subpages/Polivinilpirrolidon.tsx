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

export default function Polivinilpirrolidon() {
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
                  <span property="name">Поливинилпирролидон (повидон)</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Поливинилпирролидон (повидон): применение и свойства
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
                <h2 className="page-header-subtitle">
                  Открытие повидона (поливинилпирролидона)
                </h2>
                <div className="page-header-body">
                  <p>
                    Повидон (поливинилпирролидон) – это водорастворимое полимерное вещество,
                    синтезированное в 1940 году в Германии химиком В. Реппе
                    <sup>
                      <a href="#spisok-literatury">1</a>
                    </sup>
                    .
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#oblasti-primeneniya-polivinilpirrolidona">Применение</a>
                  </li>
                  <li>
                    <a href="#preparaty-betadin">Препараты</a>
                  </li>
                  <li>
                    <a href="#chasto-zadavaemye-voprosy">Популярные вопросы</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/polivinilpirrolidon-povidon-730x615.webp 1x, /polivinilpirrolidon-povidon-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/polivinilpirrolidon-povidon-1460x1230.webp"
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
                  <a href="#oblasti-primeneniya-polivinilpirrolidona">
                    Области применения поливинилпирролидона
                  </a>
                </li>
                <li>
                  <a href="#kompleks-povidon-yoda">Комплекс повидон-йода</a>
                </li>
                <li>
                  <a href="#preparaty-betadin">Препараты Бетадин®</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
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
              <a href="#oblasti-primeneniya-polivinilpirrolidona">
                Области применения поливинилпирролидона
              </a>
            </li>
            <li>
              <a href="#kompleks-povidon-yoda">Комплекс повидон-йода</a>
            </li>
            <li>
              <a href="#preparaty-betadin">Препараты Бетадин®</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
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
            <h2 className="h2" id="oblasti-primeneniya-polivinilpirrolidona">
              Области применения поливинилпирролидона
            </h2>

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

            <div className="list-base">
              <p>
                <strong>
                  В медицине и фармации повидон используют в качестве
                  <sup>
                    <a href="#spisok-literatury">6</a>
                  </sup>
                  :
                </strong>
              </p>
              <ul>
                <li>
                  Адсорбента (вещества, способного к поглощению/впитыванию других веществ) и
                  детоксицирующего средства. Повидон адсорбирует токсины в желудочно-кишечном
                  тракте при острых инфекционных заболеваниях (сальмонеллез, дизентерия) и
                  пищевом отравлении, а также связывает токсины при почечной и печеночной
                  недостаточностях. Порошок повидона не всасывается в кровоток при приёме внутрь
                  и в неизмененном виде выводится из организма. В качестве адсорбента и
                  детоксицирующего препарата, повидон разрешен к использованию у взрослых и
                  детей старше 1 года.
                </li>
                <li>Кровезаменителя с дезинтоксикационными свойствами.</li>
                <li>
                  Стабилизирующего связующего компонента в производстве таблетированных
                  лекарственных средств.
                </li>
                <li>
                  Загустителя кремов и зубных паст, губных помад и при производстве
                  косметических средств.
                </li>
                <li>В производстве контактных линз и лекарств, используемых в офтальмологии.</li>
                <li>
                  В соединении с йодом (повидон-йод) является носителем активного{' '}
                  <a href="/encyclopedia/jod/">йода</a> и используется как современное
                  антисептическое средство.
                </li>
              </ul>
            </div>

            <h2 className="h2" id="kompleks-povidon-yoda">
              Комплекс повидон-йода
            </h2>

            <p>
              Присоединение молекулярного йода к молекуле полимера (повидону) позволило
              сохранить выраженное обеззараживающее действие, уменьшить всасывание йода в
              организм, повысить стабильность лекарственного средства. Повидон-йод, как важный
              антисептик, был включен Всемирной организацией здравоохранения (ВОЗ) в перечень
              основных лекарственных средств
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            <p>
              С середины двадцатого века в здравоохранении начали использовать повидон-йод как
              современное антисептическое средство широкого спектра активности в отношении
              бактерий (грамположительных и грамотрицательных), простейших одноклеточных
              микроорганизмов, грибковой и вирусной инфекций
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              .
            </p>

            <p>
              Обеззараживающее действие повидон-йода развивается стремительно: бактерии, вирусы и
              грибы погибают за 15-30 секунд, трихомонады – в течение <br />
              1 минуты
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                О свойствах повидон-йода смотрите в коротком видео:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Видео о свойствах повидон-йода"
                ></iframe>
              </div>
              <div className="iframe_desc">
                Из видео вы узнаете, что такое повидон-йод, какими эффектами он обладает и
                почему им удобно обрабатывать раны.
              </div>
            </div>

            <h2 className="h2" id="preparaty-betadin">
              Препараты Бетадин®
            </h2>

            <p>
              На основе повидон-йода под торговой маркой Бетадин<sup>®</sup> выпускают раствор,
              мазь и свечи вагинальные.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/preparaty-betadin-1-650x325.webp 1x, /preparaty-betadin-1-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/preparaty-betadin-1-1300x650.webp"
                alt="Препараты Бетадин"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Раствор Бетадин® 10%</h3>

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
                <strong>Бетадин<sup>®</sup> раствор используют: </strong>
              </p>

              <ul>
                <li>
                  для обработки и лечения{' '}
                  <a href="/encyclopedia/rany-s-infekciej/">раневой инфекции</a>, при
                  хирургических вмешательствах, в травматологии, при лечении{' '}
                  <a href="/encyclopedia/ozhog-u-detej/">ожогов</a> различного происхождения и
                  степени тяжести
                </li>
                <li>при грибковых, вирусных и гнойничковых заболеваниях кожи</li>
                <li>
                  для лечения и обеззараживания{' '}
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/">трофических язв</a>,{' '}
                  <a href="/pravila-uhoda-za-prolezhnyami/">пролежней</a>
                </li>
                <li>
                  с целью антисептической обработки кожи пациентов перед хирургическим
                  вмешательством
                </li>
                <li>в качестве ухода за кожей в местах установки дренажей, зондов</li>
                <li>
                  в стоматологии{' '}
                  <sup>
                    <a href="#spisok-literatury">6</a>
                  </sup>
                </li>
              </ul>

              <p>
                <strong>Обеззараживание раневых поверхностей</strong> возможно 10%
                неразбавленным раствором Бетадин<sup>®</sup>. Для этого раневую поверхность
                смазывают 2 раза в день или покрывают влажным компрессом, пропитанным
                раствором. Курс лечения подбирается индивидуально.
              </p>

              <p>
                <strong>В дренажных системах</strong> раствор Бетадин<sup>®</sup> 10% разбавляют
                от 10-100 раз.
              </p>

              <p>
                <strong>Для обработки кожи пациента перед инвазивным вмешательством</strong>
                <sup>
                  <a href="#spisok-literatury">6</a>
                </sup>{' '}
                используют неразбавленный 10% раствор повидон-йода (Бетадин<sup>®</sup>).
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
                <strong>Бетадин<sup>®</sup> мазь используют: </strong>
              </p>

              <ul>
                <li>
                  при гнойничковых заболеваниях кожи: фурункулёзе, абсцессах, и других
                </li>
                <li>в лечении пролежней и трофических язв различного происхождения</li>
                <li>при риске нагноения бытовых или хирургических ран и швов</li>
                <li>для заживления порезов и ссадин</li>
                <li>при ожогах различных степеней тяжести</li>
                <li>
                  для уничтожения возбудителей грибковой инфекции, в том числе, вызванных
                  Сandida albicans
                </li>
              </ul>

              <p>
                В состав мази Бетадин<sup>®</sup> входит повидон-йод, действующий против
                болезнетворных микроорганизмов, и макрогол, который помогает вытягивать гной из
                раны
                <sup>
                  <a href="#spisok-literatury">10</a>
                </sup>
                .
              </p>

              <p>
                Наносят мазь тонким слоем (без втирания) на поврежденную кожу или язвенный
                дефект несколько раз в день и выполняют перевязку. Мазь Бетадин<sup>®</sup> можно
                использовать под окклюзионные (воздухонепроницаемые) повязки
                <sup>
                  <a href="#spisok-literatury">7</a>
                </sup>
                .
              </p>

              <p>
                Клинические исследования подтвердили, что лечение инфицированных ран под
                салфетками, пропитанными раствором или мазью Бетадин<sup>®</sup>, оказывает
                больший эффект. На протяжении первых 5-7 суток в ране уменьшается отёк и
                количество гнойного отделяемого, отмечается уменьшение болевых ощущений
                <sup>
                  <a href="#spisok-literatury">7</a>
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
                <strong>Вагинальные свечи (суппозитории) Бетадин<sup>®</sup> назначают для лечения:</strong>
              </p>

              <ul>
                <li>острого и хронического вагинитов</li>
                <li>кандидоза («молочницы»)</li>
                <li>трихомониаза</li>
                <li>
                  профилактически перед хирургическими или диагностическими вмешательствами во
                  влагалище
                </li>
              </ul>

              <p>
                <strong>Для лечения острых вагинитов</strong> вводят по 1 вагинальной свече
                Бетадина<sup>®</sup> 200 мг – 1 раз в сутки в течение 7–14 дней.
              </p>

              <p>
                <strong>Для лечения хронических и подострых вагинитов</strong> – вводят по 1
                вагинальной свече Бетадин<sup>®</sup> 200 мг 1 раз в сутки на ночь 14 дней
                подряд.
              </p>

              <p>
                <strong>
                  Профилактика инфекционных осложнений после гинекологических операций, абортов
                  или установки внутриматочных спиралей
                </strong>{' '}
                свечи Бетадин<sup>®</sup> используют 2 раза в день в течение 1-7 дней.
              </p>

              <p>
                Вагинальные суппозитории Бетадин<sup>®</sup> можно применять во время менструации.
                Вагинальное использование повидон-йода разрушает сперматозоиды, следовательно
                препарат не используют в период планирования беременности
                <sup>
                  <a href="#spisok-literatury">7</a>
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

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Мазь на основе йода</strong>
                </p>
                <p>
                  Мазь на основе йода: механизм действия, область применения. Мазь Бетадин® на
                  основе повидон-йода для лечения различных кожных заболеваний.
                </p>
                <a
                  href="/encyclopedia/jod-maz/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="/maz-na-osnove-joda-prevyu-246x166 (1).webp, /maz-na-osnove-joda-prevyu-246x166 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
                  alt="Мазь на основе йода - превью"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3">Меры предосторожности при использовании средств на основе повидон-йода</h3>

            <ul className="wp-block-list">
              <li>Следует избегать попадания раствора или мази с повидон-йодом в глаза.</li>
              <li>Зуд или покраснение кожи требуют отмены данных препаратов.</li>
              <li>
                При заболеваниях щитовидной железы средства используют с осторожностью, после
                консультации с лечащим врачом.
              </li>
              <li>
                Не рекомендуют использование повидон-йода перед лечением радиоактивным йодом, при
                почечной недостаточности, герпетиформном дерматите Дюринга (разновидность
                пузырного дерматоза).
              </li>
              <li>
                Противопоказан беременным женщинам (начиная с 3-го месяца), а также при
                кормлении грудью.
              </li>
            </ul>

            <p>
              Для поддержания нормального процесса заживления пораженного участка кожи на всех
              стадиях восстановления, часто выбирают средства в форме мази. Такая лекарственная
              форма удобна тем, что позволяет увеличивать время присутствия антимикробного
              препарата, снижая риск появления инфекционных осложнений.
            </p>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              Часто задаваемые вопросы
            </h2>

            <h3 className="h3">Токсичны ли компоненты средств на основе повидон-йода?</h3>

            <p>
              Повидон является инертным нетоксичным полимером, доказавшим свою безопасность на
              протяжении длительного времени использования в медицинской практике. Йод в
              соединении с повидоном, практически не проникает в кровоток, поэтому средство
              разрешено к применению у взрослых и детей старше месячного возраста.
            </p>

            <p>
              Однако при нарушениях функции щитовидной железы, сопутствующем герпетиформном
              дерматите Дюринга, во время лечения радиоактивным йодом и др., не рекомендовано
              использование различных йодсодержащих средств, в том числе на основе повидон-йода.
            </p>

            <h3 className="h3">Как понять, что обеззараживающее действие повидон-йода прекратилось?</h3>

            <p>
              После нанесения раствора или мази Бетадин<sup>®</sup>, на месте использования
              остается окрашенная в желто-коричневый цвет тонкая плёнка. По мере прекращения
              действия препарата окрашивание исчезает
              <sup>
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
              </sup>
              .
            </p>

            <h3 className="h3">
              Что лучше выбрать раствор или мазь на основе повидон-йода?
            </h3>

            <p>
              Средства Бетадин<sup>®</sup> используют в зависимости от показаний и по рекомендации
              лечащего врача. Например, для экстренной помощи и антисептической обработки мелких
              ранок, порезов и ссадин подойдет раствор Бетадин<sup>®</sup> 10%. При гнойных
              осложнениях в процессе заживления ран можно использовать мазь Бетадин<sup>®</sup>,
              повидон-йод в составе средства действует против патогенных микроорганизмов, а
              макрогол способствует очищению раны от гноя
              <sup>
                <sup>
                  <a href="#spisok-literatury">10</a>
                </sup>
              </sup>
              .
            </p>

            <h3 className="h3">
              С какого возраста разрешено использование вагинальных свечей (суппозиториев)
              Бетадин®?
            </h3>

            <p>
              Вагинальные свечи Бетадин<sup>®</sup> не назначают девушкам, не достигшим
              подросткового возраста.
            </p>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              Читать по теме
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
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
                      Характеристики и свойства повидон-йода. Для чего применяется повидон-йод?
                      Инструкция по применению раствора, мази, свечей Бетадин<sup>®</sup> с
                      повидон-йодом.
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
                        srcSet="/svechi-ot-vaginita-prevyu-246x166 (1).webp, /svechi-ot-vaginita-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/svechi-ot-vaginita-prevyu-246x166 (1).webp"
                        alt="Свечи от вагинита - превью"
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

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/maz-na-osnove-joda-prevyu-246x166 (1).webp, /maz-na-osnove-joda-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
                        alt="Мазь на основе йода - превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Мазь на основе йода</strong>
                    </p>
                    <p>
                      Мазь на основе йода: механизм действия, область применения. Мазь Бетадин®
                      на основе повидон-йода для лечения различных кожных заболеваний.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/jod-maz/">Подробнее</Link>
                    </p>
                  </div>
                </div>
              </div>
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

            <h2 className="h2" id="spisok-literatury">
              Список литературы
            </h2>

            <ol className="literature">
              <li id="literatura-0">
                Сидельковская Ф.П., Химия N-винилпирролидона и его полимеров// «Наука» Москва
                1970 год.
              </li>
              <li id="literatura-1">
                Жилякова Е.Т., Агарина А.В., Новикова М.Ю., Иванова Л.Л. Применение различных
                загустителей-пролонгаторов марок коллидона в фармацевтической технологии // Научный
                результат. Медицина и фармация. – Т.2, №4, 2016.
              </li>
              <li id="literatura-2">
                Борисов И.В. Повидон-йод – новые возможности знакомого препарата //Журнал Раны и
                раневые инфекции 2021, 8 (3): 12-18. DOI: 10.25199/2408-9613-2021-8-3-12-18.
              </li>
              <li id="literatura-3">
                Инструкция по медицинскому применению ЛП раствор Повидон-йод 007583-081121
                https://grls.rosminzdrav.ru/Grls_View_v2.aspx?routingGuid=7e2ac94f-2f7d-4d77-837a-463dc07df285.
              </li>
              <li id="literatura-4">
                Лебедев Н.Н., Розанов В.Е., Шихметов А.Н. Алгоритм ведения больного с
                инфицированной раной в амбулаторных условиях с применением повидон-йода.
                Амбулаторная хирургия. 2018;(3-4):51-56.
                https://doi.org/10.21518/1995-1477-2018-3-4-51-56.
              </li>
              <li id="literatura-5">
                Гавриленко Ю.В. Эффективность использования раствора Бетадин® при местном
                лечении хронического тонзиллита у детей // Здоровье Украины 11.03.2014.
              </li>
              <li id="literatura-6">
                Инструкция по применению ЛП Бетадин® (раствор, мазь, суппозиторий), РУ П №015282/03,
                П №015282/02, П №015282/01.
              </li>
              <li id="literatura-7">
                Михальский В.В., Богданов А.Е, Жилина С.В., Привиденцев А.И, Аникин А.И., Ульянина
                А.А. Применение препарата Бетадин® в лечении инфицированных ран // РМЖ №29 от
                23.12.2010.
              </li>
              <li id="literatura-8">
                Богомазова И.М. , Белоусова В.С. , Максимов М.Л. Эффективность использования
                препарата Бетадин® при бактериальном вагинозе // РМЖ Мать и дитя. №19 от
                09.09.2014.
              </li>
              <li id="literatura-9">
                Яремчук Ан. А. и соавт. Обоснование состава многокомпонентной мази для лечения
                гнойных ран в первой фазе раневого процесса. Вестник фармации №3 (57) 2012.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
