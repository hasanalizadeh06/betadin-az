'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function RanySInfekciej() {
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
                  <span property="name">Раны с инфекцией (гнойные)</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Гнойные и инфицированные раны: признаки и лечение
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
                <h2 className="page-header-subtitle">Раны и инфекции</h2>
                <div className="page-header-body">
                  <p>
                    Далеко не все ссадины и <Link href="/encyclopedia/porezy/">порезы</Link>{' '}
                    заживают быстро и без осложнений.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#simptomy-infekcii-v-rane">Симптомы</a>
                  </li>
                  <li>
                    <a href="#lechenie-rany-s-infekciey">Лечение</a>
                  </li>
                  <li>
                    <a href="#profilaktika-ranevyh-infekciy">Профилактика раневых инфекций</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/frame-655-10-scaled-730x615.webp 1x, /frame-655-10-scaled-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/frame-655-10-scaled-730x615.webp"
                      alt="Раны с инфекцией"
                      priority
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}${navTitleHidden ? ' nav-content-title-hidden' : ''}`}>
              <ul>
                <li>
                  <a href="#chto-mozhet-stat-prichinoy-inficirovaniya-rany">
                    Что может стать причиной инфицирования раны?
                  </a>
                </li>
                <li>
                  <a href="#simptomy-infekcii-v-rane">Симптомы инфекции в ране</a>
                </li>
                <li>
                  <a href="#oslozhnenie-ranevoy-infekcii-esli-ee-ignorirovat">
                    Осложнение раневой инфекции, если ее игнорировать
                  </a>
                </li>
                <li>
                  <a href="#lechenie-rany-s-infekciey">Лечение раны с инфекцией</a>
                </li>
                <li>
                  <a href="#betadin-povidon-yod-dlya-lecheniya-ranevyh-infekciy">
                    Бетадин® (повидон-йод) для лечения раневых инфекций
                  </a>
                </li>
                <li>
                  <a href="#profilaktika-ranevyh-infekciy">Профилактика раневых инфекций</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Список литературы</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened((prev) => !prev)}>Содержание</div>
            </nav>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className={`nav-content nav-content-fixed${secondaryNavOpened ? ' nav-content__open' : ''}${navTitleHidden ? '' : ' nav-content-title-hidden'}`}>
          <ul>
            <li>
              <a href="#chto-mozhet-stat-prichinoy-inficirovaniya-rany">
                Что может стать причиной инфицирования раны?
              </a>
            </li>
            <li>
              <a href="#simptomy-infekcii-v-rane">Симптомы инфекции в ране</a>
            </li>
            <li>
              <a href="#oslozhnenie-ranevoy-infekcii-esli-ee-ignorirovat">
                Осложнение раневой инфекции, если ее игнорировать
              </a>
            </li>
            <li>
              <a href="#lechenie-rany-s-infekciey">Лечение раны с инфекцией</a>
            </li>
            <li>
              <a href="#betadin-povidon-yod-dlya-lecheniya-ranevyh-infekciy">
                Бетадин® (повидон-йод) для лечения раневых инфекций
              </a>
            </li>
            <li>
              <a href="#profilaktika-ranevyh-infekciy">Профилактика раневых инфекций</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="#spisok-literatury">Список литературы</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened((prev) => !prev)}>Содержание</div>
        </nav>

        {/* Disclaimer */}
        <div className="home-container">
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>

        {/* Main Content */}
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Опасно, когда даже небольшая рана инфицируется болезнетворными микроорганизмами.
              Такую ситуацию врачи называют <strong>раневой инфекцией</strong>. Инфицирование тканей
              может создавать проблемы не только в месте самого повреждения, но, к сожалению, иметь
              серьезные последствия на весь организм в целом.
            </p>

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
                srcSet="/medical-kit-and-bandaid-509398-488-1-1-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-1-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/medical-kit-and-bandaid-509398-488-1-1-650x325.webp"
                alt="Гнойная рана"
              />
            </picture>

            {/* Section: Что может стать причиной инфицирования раны? */}
            <h2 className="h2" id="chto-mozhet-stat-prichinoy-inficirovaniya-rany">
              Что может стать причиной инфицирования раны?
            </h2>
            <p>
              Бытовые травмы и порезы составляют группу высокого риска по инфицированию
              болезнетворными микроорганизмами
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  1
                </a>
              </sup>
              . Сначала может показаться, что небольшой поврежденный участок не доставит проблем.
              Но при неправильной и несвоевременной обработке создаются условия для присоединения
              инфекции. Поэтому, как правило, такие осложнения возникают при несоблюдении правил
              ухода за ранами и хирургическим швами. Важно помнить, что наличие других хронических
              инфекционных процессов может повысить риск развития осложнений
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <div className="list-base">
              <p>
                <strong>
                  В общей сложности врачи выделяют несколько ключевых факторов, усложняющих
                  заживление раны и способствующих присоединению инфекции
                </strong>
                <sup>
                  <a href="#spisok-literatury">1</a>
                </sup>
              </p>
              <ul>
                <li>
                  Количество одновременно попавших копий микробов в рану (врачи называют –
                  микробная обсемененность).
                </li>
                <li>
                  Снижение защитных свойств организма, например, в силу переохлаждения или
                  наличия хронических заболеваний (например, сахарный диабет, лучевая болезнь).
                </li>
                <li>
                  Нарушение кровообращения в травмированной части тела (например, при наложении
                  кровоостанавливающего жгута).
                </li>
                <li>
                  Условия получения травмы, например получение травматического шока или обильной
                  кровопотери.
                </li>
                <li>Крупные размеры раны, присутствие остатков инородных тел.</li>
              </ul>
            </div>

            {/* Section: Симптомы инфекции в ране */}
            <h2 className="h2" id="simptomy-infekcii-v-rane">
              Симптомы инфекции в ране
            </h2>
            <p>
              <strong>
                Основными симптомами инфицирования являются покраснение, припухлость,
                болезненность, повышение температуры мягких тканей
              </strong>{' '}
              в области раны и повреждения.
            </p>
            <p>
              Размножение в ране болезнетворных бактерий формирует незамедлительную ответную
              воспалительную реакцию. Чем серьезнее проблема – тем сильнее организм старается
              оградить себя от нее. Поэтому реакция может развиваться на большей площади, нежели
              участок раны и повреждения. Все это сопровождается симптомами общей интоксикации:{' '}
              <strong>температура, тошнота, озноб, слабость</strong>.
            </p>

            <div className="list-base">
              <p>
                Следует помнить, что острый ответ организма на попадание патогена не всегда
                протекает одинаково. Далее выделим ключевых опасных микробов, в отношении
                которых организм реагирует в каждом случае достаточно специфично:
              </p>
              <ul>
                <li>
                  <strong>При стрептококковой инфекции</strong> образуется достаточно жидкий гной.
                </li>
                <li>
                  <strong>При стафилококковой инфекции</strong> – края раны начинают интенсивно
                  отмирать (некроз тканей). Гной в данном случае густой, сметанообразной
                  консистенции.
                </li>
                <li>
                  <strong>Синегнойная и кишечная палочки</strong> вызывают массовую гибель тканей
                  с образованием густого специфически пахнущего гноя зеленоватого цвета.
                </li>
                <li>
                  Под действием <strong>грамотрицательной флоры и кишечных анаэробов</strong>{' '}
                  образуется обильное гнойное отделяемое с примесью крови и зловонным запахом,
                  иногда мутноватого оттенка.
                </li>
              </ul>
            </div>

            <p>
              Первые признаки гнойного воспаления возникают через 2-3 дня после оперативного
              вмешательства или ранения. Если пациент получает антибактериальную терапию, то
              первые симптомы могут возникнуть через 4-6 дней.
            </p>

            <div className="green">
              <p>
                <strong>Важно!</strong> После получения раны вне дома лучше перестраховаться и
                сделать противостолбнячную вакцину. К сожалению, запущенная форма столбняка в
                40-45% случаев связана с летальным исходом
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                .
              </p>
            </div>

            <p>
              Далее гнойный процесс имеет несколько этапов прогрессирования. Со временем
              образуется <strong>абсцесс</strong> – гнойный очаг, отграниченный капсулой из
              соединительной ткани. Формирование абсцесса предотвращает распространение инфекции
              на здоровые ткани и проникновение патогенов в кровяное русло.
            </p>

            <p>
              <strong>Флегмона</strong>, или разлитой гнойно-воспалительный процесс,
              распространяется по рыхлым клетчаточным пространствам за пределы раны. При
              проникновении патогена в кровоток развивается бактериемия и сепсис (общее
              инфекционное заражение организма).
            </p>

            {/* Section: Осложнение раневой инфекции */}
            <h2 className="h2" id="oslozhnenie-ranevoy-infekcii-esli-ee-ignorirovat">
              Осложнение раневой инфекции, если ее игнорировать
            </h2>

            <h3 className="h3" id="bakteriemiya">
              Бактериемия
            </h3>
            <p>
              Бактериемия – состояние, при котором бактерии попадают в стерильную кровь. Опасность
              заключается в том, что они циркулируют в кровяном русле, что является в дальнейшем
              фактором распространения инфекции по всему организму. В таких ситуациях часто
              развиваются <strong>эндокардит</strong> (воспаление внутренней оболочки сердца),{' '}
              <strong>остеомиелит</strong> (гнойно-некротический процесс костей) и другие опасные
              заболевания, угрожающие жизни пациента.
            </p>

            <h3 className="h3" id="sepsis">
              Сепсис
            </h3>
            <p>
              <strong>Сепсис</strong> (в переводе с греческого –«гниение») – системная
              воспалительная реакция в ответ на проникновение микроорганизмов в кровоток. В
              данном случае в кровь попадает большое количество микробов или микробы крайне
              агрессивны по своей природе.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-2-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-2-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/medical-kit-and-bandaid-509398-488-1-2-650x325.webp"
                alt="Сепсис"
              />
            </picture>

            <div className="list-base">
              <p>
                <strong>Синдром системной воспалительной реакции (SIRS)</strong> подтверждается
                наличием двух или более признаков
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                :
              </p>
              <ul>
                <li>температура тела более 38°С или менее 36°С</li>
                <li>частота сердечных сокращений более 90 ударов в минуту</li>
                <li>
                  частота дыхательных движений более 20 в минуту или присутствует гипервентиляция
                  (происходит при интенсивном дыхании и вызывает снижение углекислого газа в
                  крови)
                </li>
                <li>
                  лейкоцитоз (увеличение количества лейкоцитов) более 12*10<sup>9</sup>/л или
                  лейкопения (уменьшение количества лейкоцитов) менее 4*10<sup>9</sup>/л, или
                  присутствие незрелых форм лейкоцитов более 10%
                </li>
              </ul>
            </div>

            <p>
              Диагноз сепсиса устанавливают при <strong>наличии очага инфекции и двух или более</strong> признаков SIRS.
            </p>

            <p>
              <strong>Тяжелый сепсис</strong> диагностируют при наличии сепсиса и полиорганной
              недостаточности.
            </p>

            <p>
              <strong>Септический шок</strong> – вариант септической реакции, основой которого
              являются серьезные нарушения кровообращения, обмена веществ и патологических
              изменений в клетках. <strong>Пациент незамедлительно госпитализируется в реанимационное отделение!</strong>
            </p>

            <h3 className="h3" id="mestnye-oslozhneniya-ranevoy-infekcii-">
              Местные осложнения раневой инфекции:
            </h3>
            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Острые</strong>
                </p>
                <p>гнойный затёк, флегмона</p>
              </div>
              <div className="column">
                <p>
                  <strong>Хронические</strong>
                </p>
                <p>
                  свищи мягких тканей, пролежни, бактериальная гангрена, остеомиелит
                </p>
              </div>
            </div>

            <p>
              Местные осложнения раневой инфекции могут возникнуть как самостоятельно, так и в
              результате лечения. К примеру, <strong>гнойный затёк</strong> формируется в
              некотором отдалении от первоисточника инфекции ввиду нарушения оттока гноя из раны
              в результате закупорки дренажей или «глухом» ушивании раны.
            </p>

            {/* Section: Лечение раны с инфекцией */}
            <h2 className="h2" id="lechenie-rany-s-infekciey">
              Лечение раны с инфекцией
            </h2>
            <div className="list-base">
              <p>
                <strong>При лечении инфицированных ран проводят адекватную хирургическую обработку</strong>
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                :
              </p>
              <ul>
                <li>Широкое рассечение раны</li>
                <li>Вскрытие всех карманов и затёков</li>
                <li>Иссечение нежизнеспособных тканей</li>
                <li>Эффективное дренирование</li>
              </ul>
            </div>

            <p>Далее в соответствии со стадией течения раневого процесса назначают наружную терапию.</p>

            <p>
              Цель местного медикаментозного лечения – очистить рану, создать благоприятные
              условия для заживления раны, подавить рост и размножение патогенной микрофлоры
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              . Традиционно с этой целью применяют антисептические растворы: метиленовый синий,
              раствор фурацилина, йода, перекись водорода. Эти лекарственные средства
              останавливают рост и размножение бактерий
              <sup>
                <a href="#spisok-literatury">4,5</a>
              </sup>
              . Однако раствор перекиси водорода 3% лишь временно уменьшает количество
              микроорганизмов, а также может затруднять заживление раны
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              . Необходимым обеззараживающим эффектом обладают <strong>современные антисептики</strong>,
              такие как <strong>повидон-йод</strong> (
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                <strong>Бетадин®</strong>
              </mark>
              ).
            </p>

            {/* Section: Бетадин для лечения раневых инфекций */}
            <h2 className="h2" id="betadin-povidon-yod-dlya-lecheniya-ranevyh-infekciy">
              Бетадин® (повидон-йод) для лечения раневых инфекций
            </h2>

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
                Повидон-йод активен в отношении грамположительных и грамотрицательных бактерий,
                простейших микроорганизмов, вирусов, грибковой инфекции. Опыт применения раствора
                повидон-йода в хирургической практике указывает на снижение вероятности нагноения
                раны при использовании раствора{' '}
                <span style={{ color: '#0f780b' }}>
                  <strong>Бетадин®</strong>
                </span>{' '}
                перед обработкой операционного поля или наложением швов. Использование различных
                лекарственных форм повидон-йода при лечении проблемных ран уменьшает количество
                гнойного отделяемого, отечность и болезненность в очаге воспаления
                <sup>
                  <a href="#spisok-literatury">7</a>
                </sup>
                . При этом очищение и{' '}
                <Link href="/encyclopedia/maz-dlya-zazhivleniya-ran/">заживление ран</Link>{' '}
                происходят активнее, чем при использовании иных антисептических средств
                <sup>
                  <a href="#spisok-literatury">7</a>
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

            <div className="list-base">
              <p>
                <strong>
                  В хирургии повидон-йод (
                  <span style={{ color: '#0f780b' }}>
                    <strong>Бетадин®</strong>
                  </span>
                  ) применяют в виде
                </strong>
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
                :
              </p>
              <ul>
                <li>10% раствора для наружного применения</li>
                <li>10% мази</li>
                <li>для применения в дренажных системах 10% раствор разбавляют от 10 до 100 раз.</li>
                <li>вагинальных свечей (суппозитории), 200 мг</li>
              </ul>
            </div>

            <p>
              <strong>Раствором</strong>{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                <strong>Бетадин®</strong>
              </mark>{' '}
              обеззараживают операционного поле, обрабатывают руки медицинского персонала перед
              хирургическим вмешательством.
            </p>

            <p>
              <strong>Раствор и мазь</strong>{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                <strong>Бетадин®</strong>
              </mark>{' '}
              используют для дезинфицирующего ухода и лечения постоперационных ран и швов.
            </p>

            <p>
              Согласно исследованиям, при лечении инфицированных ран под салфетками, пропитанными
              раствором или мазью{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                <strong>Бетадин®</strong>
              </mark>
              , в течение первых 5-7 суток уменьшался отёк и количество гнойного отделяемого,
              отмечалось уменьшение боли
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
            </p>

            <p>
              Вагинальные свечи{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                <strong>Бетадин®</strong>
              </mark>{' '}
              (суппозитории) назначают перед плановыми операциями в гинекологии или после
              хирургического лечения для профилактики гнойных осложнений.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-7-1-650x325.webp 1x, /istockphoto-1341663000-2048x2048-2-7-1-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/istockphoto-1341663000-2048x2048-2-7-1-650x325.webp"
                alt="Обработки гнойной раны в домашних условиях"
              />
            </picture>

            {/* Video Section */}
            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                Как правильно обрабатывать раны, смотрите в коротком видео:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="iframe_desc">
                Вы узнаете, какие необходимо использовать средства, чтобы не только защитить рану
                от микробов, но и при этом не ощущать дискомфорта при применении.
              </div>
            </div>

            {/* Section: Профилактика раневых инфекций */}
            <h2 className="h2" id="profilaktika-ranevyh-infekciy">
              Профилактика раневых инфекций
            </h2>
            <p>
              Для профилактики инфицирования бытовых ран необходимо незамедлительно после ранения
              провести обработку поврежденного участка водным раствором антисептического средства.
              Спиртовыми растворами возможно производить обработку только краёв поврежденного
              участка и области вокруг раны.
            </p>

            <p>
              При плановом оперативном вмешательстве важна предоперационная подготовка –
              устранение очагов хронической инфекции в организме пациента. Перед инвазивными
              манипуляциями (инъекциями и хирургическим вмешательством) тщательно обрабатывают
              кожу пациента и персонала специальными обеззараживающими средствами.
            </p>

            <p>
              Для профилактики нагноений после операций назначают короткий курс антибактериальных
              препаратов. Если гнойное осложнение все равно появилось, проводят своевременную
              санацию очага инфекции. Лечение гнойных ран проводят в специализированных
              медицинских учреждениях.
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Обработка ран</strong>
                </p>
                <p>
                  Как правильно обрабатывать раны, чтобы избежать осложнений на поврежденных
                  участках кожи.
                </p>
                <a href="/encyclopedia/obrabotka-ran/" className="btn btn-green" target="_blank">
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="/obrabotka-ran-prevyu-246x166.webp, /obrabotka-ran-prevyu-246x166.webp"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="/obrabotka-ran-prevyu-246x166.webp"
                  alt="Обработка ран - превью"
                />
              </picture>
            </div>

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
              Часто задаваемые вопросы
            </h2>

            <h3 className="h3" id="chem-mozhno-obrabotat-bytovuyu-ranu">
              Чем можно обработать бытовую рану?
            </h3>
            <p>
              <strong>Сразу же после травмы рану необходимо промыть.</strong>
            </p>
            <p>
              Основная задача на этом этапе — большим количеством жидкости механически удалить
              загрязнение и уменьшить «микробное число» – количество бактерий в ране. Для этого
              подойдёт раствор хлоргексидина, изотонический раствор хлорида натрия 0,9% или
              чистая остуженная кипяченая вода. После этого необходимо обработать рану 10%
              раствором{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                <strong>Бетадин®</strong>
              </mark>{' '}
              и наложить чистую повязку, при незначительном раневом канале можно использовать
              медицинский пластырь.
            </p>
            <p>
              Для обработки ранок и ссадин можно использовать 10% неразбавленный раствор{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                <strong>Бетадин®</strong>
              </mark>
              .
            </p>
            <p>
              При крупных ранах и кровотечении рекомендовано незамедлительно обратиться к врачу.
            </p>

            <h3 className="h3" id="chto-luchshe-vybrat-dlya-prizhiganiya-ssadin">
              Что лучше выбрать для «прижигания» ссадин?
            </h3>
            <p>
              У большинства в аптечке имеется «зеленка», раствор фукорцина или 5% спиртовой
              раствор йода. Однако стоит помнить, что спиртовой раствор йода не наносят
              непосредственно на рану, а зеленка и фукорцин оставляют за собой яркое пятно.
              Более того, вызываемое спиртовыми растворами ощущение жжения доставляет дискомфорт
              при использовании как у детей, так и у взрослых.
            </p>
            <p>
              Современным средством для прижигания ссадин является йодсодержащий водный раствор на
              полимерной основе –{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                <strong>Бетадин®</strong>
              </mark>
              . Он лишён недостатков спиртосодержащих антисептиков старого поколения: стойко не
              окрашивает кожу, не щиплет при использовании даже на свежих ранах. К тому же
              обладает широким спектром действия в отношении большинства возбудителей инфекций.
            </p>

            <h3 className="h3" id="kak-pacient-mozhet-umenshit-risk-razvitiya-ranevoy-infekcii">
              Как пациент может уменьшить риск развития раневой инфекции?
            </h3>
            <p>
              При бытовых ранениях необходимо провести правильную обработку поврежденного участка
              кожи.
            </p>
            <p>
              При хирургических манипуляциях — строго соблюдать рекомендации врача по лечению и
              уходу за раной.
            </p>
            <p>
              При появлении пульсирующей боли, увеличении отечности в зоне манипуляции или
              повышении температуры в области раны и лихорадке – обратиться к врачу.
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
                  srcSet="/moshkova-novyj-406x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={203}
                  width={203}
                  src="/moshkova-novyj-406x406 (1).webp"
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
                        srcSet="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp, /maz-dlya-zazhivleniya-ran-prevyu-246x166.webp"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp"
                        alt="Мазь для заживления ран- превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Мазь для заживления ран</strong>
                    </p>
                    <p>Какие бывают заживляющие мази, и как выбрать самую эффективную.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/maz-dlya-zazhivleniya-ran/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/obrabotka-ran-prevyu-246x166.webp, /obrabotka-ran-prevyu-246x166.webp"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/obrabotka-ran-prevyu-246x166.webp"
                        alt="Обработка ран - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Обработка ран</strong>
                    </p>
                    <p>
                      Как правильно обрабатывать раны, чтобы избежать осложнений на поврежденных
                      участках кожи.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/obrabotka-ran/">Подробнее</a>
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
                        height={210}
                        width={310}
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
                Пиксин И. Н., Пигачев А. В., Кисткин А. И., Ипполитов И. Ю. Раны и раневая
                инфекция»// Учебное пособие// Саранск 2012.
              </li>
              <li id="literature-1">
                Руднов В.А. Клинические рекомендации по диагностике и лечению тяжелого сепсиса и
                септического шока в лечебно-профилактических организациях Санкт-Петербурга//
                Вестник анестезиологии и реаниматологии 2016;13(5):88-94.
              </li>
              <li id="literature-2">
                Ключевский В.В. Хирургия повреждений//Руководство для фельдшеров, хирургов,
                травматологов// ОАО Рыбинский Дом печати 2004, Ярославль.
              </li>
              <li id="literature-3">
                Инструкция по медицинскому применению метиленовый синий, РЛС.
              </li>
              <li id="literature-4">
                Инструкция по медицинскому применению фурацилин, РЛС.
              </li>
              <li id="literature-5">
                Инструкция по медицинскому применению перекись водорода, РЛС.
              </li>
              <li id="literature-6">
                Кудыкин М.Н. Повидон-йод в основе лечения инфицированных ран// РМЖ, №34 от
                18.12.2013.
              </li>
              <li id="literature-7">
                Михальский В. В., Богданов А. Е., Жилина С. В., Привиденцев А. И., Аникин А. И.,
                Ульянина А. А.. Применение препарата Бетадин в лечении инфицированных ран// РМЖ
                №29 от 23.12.2010.
              </li>
              <li id="literature-8">
                Инструкция по медицинскому применению ЛП Бетадин® (раствор, мазь, суппозиторий)
                РУ П N015282/03, РУ П N015282/02, РУ П N015282/01.
              </li>
              <li id="literature-9">
                РМЖ №25 от 15.12.2005 «Стоит ли так активно использовать 3% раствор перекиси
                водорода при хирургических вмешательствах?» Н. Трошин.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
