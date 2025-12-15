'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ScrollGoals { [key: number]: () => void; }
interface Triggered { [key: number]: boolean; }

export default function SmeshannyeInfekciiVGinekologii() {
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

    const triggered: Triggered = { 40: false, 80: false };

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
    return () => { window.removeEventListener('scroll', checkScroll); };
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
                    <span property="name">Смешанные инфекции в гинекологии</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Смешанные инфекции в гинекологии</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Смешанные инфекции в гинекологии: лечение и профилактика</h1>
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
                <div className="page-header-body">
                  <p>
                    Жалобы, связанные с выделениями из влагалища и другими неприятными симптомами в интимной зоне, занимают лидирующие позиции в структуре обращений к гинекологу по всему миру
                    <sup><a href="#spisok-literatury">1</a></sup>. Основной причиной этих жалоб являются вульвовагинальные инфекции, которые встречаются среди женщин любых возрастов.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#vidy-infekciy">Виды инфекций</a>
                  </li>
                  <li>
                    <a href="#lechenie-vulvovaginalnyh-infekciy">Лечение вульвовагинальных инфекций</a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4114/1935a4fe3a99b44700d2362c8c0228592ddad450dbdd73da4b19f3e28c466ccf-730x615/banner-smeshannye-infekczii-v-ginekologii-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4114/1935a4fe3a99b44700d2362c8c0228592ddad450dbdd73da4b19f3e28c466ccf-730x615/banner-smeshannye-infekczii-v-ginekologii-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="https://betadin.ru/wp-content/uploads/imagesv3/4114/1935a4fe3a99b44700d2362c8c0228592ddad450dbdd73da4b19f3e28c466ccf-730x615/banner-smeshannye-infekczii-v-ginekologii-730x615.jpg"
                      alt="Смешанные инфекции в гинекологии"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}${navTitleHidden ? ' nav-content-title-hidden' : ''}`}>
              <ul>
                <li>
                  <a href="#vidy-infekciy">Виды инфекций</a>
                </li>
                <li>
                  <a href="#zdorovyy-mikrobiom-vlagalishcha">Здоровый микробиом влагалища</a>
                </li>
                <li>
                  <a href="#faktory-riska-vulvovaginalnyh-infekciy">Факторы риска вульвовагинальных инфекций</a>
                </li>
                <li>
                  <a href="#bakterialnyy-vaginoz">Бактериальный вагиноз</a>
                </li>
                <li>
                  <a href="#vulvovaginalnyy-kandidoz-vvk">Вульвовагинальный кандидоз (ВВК)</a>
                </li>
                <li>
                  <a href="#nespecificheskiy-vulvovaginit-nv">Неспецифический вульвовагинит (НВ)</a>
                </li>
                <li>
                  <a href="#smeshannye-infekcii">Смешанные инфекции</a>
                </li>
                <li>
                  <a href="#lechenie-vulvovaginalnyh-infekciy">Лечение вульвовагинальных инфекций</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Популярные вопросы</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Список литературы</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened((prev) => !prev)}>Содержание</div>
            </nav>
          </div>
        </div>
        <nav className={`nav-content nav-content-fixed${secondaryNavOpened ? ' nav-content__open' : ''}${navTitleHidden ? '' : ' nav-content-title-hidden'}`}>
          <ul>
            <li>
              <a href="#vidy-infekciy">Виды инфекций</a>
            </li>
            <li>
              <a href="#zdorovyy-mikrobiom-vlagalishcha">Здоровый микробиом влагалища</a>
            </li>
            <li>
              <a href="#faktory-riska-vulvovaginalnyh-infekciy">Факторы риска вульвовагинальных инфекций</a>
            </li>
            <li>
              <a href="#bakterialnyy-vaginoz">Бактериальный вагиноз</a>
            </li>
            <li>
              <a href="#vulvovaginalnyy-kandidoz-vvk">Вульвовагинальный кандидоз (ВВК)</a>
            </li>
            <li>
              <a href="#nespecificheskiy-vulvovaginit-nv">Неспецифический вульвовагинит (НВ)</a>
            </li>
            <li>
              <a href="#smeshannye-infekcii">Смешанные инфекции</a>
            </li>
            <li>
              <a href="#lechenie-vulvovaginalnyh-infekciy">Лечение вульвовагинальных инфекций</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Популярные вопросы</a>
            </li>
            <li>
              <a href="#spisok-literatury">Список литературы</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened((prev) => !prev)}>Содержание</div>
        </nav>
        <div className="home-container">
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <h2 className="h2" id="vidy-infekciy">
              Виды влагалищных инфекций
            </h2>
            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  height={505}
                  width={503}
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg"
                  alt="Декоративные элементы"
                />
              </picture>
            </div>
            <div className="list-base">
              <p>В зависимости от вида возбудителя того или иного заболевания можно выделить:</p>
              <ul>
                <li>Грибковую инфекцию</li>
                <li>Бактериальную инфекцию (например, стрептококковую)</li>
                <li>Вирусную инфекцию (например, связанную с вирусом простого герпеса)</li>
                <li>Специфические инфекции, передаваемые половым путем (ИППП) (хламидиоз, трихомониаз и др.)</li>
              </ul>
            </div>
            <div className="list-base">
              <p>Наиболее распространенными вульвовагинальными инфекциями (ВВИ) на сегодняшний день являются:</p>
              <ul>
                <li>Вульвовагинальный кандидоз («молочница»)</li>
                <li>Бактериальный вагиноз</li>
                <li>Аэробный вагинит</li>
                <li>
                  Трихомониаз, а также хламидийный вульвовагинит (относятся к ИППП)
                  <sup><a href="#spisok-literatury">2</a></sup>
                </li>
              </ul>
            </div>
            <p>
              Отдельно следует отметить, что на сегодняшний день всё чаще вульвовагинальные инфекции рассматриваются как полиэтиологический процесс (вызванный сразу несколькими возбудителями). То есть в структуре гинекологической патологии наибольшее значение приобретают так называемые смешанные инфекции
              <sup><a href="#spisok-literatury">3</a></sup>.
            </p>
            <p>
              Любые вульвовагинальные инфекции связаны с риском развития осложнений при беременности и возможными негативными отдаленными последствиями для женского здоровья (бесплодие, хроническое воспаление). Симптомы этих заболеваний зачастую приносят дискомфорт и в повседневной жизни женщины
              <sup><a href="#spisok-literatury">4,5</a></sup>.
            </p>

            <h2 className="h2" id="zdorovyy-mikrobiom-vlagalishcha">
              Здоровый микробиом влагалища
            </h2>
            <p>
              Влагалище женщины устроено таким образом, что оно защищает половую сферу от проникновения и размножения инфекционных агентов. Во влагалище в большом количестве находятся «полезные» лактобактерии, которые благодаря своей жизнедеятельности поддерживают кислую среду, непригодную для жизни «неполезной» флоры.
            </p>
            <p>
              Кроме того, «полезные» лактобактерии конкурируют непосредственно с болезнетворными микроорганизмами и вытесняют их в результате этой борьбы. Выделения из влагалища, которые обязательно присутствуют в норме у каждой женщины, очищают его, способствуют выведению случайно попавших микробов.
            </p>
            <p>
              В результате снижения количества «полезной» флоры при стрессах, хронических заболеваниях, гормональных перестройках возрастает риск заражения инфекционными агентами или активизации условно-патогенной флоры, которая в небольшом количестве присутствует во влагалище.
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4147/ac4f82694e63bbc0b1f843fe5e4e4ffd558885d426cc8c52fecaf60bd3a093c8-650x0/illyustracziya-si-2at4x-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4147/ac4f82694e63bbc0b1f843fe5e4e4ffd558885d426cc8c52fecaf60bd3a093c8-650x0/illyustracziya-si-2at4x-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/4147/ac4f82694e63bbc0b1f843fe5e4e4ffd558885d426cc8c52fecaf60bd3a093c8-650x0/illyustracziya-si-2at4x-650x150.png"
                alt="Группа риска"
              />
            </picture>
            <p>
              При нарушении естественного баланса микрофлоры влагалища или проникновения агрессивного микроба (например, при инфекциях, передаваемых половым путём) защитные механизмы не справляются, и возникают симптомы инфекционного заболевания
              <sup><a href="#spisok-literatury">6</a></sup>.
            </p>

            <h2 className="h2" id="faktory-riska-vulvovaginalnyh-infekciy">
              Факторы риска вульвовагинальных инфекций
            </h2>
            <div className="list-base">
              <p>Риск возникновения вульвовагинальной инфекции возрастает при:</p>
              <ul>
                <li>несоблюдении правил личной гигиены</li>
                <li>
                  обострении хронических заболеваний и при других неблагоприятных условиях для организма
                  <sup><a href="#spisok-literatury">7</a></sup>
                </li>
                <li>раннем начале половой жизни</li>
                <li>частой смене половых партнеров</li>
              </ul>
            </div>

            <h2 className="h2" id="bakterialnyy-vaginoz">
              Бактериальный вагиноз
            </h2>
            <p>
              Бактериальный вагиноз является инфекционным невоспалительным заболеванием. Он может возникать спонтанно, как нарушение нормальной микрофлоры влагалища. Именно бактериальный вагиноз является самой частой причиной появления неприятных выделений у женщин
              <sup><a href="#spisok-literatury">7</a></sup>.
            </p>
            <p>
              Бактериальный вагиноз характеризуется резким снижением числа «полезных» лактобактерий и размножением условно-патогенных микроорганизмов (Gardnerella vaginalis и других).
            </p>
            <div className="list-base">
              <p>Бактериальный вагиноз проявляет себя следующими признаками:</p>
              <ul>
                <li>серовато-белые выделения из влагалища с неприятным «рыбным» запахом</li>
                <li>дискомфортные ощущения в интимной зоне и иногда внизу живота</li>
                <li>
                  иногда выделения из влагалища сопровождаются зудом, раздражением наружных половых органов и болью при мочеиспускании
                </li>
                <li>
                  при лабораторном исследовании мазков из влагалища результаты показывают отсутствие или незначительное количество лактобактерий, условно-патогенная флора в большом количестве
                  <sup><a href="#spisok-literatury">7,9</a></sup>
                </li>
              </ul>
            </div>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4109/9e87f1c097fbc414c2e07a1ea421cfe4936f73a15d2b63740784cbf94930e1bf-650x0/smeshannye-infekczii-v-ginekologiiat4x-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4109/9e87f1c097fbc414c2e07a1ea421cfe4936f73a15d2b63740784cbf94930e1bf-650x0/smeshannye-infekczii-v-ginekologiiat4x-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/4109/9e87f1c097fbc414c2e07a1ea421cfe4936f73a15d2b63740784cbf94930e1bf-650x0/smeshannye-infekczii-v-ginekologiiat4x-650x150.png"
                alt="Признаки бактериального вагиноза"
              />
            </picture>

            <h2 className="h2" id="vulvovaginalnyy-kandidoz-vvk">
              Вульвовагинальный кандидоз (ВВК)
            </h2>
            <p>
              Второе место по частоте после бактериального вагиноза среди вульвовагинальных инфекций занимает кандидоз. Вульвовагинальный кандидоз возникает в результате поражения слизистой влагалища и кожи наружных половых органов грибами рода Candida. Чаще всего заболевание возникает при снижении общего и местного иммунитета (во влагалище), обострении хронических заболеваний, часто возникает у женщин с сахарным диабетом и во время беременности. При этом вульвовагинальный кандидоз редко бывает связан с нарушением микрофлоры влагалища и уменьшением количества лактобактерий
              <sup><a href="#spisok-literatury">10,11</a></sup>.
            </p>
            <div className="list-base">
              <p>Симптомы вульвовагинального кандидоза:</p>
              <ul>
                <li>визуально при осмотре отмечается покраснение, отёк слизистой влагалища и кожи наружных половых органов, белый налёт на слизистой влагалища</li>
                <li>при лабораторном исследовании мазков из влагалища отмечается усиленный рост грибов рода Candida, спор и мицелий грибов</li>
              </ul>
            </div>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4315/9bb42e2072609d9c023d70021ff8724ecc7787e03a577ffbe72b0421f63b4c18-650x0/simptomy-vulvovaginalnogo-kandid-scaled-650x152.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4315/9bb42e2072609d9c023d70021ff8724ecc7787e03a577ffbe72b0421f63b4c18-650x0/simptomy-vulvovaginalnogo-kandid-scaled-1300x303.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={152}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/4315/9bb42e2072609d9c023d70021ff8724ecc7787e03a577ffbe72b0421f63b4c18-650x0/simptomy-vulvovaginalnogo-kandid-scaled-650x152.png"
                alt="Симптомы вульвовагинального кандид"
              />
            </picture>

            <h2 className="h2" id="nespecificheskiy-vulvovaginit-nv">
              Неспецифический вульвовагинит (НВ)
            </h2>
            <p>
              <strong>Неспецифический вульвовагинит</strong> – это инфекционно-воспалительный процесс, который связан с избыточным размножением условно-патогенной флоры. Последняя в норме присутствует во влагалище в малом количестве, однако при определённых условиях (снижение иммунитета, стресс, переохлаждение) может вести себя агрессивно, поражать слизистую оболочку и кожу вульвы, вызывая симптомы заболевания
              <sup><a href="#spisok-literatury">12</a></sup>.
            </p>
            <div className="list-base">
              <p>Характерными признаками неспецифического вульвовагинита являются:</p>
              <ul>
                <li>различные дискомфортные ощущения в области половых органов (болезненность, зуд, жжение)</li>
                <li>аномальные выделения из влагалища (как правило, обильные, с неприятным запахом, могут быть желтоватого или зеленоватого цвета, густой или пенистой консистенции)</li>
                <li>боли при половом контакте</li>
                <li>контактные кровотечения (незначительные по объему кровянистые выделения во время полового акта)</li>
                <li>боль при мочеиспускании</li>
                <li>при визуальном осмотре отмечается покраснение, отек слизистой влагалища, могут быть изъязвления слизистой оболочки</li>
                <li>
                  при лабораторном исследовании в мазках из влагалища определяются незначительное снижение количества «полезной» флоры, высокое количество условно-патогенной флоры (более 10<sup>5</sup> КОЕ/мл), а также признаки воспаления (повышенное количество лейкоцитов)
                  <sup><a href="#spisok-literatury">1,12</a></sup>
                </li>
              </ul>
            </div>

            <h2 className="h2" id="smeshannye-infekcii">
              Смешанные инфекции
            </h2>
            <p>
              В последние годы растет тенденция по распространению так называемых смешанных инфекций, когда при лабораторном анализе в мазках из влагалища обнаруживаются сразу несколько «виновников» заболевания (например, повышенное количество Gardnerella vaginalis и грибов рода Candida или, например, большое количество грибов и аэробных микробов).
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4110/3f8a06ad02064f76154feb8ed8a4271641e5d2a0d99f19558efe16475cca6b8a-650x0/illyustracziya-si-3at4x-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4110/3f8a06ad02064f76154feb8ed8a4271641e5d2a0d99f19558efe16475cca6b8a-650x0/illyustracziya-si-3at4x-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/4110/3f8a06ad02064f76154feb8ed8a4271641e5d2a0d99f19558efe16475cca6b8a-650x0/illyustracziya-si-3at4x-650x325.png"
                alt="Проявления смешанных инфекций в гинекологии"
              />
            </picture>
            <p>
              При этом клиническая картина (симптомы заболевания) может быть «смазанной», нечеткой, а гинекологу трудно определиться с предварительным диагнозом. В таком случае для диагностики заболевания используют лабораторные исследования и тесты, которые способны выявить всех известных возбудителей смешанных инфекций
              <sup><a href="#spisok-literatury">3,13</a></sup>.
            </p>

            <h2 className="h2" id="lechenie-vulvovaginalnyh-infekciy">
              Лечение вульвовагинальных инфекций
            </h2>
            <h3 className="h3">Проблемы, связанные с лечением вульвовагинальных инфекций и пути их решения</h3>
            <div className="big">
              <div className="line">
                <p>
                  <strong>Высокая частота смешанных инфекций.</strong> В связи с этим наиболее востребованными считают препараты с широким спектром действия на известных возбудителей вульвовагинальных инфекций.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Гибель «полезных» лактобактерий во время лечения. </strong>При выборе препарата для лечения вульвовагинальных инфекций предпочтение отдают средствам, способным сохранить «полезные» лактобактерии.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Высокая частота развития резистентности (устойчивости) к лечению.</strong> Важно лечить вульвовагинальные инфекции препаратами, которые не вызывают привыкание и к которым не возникает резистентности возбудителей заболеваний
                  <sup><a href="#spisok-literatury">1,3,7,12</a></sup>.
                </p>
              </div>
            </div>

            <h3 className="h3">Лечение специфических инфекций (ИППП)</h3>
            <p>
              Лечением инфекций, передаваемых половым путём, занимается акушер-гинеколог после точной постановки диагноза. Лечение требуется обоим партнерам под строгим контролем врача. Как правило, используются антибактериальные препараты, к которым чувствителен определенный возбудитель. Длительность терапии определяется индивидуально
              <sup><a href="#spisok-literatury">7</a></sup>.
            </p>

            <h3 className="h3">Лечение неспецифических инфекций вульвы и влагалища, в том числе смешанной этиологии</h3>
            <p>
              Для лечения вульвовагинальных инфекций неспецифической этиологии (вульвовагинального кандидоза, неспецифических вагинитов и смешанных инфекций) используются различные препараты. Одним из них является <strong>Бетадин<sup>®</sup></strong>, выпускаемый в виде вагинальных суппозиториев.
            </p>

            <h4 className="h4">Бетадин® свечи в лечении вульвовагинальных инфекций</h4>
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
                    src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-927x916.jpg"
                    alt="Бетадин"
                  />
                </picture>
              </div>
              <p>
                Бетадин<sup>®</sup> свечи на сегодняшний день отвечают основным требованиям, которые предъявляются к препаратам с широким спектром действия для лечения вульвовагинальных инфекций
                <sup><a href="#spisok-literatury">14</a></sup>.
              </p>
              <p>
                В составе данного препарата содержится 200 мг повидон-йода. Это вещество, которое является резервуаром и стабилизатором для активного компонента – йода, благодаря чему имеет постоянный и максимальный эффект при его применении. Йод высвобождается из суппозитория и воздействует на широкий круг микроорганизмов, в том числе грибы рода Candida, Gardnerella vaginalis, Streptococcus spp., Staphylococcus spp., и других возбудителей вульвовагинальных инфекций.
              </p>
              <p>
                Противопоказаниями к назначению Бетадина являются беременность, период грудного вскармливания и нарушение функции щитовидной железы
                <sup><a href="#spisok-literatury">15</a></sup>.
              </p>
              <p>Схемы лечения препаратом Бетадин<sup>®</sup> в форме свечей могут быть разные. Это зависит от конкретного диагноза, длительности заболевания, наличия или отсутствия осложнения.</p>
              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-svechi-instruktsiya/">
                  Инструкция
                </a>
              </p>
            </div>

            <div className="green">
              <p>Пример лечения неспецифической вульвовагинальной инфекции:</p>
              <p>
                <strong>При остром вагините</strong> свечи Бетадин<sup>®</sup> (200мг) вводятся глубоко во влагалище по 1 свече на ночь в течение 7 дней. В случае необходимости лечение можно продлить ещё на 7 дней.
              </p>
              <p>
                <strong>При наличии устойчивых инфекций</strong> 1 свеча Бетадин<sup>®</sup> (200мг) вводится во влагалище 2 раза в сутки более продолжительное время.
              </p>
            </div>

            <h4 className="h4">Особенности применения свечей</h4>
            <div className="list-base">
              <ul>
                <li>После введения свечи всегда необходимо оставаться в лежачем положении хотя бы 15 минут, чтобы свеча успела раствориться.</li>
                <li>По истечении этого времени некоторая часть вещества может вытечь. Это нормально и не сильно влияет на эффект от препарата.</li>
                <li>По необходимости уберите вытекшие излишки салфеткой или смойте теплой водой. Рекомендуется на протяжении всего курса лечения использовать гигиенические прокладки.</li>
              </ul>
            </div>

            <div className="green">Если же во время курса начнутся менструации – прерывать курс лечения свечами Бетадин<sup>®</sup> не стоит.</div>

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
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg"
                  alt="Декоративные элементы"
                />
              </picture>
            </div>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              Ответы на вопросы
            </h2>
            <h3 className="h3">Нужно ли сдавать повторно мазок из влагалища после лечения и через какое время?</h3>
            <p>
              После проведенного курса лечения рекомендуется повторно посетить гинеколога и сдать мазок из влагалища для лабораторного исследования. После окончания лечения это рекомендуется сделать не ранее, чем через 5 дней (при отсутствии менструации).
            </p>

            <h3 className="h3">Увеличивается ли длительность лечения при смешанных инфекциях влагалища?</h3>
            <p>
              Длительность лечения зависит сразу от нескольких факторов: первый ли это эпизод инфекции, его продолжительность, выраженность симптомов, есть ли или нет признаки осложнений.
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Аверкова Виктория Геннадьевна</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Автор статьи</p>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4376/56e6a225648069ae3d29575f0c63962510fad57b2d134dd89075765b86a40ada-236x203/averkova-novyj-203x203.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4376/56e6a225648069ae3d29575f0c63962510fad57b2d134dd89075765b86a40ada-236x203/averkova-novyj-406x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={203}
                  width={203}
                  src="https://betadin.ru/wp-content/uploads/imagesv3/4376/56e6a225648069ae3d29575f0c63962510fad57b2d134dd89075765b86a40ada-236x203/averkova-novyj-203x203.png"
                  alt="Аверкова Виктория Геннадьевна"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              Читать по теме
            </div>
            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                <div className="swiper-slide swiper-slide-active" style={{ marginRight: '29px' }}>
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
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-0x166/bakterialnyj-vaginoz-prevyu-246x166.png"
                        alt="Бактериальный вагиноз - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Бактериальный вагиноз</strong>
                    </p>
                    <p>Почти в 90% случаев патологических выделений у женщин диагностируется бактериальный вагиноз. Почему возникает это заболевание, и как его лечить?</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/bakterialnyj-vaginoz/">Подробнее</a>
                    </p>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-next" style={{ marginRight: '29px' }}>
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
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-246x166.png"
                        alt="Свечи от вагинита - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Свечи от вагинита</strong>
                    </p>
                    <p>Лечение вагинита местными препаратами в форме вагинальных свечей. Как выбрать свечи от воспаления во влагалище?</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/svechi-ot-vaginita/">Подробнее</a>
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ marginRight: '29px' }}>
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1945/d32c4af611d78c7356ca7fc4887a8b02ada3237f837bf57db2a450b1bbc5eeaa-0x166/svechi-ot-molochniczy-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1945/d32c4af611d78c7356ca7fc4887a8b02ada3237f837bf57db2a450b1bbc5eeaa-0x166/svechi-ot-molochniczy-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1945/d32c4af611d78c7356ca7fc4887a8b02ada3237f837bf57db2a450b1bbc5eeaa-0x166/svechi-ot-molochniczy-prevyu-246x166.png"
                        alt="Свечи от молочницы - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Свечи от молочницы</strong>
                    </p>
                    <p>Какие бывают свечи от молочницы, и чем они отличаются.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/svechi-ot-molochnicy/">Подробнее</a>
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
                Mashburn J. Vaginal infections update. J Midwifery Womens Health. 2012 Nov-Dec;57(6):629-634. doi: 10.1111/j.1542-2011.2012.00246.x. Epub 2012 Oct 24. PMID: 23094602.
              </li>
              <li id="literatura-1">
                Reid G, Bruce AW. Urogenital infections in women: can probiotics help? Postgrad Med J. 2003 Aug;79(934):428-32. doi: 10.1136/pmj.79.934.428. PMID: 12954951; PMCID: PMC1742800.
              </li>
              <li id="literatura-2">
                Боровиков И.О., Куценко И.И., Рубинина Э.Р. Опыт клинического менеджмента смешанных инфекций урогенитального тракта у женщин. РМЖ. Мать и дитя. 2018;1:26–32. DOI: 10.32364/2618-8430-2018-1-1-26-32. Ravel J., Gajer P., Abdo Z., Schneider G. Vaginal microbiome of reproductive-age women. Proc Natl Acad Sci USA. 2011;108(1):4680–4687. DOI: 10.1073/pnas.1002611107.
              </li>
              <li id="literatura-3">
                Воронова О.А. Внедрение инновационных технологий на этапе реабилитации больных с вагинальной патологией и инфекциями, передаваемыми половым путем. Тезисы II Всероссийского конгресса дерматовенерологов. СПб., 2007.
              </li>
              <li id="literatura-4">
                Радзинский В.Е., Кипяткова Н.Г., Мухтарова А.В. Биоценозы гениталий при угрожающем невынашивании и преждевременных родах. Вестник Российского университета дружбы народов. Серия: Медицина. 2009
              </li>
              <li id="literatura-5">
                Buchta V. Vaginal microbiome. Ceska Gynekol. 2018 Winter;83(5):371-379. English. PMID: 30848142.
              </li>
              <li id="literatura-6">
                Савельева Г.М., Сухих Г.Т., Серова В.Н. и др. Гинекология. Национальное руководство. 2-е изд. М.: ГЭОТАР-Медиа, 2017.
              </li>
              <li id="literatura-7">
                Eggers M. Infectious Disease Management and Control with Povidone Iodine. Infect Dis Ther. 2019 Dec;8(4):581-593. doi: 10.1007/s40121-019-00260-x. Epub 2019 Aug 14. Erratum in: Infect Dis Ther. 2019 Aug 22;: PMID: 31414403; PMCID: PMC6856232.
              </li>
              <li id="literatura-8">
                Romero Herrero D, Andreu Domingo A. Vaginosis bacteriana. Bacterial vaginosis. Enferm Infecc Microbiol Clin. 2016 Jul;34 Suppl 3:14-8. Spanish. doi: 10.1016/S0213-005X(16)30214-2. PMID: 27474242.
              </li>
              <li id="literatura-9">
                Mtibaa L., Fakhfakh N., Kallel A., Belhadj S., Belhaj Salah N., Bada N., Kallel K. Vulvovaginal candidiasis: Etiology, symptomatology and risk factors. J Mycol Med. 2017 Jun;27(2):153-158. doi: 10.1016/j.mycmed.2017.01.003. Epub 2017 Mar 15. PMID: 28314677.
              </li>
              <li id="literatura-10">
                Федеральные клинические рекомендации по ведению больных урогенитальным кандидозом. РОАГ. Москва, 2020 год.
              </li>
              <li id="literatura-11">
                Перламутров Ю.Н., Чернова Н.И. Возможности повышения эффективности терапии неспецифического вагинита и цервицита. Лечащий врач. 2014. № 12. С. 79–82.
              </li>
              <li id="literatura-12">
                Бебнева Т.Н., Добрецова Т.А. Смешанные вагинальные инфекции: новая идеология. Неспецифические вагинальные инфекции в практике акушера-гинеколога. Информационный бюллетень. Под ред. В.Е. Радзинского, А.М. Савичевой. М.: StatusPraesens; 2016.
              </li>
              <li id="literatura-13">
                Богомазова И.М., Белоусова В.С., Максимов М.Л. Эффективность использования препарата Бетадин<sup>®</sup> при бактериальном вагинозе. РМЖ, 2014 год.
              </li>
              <li id="literatura-14">
                Инструкция по медицинскому применению Бетадин суппозитории. РН: П№015282/01.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
