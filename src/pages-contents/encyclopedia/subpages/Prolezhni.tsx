"use client";
import React, { useEffect } from 'react';

const Prolezhni: React.FC = () => {
  useEffect(() => {
    // Analytics scroll tracking logic adapted from the original script
    // eslint-disable-next-line no-console
    console.log(1);
    const scrollGoals: { [key: number]: () => void } = {
      25: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг25'),
      50: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг50'),
      75: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг75'),
      100: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг100'),
    };
    const triggered: { [key: number]: boolean } = { 25: false, 50: false, 75: false, 100: false };

    function checkScroll() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor(((scrollTop + winHeight) / docHeight) * 100);
      for (const percent of [25, 50, 75, 100]) {
        if (scrollPercent >= percent && !triggered[percent]) {
          triggered[percent] = true;
          scrollGoals[percent]();
          // eslint-disable-next-line no-console
          console.log(percent);
        }
      }
      if (Object.values(triggered).every((v) => v)) {
        window.removeEventListener('scroll', checkScroll);
      }
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <main>
      <div className="container-page-header">
        <div className="container">
          <div className="page-header page-header-breadcrumbs">
            <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://betadin.ru"> <span property="name">Главная</span> </a>
                <meta property="position" content="1" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/"> <span property="name">Пролежни</span> </a>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">Пролежни</span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>
          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                <h1 className="page-header-title-text">Пролежни у взрослых и детей: профилактика и уход</h1>
                <picture>
                  <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x" type="image/webp" />
                  <img decoding="async" height={112} width={115} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png.webp" srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.png.webp 2x" alt="картинка у заголовка" />
                </picture>
              </div>
              <h2 className="page-header-subtitle">Что такое пролежни </h2>
              <div className="page-header-body">
                <p>
                  Пролежни, или язвы образуются в результате длительного давления на участок ткани. При повреждении кожных покровов или тканей и длительном давлении снижается кровообращение в определенной части тела
                  <sup><a href="#spisok-literatury">1</a></sup>.
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li> <a href="#klassifikaciya-prolezhney">Стадии </a> </li>
                <li> <a href="#kak-lechat-prolezhni">Лечение пролежней</a> </li>
                <li> <a href="#diagnostika-pacienta-s-prolezhnyami">Диагностика</a> </li>
              </ul>
            </div>
            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-1460x1230.webp 2x" type="image/webp" />
                  <img fetchPriority="high" decoding="async" height={615} width={730} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-730x615.jpg.webp" srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-730x615.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-1460x1230.jpg.webp 2x" alt="пролежни" />
                </picture>
              </div>
            </div>
          </div>
          <nav className="nav-content">
            <ul>
              <li><a href="#lokalizaciya-prolezhney">Локализация пролежней</a></li>
              <li><a href="#simptomy-prolezhney">Симптомы пролежней</a></li>
              <li><a href="#prichiny-vozniknoveniya-prolezhney">Причины возникновения пролежней</a></li>
              <li><a href="#klassifikaciya-prolezhney">Классификация пролежней</a></li>
              <li><a href="#oslozhneniya-prolezhney">Осложнения пролежней</a></li>
              <li><a href="#kak-lechat-prolezhni">Как лечат пролежни?</a></li>
              <li><a href="#diagnostika-pacienta-s-prolezhnyami">Диагностика пациента с пролежнями</a></li>
              <li><a href="#otvety-na-voprosy">Ответы на вопросы</a></li>
              <li><a href="#spisok-literatury">Список литературы</a></li>
            </ul>
            <div className="nav-content-title nav-content-title-cross"> Содержание</div>
          </nav>
        </div>
      </div>

      <nav className="nav-content nav-content-fixed">
        <ul>
          <li><a href="#lokalizaciya-prolezhney">Локализация пролежней</a></li>
          <li><a href="#simptomy-prolezhney">Симптомы пролежней</a></li>
          <li><a href="#prichiny-vozniknoveniya-prolezhney">Причины возникновения пролежней</a></li>
          <li><a href="#klassifikaciya-prolezhney">Классификация пролежней</a></li>
          <li><a href="#oslozhneniya-prolezhney">Осложнения пролежней</a></li>
          <li><a href="#kak-lechat-prolezhni">Как лечат пролежни?</a></li>
          <li><a href="#diagnostika-pacienta-s-prolezhnyami">Диагностика пациента с пролежнями</a></li>
          <li><a href="#otvety-na-voprosy">Ответы на вопросы</a></li>
          <li><a href="#spisok-literatury">Список литературы</a></li>
        </ul>
        <div className="nav-content-title nav-content-title-cross"> Содержание</div>
      </nav>

      <div className="home-container">
        <div className="new-disclaimer"> Информация в статье не&nbsp;заменяет консультацию врача</div>
      </div>

      <div className="page-content-wrapper">
        <div className="container container-middle page-content">
          <p>Как правило, возникновению пролежневых язв подвержены люди с ограниченной подвижностью.</p>
          <p>В соответствии с международной классификацией болезней (МКБ-10) при наличии пролежней врач может поставить следующий диагноз: М70 — Болезни мягких тканей, связанные с нагрузкой, перегрузкой и давлением.</p>
          <div className="exlude-turbo">
            <picture className="banner-betadin banner-circle">
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x" type="image/webp" />
              <img decoding="async" height={505} width={503} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp" alt="Декоративные элементы" />
            </picture>
          </div>
          <p>По результатам исследований последних лет сообщается, что распространенность заболевания среди пациентов с ограниченной подвижностью варьируется от 11,5 до 32,7%<sup><a href="#spisok-literatury">2</a></sup>.</p>
          <h2 className="h2" id="lokalizaciya-prolezhney">Локализация пролежней</h2>
          <p>Пролежни обычно появляются в местах соприкосновения тела с твердой поверхностью / кроватью, а также в зонах костных выступов: копчик, ягодицы, бедра, внешняя сторона голени, икры, пятки и стопы, плечи, локти и затылок.</p>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1122/4960b7db2b4d3ebe5c652c4f488599686b1b1285389a00254049c17999b28d81-650x0/medical-kit-and-bandaid-509398-488-1-6-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1122/4960b7db2b4d3ebe5c652c4f488599686b1b1285389a00254049c17999b28d81-650x0/medical-kit-and-bandaid-509398-488-1-6-1300x650.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1122/4960b7db2b4d3ebe5c652c4f488599686b1b1285389a00254049c17999b28d81-650x0/medical-kit-and-bandaid-509398-488-1-6-650x325.png.webp" alt="Локализация пролежней" />
          </picture>
          <h2 className="h2" id="simptomy-prolezhney">Симптомы пролежней</h2>
          <div className="list-base">
            <p>Симптоматика пролежней зависит от стадии развития патологического процесса. Существуют основные признаки, появление которых у малоподвижных или обездвиженных людей свидетельствует о возникновении пролежней:</p>
            <ul>
              <li>Покраснение участка кожи</li>
              <li>Возникновение поверхностной раны кожи</li>
              <li>Появление глубокой раны (возможно наличие корки)</li>
              <li>Возникновение волдыря, наполненного кровью</li>
              <li>Неприятный запах</li>
            </ul>
          </div>
          <h2 className="h2" id="prichiny-vozniknoveniya-prolezhney">Причины возникновения пролежней</h2>
          <p>Пролежни возникают из-за невозможности пациента изменять положение корпуса и смещать нагрузку с участков тела, подверженных избыточному сдавливанию. Уязвимы пациенты с нарушением двигательных функций и сознания.</p>
          <h3 className="h3" id="vneshnie-faktory">Внешние факторы</h3>
          <p>Внешними факторами, провоцирующими появление пролежней являются: давление, трение, сила сдвига и влажность.</p>
          <h3 className="h3" id="vnutrennie-faktory">Внутренние факторы</h3>
          <p>К внутренним факторам относят лихорадку, недоедание, анемию и эндотелиальную дисфункцию.</p>
          <div className="green">
            <p>Если пациент прикован к постели и обездвижен, даже 2-x часов может быть достаточно для появления основы пролежня.
              <br /><br />Длительное давление на ткани может привести к нарушению кровотока и снижению уровня поступающего к тканям кислорода. Со временем ткань с нарушенным кровоснабжением начинает накапливать токсичные вещества. Впоследствии возникает рана тканей и некроз (омертвление).
            </p>
          </div>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1123/4e669e72138c1796b988196b35a59342e12725ec322a47ec0e05ab4b45eea754-650x0/medical-kit-and-bandaid-509398-488-1-7-650x213.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1123/4e669e72138c1796b988196b35a59342e12725ec322a47ec0e05ab4b45eea754-650x0/medical-kit-and-bandaid-509398-488-1-7-1300x426.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={213} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1123/4e669e72138c1796b988196b35a59342e12725ec322a47ec0e05ab4b45eea754-650x0/medical-kit-and-bandaid-509398-488-1-7-650x213.png.webp" alt="Причины возникновения пролежней" />
          </picture>
          <h3 className="h3" id="predraspolagayushchie-faktory">Предрасполагающие факторы</h3>
          <div className="list-base">
            <p>Предрасполагающие факторы, способствующие формированию пролежней:</p>
            <ul>
              <li>Неврологические заболевания</li>
              <li>Сердечно-сосудистые заболевания</li>
              <li>Длительная анестезия</li>
              <li>Обезвоживание</li>
              <li>Недоедание</li>
              <li>Гипотония</li>
            </ul>
          </div>
          <h2 className="h2" id="klassifikaciya-prolezhney">Стадии пролежней</h2>
          <div className="big">
            <div className="line">
              <div>
                <p><strong>1 стадия пролежней</strong></p>
                <p>Покраснение участка кожи, располагающегося над костным выступом.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>2 стадия пролежней</strong></p>
                <p>Появление открытой раны без корки красно-розового цвета.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>3 стадия пролежней</strong></p>
                <p>Глубокая рана с поражением всех слоев кожи, без обнажения костно-мышечного аппарата.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>4 стадия пролежней</strong></p>
                <p>Глубокая рана с поражением всех слоев кожи и обнажением костно-мышечного аппарата.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>Неклассифицируемая стадия пролежней</strong></p>
                <p>Состояние, при котором существует трудность определения стадии в связи с присутствием на ране толстой корки.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>Подозрение на глубокое повреждение тканей</strong></p>
                <p>(Глубина не известна) — локализованный участок обесцвеченной неповрежденной кожи темно-бордового цвета или наполненный кровью волдырь.</p>
              </div>
            </div>
          </div>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1124/5db08f51ea5276863e20971a95fbea5d8c27703bfd34fc32cd8577374d877b0c-650x0/medical-kit-and-bandaid-509398-488-1-8-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1124/5db08f51ea5276863e20971a95fbea5d8c27703bfd34fc32cd8577374d877b0c-650x0/medical-kit-and-bandaid-509398-488-1-8-1300x650.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1124/5db08f51ea5276863e20971a95fbea5d8c27703bfd34fc32cd8577374d877b0c-650x0/medical-kit-and-bandaid-509398-488-1-8-650x325.png.webp" alt="Классификация пролежней" />
          </picture>
          <h2 className="h2" id="oslozhneniya-prolezhney">Осложнения пролежней</h2>
          <h3 className="h3" id="vozniknovenie-infekcionnyh-zabolevaniy">Возникновение инфекционных заболеваний</h3>
          <div className="list-base">
            <p>Наиболее распространенным осложнением пролежней является присоединение <strong>инфекции</strong>. Далее на таких участках формируются язвы. Язвы III и IV классов требуют интенсивного лечения, так как их осложнения могут быть опасными для жизни. Если инфекция распространяется на более глубокие ткани и кость, она может привести к:</p>
            <ul>
              <li>Периоститу (инфекция слоя, покрывающего кость)</li>
              <li>Остеомиелиту (инфекция кости)</li>
              <li>Септическому артриту (инфекция сустава)</li>
              <li>Образованию пазух</li>
            </ul>
          </div>
          <p>Распространение инфекционного агента приводит к смертельным последствиям...</p>
          <h3 className="h3">Хроническая анемия и амилоидоз</h3>
          <p>Хронические пролежни могут вызвать хроническую анемию или вторичный амилоидоз.</p>
          <h3 className="h3">Вторичные осложнения</h3>
          <p>При наличии неадекватных осложнений могут возникнуть вторичные осложнения (гематома, серома, абсцесс, послеоперационный сепсис).</p>
          <h2 className="h2" id="kak-lechat-prolezhni">Лечение пролежней</h2>
          <p>При возникновении пролежней необходимо незамедлительно приступать к их лечению. Выбор терапии зависит от места проявления, стадии и наличия осложнений.</p>
          <div className="iframe">
            <div className="bg_default bg_green" />
            <div className="h3 h3_green iframe-title">Про лечение пролежней смотрите в коротком видео:</div>
            <div className="iframe-container">
              <iframe className="lazyloaded" data-src="https://rutube.ru/play/embed/fa8f8cff35b68d5c8f024cee12b45743/?p=PkU2rTUw0f2w7kXkBCs9vA" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="iframe_desc">Из видео вы узнаете, как предотвратить образование пролежней и минимизировать риск инфекционных осложнений.</div>
          </div>
          <h3 className="h3" id="cel-lecheniya">Цель лечения:</h3>
          <div className="big">
            <div className="line"><div><p>Минимизировать давление, оказываемое на пролежень</p></div></div>
            <div className="line"><div><p>Уменьшить контакт пролежня с твердой поверхностью</p></div></div>
            <div className="line"><div><p>Обеззаразить рану</p></div></div>
            <div className="line"><div><p>Сократить влажность поврежденного участка</p></div></div>
          </div>
          <h3 className="h3">Уход за больным с факторами риска развития пролежней</h3>
          <p>Снижение давления и надлежащий уход за кожей, использование подушек и опорных поверхностей являются наиболее результативным подходом к лечению пролежней.</p>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1125/3c5d9f1723b9e8c398c4daa2782e0a78b9704a01df1b9883289b9da6767d965c-650x0/medical-kit-and-bandaid-509398-488-1-9-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1125/3c5d9f1723b9e8c398c4daa2782e0a78b9704a01df1b9883289b9da6767d965c-650x0/medical-kit-and-bandaid-509398-488-1-9-1300x650.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1125/3c5d9f1723b9e8c398c4daa2782e0a78b9704a01df1b9883289b9da6767d965c-650x0/medical-kit-and-bandaid-509398-488-1-9-650x325.png.webp" alt="Уход за больными с пролежнями" />
          </picture>
          <p>Опорные поверхности могут быть статическими или динамическими...</p>
          <h3 className="h3" id="echenie-antibiotikami">Лечение антибиотиками</h3>
          <p>Очищение раны является обязательным этапом лечения пролежней. Применение системных антибиотиков оправдано при более глубоких бактериальных инфекциях.</p>
          <h3 className="h3" id="hirurgicheskii-metod-lecheniya">Хирургический метод лечения</h3>
          <p>Глубина и тяжесть пролежня определяют, может ли потребоваться хирургическое вмешательство.</p>
          <h3 className="h3" id="kislorodnaya-terapiya">Кислородная терапия</h3>
          <p>Имеются исследования о гипербарической кислородной терапии для заживления ран.</p>
          <h3 className="h3" id="primenenie-mestnyh-protivomikrobnyh-sredstv">Применение местных противомикробных средств</h3>
          <p>Актуальные противомикробные средства включают антисептики и антибактериальные препараты. В качестве главного действующего вещества часто используют повидон-йод.</p>
          <h3 className="h3" id="lechenie-prolezhney-povidon-yodom-preparaty-pod-nazvaniem-betadin">Лечение пролежней повидон-йодом (Бетадин®)</h3>
          <p>Препараты на основе повидон-йода обладают широким антимикробным спектром действия. Их механизм основан на разрушении клеточной стенки микробов.</p>
          <div className="green"><p>Важно помнить, что снижение эффективности ряда антисептиков может повысить риски осложнений. Бетадин® демонстрирует низкий уровень развития резистентности.</p></div>
          <h4 className="h4">Как применяют препарат Бетадин® для лечения пролежней?</h4>
          <div className="product-block">
            <div className="banner-product-img"><picture>
              <source media="(max-width: 767px)" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-315x252.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-630x503.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-1853x1832.jpg.webp 2x" width={927} height={916} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg.webp" alt="Бетадин" />
            </picture></div>
            <p>Способ применения зависит от лекарственной формы препарата. Для лечения пролежней применяют Бетадин® в форме раствора и мази.</p>
            <p>Раствор для наружного применения наносят на рану в неразбавленном виде. Мазь наносят 2 раза в сутки тонким слоем с захватом здоровой кожи.</p>
          </div>
          <h4 className="h4" id="protivopokazaniya-k-ispolzovaniyu-preparatov-betadin">Противопоказания к использованию препаратов Бетадин®</h4>
          <p>Среди противопоказаний: гиперчувствительность к активному веществу, аденома щитовидной железы, гипертиреоз, герпетиформный дерматит Дюринга, применение радиоактивного йода. Препарат противопоказан недоношенным и новорожденным детям. С осторожностью применяют при заболевании почек, беременности и лактации.</p>
          <div className="buttons"><a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-rastvor-instruktsiya/">Инструкция</a></div>
          <h2 className="h2" id="diagnostika-pacienta-s-prolezhnyami">Обследование пациента с пролежнями</h2>
          <div className="list-base">
            <p>Какие обследования необходимо пройти пациенту с пролежнями? Следует начать со сбора анамнеза, затем тщательное изучение глубины раны и проведение дифференциальной диагностики.</p>
          </div>
          <h2 className="h2" id="otvety-na-voprosy">Ответы на вопросы</h2>
          <h3 className="h3" id="mozhet-li-prolezhen-proyti-bez-lecheniya">Может ли пролежень пройти без лечения?</h3>
          <p>Нет, при возникновении пролежня лечение следует начать незамедлительно.</p>
          <h3 className="h3" id="pochemu-voznikayut-prolezhni">Почему возникают пролежни?</h3>
          <p>Основной причиной пролежней является механическая нагрузка в виде давления, повышенное трение и сдвиг.</p>
          <h3 className="h3" id="kakoy-doktor-lechit-prolezhni">Какой доктор лечит пролежни?</h3>
          <p>Лечение пролежней всегда должно осуществляться с межпрофессиональным подходом и включает хирурга, дерматолога, специалистов по уходу за ранами и профильных врачей.</p>
          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">Красковский Федор Янович</p>
              <div className="autor-subtitle" />
              <p className="autor-footer">Автор статьи</p>
            </div>
            <picture>
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-470x406.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" height={203} width={235} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.png.webp" alt="" />
            </picture>
          </div>
          <div className="h2 h2-read-more" id="chitat-po-teme">Читать по теме</div>
          <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
            <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
              <div className="swiper-slide swiper-slide-active" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1916/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/obrabotka-prolezhnej-mazi-и-kremы-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1916/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/obrabotka-prolezhnej-mazi-и-kremы-prevyu-491x332.webp 2x" type="image/webp" />
                    <img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1916/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/obrabotka-prolezhnej-mazi-и-kremы-prevyu-246x166.png.webp" alt="Обработка пролежней_ мази и кремы-превью" />
                  </picture>
                </div>
                <div className="slide-body"><p className="slide-title"><strong>Обработка пролежней: мази и кремы</strong></p><p>Подбираем эффективный и безопасный препарат для обработки пролежней.</p></div>
              </div>
            </div>
          </div>
          <h2 className="h2" id="spisok-literatury">Список литературы</h2>
          <ol className="literature">
            <li id="literature-0">Labeau SO, Afonso E, Benbenishty J, et al. Prevalence, associated factors and outcomes of pressure injuries in adult intensive care unit patients: the DecubICUs study. Intensive Care Med. 2021;47(2):160-169.</li>
            <li id="literature-1">Labeau SO, Afonso E, Benbenishty J, et al. Prevalence...</li>
            <li id="literature-2">Жетмекова Ж.Т., Танат З.Х., Ниязова Б.К., Шарапиева А.М. Профилактика и лечение пролежней // Нур-Султан – 2020.</li>
            <li id="literature-3">Zaidi SRH, Sharma S. Pressure Ulcer. In: StatPearls. Treasure Island (FL): StatPearls Publishing; June 3, 2022.</li>
            <li id="literature-4">Bluestein D, Javaheri A. Pressure ulcers: prevention, evaluation, and management. Am Fam Physician. 2008.</li>
            <li id="literature-5">Norman G, Dumville JC, Moore ZE, Tanner J, Christie J, Goto S. Antibiotics and antiseptics for pressure ulcers. Published 2016.</li>
            <li id="literature-6">Lepelletier D, Maillard JY, Pozzetto B, Simon A. Povidone Iodine: Properties. Antimicrob Agents Chemother. 2020.</li>
            <li id="literature-7">Бетадин instruct.</li>
            <li id="literature-8">Бетадин мазь instruct.</li>
            <li id="literature-9">Приказ N 123 об утверждении отраслевого стандарта «Протокол ведения больных. Пролежни»</li>
            <li id="literature-10">Квашнина Д.В. et al.</li>
            <li id="literature-11">Борисов И. В.</li>
            <li id="literature-12">Bigliardi PL et al. Povidone iodine in wound healing. Int J Surg. 2017.</li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Prolezhni;
