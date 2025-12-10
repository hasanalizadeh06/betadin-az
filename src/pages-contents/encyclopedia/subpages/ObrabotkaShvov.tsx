'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function ObrabotkaShvov() {
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
                  <span property="name">Обработка швов</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Обработка швов после операции: алгоритм и препараты
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
                <h2 className="page-header-subtitle">Для чего нужно обрабатывать швы?</h2>
                <div className="page-header-body">
                  <p>
                    Послеоперационный период завершается заживлением раны, восстановлением функций
                    пострадавшего органа и организма в целом. Любое хирургическое вмешательство
                    создаёт риски осложнений. Вероятность нагноения швов и дерматита области
                    операционной раны можно снизить благодаря правильному уходу и антисептической
                    обработке
                    <sup>
                      <a href="#spisok-literatury">2</a>
                    </sup>
                    .
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#pravila-obrabotki-shvov">Правила обработки швов</a>
                  </li>
                  <li>
                    <a href="#preparaty-dlya-obrabotki-shvov">Препараты для обработки швов</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/banner-obrabotka-shvov-1-730x615.webp 1x, /banner-obrabotka-shvov-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/banner-obrabotka-shvov-1-730x615.webp"
                      alt="Обработка швов"
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
                  <a href="#pravila-obrabotki-shvov">Правила обработки швов</a>
                </li>
                <li>
                  <a href="#preparaty-dlya-obrabotki-shvov">Препараты для обработки швов</a>
                </li>
                <li>
                  <a href="#kogda-neobhodimo-obratitsya-k-vrachu">
                    Когда необходимо обратиться к врачу
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Популярные вопросы</a>
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
              <a href="#pravila-obrabotki-shvov">Правила обработки швов</a>
            </li>
            <li>
              <a href="#preparaty-dlya-obrabotki-shvov">Препараты для обработки швов</a>
            </li>
            <li>
              <a href="#kogda-neobhodimo-obratitsya-k-vrachu">
                Когда необходимо обратиться к врачу
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Популярные вопросы</a>
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
            {/* Section: Фазы заживления */}
            <h3 className="h3">Фазы заживления послеоперационной раны</h3>
            <div className="list-base">
              <p>
                Механизм, обеспечивающий заживление раны, называется раневой процесс, который
                состоит из трёх фаз
                <sup>
                  <a href="#spisok-literatury">15</a>
                </sup>
                :
              </p>
              <ol>
                <li>
                  <strong>Фаза воспаления</strong>. На этой стадии отмечается болезненность,
                  отёчность, покраснение оперированного участка. Происходит самоочищение от
                  жизнеспособных тканей, болезнетворных микроорганизмов.
                  <br />
                  &nbsp;
                </li>
                <li>
                  <strong>Фаза регенерации</strong> (восстановления). Раневой дефект затягивается,
                  заполняется молодой тканью.
                  <br />
                  &nbsp;
                </li>
                <li>
                  <strong>Фаза преобразования</strong> (реорганизации) рубца. Рубцовая ткань
                  «созревает» и поверхность кожи полностью заживает.
                </li>
              </ol>
            </div>

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

            <picture className="img-normal">
              <source
                srcSet="/osh-2at4x-650x325.webp 1x, /osh-2at4x-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/osh-2at4x-650x325.webp"
                alt="Фазы заживления раны"
              />
            </picture>

            <p>
              Появление гноя в ране указывает на инфекционное осложнение. Это мешает обычному
              течению раневого процесса. Рана заживает медленнее. При недостаточности защитных
              сил всего организма локальная инфекция может стать причиной заражения крови.
            </p>

            <p>
              Риск инфицирования увеличивается и при зиянии раны, так как увеличивается
              вероятность обсеменённости болезнетворными микроорганизмами. Поэтому крупные,
              зияющие дефекты ушивают
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            {/* Section: Правила обработки швов */}
            <h2 className="h2" id="pravila-obrabotki-shvov">
              Правила обработки швов
            </h2>
            <p>Уход за операционной раной в домашних условиях сводится к уменьшению риска инфицирования.</p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>Чистота.</strong> Для этого перевязочный материал (бинты, пластыри,
                  марлевые салфетки) и ткани, соприкасающиеся с раневой поверхностью, должны
                  быть чистыми. Если рекомендован постельный режим, то постельное и нательное
                  бельё должны быть чистыми и своевременно меняться
                  <sup>
                    <a href="#spisok-literatury">2</a>
                  </sup>
                  .
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Антисептическая обработка.</strong> Сразу после наложения швов рана
                  обрабатывается антисептическим средством и закрывается повязкой/пластырем.
                  Необходимо следить, чтобы бинтование не нарушало микроциркуляцию кожи. Иногда
                  оставляют дренажи для удаления раневого секрета из раны. В таком случае
                  необходимо ухаживать за кожей и вокруг дренажей
                  <sup>
                    <a href="#spisok-literatury">2</a>
                  </sup>
                  .
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Своевременная замена повязок.</strong> Повязки необходимо своевременно
                  менять, следить за их состоянием. Повязки должны быть сухими и не пачкать бельё.
                  В первые 12 часов после оперативного вмешательства с целью уменьшения болевых
                  ощущений и остановки кровотечения может быть показано наложение холода на область
                  раны
                  <sup>
                    <a href="#spisok-literatury">2</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/osh-3at4x-650x150.webp 1x, /osh-3at4x-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="/osh-3at4x-650x150.webp"
                alt="Правила обработки швов"
              />
            </picture>

            {/* Section: Препараты для обработки швов */}
            <h2 className="h2" id="preparaty-dlya-obrabotki-shvov">
              Препараты для обработки швов
            </h2>
            <div className="list-base">
              <p>Лекарственные и антисептические препараты для ухода за швами выбирают в зависимости от фазы раневого процесса.</p>
              <ul>
                <li>
                  <strong>В фазу воспаления</strong> необходимо обездвижить поврежденный участок.
                  Возможно использование на ране влажно-высыхающих повязок. Препараты лучше
                  выбирать гидрофильные (способные впитывать воду), обладающие противомикробным,
                  рассасывающим, противовоспалительным и обезболивающим действием.
                </li>
                <li>
                  <strong>В фазу регенерации</strong> назначают заживляющие кремы/мази.
                </li>
                <li>
                  <strong>В фазу созревания рубца</strong> – препараты, препятствующие излишнему
                  разрастанию рубцовой ткани.
                </li>
              </ul>
            </div>

            <p>
              Для промывания и механического удаления загрязнений, раневого секрета, сгустков крови
              можно применять раствор повидон-йода (<strong>Бетадин®</strong>), 10% гипертонический
              раствор хлорида натрия, раствор фурацилина (1:5000), перекись водорода 3%, раствор
              перманганата калия («марганцовки») 0,1%, раствор хлоргексидина биглюконата 0,05%.
            </p>

            {/* Subsection: Бетадин для обработки швов */}
            <h3 className="h3">Раствор и мазь Бетадин® для обработки швов</h3>
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
                    loading="lazy"
                    width={927}
                    height={916}
                    src="/banner-betadin-927x916.webp"
                    alt="Бетадин раствор"
                  />
                </picture>
              </div>
              <p>
                С целью очищения и обеззараживания швов можно использовать раствор и мазь на основе
                повидон-йода (Бетадин®). Действующее вещество губительно для бактерий, простейших,
                вирусов, возбудителей грибковой инфекции
                <sup>
                  <a href="#spisok-literatury">11,13</a>
                </sup>
                . Макрогол, входящий в состав мазевой основы препарата, обладает осмотическим
                действием — обеспечивает отток гноя и способствует очищению раны
                <sup>
                  <a href="#spisok-literatury">12,14</a>
                </sup>
                .
              </p>
              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  Инструкция
                </a>
              </p>
            </div>

            <div className="green">
              <p>
                Исследования доказали активность мази и 10% раствора Бетадин® для уменьшения отёка,
                гнойных отделений, боли. Эффект достигался в течение 5-7 дней
                <sup>
                  <a href="#spisok-literatury">12</a>
                </sup>
                .
              </p>
            </div>

            <div className="list-base">
              <p>
                Антисептические средства линейки (<strong>Бетадин®</strong>), можно использовать на
                обширных раневых поверхностях, поскольку препарат
                <sup>
                  <a href="#spisok-literatury">11</a>
                </sup>
                :
              </p>
              <ul>
                <li>практически не всасывается в кровоток</li>
                <li>не вызывает жжения</li>
                <li>при желании легко смывается водой и стойко не окрашивают кожу.</li>
              </ul>
              <p>Возможно использовать детям со второго месяца жизни.</p>
            </div>

            {/* Subsection: Спиртовой раствор йода */}
            <h3 className="h3">Спиртовой раствор йода</h3>
            <p>
              Препарат активен в отношении грамположительной флоры и возбудителей грибковой
              инфекции. Обрабатывают раны только по краям
              <sup>
                <a href="#spisok-literatury">10</a>
              </sup>
              . Вызывает жжение при попадании на рану. Не рекомендован детям младше 12 лет
              <sup>
                <a href="#spisok-literatury">10</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-9-650x325.webp 1x, /istockphoto-1341663000-2048x2048-2-9-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/istockphoto-1341663000-2048x2048-2-9-650x325.webp"
                alt="Растворы антисептики для обработки ран"
              />
            </picture>

            {/* Subsection: Спиртовой раствор бриллиантового зелёного */}
            <h3 className="h3">Спиртовой раствор бриллиантового зелёного</h3>
            <p>
              «Зелёнка» активна только в отношении грамположительных возбудителей инфекции
              <sup>
                <a href="#spisok-literatury">9</a>
              </sup>
              .
            </p>
            <p>
              Из-за входящего в состав этилового спирта – пощипывает кожу, что ограничивает её к
              использованию на обширных раневых поверхностях. Стойко окрашивает кожу в
              характерный цвет.
            </p>

            {/* Subsection: Гипертонический раствор хлорида натрия */}
            <h3 className="h3">Гипертонический раствор хлорида натрия 10%</h3>
            <p>
              Используют наружно в виде компрессов и примочек для лечения гнойных ран, так как
              способствует оттоку гноя и обладает противомикробным действием
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            {/* Subsection: Раствор фурацилина */}
            <h3 className="h3">Раствор фурацилина</h3>
            <p>
              Обладает противомикробным действием на стафилококки, стрептококки, кишечную палочку,
              шигеллы, сальмонеллы, бациллы. Схему терапии определяют индивидуально
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              .
            </p>

            {/* Subsection: Растворы перекиси водорода и перманганата калия */}
            <h3 className="h3">Растворы перекиси водорода и перманганата калия</h3>
            <p>
              Растворы перекиси водорода 3% и 0,1% перманганата калия относятся группе окислителей.
              Под воздействием ферментов при контакте с раневой поверхностью распадаются с
              образованием атомарного кислорода, губительного для гнилостной и анаэробной микрофлоры
              <sup>
                <a href="#spisok-literatury">5,6</a>
              </sup>
              . Пена, образующаяся при промывании 3% перекисью водорода, дополнительно очищает рану
              от крови, омертвевших тканей, микробов
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>

            {/* Subsection: Раствор хлоргексидина биглюконата */}
            <h3 className="h3">Раствор хлоргексидина биглюконата</h3>
            <p>
              Раствор хлоргексидина биглюконата 0,05% уничтожает бактерии и грибковую инфекцию.
              Хорошо переносится, редко провоцирует аллергическую реакцию, но повышает чувствительность
              кожи ультрафиолетовому излучению. С осторожностью применяют у детей
              <sup>
                <a href="#spisok-literatury">7</a>
              </sup>
              .
            </p>

            {/* Subsection: Мазь на основе диоксиметилтетрагидропиримидина */}
            <h3 className="h3">Мазь на основе диоксиметилтетрагидропиримидина и хлорамфеникола</h3>
            <p>
              Средство оказывает противовоспалительное и противомикробное действия (на стафилококки,
              синегнойную и кишечную палочки). Не рекомендовано к использованию у детей младше 1 года
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
            </p>

            {/* Section: Когда необходимо обратиться к врачу */}
            <h2 className="h2" id="kogda-neobhodimo-obratitsya-k-vrachu">
              Когда необходимо обратиться к врачу
            </h2>
            <p>
              Необходимо срочно обратиться к своему лечащему врачу, если усилилась боль, увеличился
              отёк и покраснение области шва. Поднялась температура тела (без признаков ОРВИ). При
              надавливании выделяется гной или изменился характер отделяемого из дренажей.
            </p>

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
              Ответы на вопросы
            </h2>

            <h3 className="h3">Отличается ли обработка швов в зависимости от типа нити, используемой для зашивания?</h3>
            <p>Обработка и уход за областью шва не зависит от типа шовного материала.</p>

            <h3 className="h3">Нужно ли накладывать на швы повязку?</h3>
            <p>
              Обычно врачи рекомендуют накладывать повязку или закрывать область шва лейкопластырем
              до момента снятия швов. На некоторых анатомических областях, например в перианальной
              области, наложить повязку/пластырь затруднительно.
            </p>

            <h3 className="h3">Отличается ли обработка наружных и внутренних швов?</h3>
            <p>
              Внутренние швы накладывают в глубине тканей, мышц или на внутренних органах, такие швы
              остаются в теле навсегда. Используют рассасывающиеся или синтетические нити. Если края
              раны сшивались погружным швом, то обработка не будет отличаться от обычной.
            </p>

            {/* Author Section */}
            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Мошкова Елена Михайловна</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Автор статьи</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-203x203.webp 1x, /moshkova-novyj-406x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={203}
                  width={203}
                  src="/moshkova-novyj-203x203.webp"
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
                        srcSet="/kesarevo-sechenie-obrabotka-shvov-prevyu-246x166.webp 1x, /kesarevo-sechenie-obrabotka-shvov-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/kesarevo-sechenie-obrabotka-shvov-prevyu-246x166.webp"
                        alt="Кесарево сечение_ обработка швов - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Кесарево сечение: обработка швов</strong>
                    </p>
                    <p>
                      Как правильно ухаживать за послеоперационными швами, чтобы избежать неприятных
                      осложнений.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/kesarevo-sechenie/">Подробнее</a>
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
                    <p>
                      Далеко не все ссадины и порезы заживают быстро и без осложнений. Как лечить
                      инфицированные раны?
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/rany-s-infekciej/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/povidon-jod-prevyu-246x166.webp 1x, /povidon-jod-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/povidon-jod-prevyu-246x166.webp"
                        alt="Повидон-йод - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Повидон йод</strong>
                    </p>
                    <p>
                      Характеристики и свойства повидон-йода. Для чего применяется повидон-йод?
                      Инструкция по применению раствора, мази, свечей Бетадин® с повидон-йодом.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/povidon-jod/">Подробнее</a>
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
                Семенов Г.М., Петришин В.Л., Ковшова М.В. Хирургический шов. Учебное пособие, СПб,
                2001.
              </li>
              <li id="literature-1">
                Ларичев А.Б. Основы ухода за больными после хирургической операции, методические
                рекомендации, 2013, ЯГМА.
              </li>
              <li id="literature-2">Справочник «Видаль», инструкция по применению натрия хлорид р-р 10%.</li>
              <li id="literature-3">
                Справочник «Видаль», инструкция по применению препарата Фурацилин.
              </li>
              <li id="literature-4">
                Реестр лекарственных средств, официальная инструкция раствора 3% раствора перекиси
                водорода.
              </li>
              <li id="literature-5">
                Реестр лекарственных средств, официальная инструкция раствора перманганат калия.
              </li>
              <li id="literature-6">
                Реестр лекарственных средств, официальная инструкция препарата хлоргексидин
                биглюконат.
              </li>
              <li id="literature-7">
                Реестр лекарственных средств, официальная инструкция препарата Левомеколь®.
              </li>
              <li id="literature-8">
                Реестр лекарственных средств, официальная инструкция к раствору бриллиантовому
                зеленому.
              </li>
              <li id="literature-9">
                Реестр лекарственных средств, официальная инструкция к спиртовому раствору йода.
              </li>
              <li id="literature-10">
                Инструкция по медицинскому применению Бетадин раствор. РН: П№015282/03.
              </li>
              <li id="literature-11">
                Михальский В.В., Богданов А.Е., Жилина С.В., Привиденцев А.И., Аникин А.И.,
                Ульянина А.А. РМЖ №29 от 23.12.2010 «Применение препарата Бетадин® в лечении
                инфицированных ран».
              </li>
              <li id="literature-12">
                Реестр лекарственных средств, официальная инструкция к действующему веществу
                повидон-йод.
              </li>
              <li id="literature-13">
                Инструкция по медицинскому применению Бетадин мазь. РУ П N015282/02.
              </li>
              <li id="literature-14">
                Раны и раневой процесс. Учебно-методическое пособие для интернов, ординаторов и
                практикующих врачей. 2016 год, ГБОУ ВОП КГМУ Минздрава России.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
