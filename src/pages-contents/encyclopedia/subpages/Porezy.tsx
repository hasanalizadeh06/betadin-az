'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function Porezy() {
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

    const checkScroll = () => {
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
          console.log(percent);
        }
      }

      if (Object.values(triggered).every((v) => v)) {
        window.removeEventListener('scroll', checkScroll);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <main>
      <article>
        {/* Header Section */}
        <div className="container-page-header">
          <div className="container">
            {/* Breadcrumb Navigation */}
            <div className="page-header page-header-breadcrumbs">
              <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/">
                    <span property="name">Главная</span>
                  </a>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/encyclopedia/">
                    <span property="name">Энциклопедия</span>
                  </a>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Порезы</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Порезы: первая помощь и правильная обработка
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp 1x, /icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      height={112}
                      width={115}
                      src="/icon.png"
                      alt="картинка у заголовка"
                      priority
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Факты о порезах</h2>
                <div className="page-header-body">
                  <p>
                    Резаная рана – это механическое повреждение, полученное в результате
                    воздействия на<br />
                    кожу режущих предметов<sup>
                      <a href="#spisok-literatury">1,2,3</a>
                    </sup>
                    .
                  </p>
                  <p>Бытовое название небольшой резаной раны – порез.</p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#pomoshch-pri-porezah">Первая помощь при порезах</a>
                  </li>
                  <li>
                    <a href="#algoritm-obrabotki-poreza-rastvorom-i-mazyu-betadin">
                      Алгоритм обработки пореза
                    </a>
                  </li>
                  <li>
                    <a href="#fazy-zazhivleniya-poreza">Заживление порезов</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-1-730x615.webp 1x, /kartinka-banner-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/kartinka-banner-1-730x615.webp"
                      alt="Порезы"
                      priority
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#osobennosti-stroeniya-kozhi">Особенности строения кожи</a>
                </li>
                <li>
                  <a href="#porezy-v-zavisimosti-ot-glubiny">Порезы в зависимости от глубины</a>
                </li>
                <li>
                  <a href="#pomoshch-pri-porezah">Помощь при порезах</a>
                </li>
                <li>
                  <a href="#kak-opredelit-povrezhdenie-sosuda">Как определить повреждение сосуда</a>
                </li>
                <li>
                  <a href="#fazy-zazhivleniya-poreza">Фазы заживления пореза</a>
                </li>
                <li>
                  <a href="#faktory-vliyayushchie-na-zazhivlenie-ran">
                    Факторы, влияющие на заживление ран
                  </a>
                </li>
                <li>
                  <a href="#lechenie-porezov">Лечение порезов</a>
                </li>
                <li>
                  <a href="#mazi">Мази</a>
                </li>
                <li>
                  <a href="#algoritm-obrabotki-poreza-rastvorom-i-mazyu-betadin">
                    Алгоритм обработки пореза раствором и мазью Бетадин®
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Список литературы</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross">Содержание</div>
            </nav>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className="nav-content nav-content-fixed nav-content-title-hidden">
          <ul>
            <li>
              <a href="#osobennosti-stroeniya-kozhi">Особенности строения кожи</a>
            </li>
            <li>
              <a href="#porezy-v-zavisimosti-ot-glubiny">Порезы в зависимости от глубины</a>
            </li>
            <li>
              <a href="#pomoshch-pri-porezah">Помощь при порезах</a>
            </li>
            <li>
              <a href="#kak-opredelit-povrezhdenie-sosuda">Как определить повреждение сосуда</a>
            </li>
            <li>
              <a href="#fazy-zazhivleniya-poreza">Фазы заживления пореза</a>
            </li>
            <li>
              <a href="#faktory-vliyayushchie-na-zazhivlenie-ran">
                Факторы, влияющие на заживление ран
              </a>
            </li>
            <li>
              <a href="#lechenie-porezov">Лечение порезов</a>
            </li>
            <li>
              <a href="#mazi">Мази</a>
            </li>
            <li>
              <a href="#algoritm-obrabotki-poreza-rastvorom-i-mazyu-betadin">
                Алгоритм обработки пореза раствором и мазью Бетадин®
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="#spisok-literatury">Список литературы</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross">Содержание</div>
        </nav>

        {/* Disclaimer */}
        <div className="home-container">
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>

        {/* Main Content */}
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            {/* First Image */}
            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-18-650x370.webp 1x, /medical-kit-and-bandaid-509398-488-1-18-1300x740.webp 2x"
                type="image/webp"
              />
              <Image
                height={370}
                width={650}
                src="/medical-kit-and-bandaid-509398-488-1-18-650x370.webp"
                alt="Глубокая рана"
              />
            </picture>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={505}
                  width={503}
                  src="/circle-503x505.webp"
                  alt="Декоративные элементы"
                />
              </picture>
            </div>

            <h3 className="h3" id="bytovye-predmety-kotorymi-chashche-vsego-mozhno-poluchit-porez">
              Бытовые предметы, которыми чаще всего можно получить порез:
            </h3>
            <div className="list-base">
              <ul>
                <li>Нож</li>
                <li>Бритвенные лезвия</li>
                <li>Осколки стекла</li>
                <li>Край листа бумаги</li>
              </ul>
            </div>

            {/* Section: Особенности строения кожи */}
            <h2 className="h2" id="osobennosti-stroeniya-kozhi">
              Особенности строения кожи
            </h2>
            <p>
              <strong>Кожа</strong> – один из самых больших по площади органов человеческого тела.
              Она эластичная, достаточно прочная, различается по текстуре и толщине в разных
              частях тела. Состоит из двух основных слоев – <strong>эпидермиса и дермы</strong>.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-19-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-19-1300x651.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={326}
                width={650}
                src="/medical-kit-and-bandaid-509398-488-1-19-650x325.webp"
                alt="Особенности строения кожи"
              />
            </picture>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Эпидермис</strong>
                </p>
                <p>относится к поверхностному слою кожи и состоит из нескольких слоев клеток кожи.</p>
              </div>
              <div className="column">
                <p>
                  <strong>Дерма</strong>
                </p>
                <p>
                  находится под эпидермисом и состоит из волокон эластина, обеспечивающего
                  подвижность верхних покровов, и белковых волокон (коллагена), придающих коже
                  прочность. В дерме находятся сальные железы, волосяные фолликулы, нервы и
                  кровеносные сосуды.
                </p>
              </div>
            </div>

            <p>Повреждения кожи режущими предметами могут затрагивать как эпидермис, так и дерму.</p>

            {/* Section: Порезы в зависимости от глубины */}
            <h2 className="h2" id="porezy-v-zavisimosti-ot-glubiny">
              Порезы в зависимости от глубины
            </h2>
            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Мелкие порезы</strong>
                </p>
                <p>Мелкие порезы проходят через верхние слои кожи. При своевременной обработке поврежденного участка кожи, такие раны редко инфицируются.</p>
                <p>Повреждения могут быть получены ногтями, куском металла, веткой дерева или куста.</p>
                <p>Обычно неглубокий порез или царапину можно лечить дома. Главное, чтобы в раневой поверхности не было загрязнений.</p>
              </div>
              <div className="column">
                <p>
                  <strong>Глубокие порезы</strong>
                </p>
                <p>Глубокие порезы проходят через все слои кожи.</p>
                <p>Они возникают при воздействии на кожу острым предметом: ножом, бритвой, куском стекла или острым краем куска металла. При осмотре важно убедиться, что в ране нет загрязнений.</p>
                <p>Если размер повреждения имеет значительные размеры, то необходимо обратиться за медицинской помощью, чтобы наложить швы.</p>
              </div>
            </div>

            <div className="green">
              <p>
                <strong>Порезы требуют оказания первой помощи.</strong>
              </p>
              <p>
                <strong>Глубокий порез, затрагивающий артерию, требует неотложной медицинской помощи.</strong>
              </p>
            </div>

            {/* Section: Помощь при порезах */}
            <h2 className="h2" id="pomoshch-pri-porezah">
              Помощь при порезах
            </h2>
            <div className="list-base">
              <p>
                <strong>
                  Для оказания первой помощи при порезе необходимо
                  <sup>
                    <a href="#spisok-literatury">2,3</a>
                  </sup>
                  :
                </strong>
              </p>
              <ul>
                <li>Очистить рану неволокнистым материалом или стерильной марлей</li>
                <li>Остановить кровотечение путем надавливания на рану</li>
                <li>Обработать рану стерильным физиологическим раствором или чистой водой</li>
                <li>
                  Обработать повреждение антисептиком, например, раствором{' '}
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>
                </li>
                <li>Закрыть очищенную рану стерильной повязкой</li>
                <li>Следить за чистотой раны</li>
              </ul>
            </div>

            {/* Video Section */}
            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                Про обработку порезов смотрите в коротком видео:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="iframe_desc">
                Вы узнаете, почему важно соблюдать правила обработки даже небольших порезов. В
                видео рассказывается про антисептические средства, которые не вызывают дискомфорта
                при уходе за повреждённой кожей.
              </div>
            </div>

            {/* Section: Как определить повреждение сосуда */}
            <h2 className="h2" id="kak-opredelit-povrezhdenie-sosuda">
              Как определить повреждение сосуда
            </h2>
            <p>
              Если порез глубокий и кровотечение не прекращается, то скорее всего поврежден
              сосуд. В этом случае необходимо обратиться за профессиональной медицинской помощью.
            </p>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Кровотечение из артерии:</strong>
                </p>
                <p>кровь ярко-алая и фонтанирует из раны</p>
              </div>
              <div className="column">
                <p>
                  <strong>Кровотечение из вены:</strong>
                </p>
                <p>кровь темно-красная и медленно вытекает из раны</p>
              </div>
            </div>

            <div className="list-base">
              <p>
                <strong>Во время транспортировки в лечебное учреждение следует:</strong>
              </p>
              <ul>
                <li>
                  Накрыть рану стерильной повязкой и продолжать оказывать надавливание на сосуд
                </li>
                <li>
                  Приподнять травмированное место выше уровня сердца, если такое возможно (например,
                  при травме руки или ноги)
                </li>
                <li>
                  Не удалять повязку, если она пропиталась кровью, а вместо этого наложить сверху
                  свежую
                </li>
              </ul>
            </div>

            {/* Section: Фазы заживления пореза */}
            <h2 className="h2" id="fazy-zazhivleniya-poreza">
              Фазы заживления пореза
            </h2>
            <p>Выделяют четыре фазы заживления пореза:</p>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>Фаза экссудации</strong>
                  </p>
                  <p>Переход жидкой части крови через стенку сосуда в место ранения</p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Фаза резорбции</strong>
                  </p>
                  <p>Обратное всасывание жидкости из места ранения</p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Фаза пролиферации</strong>
                  </p>
                  <p>Разрастание новой ткани</p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Фаза регенерации</strong>
                  </p>
                  <p>Восстановительная</p>
                </div>
              </div>
            </div>

            <div className="green">
              <p>
                <strong>Во время первых двух фаз происходит развитие воспаления.</strong>
              </p>
            </div>

            <p>
              Воспаление возникает в ответ на повреждение кожных покровов и служит защитной
              реакцией организма на порез: отделяет травмированный участок от неповрежденных
              тканей. После разграничения организм немедленно начинает восстанавливать рану, и этот
              процесс может продолжаться в течение нескольких дней, недель, месяцев или даже лет,
              все зависит от травмы.
            </p>

            <div className="list-base">
              <p>
                <strong>По мере заживления пореза наблюдаются следующие процессы:</strong>
              </p>
              <ul>
                <li>
                  После возникновения пореза организм начинает включать защитные функции.
                  Кровеносные сосуды в ране сужаются, уменьшая тем самым кровопотерю. В поврежденном
                  месте образуется сгусток.
                </li>
                <li>
                  После образования сгустка кровеносные сосуды расширяются, обеспечивая максимальный
                  приток крови к поврежденному месту. Это приводит к появлению симптомов воспаления
                  (боль, припухлость). Далее к месту раневого повреждения устремляются лейкоциты
                  (клетки крови) и начинают очищать поврежденный участок от бактерий,
                  микроорганизмов и других посторонних агентов.
                </li>
                <li>
                  На месте пореза идет процесс восстановления ткани: образуются новые волокна
                  коллагена и восстанавливаются сосуды. Все это поддерживает процесс заживления.
                </li>
                <li>Рана начинает стягиваться по краям, ее размер уменьшается.</li>
                <li>
                  Поверхностные клетки кожи мигрируют с одной стороны раны на другую, формируется
                  новый участок кожи.
                </li>
                <li>
                  В зависимости от глубины пореза на его месте может остаться шрам. Как правило,
                  рубцовая ткань не такая прочная, как неповрежденная кожа.
                </li>
              </ul>
            </div>

            {/* Section: Факторы, влияющие на заживление ран */}
            <h2 className="h2" id="faktory-vliyayushchie-na-zazhivlenie-ran">
              Факторы, влияющие на заживление ран
            </h2>
            <div className="list-base">
              <p>
                Травмированная кожа заживает с разной скоростью, и зависит это от индивидуальных
                особенностей организма и факторов окружающей среды, к которым относятся:
              </p>
              <ul>
                <li>Общее состояние здоровья человека</li>
                <li>Возраст – у пожилых людей кожа восстанавливается медленнее, чем у молодых</li>
                <li>Состояние иммунной системы</li>
                <li>Особенности питания</li>
                <li>Погодные условия</li>
                <li>Степень инфицированности раны</li>
                <li>Вредные привычки (курение, алкоголь, наркотики)</li>
                <li>Сопутствующие заболевания (сахарный диабет, онкологические заболевания)</li>
              </ul>
            </div>

            {/* Section: Лечение порезов */}
            <h2 className="h2" id="lechenie-porezov">
              Лечение порезов
            </h2>
            <p>
              Для лечения порезов существует великое множество препаратов, отличающихся как
              основным действующим веществом, так и лекарственной формой
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  4,5,6
                </a>
              </sup>
              .
            </p>

            {/* Subsection: Растворы */}
            <h3 className="h3" id="rastvory">
              Растворы
            </h3>

            <h4 className="h4" id="povidon-yod">
              Повидон-йод
            </h4>
            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/banner-betadin-927x916.webp 1x, /banner-betadin-1853x1832.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    loading="lazy"
                    width={927}
                    height={916}
                    src="/banner-betadin-927x916.webp"
                    alt="Бетадин"
                  />
                </picture>
              </div>
              <p>
                Раствор <span style={{ color: '#0f780b' }}>Бетадин®</span> производится в
                концентрации 10%. Для обработки порезов препарат можно использовать без разведения
                или разводить 1:10 и применять в виде 1% раствора (2 Х 5 мл (2 чайных ложки) и 100
                мл (½ стакана) 10% раствора)
                <sup>
                  <a href="#spisok-literatury">2,3</a>
                </sup>
                . Разводить следует физраствором, раствором Рингера, фосфатным буферным раствором,
                водой для инъекций, в крайнем случае, чистой питьевой водой.
              </p>
              <p>
                <a href="/encyclopedia/povidon-jod/">Повидон-йод</a> обладает антисептическим,
                противовирусным, противогрибковым, противопротозойным действием.
              </p>
              <p>Активен в отношении грамположительных и грамотрицательных бактерий.</p>
              <p>
                В отличие от 5% спиртового раствора <a href="/encyclopedia/jod/">йода</a>, повидон-йод
                можно наносить непосредственно на порез. Он не вызывает жжения, не сушит кожу, не
                препятствует регенерации тканей.
              </p>
              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-rastvor-instruktsiya/">
                  Инструкция
                </a>
              </p>
            </div>

            <h3 className="h3" id="hlorgeksidina-biglyukonat">
              Хлоргексидина биглюконат
            </h3>
            <p>
              Хлоргексидина биглюконат – антисептик, который борется с бактериями, грибами и
              вирусами. Существует в виде водного и спиртового раствора. Для обработки порезов
              следует использовать 0,2-0,5% водный раствор. Препарат на спиртовой основе может
              вызвать неприятные реакции в виде жжения, а также замедлять заживление.
            </p>

            <h3 className="h3" id="perekis-vodoroda">
              Перекись водорода
            </h3>
            <p>
              Раствор производится и применяется в концентрации 3%. Перекись водорода обладает
              кровеостанавливающим действием, способствует удалению из раны грязи механическим
              путем за счет образования пузырьков газа. Применение перекиси водорода может
              вызывать аллергические реакции.
            </p>

            {/* Section: Мази */}
            <h2 className="h2" id="mazi">
              Мази
            </h2>

            <h3 className="h3" id="povidon-yod-2">
              Повидон-йод
            </h3>
            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/banner-betadin-maz-927x916.webp 1x, /banner-betadin-maz-1853x1832.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    loading="lazy"
                    width={927}
                    height={916}
                    src="/banner-betadin-maz-927x916.webp"
                    alt="Бетадин мазь"
                  />
                </picture>
              </div>
              <p>
                Мазь <span style={{ color: '#0f780b' }}>Бетадин®</span> содержит 100 мг
                повидон-йода. Средство действует на грамположительные и грамотрицательные бактерии,
                способствует разрушению их клеточной стенки. Мазь обладает широким спектром
                действия, а именно: антисептическим, противовирусным, противогрибковым,
                противопротозойным
                <sup>
                  <a href="#spisok-literatury">11</a>
                </sup>
                . Препарат демонстрирует противовоспалительное действие, ускоряет заживление
                раневых поверхностей, демонстрируя низкий уровень цитотоксичности (повреждение
                клеток тканей за счет своего антимикробного действия)
                <sup>
                  <a href="#spisok-literatury">12</a>
                </sup>
                .
              </p>
              <p>
                Повидон-йод в удобной лекарственной форме в виде мази позволяет носить препарат с
                собой и использовать в удобное время, нанося, например, под окклюзионные повязки.
              </p>
              <p>
                В отличие от 5% раствора йода, который имеет в своем составе спирт, мазь на основе
                повидон-йода не сушит кожу, не вызывает неприятных ощущений.
              </p>
              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-maz-instruktsiya/">
                  Инструкция
                </a>
              </p>
            </div>

            <div className="green">
              <p>
                В проведенном клиническом исследовании было показано, что комбинация 1% раствора и
                10% мази <span style={{ color: '#0f780b' }}>Бетадин®</span> оказывает высокий
                клинический эффект в лечении ран и порезов
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                .
              </p>
            </div>

            <h3 className="h3" id="dekspantenol">
              Декспантенол
            </h3>
            <p>
              Декспантенол является производным пантотеновой кислоты, витамина В5. Препарат способен
              увлажнять кожу, укреплять ее барьерную функцию, предотвращать раздражение кожи,
              способствовать заживлению ран, оказывать противовоспалительное действие
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  7
                </a>
              </sup>
              .
            </p>
            <p>Декспантенол стимулирует регенерацию кожи, активирует гены, ответственные за заживления ран.</p>

            <h3 className="h3" id="hloramfenikol-i-dioksometiltetragidropirimidin">
              Хлорамфеникол и диоксометилтетрагидропиримидин
            </h3>
            <p>
              Имеет широкий спектр противомикробного и противовоспалительного действия, сохраняющийся
              даже в присутствии крови, гноя. Проникает внутрь раны и стимулирует ее заживление,
              оказывает противовоспалительное действие.
            </p>
            <p>
              Однако мазь может вызывать аллергический контактный дерматит с распространением по типу
              узловатой почесухи, а также изменение вкуса, головную боль
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  8
                </a>
              </sup>
              .
            </p>

            {/* Section: Алгоритм обработки пореза */}
            <h2 className="h2" id="algoritm-obrabotki-poreza-rastvorom-i-mazyu-betadin">
              Алгоритм обработки пореза раствором и мазью Бетадин®
            </h2>
            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>Подготовьте все необходимое для обработки пореза</strong>
                    <sup>
                      <a href="#spisok-literatury">5,6</a>
                    </sup>
                    :
                  </p>
                  <ul>
                    <li>
                      Средство для очищения раны (0,9% физиологический раствор, воду для инъекций,
                      чистую питьевую воду)
                    </li>
                    <li>
                      10% раствор Бетадин<sup>®</sup> или приготовленный 1% раствор Бетадин
                      <sup>®</sup>
                    </li>
                    <li>Мазь Бетадин®</li>
                    <li>Марля, пластырь для порезов</li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <p>
                  <strong>
                    Помойте руки и наденьте перчатки, чтобы не занести в рану инфекцию
                  </strong>
                </p>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Обработайте рану по следующему алгоритму:</strong>
                  </p>
                  <ul>
                    <li>Очистите поврежденное место физиологическим раствором или водой.</li>
                    <li>
                      Удалите частички загрязнений или попавших предметов. Для этого скрутите марлю,
                      чтобы образовался «уголок» и достаньте инородные тела.
                    </li>
                    <li>
                      Обработайте рану 10% или заранее приготовленным 1% раствором Бетадин
                      <sup>®</sup>. Промакивающими движениями осушите рану марлей или салфеткой.
                    </li>
                    <li>
                      Нанесите тонким слоем Мазь Бетадин<sup>®</sup> непосредственно на раневую
                      поверхность и наложите стерильную марлевую повязку, заклейте пластырем. Также
                      можно нанести мазь сначала на перевязочный материал, а затем на рану.
                    </li>
                    <li>Повторяйте процедуру до заживления раны.</li>
                  </ul>
                </div>
              </div>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/rectangle-213-1-650x151.webp 1x, /rectangle-213-1-1300x301.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={151}
                width={650}
                src="/rectangle-213-1-650x151.webp"
                alt="Обработка пореза"
              />
            </picture>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-558x542.webp 1x, /quastion-1115x1084.webp 2x"
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

            {/* Section: Часто задаваемые вопросы */}
            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              Часто задаваемые вопросы
            </h2>

            <h3 className="h3" id="chto-delat-esli-porezalsya">
              Что делать, если порезался?
            </h3>
            <p>
              Самое главное – не паниковать. Следует промыть рану водой или физиологическим раствором,
              обработать антисептиком, например, раствором{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                Бетадин<sup>®</sup>
              </mark>
              . Для стимуляции заживления можно воспользоваться мазями. Если вы самостоятельно не
              можете остановить кровотечение или рана долго не заживает, нагнаивается – обратитесь к
              врачу.
            </p>

            <h3 className="h3" id="chem-obrabotat-porez">
              Чем обработать порез?
            </h3>
            <p>
              Обработать порез можно антисептиками. Водными растворами антисептиков, например,
              Бетадин<sup>®</sup> раствор, можно обработать всё поле раны, спиртовыми – только края
              раны. После обработки желательно нанести мазь{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                Бетадин<sup>®</sup>
              </mark>
              для более быстрого заживления.
            </p>

            <h3 className="h3" id="kak-ostanovit-krov-pri-poreze">
              Как остановить кровь при порезе?
            </h3>
            <p>
              После очищения раны следует накрыть рану стерильной повязкой и надавить на порез,
              поднять место повреждения выше уровня сердца, если это возможно (например, при травме
              руки). Если кровь пульсирует, и самостоятельно в течение длительного времени не удается
              остановить кровь, то следует обратиться за квалифицированной медицинской помощью.
            </p>

            {/* Author Section */}
            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Красковский Федор Янович</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Автор статьи</p>
              </div>
              <picture>
                <source
                  srcSet="/kraskovskij-novyj-235x203.webp 1x, /kraskovskij-novyj-470x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={203}
                  width={235}
                  src="/kraskovskij-novyj-235x203.webp"
                  alt="Автор статьи"
                />
              </picture>
            </div>

            {/* Related Articles Section */}
            <div className="h2 h2-read-more" id="chitat-po-teme">
              Читать по теме
            </div>
            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/obrabotka-ran-prevyu-246x166.webp 1x, /obrabotka-ran-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/obrabotka-ran-prevyu-246x166.webp"
                        alt="Обработка ран - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Обработка ран</strong>
                    </p>
                    <p>Как правильно обрабатывать раны, чтобы избежать осложнений на поврежденных участках кожи.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/obrabotka-ran/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp 1x, /maz-dlya-zazhivleniya-ran-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp"
                        alt="Мазь для заживления ран- превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Мазь для заживления ран</strong>
                    </p>
                    <p>Какие бывают заживляющие мази, и как выбрать самую эффективную.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/maz-dlya-zazhivleniya-ran/">Подробнее</a>
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
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/rany-s-infekcziej-prevyu-246x166.webp"
                        alt="Раны с инфекцией-превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Раны с инфекцией</strong>
                    </p>
                    <p>Далеко не все ссадины и порезы заживают быстро и без осложнений. Как лечить инфицированные раны?</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/rany-s-infekciej/">Подробнее</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* References Section */}
            <h2 className="h2" id="spisok-literatury">
              Список литературы
            </h2>
            <ol className="literature">
              <li id="literature-0">
                Завражанов А. А., Гвоздев М. Ю., Крутова В. А. Раны и раневой процесс// Учебно-методическое пособие для интернов, ординаторов и практических врачей// Краснодар 2016.
              </li>
              <li id="literature-1">
                Гостищев В.К. и др. Общая хирургия. // ГЭОТАР-Медиа, Москва 2005.
              </li>
              <li id="literature-2">
                Васильев В. К., Попов А. П., Цыбикжапов А. Д. Общая хирургия// Учебное пособие// СПб.: Издательство «Лань», 2014.
              </li>
              <li id="literature-3">
                Харкевич Д. А. Фармакология// Учебник для студентов медицинских вузов//М.:ГЭОТАР-Медиа, 2009.
              </li>
              <li id="literature-4">
                Лебедев Н. Н., Розанов В. Е., Шихметов А. Н. Алгоритм ведения больного с инфицированной раной в амбулаторных условиях с применением повидон- йода // Амбулаторная хирургия. – 2018 – №. 3-4.
              </li>
              <li id="literature-5">
                Носенко О. М., Москаленко Т. Я., Рутинская А. В. Повидон-йод (Бетадин) в современной акушерско- гинекологической практике // Репродуктивная эндокринология. – 2018 – №. 44 – С. 43-48.
              </li>
              <li id="literature-6">
                Proksch E, de Bony R, Trapp S, Boudon S. Topical use of dexpanthenol: a 70th anniversary article. J Dermatolog Treat. 2017 Dec;28(8):766-773. doi: 10.1080/09546634.2017.1325310. Epub 2017 May 14 PMID: 28503966.
              </li>
              <li id="literature-7">
                Romita P, Stingeni L, Hansel K, Ettorre G, Bosco A, Ambrogio F, Foti C. Allergic contact dermatitis caused by chloramphenicol with prurigo nodularis-like spreading. Contact Dermatitis. 2019 Apr;80(4):251-252. doi: 10.1111 cod.13187. Epub 2019 Jan 10 PMID: 30485440.
              </li>
              <li id="literature-8">
                Инструкция по медицинскому применению Бетадин® Раствор. (РН: П№015282/03).
              </li>
              <li id="literature-9">
                Борисов И. В. Повидон-йод – новые возможности знакомого препарата//Раны и раневые инфекции 2021, 8 (3): 12-18. Инструкция по медицинскому применению Бетадин® Мазь. (РН: П№015282/02).
              </li>
              <li id="literature-10">
                Инструкция по медицинскому применению Бетадин® Мазь. (РН: П№015282/02).
              </li>
              <li id="literature-11">
                Bigliardi L.P. et al. Povidone iodine in wound healing: A review of current concepts and practices International Journal of Surgery 44 (2017).
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
