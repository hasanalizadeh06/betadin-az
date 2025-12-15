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

export default function OzhogUDetej() {
  // useState for scroll triggers was unused; the effect uses a local `triggered` object.

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
                  <span property="name">Ожог: первая помощь и лечение</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Ожоги у детей: первая помощь и эффективное лечение
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
                <h2 className="page-header-subtitle">Виды ожогов</h2>
                <div className="page-header-body">
                  <p>
                    Ожог — повреждение кожи и тканей в результате термического, химического,
                    электрического или лучевого воздействия.
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#pervaya-pomoshch-pri-ozhoge">Первая помощь при ожогах</a>
                  </li>
                  <li>
                    <a href="#lechenie-ozhogov">Лечение ожогов</a>
                  </li>
                  <li>
                    <a href="#faza-vospaleniya">Антисептик для обработки</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-4-1460x1230.webp, /kartinka-banner-4-1460x1230.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-4-1460x1230.webp"
                      alt="Ожог у детей: первая помощь, мазь, крем, лечение"
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
                  <a href="#stepeni-tyazhesti-ozhogov">Степени тяжести ожогов</a>
                </li>
                <li>
                  <a href="#pervaya-pomoshch-pri-ozhoge">Первая помощь при ожоге у ребенка</a>
                </li>
                <li>
                  <a href="#lechenie-ozhogov">Лечение ожогов</a>
                </li>
                <li>
                  <a href="#kak-predotvratit-ozhogi-u-detey">Как предотвратить ожоги у детей</a>
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
              <a href="#stepeni-tyazhesti-ozhogov">Степени тяжести ожогов</a>
            </li>
            <li>
              <a href="#pervaya-pomoshch-pri-ozhoge">Первая помощь при ожоге у ребенка</a>
            </li>
            <li>
              <a href="#lechenie-ozhogov">Лечение ожогов</a>
            </li>
            <li>
              <a href="#kak-predotvratit-ozhogi-u-detey">Как предотвратить ожоги у детей</a>
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
            <h3 className="h3" id="vidy-ozhogov">
              Виды ожогов
            </h3>

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
              <ul>
                <li>Термические</li>
                <li>Химические</li>
                <li>Электрические</li>
                <li>Солнечные</li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-2-5-650x150.webp 1x, /istockphoto-1341663000-2048x2048-2-2-5-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-2-5-1300x300.webp"
                alt="Виды ожогов"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="termicheskie-ozhogi">
              Термические ожоги
            </h3>

            <p>
              Чаще всего встречаются{' '}
              <a href="/encyclopedia/termicheskij-ozhog-kozhi/" title="Термический ожог кожи">
                термические ожоги
              </a>
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Они возникают при контакте кожи с горячими жидкостями, кипятком, паром, с раскаленными
              поверхностями и от интенсивного теплового излучения, а также при взаимодействии с пламенем.
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Термический ожог кожи</strong>
                </p>
                <p>
                  Термический ожог возникает в результате воздействия высокой температуры на кожу и
                  нижележащие ткани. Как оказать первую помощь,и чем обрабатывают такие повреждения?
                </p>
                <a
                  href="/encyclopedia/termicheskij-ozhog-kozhi/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="/termicheskij-ozhog-kozhi-prevyu-310x210.webp 1x, /termicheskij-ozhog-kozhi-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/termicheskij-ozhog-kozhi-prevyu-620x420.webp"
                  alt="Термический ожог кожи-превью"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3" id="himicheskie-ozhogi">
              Химические ожоги
            </h3>

            <p>
              <strong>Химические ожоги</strong>
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>{' '}
              возникают в результате попадания на кожу растворов кислот, щелочей. Повреждающее действие
              начинается с момента попадания агрессивной жидкости на кожу до завершения химической реакции.
              Границы химических ожогов четкие. При воздействии азотной кислоты формируется струп (корка)
              жёлто-зелёного оттенка, серной кислоты – черного цвета, соляной кислоты – светло-жёлтого цвета.
            </p>

            <p>Бытовая химия должна храниться в недоступном для детей месте!</p>

            <h3 className="h3" id="elektricheskie-ozhogi">
              Электрические ожоги
            </h3>

            <p>
              <strong>Электроожоги</strong> – местные проявления электротравмы
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Как правило, электроожоги и электротротравма сочетаются. Повреждающее действие электрического
              тока на кожу и мягкие ткани возникает в ответ на действие преобразованной электрической энергии в
              тепловую.
            </p>

            <p>Маленькие дети не должны иметь доступ к электроприборам, розеткам и оголенным проводам.</p>

            <h3 className="h3" id="solnechnye-ozhogi">
              Солнечные ожоги
            </h3>

            <p>
              <strong>Солнечный ожог</strong>, или солнечный дерматит, возникает в результате длительного
              воздействия на кожу ультрафиолетового (UV) излучения. Степень повреждения кожных покровов зависит
              от продолжительности воздействия излучения и фототипа кожи. Чем светлее кожа, тем быстрее может
              возникнуть солнечный ожог. Поэтому перед выходом на солнце очень важно обрабатывать нежную детскую
              кожу специальными защитными средствами.
            </p>

            <h2 className="h2" id="stepeni-tyazhesti-ozhogov">
              Степени тяжести ожогов
            </h2>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-22-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-22-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-22-1300x650.webp"
                alt="Степени тяжести ожогов"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="ozhog-i-stepeni">
              Ожог I степени
            </h3>

            <p>
              Сразу после контакта с поражающим фактором возникает боль, жжение, кожа краснеет, появляется
              отечность кожных покровов, подвергшихся агрессивному воздействию.
            </p>

            <h3 className="h3" id="ozhog-ii-stepeni">
              Ожог II степени
            </h3>

            <p>
              При ожогах II степени происходит гибель поверхностного слоя кожи — эпидермиса. Кожа приобретает
              ярко-красный цвет, появляется отёчность, формируются пузыри с прозрачным содержимым желтоватого
              цвета. Пузыри вскрываются, обнажая ярко-розового цвета раневую поверхность.
            </p>

            <p>
              Особенностью химического ожога II степени является отсутствие образования пузырей. Сразу
              формируется корочка из омертвевшего слоя эпидермиса или же поверхностный слой кожи полностью
              отторгается.
            </p>

            <h3 className="h3" id="ozhogi-iii-a-stepeni">
              Ожоги III-а степени
            </h3>

            <p>
              Происходит омертвение не только эпидермиса, но и верхних слоёв дермы. Также могут формироваться
              пузыри.
            </p>

            <p>
              При ошпаривании паром или горячей водой признаком III-а степени ожога является белесовато-серый
              налёт, влажная корочка.
            </p>

            <p>При контакте с пламенем – сухая светло-коричневая корочка.</p>

            <h3 className="h3" id="ozhogi-iii-b-stepeni">
              Ожоги III-б степени
            </h3>

            <p>
              Характеризуется гибелью всей толщи кожи иногда и подкожной жировой клетчатки.
            </p>

            <p>
              При ожогах паром или горячей водой кожа становится мягкой, напоминающей по консистенции тесто
              бледно-серого цвета.
            </p>

            <p>При ожогах пламенем формируется плотная корочка темно-коричневого цвета.</p>

            <h3 className="h3" id="ozhogi-iv-stepeni">
              Ожоги IV степени
            </h3>

            <p>
              При этой стадии гибнет не только кожа и подкожно-жировая клетчатка, но и расположенные под ней
              оболочки мышц (фасции), мышцы, сухожилия и кости. Струп (корка) толстая, плотная с признаками
              обугливания.
            </p>

            <p>
              При тяжелых ожогах кислотой формируется сухая плотная корка, при ожогах щелочью первые несколько
              суток корочка мягкая, затем либо подвергается гнойному расплавлению, либо высыхает.
            </p>

            <h2 className="h2" id="pervaya-pomoshch-pri-ozhoge">
              Первая помощь при ожоге
            </h2>

            <p>В зависимости от вида полученного ожога алгоритм первой помощи будет несколько различаться.</p>

            <h3 className="h3" id="pervaya-pomoshch-pri-termicheskih-ozhogah">
              Первая помощь при термических ожогах
            </h3>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>Прервать воздействие термического агента.</strong>
                  </p>
                  <p>
                    При контакте с раскаленным предметом, паром или горячей жидкостью немедленно прекращают
                    повреждающее воздействие. Если загорелась одежда от открытого пламени – ее обливают водой,
                    набрасывают брезент или одеяло.
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Охладить поврежденный участок.</strong>
                  </p>
                  <p>
                    После термического воздействия рекомендовано охладить обожженные ткани (холодной водой, снегом,
                    льдом). Данное мероприятие уменьшает температуру тканей и ослабляет повреждающее тепловое
                    действие.
                  </p>
                </div>
              </div>
              <div className="line">
                <p>
                  <strong>Не стоит снимать одежду с обожженного участка, ее следует разрезать и аккуратно удалить</strong>
                  . На доврачебном этапе <strong>прилипшую к ожогу одежду</strong> перед наложением повязки{' '}
                  <strong>не удаляют</strong>, пузыри не прокалывают.
                </p>
              </div>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-3-9-650x150.webp 1x, /istockphoto-1341663000-2048x2048-2-3-9-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-3-9-1300x300.webp"
                alt="Первая помощь при термических ожогах"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="pervaya-pomoshch-pri-elektroozhogah">
              Первая помощь при электроожогах
            </h3>

            <p>
              <strong>Для электрических ожогов</strong> характерно закопчение и металлизация обожженных участков
              вследствие сгорания частиц проводников. Электроожоги часто сочетаются с термическими ввиду возгорания
              одежды.
            </p>

            <p>
              <strong>При повреждении кожи электричеством необходимо:</strong>
            </p>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>Прекратить действие электрического тока.</strong>
                  </p>
                  <p>
                    Отключить прибор или провод от источника электропитания, сбросить токопроводящие провода с
                    пострадавшего, оттащить от оголенных проводов. Человек, оказывающий первую помощь, должен
                    позаботиться о своей безопасности. Перед выполнением манипуляции по обесточиванию необходимо
                    обернуть руки сухой тканью, встать на доску, резиновый коврик или любой другой предмет, не
                    проводящий электричество
                    <sup>
                      <a href="#spisok-literatury">1</a>
                    </sup>
                    .
                  </p>
                </div>
              </div>
              <div className="line">
                <p>
                  После изоляции пострадавшего от источника тока при необходимости провести{' '}
                  <strong>искусственную вентиляцию лёгких и закрытый массаж сердца</strong>. Поднести к носу
                  пострадавшего ватку с 10% раствором аммиака
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>
                  .
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Накрыть</strong> обожженный участок стерильной повязкой.
                </p>
              </div>
            </div>

            <h3 className="h3" id="pervaya-pomoshch-pri-himicheskih-ozhogah">
              Первая помощь при химических ожогах
            </h3>

            <div className="big">
              <div className="line">
                <p>
                  Как можно быстрее <strong>снять одежду</strong>, пропитанную агрессивным веществом.
                </p>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Промыть поврежденный участок.</strong>
                  </p>
                  <p>
                    В течение 10-15 минут пораженные области промывают большим количеством проточной холодной воды.
                    Если контакт химического вещества с кожей длился некоторое время, то время обмывания увеличивают
                    до 40 минут.
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Нейтрализовать химикаты.</strong>
                  </p>
                  <p>
                    При поражениях кислотой используют 2-3% раствор натрия гидрокарбоната (пищевой соды), при
                    воздействии щелочей применяют 2-5% раствор уксусной или лимонной кислоты.
                  </p>
                </div>
              </div>
              <div className="line">
                <p>
                  <strong>Наложить</strong> на участки поражения сухую асептическую повязку.
                </p>
              </div>
            </div>

            <h3 className="h3" id="pervaya-pomoshch-pri-solnechnyh-ozhogah">
              Первая помощь при солнечных ожогах
            </h3>

            <p>
              <strong>Первая помощь при солнечном</strong> ожоге заключается в нанесении на кожу успокаивающих и
              заживляющих средств. При возникновении пузырей, можно рекомендовать влажно-высыхающие повязки с
              раствором танина или отваром коры дуба
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Дерматологи также рекомендуют приём средств от аллергии (антигистаминные средства)
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="lechenie-ozhogov">
              Лечение ожогов
            </h2>

            <div className="list-base">
              <p>
                Для определения тактики лечения и прогнозирования восстановления пораженных тканей кроме{' '}
                <strong>причины ожога</strong> необходимо определить:
              </p>
              <ul>
                <li>
                  <strong>Глубину повреждения</strong>. Для этого оценивают состояние кожных покровов. Покраснение
                  кожи и пузыри трактуются в пользу II степени ожога.
                  <br />
                  Отсутствие болезненности при уколе иглой, выдергивании волос, прикосновении к месту ожога
                  спиртосодержащим веществом, отсутствие «игры капилляров» после прижатия пальцем – в пользу
                  тяжелого повреждения, не меньше, чем III-а степени.
                </li>
                <li>
                  <strong>Площадь повреждения</strong>. Медики в практике используют «правило девяток» и «ладони». Так,
                  голова и одна верхняя конечность составляют по 9% от общей поверхности тела. Одна нижняя
                  конечность, передняя и задняя поверхность тела по 18%, половые органы и промежность — 1%. По
                  правилу «ладони», всю поверхность тела можно измерить ладонями, приняв размер 1 ладони за 1% от
                  всей площади тела.
                </li>
                <li>
                  На основе глубины и площади повреждения врачи рассчитывают{' '}
                  <strong>индекс тяжести поражения</strong>.
                </li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-23-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-23-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-23-1300x650.webp"
                alt="Лечение ожогов"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              Тяжелые ожоги должны лечиться в стационаре, ожоговом отделении. <br />
              В некоторых случаях требуется проведение первичной хирургической обработки для удаления омертвевших
              тканей, пересадки лоскута кожи.
            </p>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                Про обработку ран и ожогов у детей смотрите в коротком видео:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/b4d481279bdfcbafbb01e36ea31c0c4b/?p=aVSDYD--vLEfYAnNlSgG-Q"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Видео про обработку ран и ожогов у детей"
                ></iframe>
              </div>
              <div className="iframe_desc">
                Из видео вы узнаете, как минимизировать дискомфортные ощущения у детей при обработке ран и какое
                средство не будет жечь и щипать, но при этом продезинфицирует травмированную кожу.
              </div>
            </div>

            <h3 className="h3" id="lechenie-ozhogov-na-raznyh-stadiyah-zazhivleniya">
              Лечение ожогов на разных стадиях заживления
            </h3>

            <p>
              При восстановлении обожженной кожи происходят те же процессы, <br />
              что и при заживлении любых ран: стадия воспаления, регенерации, <br />
              созревания (эпитализации и реорганизации рубца).
            </p>

            <p>
              <strong>Фазы заживления ожога</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-24-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-24-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-24-1300x650.webp"
                alt="Фазы заживления ожога"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              Для лечения ожогов I степени используют успокаивающие кремы и мази, содержащие декспантенол, танин.
              Заживление происходит за несколько дней.
            </p>

            <p>
              Ожоги, начиная от II степени тяжести, подвержены инфицированию, поскольку нарушен кожный барьер. Для
              лечения и профилактики раневой инфекции назначают антисептические средства.
            </p>

            <h4 className="h4" id="faza-vospaleniya">
              Фаза воспаления
            </h4>

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
                К выбору антисептического препарата для обработки ожоговых ран нужно подойти особо тщательно. Средство
                должно обладать широким антибактериальным спектром действия, быть безопасным при нанесении, не вызывать
                жжения или болезненных ощущений во время обработки.
              </p>

              <p>
                С этой целью с 70 годов ХХ века начали использовать препараты{' '}
                <a href="/encyclopedia/povidon-jod/">повидон-йода</a>, оказывающие антибактериальное, противогрибковое и
                противовирусное действие
                <sup>
                  <a href="#spisok-literatury">4,7</a>
                </sup>
                . <a href="/encyclopedia/jod/">Йод</a> в комплексе с{' '}
                <a href="/encyclopedia/polivinilpirrolidon/">повидоном</a> не вызывает жжение тканей при нанесении даже
                на открытые раны. Применение раствора и мази повидон-йода при поверхностных травмах приводит к быстрому
                и качественному заживлению ран без значимого воспаления и инфицирования
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                .
              </p>

              <p>
                На основе <strong>повидон-йода</strong> для обеззараживающей обработки раневых поверхностей применяется{' '}
                <strong>10% раствор для наружного использования <span style={{ color: '#0f780b' }}>Бетадин®</span></strong> и{' '}
                <strong>10% мазь для наружного использования</strong>{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span>
                </strong>
                .
              </p>

              <p>
                Средство тонким слоем наносят на поврежденную кожу несколько раз в сутки. При лечении инфицированных
                ран под салфетками, пропитанными раствором или{' '}
                <strong>мазью <span style={{ color: '#0f780b' }}>Бетадин®</span></strong>, в течение первых 5-7 суток
                уменьшается отёк и количество гнойного отделяемого, отмечается уменьшение боли
                <sup>
                  <a href="#spisok-literatury">6</a>
                </sup>
                . <strong>
                  <span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span>
                </strong>{' '}
                раствор и мазь разрешены к применению у детей с месяца жизни
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
                  href="/betadin-rastvor-instruktsiya/"
                >
                  Инструкция
                </a>
              </p>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Повидон йод</strong>
                </p>
                <p>
                  Характеристики и свойства повидон-йода. Для чего применяется повидон-йод? Инструкция по применению
                  раствора, мази, свечей Бетадин<sup>®</sup> с повидон-йодом.
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

            <h4 className="h4" id="faza-regeneracii">
              Фаза регенерации
            </h4>

            <p>
              На этапе регенерации используют восстанавливающие мази и кремы, например, средства на основе солей
              лантана, водного экстракта пшеницы, декспантенола.
            </p>

            <h4 className="h4" id="faza-sozrevaniya">
              Фаза созревания
            </h4>

            <p>
              Созревание рубцовой ткани происходит в третью фазу заживления ран. В зависимости от тяжести ожога могут
              остаться рубцовые изменения. На данном этапе для предотвращения развития грубых рубцов рекомендуется
              использовать кремы и гели на основе силикона, гиалуронидазы.
            </p>

            <h2 className="h2" id="kak-predotvratit-ozhogi-u-detey">
              Как предотвратить ожоги у детей
            </h2>

            <p>
              У детей ожоговые травмы чаще встречаются в возрасте до 5 лет
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Любознательные малыши могут потянуть на себя кастрюлю с кипятком, сунуть палец в розетку, потрогать
              горячий утюг, вылить или распылить средства бытовой химии. Высокий риск возникновения ожогов у маленьких
              детей связан с их неспособностью самостоятельно оценить опасность огня, горячих жидкостей, химических
              веществ.
            </p>

            <div className="list-base">
              <p>
                <strong>Поэтому для предупреждения получения детьми ожоговых ран рекомендуется:</strong>
              </p>
              <ul>
                <li>не оставлять маленького ребенка одного без присмотра</li>
                <li>
                  в помещении, где пребывают маленькие дети, использовать специальные накладки на розетки, защищающие
                  пальчики любопытных малышей
                </li>
                <li>
                  не оставлять кружки, тарелки, кастрюли, сковородки с горячим содержимым в зоне непосредственной
                  досягаемости детей
                </li>
                <li>закрыть отопительные радиаторы защитными накладками</li>
                <li>спички, зажигалки хранить на верхних полках</li>
                <li>электроприборы, находящиеся на столешницах, должны располагаться вдали от источника воды</li>
                <li>перед кормлением ребёнка проверять температуру приготовленной пищи</li>
                <li>
                  средства для чистки сантехники и стекол хранить в специально отведенных для этого местах,
                  недосягаемых для детей
                </li>
                <li>
                  детям до 3 лет не рекомендуют пребывать на открытом солнце без одежды. Рекомендуется использовать
                  солнцезащитные кремы с SPF 50+
                </li>
              </ul>
            </div>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-558x542.webp 1x, /quastion-1115x1084.webp 2x"
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

            <h3 className="h3" id="chto-nelzya-delat-pri-ozhoge-u-detey">
              Что нельзя делать при ожоге у детей?
            </h3>

            <div className="list-base">
              <ul>
                <li>
                  Свежий ожог нельзя смазывать маслом или вазелином, пузыри не прокалывать, не сдирать прилипшую к
                  ожогу одежду. Можно промыть место ожога большим количеством воды.
                </li>
                <li>
                  При солнечном ожоге нельзя использовать сметану, кефир или другие народные средства. Рекомендуется
                  применять специальные средства, например, с декспантенолом.
                </li>
              </ul>
            </div>

            <h3 className="h3" id="mozhno-li-prokalyvat-puzyri-posle-ozhoga">
              Можно ли прокалывать пузыри после ожога?
            </h3>

            <p>
              Для предотвращения инфицирования пузыри после ожога лучше не прокалывать самостоятельно, а обратиться к
              доктору для назначения правильного лечения. Если все же пузыри лопнули, то раневую поверхность нужно
              промыть раствором хлоргексидина или обработать раствором{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                Бетадина<sup>®</sup>
              </mark>
              .
            </p>

            <h3 className="h3" id="kak-dolgo-zazhivayut-ozhogi">
              Как долго заживают ожоги?
            </h3>

            <p>
              В зависимости от глубины ожогового поражения длительность заживления будет разной. При ожоге I степени
              кожа восстановится за несколько дней.
            </p>

            <p>
              При ожогах II степени, если в рану не попадет инфекция, кожа заживет в течение двух недель, при этом может
              остаться временное изменение цвета кожи (пигментация).
            </p>

            <p>
              При ожогах III и IV степени заживление может затянуться до 1,5 месяцев и более. Обычно остаются рубцы и
              нарушение пигментации кожи.
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
                        srcSet="/termicheskij-ozhog-kozhi-prevyu-620x420.webp"
                        type="image/webp"
                      />
                      <Image
                        src="/termicheskij-ozhog-kozhi-prevyu-620x420.webp"
                        alt="Термический ожог кожи-превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Термический ожог кожи</strong>
                    </p>
                    <p>
                      Термический ожог возникает в результате воздействия высокой температуры на кожу и нижележащие
                      ткани. Как оказать первую помощь,и чем обрабатывают такие повреждения?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/termicheskij-ozhog-kozhi/">Подробнее</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
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
                      <strong>Поливинилпирролидон (повидон)</strong>
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
                        srcSet="/mazi-i-kremy-ot-ozhogov-prevyu-246x166%20(1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/mazi-i-kremy-ot-ozhogov-prevyu-246x166%20(1).webp"
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
                Клинические рекомендации Ожоги термические, химические. Ожоги солнечные. Ожоги дыхательных путей//
                ООО Объединение комбустиологов «Мир без ожогов», 2020 год.
              </li>
              <li id="literatura-1">
                Михайловича В.А., Мирошниченко А.Г. Руководство для врачей скорой медицинской помощи // Издательство
                МАПО, 2007 Санкт-Петербург.
              </li>
              <li id="literatura-2">
                Бутов Ю.С., Скрипкина Ю.К., Иванова О. Л. Дерматовенерология. Национальное руководство// ГЭОТАР-Медиа,
                2017 Москва.
              </li>
              <li id="literatura-3">
                Инструкция по медицинскому применению ЛП Бетадин<sup>®</sup>, РЛС.
              </li>
              <li id="literatura-4">
                Владимирова О.В., Лаврешин П.М, Владимиров В.И., Рыбалко А.Е., Зыбинский И.А. Опыт применения препарата
                повидон-йод в лечении поверхностных и глубоких ожогов// Амбулаторная хирургия №3 /4, 2019 г.
              </li>
              <li id="literatura-5">
                Михальский В. В., Богданов А. Е., Жилина С. В., Привиденцев А. И., Аникин А. И., Ульянина А. А. Применение
                препарата Бетадин в лечении инфицированных ран// РМЖ №29 от 23.12.2010.
              </li>
              <li id="literatura-6">
                Инструкция по медицинскому применению препарата Бетадин<sup>®</sup>, раствор, РУ П N015282/03.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
