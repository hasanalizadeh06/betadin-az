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

export default function VaginalnyeVydeleniya() {
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

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
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
                  <Link property="item" typeof="WebPage" href="https://betadin.ru">
                    <span property="name">Главная</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/">
                    <span property="name">Выделения из влагалища</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Выделения из влагалища</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Выделения из влагалища: причины и лечение</h1>
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
                <h2 className="page-header-subtitle">Причины появления белей</h2>
                <div className="page-header-body">
                  <p>
                    Выделения из влагалища (или бели) — это результат деятельности сразу нескольких половых желез.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#priznaki-patologicheskih-vydeleniy-v-intimnoy-zone">Связанные заболевания</a>
                  </li>
                  <li>
                    <a href="#lechenie-patologicheskih-vydeleniy">Лечение</a>
                  </li>
                  <li>
                    <a href="#betadin-svechi-pri-lechenii-zabolevaniy-s-patologicheskimi-vydeleniyami">
                      Свечи
                    </a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/958/3202ae85667e000bebfd249125138becb51c9d4e418a35967dc62ea40c238113-730x615/frame-655-6-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/958/3202ae85667e000bebfd249125138becb51c9d4e418a35967dc62ea40c238113-730x615/frame-655-6-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/images/encyclopedia/vydeleniya-header.jpg"
                      alt="Вагинальные выделения"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}`}>
              <ul>
                <li>
                  <a href="#kakie-byvayut-vydeleniya">Какие бывают выделения?</a>
                </li>
                <li>
                  <a href="#diagnostika">Диагностика</a>
                </li>
                <li>
                  <a href="#lechenie-patologicheskih-vydeleniy">Лечение патологических выделений</a>
                </li>
                <li>
                  <a href="#profilaktika-patologicheskih-vydeleniy">Профилактика патологических выделений</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
                </li>
                <li>
                  <a href="#literatura">Список литературы</a>
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
              <a href="#kakie-byvayut-vydeleniya">Какие бывают выделения?</a>
            </li>
            <li>
              <a href="#diagnostika">Диагностика</a>
            </li>
            <li>
              <a href="#lechenie-patologicheskih-vydeleniy">Лечение патологических выделений</a>
            </li>
            <li>
              <a href="#profilaktika-patologicheskih-vydeleniy">Профилактика патологических выделений</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="#literatura">Список литературы</a>
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
              Как понять, какое количество выделений из влагалища является нормальным, а какое нет? Как должны
              выглядеть нормальные выделения? И есть ли признаки, по которым женщина сразу может понять, что ей пора
              записаться на прием к гинекологу?
            </p>

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

            <p>
              Начиная с периода менархе (приход первой менструации) и заканчивая периодом постменопаузы, бели в норме
              присутствуют у всех женщин
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              .
            </p>

            <p>
              Влагалищные выделения — способ защиты от инфекций путем увлажнения, а также «очистки» влагалища от
              микробов, старых клеток и слизи. Характер выделений зависит как от внутренних, так и от внешних
              факторов: возраста, фазы менструального цикла и колебания уровня половых гормонов, беременности,
              менопаузы, сексуальной активности, приема антибиотиков или гормональных препаратов, наличия хронических
              заболеваний и стрессов
              <sup>
                <a href="#literatura-0">1,2</a>
              </sup>
              .
            </p>

            <p>
              Известно, что основные признаки заболевания во влагалище начинаются тогда, когда патогенные
              микроорганизмы поражают его эпителиальные клетки. Одним из защитных механизмов со стороны влагалища
              является образование так называемого физического барьера на поверхности эпителиальных клеток – слоя
              слизи и выделений, богатых иммуноглобулинами — защитными белками, которые продуцируют иммунные клетки и
              другие компоненты
              <sup>
                <a href="#literatura-0">1-3</a>
              </sup>
              .
            </p>

            <h2 id="kakie-byvayut-vydeleniya">Виды выделений из влагалища</h2>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1138/00ee12af41e813bafbc879a4e56b79f1b9007e18157f6610c522ec1b887a8dc8-650x0/medical-kit-and-bandaid-509398-488-1-16-650x175.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1138/00ee12af41e813bafbc879a4e56b79f1b9007e18157f6610c522ec1b887a8dc8-650x0/medical-kit-and-bandaid-509398-488-1-16-1300x350.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={175}
                width={650}
                src="/images/encyclopedia/discharge-color.png"
                alt="цвет вагинальных выделений"
              />
            </picture>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1139/c3c37548bbf96b17d267308a2aa76036d9645861f8a22dc02ffa79eb30c46590-650x0/medical-kit-and-bandaid-509398-488-1-17-650x175.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1139/c3c37548bbf96b17d267308a2aa76036d9645861f8a22dc02ffa79eb30c46590-650x0/medical-kit-and-bandaid-509398-488-1-17-1300x350.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={175}
                width={650}
                src="/images/encyclopedia/discharge-consistency.png"
                alt="Консистенция вагинальных выделений"
              />
            </picture>

            <h3 id="normalnye-vaginalnye-vydeleniya">Нормальные вагинальные выделения</h3>
            <p>Существует ряд признаков, оценив которые, женщина может быть спокойна относительно ее выделений, они являются нормальными.</p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>Количество выделений:</strong> в норме незначительное. Почти на протяжении всего цикла объем
                  выделений приблизительно соответствует 1 ч.л. (до 5 мл). В середине цикла количество выделений может
                  быть увеличено, но это носит кратковременный характер.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Цвет выделений:</strong> прозрачный, полупрозрачный в I фазе цикла или беловатый (иногда с
                  легким желтоватым оттенком) во II фазе цикла ближе к менструации.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Консистенция:</strong> в норме выделения однородные, без каких-либо примесей и компонентов
                  (нет крупных комочков, прожилок или следов крови). Чаще всего они слизистые, в середине цикла (в
                  период овуляции) слизь может приобретать свойства тягучести (похожа на сырой яичный белок). К концу
                  цикла после овуляции выделения могут приобретать более густой характер и по консистенции похожи на
                  крем.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Запах:</strong> нормальные бели имеют слабокислый запах или не имеют запаха совсем
                  <sup>
                    <a href="#literatura-0">1,4</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <div className="green">
              <p>
                Характер выделений, как правило, меняется на протяжении менструального цикла, но при отсутствии
                заболеваний они никогда не теряют свойств, характерных для нормальных выделений.
              </p>
            </div>

            <h3 id="priznaki-patologicheskih-vydeleniy-v-intimnoy-zone">
              Признаки патологических выделений в интимной зоне
            </h3>

            <div className="list-base">
              <p>Любые выделения из влагалища всегда стоит соотносить с эталоном нормальных выделений. Это удобно как для врача, так и для самой женщины.</p>
              <p>
                Для патологических выделений, которые бывают при различных гинекологических заболеваниях,
                характерны следующие признаки:
              </p>
              <ul>
                <li>
                  <strong>Количество выделений</strong>: при ряде гинекологических заболеваний выделения часто
                  становятся обильными, их количество увеличивается и не меняется на протяжении менструального цикла
                  (более 5 мл). Иногда выделений становится так много, что приходится несколько раз менять ежедневные
                  прокладки. При этом женщину преследует чувство постоянной влажности в области половых органов, что
                  приносит существенный дискомфорт.
                </li>
                <li>
                  <strong>
                    Существуют инфекции, например хламидиоз, где количество выделений может изменяться на протяжении
                    цикла
                  </strong>
                  . В таком случае следует обращать внимание на дополнительные признаки: болезненность при
                  мочеиспускании, дискомфорт или боль при половых контактах, болезненные ощущения внизу живота.
                </li>
                <li>
                  <strong>Цвет выделений</strong>: цвет патологических белей может быть различным. Бели с присутствием
                  в них крови имеют яркий алый, темный или коричневый цвет. Если такие выделения появляются вне
                  запланированных дней менструации, то это может быть связано с гинекологическим заболеванием
                  (эндометриоз, полип в матке или в шейке матки, кистозные образования на яичниках). Другими
                  причинами могут быть прием гормональных таблеток (в том числе контрацептивов) или постановка
                  внутриматочной спирали, как правило, это носит временный характер.
                </li>
                <li>
                  Желтый или зеленый цвет вагинальных выделений может быть связан с половыми инфекциями (ИППП). Для{' '}
                  <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/">бактериального вагиноза</a> —
                  инфекционное заболевание влагалища — характерен грязно-серый цвет белей. Выделения с белыми
                  крупными комочками, напоминающие творог, характерны для молочницы.
                </li>
              </ul>
            </div>

            <div className="green">
              <p>Появление кровянистых выделений вне менструации всегда требует консультации специалиста и дополнительного обследования.</p>
            </div>

            <div className="list-base">
              <ul>
                <li>
                  <strong>Консистенция</strong>: патологические выделения приобретают различную консистенцию:
                  водянистую, густую кремовую, «творожистую».
                </li>
                <li>
                  <strong>Запах</strong>: выделения при различных заболеваниях, как правило, имеют неприятный,
                  иногда резкий запах
                  <sup>
                    <a href="#literatura-0">1,4,5</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <div className="green">
              <p>
                Дополнительными признаками заболевания наряду с патологическими выделениями могут быть:{' '}
                <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/">зуд</a>, ощущение{' '}
                <a href="https://betadin.ru/encyclopedia/zhzhenie-vo-vlagalishche/">жжения</a>, болезненность при
                мочеиспускании или при половых контактах, покраснение, отек в области наружных половых органов.
              </p>
            </div>

            <h2 id="diagnostika">Диагностика причины вагинальных выделений</h2>
            <p>
              При появлении патологических выделений каждая женщина должна обязательно записаться на прием к
              врачу-гинекологу. Помимо субъективных признаков, которые может оценить сама женщина, существуют также
              объективные признаки заболевания, которые выявляет доктор в процессе осмотра, а также результаты
              обязательной лабораторной диагностики, подтверждающие конкретный диагноз.
            </p>

            <div className="green">
              <p>
                Диагностика заболеваний влагалища начинается с оценки жалоб на приеме у врача. Уже по характерным
                жалобам врач может заподозрить то или иное заболевание.
              </p>
            </div>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Второй этап диагностики</strong>
                </p>
                <p>
                  Осмотр гинекологом на кресле. Врач может оценить степень воспаления и характер выделений, если они
                  имеются. Также во время осмотра врач производит забор отделяемого из влагалища для дальнейшей
                  лабораторной диагностики.
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Третий этап диагностики</strong>
                </p>
                <p>
                  Лабораторное исследование влагалищных выделений. С помощью микроскопа определяют количество клеток
                  и характер микрофлоры влагалища. Могут проводиться дополнительные лабораторные методы исследований
                  для подтверждения точного диагноза.
                </p>
              </div>
            </div>

            <p>
              Дополнительно по назначению врача в случае патологических выделений могут быть рекомендованы
              инструментальные методы обследования – кольпоскопия (осмотр шейки матки и влагалища под увеличением с
              помощью кольпоскопа) и УЗИ (ультразвуковое исследование) органов малого таза
              <sup>
                <a href="#literatura-5">5,6</a>
              </sup>
              .
            </p>

            <h2 id="lechenie-patologicheskih-vydeleniy">Лечение патологических выделений из влагалища</h2>
            <p>Жалобы на влагалищные выделения являются самыми частыми на приёме у гинеколога.</p>

            <div className="green">
              <p>Конкретные препараты для лечения патологических выделений назначаются после постановки окончательного диагноза.</p>
              <p>
                Нередко наблюдается сочетание возбудителей различных заболеваний, вызывающих патологические выделения
                из влагалища
                <sup>
                  <a href="#literatura-6">1,6,7</a>
                </sup>
                .
              </p>
            </div>

            <p>
              Препараты для лечения патологических выделений существуют в различных формах: для приема внутрь
              (капсулы или таблетки) или местные (
              <a href="https://betadin.ru/encyclopedia/svechi-ot-vaginita/" title="Свечи от вагинита">
                влагалищные свечи
              </a>
              или таблетки, гели, кремы, растворы).
            </p>

            <p>
              Наиболее часто для лечения патологических вагинальных выделений назначают местные средства, которые
              вводятся во влагалище. При использовании местных препаратов лекарство поступает непосредственно в очаг
              воспаления.
            </p>

            <p>
              С учетом того, что выделения из влагалища нередко бывают признаком сочетания нескольких заболеваний
              (например, сочетание бактериального вагиноза и молочницы, вызванной грибами), предпочтительнее
              рассматривать препараты с широким спектром действия, то есть тем, которые способны вызвать гибель сразу
              нескольких видов микроорганизмов.
            </p>

            <h3 id="betadin-svechi-pri-lechenii-zabolevaniy-s-patologicheskimi-vydeleniyami">
              Бетадин® Свечи при лечении заболеваний с патологическими выделениями
            </h3>

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
                    src="/images/products/betadin-svechi.jpg"
                    alt="Бетадин"
                  />
                </picture>
              </div>

              <p>
                <strong>Бетадин®</strong> является средством, которое воздействует на широкий круг микроорганизмов:
                грибы (причина развития молочницы), грамм-положительные и грамм-отрицательные бактерии (причина
                воспаления во влагалище) и ряд других микроорганизмов.
              </p>

              <p>
                При патологических выделениях из влагалища применяют Бетадин<sup>®</sup> в виде вагинальных свечей.
                При введении одной свечи из основного действующего вещества (
                <a title="Повидон йод" href="https://betadin.ru/encyclopedia/povidon-jod/">
                  повидон-йод
                </a>
                ) высвобождается от 18 до 24 мг активного{' '}
                <a title="Йод" href="https://betadin.ru/encyclopedia/jod/">
                  йода
                </a>
                , который обладает сильным действием в отношении патогенных микробов, способствует их уничтожению.
                Большинство патогенов гибнут в течение 1 минуты после воздействия на них йода
                <sup>
                  <a href="#literatura-7">8</a>
                </sup>
                .
              </p>

              <p>
                Показаниями для применения свечей Бетадин<sup>®</sup> являются острый или хронический вагинит,
                кандидоз, инфекция, вызванная Trichomonas vaginalis (трихомониаз). Инфекции влагалища после терапии
                антибиотиками или стероидными препаратами. Еще одним показанием является профилактика различных
                инфекций при хирургических вмешательствах в гинекологии.
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noreferrer"
                  href="/betadin-svechi-instruktsiya/"
                >
                  Инструкция
                </a>
              </p>
            </div>

            <div className="green">
              <p>
                Следует помнить, что <strong>для применения</strong> <strong>Бетадина®</strong>, содержащего
                соединение йода, есть ряд ограничений: период вынашивания ребенка и период грудного вскармливания,
                наличие каких-либо нарушений функции щитовидной железы, а также повышенная чувствительность к
                компонентам препарата.
              </p>
              <p>
                При остром вагините, как правило, назначают по 1 свече Бетадин<sup>®</sup> на ночь во влагалище в
                течение 7 дней. При более тяжелых ситуациях лечение можно продолжить еще на 7 дней
                <sup>
                  <a href="#literatura-7">8</a>
                </sup>
                .
              </p>
            </div>

            <h2 id="profilaktika-patologicheskih-vydeleniy">Профилактика патологических выделений из влагалища</h2>
            <div className="list-base">
              <p>
                Множество инфекционно-воспалительных заболеваний сопровождаются патологическими выделениями и
                нарушением микрофлоры влагалища. Важно соблюдать следующие правила профилактики:
              </p>
              <ul>
                <li>Отказаться от случайных половых контактов и частой смены половых партнеров</li>
                <li>Соблюдать правильную интимную гигиену</li>
                <li>
                  Ограничить бесконтрольное применение антибиотиков, глюкокортикоидов и гормональных препаратов без
                  имеющихся на то показаний
                </li>
                <li>Не носить тесную синтетическую одежду</li>
                <li>
                  Своевременно лечить обострения хронических заболеваний (например, контролировать уровень глюкозы в
                  крови при сахарном диабете)
                </li>
                <li>Своевременно лечить любую гинекологическую патологию</li>
                <li>Регулярно посещать профилактические осмотры врачом-гинекологом</li>
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
                  src="/images/decorative/question.jpg"
                  alt="Декоративные элементы"
                />
              </picture>
            </div>

            <h2 id="chasto-zadavaemye-voprosy">Часто задаваемые вопросы</h2>

            <h3>Нужно ли лечить полового партнера, если у женщины появились патологические бели?</h3>
            <p>
              При появлении любых патологических выделений у женщины, необходимо обратиться на прием к врачу-гинекологу.
              В зависимости от того, какое конкретно заболевание выявляется в ходе обследования женщины, для ее
              партнера рекомендуется получение консультации врача-андролога и проведение необходимого обследования.
              Лечение обоих половых партнеров происходит не во всех случаях появления патологических выделений у
              женщины. Это решается индивидуально в зависимости от клинической ситуации.
            </p>

            <h3>Могут ли кровянистые выделения появляться в середине цикла? И повторяться почти каждый месяц?</h3>
            <p>
              Появление кровянистых выделений в середине цикла иногда является нормальным признаком свершившейся
              овуляции (выход яйцеклетки из яичника и ее готовность к оплодотворению). При этом женщина, как
              правило, ощущает и другие признаки овуляции – более обильные слизистые выделения (похожие на белок
              сырого яйца), незначительные боли внизу живота (иногда только с одной стороны), увеличение сексуального
              желания. Сами выделения при этом не обильны, скорее это прожилки крови или незначительные мажущие
              выделения, которые не сопровождаются патологическими признаками, не имеют резкого запаха и носят
              кратковременный характер (буквально 1, максимум 2 дня). В любом случае появление кровянистых выделений
              из влагалища вне менструации требует очного посещения врача.
            </p>

            <h3>Кровянистые выделения только после половых контактов о чем могут свидетельствовать? Норма ли это?</h3>
            <p>
              Появление крови может наблюдаться после первого в жизни женщины полового акта. Если речь идет о другой
              ситуации, то такие кровянистые выделения не являются нормой. Нередко это связано с воспалительными
              процессами, в частности с цервицитом (воспаление в шейке матки). Женщина с подобными симптомами должна
              обратиться к врачу.
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
                  src="/images/authors/molchanov.png"
                  alt="Молчанов Олег Леонидович"
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
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-0x166/bakterialnyj-vaginoz-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-0x166/bakterialnyj-vaginoz-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/bakterialnyj-vaginoz.png"
                        alt="Бактериальный вагиноз - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Бактериальный вагиноз</strong>
                    </p>
                    <p>
                      Почти в 90% случаев патологических выделений у женщин диагностируется бактериальный вагиноз.
                      Почему возникает это заболевание, и как его лечить?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide swiper-slide-next">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/svechi-ot-vaginita.png"
                        alt="Свечи от вагинита - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Свечи от вагинита</strong>
                    </p>
                    <p>
                      Лечение вагинита местными препаратами в форме вагинальных свечей. Как выбрать свечи от
                      воспаления во влагалище?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/svechi-ot-vaginita/">Подробнее</a>
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
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/povidon-jod-prevyu-620x420.webp"
                        alt="Повидон-йод - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Повидон йод</strong>
                    </p>
                    <p>
                      Характеристики и свойства повидон-йода. Для чего применяется повидон-йод? Инструкция по
                      применению раствора, мази, свечей Бетадин® с повидон-йодом.
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/povidon-jod/">Подробнее</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="literatura">Список литературы</h2>
            <ol className="literature">
              <li id="literatura-0">
                Клинические рекомендации по диагностике и лечению заболеваний, сопровождающихся патологическими
                выделениями из половых путей женщин /РОАГ/ под ред.Прилепской В. Н., Кира Е. Ф. – 2019 г.
              </li>
              <li id="literatura-1">
                Ледина А. В. Вагинальные выделения: причины, алгоритм ведения пациенток и современные подходы к
                лечению и профилактике / АКУШЕРСТВО И ГИНЕКОЛОГИЯ: новости, мнения, обучение Том 7, № 3, 2019, с
                107-111.
              </li>
              <li id="literatura-2">
                Powell AM, Nyirjesy P. New Perspectives on the Normal Vagina and Noninfectious Causes of Discharge.
                Clin Obstet Gynecol. 2015 Sep;58(3):453-63. doi: 10.1097/GRF.0000000000000124. PMID: 26125958.
              </li>
              <li id="literatura-3">
                Hillier SL, Austin M, Macio I, Meyn LA, Badway D, Beigi R. Diagnosis and Treatment of Vaginal Discharge
                Syndromes in Community Practice Settings. Clin Infect Dis. 2021 May 4;72(9):1538-1543. doi:
                10.1093/cid/ciaa260. PMID: 32350529; PMCID: PMC8248297.
              </li>
              <li id="literatura-4">
                Buchta V. Vaginal microbiome. Ceska Gynekol. 2018 Winter;83(5):371-379. English. PMID: 30848142.
              </li>
              <li id="literatura-5">
                Chee WJY, Chew SY, Than LTL. Vaginal microbiota and the potential of Lactobacillus derivatives in
                maintaining vaginal health. Microb Cell Fact. 2020 Nov 7;19(1):203. doi: 10.1186/s12934-020-01464-4.
                PMID: 33160356; PMCID: PMC7648308.
              </li>
              <li id="literatura-6">
                Reiter S, Kellogg Spadt S. Bacterial vaginosis: a primer for clinicians. Postgrad Med. 2019
                Jan;131(1):8-18. doi: 10.1080/00325481.2019.1546534. Epub 2018 Nov 30. PMID: 30424704.
              </li>
              <li id="literatura-7">
                Бетадин® суппозитории. Инструкции по медицинскому применению (РН: П№015282/01).
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
