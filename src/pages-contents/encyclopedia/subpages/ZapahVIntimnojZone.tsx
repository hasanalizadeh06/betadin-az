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

export default function ZapahVIntimnojZone() {
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
                    <span property="name">Запах в интимной зоне</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Запах в интимной зоне</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Неприятный запах в интимной зоне: причины и устранение</h1>
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
                <h2 className="page-header-subtitle">
                  Причины появления запаха в интимной зоне
                </h2>
                <div className="page-header-body">
                  <p>
                    Влагалище представляет собой уникальную биоэкосистему, в которой сосуществует и
                    взаимодействует целый ряд микроорганизмов.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#kakie-vidy-zapaha-mogut-prisutstvovat-vo-vlagalishche-i-o-chem-oni-svidetelstvuyut">
                      Виды запахов
                    </a>
                  </li>
                  <li>
                    <a href="#chasto-zadavaemye-voprosy">Вопросы</a>
                  </li>
                  <li>
                    <a href="#diagnostika">Диагностика</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1648/ed9566ff278bde1ceff9e5c88d32176c0c136ffac222e1735cfc489faf79c248-730x615/kartinka-banner-6-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1648/ed9566ff278bde1ceff9e5c88d32176c0c136ffac222e1735cfc489faf79c248-730x615/kartinka-banner-6-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/images/encyclopedia/zapah-header.jpg"
                      alt="Запах в интимной зоне"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}`}>
              <ul>
                <li>
                  <a href="#kakie-vidy-zapaha-mogut-prisutstvovat-vo-vlagalishche-i-o-chem-oni-svidetelstvuyut">
                    Какие виды запаха могут присутствовать во влагалище, и о чем они свидетельствуют
                  </a>
                </li>
                <li>
                  <a href="#diagnostika">Диагностика</a>
                </li>
                <li>
                  <a href="#lechenie-ginekologicheskih-zabolevaniy-soprovozhdayushchihsya-poyavleniem-nepriyatnogo-zapaha">
                    Лечение гинекологических заболеваний, сопровождающихся появлением неприятного запаха
                  </a>
                </li>
                <li>
                  <a href="#profilaktika">Профилактика</a>
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
              <a href="#kakie-vidy-zapaha-mogut-prisutstvovat-vo-vlagalishche-i-o-chem-oni-svidetelstvuyut">
                Какие виды запаха могут присутствовать во влагалище, и о чем они свидетельствуют
              </a>
            </li>
            <li>
              <a href="#diagnostika">Диагностика</a>
            </li>
            <li>
              <a href="#lechenie-ginekologicheskih-zabolevaniy-soprovozhdayushchihsya-poyavleniem-nepriyatnogo-zapaha">
                Лечение гинекологических заболеваний, сопровождающихся появлением неприятного запаха
              </a>
            </li>
            <li>
              <a href="#profilaktika">Профилактика</a>
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
              В норме основными представителями микробиоценоза влагалища являются молочнокислые бактерии
              (Lactobacillus), которые преобладают над всеми остальными. Часть представителей микробного сообщества
              являются условно-патогенными, которые присутствуют во влагалище в незначительном количестве. При этом
              рост и количество условно-патогенных микроорганизмов контролирует «полезная» флора. Лактобациллы
              продуцируют молочную кислоту, благодаря чему во влагалище в норме поддерживается кислая среда (pH
              3,8–4,4). С одной стороны, это благоприятные условия для размножения лактобактерий, с другой стороны —
              большинство патогенных микробов не могут в них жить и размножаться
              <sup>
                <a href="#literatura-0">1-3</a>
              </sup>
              .
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

            <div className="green">
              <p>
                В норме при правильном соотношении микроорганизмов во влагалище с преобладанием «полезных»
                лактобактерий и достаточной продукции молочной кислоты запах во влагалище либо слабокислый, либо
                отсутствует.
              </p>
            </div>

            <p>
              При различных неблагоприятных условиях в организме соотношение микроорганизмов в составе микробиоценоза
              интимной зоны может меняться. При этом нарушается естественный здоровый баланс, снижается количество
              лактобактерий, и в большом количестве начинается рост условно-патогенных микробов, с чем бывает связано
              появление того или иного неприятного запаха.
            </p>

            <div className="green">
              <p>
                Неприятный запах— это своеобразный индикатор наличия заболевания или нарушения микрофлоры в интимной
                зоне.
              </p>
            </div>

            <h2 id="kakie-vidy-zapaha-mogut-prisutstvovat-vo-vlagalishche-i-o-chem-oni-svidetelstvuyut">
              Какие виды запаха могут присутствовать во влагалище, и о чем они свидетельствуют
            </h2>

            <h3>Резкий кислый запах</h3>
            <p>
              Резкий кислый запах в интимной зоне (запах кефира, скисшегося молока) чаще связан с развитием
              вульвовагинального кандидоза («
              <a href="https://betadin.ru/encyclopedia/svechi-ot-molochnicy/" title="Свечи от молочницы">
                молочницы
              </a>
              »). Другими признаками данного заболевания являются появление «творожистых»{' '}
              <a href="https://betadin.ru/encyclopedia/vaginalnye-vydeleniya/" title="Вагинальные выделения">
                выделений
              </a>{' '}
              из влагалища,{' '}
              <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/" title="Зуд в интимной зоне">
                зуд
              </a>{' '}
              и{' '}
              <a href="https://betadin.ru/encyclopedia/zhzhenie-vo-vlagalishche/" title="Жжение во влагалище">
                жжение
              </a>{' '}
              в области наружных половых органов. Кандидоз связан с активным размножением грибов рода Candida.
            </p>

            <div className="green">
              <p>
                Характер выделений, как правило, меняется на протяжении менструального цикла, но при отсутствии
                заболеваний они никогда не теряют свойств, характерных для нормальных выделений.
              </p>
            </div>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1649/36fc01e3902f829644102ef23a39050658058a97f1ef6ed877adaeedc441bab5-650x0/medical-kit-and-bandaid-509398-488-1-35-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1649/36fc01e3902f829644102ef23a39050658058a97f1ef6ed877adaeedc441bab5-650x0/medical-kit-and-bandaid-509398-488-1-35-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/acrid-smell.png"
                alt="Резкий кислый запах инт.зоны"
              />
            </picture>

            <h3>Запах рыбы</h3>
            <p>
              <strong>Рыбный запах</strong> (запах тухлой рыбы), а также <strong>запах хлорки</strong> связан с
              инфекционным невоспалительным процессом, при котором во влагалище происходит обильный рост, как
              правило, разных видов микроорганизмов. В данной ситуации гинеколог часто диагностирует у женщины{' '}
              <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/" title="Бактериальный вагиноз">
                бактериальный вагиноз
              </a>
              . Это заболевание, в основе которого лежит нарушение нормальной микрофлоры и размножение
              условно-патогенных бактерий (Gardnerella vaginalis, Atopobium vaginae и ряд других). При бактериальном
              вагинозе наблюдаются обильные или умеренные серовато-белые выделения из влагалища.
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1650/dc0552fbc65bcc5e493be1cf88e93478f0be1378f40b26d94c3ccc1e7157095b-650x0/medical-kit-and-bandaid-509398-488-1-36-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1650/dc0552fbc65bcc5e493be1cf88e93478f0be1378f40b26d94c3ccc1e7157095b-650x0/medical-kit-and-bandaid-509398-488-1-36-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/fish-smell.png"
                alt="Запах рыбы инт. зоны"
              />
            </picture>

            <h3>Специфический гнойный запах</h3>
            <p>
              <strong>Специфический «гнойный» неприятный запах</strong> характерен для воспалительных заболеваний:
              воспаление во влагалище (кольпит), воспаление в шейке матки (цервицит), воспалительные процессы в матке
              (эндометрит) и в маточных трубах и яичниках (сальпингоофорит). Характерными признаками воспаления
              являются обильные гноевидные выделения из влагалища, болезненные ощущения различной интенсивности внизу
              живота, иногда повышение температуры тела. Возбудителями воспалительных заболеваний органов малого таза
              являются различные патогенные и условно-патогенные микроорганизмы. Среди возбудителей инфекций,
              передаваемых половым путем (ИППП), часто встречаются гонококки, хламидии, трихомонады.
            </p>

            <h3>Запах чеснока или лука</h3>
            <p>
              <strong>Запах чеснока или лука</strong> может свидетельствовать о наличии воспалительных заболеваний
              (кольпит, цервицит), а также может быть связан с нарушением микрофлоры влагалища, снижением количества
              лактобактерий и преобладанием смешанной флоры, а также свидетельствовать об иммунодефиците и нарушении
              обмена веществ в организме.
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1651/584407f57150dc1435881dac1ea683e6cf078c62cace548c4d77b3f346a0364a-650x0/medical-kit-and-bandaid-509398-488-1-37-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1651/584407f57150dc1435881dac1ea683e6cf078c62cace548c4d77b3f346a0364a-650x0/medical-kit-and-bandaid-509398-488-1-37-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/garlic-onion-smell.png"
                alt="Запах чеснока или лука инт. зоны"
              />
            </picture>

            <h2 id="diagnostika">Диагностика</h2>
            <p>
              Основой диагностики при наличии неприятного запаха в интимной зоне является выявление конкретных
              микроорганизмов, которые привели к появлению данного симптома. Существуют различные лабораторные методы
              диагностики, с помощью которых выявляют наличие определенных патогенов.
            </p>
            <p>
              При появлении неприятного запаха в интимной зоне женщине необходимо обратиться к врачу-гинекологу.
              Специалист сможет правильно назначить алгоритм обследования.
            </p>

            <div className="list-base">
              <p>
                <strong>Стандартная схема диагностики включает:</strong>
              </p>
              <ul>
                <li>Беседу с врачом на приёме о беспокоящих симптомах</li>
                <li>
                  Осмотр на гинекологическом кресле, а также забор отделяемого из мочеполовых органов для
                  последующей диагностики
                </li>
                <li>
                  Лабораторное исследование материала (микроскопическое исследование мазков из влагалища, методы ПЦР
                  (полимеразной цепной реакции) для определения ДНК возбудителя, посевы микроорганизмов из
                  вагинального мазка на специальные питательные среды (для идентификации роста определенных бактерий)
                  и прочие исследования)
                </li>
              </ul>
            </div>

            <h2 id="lechenie-ginekologicheskih-zabolevaniy-soprovozhdayushchihsya-poyavleniem-nepriyatnogo-zapaha">
              Лечение гинекологических заболеваний, сопровождающихся появлением неприятного запаха
            </h2>
            <p>
              Неприятный запах в интимной зоне не является самостоятельным заболеванием, это симптом, который
              свидетельствует о наличии патологического процесса в половых органах. Поэтому, чтобы устранить
              неприятный запах, необходимо определить и лечить причину появления данного симптома.
            </p>
            <p>
              Как правило, неприятный запах появляется при активном росте и размножении определённого вида бактерий,
              поэтому основная цель терапии – их уничтожение или снижение количества патогенов до нормального уровня.
            </p>
            <p>Выбор препарата будет зависеть от вида микроорганизма, который вызвал заболевание, сопровождающееся неприятным запахом.</p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>При вульвовагинальном кандидозе, вызываемом грибами рода Candida</strong>, назначают
                  противогрибковые препараты, а также возможно использование некоторых антисептиков, которые обладают
                  противогрибковой активностью (например, Бетадин<sup>®</sup>).
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>При инфекциях, передаваемых половым путем (ИППП)</strong>, спровоцированных вирусами,
                  бактериями или простейшими, как правило, назначаются системные антибиотики широкого спектра действия
                  для приема внутрь в сочетании с местными антибактериальными или антисептическими средствами во
                  влагалище.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Бактериальный вагиноз – полимикробное заболевание</strong>. Его лечат в большинстве случаев
                  назначением местных вагинальных препаратов, способных уменьшить количество условно-патогенной флоры.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>При сочетаниях тех или иных микроорганизмов</strong>, вызывающих неприятный запах в интимной
                  зоне, выбор средства зависит от спектра его действия. Предпочтение отдают препаратам, обладающим
                  широким спектром действия с хорошим профилем безопасности.
                </p>
              </div>
            </div>

            <h3 id="betadin-dlya-lecheniya-zapaha-vo-vlagalishche">
              Свечи Бетадин® для лечения заболеваний, вызывающих неприятный запах в интимной зоне
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
                Одним из широко используемых препаратов для лечения и профилактики в гинекологии является Бетадин
                <sup>®</sup>, который выпускается в виде вагинальных свечей. Активным веществом Бетадин<sup>®</sup>{' '}
                является повидон-йод — это комплекс йода и повидона, который выполняет роль «носителя» и депо.
              </p>

              <p>
                При действии препарата в зоне воспаления из депо постепенно высвобождается активный йод, который
                обладает широким спектром действия против грамм-положительных и грамм-отрицательных бактерий, вирусов,
                грибов и некоторых простейших. Благодаря полимерной молекуле йод способен проникать на глубину около
                1 мм в воспаленные ткани, при этом в последующем не нарушая процессы их восстановления
                <sup>
                  <a href="#literatura-7">9</a>
                </sup>
                .
              </p>

              <p>
                В исследованиях продемонстрирован значимый эффект свободного йода против вирусов и бактерий даже в
                небольшой концентрации, превышающая таковую у других антисептиков. Также выявлены хорошая
                переносимость и высокий профиль безопасности препарата
                <sup>
                  <a href="#literatura-8">9</a>
                </sup>
                .
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

            <div className="list-base">
              <p>
                <strong>Преимуществами препарата Бетадин® можно считать:</strong>
              </p>
              <ul>
                <li>Высокую активность и широкий спектр действия (может применяться при воспалении во влагалище разнообразной этиологии)</li>
                <li>Сохранение активности в различных физико-химических средах в очаге воспаления (кровь, гной и прочие)</li>
                <li>Отсутствие зарегистрированных случаев «привыкания» и снижения чувствительности к действию препарата</li>
                <li>Создание благоприятных условий для восстановления нормальной вагинальной микрофлоры после лечения за счет нормализации кислотности среды влагалища</li>
                <li>
                  Широкую доступность (наличие препарата и невысокая стоимость)
                  <sup>
                    <a href="#literatura-7">8,9,10</a>
                  </sup>
                </li>
              </ul>
            </div>

            <p>
              Препарат Бетадин<sup>®</sup> выпускается в виде вагинальных свечей, мази и раствора для наружного
              применения.
            </p>

            <p>
              Максимальный эффект от воздействия на микроорганизмы наступает в течение первых 30 секунд, а уже через
              1 минуту наблюдается гибель большинства микробов
              <sup>
                <a href="#literatura-10">11</a>
              </sup>
              . Показаниями для применения свечей Бетадин<sup>®</sup> являются острые и хронические воспалительные
              заболевания влагалища, смешанные неспецифические инфекции, кандидоз влагалища, а также трихомониаз
              (относится к ИППП) и профилактика перед гинекологическими операциями
              <sup>
                <a href="#literatura-10">11</a>
              </sup>
              .
            </p>

            <div className="green">
              <p>
                Для лечения воспалительных процессов во влагалище, а также для профилактики перед хирургическим
                вмешательством Бетадин<sup>®</sup> применяют по 1 вагинальной свече в течение 7 дней на ночь.
              </p>
            </div>

            <p>
              Таким образом, благодаря воздействию на широкий круг микроорганизмов и удобству применения свечи
              Бетадин<sup>®</sup> можно назвать универсальным средством для лечения заболеваний, связанных с
              появлением неприятного запаха в интимной зоне.
            </p>

            <h2 id="profilaktika">Профилактика</h2>
            <div className="list-base">
              <p>
                <strong>
                  Профилактика заболеваний, связанных с появлением неприятного запаха в интимной зоне, включает:
                </strong>
              </p>
              <ul>
                <li>Соблюдение правил интимной гигиены</li>
                <li>Поддержание иммунитета</li>
                <li>Регулярное посещение врача-гинеколога</li>
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

            <h3>Является ли нормой изменение запаха в интимной области на протяжении одного менструального цикла?</h3>
            <p>
              На протяжении менструального цикла в организме женщины постоянно меняется количество тех или иных
              гормонов, а также их соотношение между собой. С этим может быть связано некоторое изменение видового
              состава микробиоценоза, численности тех или иных бактерий. Однако даже при меняющихся гормональных
              параметрах запах в интимной зоне не должен быть резким, неприятным и носить другие признаки патологии,
              описанные выше.
            </p>

            <h3>Что может означать запах железа из влагалища?</h3>
            <p>
              Запах железа является нормой во время менструального кровотечения, это признак наличия крови во
              влагалище. В середине менструального цикла нечасто может появляться запах железа вместе с прожилками
              крови или небольшими сукровичными выделениями, которые сопровождают процесс овуляции (выход яйцеклетки
              из яичника).
            </p>

            <h3>Какие средства для интимной гигиены помогут справиться с запахом в интимной зоне?</h3>
            <p>
              Если запах в интимной зоне вызывает беспокойство, необходимо обратиться на прием к специалисту. При
              отсутствии патологии, если запах в интимной зоне все еще доставляет беспокойство, можно использовать
              специальные средства для интимной гигиены, в состав которых не должны входить агрессивные компоненты
              (спирт, щелочь, красители). Например, Залагель<sup>®</sup> Интим имеет в составе масло чайного дерева,
              оказывающее защитное и дезодорирующее действие, способствующее поддержанию комфорта в интимной зоне.
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
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/vaginalnye-vydeleniya.png"
                        alt="Вагинальные выделения - первью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Вагинальные выделения</strong>
                    </p>
                    <p>
                      Какие бывают вагинальные выделения, и как отличить нормальные бели от патологических?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/vaginalnye-vydeleniya/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide swiper-slide-next">
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

                <div className="swiper-slide">
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
                        src="/images/encyclopedia/lechenie-vaginita.png"
                        alt="Лечение вагинита - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Лечение вагинита</strong>
                    </p>
                    <p>
                      Когда возникает вагинит — воспаление слизистой оболочки влагалища? Причины появления и лечение
                      данного заболевания.
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/vaginit/">Подробнее</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="literatura">Список литературы</h2>
            <ol className="literature">
              <li id="literatura-0">
                Меджидова М. К., Зайдиева З. С., Вересова А. А. Микробиоценоз влагалища и факторы, влияющие на его
                состояние // Медицинский совет №3-2 2013.
              </li>
              <li id="literatura-1">
                Buchta V. Vaginal microbiome. Vaginální mikrobiom. Ceska Gynekol. 2018;83(5):371-379.
              </li>
              <li id="literatura-2">
                Saraf VS, Sheikh SA, Ahmad A, Gillevet PM, Bokhari H, Javed S. Vaginal microbiome: normalcy vs
                dysbiosis. Arch Microbiol. 2021 Sep;203(7):3793-3802. doi: 10.1007/s00203-021-02414-3. Epub 2021 Jun
                13. PMID: 34120200.
              </li>
              <li id="literatura-3">
                Romero Herrero D, Andreu Domingo A. Vaginosis bacteriana [Bacterial vaginosis]. Enferm Infecc Microbiol
                Clin. 2016 Jul;34 Suppl 3:14-8. Spanish. doi: 10.1016/S0213-005X(16)30214-2. PMID: 27474242.
              </li>
              <li id="literatura-4">
                Donders GGG, Bellen G, Grinceviciene S, Ruban K, Vieira-Baptista P. Aerobic vaginitis: no longer a
                stranger. Res Microbiol. 2017 Nov-Dec;168(9-10):845-858. doi: 10.1016/j.resmic.2017.04.004. Epub 2017
                May 11. PMID: 28502874.
              </li>
              <li id="literatura-5">
                McCormack D, Koons K. Sexually Transmitted Infections. Emerg Med Clin North Am. 2019 Nov;37(4):725-738.
                doi: 10.1016/j.emc.2019.07.009. Epub 2019 Aug 24. PMID: 31563204.
              </li>
              <li id="literatura-6">
                Marnach ML, Wygant JN, Casey PM. Evaluation and Management of Vaginitis. Mayo Clin Proc. 2022
                Feb;97(2):347-358. doi: 10.1016/j.mayocp.2021.09.022. PMID: 35120697.
              </li>
              <li id="literatura-7">
                Тихомиров А.Л., Сарсания С.И., Тускаев К.С. Актуальность применения повидон-йода в практике
                акушера-гинеколога //РМЖ №1 от 30.01.2014.
              </li>
              <li id="literatura-8">
                Eggers M. Infectious Disease Management and Control with Povidone Iodine. Infect Dis Ther. 2019
                Dec;8(4):581-593. doi: 10.1007/s40121-019-00260-x. Epub 2019 Aug 14. Erratum in: Infect Dis Ther. 2019
                Aug 22;: PMID: 31414403; PMCID: PMC6856232.
              </li>
              <li id="literatura-9">
                Kramer A, Dissemond J, Kim S, Willy C, Mayer D, Papke R, Tuchmann F, Assadian O. Consensus on wound
                antisepsis: update 2018. Skin Pharmacol Physiol. 2018;31(1):28–58.
              </li>
              <li id="literatura-10">
                Инструкция по применению Бетадин<sup>®</sup> суппозитории РН: П№015282/01.
              </li>
              <li id="literatura-11">
                Сафина М.Р., Солошкина Д.А. Смешанные вагинальные инфекции: корреляция диагностики и лечения в I
                триместре беременности // Медицинские новости. 2006. № 7. С. 74–76.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
