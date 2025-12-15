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

export default function Puzyrchatka() {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldHide = window.scrollY >= 1000;
      setNavTitleHidden(shouldHide);
      if (shouldHide) {
        setSecondaryNavOpened(false);
      }
    };

    const handleResize = () => {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    };

    handleScroll();
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
                    <span property="name">Пузырчатка: лечение и препараты</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Пузырчатка: лечение и препараты</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Пузырчатка: симптомы, диагностика, лечение</h1>
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
                <h2 className="page-header-subtitle">Что такое пузырчатка?</h2>
                <div className="page-header-body">
                  <p>
                    Пузырчатка (пемфигус) – это широко используемый термин, используемый для описания редкой
                    группы кожных болезней.
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#diagnostika">Диагностика</a>
                  </li>
                  <li>
                    <a href="#lechenie">Лечение пузырчатки</a>
                  </li>
                  <li>
                    <a href="#preparaty-yoda-betadin-dlya-obrabotki-porazhennyh-uchastkov-kozhi">Обработка</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/frame-758-730x615.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/frame-758-730x615.webp"
                      alt="Пузырчатка"
                      width={730}
                      height={615}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}`}>
              <ul>
                <li>
                  <a href="#pochemu-voznikaet-puzyrchatka">Почему возникает пузырчатка?</a>
                </li>
                <li>
                  <a href="#kak-voznikaet-puzyrchatka">Как возникает пузырчатка?</a>
                </li>
                <li>
                  <a href="#vidy-puzyrchatki">Виды пузырчатки</a>
                </li>
                <li>
                  <a href="#diagnostika">Диагностика</a>
                </li>
                <li>
                  <a href="#lechenie">Лечение</a>
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
          className={`nav-content nav-content-fixed${secondaryNavOpened ? ' nav-content__open' : ''}${navTitleHidden ? '' : ' nav-content-title-hidden'}`}
        >
          <ul>
            <li>
              <a href="#pochemu-voznikaet-puzyrchatka">Почему возникает пузырчатка?</a>
            </li>
            <li>
              <a href="#kak-voznikaet-puzyrchatka">Как возникает пузырчатка?</a>
            </li>
            <li>
              <a href="#vidy-puzyrchatki">Виды пузырчатки</a>
            </li>
            <li>
              <a href="#diagnostika">Диагностика</a>
            </li>
            <li>
              <a href="#lechenie">Лечение</a>
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
            <p>
              Отличительной чертой пузырчатки является наличие распространенных вялых пузырей и эрозий,
              возникающих на коже и слизистых оболочках
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <p>
              Термин «пемфигус» происходит от греческого слова «pemphix», что означает «пузырь»
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
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

            <p>
              <strong>Возникновение пузырчатки</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-2-scaled-650x350.webp"
                type="image/webp"
              />
              <Image
                src="/mask-group-2-scaled-650x350.webp"
                alt="Возникновение пузырчатки"
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Заболеваемость</h3>

            <p>
              Согласно эпидемиологическим данным, пузырчатка составляет всего 1% от всех кожных заболеваний
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              . В одном исследовании, проведенном в Великобритании, сообщается, что заболеваемость составляет
              0,68 случаев на 100 000 человек в год
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Заболеваемость варьируется в разных частях мира. Так, пузырчатка более распространена на Ближнем
              и Среднем Востоке, чем в Западной Европе и Северной Америке
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            <p>
              Чаще заболеванию подвержены люди среднего возраста (40-60 лет), 60% от всех пациентов с пузырчаткой
              — это женщины
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              .
            </p>

            <h3 className="h3">Как проявляется пузырчатка?</h3>

            <div className="list-base">
              <p>Симптомы пузырчатки:</p>
              <ul>
                <li>
                  Образование вялых пузырей, которые легко разрываются, оставляя после себя эрозии, окруженные
                  обрывками лопнувших пузырей.
                </li>
                <li>Пузыри появляются как на коже туловища, так и на слизистых оболочках.</li>
                <li>Болезненность в области поражений.</li>
              </ul>
            </div>

            <h2 className="h2" id="pochemu-voznikaet-puzyrchatka">
              Почему возникает пузырчатка?
            </h2>

            <div className="list-base">
              <p>
                <strong>Существует несколько теорий развития этого заболевания:</strong>
              </p>
              <ul>
                <li>Инфекционная</li>
                <li>Нейрогенная (следствие неврологических заболеваний)</li>
                <li>Токсическая</li>
                <li>
                  Наследственная
                  <sup>
                    <a href="#spisok-literatury">4</a>
                  </sup>
                </li>
              </ul>
            </div>

            <p>
              В механизме возникновения пузырчатки значительную роль играет генетическая предрасположенность. В
              крови людей, имеющих предрасположенность к данному заболеванию, при воздействии провоцирующих
              факторов начинается выработка веществ (аутоантител), указывающих на нарушение функций иммунной
              системы. В результате чего возникает дебют (начало) пузырчатки
              <sup>
                <a href="#spisok-literatury">4,13</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="kak-voznikaet-puzyrchatka">
              Как возникает пузырчатка?
            </h2>

            <p>
              Центральное место в механизме возникновения пузырчатки занимает акантолиз – разрушение и потеря связи
              между клетками кожи и возникновение вялых пузырей, характерного клинического признака пузырчатки
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <p>
              При этом акантолиз возникает в ответ на появление антител (IgG) против поверхностных структур клеток
              кожи – белков, находящихся в составе межклеточных контактов. Эти белки (десмоглеины) важны для
              межклеточной связи и передачи сигналов между клетками кожи. Под действием антител происходит
              разрушение белков, теряется связь между клетками, нарушается целостность кожных покровов.
            </p>

            <h2 className="h2" id="vidy-puzyrchatki">
              Виды пузырчатки
            </h2>

            <div className="list-base">
              <p>
                <strong>Наружный пласт кожи, эпидермис, состоит из 5 слоев:</strong>
              </p>
              <ul>
                <li>Рогового</li>
                <li>Блестящего</li>
                <li>Зернистого</li>
                <li>Шиповатого</li>
                <li>Базального</li>
              </ul>
            </div>

            <div className="list-base">
              <p>
                В зависимости от слоя локализации пузырей, внешних проявлений заболевания, а также факторов,
                спровоцировавших их возникновение
                <strong>
                  , пузырчатку принято разделять на следующие виды
                  <sup>
                    <a href="#spisok-literatury">8,11</a>
                  </sup>
                  :
                </strong>
              </p>
              <ul>
                <li>Обыкновенная</li>
                <li>Вегетирующая</li>
                <li>Листовидная</li>
                <li>Паранеопластическая</li>
                <li>Вызванная лекарственными средствами</li>
              </ul>
            </div>

            <p>
              <strong>Структура поверхностного слоя кожи</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-39-650x352.webp"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-39-650x352.webp"
                alt="Структура поверхностного слоя кожи"
                width={650}
                height={352}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Вульгарная (обыкновенная) пузырчатка</h3>

            <div className="list-base">
              <ul>
                <li>
                  Характеризуется возникновением пузырей и эрозий, локализующихся на слизистых оболочках (ротовая
                  полость, половые органы) и на коже (грудь, спина, плечи).
                </li>
                <li>
                  Поражения слизистой рта могут существовать до 4 месяцев, прежде чем станут очевидными изменения
                  кожи.
                </li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-5-scaled-650x350.webp"
                type="image/webp"
              />
              <Image
                src="/mask-group-5-scaled-650x350.webp"
                alt="Вульгарная пузырчатка"
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Вегетирующая пузырчатка</h3>

            <div className="list-base">
              <ul>
                <li>
                  Вегетирующая пузырчатка характеризуется возникновением пузырей и/или пустул (гнойничков) вокруг
                  естественных отверстий и внутри кожных складок.
                </li>
                <li>
                  После вскрытия пузырей образуются эрозии, на дне которых появляются разрастания — вегетации.
                </li>
              </ul>
            </div>

            <h3 className="h3">Листовидная пузырчатка</h3>

            <div className="list-base">
              <ul>
                <li>
                  Для листовидной формы пузырчатки характерно появление плоских, «сдутых» пузырей, покрытых корками,
                  напоминающие листья.
                </li>
                <li>
                  Локализуются поражения в области лица, волосистой части головы, верхней части туловища.
                </li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/ris-puzyrchatka-listovideaya-scaled-650x350.webp"
                type="image/webp"
              />
              <Image
                src="/ris-puzyrchatka-listovideaya-scaled-650x350.webp"
                alt="Листовидная пузырчатка"
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              <strong>Подтипы листовидной пузырчатки:</strong>
            </p>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>Эритематозная (себорейная, синдром Сенира—Ашера) пузырчатка</strong>
                  </p>
                  <p>
                    Появление на фоне покраснения жирных чешуек и корок желто-коричневого цвета. Также возможно
                    появление быстро разрывающихся пузырей с возникновением на их месте эрозий. Высыпания
                    локализуются в таких местах с повышенным выделением кожного сала, как волосистая часть головы,
                    лицо, межлопаточная область, верхняя часть грудной клетки.
                  </p>
                </div>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>Бразильская пузырчатка</strong>
                  </p>
                  <p>Форма листовидной пузырчатки, обнаруженная в сельских районах Бразилии.</p>
                </div>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>Герпетиформная пузырчатка</strong>
                  </p>
                  <p>
                    Характеризуется возникновением скоплений узелков (папул) и пузырьков (везикул)
                    <sup>
                      <a href="#spisok-literatury">11</a>
                    </sup>
                    .
                  </p>
                </div>
              </div>
            </div>

            <h3 className="h3">Паранеопластическая пузырчатка</h3>

            <div className="list-base">
              <ul>
                <li>
                  При паранеопластической пузырчатке появляются различные поражения в виде пузырей, эрозий, пятен,
                  узелков, локализующихся на лице, волосистой части головы, туловище и конечностях.
                </li>
                <li>
                  Возникновение этого типа пузырчатки обусловлено злокачественным заболеванием
                  <sup>
                    <a href="#spisok-literatury">10</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <h3 className="h3">Пузырчатка, вызванная лекарственными средствами</h3>

            <div className="list-base">
              <ul>
                <li>
                  Данный вид пузырчатки имеет схожие проявления с вульгарной, себорейной или листовидной пузырчаткой.
                </li>
                <li>
                  Поражения локализуются в области подмышечных впадин, туловища, верхних и нижних конечностей
                  <sup>
                    <a href="#spisok-literatury">11,14</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <h2 className="h2" id="diagnostika">
              Диагностика пузырчатки
            </h2>

            <p>
              Хотя большинство случаев пузырчатки диагностируется визуально, биопсия кожи (образец кожи на
              исследование) и анализ сыворотки также могут помочь подтвердить заболевание врачом.
            </p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>Визуальный осмотр</strong> – вялые пузыри и эрозии.
                </p>
              </div>

              <div className="line">
                <p>
                  <strong>Положительный феномен Никольского</strong> (отслойка внешне непораженной кожи,
                  локализующейся вокруг эрозии), <strong>феномен Асбо-Хансена</strong> (увеличении площади пузыря при
                  надавливании на него).
                </p>
              </div>

              <div className="line">
                <p>
                  <strong>Цитологическое исследование</strong> – обнаружение акантолитических клеток (измененных частиц
                  шиповатого слоя кожи) в мазках-отпечатках.
                </p>
              </div>

              <div className="line">
                <p>
                  <strong>Гистологическое исследование</strong> – обнаружение внутриэпидермального пузыря в шиповатом
                  слое кожи.
                </p>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>Иммуногистохимическое исследование:</strong>
                  </p>
                  <ul>
                    <li>
                      Реакция непрямой иммунофлюоресценции –аутоантитела класса IgG в сыворотке крови.
                    </li>
                    <li>
                      Реакция прямой иммунофлюоресценции – фиксация аутоантител класса IgG в шиповатом слое кожи.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="line">
                <p>
                  <strong>Метод ELISA (иммуноферментный анализ)</strong> – взаимодействие аутоантител с определенными
                  белками кожи (десмоглеинами)
                  <sup>
                    <a href="#spisok-literatury">6</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <h2 className="h2" id="lechenie">
              Лечение пузырчатки
            </h2>

            <div className="list-base">
              <p>
                <strong>
                  Основной целью лечения является заживление пузырей на коже и/или слизистых, а также
                  минимизирование, насколько это возможно, серьезных побочных эффектов лечения.
                </strong>
              </p>
              <ul>
                <li>Пузырчатка может быть опасной для жизни и требует интенсивного и быстрого применения системных кортикостероидов.</li>
                <li>Иммунодепрессанты также используются при тяжелых формах заболевания.</li>
                <li>
                  Лечение тяжелых и упорных случаев может проводиться кортикостероидами в виде внутривенной
                  пульс-терапии, плазмафереза и внутривенного иммуноблотинга
                  <sup>
                    <a href="#spisok-literatury">6</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <div className="green">
              <p>Все случаи пузырчатки требуют внимания к местному лечению, особенно на ранних стадиях заболевания.</p>
            </div>

            <h3 className="h3">Лечение пузырчатки местными средствами</h3>

            <p>
              Местная терапия пузырчатки, по сути, симптоматическая — она проводится для облегчения воспаления и
              предотвращения вторичных инфекций.
            </p>

            <div className="list-base">
              <p>
                <strong>Обычно очаги поражения обрабатываются:</strong>
              </p>
              <ul>
                <li>
                  Анилиновыми красителями и <strong>антисептическими</strong> растворами с противомикробным действием
                  (например, раствор повидон-йода, зеленка).
                </li>
                <li>
                  <strong>Кортикостероидными мазями</strong>, которые оказывают противовоспалительное и
                  иммуносупрессивное действие.
                </li>
                <li>
                  <strong>Ингибиторами кальциневрина</strong>, которые оказывают противовоспалительное действие.
                </li>
                <li>
                  <strong>Комбинированными кортикостероидными мазями</strong> (гидрокортизон+антибиотики) с
                  противовоспалительным и антимикробным действием.
                </li>
              </ul>
            </div>

            <p>
              На кожные эрозивные поражения следует накладывать неадгезивные (не прилипающие к раневой поверхности)
              повязки. Поддерживающий уход за поражениями в полости рта включает гели с местными анестетиками и
              надлежащий уход за зубами.
            </p>

            <p>
              Правильный уход за раной поможет снизить дискомфорт у пациента и уменьшит риск инфицирования
              <sup>
                <a href="#spisok-literatury">9</a>
              </sup>
              .
            </p>

            <h3 className="h3" id="preparaty-yoda-betadin-dlya-obrabotki-porazhennyh-uchastkov-kozhi">
              Препараты йода (Бетадин®) для обработки пораженных пузырчаткой участков кожи
            </h3>

            <p>
              Используемое для данного заболевания лечение кожных эрозий при пузырчатке (герпетиформнный дерматит
              Дюринга является противопоказанием) включает применение препаратов{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Бетадин<sup>®</sup>
              </mark>{' '}
              (<a href="/encyclopedia/jod-maz/">мази</a> и <a href="/encyclopedia/rastvor-joda/">раствора</a>) дважды в
              день с последующим наложением повязок
              <sup>
                <a href="#spisok-literatury">16</a>
              </sup>
              .
            </p>

            <p>
              Препараты повидон-йода обладают антимикробным и ранозаживляющим действием, что позволяет предотвратить
              попадание инфекций на участки эрозий при пузырчатке.
            </p>

            <p>
              Антимикробное действие широкого спектра достигается за счет предотвращения роста бактерий, а
              ранозаживляющее действие – за счет низкого уровня цитотоксичности (не повреждает клетки тканей, которые
              восстанавливают участок поражения)
              <sup>
                <a href="#spisok-literatury">17</a>
              </sup>
              .
            </p>

            <p>
              Кроме того, повидон-йод активен <strong>in vitro</strong> против биопленок, образованных синегнойной
              палочкой, Candida albicans + метициллин-резистентным золотистым стафилококком (MRSA), – особой формы
              жизни некоторых патогенов, с помощью которой они становятся нечувствительны ко многим лекарствам
              <sup>
                <a href="#spisok-literatury">20</a>
              </sup>
              .
            </p>

            <h4 className="h4">Что из себя представляют препараты Бетадин®</h4>

            <p>
              <a href="/encyclopedia/povidon-jod/">Повидон-йод</a> (Бетадин<sup>®</sup>) — йодофор, состоящий из
              комбинации йода и носителя – <a href="/encyclopedia/jod/">повидона</a>. При контакте с кожей или
              слизистыми йод постепенно высвобождается из комплекса с повидоном и способствует разрушению вредоносных
              микроорганизмов.
            </p>

            <h4 className="h4">Против каких микроорганизмов активны препараты Бетадин®?</h4>

            <p>
              Преимуществом препарата Бетадин<sup>®</sup> является широкий спектр активности против различных
              микроорганизмов, включая грамположительные и грамотрицательные бактерии (также некоторые штаммы,
              устойчивые к антисептикам и антибиотикам), грибки, простейшие, вирусы, бактериальные споры
              <sup>
                <a href="#spisok-literatury">17,20,21</a>
              </sup>
              .
            </p>

            <h4 className="h4">Как используют препараты Бетадин®</h4>

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
                <strong>Препарат Бетадин® используется в виде раствора и мази</strong>
                <sup>
                  <a href="#spisok-literatury">18,19</a>
                </sup>
                :
              </p>

              <ul>
                <li>Бетадин в форме раствора в неразбавленном виде наносят на очаги поражения.</li>
                <li>
                  Бетадин<sup>®</sup> в форме мази наносят тонким слоем на очаги поражения 1-2 раза сутки. Использование
                  любых лекарственных препаратов должно проходить строго под контролем врача, поскольку каждое
                  средство имеет противопоказания и особенности применения в зависимости от тяжести заболевания.
                </li>
              </ul>

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

            <h3 className="h3">Какие заболевания имеют схожие с пузырчаткой симптомы?</h3>

            <div className="list-base">
              <p>Заболевания со схожими симптомами многочисленны:</p>
              <ul>
                <li>
                  <strong>Аутоиммунные заболевания:</strong> буллезный пемфигоид, пемфигоид слизистых оболочек,
                  пемфигоидный красный плоский лишай, приобретенный буллезный эпидермолиз, линейный IgA-буллезный
                  дерматоз и буллезная красная волчанка.
                </li>
                <li>
                  <strong>Инфекционные заболевания:</strong> стафилококковый синдром ошпаренной кожи, буллезное импетиго
                  и острый герпетический стоматит.
                </li>
                <li>
                  <strong>Генетические заболевания:</strong> болезнь Хейли—Хейли.
                </li>
                <li>
                  <strong>Другие:</strong> афтозный стоматит, многоформная эритема, синдром Стивенса—Джонсона, токсический
                  эпидермальный некролиз, красный плоский лишай, реакция «трансплантат против хозяина», болезнь Гровера
                  (преходящий акантолитический дерматоз), себорейный дерматит
                  <sup>
                    <a href="#spisok-literatury">8</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <h3 className="h3">Какие осложнения пузырчатки?</h3>

            <p>
              Осложнениями пузырчатки могут быть вторичные бактериальные инфекции, язвы на коже, сепсис, гангрена
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              .
            </p>

            <h3 className="h3">Какие побочные эффекты кортикостероидной терапии?</h3>

            <p>
              При длительном применении кортикостероидов могут возникнуть побочные эффекты, такие как диабет,
              медикаментозный синдром Иценко—Кушинга (ожирение, артериальная гипертония, остеопороз, сахарный диабет,
              мочекаменная болезнь, гипертония или остеопороз). Предпочтительно сочетать системные кортикостероиды с
              иммунодепрессантами, чтобы избежать побочных эффектов
              <sup>
                <a href="#spisok-literatury">4,7</a>
              </sup>
              .
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Тамразова Ольга Борисовна</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Автор статьи</p>
              </div>
              <picture>
                <source
                  srcSet="/tamrazova-olga-borisovna-1-179x203.webp"
                  type="image/webp"
                />
                <Image
                  src="/tamrazova-olga-borisovna-1-179x203.webp"
                  alt="Тамразова Ольга Борисовна"
                  width={179}
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
                        srcSet="/povidon-jod-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/povidon-jod-prevyu-246x166 (1).webp"
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
                      Характеристики и свойства повидон-йода. Для чего применяется повидон-йод? Инструкция по применению
                      раствора, мази, свечей Бетадин<sup>®</sup> с повидон-йодом.
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
                        srcSet="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166 (1).webp"
                        alt="Пиодермия: лечение, мази, кремы, средства - превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Пиодермия: лечение, мази, кремы, средства</strong>
                    </p>
                    <p>
                      Причины появления пиодермии, симптомы, виды и способы лечения. Профилактика гнойничковых
                      заболеваний.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/piodermiya/">Подробнее</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/impetigo-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/impetigo-prevyu-246x166 (1).webp"
                        alt="Импетиго-превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Импетиго</strong>
                    </p>
                    <p>Импетиго — распространенная кожная инфекция. Почему она возникает, и как правильно ее лечить?</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/impetigo/">Подробнее</Link>
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
                Malik AM, Tupchong S, Huang S, Are A, Hsu S, Motaparthi K. An Updated Review of Pemphigus Diseases.
                Medicina (Kaunas). 2021;57(10):1080. Published 2021 Oct 9. doi:10.3390/medicina57101080.
              </li>
              <li id="literatura-1">
                Langan SM, Smeeth L, Hubbard R, Fleming KM, Smith CJ, West J. Bullous pemphigus and pemphigus vulgaris—incidence
                and mortality in the UK: population based cohort study. BMJ. 2008;337(7662):a180. Published 2008 Jul 9.
                doi:10.1136/bmj.a180.
              </li>
              <li id="literatura-2">
                Simon DG, Krutchkoff D, Kaslow RA, Zarbo R. Pemphigus in Hartford County, Connecticut, from 1972 to 1977.
                Arch Dermatol. 1980;116(9):1035-1037.
              </li>
              <li id="literatura-3">
                Олисовой О. Ю. Кожные и венерические болезни: учебник/ Практическая медицина, 2017, Москва.
              </li>
              <li id="literatura-4">
                Groves RW. Pemphigus: a brief review. Clin Med (Lond). 2009;9(4):371-375. doi:10.7861/clinmedicine.9-4-371.
              </li>
              <li id="literatura-5">
                Pile H.D., Yarrarapu S.N.S., Crane J.S. StatPearls. StatPearls Publishing; Treasure Island, FL, USA: 2021.
                Drug Induced Pemphigus.
              </li>
              <li id="literatura-6">
                Groves RW. Pemphigus: a brief review. Clin Med (Lond). 2009;9(4):371-375. doi:10.7861/clinmedicine.9-4-371.
              </li>
              <li id="literatura-7">
                Craske MG, Stein MB, Eley TC, et al. Anxiety disorders [published correction appears in Nat Rev Dis Primers.
                2017 Dec 14;3:17100]. Nat Rev Dis Primers. 2017;3:17024. Published 2017 May 4. doi:10.1038/nrdp.2017.24.
              </li>
              <li id="literatura-8">
                Di Lernia V, Casanova DM, Goldust M, Ricci C. Pemphigus Vulgaris and Bullous Pemphigoid: Update on Diagnosis
                and Treatment. Dermatol Pract Concept. 2020;10(3):e2020050. Published 2020 Jun 29.
                doi:10.5826/dpc.1003a50.
              </li>
              <li id="literatura-9">
                Волкова М. А., Кичигина М. Ю., Потекаев Н. С., Теплюк Н. П., Куприянова А. Г. Паранеопластическая пузырчатка
                — редкое аутоиммунное осложнение при хроническом лимфолейкозе // Онкогематология № 1 2007.
              </li>
              <li id="literatura-10">
                Клинические рекомендации Пузырчатка// Российское общество дерматовенерологов и косметологов, 2020 года.
              </li>
              <li id="literatura-11">
                Карамова А.Э., Знаменская Л.Ф., Чикин В.В., Михина В.А., Нефедова М.А. IgG/IgA-пузырчатка — редкий
                аутоиммунный буллезный дерматоз //Вестник дерматологии венерологии Том 96, № 1 2020.
              </li>
              <li id="literatura-12">
                Давиденко Е.Б., Махнева Н.В., Белецкая Л.В. Современный взгляд на патогенез и факторы, способствующие
                развитию аутоиммунной пузырчатки// Клиническая дерматология и венерология. 2013;11(3):4 13.
              </li>
              <li id="literatura-13">
                Drug Induced Pemphigus <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Pile+HD&cauthor_id=29763039">Hannah D.
                Pile</a>
                <a href="https://pubmed.ncbi.nlm.nih.gov/29763039/#affiliation-1">1</a>,{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Yarrarapu+SNS&cauthor_id=29763039">Siva Naga S. Yarrarapu</a>{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29763039/#affiliation-2">2</a>,{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Crane+JS&cauthor_id=29763039">Jonathan S. Crane</a>{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29763039/#affiliation-3">3</a> In: StatPearls [Internet]. Treasure
                Island (FL): StatPearls Publishing; 2022 Jan. 2022 May 8. PMID: 29763039 Bookshelf ID:{' '}
                <a href="http://www.ncbi.nlm.nih.gov/books/nbk499864/">NBK499864</a>.
              </li>
              <li id="literatura-14">
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5751135/">Int J Mol Sci.</a>2017 Dec; 18(12): 2532.
                Published online 2017 Nov 26. Paraneoplastic Pemphigus: Insight into the Autoimmune Pathogenesis, Clinical
                Features and Therapy <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Paolino%20G%5BAuthor%5D">Giovanni Paolino
                </a>
                ,1,2,* <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Didona%20D%5BAuthor%5D">Dario Didona</a>,3{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Magliulo%20G%5BAuthor%5D">Giuseppe Magliulo</a>,4{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Iannella%20G%5BAuthor%5D">Giannicola Iannella</a>,4{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Didona%20B%5BAuthor%5D">Biagio Didona</a>,3{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Mercuri%20SR%5BAuthor%5D">Santo Raffaele Mercuri</a>,1 et al.
                PMCID: PMC5751135 PMID:{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29186863">29186863</a> doi:{' '}
                <a href="https://doi.org/10.3390%2Fijms18122532">3390/ijms18122532.</a>
              </li>
              <li id="literatura-15">
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3883438/">Dent Clin North Am.</a>
                <a href="https://www.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?dbfrom=pubmed&retmode=ref&cmd=prlinks&id=24034068">
                  Dent Clin North Am. 2013 Oct; 57(4): 10.1016/j.cden.2013.06.002.
                </a>
                Published online 2013 Aug 12. Pemphigus{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Santoro%20FA%5BAuthor%5D">Frank A. Santoro</a>, M.D.,1,2,3{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Stoopler%20ET%5BAuthor%5D">Eric T. Stoopler</a>, D.M.D.,4 and{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Werth%20VP%5BAuthor%5D">Victoria P. Werth</a>, M.D.2,3 PMCID:
                PMC3883438 NIHMSID: NIHMS514762 PMID:{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24034068">24034068</a> doi:{' '}
                <a href="https://doi.org/10.1016%2Fj.cden.2013.06.002">1016/j.cden.2013.06.002.</a>
              </li>
              <li id="literatura-16">
                Int J Surg. 2017 Aug;44:260-268. Povidone iodine in wound healing: A review of current concepts and practices{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Bigliardi+PL&cauthor_id=28648795">Paul Lorenz Bigliardi</a>
                <a href="https://pubmed.ncbi.nlm.nih.gov/28648795/#affiliation-1">1</a>,{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Alsagoff+SAL&cauthor_id=28648795">Syed Abdul Latiff Alsagoff</a>{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28648795/#affiliation-2">2</a>,{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=El-Kafrawi+HY&cauthor_id=28648795">Hossam Yehia El-Kafrawi</a>{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28648795/#affiliation-3">3</a>,{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Pyon+JK&cauthor_id=28648795">Jai-Kyong Pyon</a>{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28648795/#affiliation-4">4</a>,{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Wa+CTC&cauthor_id=28648795">Chad Tse Cheuk Wa</a>{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28648795/#affiliation-5">5</a>,{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Villa+MA&cauthor_id=28648795">Martin Anthony Villa</a>{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28648795/#affiliation-6">6</a> PMID: 28648795 DOI:{' '}
                <a href="https://doi.org/10.1016/j.ijsu.2017.06.073">1016/j.ijsu.2017.06.073.</a>
              </li>
              <li id="literatura-17">Инструкция по медицинскому применению препарата Бетадин (раствор). РУП N015282/03.</li>
              <li id="literatura-18">Инструкция по медицинскому применению препарата Бетадин (мазь). РУП N015282/02.</li>
              <li id="literatura-19">
                Hoekstra MJ, Westgate SJ, Mueller S. Povidone-iodine ointment demonstrates in vitro efficacy against biofilm
                formation. Int Wound J. 2017 Feb;14(1):172-179. doi: 10.1111/iwj.12578.
              </li>
              <li id="literatura-20">
                Zamora JL. Chemical and microbiologic characteristics and toxicity of povidone-iodine solutions. Am J Surg.
                1986 Mar;151(3):400-6. doi: 10.1016/0002-9610(86)90477-0.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
