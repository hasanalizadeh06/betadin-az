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

export default function SvechiOtMolochnicy() {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

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
                  <Link property="item" typeof="WebPage" href="https://betadin.ru">
                    <span property="name">Главная</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/">
                    <span property="name">Свечи от молочницы</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Свечи от молочницы</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Свечи от молочницы: как выбрать и применять</h1>
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
                <h2 className="page-header-subtitle">Что входит в понятие «молочница»</h2>
                <div className="page-header-body">
                  <p>
                    <strong>Кандидоз («молочница»)</strong> – инфекционное заболевание слизистых оболочек, возникающее при чрезмерном размножении дрожжеподобных грибов рода Candida.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#svechi-ot-molochnicy-na-osnove-antiseptikov">Свечи антисептики</a>
                  </li>
                  <li>
                    <a href="#svechi-na-osnove-preparatov-azolovoy-gruppy">Свечи с азолами</a>
                  </li>
                  <li>
                    <a href="#svechi-ot-molochnicy-na-osnove-ketokonazola">Свечи с антибиотиками</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1145/ed6f76b316c3b1d1fcf39aa847ca0437b5216abab8bb3b121b80e39ffc366d47-730x615/frame-655-8-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1145/ed6f76b316c3b1d1fcf39aa847ca0437b5216abab8bb3b121b80e39ffc366d47-730x615/frame-655-8-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/images/encyclopedia/svechi-molochnicy-header.jpg"
                      alt="Свечи от молочницы"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}${navTitleHidden ? ' nav-content-title-hidden' : ''}`}>
              <ul>
                <li>
                  <a href="#simptomy-vaginalnogo-kandidoza-molochnicy">Симптомы вагинального кандидоза (молочницы)</a>
                </li>
                <li>
                  <a href="#prichiny-provociruyushchie-poyavlenie-molochnicy">Причины, провоцирующие появление молочницы</a>
                </li>
                <li>
                  <a href="#diagnostika">Диагностика</a>
                </li>
                <li>
                  <a href="#chem-lechit-vaginalnyy-kandidoz-molochnicu">Чем лечить вагинальный кандидоз (молочницу)?</a>
                </li>
                <li>
                  <a href="#kakie-byvayut-svechi-ot-molochnicy">Какие бывают свечи от молочницы?</a>
                </li>
                <li>
                  <a href="#zaklyuchenie">Заключение</a>
                </li>
                <li>
                  <a href="#literatura">Список литературы</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened((prev) => !prev)}>Содержание</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${secondaryNavOpened ? ' nav-content__open' : ''}${navTitleHidden ? '' : ' nav-content-title-hidden'}`}>
          <ul>
            <li>
              <a href="#simptomy-vaginalnogo-kandidoza-molochnicy">Симптомы вагинального кандидоза (молочницы)</a>
            </li>
            <li>
              <a href="#prichiny-provociruyushchie-poyavlenie-molochnicy">Причины, провоцирующие появление молочницы</a>
            </li>
            <li>
              <a href="#diagnostika">Диагностика</a>
            </li>
            <li>
              <a href="#chem-lechit-vaginalnyy-kandidoz-molochnicu">Чем лечить вагинальный кандидоз (молочницу)?</a>
            </li>
            <li>
              <a href="#kakie-byvayut-svechi-ot-molochnicy">Какие бывают свечи от молочницы?</a>
            </li>
            <li>
              <a href="#zaklyuchenie">Заключение</a>
            </li>
            <li>
              <a href="#literatura">Список литературы</a>
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
              Организм человека населяют множество микроорганизмов, которые находятся в состоянии необходимого равновесия и сосуществования с хозяином. Данный баланс помогает им взаимно выживать. Любой сдвиг в ту или иную сторону, возникающий из-за увеличения численности отдельных представителей микроорганизмов, приводит к нарушению общего состава микрофлоры влагалища, и как следствие – возникновению заболеваний
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              . Так, при чрезмерном размножении дрожжеподобных грибов рода Candida развивается кандидоз («молочница») – инфекционное заболевание слизистых оболочек и микоз при поражении кожи данным патогеном.
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

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1146/4d248cd23f60b6aa77db501d90cd454439ba1a237fcbc69e200802c186031d21-650x0/istockphoto-1341663000-2048x2048-2-1-1-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1146/4d248cd23f60b6aa77db501d90cd454439ba1a237fcbc69e200802c186031d21-650x0/istockphoto-1341663000-2048x2048-2-1-1-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/candidiasis.png"
                alt="Молочница"
              />
            </picture>

            <p>Поражение грибами наружных половых органов и влагалища называют вульвовагинальным кандидозом.</p>

            <div className="green">
              <p>
                На территории России вагинальный кандидоз занимает второе место среди всех инфекционных поражений влагалища
                <sup>
                  <a href="#literatura-1">2</a>
                </sup>
                . В США и европейских странах ежегодно регистрируется до 13 млн случаев этого заболевания
                <sup>
                  <a href="#literatura-2">3</a>
                </sup>
                .
              </p>
            </div>

            <h2 id="simptomy-vaginalnogo-kandidoza-molochnicy">Симптомы вагинального кандидоза (молочницы)</h2>
            <div className="list-base">
              <p>
                Как правило, активное размножение дрожжеподобных грибов <strong>Candida</strong> проявляется:
              </p>
              <ul>
                <li>
                  <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/">зудом</a> и{' '}
                  <a href="https://betadin.ru/encyclopedia/zhzhenie-vo-vlagalishche/">жжением</a> в области промежности
                </li>
                <li>отеком и сильным покраснением</li>
                <li>выделениями из влагалища, похожими на творог</li>
                <li>болью при мочеиспускании и при половом акте</li>
                <li>усилением симптомов после душа, перед менструацией и во время беременности</li>
              </ul>
            </div>

            <p>
              При осложненной форме вульвовагинального кандидоза возможно появление маленьких пузырьков с мутной жидкостью, которые называют «везикулы». Они могут лопаться и образовывать повреждения поверхностного слоя кожи – эпителия
              <sup>
                <a href="#literatura-3">4</a>
              </sup>
              .
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Зуд в интимной зоне</strong>
                </p>
                <p>Почему возникает зуд в интимной зоне, и как устранить этот неприятный симптом?</p>
                <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/" className="btn btn-green" target="_blank" rel="noreferrer">
                  Подробнее
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

            <h2 id="prichiny-provociruyushchie-poyavlenie-molochnicy">Причины, провоцирующие появление молочницы</h2>
            <div className="list-base">
              <p>Активное размножение грибов Candida начинается из-за влияния следующих неблагоприятных факторов, таких как:</p>
              <ul>
                <li>
                  <strong>Прием лекарственных препаратов</strong>: антибиотиков, цитостатиков (противоопухолевые препараты), гормональных контрацептивов, кортикостероидов, химиотерапии
                </li>
                <li>
                  <strong>Хронические заболевания</strong>, сопровождающиеся снижением иммунитета: онкология, хроническое воспаление придатков матки
                </li>
                <li>
                  <strong>Эндокринные заболевания</strong>: сахарный диабет, гипотиреоз
                </li>
                <li>
                  <strong>Механические</strong>: ношение тесного нижнего белья из синтетических тканей, использование внутриматочной спирали, повреждение тканей влагалища
                </li>
                <li>
                  <strong>Физиологические</strong>: беременность, менопауза
                </li>
                <li>
                  <strong>Психологические</strong>: стресс, хроническая усталость
                </li>
                <li>
                  <strong>Прочие</strong>: дисбактериоз, нарушение обмена веществ, изменение климата, несоблюдение правил интимной гигиены
                </li>
              </ul>
            </div>

            <p>
              Наличие данных факторов <strong>не является обязательным условием</strong> возникновения «<strong>молочницы</strong>», но существенно повышается вероятность ее появления и более тяжелого течения заболевания. Эффективное лечение должно быть комплексным, то есть не только подавлять грибы <strong>Candida</strong>, но и устранять причины, спровоцировавшие их рост.
            </p>

            <h2 id="diagnostika">Диагностика вагинального кандидоза</h2>
            <p>
              Диагностику проводит врач-гинеколог на основе визуального осмотра, жалоб пациентки и результатов лабораторных анализов, которые позволяют идентифицировать вид грибов, их количество и реакцию на различные противогрибковые препараты. Совокупность данных методов позволяет подобрать наиболее эффективное лечение.
            </p>

            <p>
              Вагинальный кандидоз бывает острый и хронический. Для острой формы кандидоза характерны ярко выраженные проявления заболевания, а длительность не превышает два месяца. Если лечение подобрано неверно, то заболевание может дольше длиться или постоянно возвращаться. Тогда заболевание имеет хроническое течение. Поэтому очень важно правильно подобрать препарат для лечения, который не вызовет у грибов привыкания к нему.
            </p>

            <h2 id="chem-lechit-vaginalnyy-kandidoz-molochnicu">Чем лечить вагинальный кандидоз (молочницу)?</h2>
            <p>
              Для лечения «молочницы» используют как системные средства (таблетки для приема внутрь), так и местные, которые вводятся непосредственно в очаг инфекции – вагинальные свечи и таблетки, растворы для орошения, мази.
            </p>

            <div className="list-base">
              <p>Наиболее часто в гинекологической практике используют вагинальные свечи, основными преимуществами которых являются:</p>
              <ul>
                <li>Действие непосредственно в очаге поражения</li>
                <li>Минимальное воздействие на весь организм</li>
                <li>Минимально возможный перечень противопоказаний</li>
                <li>Большой выбор препаратов</li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1147/b3b664bc9734e08e36ec8323c6ea0501e5b6c09244ac2bbf978c55e639c76ec4-650x0/istockphoto-1341663000-2048x2048-2-1-2-650x275.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1147/b3b664bc9734e08e36ec8323c6ea0501e5b6c09244ac2bbf978c55e639c76ec4-650x0/istockphoto-1341663000-2048x2048-2-1-2-1300x550.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={275}
                width={650}
                src="/images/encyclopedia/candidiasis-treatment.png"
                alt="Лечение молочницы"
              />
            </picture>

            <h2 id="kakie-byvayut-svechi-ot-molochnicy">Какие бывают свечи от молочницы</h2>
            <p>Основным отличием вагинальных свечей является разное действующее вещество, за счет которого оказываются разные лечебные эффекты.</p>

            <div className="list-base">
              <p>Условно препараты, входящие в состав свечей от молочницы, можно разделить на следующие группы:</p>
              <ol>
                <li>Антисептики (например, повидон-йод)</li>
                <li>Азолы (например, кетоконазол, сертаконазол)</li>
                <li>Полиеновые антибиотики (например, нистатин, натамицин)</li>
                <li>Комбинированные препараты</li>
              </ol>
            </div>

            <p>Рассмотрим механизмы действия и свойства свечей на основе вышеперечисленных препаратов.</p>

            <h3 id="svechi-ot-molochnicy-na-osnove-antiseptikov">Свечи от молочницы на основе антисептиков</h3>

            <h4 id="povidon-yod-betadin">Повидон-йод (Бетадин®)</h4>

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
                <a href="https://betadin.ru/encyclopedia/povidon-jod/">Повидон-йод</a> – антисептическое средство. Представляет собой комплекс йода и повидона. Благодаря такой формуле при контакте с кожей и слизистыми оболочками происходит постепенное высвобождение активного{' '}
                <a href="https://betadin.ru/encyclopedia/jod/">йода</a> из повидона, что обеспечивает длительное действие препарата
                <sup>
                  <a href="#literatura-4">5</a>
                </sup>
                .
              </p>

              <p>
                <strong>Механизм действия</strong> препарата основан на инактивировании и разрушении основных белков и ферментов, входящих в состав клеток вредоносных микроорганизмов. В результате возникает фунгицидный эффект – гибель гриба. Большинство патогенов может погибать через 1 минуту
                <sup>
                  <a href="#literatura-4">5</a>
                </sup>
                .
              </p>

              <p>
                Повидон-йод активен в отношении грибов, стрептококков, стафилококков, простейших, вирусов и бактерий. Кроме того, в результате исследований было показано, что препарат воздействует на зрелые бактериальные и грибковые биопленки
                <sup>
                  <a href="#literatura-5">6</a>
                </sup>
                . Биопленки представляют собой объединения микроорганизмов, создающих защитный «купол», препятствующий проникновению лекарственных средств. Свечи <span style={{ color: '#0f780b' }}>Бетадин®</span> на основе повидон-йода демонстрируют действенность в отношении таких микроорганизмов, которые способны образовывать биопленки.
              </p>

              <p>
                Зачастую неэффективность лечения молочницы связана с «привыканием» грибов к определенному препарату. Согласно результатам исследований, <strong>повидон-йод не вызывает развитие резистентности</strong> – нечувствительности микроорганизмов к воздействию лекарств
                <sup>
                  <a href="#literatura-6">7</a>
                </sup>
                .
              </p>

              <p>
                Бывает, что кандидоз (молочница) сочетается с другими инфекциями. Широкий спектр действия свечей <span style={{ color: '#0f780b' }}>Бетадин®</span> позволяет лечить даже такие сочетанные заболевания.
              </p>

              <p>
                Для лечения вагинального кандидоза на ночь во влагалище вводят 1 свечу в течение 7 дней. Перед лечением необходимо обязательно проконсультироваться с врачом, поскольку препарат имеет противопоказания.
              </p>

              <p>
                Таким образом, свечи на основе повидон-йода (<span style={{ color: '#0f780b' }}>Бетадин®</span>) соответствуют современным требованиям лекарственных средств. Препарат у многих пациентов демонстрирует хорошую переносимость
                <sup>
                  <a href="#literatura-8">9</a>
                </sup>
                , а также поддерживает способность восстановления влагалищной микрофлоры
                <sup>
                  <a href="#literatura-7">8</a>
                </sup>
                .
              </p>

              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-svechi-instruktsiya/">
                  Инструкция
                </a>
              </p>
            </div>

            <h4 id="vaginalnye-tabletki-na-osnove-dekvaliniya-hlorida">Вагинальные таблетки на основе деквалиния хлорида</h4>
            <p>
              Деквалиния хлорид – антисептический препарат, <strong>механизм действия</strong> которого основан на нарушении функционирования ферментов клетки гриба, что впоследствии приводит к гибели грибковой клетки.
            </p>

            <p>
              <strong>Препарат активен в отношении грамположительных и грамотрицательных бактерий</strong>, грибов и вирусов. Обладает противовоспалительным эффектом.
            </p>

            <p>
              Для лечения молочницы 1 вагинальная таблетка вводится интравагинально в течение 6 дней
              <sup>
                <a href="#literatura-11">13</a>
              </sup>
              . Необходимо пройти полный курс.
            </p>

            <p>
              Минусы препарата: при чрезмерной сухости влагалища, есть вероятность, что таблетка останется нерастворенной, могут наблюдаться местные реакции раздражения, зуд, жжение или покраснение слизистой оболочки влагалища.
            </p>

            <p>
              Необходимо отметить, что на сегодняшний день наблюдается снижение эффективности целого ряда антисептиков, имеющих хлорсодержащую молекулу
              <sup>
                <a href="#literatura-9">10</a>
              </sup>
              .
            </p>

            <h3 id="svechi-na-osnove-preparatov-azolovoy-gruppy">Свечи от молочницы на основе препаратов азоловой группы</h3>

            <h4 id="svechi-na-osnove-sertakonazola">Свечи на основе сертаконазола</h4>
            <p>
              <strong>Сертаконазол</strong> – производное имидазола и бензотиофена. Препарат активен в отношении дрожжеподобных грибов рода <strong>Candida</strong>, стрептококков и стафилококков
              <sup>
                <a href="#literatura-12">14</a>
              </sup>
              .
            </p>

            <p>
              Сертаконазол <strong>оказывает тройное действие</strong>: подавляет рост и размножение грибов (фунгистатическое действие), вызывает гибель грибов (фунгицидное действие) и не подавляет жизнеспособность основных представителей нормальной микрофлоры влагалища – полезных лактобактерий.
            </p>

            <p>
              При местном введении сертаконазол непосредственно начинает действовать на грибы в очаге поражения. При этом не всасывается в кровоток, что означает высокий профиль безопасности препарата.
            </p>

            <p>
              <strong>Механизм действия сертаконазола</strong> заключается в угнетении синтеза эргостерола и увеличении проницаемости клеточной мембраны грибов, что приводит его гибели.
            </p>

            <p>
              Для лечения молочницы применяют свечи с сертаконазолом 1 раз путем введения 1 свечи во влагалище. При сохранении симптомов возможно повторное введение 1 свечи еще через 7 дней.
            </p>

            <h4 id="svechi-na-osnove-ketokonazola">Свечи на основе кетоконазола</h4>
            <p>
              <strong>Кетоконазол</strong> – антимикотический (противогрибковый) препарат азоловой группы.
            </p>

            <p>
              <strong>Механизм действия</strong> обладает фунгистатическим и фунгицидным действием.
            </p>

            <p>
              Однако к кетоконазолу может развивается устойчивость грибов и заболевание может перейти в хроническую форму с обострениями.
            </p>

            <p>
              Для лечения молочницы 1 свечу вводят во влагалище в течение 3-5 дней
              <sup>
                <a href="#literatura-13">15</a>
              </sup>
              .
            </p>

            <p>
              Важно соблюдать назначенную врачом схему лечения, поскольку незавершенная терапия может способствовать развитию хронической формы заболевания.
            </p>

            <h3 id="svechi-ot-molochnicy-na-osnove-ketokonazola">Свечи от молочницы на основе полиеновых антибиотиков</h3>

            <h4 id="svechi-na-osnove-natamicina">Свечи на основе натамицина</h4>
            <p>
              <strong>Натамицин</strong> – противогрибковый полиеновый антибиотик. Обладает широким спектром противогрибкового действия, вызывает гибель грибков.
            </p>

            <p>
              <strong>Механизм действия</strong> натамицина основан на нарушении целостности и функционирования мембран грибковой клетки. Препарат активен в отношении большинства дрожжевых грибов рода Candida. <strong>Меньшей чувствительностью к натамицину обладают дерматофиты – плесневые грибы</strong>.
            </p>

            <p>
              Применяют препарат путем ввода во влагалище одной свечи 1 раз/сутки на ночь в течение 3-6 дней
              <sup>
                <a href="#literatura-15">16</a>
              </sup>
              .
            </p>

            <p>
              Продолжительность курса устанавливает лечащий врач. Не рекомендуется прерывать лечение сразу после исчезновения симптомов.
            </p>

            <h3 id="svechi-ot-molochnicy-na-osnove-kombinirovannyh-preparatov">Свечи от молочницы на основе комбинированных препаратов</h3>
            <p>
              Комбинированные препараты для вагинального применения обладают противогрибковым, антибактериальным и противопротозойным действием.
            </p>

            <p>
              Сочетание данных препаратов позволяет активно воздействовать на мембрану грибковых клеток, вызывая их гибель, а также лечить инфекции, вызываемые несколькими микроорганизмами.
            </p>

            <p>
              Иногда при использовании данных средств возможно появление местной реакции в виде зуда, жжения, раздражения слизистой оболочки влагалища.
            </p>

            <h2 id="zaklyuchenie">Заключение</h2>
            <p>
              Перед применением любых свечей необходимо проконсультироваться с лечащим врачом, поскольку каждый препарат имеет противопоказания и свой режим дозирования в зависимости от индивидуальных особенностей течения заболевания.
            </p>

            <p>
              Безусловно, стоит отдать предпочтение препаратам с широким спектром действия, активным в отношении грибковых биопленок, сохраняющих эффективность в отношении даже устойчивых к лекарствам микроорганизмов (например, свечи{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Бетадин<sup>®</sup>
              </mark>{' '}
              на основе повидон-йода, суппозитории на основе сертаконазола).
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
                        src="/images/encyclopedia/bakterialnyj-vaginoz-preview.png"
                        alt="Бактериальный вагиноз - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Бактериальный вагиноз</strong>
                    </p>
                    <p>
                      Почти в 90% случаев патологических выделений у женщин диагностируется бактериальный вагиноз. Почему возникает это заболевание, и как его лечить?
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
                      <strong>Зуд в интимной зоне</strong>
                    </p>
                    <p>Почему возникает зуд в интимной зоне, и как устранить этот неприятный симптом?</p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
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
                        src="/images/encyclopedia/svechi-ot-vaginita-preview.png"
                        alt="Свечи от вагинита - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Свечи от вагинита</strong>
                    </p>
                    <p>
                      Лечение вагинита местными препаратами в форме вагинальных свечей. Как выбрать свечи от воспаления во влагалище?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/svechi-ot-vaginita/">Подробнее</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="literatura">Список литературы</h2>
            <ol className="literature">
              <li id="literatura-0">
                Прилепская В.Н., Мирзабалаева А.К., Кира Е.Ф., Гомберг М.А., Аполихина И.А., Байрамова Г.Р. Диагностика и лечение заболеваний, сопровождающихся патологическими выделениями из половых путей женщин// Федеральные клинические рекомендации. М., 2013. Стр. 50.
              </li>
              <li id="literatura-1">
                Кокоева Д. Н., Меджидова М. К., Домова Н. А., Кан Н. Е., Тютюнник В. Л. Профилактика преждевременных родов у беременных с вагинальным кандидозом// Медицинский совет. 2019;(7):52-56.
              </li>
              <li id="literatura-2">
                Vulvovaginal candidosis. Sexually transmitted diseases treatment guidelines, 2010. MMWR Recomm Rep. 2010;59(RR-12):61-63. Available at: https://www.cdc.gov/mmwr/pdf/rr/rr5912.pdf.
              </li>
              <li id="literatura-3">
                Клинические рекомендации «Урогенитальный кандидоз»// Москва, 2016, стр.22.
              </li>
              <li id="literatura-4">
                Инструкция по медицинскому применению Бетадин<sup>®</sup> суппозитории, РН: П№015282/01.
              </li>
              <li id="literatura-5">
                Lepelletier D, Maillard JY, Pozzetto B, Simon A. Povidone Iodine: Properties, Mechanisms of Action, and Role in Infection Control and Staphylococcus aureus Decolonization. Antimicrob Agents Chemother. 2020;64(9):e00682-20. Published 2020 Aug 20. doi:10.1128/AAC.00682-20.
              </li>
              <li id="literatura-6">
                Борисов И. В. Повидон-йод – новые возможности знакомого препарата //Раны и раневые инфекции 2021, 8 (3): 12-18.
              </li>
              <li id="literatura-7">
                Ромашевский Н. В. и др. Опыт применения Бетадина (EGIS) для коррекции влагалищных дисбиозов у пациенток репродуктивного возраста // Вестник Российской ассоциации акушеров-гинекологов№ 1/2000.
              </li>
              <li id="literatura-8">
                Гаспарян С.А., Хажбиев А.А., Рыжков В.В. Опыт применения сертаконазола у беременных с вульвовагинальным кандидозом. Медицинский Совет. 2019;(13):160-165. https://doi.org/10.21518/2079-701X-2019-13-160-165.
              </li>
              <li id="literatura-9">
                Квашнина Д.В., Ковалишена О.В. Распространенность устойчивости микроорганизмов к хлоргексидину по данным систематического обзора и анализа регионального мониторинга резистентности//Фундаментальная и клиническая медицина 2018;3(1):63-71.
              </li>
              <li id="literatura-10">
                Вознесенская Н.В., Харитонов В.М., Бурганова Р.Ф., Истомина Н.С., Саакян К.Г. Сертаконазол (залаин) в лечении вульвовагинального кандидоза у беременных. Ульяновский медико-биологический журнал. 2013;(2):36-39. Режим доступа: https://www.old.ulsu.ru/images/stories/antipoviv/ulsubook/2013/2-2013.pdf.
              </li>
              <li id="literatura-11">
                Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa MA. Povidone iodine in wound healing: A review of current concepts and practices. Int J Surg. 2017;44:260-268. doi:10.1016/j.ijsu.2017.06.073.
              </li>
              <li id="literatura-12">
                Инструкция по медицинскому применению деквалиния хлорид. РЛС.
              </li>
              <li id="literatura-13">
                Инструкция по медицинскому применению сертаконазол, РЛС.
              </li>
              <li id="literatura-14">
                Инструкция по медицинскому применению кетоконазол, РЛС.
              </li>
              <li id="literatura-15">
                Инструкция по медицинскому применению натамицин, РЛС.
              </li>
              <li id="literatura-16">
                Инструкция по медицинскому применению нистатин, РЛС.
              </li>
              <li id="literatura-17">
                Инструкция по медицинскому применению Макмирор комплекс, свечи, РЛС.
              </li>
              <li id="literatura-18">
                Инструкция по медицинскому применению Нео-пенотран, свечи, РЛС.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
