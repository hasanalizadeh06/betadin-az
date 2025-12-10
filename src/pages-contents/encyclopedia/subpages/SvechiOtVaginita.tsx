'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function SvechiOtVaginita() {
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
                    <span property="name">Свечи от вагинита</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Свечи от вагинита</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Свечи от вагинита: виды и как выбрать</h1>
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      height={112}
                      width={115}
                      src="/images/encyclopedia/svechi-icon.png"
                      alt="картинка у заголовка"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Почему врачи назначают свечи от вагинита, и какие проблемы они решают?</h2>
                <div className="page-header-body">
                  <p>
                    Согласно международной статистике, самые частые интимные жалобы пациенток на приеме у врачей-гинекологов – это «странные» выделения из половых путей.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#chto-predstavlyaet-iz-sebya-vaginit">Заболевания</a>
                  </li>
                  <li>
                    <a href="#kak-vybrat-svechi-ot-vaginita">Лечение</a>
                  </li>
                  <li>
                    <a href="#profilaktika-vaginita">Профилактика</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1632/b4eeb7e96db3dbed0dcf1a02e88acd5ed68e87205867a21b05d0e65d3a2df74d-730x615/kartinka-banner-5-2-697x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1632/b4eeb7e96db3dbed0dcf1a02e88acd5ed68e87205867a21b05d0e65d3a2df74d-730x615/kartinka-banner-5-2-1394x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={697}
                      src="/images/encyclopedia/svechi-vaginit-header.jpg"
                      alt="Свечи от вагинита"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#svechi-ot-vaginita--kakie-luchshe">Свечи от вагинита – какие лучше?</a>
                </li>
                <li>
                  <a href="#kak-vybrat-svechi-ot-vaginita">Как выбрать свечи от вагинита?</a>
                </li>
                <li>
                  <a href="#profilaktika-vaginita">Профилактика вагинита</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
                </li>
                <li>
                  <a href="#literatura">Список литературы</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross">Содержание</div>
            </nav>
          </div>
        </div>

        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#svechi-ot-vaginita--kakie-luchshe">Свечи от вагинита – какие лучше?</a>
            </li>
            <li>
              <a href="#kak-vybrat-svechi-ot-vaginita">Как выбрать свечи от вагинита?</a>
            </li>
            <li>
              <a href="#profilaktika-vaginita">Профилактика вагинита</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="#literatura">Список литературы</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross">Содержание</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Наиболее вероятной и частой причиной таких симптомов интимного дискомфорта является вагинит (воспалительный процесс во влагалище)
              <sup>
                <a href="#literatura-0">1,2</a>
              </sup>
              . Врач-гинеколог назначает лекарственные препараты после клинического и лабораторного обследования женщины. При{' '}
              <a href="https://betadin.ru/encyclopedia/vaginit/" title="Вагинит лечение">
                воспалении слизистой влагалища
              </a>
              применяют местные средства лечения, которые вводят во влагалище. Преимуществом данных препаратов является действие непосредственно в очаге воспаления. Распространенной формой препаратов для местного лечения воспалительных процессов во влагалище являются вагинальные свечи
              <sup>
                <a href="#literatura-1">2,3</a>
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

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Лечение вагинита</strong>
                </p>
                <p>
                  Когда возникает вагинит — воспаление слизистой оболочки влагалища? Причины появления и лечение данного заболевания.
                </p>
                <a href="https://betadin.ru/encyclopedia/vaginit/" className="btn btn-green" target="_blank" rel="noreferrer">
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-310x235/lechenie-vaginita-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-310x235/lechenie-vaginita-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="/images/encyclopedia/lechenie-vaginita.png"
                  alt="Лечение вагинита - превью"
                />
              </picture>
            </div>

            <h3 id="chto-predstavlyaet-iz-sebya-vaginit">Что представляет из себя вагинит</h3>
            <p>
              <strong>Вагинит (кольпит)</strong> – это воспаление слизистой оболочки влагалища, которое спровоцировано чаще условно-патогенными микроорганизмами. В микрофлоре влагалища условно-патогенные микроорганизмы в норме находятся в небольшом количестве. Их активность контролируют «хорошие» микроорганизмы – лактобактерии.
            </p>

            <p>
              <strong>Воспаление влагалища</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1633/f776707c6ac9ff31051f4726f87582264b3fc3515e90d232e41776d9e4e7eade-650x0/medical-kit-and-bandaid-509398-488-1-33-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1633/f776707c6ac9ff31051f4726f87582264b3fc3515e90d232e41776d9e4e7eade-650x0/medical-kit-and-bandaid-509398-488-1-33-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/vaginal-inflammation.png"
                alt="Воспаление влагалища"
              />
            </picture>

            <div className="list-base">
              <p>
                Факторы, влияющие на рост количества условно-патогенных микроорганизмов
                <sup>
                  <a href="#literatura-0">1,3-5</a>
                </sup>
                :
              </p>
              <ul>
                <li>
                  снижение количества лактобактерий (полезных микроорганизмов, поддерживающих естественный баланс всей микрофлоры влагалища)
                </li>
                <li>нарушение уровня кислотности среды во влагалище</li>
                <li>снижение общего и/или местного иммунитета</li>
                <li>обострение хронических заболеваний</li>
                <li>нарушение правил интимной гигиены</li>
                <li>применение антимикробных препаратов</li>
              </ul>
            </div>

            <p>
              Причиной вагинита могут быть инфекции, передаваемые половым путем (ИППП), когда происходит прямой контакт с возбудителями.
            </p>

            <h2 id="svechi-ot-vaginita--kakie-luchshe">Свечи от вагинита – какие лучше?</h2>
            <p>
              Существует широкий спектр препаратов, выпускаемых в форме вагинальных свечей и применяемых в лечении воспалительных процессов во влагалище. Это средства с местным антибактериальным, противогрибковым и антисептическим действием. Препараты бывают с одним действующим веществом или с сочетанием нескольких активных компонентов.
            </p>

            <p>Ниже представлена характеристика некоторых препаратов в форме свечей, применяемых для местного лечения вагинита.</p>

            <h3>Повидон-йод (Бетадин®)</h3>

            <h4>Характеристика</h4>

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
                Местный антисептик, обладающий широким спектром действия в отношении грамм-положительных и грамм-отрицательных бактерий, вирусов, некоторых простейших, грибов и их спор.
              </p>

              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-svechi-instruktsiya/">
                  Инструкция
                </a>
              </p>
            </div>

            <h4>Особенности действия</h4>
            <p>
              Повидон-йод является комплексом{' '}
              <a href="https://betadin.ru/encyclopedia/jod/" title="Йод">
                йода
              </a>{' '}
              и повидона, который высвобождает йод постепенно из свечей <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  Бетадин<sup>®</sup>
                </strong>
              </mark>
              , это оказывает продолжительное воздействие на широкий спектр патогенных микроорганизмов.
            </p>

            <p>
              Активный йод разрушает структуру клетки, тем самым вызывая ее гибель. Большинство микробов уничтожается уже через минуту после воздействия на них активного йода, что способствует снижению проявления неприятных симптомов воспаления
              <sup>
                <a href="#literatura-5">6</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1634/23c9c4b4f16f32ff1b704118b62b134d1300e41b1d4fb2aba524c84720aed1c5-650x0/medical-kit-and-bandaid-509398-488-1-34-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1634/23c9c4b4f16f32ff1b704118b62b134d1300e41b1d4fb2aba524c84720aed1c5-650x0/medical-kit-and-bandaid-509398-488-1-34-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/svechi-treatment.png"
                alt="свечи лечение воспаления"
              />
            </picture>

            <h4>Режим дозирования и приема</h4>
            <p>
              Свечи{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  Бетадин<sup>®</sup>
                </strong>
              </mark>{' '}
              показаны к применению при вагинитах, вызванных трихомониазом, кандидозе, смешанных неспецифических инфекциях (в том числе в хронических формах), инфекциях влагалища после терапии антибиотиками или стероидными препаратами. Свечи{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  Бетадин<sup>®</sup>
                </strong>
              </mark>{' '}
              используются для профилактики перед хирургическими или диагностическими вмешательствами во влагалище.
            </p>

            <p>
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  Бетадин<sup>®</sup>
                </strong>
              </mark>{' '}
              используют по 1 вагинальной свече во влагалище в течение 7 дней. В случае сохранения симптомов длительность терапии может быть увеличена еще на 7 дней. Использовать препарат рекомендуется на ночь с применением ежедневной прокладки.
            </p>

            <p>
              Свечи{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  Бетадин<sup>®</sup>
                </strong>
              </mark>{' '}
              не применяются при беременности и кормлении грудью, а также у женщин с заболеваниями щитовидной железы.
            </p>

            <h3>Хлоргексидина биглюконат</h3>

            <h4>Характеристика</h4>
            <p>Местный антисептик.</p>

            <h4>Особенности действия</h4>
            <p>
              Эффективен в отношении ряда грамм-положительных и грамм-отрицательных микроорганизмов, а также вирусов простого герпеса.
            </p>

            <h4>Режим дозирования и приема</h4>
            <p>
              Показанием для назначения препарата является профилактика инфекций, передаваемых половым путем, профилактика перед акушерско-гинекологическими операциями и манипуляциями, а также лечение неспецифических вагинитов.
            </p>

            <p>
              Стандартная схема лечения состоит из применения 2 влагалищных свечей в сутки (утром и вечером) в течение 7-10 дней
              <sup>
                <a href="#literatura-14">15</a>
              </sup>
              .
            </p>

            <h2 id="kak-vybrat-svechi-ot-vaginita">Как выбрать свечи от вагинита?</h2>
            <p>
              При выборе средства для лечения вагинита врач обязательно учитывает чувствительность к нему микроорганизмов (возбудителей заболевания). Нередко предпочтение отдается средствам широкого спектра действия, а также препаратам, которые способны не просто остановить размножение патогенов, но и вызывать их гибель. При выборе препарата для лечения врачи руководствуются принципами безопасности, эффективности и удобства применения.
            </p>

            <p>
              В последние годы стало очевидно, что антимикробное лечение вагинитов, спровоцированных условно-патогенными микроорганизмами, не всегда достаточно эффективно
              <sup>
                <a href="#literatura-6">8,9</a>
              </sup>
              . В соответствии с научно-медицинскими данными
              <sup>
                <a href="#literatura-7">10</a>
              </sup>
              , через 1 месяц после лечения только в 65–85% случаев отмечается клиническое и лабораторное выздоровление, в остальных случаях патологические вагинальные выделения появляются снова. Одной из причин перехода инфекционно-воспалительного процесса в хроническую форму является развитие резистентности (нечувствительности к действующему веществу препарата) и формирование бактериальных биопленок – формы жизни некоторых микроорганизмов, которые позволяют «прятаться» от иммунной системы и антимикробных лекарств
              <sup>
                <a href="#literatura-6">9</a>
              </sup>
              .
            </p>

            <h3>Преимущества свечей Бетадин® для лечения вагинита</h3>
            <p>На сегодняшний день нет исследований, подтверждающих возникновение нечувствительности (резистентности) микроорганизмов к препаратам йода.</p>

            <p>
              Согласно исследованию, проведенному коллективом «Научно-исследовательского института акушерства и гинекологии им. Д. О. Отта», эффективность лечения вагинита, вызванного уреаплазмами в сочетании с другими бактериями, свечами{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  Бетадин<sup>®</sup>
                </strong>
              </mark>{' '}
              местно в течение 14 дней при одновременном проведении общей антибактериальной терапии оценивается в 82,4±9,2% (достигнуто полное удаление уреаплазм, гарднерелл с клиническим выздоровлением)
              <sup>
                <a href="#literatura-11">12</a>
              </sup>
              .
            </p>

            <p>
              Эти данные позволяют рекомендовать свечи{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  Бетадин<sup>®</sup>
                </strong>
              </mark>{' '}
              для комплексного лечения бактериального вагиноза, острого или хронического вагинита, вызванного уреаплазмами в сочетании с гарднереллами, грибками рода Candida, стрептококками
              <sup>
                <a href="#literatura-11">12</a>
              </sup>
              .
            </p>

            <p>
              Важным преимуществом свечей{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  Бетадин<sup>®</sup>
                </strong>
              </mark>{' '}
              является то, что патогенные микроорганизмы не способны выработать устойчивость и привыкание к терапии активным йодом. С учетом основных свойств препарата, свечи{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  Бетадин<sup>®</sup>
                </strong>
              </mark>{' '}
              могут использоваться как в качестве самостоятельного лечения, так и в составе комплексной терапии вагинитов
              <sup>
                <a href="#literatura-5">6,7</a>
              </sup>
              .
            </p>

            <div className="green">
              <p>
                <strong>Важно!</strong>
              </p>
              <p>Любые свечи для лечения воспаления во влагалище назначает врач после клинического и лабораторного обследования.</p>
            </div>

            <h2 id="profilaktika-vaginita">Профилактика вагинита</h2>
            <div className="list-base">
              <p>
                Для того, чтобы не допустить или минимизировать риск развития воспалительных процессов во влагалище, необходимо <strong>придерживаться следующих правил:</strong>
              </p>
              <ul>
                <li>Не допускать случайных интимных связей без использования презерватива.</li>
                <li>Тщательно и правильно соблюдать интимную гигиену.</li>
                <li>Укреплять общий иммунитет, вовремя лечить имеющиеся общие заболевания.</li>
                <li>Отказаться от ношения синтетического нижнего белья и тесной одежды.</li>
                <li>
                  Регулярно проходить обследования у гинеколога (при отсутствии жалоб 1 раз в год)
                  <sup>
                    <a href="#literatura-3">4</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1635/be64a85ce4577d4a5abb3d1bae0c209bea7dc0ae16165b9d6cd21ac0d29c6f20-650x0/group-516-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1635/be64a85ce4577d4a5abb3d1bae0c209bea7dc0ae16165b9d6cd21ac0d29c6f20-650x0/group-516-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="/images/encyclopedia/profilaktika-vaginita.png"
                alt="Профилактика вагинита"
              />
            </picture>

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

            <h3>При лечении свечами от вагинита, нужно ли одновременное лечение полового партнера?</h3>
            <p>
              Все вагиниты специфической этиологии (вызванные инфекциями, передаваемыми половым путем) требуют обязательного одновременного лечения обоих половых партнеров. Лечением мужчины в этом случае занимается уролог. Воспалительные заболевания неспецифической этиологии (вагиноз, молочница) не всегда требуют одновременного лечения партнера, однако при появлении любых признаков воспаления у женщины ее половому партнеру необходимо пройти обследование у врача.
            </p>

            <h3>Как понять, что свечи от вагинита мне не подошли?</h3>
            <p>
              При применении вагинальных свечей может возникнуть индивидуальная реакция на препарат с проявлением таких симптомов, как жжение, сильный зуд, высыпания на коже, покраснение или отек. Это происходит из-за аллергии на компоненты, входящие в состав препарата, или индивидуальной непереносимости (повышенной чувствительности) к этим компонентам. В таких случаях необходимо отменить препарат и обратиться к врачу для назначения альтернативной терапии.
            </p>

            <h3>Что делать, если свечи от воспаления во влагалище не помогают?</h3>
            <p>
              Перед началом применения любых влагалищных свечей необходимо внимательно ознакомиться с инструкцией или задать соответствующие вопросы на приёме у гинеколога. Некоторые препараты начинают действовать максимально быстро (например, свечи{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Бетадин<sup>®</sup>
              </mark>
              ), у других максимальный эффект может развиться только спустя несколько дней. Бывают ситуации, когда возбудитель заболевания уже выработал нечувствительность к этой терапии, и симптомы сохраняются несмотря на лечение, особенно при повторном применении некоторых свечей во влагалище. В таком случае следует обратиться к врачу для подбора альтернативной терапии.
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
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-0x166/lechenie-vaginita-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-0x166/lechenie-vaginita-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/lechenie-vaginita-preview.png"
                        alt="Лечение вагинита - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Лечение вагинита</strong>
                    </p>
                    <p>
                      Когда возникает вагинит — воспаление слизистой оболочки влагалища? Причины появления и лечение данного заболевания.
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/vaginit/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide swiper-slide-next">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/jod-preview.png"
                        alt="Йод-превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Йод</strong>
                    </p>
                    <p>Сферы использования йода. Отличия повидон-йода от спиртового раствора йода.</p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/jod/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/povidon-jod-preview.png"
                        alt="Повидон-йод - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Повидон йод</strong>
                    </p>
                    <p>
                      Характеристики и свойства повидон-йода. Для чего применяется повидон-йод? Инструкция по применению раствора, мази, свечей Бетадин
                      <sup>®</sup> с повидон-йодом.
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
                Paladine HL, Desai UA. Vaginitis: Diagnosis and Treatment. Am Fam Physician. 2018 Mar 1;97(5):321 329. PMID: 29671516.
              </li>
              <li id="literatura-1">
                Marnach ML, Wygant JN, Casey PM. Evaluation and Management of Vaginitis. Mayo Clin Proc. 2022 Feb;97(2):347 358. doi: 10.1016/j.mayocp.2021.09.022. PMID: 35120697.
              </li>
              <li id="literatura-2">
                Neal CM, Kus LH, Eckert LO, Peipert JF. Noncandidal vaginitis: a comprehensive approach to diagnosis and management. Am J Obstet Gynecol. 2020 Feb;222(2):114 122. doi: 10.1016/j.ajog.2019.09.001. Epub 2019 Sep 9. PMID: 31513780.
              </li>
              <li id="literatura-3">
                Прилепская В.Н., Кира Е.Ф. Клинические рекомендации по диагностике и лечению заболеваний, сопровождающихся патологическими выделениями из половых путей женщин //РОАГ, Москва 2019 г.
              </li>
              <li id="literatura-4">
                Vaginitis in Nonpregnant Patients: ACOG Practice Bulletin, Number 215. Obstet Gynecol. 2020 Jan;135(1):e1 e17. doi: 10.1097/AOG.0000000000003604. PMID: 31856123.
              </li>
              <li id="literatura-5">
                Инструкция по медицинскому применению Бетадин<sup>®</sup> суппозитории РН: П№015282/01.
              </li>
              <li id="literatura-6">
                Rigo GV, Tasca T. Vaginitis: Review on Drug Resistance. Curr Drug Targets. 2020;21(16):1672 1686. doi: 10.2174/1389450121666200804112340. PMID: 32753007.
              </li>
              <li id="literatura-7">
                Подзолкова Н. М., Никитина Т. И. Сравнительная оценка различных схем лечения больных с бактериальным вагинозом и неспецифическим вульвовагинитом //Российский вестник акушера-гинеколога. 2012; 4: стр.75 -81.
              </li>
              <li id="literatura-8">
                Swidsinski A, Verstraelen H, Loening-Baucke V, et al Presence of a polymicrobial endometrial biofilm in patients with bacterial vaginosis. PLoS One. 2013;8(1):e53997. doi:10.1371/journal.pone.0053997.
              </li>
              <li id="literatura-9">
                Donders GG, Zodzika J, Rezeberga D. Treatment of bacterial vaginosis: what we have and what we miss. Expert Opin Pharmacother. 2014;15(5):645-657. doi:10.1517/14656566.2014.881800.
              </li>
              <li id="literatura-10">
                Verstraelen H, Verhelst R. Bacterial vaginosis: an update on diagnosis and treatment. Expert Rev Anti Infect Ther. 2009;7(9):1109-1124. doi:10.1586/eri.09.87.
              </li>
              <li id="literatura-11">
                Савичева А. М., Селимян Н. К., Гриненко Г. В., НовиковаЛ. Н., Рыбина Е. В., Зациорская С. Л., Мартикайнен 3. М. // Применение препарат Бетадин при лечении небеременных женщин с бактериальным вагинозом или вагинитом // Журнал акушерства и женских болезней №1/2003 https://doi.org/10.17816/JOWD88798.
              </li>
              <li id="literatura-12">
                Инструкция по медицинскому применению ЛП Клиндацин<sup>®</sup>, РЛС.
              </li>
              <li id="literatura-13">
                Инструкция по медицинскому применению ДВ Метронидазол, РЛС.
              </li>
              <li id="literatura-14">
                Инструкция по медицинскому применению ЛП Гексикон<sup>®</sup>, РЛС.
              </li>
              <li id="literatura-15">
                Инструкция по медицинскому применению ЛП Нео-Пенотран<sup>®</sup>, РЛС.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
