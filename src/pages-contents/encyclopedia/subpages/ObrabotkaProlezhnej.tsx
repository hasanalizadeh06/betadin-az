"use client";
import React, { useEffect } from 'react';

const ObrabotkaProlezhnej: React.FC = () => {
  useEffect(() => {
    // Analytics scroll tracking logic adapted from the original script
    // Guard for browsers and the global ym function (Yandex Metrica)
    const scrollGoals: { [key: number]: () => void } = {
      25: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг25'),
      50: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг50'),
      75: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг75'),
      100: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг100'),
    };
    const triggered: { [key: number]: boolean } = {
      25: false,
      50: false,
      75: false,
      100: false,
    };

    // basic debug log as in original script
    // eslint-disable-next-line no-console
    console.log(1);

    function checkScroll() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor(((scrollTop + winHeight) / docHeight) * 100);
      for (let percent of [25, 50, 75, 100]) {
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
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <main>
      <div className="container-page-header">
        <div className="container">
          <div className="page-header page-header-breadcrumbs">
            <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://betadin.ru">
                  <span property="name">Главная</span>
                </a>
                <meta property="position" content="1" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="/encyclopedia/">
                  <span property="name">Мази и кремы для обработки пролежней</span>
                </a>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">Мази и кремы для обработки пролежней</span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>
          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                <h1 className="page-header-title-text">Мази и кремы для пролежней: виды, применение, советы</h1>
                <picture>
                  <source
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x"
                    type="image/webp"
                  />
                  <img
                    decoding="async"
                    height={112}
                    width={115}
                    src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png.webp"
                    srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.png.webp 2x"
                    alt="картинка у заголовка"
                  />
                </picture>
              </div>
              <h2 className="page-header-subtitle">Что представляют из себя пролежни? </h2>
              <div className="page-header-body">
                <p>
                  <a href="/encyclopedia/prolezhni/">Пролежни</a> – четко определяемая область повреждения кожи и глубоких слоев тканей в результате длительного внешнего давления
                  <sup>
                    <a href="#spisok-literatury">8</a>
                  </sup>
                  .
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li>
                  <a href="/encyclopedia/obrabotka-prolezhnej/#mazi-i-kremy-dlya-obrabotki-prolezhney">Список мазей</a>
                </li>
                <li>
                  <a href="/encyclopedia/obrabotka-prolezhnej/#maz-na-osnove-povidon-yoda">Мазь с повидон-йодом</a>
                </li>
                <li>
                  <a href="/encyclopedia/obrabotka-prolezhnej/#kak-vybrat-maz-ot-prolezhney">Мази в зависимости от стадии пролежней</a>
                </li>
              </ul>
            </div>
            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3284/8cbaba567d0255b1be5fd881d6877d545f313580d5b165bf620bac68724f4422-730x615/medical-kit-and-bandaid-509398-488-3-730x365.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/3284/8cbaba567d0255b1be5fd881d6877d545f313580d5b165bf620bac68724f4422-730x615/medical-kit-and-bandaid-509398-488-3-1460x730.webp 2x"
                    type="image/webp"
                  />
                  <img
                    fetchPriority="high"
                    decoding="async"
                    height={365}
                    width={730}
                    src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3284/8cbaba567d0255b1be5fd881d6877d545f313580d5b165bf620bac68724f4422-730x615/medical-kit-and-bandaid-509398-488-3-730x365.jpg.webp"
                    srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3284/8cbaba567d0255b1be5fd881d6877d545f313580d5b165bf620bac68724f4422-730x615/medical-kit-and-bandaid-509398-488-3-730x365.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3284/8cbaba567d0255b1be5fd881d6877d545f313580d5b165bf620bac68724f4422-730x615/medical-kit-and-bandaid-509398-488-3-1460x730.jpg.webp 2x"
                    alt="Мази и кремы для лечения пролежней"
                  />
                </picture>
              </div>
            </div>
          </div>
          <nav className="nav-content">
            <ul>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#kak-obrabatyvat-prolezhni">Как обрабатывать пролежни</a>
              </li>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#mazi-i-kremy-dlya-obrabotki-prolezhney">Мази и кремы для обработки пролежней</a>
              </li>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#kak-vybrat-maz-ot-prolezhney">Как выбрать мазь от пролежней</a>
              </li>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#otvety-na-voprosy">Ответы на вопросы</a>
              </li>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#spisok-literatury">Список литературы</a>
              </li>
            </ul>
            <div className="nav-content-title nav-content-title-cross"> Содержание</div>
          </nav>
        </div>
      </div>

      <nav className="nav-content nav-content-fixed nav-content-title-hidden">
        <ul>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#kak-obrabatyvat-prolezhni">Как обрабатывать пролежни</a>
          </li>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#mazi-i-kremy-dlya-obrabotki-prolezhney">Мази и кремы для обработки пролежней</a>
          </li>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#kak-vybrat-maz-ot-prolezhney">Как выбрать мазь от пролежней</a>
          </li>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#otvety-na-voprosy">Ответы на вопросы</a>
          </li>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#spisok-literatury">Список литературы</a>
          </li>
        </ul>
        <div className="nav-content-title nav-content-title-cross"> Содержание</div>
      </nav>

      <div className="home-container">
        <div className="new-disclaimer"> Информация в статье не&nbsp;заменяет консультацию врача</div>
      </div>
      <div className="page-content-wrapper">
        <div className="container container-middle page-content">
          <p>
            Данная патология распространена у пожилых и ограниченных в движении людей, в том числе со сниженной чувствительностью (парализованных или находящихся без сознания). Длительное сдавление приводит к снижению кровотока (ишемии) в области сдавления. По этой причине происходит нехватка кислорода в тканях (тканевой гипоксии), что в конечном итоге приводит к омертвлению тканей. Особенно уязвимы участки кожи над костными выступами, такими как крестец, бедра, локти и пятки. Для образования пролежней у некоторых людей достаточно всего двух часов неподвижности и постоянного внешнего давления на кожный покров
            <sup>
              <a href="#spisok-literatury">1,2</a>
            </sup>
            .
          </p>
          <div className="exlude-turbo">
            <picture className="banner-betadin banner-circle">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x"
                type="image/webp"
              />
              <img
                decoding="async"
                height={505}
                width={503}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp"
                srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.jpg.webp 2x"
                alt="Декоративные элементы"
              />
            </picture>
          </div>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1127/ee0a68023af4d3b4eb2d4e65b6ca5983eb07f6f4b460d606fbb287f00c0b12a5-650x0/medical-kit-and-bandaid-509398-488-1-10-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1127/ee0a68023af4d3b4eb2d4e65b6ca5983eb07f6f4b460d606fbb287f00c0b12a5-650x0/medical-kit-and-bandaid-509398-488-1-10-1300x650.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={325}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1127/ee0a68023af4d3b4eb2d4e65b6ca5983eb07f6f4b460d606fbb287f00c0b12a5-650x0/medical-kit-and-bandaid-509398-488-1-10-650x325.png.webp"
              srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1127/ee0a68023af4d3b4eb2d4e65b6ca5983eb07f6f4b460d606fbb287f00c0b12a5-650x0/medical-kit-and-bandaid-509398-488-1-10-650x325.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1127/ee0a68023af4d3b4eb2d4e65b6ca5983eb07f6f4b460d606fbb287f00c0b12a5-650x0/medical-kit-and-bandaid-509398-488-1-10-1300x650.png.webp 2x"
              alt="что такое пролежни"
            />
          </picture>
          <h2 className="h2" id="kak-obrabatyvat-prolezhni">Как обрабатывать пролежни</h2>
          <div className="list-base">
            <p>Обработка пролежней, как правило, включает несколько этапов:</p>
            <ul>
              <li>Очищение</li>
              <li>Обеззараживание</li>
              <li>Наложение повязки</li>
            </ul>
          </div>
          <h3 className="h3" id="ochishchenie">Очищение</h3>
          <p>
            Обязательное условие успешного заживления пролежня — это удаление омертвевших тканей, за исключением сухой неинфицированной корочки (струпа). Влажная омертвевшая (некротическая) ткань инфицируется, усиливая воспалительный процесс, который осложняет заживление раны
            <sup>
              <a href="#spisok-literatury">3</a>
            </sup>
            . Чтобы ускорить заживление пролежня, рекомендуется очищать не только область повреждения, но и кожу вокруг нее при каждой смене повязки.
          </p>
          <h3 className="h3" id="obezzarazhivanie-povrezhdennogo-uchastka">Обеззараживание поврежденного участка</h3>
          <p>
            После очищения пролежня необходимо его обеззаразить с помощью антисептических средств. При этом не рекомендуется использовать марганцовку, спиртовые растворы йода и зеленки, перекись водорода, поскольку эти препараты пересушивают поврежденную поверхность и могут повредить молодую соединительную ткань (грануляционную), которая в дальнейшем заполнит рану. Следовательно, для очищения пролежня предпочтительнее применять специальные средства, например
            <a href="/encyclopedia/povidon-jod/" title="29. Повидон йод">повидон-йода</a>
            (Бетадин<sup>®</sup>), который обладает широкой противомикробной активностью. Важно отметить, что он не вызывает дискомфорт — не щиплет и не жжет кожу, не препятствует образованию новой ткани.
          </p>
          <h3 className="h3" id="nalozhenie-povyazkinalozhenie-povyazki">Наложение повязки</h3>
          <p>
            Последним этапом в обработке пролежней является закрытие раны. Для этого на поверхность пролежня или непосредственно на повязку наносят специальные мази или кремы, обладающие противомикробными и регенерирующими действиями.
          </p>
          <div className="iframe">
            <div className="bg_default bg_green" />
            <div className="h3 h3_green iframe-title">Как правильно обрабатывать пролежни, смотрите в коротком видео:</div>
            <div className="iframe-container">
              <iframe
                className="lazyloaded"
                data-src="https://rutube.ru/play/embed/fa8f8cff35b68d5c8f024cee12b45743/?p=PkU2rTUw0f2w7kXkBCs9vA"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="iframe_desc">Из видео вы узнаете про нюансы, зная которые можно избежать инфекционных осложнений и ускорить заживление повреждённых тканей.</div>
          </div>
          <h2 className="h2" id="mazi-i-kremy-dlya-obrabotki-prolezhney">Виды мазей и кремов для обработки пролежней</h2>
          <p>Для профилактики нежелательных явлений рекомендуется проводить ежедневную обработку раневых поверхностей с помощью специальных мазей и кремов.</p>
          <p>
            <br />
            <strong>В зависимости от целей лечения мази бывают:</strong>
          </p>
          <div className="big">
            <div className="line">
              <div>
                <p>
                  <strong>Очищающие:</strong>
                </p>
                <p>Ферментные мази, очищающие рану от омертвевших тканей (например, мазь с коллагеназой).</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Обеззараживающие:</strong>
                </p>
                <p>Средства с содержанием йода, ионов серебра, антибиотиков (повидон-йод, бацитрацин, мупироцин, сульфадиазин серебра).</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Восстанавливающие:</strong>
                </p>
                <p>Мази, стимулирующие активацию обменных процессов в тканях и образование волокон коллагена (декспантенол).</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Противовоспалительные:</strong>
                </p>
                <p>Снижают воспалительные процессы в тканях, подавляют чрезмерно высокую активность иммунной системы (гидрокортизона ацетат).</p>
              </div>
            </div>
          </div>
          <p>Снижают воспалительные процессы в тканях, подавляют чрезмерно высокую активность иммунной системы (гидрокортизона ацетат).</p>
          <div className="green">
            <p>
              <strong>Важно!</strong>
            </p>
            <p>Обязательно перед применением любой мази необходимо проконсультироваться с лечащим врачом! Каждый препарат имеет собственную специфику применения и дозирования, которые должен определять специалист, исходя из индивидуальных особенностей здоровья каждого пациента.</p>
          </div>
          <h3 className="h3" id="maz-na-osnove-povidon-yoda">Мазь на основе повидон-йода</h3>
          <div className="product-block">
            <div className="banner-product-img">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bec2f26cdcf5c0bdc3093eb38b75d41a081dfe6a4f0bb975c2bedca93889e813-315x310/banner-betadin-maz-mobile-315x226.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bec2f26cdcf5c0bdc3093eb38b75d41a081dfe6a4f0bb975c2bedca93889e813-315x310/banner-betadin-maz-mobile-630x451.webp 2x"
                  type="image/webp"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/bec2f26cdcf5c0bdc3093eb38b75d41a081dfe6a4f0bb975c2bedca93889e813-315x310/banner-betadin-maz-mobile-315x226.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/bec2f26cdcf5c0bdc3093eb38b75d41a081dfe6a4f0bb975c2bedca93889e813-315x310/banner-betadin-maz-mobile-630x451.jpg.webp 2x"
                />
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-927x916.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-1853x1832.webp 2x"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-927x916.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-1853x1832.jpg.webp 2x"
                  width={927}
                  height={916}
                  src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/bc79078cd28da7516ab801b9d57cca08a98ff45be44bf0baabdecbf971307270-928x916/banner-betadin-maz-927x916.jpg.webp"
                  alt="Бетадин"
                />
              </picture>
            </div>
            <p>
              Мазь Бетадин<sup>®</sup> на основе
              <a href="/encyclopedia/povidon-jod/" data-type="page" data-id="271">повидон-йода</a> представляет собой особый комплекс
              <a href="/encyclopedia/jod/" data-type="page" data-id="306">йода</a> и повидона.
            </p>
            <p>
              Благодаря антисептическим свойствам Мазь Бетадин<sup>®</sup> используется, в частности для дезинфекции ран и лечения пролежней под повязкой. Наносят препарат тонким слоем на поврежденный участок с захватом 1 см здоровой кожи 1 раз в день.
            </p>
            <p className="buttons">
              <a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-maz-instruktsiya/">Инструкция</a>
            </p>
          </div>
          <h3 className="h3" id="maz-s-kollagenazoy">Мазь с коллагеназой</h3>
          <p>Коллагеназа – это фермент, который разрушает коллаген в омертвевших тканях и тем самым способствует очищению пролежня от гноя, старых и омертвевших частичек кожи. Мазь с коллагеназой также предупреждает образование патологических рубцов и шрамов, разглаживает неровности кожи, огрубелости.
          </p>
          <p>Используют мазь 1 раз в день. Длительность применения мази определяет врач, исходя из состояния пролежня.</p>
          <h3 className="h3" id="maz-s-bacitracinom-i-neomicinom">Мазь с бацитрацином и неомицином</h3>
          <p>Бацитрацин и неомицин – комбинация антибактериальных препаратов, как подавляющих размножение бактерий, так и вызывающих гибель вредоносных микроорганизмов.</p>
          <p>Используется данная мазь для лечения и профилактики инфекционно-воспалительных заболеваний при незначительных порезах, царапинах и ожогах.</p>
          <p>Препарат наносится на поврежденный участок 2-3 раза в день. Продолжительность использования – не более 7 дней.</p>
          <h3 className="h3" id="maz-na-osnove-dekspantenola">Мазь на основе декспантенола</h3>
          <p>Данная мазь активизирует восстановление поврежденной ткани, стимулируя увеличение количества клеток, производящих компоненты, необходимые для упругости и эластичности кожи. Также мазь с декспантенолом (например, Новатенол) нормализует клеточный метаболизм, ускоряет деление клеток и увеличивает прочность коллагеновых волокон.</p>
          <p>Частота применения зависит от показаний и определяется лечащим врачом.</p>
          <h3 className="h3" id="maz-na-osnove-gidrokortizona-acetata">Мазь на основе гидрокортизона ацетата</h3>
          <p>Данная мазь относится к кортикостероидным препаратам. Обладает противовоспалительным и иммуносупрессивным действием (подавляет нежелательные иммунные реакции).</p>
          <p>Наносят мазь 2-3 раза в сутки в течение 6-14 дней.</p>
          <h2 className="h2" id="kak-vybrat-maz-ot-prolezhney">Выбор мази в зависимости от стадии пролежней</h2>
          <p>Выбор мази зависит от стадии развития пролежня, наличия или отсутствия осложнений:</p>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1128/5533d1de55627744f3d8c833e067348ca5ecb52fee1709b5da6efb1021b85068-650x0/medical-kit-and-bandaid-509398-488-1-11-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1128/5533d1de55627744f3d8c833e067348ca5ecb52fee1709b5da6efb1021b85068-650x0/medical-kit-and-bandaid-509398-488-1-11-1300x300.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={150}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1128/5533d1de55627744f3d8c833e067348ca5ecb52fee1709b5da6efb1021b85068-650x0/medical-kit-and-bandaid-509398-488-1-11-650x150.png.webp"
              srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1128/5533d1de55627744f3d8c833e067348ca5ecb52fee1709b5da6efb1021b85068-650x0/medical-kit-and-bandaid-509398-488-1-11-650x150.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1128/5533d1de55627744f3d8c833e067348ca5ecb52fee1709b5da6efb1021b85068-650x0/medical-kit-and-bandaid-509398-488-1-11-1300x300.png.webp 2x"
              alt="стадии развития пролежня"
            />
          </picture>
          <div className="list-base">
            <ul>
              <li>
                <strong>1 стадия</strong> – на этом этапе кожные покровы не нарушены, а имеется лишь покраснение кожи. С целью предотвращения дальнейшего воздействия повреждающих факторов необходимо переворачивать пациента в кровати каждые 2 часа или использовать специальные средства для уменьшения локального давления на ткани. Следует соблюдать простые гигиенические правила ухода за лежачими больными, следить за чистотой и состоянием их кожи. Можно ограничиться очищением покрасневшей кожи с использованием, например физраствора, камфорного спирта.
              </li>
              <li>
                <strong>2 стадия</strong> – целями этого этапа контроля за пролежнем являются заживление поверхностной раны и профилактика инфицирования. После промывания необходимо использовать мази с противомикробным и восстанавливающим действием (например, повидон-йод Бетадин<sup>®</sup>, декспантенол). Необходимо аккуратно закрывать рану повязкой.
              </li>
              <li>
                <strong>3 стадия</strong> – на данном этапе допустимо включить в лечение мази с ферментами (коллагеназа), которые будут способствовать очищению раны от омертвевших тканей и гноя. Также важно использовать противомикробные и противовоспалительные мази (повидон-йод Бетадин<sup>®</sup>, гидрокортизон ацетат). Нанесение этих средств позволит сократить сроки заживления и снизить риски осложнений.
              </li>
              <li>
                <strong>4 стадия</strong> – в связи с разрушением всех слоев кожи и омертвлением подлежащих тканей необходимо хирургическое очищение раны с последующей дермопластикой. Дополнительно к препаратам, применяемым на 3 стадии, к лечению присоединяются физиотерапевтические процедуры: обработка пролежня ультразвуком или ультравысокочастотным электромагнитным полем, фонофорез в комбинации с антисептиками и электрофорез с применением антибиотиков.
              </li>
            </ul>
          </div>
          <p>Поскольку одним из основных препятствий для заживления раны является инфекция, то для лечения пролежней с признаками инфицирования акцент делают на местных противомикробных средствах.</p>
          <div className="green">
            <p>Пролежни – серьезная травма кожи, осложнения которой могут привести к сепсису (заражению крови), что нередко заканчивается летальным исходом, поэтому <strong>лечение необходимо проводить под строгим контролем врача.</strong></p>
          </div>
          <div className="exlude-turbo">
            <picture className="banner-betadin banner-quastion">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={542}
                width={558}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg.webp"
                srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.jpg.webp 2x"
                alt="Декоративные элементы"
              />
            </picture>
          </div>
          <h2 className="h2" id="otvety-na-voprosy">Ответы на вопросы</h2>
          <h3 className="h3" id="kak-izbezhat-vozniknoveniya-prolezhney">Как избежать возникновения пролежней?</h3>
          <p>Чтобы предотвратить возникновение пролежня, рекомендуется менять положение пациента каждые 2-4 часа. Чтобы уменьшить давление на наиболее уязвимые у данного пациента области, используют подушки и т.п. Необходимо наблюдать за состоянием кожи и интенсивно за ней ухаживать.</p>
          <h3 className="h3" id="kakie-priznaki-prolezhnya">Какие признаки пролежня?</h3>
          <p>Признаком пролежня может быть как локальное покраснение, так и возникновение раны различной глубины, также возможно появление корки или пузыря.</p>
          <h3 className="h3" id="mozhno-li-lechit-prolezhni-v-domashnih-usloviyah">Можно ли лечить пролежни в домашних условиях?</h3>
          <p>Все зависит от стадии пролежня. Например, лечение в домашних условиях возможно для незначительных повреждений, тогда как при пролежнях 3-4 стадии необходима госпитализация в медицинское учреждение. В любом случае при возникновении пролежня лечение должно осуществляться под контролем врача.</p>
          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">Красковский Федор Янович</p>
              <div className="autor-subtitle" />
              <p className="autor-footer">Автор статьи</p>
            </div>
            <picture>
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-470x406.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={203}
                width={235}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.png.webp"
                srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-470x406.png.webp 2x"
                alt=""
              />
            </picture>
          </div>
          <div className="h2 h2-read-more" id="chitat-po-teme">Читать по теме</div>
          <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
            <div className="swiper-wrapper" style={{ transform: 'translate3d(-284.078px, 0px, 0px)', transitionDuration: '0ms' }}>
              <div className="swiper-slide swiper-slide-prev" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/prolezhni-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/prolezhni-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      height={166}
                      width={246}
                      src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/prolezhni-prevyu-246x166.png.webp"
                      alt="пролежни-превью"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Пролежни</strong>
                  </p>
                  <p>Пролежни образуются в результате длительного давления на участок ткани. Как лечат такие повреждения?</p>
                  <p className="slide-more">
                    <a href="/encyclopedia/prolezhni/"> Подробнее </a>
                  </p>
                </div>
              </div>
              <div className="swiper-slide swiper-slide-active" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      height={166}
                      width={246}
                      src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-246x166.png.webp"
                      alt="Повидон-йод - превью"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Повидон йод</strong>
                  </p>
                  <p>Характеристики и свойства повидон-йода. Для чего применяется повидон-йод? Инструкция по применению раствора, мази, свечей Бетадин<sup>®</sup> с повидон-йодом.</p>
                  <p className="slide-more"> <a href="/encyclopedia/povidon-jod/"> Подробнее </a> </p>
                </div>
              </div>
              <div className="swiper-slide swiper-slide-next" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1933/826cbef7c32f1943a154e80b6f786c4495636df7ba3ef058df0fcc5103e009ac-0x166/rastvor-joda-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1933/826cbef7c32f1943a154e80b6f786c4495636df7ba3ef058df0fcc5103e009ac-0x166/rastvor-joda-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      height={166}
                      width={246}
                      src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1933/826cbef7c32f1943a154e80b6f786c4495636df7ba3ef058df0fcc5103e009ac-0x166/rastvor-joda-prevyu-246x166.png.webp"
                      alt="Раствор йода - превью"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Раствор йода</strong>
                  </p>
                  <p>Какие бывают йодные растворы, и для чего их применяют?</p>
                  <p className="slide-more"> <a href="/encyclopedia/rastvor-joda/"> Подробнее </a> </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="h2" id="spisok-literatury">Список литературы</h2>
          <ol className="literature">
            <li id="literature-0">McInnes E, Dumville JC, Jammali-Blasi A, Bell-Syer SE. Support surfaces for treating pressure ulcers. Cochrane Database Syst Rev. 2011;(12):CD009490. Published 2011 Dec 7. doi:10.1002/14651858.CD009490.</li>
            <li id="literature-1">Zhao R, Liang H, Clarke E, Jackson C, Xue M. Inflammation in Chronic Wounds. Int J Mol Sci. 2016;17(12):2085. Published 2016 Dec 11. doi:10.3390/ijms17122085.</li>
            <li id="literature-2">Bosanquet DC, Wright AM, White RD, Williams IM. A review of the surgical management of heel pressure ulcers in the 21st century. Int Wound J. 2016;13(1):9-16. doi:10.1111/iwj.12416.</li>
            <li id="literature-3">Elliott D, Kufera JA, Myers RA. The microbiology of necrotizing soft tissue infections. Am J Surg. 2000;179(5):361-366. doi:10.1016/s0002-9610(00)00360-3.</li>
            <li id="literature-4">O’Neill DK, Tsui SM, Ayello EA, et al. Anesthesia protocol for heel pressure ulcer debridement. Adv Skin Wound Care. 2012;25(5):209-219. doi:10.1097/01.ASW.0000414704.48514.fb.</li>
            <li id="literature-5">Schiffman J, Golinko MS, Yan A, Flattau A, Tomic-Canic M, Brem H. Operative debridement of pressure ulcers. World J Surg. 2009;33(7):1396-1402. doi:10.1007/s00268-009-0024-4</li>
            <li id="literature-6">Westby MJ, Dumville JC, Soares MO, Stubbs N, Norman G. Dressings and topical agents for treating pressure ulcers. Cochrane Database Syst Rev. 2017;6(6):CD011947. Published 2017 Jun 22. doi:10.1002/14651858.CD011947.pub2.</li>
            <li id="literature-7">Nguyen R, Khanna NR, Safadi AO, Sun Y. Bacitracin Topical. In: StatPearls. Treasure Island (FL): StatPearls Publishing; November 25, 2021.</li>
            <li id="literature-8">Sauerbrei A. Bactericidal and virucidal activity of ethanol and povidone-iodine. Microbiologyopen. 2020;9(9):e1097. doi:10.1002/mbo3.1097</li>
            <li id="literature-9">Durani P, Leaper D. Povidone-iodine: use in hand disinfection, skin preparation and antiseptic irrigation. Int Wound J. 2008;5(3):376-387. doi:10.1111/j.1742-481X.2007.00405.x.</li>
            <li id="literature-10">Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa MA. Povidone iodine in wound healing: A review of current concepts and practices. Int J Surg. 2017;44:260-268. doi:10.1016/j.ijsu.2017.06.073.</li>
            <li id="literature-11">Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa MA. Povidone iodine in wound healing: A review of current concepts and practices. Int J Surg. 2017;44:260-268. doi:10.1016/j.ijsu.2017.06.073.</li>
            <li id="literature-12">Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa MA. Povidone iodine in wound healing: A review of current concepts and practices. Int J Surg. 2017;44:260-268. doi:10.1016/j.ijsu.2017.06.073.</li>
            <li id="literature-13">Yildirim A, Metzler P, Lanzer M, Lübbers HT, Yildirim V. Solcoseryl Dental-Adhäsivpaste — Wirkmechanismus und Risiken. Swiss Dent J. 2015;125(5):612-613.</li>
            <li id="literature-14">Дибиров М.Д. Пролежни: профилактика и лечение// Медицинский совет № 3-4 2013</li>
            <li id="literature-15">Инструкция по медицинскому применению Коллагеназа, РЛС.</li>
            <li id="literature-16">Инструкция по медицинскому применению Банеоцин</li>
            <li id="literature-17">Инструкция по применению ЛП Бетадин<sup>®</sup> (раствор, мазь). РУ П№015282/03, РУ П№015282/02.</li>
            <li id="literature-18">Ахтямова Н.Е. Лечение пролежней у малоподвижных пациентов // РМЖ. 2015. № 26. С. 1549-1552.</li>
            <li id="literature-19">Инструкция по медицинскому применению Мупироцин, РЛС.</li>
            <li id="literature-20">Инструкция по медицинскому применению Сульфаргин, мазь, РЛС.</li>
            <li id="literature-21">Инструкция по медицинскому применению Гидрокортизона ацета, РЛС.</li>
            <li id="literature-22">Инструкция по медицинскому применению Гидрокортизона ацета, РЛС.</li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default ObrabotkaProlezhnej;
