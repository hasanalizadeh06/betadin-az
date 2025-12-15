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

export default function TermicheskijOzhogKozhi() {
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
                  <span property="name">Термический ожог кожи</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Термический ожог кожи: степени, симптомы, лечение
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
                <h2 className="page-header-subtitle">Что такое термический ожог</h2>
                <div className="page-header-body">
                  <div>Термический или тепловой ожог возникает в результате воздействия высокой</div>
                  <div>температуры на кожу и нижележащие ткани.</div>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#pervaya-pomoshch-pri-termicheskih-ozhogah">Первая помощь при ожоге</a>
                  </li>
                  <li>
                    <a href="#lechenie-ozhogov-ii-iii-stepeni">Лечение ожогов II-III степени</a>
                  </li>
                  <li>
                    <a href="#obrabotka-termicheskih-ozhogov-preparatami-na-osnove-povidon-yoda-betadin">
                      Обработка ожога
                    </a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-3-730x615.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-3-730x615.webp"
                      alt="Термический ожог кожи"
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
                  <a href="#stepen-tyazhesti-termicheskih-ozhogov-osnovnye-simptomy">
                    Степень тяжести термических ожогов. Основные симптомы
                  </a>
                </li>
                <li>
                  <a href="#opredelenie-ploshchadi-termicheskogo-ozhoga-indeks-tyazhesti-porazheniya-itp">
                    Определение площади термического ожога. Индекс тяжести поражения (ИТП)
                  </a>
                </li>
                <li>
                  <a href="#oslozhneniya-ojogov">Осложнения</a>
                </li>
                <li>
                  <a href="#lechenie-termicheskih-ozhogov">Лечение термических ожогов</a>
                </li>
                <li>
                  <a href="#profilaktika-ozhogovogo-travmatizma">Профилактика ожогового травматизма</a>
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
          className={`nav-content nav-content-fixed ${secondaryNavOpened ? 'nav-content__open' : ''} ${navTitleHidden ? '' : 'nav-content-title-hidden'}`}
        >
          <ul>
            <li>
              <a href="#stepen-tyazhesti-termicheskih-ozhogov-osnovnye-simptomy">
                Степень тяжести термических ожогов. Основные симптомы
              </a>
            </li>
            <li>
              <a href="#opredelenie-ploshchadi-termicheskogo-ozhoga-indeks-tyazhesti-porazheniya-itp">
                Определение площади термического ожога. Индекс тяжести поражения (ИТП)
              </a>
            </li>
            <li>
              <a href="#oslozhneniya-ojogov">Осложнения</a>
            </li>
            <li>
              <a href="#lechenie-termicheskih-ozhogov">Лечение термических ожогов</a>
            </li>
            <li>
              <a href="#profilaktika-ozhogovogo-travmatizma">Профилактика ожогового травматизма</a>
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
            <div className="list-base">
              <p>
                <strong>Причины возникновения термического ожога </strong>
              </p>
              <ul>
                <li>воздействие открытого огня на кожу или в результате возгорания одежды</li>
                <li>
                  контакт с раскаленными металлическими, металлокерамическими предметами или другими
                  предметами (утюг, сковорода, варочная панель, брызги асфальта и прочее)
                </li>
                <li>воздействие горячей жидкости или пара</li>
                <li>реакция на повреждение организма электричеством</li>
                <li>пребывание на открытом солнце (солнечный ожог)</li>
              </ul>
            </div>

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

            <h2 className="h2" id="stepen-tyazhesti-termicheskih-ozhogov-osnovnye-simptomy">
              Степень тяжести термических ожогов. Основные симптомы
            </h2>

            <p>
              Термические ожоговые повреждения бывают: <strong>I, II, III и IV степеней</strong>.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-2-4-650x150.webp"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-2-4-650x150.webp"
                alt="Степень тяжести термических ожогов."
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="ozhogi-i-stepeni">
              Ожоги I степени
            </h3>

            <p>
              Ожоги<strong> I степени</strong> называют <strong>поверхностными</strong>, или{' '}
              <strong>эпидермальными</strong>
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Повреждается только верхний слой кожи. Симптомами будут припухлость, болезненность или
              жжение, красный цвет кожных покровов. Такие ожоги можно лечить самостоятельно. Как правило,
              восстановить кожу удается за несколько дней. После заживления поврежденный участок кожи не будет
              отличаться по цвету от остальной кожи, но может присутствовать временное шелушение.
            </p>

            <h3 className="h3" id="ozhogi-ii-stepeni">
              Ожоги II степени
            </h3>

            <p>
              Ожоги <strong>II степени</strong> называют <strong>дермальными</strong>, или{' '}
              <strong>пограничными</strong>
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Повреждающее действие затрагивает более глубокие слои кожи. Поэтому при таких ожогах на ряду
              с покраснением кожи, отечностью и болью формируются пузыри с прозрачным содержимым. Заживление
              происходит в течение двух недель. Нередко после полного восстановления кожи поврежденный участок
              будет или более темного, или более светлого оттенка по сравнению с неизмененной кожей.
            </p>

            <h3 className="h3" id="ozhogi-iii-stepeni">
              Ожоги III степени
            </h3>

            <p>
              Ожоги <strong>III степени</strong> называют <strong>глубокими</strong>
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . В ожоговый процесс вовлекаются все слои кожи, в том числе подкожная жировая клетчатка.
            </p>

            <p>
              <strong>Строение кожи</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-20-650x325.webp"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-20-650x325.webp"
                alt="Строение кожи"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              При этом симптомы, в зависимости от причины термического ожога, будут различаться. Так, при
              контакте с открытым огнем или раскаленным предметом на поверхности формируется корочка (струп)
              коричневатого цвета, а при ошпаривании кожи горячей жидкостью или паром – влажная, бело-серая.
            </p>

            <p>При глубоких ожогах могут также формироваться пузыри.</p>

            <p>
              Восстановление ожоговых повреждений затягивается до 1,5 месяцев. Часто требуется кожная пластика.
              По факту заживления остается нарушение пигментации кожи, формируются хорошо заметные рубцы.
            </p>

            <h3 className="h3" id="ozhogi-iv-stepeni">
              Ожоги IV степени
            </h3>

            <p>
              При ожогах <strong>IV степени</strong> погибают не только кожа и оболочки, покрывающие мышцы
              (фасции), могут пострадать мышцы и кости
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Появляется корочка темного цвета и участки обугливания. Восстановление протекает крайне медленно,
              как правило, требуется хирургическая обработка, пересадка кожи. Решается вопрос о сохранении
              пострадавших частей тела.
            </p>

            <h2 className="h2" id="opredelenie-ploshchadi-termicheskogo-ozhoga-indeks-tyazhesti-porazheniya-itp">
              Определение площади термического ожога. Индекс тяжести поражения (ИТП)
            </h2>

            <p>
              В большинстве случаев уже при визуальном осмотре врач может поставить диагноз — термический ожог.
              Если человек в сознании, можно расспросить о случившемся и уточнить конкретную причину термического
              ожога.
            </p>

            <p>
              Для выбора тактики лечения ожоговых ран необходимо выполнить диагностику тяжести ожогового
              повреждения.
            </p>

            <p>
              В комбустиологии, отрасли медицины, занимающейся изучением ожогов,{' '}
              <strong>для определения ожоговой площади</strong> пользуются «правилом ладони» и «правилом девяток».
            </p>

            <h3 className="h3" id="pravilo-ladoni">
              «Правило ладони»
            </h3>

            <p>
              Площадь одной ладони пациента составляет 1% от всей поверхности тела
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Это правило подходит для определения необширных ожоговых повреждений.
            </p>

            <h3 className="h3" id="pravilo-devyatok">
              «Правило девяток»
            </h3>

            <p>
              У взрослого человека площадь кожных покровов головы составляет 9% от площади всего тела. Верхней
              конечности – 9%, одной нижней конечности – 18%, Передняя и задняя поверхность тела – по 18%,
              половые органы <br />и промежность – 1%
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-21-650x325.webp"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-21-650x325.webp"
                alt="Правило девяток"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="indeks-tyazhesti-porazheniya">
              Индекс тяжести поражения
            </h3>

            <div className="list-base">
              <p>
                Для специальной оценки площади повреждения рассчитывают{' '}
                <strong>индекс тяжести поражения (ИТП)</strong>. Этот показатель основан на оценке глубины и
                обширности поражения и выражается в условных единицах.
              </p>
              <ul>
                <li>При ожогах I-II степеней 1% площади ожога равен 1 ЕД.</li>
                <li>При ожогах IIIа степени 1% площади ожога равен 2 ЕД.</li>
                <li>При ожогах IIIб-IV степеней 1% площади ожога равен 3 ЕД.</li>
              </ul>
            </div>

            <h2 className="h2" id="oslozhneniya-ojogov">
              Осложнения ожогов
            </h2>

            <div className="list-base">
              <p>
                Серьезным осложнением термических ожогов является{' '}
                <strong>ожоговый шок</strong>
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                , основными проявлениями которого являются:
              </p>
              <ul>
                <li>рвота</li>
                <li>падение давления</li>
                <li>уменьшение или прекращение образования мочи почками (олигурия и анурия)</li>
                <li>озноб и сердцебиение</li>
                <li>бледность и сухость кожи</li>
                <li>двигательное возбуждение</li>
              </ul>
            </div>

            <p>
              <strong>Легкий шок</strong> развивается при глубоком ожоге не более 20% поверхности тела, ИТП 30-70
              ЕД.
            </p>

            <p>
              <strong>Тяжелый шок</strong> – при ожоге 20-40% поверхности тела, ИТП 71-130 ЕД.
            </p>

            <p>
              <strong>Крайне тяжелый шок</strong> – обожжено более 40% поверхности тела, <br />
              ИТП больше 130 ЕД.
            </p>

            <p>
              <strong>Шоковый период</strong> длится от 10 часов до 3 суток в зависимости от тяжести шока.
            </p>

            <p>
              С 4 по 14 день из-за общего воздействия на организм продуктов распада омертвевших тканей и
              бактерий возникает <strong>острая ожоговая токсемия</strong>.
            </p>

            <p>
              Ожоговый шок лечат в стационаре, где проводят адекватное обезболивание, катетеризацию мочевого
              пузыря, корректируют водно-электролитный баланс. Часто требуется искусственная вентиляция лёгких.
            </p>

            <p>
              <strong>К местным осложнениям</strong> термических ожогов можно отнести{' '}
              <a href="/encyclopedia/rany-s-infekciej/" title="Раны с инфекцией">
                инфицирование
              </a>{' '}
              бактериями и грибковыми микроорганизмами, утрату функционирования поврежденной части тела, грубое
              рубцевание и контрактуры.
            </p>

            <h2 className="h2" id="lechenie-termicheskih-ozhogov">
              Лечение термических ожогов
            </h2>

            <p>
              Большинство бытовых термических ожогов, учитывая небольшие размеры и легкую тяжесть повреждения, не
              требуют обращения в медицинские организации.
            </p>

            <p>Однако важно правильно оказать первичную доврачебную помощь.</p>

            <h3 className="h3" id="pervaya-pomoshch-pri-termicheskih-ozhogah">
              Первая помощь при термических ожогах
            </h3>

            <div className="list-base">
              <ul>
                <li>
                  Как можно быстрее прекратить контакт с тепловым воздействием или потушить горящую одежду водой,
                  одеялом.
                </li>
                <li>
                  Охладить место термического ожога холодной водой, льдом, снегом, охлаждающими пакетами. Это
                  позволит <strong>понизить температуру внутри тканей</strong> и уменьшит повреждающее воздействие
                  тепла.
                </li>
                <li>Одежду с обожжённой части тела разрезают и снимают. Прилипшую одежду не отрывают.</li>
                <li>
                  Сформированные пузыри рекомендуется не прокалывать. Можно воспользоваться стерильной иглой от
                  стерильного шприца, если пузырь единичный и небольшой. При множественных пузырях нужно обратиться
                  за медицинской помощью.
                </li>
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Мази и кремы от ожогов</strong>
                </p>
                <p>Какие бывают мази для лечения ожогов, и как выбрать самую эффективную.</p>
                <a
                  href="/encyclopedia/mazi-i-kremy-ot-ozhogov/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp"
                  alt="Мази и кремы от ожогов-превью"
                  width={246}
                  height={166}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3" id="lechenie-legkih-poverhnostnyh-ozhogov">
              Лечение легких поверхностных ожогов
            </h3>

            <p>
              В лечение ожогов I степени используют успокаивающие кремы, аэрозоли, растворы, содержащие пантенол,
              декспантенол, танин. Изменения в очаге повреждения полностью обратимы и заживление происходит за
              несколько дней.
            </p>

            <h3 className="h3" id="lechenie-ozhogov-ii-iii-stepeni">
              Лечение ожогов II-III степени
            </h3>

            <p>
              Формирование пузырей свидетельствует о нарушении целостности кожного покрова, а омертвение кожи или
              других тканей организма – предрасполагающий фактор для развития инфекции. Поэтому ожоги второй или
              более тяжелых степеней <strong>подвержены заражению болезнетворными микроорганизмами</strong>.
            </p>

            <p>
              Для предупреждения развития гнойных осложнений важен правильный уход и обработка ожоговой поверхности,
              как до момента обращения за медпомощью, так и после медицинского вмешательства.
            </p>

            <p>
              Свежую ожоговую раневую поверхность необходимо промыть с целью обеззараживания и механического удаления
              инородных частиц и микроорганизмов. Обычно используют растворы фурацилина, марганцовки, хлоргексидина.
              Затем по краям раны наносят 5% раствор йода. Причем следует отметить, что существуют особые формы йода,
              которые называются{' '}
              <a href="/encyclopedia/povidon-jod/" title="Повидон йод">
                повидон-йод
              </a>
              .
            </p>

            <h3 className="h3" id="obrabotka-termicheskih-ozhogov-preparatami-na-osnove-povidon-yoda-betadin">
              Обработка термических ожогов препаратами на основе повидон-йода (Бетадин®)
            </h3>

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
                Для обеззараживания раневой поверхности рекомендуется применять{' '}
                <strong>раствор повидон-йода</strong> (
                <strong>
                  <span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span>
                </strong>
                ), который, в отличие от вышеперечисленных антисептиков, не содержит спирт, разрешен к
                использованию на всей поверхности ожога, не вызывает жжение травмированных тканей.
              </p>

              <p>
                <a href="/encyclopedia/povidon-jod/">Повидон–йод</a> (
                <strong>
                  <span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span>
                </strong>
                ) способствует гибели <strong>бактерий, грибков, простейших одноклеточных микроорганизмов, вирусов</strong>
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                . При этом препарат практически не всасывается
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                в кровоток, что свидетельствует о высоком профиле безопасности.
              </p>

              <p>
                Для лечения ожогов можно применять антисептическую, дезинфицирующую{' '}
                <strong>мазь</strong>{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span>
                </strong>
                . Средство наносят на ожоговую поверхность 2-3 раза в день тонким слоем. При лечении ожогов{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span>
                </strong>{' '}
                <a href="/encyclopedia/jod-maz/">мазь</a> можно оставлять и под повязкой. При лечении инфицированных
                ран под салфетками, пропитанными раствором или мазью{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span>
                </strong>
                , в течение первых 5-7 суток уменьшался отёк и количество гнойного отделяемого, отмечалось уменьшение
                боли
                <sup>
                  <a href="#spisok-literatury">4</a>
                </sup>
                . Применение{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span>
                </strong>{' '}
                раствора или мази разрешено у взрослых и детей с месяца жизни
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                .
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

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">О свойствах повидон-йода смотрите в коротком видео:</div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Видео про свойства повидон-йода"
                ></iframe>
              </div>
              <div className="iframe_desc">
                Из видео вы узнате, чем продезинфицировать ожоговые раны, при этом не нарушая процесс заживления
                раны, и без дискомфорта при использовании.
              </div>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Мазь на основе йода</strong>
                </p>
                <p>
                  Мазь на основе йода: механизм действия, область применения. Мазь Бетадин® на основе повидон-йода для
                  лечения различных кожных заболеваний.
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
                  srcSet="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
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

            <h4 className="h4" id="lechenie-termicheskih-ozhogov-na-etape-zazhivleniya-i-sozrevaniya-rubca">
              Лечение термических ожогов на этапе заживления и созревания рубца
            </h4>

            <p>
              На ряду с антисептической терапией, можно использовать заживляющие наружные средства на основе солей
              лантана, дезоксирибонуклеата натрия. В ряде осложненных случаев может потребоваться лечение
              антибиотиками. После заживления с профилактической и лечебной целью развития грубых рубцов назначают
              препараты на основе силикона, гиалуронидазы, глюкокортикостероиды.
            </p>

            <h2 className="h2" id="profilaktika-ozhogovogo-travmatizma">
              Профилактика ожогового травматизма
            </h2>

            <div className="list-base">
              <ul>
                <li>Маленьких детей нельзя оставлять одних без присмотра.</li>
                <li>На розетки использовать специальные защитные накладки.</li>
                <li>На водопроводные трубы установить термостаты.</li>
                <li>Установить защитные экраны на радиаторы отопления.</li>
                <li>
                  Кружки, тарелки, кастрюли, сковородки с горячим содержимым расставлять ближе к центру стола или на
                  дальних конфорках варочной панели.
                </li>
                <li>Спички, зажигалки хранить в недоступных для детей местах.</li>
                <li>
                  Электроприборы, находящиеся на столешницах, должны быть пододвинуты ближе к стене – находиться далеко
                  от источника воды.
                </li>
                <li>
                  Соблюдать правила безопасного загара. Пребывать на открытом солнце до 11.00 и после 16.00.
                  Использовать солнцезащитный крем с фильтром не менее 30 SPF.
                </li>
              </ul>
            </div>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-558x542.webp"
                  type="image/webp"
                />
                <Image
                  src="/quastion-558x542.webp"
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

            <h3 className="h3" id="kogda-nuzhno-obratitsya-za-medicinskoy-pomoshchyu-pri-termicheskom-ozhoge">
              Когда нужно обратиться за медицинской помощью при термическом ожоге?
            </h3>

            <div className="list-base">
              <p>Необходимо срочно вызвать скорую медицинскую помощь, если:</p>
              <ul>
                <li>площадь ожога более 5% (5 ладоней) поверхности тела</li>
                <li>ожог 3–4 степени</li>
                <li>произошло вдыхание дыма, обожжены дыхательные пути</li>
                <li>при ожогах лица или шеи, паховой области, обожжены две конечности</li>
                <li>произошла ожоговая травма глаз</li>
                <li>термическую травму получил ребёнок или пожилой человек</li>
              </ul>
              <p>Если во время лечения даже небольших ожогов появились гнойные осложнения, необходима консультация доктора.</p>
            </div>

            <h3 className="h3" id="mozhno-li-mochit-kozhu-posle-ozhoga">
              Можно ли мочить кожу после ожога?
            </h3>

            <p>
              Сразу после термической травмы даже рекомендовано охлаждение кожи чистой холодной водой. Если ожог 1 и 2
              степени — подержать под проточной водой 10-15 мин. Если ожог 3 и 4 степени – при помощи чистой влажной
              повязки охладить поврежденный участок кожи. Охлаждая повреждённую кожу водой, не трите и не старайтесь
              активно промыть рану.
            </p>

            <p>
              Стоит отметить, что в период заживления ожогов, характеризующихся повреждением целостности кожных покровов,
              не рекомендуется контактировать с водой, посещать сауну, баню, бассейн.
            </p>

            <h3 className="h3" id="mozhno-li-bintovat-obozhzhynnuyu-kozhu">
              Можно ли бинтовать обожжённую кожу?
            </h3>

            <p>
              В первичную доврачебную обработку термического ожога и в период заживления рекомендовано бинтование или
              наложение чистой повязки. При этом нельзя использовать вату или другие ворсовые материалы.
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
                      Далеко не все ссадины и порезы заживают быстро и без осложнений. Как лечить инфицированные раны?
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
                        srcSet="/rastvor-joda-prevyu-246x166 (2).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/rastvor-joda-prevyu-246x166 (2).webp"
                        alt="Раствор йода - превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Раствор йода</strong>
                    </p>
                    <p>Какие бывают йодные растворы, и для чего их применяют?</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/rastvor-joda/">Подробнее</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp"
                        alt="Мази и кремы от ожогов-превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Мази и кремы от ожогов</strong>
                    </p>
                    <p>Какие бывают мази для лечения ожогов, и как выбрать самую эффективную.</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/mazi-i-kremy-ot-ozhogov/">Подробнее</Link>
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
                Клинические рекомендации «Ожоги термические, химические. Ожоги солнечные. Ожоги дыхательных путей», 2020
                год.
              </li>
              <li id="literatura-1">
                Михайлович В.А., Мирошниченко А.Г. «Руководство для врачей скорой медицинской помощи», 4е издание, 2007
                год.
              </li>
              <li id="literatura-2">
                Инструкция по медицинскому применению препарата Бетадин®, раствор, РУ П N015282/03.
              </li>
              <li id="literatura-3">
                Михальский В. В., Богданов А. Е., Жилина С. В., Привиденцев А. И., Аникин А. И., Ульянина А. А.
                «Применение препарата в лечении инфицированных ран». РМЖ №29 от 23.12.2010.
              </li>
              <li id="literatura-4">
                Инструкция по медицинскому применению препарата Бетадин<sup>®</sup>, мазь, РУ П N015282/02.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
