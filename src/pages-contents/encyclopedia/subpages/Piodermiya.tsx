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

export default function Piodermiya() {
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
                    <span property="name">Энциклопедия</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Пиодермия: лечение/мазь/крем/средства</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Пиодермия: виды, симптомы, лечение</h1>
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
                <h2 className="page-header-subtitle">Возбудители пиодермии</h2>
                <div className="page-header-body">
                  <p>
                    Пиодермии (пиодермиты) – обобщенное название различных воспалительных гнойничковых
                    заболеваний кожных покровов
                    <sup>
                      <a href="#spisok-literatury">1</a>
                    </sup>
                    .
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#vidy-piodermiy">Виды</a>
                  </li>
                  <li>
                    <a href="#simptomy">Симптомы</a>
                  </li>
                  <li>
                    <a href="#lechenie-piodermii">Лечение</a>
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
                      src="/kartinka-banner-1-1460x1230.webp"
                      alt="Пиодермия: лечение, мази, кремы, средства"
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
                  <a href="#prichiny-poyavleniya-piodermii">Причины появления пиодермии</a>
                </li>
                <li>
                  <a href="#vidy-piodermiy">Виды пиодермий</a>
                </li>
                <li>
                  <a href="#simptomy">Симптомы</a>
                </li>
                <li>
                  <a href="#diagnostika">Диагностика</a>
                </li>
                <li>
                  <a href="#lechenie-piodermii">Лечение пиодермии</a>
                </li>
                <li>
                  <a href="#profilaktika">Профилактика</a>
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

        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#prichiny-poyavleniya-piodermii">Причины появления пиодермии</a>
            </li>
            <li>
              <a href="#vidy-piodermiy">Виды пиодермий</a>
            </li>
            <li>
              <a href="#simptomy">Симптомы</a>
            </li>
            <li>
              <a href="#diagnostika">Диагностика</a>
            </li>
            <li>
              <a href="#lechenie-piodermii">Лечение пиодермии</a>
            </li>
            <li>
              <a href="#profilaktika">Профилактика</a>
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

        <div className="home-container">
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Возбудителями инфекции могут быть золотистый или эпидермальный стафилококки,
              коринебактерии, стрептококки и другие микроорганизмы
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="prichiny-poyavleniya-piodermii">
              Причины появления пиодермии
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

            <p>
              Заражение происходит при попадании на кожу вредоносных микроорганизмов из окружающей
              среды или из-за активации условно-патогенных микроорганизмов, обитающих на коже. Так, в
              норме на коже живут эпидермальные стафилококки, а золотистый стафилококк можно обнаружить
              на слизистой носа, подмышечных и паховых складках
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . При гнойничковых заболеваниях наблюдается увеличение количества условно-патогенных
              микроорганизмов на коже у пациента.
            </p>

            <p>
              Развитию пиодермии способствуют микротравмы (в том числе при расчесах кожи на фоне зуда),
              снижение местного иммунитета кожи, длительное использование обезжиривающих средств для
              наружного применения, повышенное потоотделение, переохлаждение, повышенный уровень сахара
              в крови, очаги хронической инфекции.
            </p>

            <h2 className="h2" id="vidy-piodermiy">
              Виды пиодермий
            </h2>

            <p>
              <strong>По течению заболевания</strong> пиодермии делят на:
            </p>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Острые</strong>
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Хронические</strong>
                </p>
              </div>
            </div>

            <p>
              <strong>По глубине гнойного воспаления:</strong>
            </p>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Поверхностные</strong>
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Глубокие</strong>
                </p>
              </div>
            </div>

            <p>
              <strong>По механизму возникновения:</strong>
            </p>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Первичные</strong>
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Вторичные</strong>
                </p>
                <p>
                  (как осложнение другого кожного заболевания: атопического дерматита, экземы,
                  экссудативного псориаза и другие)
                </p>
              </div>
            </div>

            <div className="list-base">
              <p>
                <strong>По виду возбудителя заболевания (патогена):</strong>
              </p>
              <ul>
                <li>
                  <strong>Стафилодермии (вызываются стафилококками):</strong>
                  <br />
                  остиофолликулит,{' '}
                  <a href="/encyclopedia/follikulit/">фолликулит</a>, сикоз вульгарный, везикулопустулёз,{' '}
                  <a href="/encyclopedia/puzyrchatka/">пузырчатка</a> новорожденных, эксфолиативный
                  дерматит новорожденных, синдром стафилококковой обожженной кожи, синдром
                  стафилококкового токсического шока, <a href="/encyclopedia/furunkul/">фурункул</a>,{' '}
                  <a href="/encyclopedia/karbunkul/">карбункул</a>, абсцесс, псевдофурункулёз,{' '}
                  <a href="/encyclopedia/gidradenit/">гидраденит</a>, гранулёма пиогенная.
                </li>
                <li>
                  <strong>Стрептодермии (вызываются стрептококками):</strong>
                  <br />
                  <a href="/encyclopedia/impetigo/">Импетиго</a> стрептококковое, импетиго стрептококковое
                  буллёзное, щелевидное импетиго (заеда), лишай простой, паронихия поверхностная,
                  интертригинозная стрептодермия, рожа, эктима обыкновенная.
                </li>
                <li>
                  <strong>Смешанные стрептостафилодермии:</strong>
                  <br />
                  импетиго стрептостафилококковое.
                </li>
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Импетиго</strong>
                </p>
                <p>
                  Импетиго — распространенная кожная инфекция. Почему она возникает, и как правильно ее
                  лечить?
                </p>
                <a href="/encyclopedia/impetigo/" className="btn btn-green" target="_blank" rel="noopener noreferrer">
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="/impetigo-prevyu-310x210.webp 1x, /impetigo-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/impetigo-prevyu-620x420.webp"
                  alt="Импетиго-превью"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="simptomy">
              Симптомы пиодермии
            </h2>

            <p>У каждого вида пиодермии имеется различная симптоматика.</p>

            <h3 className="h3">Стафилодермии</h3>

            <h4 className="h4">Фолликулит</h4>

            <p>
              <strong>Фолликулит</strong> – острое воспаление волосяного фолликула, которое может возникать
              на любом участке кожного покрова, где растут волосы, в том числе пушковые. В области
              волосяного фолликула формируется небольшой воспалительный узелок красноватого цвета. Через
              несколько дней узелок превращается в гнойничок с содержимым жёлтого цвета. Ссыхаясь,
              гнойнички формируют корочку.
            </p>

            <h4 className="h4">Сикоз вульгарный</h4>

            <p>
              <strong>Сикоз вульгарный</strong> – хроническое воспаление волосяных фолликулов в области
              усов, бороды, бровей, лобка, подмышечных складок. В этих локализациях формируются признаки
              фолликулита: узелок, гнойничок, эрозии, корочки в области фолликулов. Из пораженных
              фолликулов легко выдёргиваются волосы. Рубцы после разрешения воспаления не остаются.
            </p>

            <h4 className="h4">Синдром стафилококковой обожженной кожи</h4>

            <p>
              Болеют данным заболеванием новорожденные и дети до 5 лет. Стафилококки вырабатывают
              эксфолиативный токсин, который разрушает связи между клетками в поверхностном слое кожи. В
              результате чего образуются щели, заполненные жидкостью, а сверху формируется дряблая, легко
              рвущаяся покрышка. Со временем размер пузырей увеличивается. При вскрытии пузырей кожный
              покров приобретает «ошпаренный» вид.
            </p>

            <h4 className="h4">Фурункул</h4>

            <p>
              Фурункул – острое гнойное воспаление волосяного фолликула, сальной железы и подкожной
              жировой клетчатки. В самом начале кожный процесс может напоминать фолликулит. Но со
              временем уплотнение нарастает, размер увеличивается, воспалительный элемент становится
              резко болезненный, усиливается отёк. В центре воспаления формируется гной, после отхождения
              которого становится виден стержень из омертвевших клеток и язва, заживающая рубцеванием.
            </p>

            <p>
              Объединение из нескольких фурункулов называется <strong>карбункул</strong>. Состояние, при
              котором на коже появляются несколько отдельных фурункулов, называется{' '}
              <strong>фурункулёзом</strong>. Фурункулёз может приобретать хроническое течение.
            </p>

            <p>
              <strong>Псевдофурункулёзом</strong> страдают ослабленные дети. Предрасполагающий фактор
              повышенное потоотделение. Обычная локализация высыпаний на коже головы, спине, ягодицах,
              задней поверхности бедер. Сыпь представлена воспалениями размером с вишнёвую косточку,
              застойного цвета и множественными мелкими абсцессами.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-2-650x350.webp 1x, /mask-group-2-1300x700.webp 2x"
                type="image/webp"
              />
              <Image
                src="/mask-group-2-1300x700.webp"
                alt="Стафилодермии"
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h4 className="h4">Абсцесс</h4>

            <p>
              <strong>Абсцесс</strong> – глубокое гнойное воспаление кожи, подкожной клетчатки, мышечной
              ткани. Болезненное уплотнение кожи со временем размягчатся в центральной части – формируется
              полость, заполненная гноем. При абсцессах часто возникает омертвение тканей.
            </p>

            <h4 className="h4">Пиогенная гранулема (ботриомикома)</h4>

            <p>
              Пиогенная гранулема представляет собой объёмное образование красного цвета с лаковой
              поверхностью, возникающее на фоне мелкой травмы. Размеры образования могут достигать
              нескольких миллиметров в диаметре. Часто пиогенные гранулемы могут кровоточить. В очаге
              поражения обнаруживают стафилококки и смешанную флору.
            </p>

            <h3 className="h3">Стрептодермии</h3>

            <h4 className="h4">Импетиго Фокса</h4>

            <p>
              <strong>Импетиго стрептококковое (импетиго Фокса)</strong> проявляется появлением на фоне
              красного цвета пузырьков размером до 1 см, имеющих мутное содержимое. Гнойнички ссыхаются в
              корочки желтого цвета. Без лечения заболевание прогрессирует — количество таких очагов
              увеличивается.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-5-650x325.webp 1x, /istockphoto-1341663000-2048x2048-2-5-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-5-1300x650.webp"
                alt="Импетиго Фокса"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h4 className="h4">Щелевое импетиго</h4>

            <p>
              Щелевидная трещина обычно возникает на коже углов рта, при этом данная область отёчная,
              красного цвета. Пациенты отмечают болезненность в области поражения. Стрептококковое
              импетиго также бывает у основания крыльев носа, в углах глаз.
            </p>

            <h4 className="h4">Лишай простой</h4>

            <p>
              Лишай простой – на коже лица и рук появляются округлые пятна розового цвета с белесоватыми
              тонкими чешуйками на поверхности. Однако могут поражаться и другие участки тела. Чаще болеют
              дети.
            </p>

            <h4 className="h4">Паронихия поверхностная</h4>

            <p>
              Кожа околоногтевого валика воспаляется, отекает, появляется болезненность. Формируется
              пузырь с мутным содержимым. При надавливании из-под околоногтевого валика выделяются капли
              гноя. Из-за этой патологии ногтевая пластинка может деформироваться. Развитию
              стрептококковой паронихии способствует трение кожи при ношении тесной обуви, микротравмы
              при педикюре.
            </p>

            <h4 className="h4">Рожистое заболевание</h4>

            <p>
              <strong>Рожа</strong> – острое инфекционное заболевание, характеризующееся лихорадкой,
              интоксикацией и воспалительным поражением кожи, подкожной клетчатки и поверхностных
              лимфатических сосудов. Возбудителем являются β-гемолитические стрептококки группы А.
            </p>

            <p>
              Чаще процесс локализуется на голенях, лице, руках, туловище. Вначале появляются недомогание,
              озноб, головная боль, боль в мышцах, температура тела повышается до 38–40 °С. В области
              поражения возникают чувство распирания, жжения, боль, покраснение кожи. Границы воспаления
              чёткие, кожа ярко-красная, отёчная, болезненная. Иногда могут образовываться пузыри,
              абсцессы.
            </p>

            <p>
              <strong>Рожистое воспаление</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-6-650x325.webp 1x, /istockphoto-1341663000-2048x2048-2-6-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-6-1300x650.webp"
                alt="Рожистое воспаление"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h4 className="h4">Целлюлит</h4>

            <p>
              <strong>Целлюлит</strong> – островоспалительный процесс кожи и подкожной жировой клетчатки
              стрептостафилококковой природы. Очаг воспаления резко болезненный, отечный, горячий, красного
              цвета. Границы очага четкие. У пациентов наблюдаются ознобы. Целлюлит может возникнуть на любом
              участке кожного покрова. При этом наличие у человека таких заболеваний,
              <br />
              как сахарный диабет, цирроз печени, онкопатология, почечная недостаточность увеличивают риск
              развития целлюлита.
            </p>

            <h4 className="h4">Импетиго, связанное со стрептококковой и стафилококковой инфекцией</h4>

            <p>
              Появляются пустулы (гнойнички) на фоне пятен красного цвета. Гнойнички вскрываются с образованием
              эрозий, со временем покрывающиеся «медовыми корками». Примерно через неделю корки отпадают,
              обнажая шелушащуюся кожу.
            </p>

            <h3 className="h3">Другие пиодермии</h3>

            <h4 className="h4">Вегетирующая пиодермия Аллопо</h4>

            <p>
              При данной форме пиодермии формируются многочисленные гнойнички, вскрывающиеся с образованием
              бородавчатых разрастаний. Очаги сливаются в крупные бляшки. Частые локализации заболевания –
              волосистая часть кожи головы, губы, подмышечные складки и гениталии.
            </p>

            <h4 className="h4">Фолликулит рубцующийся</h4>

            <p>
              Возникает воспаление в волосяных фолликулах, которое приводит к их гибели и следовательно,
              стойкой алопеции (облысению). При этом заболевании чаще всего обнаруживают стафилококки.
            </p>

            <h4 className="h4">Гангренозная пиодермия</h4>

            <p>
              <strong>Гангренозная пиодермия</strong> начинается с небольшого воспалительного элемента с
              гнойным содержимым и последующим формированием язвы с гнойным отделяемым. Язвенный дефект
              быстро увеличивается в диаметре. Края язвы выступают над поверхностью кожи. В 80% случаев
              данное заболевание сочетается с васкулитом, лейкозами, болезнью Крона, злокачественными
              лимфомами
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="diagnostika">
              Диагностика пиодермий
            </h2>

            <p>
              Заподозрить пиодермию можно по наличию пузырьков с гнойным содержимым, гнойных корок. При
              тяжелом течении заболевания может повышаться температура тела, происходит увеличение лимфатических
              узлов.
            </p>

            <div className="list-base">
              <p>
                <strong>Важную роль отводят лабораторным исследованиям, таким как:</strong>
              </p>
              <ul>
                <li>Общий анализ крови (изменение СОЭ, увеличение количества лейкоцитов).</li>
                <li>
                  Бактериологический посев с поверхности кожи или гнойного отделяемого для определения вида
                  возбудителя и его чувствительности к антибиотикам.
                </li>
                <li>
                  Определение уровня сахара, исследование на ВИЧ – как предрасполагающие факторы к развитию
                  инфекций.
                </li>
                <li>
                  Исследование на сифилис из-за сходства некоторых пиодермий с появлениями этого заболевания.
                </li>
              </ul>
            </div>

            <p>При наличии длительно незаживающих язвенных дефектов рекомендуется обратиться за консультацией к врачу-хирургу.</p>

            <h2 className="h2" id="lechenie-piodermii">
              Лечение пиодермии
            </h2>

            <p>
              Для обеззараживания очагов инфекции назначают антисептические <br />и антибактериальные
              наружные средства
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>{' '}
              .
            </p>

            <h3 className="h3">Повидон-йод (раствор и мазь Бетадин®)</h3>

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
                Повидон-йод является современным антисептическим средством для лечения бактериальных инфекций
                кожи, профилактики суперинфекции в дерматологической практике. Молекула{' '}
                <a href="/encyclopedia/jod/">йода</a> присоединена к инертному носителю –{' '}
                <a href="/encyclopedia/polivinilpirrolidon/">повидону</a>, что позволяет исключить спирт из
                состава, но при этом сохранить антисептическое действие йода. Высвобождаясь из комплекса,
                активный йод взаимодействует с белками клетки бактерий, инактивируя или разрушая эти белки,
                что приводит к гибели микроорганизмов.
              </p>

              <p>
                Повидон-йод входит в состав раствора и мази{' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>
                . Эти средства активны против бактерий, вирусов, одноклеточных микроорганизмов, грибковой
                инфекции
                <sup>
                  <a href="#spisok-literatury">10</a>
                </sup>
                .
              </p>

              <p>
                Для обработки гнойничковых элементов раствор{' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>{' '}
                применяют в неразбавленном виде 2 раза в день. При нанесении на раневую поверхность препарат
                не вызывает жжения. Желто-коричневый цвет раствора позволяет контролировать площадь обработки.
                При этом окраска на коже и тканях легко смывается водой.
              </p>

              <p>
                Для обеззараживания и «вытягивания» остатков гноя используют мазь{' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>
                . <a href="/encyclopedia/povidon-jod/">Повидон-йод</a> приводит к гибели вредоносные
                микроорганизмы, а макрогол, входящий в состав мази, помогает улучшить отток гноя от
                воспаленного элемента
                <sup>
                  <a href="#spisok-literatury">11</a>
                </sup>
                . Мазь <span style={{ color: '#0f780b' }}>Бетадин<sup>®</sup></span> аккуратно распределяют по
                язвенному дефекту (не втирают) 2-3 раза в день и выполняют перевязку.
              </p>

              <p>
                При лечении инфицированных ран под салфетками, пропитанными раствором или мазью{' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>
                , в течение первых 5-7 суток уменьшался отёк и количество гнойного отделяемого, отмечалось
                уменьшение боли
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                .
              </p>

              <p>
                Лекарственные средства линейки{' '}
                <span style={{ color: '#0f780b' }}>
                  Бетадин<sup>®</sup>
                </span>{' '}
                обладают высоким профилем безопасности: при местном применении почти не происходит
                реабсорбции йода. Поэтому препараты разрешены к использованию у взрослых и детей с месяца
                жизни
                <sup>
                  <a href="#spisok-literatury">10</a>
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

            <h3 className="h3">Хлоргексидин</h3>

            <p>
              Раствор хлоргексидина биглюконата обладает дезинфицирующим <br />и антисептическим действиями.
              Используют во время обработки гнойных элементов, эрозий, язв, инфицированных ожогов и др.
              Активен в отношении бактерий, проявляет противогрибковую активность при экспозиции в течение 10
              минут
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              .
            </p>

            <h3 className="h3">Перекись водорода</h3>

            <p>
              Водный раствор перекиси водорода 3% может удалять микроорганизмы с раны механическим путем и
              выводить их из раны за счет образования пузырьков вследствие химической реакции
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
              <br />
              При взаимодействии раствора с раневой поверхностью выделяется активный кислород, губительный
              для инфекций, вызванных гнилостной флорой. Но снижение количества микробов происходит временно,
              то есть нет стерилизационного эффекта. Средство нельзя применять под воздухонепроницаемые
              (окклюзионные) повязки.
            </p>

            <h3 className="h3">Антибактериальные мази и кремы</h3>

            <div className="list-base">
              <p>
                При пиодермиях показано назначение антибактериальных кремов/мазей
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                .
              </p>
            </div>

            <h3 className="h3">Комбинированные препараты</h3>

            <div className="list-base">
              <p>
                В случае острого воспаления может потребоваться назначение комбинированных препаратов с
                противовоспалительными гормонами
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                .
              </p>
            </div>

            <h2 className="h2" id="profilaktika">
              Профилактика пиодермий
            </h2>

            <div className="list-base">
              <p>Для предотвращения появления пиодермий очень важно:</p>
              <ul>
                <li>Своевременно обрабатывать микротравмы и потертости антисептическими средствами.</li>
                <li>Носить удобную одежду и обувь из натуральных дышащих материалов.</li>
                <li>Соблюдать правила личной гигиены.</li>
                <li>
                  Не злоупотреблять использованием на кожу обезжиривающих спиртовых растворов, которые
                  разрушают ее защитный барьер, и она становится чувствительна к агрессивным факторам внешней
                  среды.
                </li>
                <li>Контролировать уровень сахара в крови.</li>
                <li>Своевременно обращаться к врачу при наличии различных сыпей на коже.</li>
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

            <h3 className="h3">Для чего при пиодермии назначают антибиотики для приёма внутрь?</h3>

            <p>
              При тяжелом течении пиодермии, наличии сопутствующей патологии, поддерживающей нагноение и/или
              риске осложнений, угрожающих жизни пациента, врач может принять решение о назначении системной
              антибактериальной терапии.
            </p>

            <h3 className="h3">Можно ли мочить кожу при пиодермии?</h3>

            <p>
              В зависимости от вида пиодермии рекомендации по водным процедурам будут различаться. Но нужно
              помнить, что мытьё кожи может спровоцировать распространение высыпаний на другие участки.
            </p>

            <h3 className="h3">Почему у некоторых людей часто возникают пиодермии?</h3>

            <div className="list-base">
              <p>Причины возникновения пиодермии могут быть связаны с:</p>
              <ul>
                <li>
                  Профессиональной деятельностью человека: ношение специальной защитной униформы и обуви
                  приводит к нарушению воздухообмена, избыточному потоотделению и мацерации кожи.
                </li>
                <li>
                  Несоблюдением правил личной гигиены и наоборот, активным очищающим уходом, ведущим к
                  повреждению защитных свойств кожи.
                </li>
                <li>
                  Тяжелой сопутствующей патологией, например, некомпенсированным сахарным диабетом,
                  нарушениями иммунной системы.
                </li>
              </ul>
            </div>

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
                        srcSet="/gidradenit-lechenie-mazi-kremy-sredstva-pervyu-246x166.webp 1x, /gidradenit-lechenie-mazi-kremy-sredstva-pervyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/gidradenit-lechenie-mazi-kremy-sredstva-pervyu-491x332.webp"
                        alt="Гидраденит: лечение, мази, кремы, средства-первью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Гидраденит: лечение, мази, кремы, средства</strong>
                    </p>
                    <p>
                      Симптомы, причины возникновения и лечение гидраденита — воспалительного заболевания
                      волосяных фолликулов с образованием глубоких болезненных узлов.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/gidradenit/">Подробнее</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/impetigo-prevyu-246x166.webp 1x, /impetigo-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/impetigo-prevyu-491x332.webp"
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
                    <p>
                      Импетиго — распространенная кожная инфекция. Почему она возникает, и как правильно ее
                      лечить?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/impetigo/">Подробнее</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166.webp 1x, /karbunkul-lechenie-mazi-kremy-sredstva-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-491x332.webp"
                        alt="Карбункул: лечение, мази, кремы, средства-превью"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Карбункул: лечение, мази, кремы, средства</strong>
                    </p>
                    <p>
                      Карбункул: причины появления, симптомы, способы лечения. Антисептические препараты
                      Бетадин® для лечения карбункула.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/karbunkul/">Подробнее</Link>
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
                Бутов Ю.С., Скрипкин Ю. К., Иванова О. Л., «Дерматовенерология» Национальное руководство //
                ГЭОТАР Медиа 2017, Москва.
              </li>
              <li id="literatura-1">
                ООО Российское общество дерматовенерологов и косметологов Клинические рекомендации пиодермии
                – 2020 год.
              </li>
              <li id="literatura-2">
                Михальский В.В., Богданов А.Е, Жилина С.В., Привиденцев А.И, Аникин А.И., Ульянина А.А.
                Применение препарата Бетадин® в лечении инфицированных ран // РМЖ №29 от 23.12.2010.
              </li>
              <li id="literatura-3">Инструкция по медицинскому применению ЛП Хлоргексидин, РЛС.</li>
              <li id="literatura-4">Инструкция по медицинскому применению ЛП перекись водорода, РЛС.</li>
              <li id="literatura-5">Инструкция по медицинскому применению ЛП калия перманганат, РЛС.</li>
              <li id="literatura-6">Инструкция по медицинскому применению ЛП Фуцидин крем/мазь, РЛС.</li>
              <li id="literatura-7">Инструкция по медицинскому применению ЛП Бактробан мазь, РЛС.</li>
              <li id="literatura-8">Инструкция по медицинскому применению ЛП Гентамициновая мазь, РЛС.</li>
              <li id="literatura-9">
                Инструкция по применению ЛП Бетадин<sup>®</sup> (раствор, мазь). РУ П№015282/03, РУ П№015282/02.
              </li>
              <li id="literatura-10">
                Блатун Л. А. Местное медикаментозное лечение ран. Хирургия. Журнал им. Н. И. Пирогова. 2011;(4):51
                59.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
