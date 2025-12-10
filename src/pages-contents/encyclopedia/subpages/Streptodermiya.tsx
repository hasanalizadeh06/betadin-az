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

export default function Streptodermiya() {
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
                    <span property="name">Стрептодермия</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Стрептодермия</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Стрептодермия: причины, симптомы, лечение</h1>
                  <picture>
                    <source
                      srcSet="/icon-115x112.webp 1x, /icon-230x224.webp 2x"
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
                <h2 className="page-header-subtitle">Что такое стрептодермия?</h2>
                <div className="page-header-body">
                  <p>
                    <strong>Стрептодермия</strong> – инфекционное заболевание кожи, вызываемое бактериями
                    стрептококками. Чаще всего из очага воспаления высеиваются стрептококки группы А, являющиеся
                    причиной первичных стрептодермий. Данный возбудитель более заразен, чем представители других групп
                    <sup>
                      <a href="#spisok-literatury">1</a>
                    </sup>
                    . Помимо стрептококка у больного может быть обнаружен золотистый стафилококк и кишечные бактерии
                    (смешанная флора), что характерно для вторичных инфекций
                    <sup>
                      <a href="#spisok-literatury">1</a>
                    </sup>
                    .
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#prichiny-vozniknoveniya-streptodermii">Причины стрептодермии</a>
                  </li>
                  <li>
                    <a href="#vidy-streptodermii">Виды стрептодермии</a>
                  </li>
                  <li>
                    <a href="#lechenie-streptodermii">Лечение стрептодермии</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/banner-streptodermiya-730x615.webp 1x, /banner-streptodermiya-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/banner-streptodermiya-1460x1230.webp"
                      alt="Стрептодермия"
                      width={730}
                      height={615}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#prichiny-vozniknoveniya-streptodermii">Причины возникновения стрептодермии?</a>
                </li>
                <li>
                  <a href="#osobennosti-streptodermii">Особенности стрептодермии</a>
                </li>
                <li>
                  <a href="#vidy-streptodermii">Виды стрептодермии</a>
                </li>
                <li>
                  <a href="#lechenie-streptodermii">Лечение стрептодермии</a>
                </li>
                <li>
                  <a href="#profilaktika-streptodermii">Профилактика стрептодермии</a>
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

        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#prichiny-vozniknoveniya-streptodermii">Причины возникновения стрептодермии?</a>
            </li>
            <li>
              <a href="#osobennosti-streptodermii">Особенности стрептодермии</a>
            </li>
            <li>
              <a href="#vidy-streptodermii">Виды стрептодermии</a>
            </li>
            <li>
              <a href="#lechenie-streptodermii">Лечение стрептодермии</a>
            </li>
            <li>
              <a href="#profilaktika-streptodermii">Профилактика стрептодermии</a>
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

        <div className="home-container">
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <h2 className="h2" id="prichiny-vozniknoveniya-streptodermii">
              Причины возникновения стрептодермии
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
              <p>К предрасполагающим факторам возникновения стрептодермии относят:</p>
              <ul>
                <li>нарушение целостности кожного покрова (микротравмы, потертости, опрелости)</li>
                <li>несоблюдение гигиены, потливость</li>
                <li>детский возраст (поскольку у детей pH кожи щелочной)</li>
                <li>наличие хирургических швов, ожогов, свищевых ходов</li>
                <li>
                  общесоматическая патология, приводящая к снижению иммунитета
                  <sup>
                    <a href="#spisok-literatury">2</a>
                  </sup>
                </li>
              </ul>
            </div>

            <h2 className="h2" id="osobennosti-streptodermii">
              Особенности стрептодермии
            </h2>

            <div className="list-base">
              <p>
                Особенностью первичной стрептодермии, вызванной стрептококками группы А, является
                <sup>
                  <a href="#spisok-literatury">1</a>
                </sup>
                :
              </p>
              <ul>
                <li>выраженная отечность кожи</li>
                <li>незначительный выпот (экссудация)</li>
                <li>инфекция распространяется по лимфатическим и кровеносным сосудам</li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/streptodermiya-illyustracziya-s-1-1at4x-650x151.webp 1x, /streptodermiya-illyustracziya-s-1-1at4x-1300x301.webp 2x"
                type="image/webp"
              />
              <Image
                src="/streptodermiya-illyustracziya-s-1-1at4x-1300x301.webp"
                alt="Развитие стрептодермии у ребёнка"
                width={650}
                height={151}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h2 className="h2" id="vidy-streptodermii">
              Виды стрептодермии
            </h2>

            <div className="list-base">
              <p>
                Заболевания, вызванные стрептококком группы А
                <sup>
                  <a href="#spisok-literatury">1</a>
                </sup>
                :
              </p>
              <ul>
                <li>Импетиго</li>
                <li>Эктима</li>
                <li>Пузырный дистальный дактилит</li>
                <li>Стрептококковая опрелость</li>
                <li>Стрептококковый вульвовагинит</li>
                <li>Перианальный стрептококковый целлюлит</li>
                <li>Целлюлит (воспаление подкожной жировой клетчатки)</li>
                <li>Острый лимфангит</li>
                <li>Стрептококковая гангрена</li>
              </ul>
            </div>

            <p>
              Причиной узловатой эритемы, мультиформной эритемы, каплевидного псориаза, васкулита также может быть
              наличие в организме очага стрептококковой инфекции
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h3 className="h3">Импетиго</h3>

            <p>
              Импетиго — очень заразное заболевание, чаще болеют дети дошкольного возраста, но встречается и у взрослых
              людей. На коже появляются очаги воспаления, покрытые корочкой. Высыпания могут быть безболезненными или
              вызывать зуд и жжение кожи
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Могут поражаться и слизистая оболочка рта, красная кайма губ
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            <h3 className="h3">Заеда (импетиго щелевидное)</h3>

            <p>
              В углах рта и/или глаз, а также у основания крыльев носа кожа краснеет, появляется отёчность,
              формируется щелевидная эрозия. В углах рта корочка формируется плохо из-за постоянного движения губ и
              смачивания слюной. Заболевание может протекать хронически
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <h3 className="h3">Эктима</h3>

            <p>
              Образуется в результате запущенного, постоянного травмирующегося импетиго. Характеризуется формированием
              эрозий и язв с толстой коркой. При культуральном методе исследования обнаруживают стрептококки группы А и
              стафилококк
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h3 className="h3">Паронихия стрептококковая</h3>

            <p>
              Воспаление кожи околоногтевого валика на фоне травматизации, например, при обкусывании заусенцев,
              проведении маникюра/педикюра. Появляются покраснение, болезненность, формируется пустула (пузырь с гнойным
              содержимым)
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="lechenie-streptodermii">
              Лечение стрептодермии
            </h2>

            <p>
              Поверхностные стрептодермии лечат наружными антисептическими и антибактериальными средствами
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <h3 className="h3">Раствор Бетадин® для обработки поверхностных стрептодермий</h3>

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
                <strong>Повидон-йод</strong>, являющийся действующим веществом линейки препаратов Бетадин
                <sup>®</sup>
                <sup>
                  <a href="#spisok-literatury">11</a>
                </sup>
                :
              </p>
              <ul>
                <li>
                  обладает антибактериальным, противогрибковым, противовирусным эффектами, способствует уничтожению
                  простейших микроорганизмов
                </li>
                <li>
                  практически не всасывается в кровоток, поэтому его используют и на обширных участках поражённой кожи
                </li>
                <li>
                  формирует пленочку бурого цвета, стойко не окрашивает кожу и при желании препарат можно полностью смыть
                  водой
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

            <div className="green">
              <p>
                Раствор <strong>Бетадин®</strong> не содержит спирт, поэтому средство не жжёт при использовании на
                повреждённой коже
                <sup>
                  <a href="#spisok-literatury">11</a>
                </sup>
                .
              </p>
            </div>

            <h3 className="h3">Использование фукорцина при стрептодермии</h3>

            <p>
              <strong>Фукорцин</strong> губителен для возбудителей бактериальной и грибковой инфекции, его рекомендуют
              использовать 2–4 раза в день. Действующие вещества: борная кислота, фенол, резорцин, фуксин. Жидкость
              малинового цвета, при наружном использовании стойко окрашивает кожу и пачкает белье. Не используют на
              обширных участках из-за токсического воздействия фенола
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              .
            </p>

            <h3 className="h3">Применение зелёнки при стрептодермии</h3>

            <p>
              <strong>«Зелёнка» (бриллиантовый зеленый 1%)</strong> — спиртовой раствор зеленого цвета, уничтожает только
              грамположительные бактерии, наносят на очаги с захватом здоровой кожи. Вызывает жжение, окрашивает кожу
              <sup>
                <a href="#spisok-literatury">7</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/od-a4-2at4x-650x167.webp 1x, /od-a4-2at4x-1300x334.webp 2x"
                type="image/webp"
              />
              <Image
                src="/od-a4-2at4x-1300x334.webp"
                alt="«Зелёнка»"
                width={650}
                height={167}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Салициловая кислота при стрептодермии</h3>

            <p>
              <strong>Спиртовой раствор салициловой кислоты</strong> обладает антисептическим и противовоспалительным
              действием, пощипывает кожу при наружном использовании, может всасываться в кровоток. Средство не показано
              беременным, кормящим и детям до 1 года
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/saliczilovaya-kislota-1-scaled-650x150.webp 1x, /saliczilovaya-kislota-1-scaled-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/saliczilovaya-kislota-1-scaled-1300x300.webp"
                alt="«Салициловая кислота»"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Обработка стрептодермии раствором марганцовки</h3>

            <p>
              <strong>Водный раствор марганцовки</strong> готовят непосредственно перед использованием. Для этого растворяют
              кристаллы перманганата калия в чистой воде. Механизм действия связан с разрушением клеточной стенки
              микроорганизмов. В антисептических целях используют в концентрации от 0,1%-5%. Для прижигания и
              обеззараживания ран готовят 5% раствор (5 г сухого перманганата калия растворяют в 100 мл чистой воды,
              можно дистиллированной). Для промывания инфицированных очагов используют 0,1%
              <sup>
                <a href="#spisok-literatury">9</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/od-a3-2at4x-650x166.webp 1x, /od-a3-2at4x-1300x332.webp 2x"
                type="image/webp"
              />
              <Image
                src="/od-a3-2at4x-1300x332.webp"
                alt="Перманганат калия"
                width={650}
                height={166}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>В настоящее время продажа калия перманганата в розничной аптечной сети ограничена.</p>

            <h3 className="h3">Хлоргексидин биглюконат при стрептодермии</h3>

            <p>
              <strong>Раствор хлоргексидина</strong> биглюконата 0,05% уничтожает возбудителей бактериальной и грибковой
              инфекции. Не жжёт при использовании на поврежденной коже. Хорошо переносится, иногда возможны аллергические
              реакции. Пациента необходимо предупредить, что лекарство повышает чувствительность кожи к солнечному свету.
              С осторожностью назначают лицам младше 18 лет
              <sup>
                <a href="#spisok-literatury">10</a>
              </sup>
              .
            </p>

            <h3 className="h3">Симптоматические препараты для лечения стрептодермии</h3>

            <p>
              <strong>Если кожный процесс распространённый</strong>, врач может назначить наружные антибактериальные
              кремы/мази.
            </p>

            <p>
              В некоторых случаях <strong>при сильном зуде и выраженном воспалении</strong> назначают комбинированные
              наружные средства с антибиотиком и стероидным противовоспалительным веществом (гормоном).
            </p>

            <p>
              <strong>При тяжёлом течении стрептодермии</strong>, повышении температуры тела, ознобе показана системная
              антибактериальная терапия препаратами из группы пенициллина, цефалоспоринов, тетрациклинов, аминогликозидов.
              На весь период лечения рекомендовано ограничить водные процедуры.
            </p>

            <h2 className="h2" id="profilaktika-streptodermii">
              Профилактика стрептодермии
            </h2>

            <p>
              Основной профилактикой стрептодермии является своевременная обработка входных ворот инфекции: ссадин,
              порезов, потертостей. Учитывая, что в группу риска входят пациенты с сахарным диабетом, иммунодефицитом,
              циррозом печени, онкологическими заболеваниями, необходимо лечение данных заболеваний и более бережное и
              внимательное отношение к своим кожным покровам. Своевременно начатое лечение позволяет быстро устранить
              распространение инфекционного кожного процесса, а также снизить вероятность опасных для жизни осложнений
              (например, заражения крови).
            </p>

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
              Ответы на вопросы
            </h2>

            <h3 className="h3">Как начинается стрептодермия?</h3>

            <p>
              Клиническая картина стрептодермии варьирует от лёгких форм до тяжелых. Учитывая вариативность клинической
              картины, верно установить диагноз самостоятельно в большинстве случаев не представляется возможным. Как
              правило, воспалительные элементы поверхностные, покрыты корочкой. Имеют тенденцию к распространению на
              здоровые участки кожи, болезненных ощущений может и не быть. Обычно удается установить связь начала
              заболевания с предшествующей травматизацией кожи.
            </p>

            <h3 className="h3">К какому врачу обращаются при стрептодермии?</h3>

            <p>
              Лечением поверхностной стрептодермии занимается врач-дерматовенеролог. При необходимости может быть показана
              консультация смежных специалистов: терапевта, стоматолога (для выявления очагов хронической инфекции),
              эндокринолога, хирурга.
            </p>

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
                  src="/moshkova-novyj-406x406.webp"
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
                        srcSet="/prevyubanner-infekczionnyj-dermatit-246x166.webp 1x, /prevyubanner-infekczionnyj-dermatit-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/prevyubanner-infekczionnyj-dermatit-491x332.webp"
                        alt="Инфекционный дерматит превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Инфекционный дерматит</strong>
                    </p>
                    <p>
                      Инфекционный дерматит: всё о лечении и препаратах
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/infekcionnyy-dermatit/">Подробнее</Link>
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
                        src="/povidon-jod-prevyu-491x332.webp"
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
                        srcSet="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166.webp 1x, /piodermiya-lechenie-mazi-kremy-sredstva-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-491x332.webp"
                        alt="Пиодермия_ лечение, мази, кремы, средства - превью"
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
                      Причины появления пиодермии, симптомы, виды и способы лечения. Профилактика гнойничковых заболеваний.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/piodermiya/">Подробнее</Link>
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
                Дерматология Фицпатрика в клинической практике, второе издание, Том 3, 2018 год.
              </li>
              <li id="literatura-1">
                Федеральные клинические рекомендации по ведению больных пиодермиями. Общероссийская общественная
                организация «Российское общество дерматовенерологов и косметологов». Москва. 2015 год.
              </li>
              <li id="literatura-2">
                Бутов Ю.С., Скрипкин Ю.К., Иванова О.Л., Дерматовенерология. Национальное руководство. 2017 год.
              </li>
              <li id="literatura-3">
                Fernández G., Martínez Q., Bernácer B., Sarasa C. La gangrena estreptocócica y la así llamada «enfermedad de
                las bacterias devoradoras de carne». Una infectión rara y devastadora [Стрептококковая гангрена и так
                называемая «болезнь плотоядных бактерий». Редкое и разрушительное заболевание]. Rev Clin, особенно 1999,
                февраль; 199 (2):84-8. Испанский. PMID: 10216400.
              </li>
              <li id="literatura-4">
                Липатов К.В., Комарова Е.А., Гурьянов Р.А., Диагностика и хирургическое лечение стрептококковой
                некротизирующей инфекции мягких тканей. Кафедра общей хирургии ГБОУ ВПО «Первый Московский государственный
                медицинский университет им. И. М. Сеченова». Минздрава России, опубликовано «Раны и раневые инфекции» —
                журнал им. профессора Б.М. Костючёнка, DOI: 10.17650/2408-9613-2015-2-1-6-12.
              </li>
              <li id="literatura-5">
                Реестр лекарственных средств, официальная инструкция раствора Фукорцина.
              </li>
              <li id="literatura-6">
                Реестр лекарственных средств, официальная инструкция к 1% раствору бриллиантового зеленого.
              </li>
              <li id="literatura-7">
                Реестр лекарственных средств, официальная инструкция к спиртовому раствору салициловой кислоты.
              </li>
              <li id="literatura-8">
                Реестр лекарственных средств, официальная инструкция к порошку для приготовления раствора перманганата
                калия.
              </li>
              <li id="literatura-9">
                Реестр лекарственных средств, официальная инструкция препарата хлоргексидин биглюконат.
              </li>
              <li id="literatura-10">
                Инструкция по медицинскому применению Бетадин Раствор. РН: П№015282/03.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
