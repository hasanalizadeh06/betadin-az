"use client";
import React, { useEffect, useRef } from 'react';

const RanaIliTsarapinaNaRuke: React.FC = () => {
  const triggeredRef = useRef<Record<number, boolean>>({ 25: false, 50: false, 75: false, 100: false });
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scrollGoals: { [k: number]: () => void } = {
      25: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг25'),
      50: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг50'),
      75: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг75'),
      100: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг100'),
    };
    const checkScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor(((scrollTop + winHeight) / docHeight) * 100);
      for (const percent of [25, 50, 75, 100]) {
        if (scrollPercent >= percent && !triggeredRef.current[percent]) {
          triggeredRef.current[percent] = true;
          scrollGoals[percent]?.();
          // eslint-disable-next-line no-console
          console.log(percent);
        }
      }
      if ((Object.values(triggeredRef.current) as boolean[]).every((v) => v)) {
        window.removeEventListener('scroll', checkScroll);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <main>
      <article>
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
                  <a property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/">
                    <span property="name">Рана или царапина на руке</span>
                  </a>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Рана или царапина на руке</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Рана или царапина на руке: первая помощь и обработка</h1>
                  <picture>
                    <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x" type="image/webp" />
                    <img decoding="async" height={112} width={115} src="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png 1x,https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.png 2x" alt="картинка у заголовка" />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Что такое рана на руке</h2>
                <div className="page-header-body">
                  <p>
                    Рана, царапина на руке – это нарушение целостности кожного покрова кисти, запястья, предплечья или плеча, которое может сопровождаться
                    повреждениями сосудов или нервов.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#lechenie-ran-i-carapin-na-ruke">Алгоритм лечение ран и царапин на руках</a>
                  </li>
                  <li>
                    <a href="#obrabotka-gnoynoy-rany-ili-carapiny">Обработка гнойной раны или царапины</a>
                  </li>
                  <li>
                    <a href="#chastaya-rana-eto-rana-na-palce">Рана на пальце</a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-730x615.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-1460x1230.webp 2x" type="image/webp" />
                    <img fetchPriority="high" decoding="async" height={615} width={730} src="https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-730x615.jpg" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-730x615.jpg 1x,https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-1460x1230.jpg 2x" alt="Рана или царапина на руке" />
                  </picture>
                </div>
              </div>
            </div>
            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#simptomy-ran-i-carapin-na-ruke">Симптомы ран и царапин на руке</a>
                </li>
                <li>
                  <a href="#klassifikaciya-ran-i-carapin-po-stepeni-inficirovannosti-nalichiyu-patogennyh-mikrobov">Классификация ран и царапин по степени инфицированности (наличию патогенных микробов)</a>
                </li>
                <li>
                  <a href="#priznaki-nagnoeniya">Признаки нагноения</a>
                </li>
                <li>
                  <a href="#klassifikaciya-ran-i-carapin-po-glubine">Классификация ран и царапин по глубине</a>
                </li>
                <li>
                  <a href="#chastaya-rana-eto-rana-na-palce">Частая рана — это рана на пальце</a>
                </li>
                <li>
                  <a href="#rana-nogtevoy-plastiny">Рана ногтевой пластины</a>
                </li>
                <li>
                  <a href="#rana-na-kisti">Рана на кисти</a>
                </li>
                <li>
                  <a href="#gnoynaya-rana-ili-carapina-na-ruke">Гнойная рана или царапина на руке</a>
                </li>
                <li>
                  <a href="#obrabotka-gnoynoy-rany-ili-carapiny">Обработка гнойной раны или царапины</a>
                </li>
                <li>
                  <a href="#lechenie-ran-i-carapin-na-ruke">Лечение ран и царапин на руке</a>
                </li>
                <li>
                  <a href="#sredstva-dlya-obrabotki-rany">Средства для обработки раны</a>
                </li>
                <li>
                  <a href="#obrabotka-rany-rastvorom-betadin">Обработка раны раствором Бетадин®</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Список литературы</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross"> Содержание</div>
            </nav>
          </div>
        </div>
        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#simptomy-ran-i-carapin-na-ruke">Симптомы ран и царапин на руке</a>
            </li>
            <li>
              <a href="#klassifikaciya-ran-i-carapin-po-stepeni-inficirovannosti-nalichiyu-patogennyh-mikrobov">Классификация ран и царапин по степени инфицированности</a>
            </li>
            <li>
              <a href="#priznaki-nagnoeniya">Признаки нагноения</a>
            </li>
            <li>
              <a href="#klassifikaciya-ran-i-carapin-po-glubine">Классификация ран и царапин по глубине</a>
            </li>
            <li>
              <a href="#chastaya-rana-eto-rana-na-palce">Частая рана — это рана на пальце</a>
            </li>
            <li>
              <a href="#rana-nogtevoy-plastiny">Рана ногтевой пластины</a>
            </li>
            <li>
              <a href="#rana-na-kisti">Рана на кисти</a>
            </li>
            <li>
              <a href="#gnoynaya-rana-ili-carapina-na-ruke">Гнойная рана или царапина на руке</a>
            </li>
            <li>
              <a href="#obrabotka-gnoynoy-rany-ili-carapiny">Обработка гнойной раны или царапины</a>
            </li>
            <li>
              <a href="#lechenie-ran-i-carapin-na-ruke">Лечение ран и царапин на руке</a>
            </li>
            <li>
              <a href="#sredstva-dlya-obrabotki-rany">Средства для обработки раны</a>
            </li>
            <li>
              <a href="#obrabotka-rany-rastvorom-betadin">Обработка раны раствором Бетадин®</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="#spisok-literatury">Список литературы</a>
            </li>
          </ul>
        </nav>
        <div className="home-container">
          <div className="new-disclaimer"> Информация в статье не&nbsp;заменяет консультацию врача</div>
        </div>
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p><strong>Раны бывают:</strong></p>
            <div className="two-column">
              <div className="column">
                <p><strong>Легкие</strong></p>
                <p>Обычно они неопасные, но очень важно их очистить от загрязнений.</p>
              </div>
              <div className="column">
                <p>Серьезные и инфицированные</p>
                <p>Могут потребовать оказания первой медицинской помощи с последующим визитом к врачу.</p>
              </div>
            </div>
            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x" type="image/webp" />
                <img decoding="async" height={505} width={503} src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg" alt="Декоративные элементы" />
              </picture>
            </div>
            <p>Большинство царапин и ссадин незначительны, и лечение можно проводить в домашних условиях.</p>
            <p><strong>Для этого необходимо:</strong></p>
            <div className="big">
              <div className="line"><p>Остановить кровотечение</p></div>
              <div className="line"><p>Тщательно очистить рану</p></div>
              <div className="line"><p>Наложить пластырь или повязку</p></div>
            </div>
            <picture className="img-normal">
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1077/d62b9581c1fab02149c911cb6f8b85b60e21ff79feb0a695a992127c286b0aa6-650x0/group-552-650x151.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/1077/d62b9581c1fab02149c911cb6f8b85b60e21ff79feb0a695a992127c286b0aa6-650x0/group-552-1300x301.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" height={151} width={650} src="https://betadin.ru/wp-content/uploads/imagesv3/1077/d62b9581c1fab02149c911cb6f8b85b60e21ff79feb0a695a992127c286b0aa6-650x0/group-552-650x151.png" alt="лечение ран в дом условиях" />
            </picture>
            <h2 className="h2" id="simptomy-ran-i-carapin-na-ruke">Симптомы ран и царапин на руке</h2>
            <div className="list-base"><ul><li><strong>Нарушение целостности кожи</strong> – собственно сама рана.</li><li><strong>Появление крови</strong>. Может проявляться в виде капель или в виде кровотечения.</li><li><strong>Обнажение нерва, кости после физического воздействия (травмы)</strong>. Данный факт свидетельствует об осложненном течении раневого процесса, поэтому следует незамедлительно обратиться к врачу.</li><li><strong>Возникновение болевых ощущений</strong>. Боль, как правило, пульсирующего характера.</li><li><strong>Появление отека</strong>. Может затруднять подвижность конечности.</li></ul></div>
            <div className="iframe"><div className="bg_default bg_green" /><div className="h3 h3_green iframe-title">Как обработать рану на руке, смотрите в коротком видео:</div><div className="iframe-container"><iframe src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Видео: как обработать рану" /></div><div className="iframe_desc">В видео рассказывается, как правильно обрабатывать раны на руке, чтобы минимизировать риск возникновения неприятных последствий.</div></div>
            <h2 className="h2" id="klassifikaciya-ran-i-carapin-po-stepeni-inficirovannosti-nalichiyu-patogennyh-mikrobov">Классификация ран и царапин по степени инфицированности (наличию патогенных микробов)</h2>
            <p><strong>Неинфицированные</strong> – только операционные раны.</p>
            <div className="two-column"><div className="column"><p><strong>Раны с бактериальным загрязнением (контаминированные)</strong><sup><a href="#spisok-literatury">1,2,3</a></sup></p><p>Но без признаков воспаления (острая боль, отек, изменение температуры кожи в месте повреждения), полученные в результате ранения нестерильными предметами (столовый нож, палка, ветка, после укуса).</p></div><div className="column"><p><strong>Гнойные (инфицированные) раны</strong><sup><a href="#spisok-literatury">1,2,3</a></sup></p><p>Для которых характерно наличие «запущенного», осложненного воспалительного процесса, при котором отмечается наличие вредоносных микроорганизмов. Такие раны сопровождаются развитием некроза – омертвлением клеток и тканей раны, появлением гнойного отделяемого со своеобразным запахом.</p></div></div>
            <h2 className="h2" id="priznaki-nagnoeniya">Признаки нагноения</h2>
            <div className="list-base"><ul><li>Отек</li><li>Покраснение</li><li>Увеличение температуры кожи вокруг раны</li></ul></div>
            <h2 className="h2" id="klassifikaciya-ran-i-carapin-po-glubine">Классификация ран и царапин по глубине</h2>
            <h3 className="h3" id="poverhnostnye-carapiny-i-rany">Поверхностные царапины и раны</h3>
            <p>Поверхностные раны или царапины обычно приводят лишь к повреждению поверхностных слоев кожи и при своевременной обработке антисептиками, например <a href="/encyclopedia/povidon-jod/">повидон-йодом</a>, обычно не несут какой-то серьезной опасности.</p>
            <h3 className="h3" id="glubokie-carapiny-i-rany">Глубокие царапины и раны</h3>
            <p>При глубоких ранах есть риск повреждения сосуда, нерва или связки. Если при повреждении кожных покровов на руке кроме болезненных ощущений появилось изменение чувствительности, то это признаки повреждения нерва.</p>
            <p>Если чувствительность сохранена, но нарушены движения пальца или кисти, то есть вероятность повреждения сухожилия.</p>
            <p>В таких случаях необходима оперативная консультация врача-хирурга, который постарается восстановить целостность поврежденного участка.</p>
            <h2 className="h2" id="chastaya-rana-eto-rana-na-palce">Частая рана — это рана на пальце</h2>
            <p>Рана на пальце может доставлять определенный дискомфорт, особенно если находится в кожной складке. За раной в этом месте необходимо пристально наблюдать, так как складки создают условия для размножения бактерий</p>
            <div className="list-base"><p><strong>Если рана возникла на пальце, то необходимо</strong></p><ul><li>Регулярно обрабатывать поврежденный участок кожи антисептическими растворами или мазями на их основе, например с повидон-йодом.</li><li>Часто производить замену пластыря.</li></ul></div>
            <p>Царапина на пальце может заживать дольше вследствие активной работы руками и из-за воздействия факторов внешней среды. Следует набраться терпения, а лучше ненадолго ограничить движения, чтобы дождаться заживления раны.</p>
            <h2 className="h2" id="rana-nogtevoy-plastiny">Рана ногтевой пластины</h2>
            <p>Еще одной важной особенностью раны или царапины на пальце является возможность повреждения ногтевой пластины.</p>
            <div className="list-base"><p><strong>Ноготь</strong> – важный компонент пальца. Он обладает рядом функций:</p><ul><li>Защищает палец</li><li>Позволяет выполнять точные движения пальцами</li><li>Повышает чувствительность кончика пальца</li></ul></div>
            <h2 className="h2" id="rana-na-kisti">Рана на кисти</h2>
            <p>Больше всего травмам и ранениям подвержена кисть, так как является самой подвижной частью тела.</p>
            <p>Царапины и раны кисти возникают при падении, физической нагрузке, контакте с животным.</p>
            <p>Особенность ссадин и царапин на кисти заключается в том, что при нагноении воспалительный процесс может распространиться на плечо и предплечье. В самых тяжелых ситуациях это может привести к ампутации руки. Поэтому на раны кисти следует обращать особое внимание и регулярно обрабатывать повреждение растворами антисептиков.</p>
            <h2 className="h2" id="gnoynaya-rana-ili-carapina-na-ruke">Гнойная рана или царапина на руке</h2>
            <div className="list-base"><p>Нагноение раны является осложнением. В дальнейшем могут развиваться<a href="#spisok-literatury"><sup>4,5</sup></a>:</p><ul><li>Абсцессы</li><li>Флегмоны</li></ul></div>
            <p>Такие осложнения возникают из-за активности вредоносных бактерий вследствие загрязнения раны. Ухудшать состояние может присутствие в ране инородных тел, тканевого некроза (гибель участка ткани), нарушение кровоснабжения в области повреждения, неправильная <a href="/encyclopedia/obrabotka-ran/">обработка раны</a>, наличие сопутствующих заболеваний, например, сахарный диабет. <a href="/encyclopedia/rany-s-infekciej/">Инфекционный процесс</a> развивается, как правило, на 3-5 сутки после появления раны или царапины.</p>
            <div className="block-with-image"><div className="block-with-image__green"><p><strong>Обработка ран</strong></p><p>Как правильно обрабатывать раны, чтобы избежать осложнений на поврежденных участках кожи.</p><a href="/encyclopedia/obrabotka-ran/" className="btn btn-green" target="_blank" rel="noreferrer">Подробнее</a></div>
            <picture>
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-310x235/obrabotka-ran-prevyu-310x210.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-310x235/obrabotka-ran-prevyu-620x420.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" height={210} width={310} src="https://betadin.ru/wp-content/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-310x235/obrabotka-ran-prevyu-310x210.png" alt="Обработка ран - превью" />
            </picture>
            </div>
            <h2 className="h2" id="obrabotka-gnoynoy-rany-ili-carapiny">Обработка гнойной раны или царапины</h2>
            <div className="list-base"><p>Обработка гнойной раны должна проводиться медицинскими работниками и, как правило, включает в себя следующие этапы:</p><ul><li>Вскрытие раны</li><li>Удаление гноя</li><li>Тщательная обработка антисептиками</li><li>Дренирование и тампонирование материалами с сорбционными свойствами</li></ul></div>
            <picture className="img-normal"><source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3456/ccc7baffdfd9845a17a2be328343c970e04f1370c90e5205b8a22cf97f97067b-650x0/gnoy-ranaat4x-1-650x325.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/3456/ccc7baffdfd9845a17a2be328343c970e04f1370c90e5205b8a22cf97f97067b-650x0/gnoy-ranaat4x-1-1300x650.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/uploads/imagesv3/3456/ccc7baffdfd9845a17a2be328343c970e04f1370c90e5205b8a22cf97f97067b-650x0/gnoy-ranaat4x-1-650x325.png" alt="обработка врачом гнойной раны на руке" /></picture>
            <p>После очищения раны либо накладывают вторичные швы, либо стягивают края раны лейкопластырем.</p>
            <h2 className="h2" id="lechenie-ran-i-carapin-na-ruke">Лечение ран и царапин на руке</h2>
            <h3 className="h3" id="pervaya-pomoshch">Первая помощь</h3>
            <div className="big"><div className="line"><div><p><strong>Очистить рану</strong></p><p>Для этого необходимо:</p><ul><li>тщательно вымыть и высушить руки</li><li>промыть рану чистой водой или использовать стерильные салфетки</li><li>очистить кожу вокруг раны с помощью антисептического раствора, избегая попадания антисептика в саму рану</li></ul></div></div><div className="line"><div><p><strong>Остановить кровотечение</strong></p><p>Для этого можно надавить на поврежденный участок с помощью чистого и сухого впитывающего материала, например, бинта, полотенца или носового платка.</p></div></div>
            <div className="line"><div><p><strong>Наложить стерильную повязку или пластырь</strong></p><p>Повязку следует содержать в чистоте, чтобы не занести инфекцию. Менять ее следует так часто, как это необходимо. Можно использовать водонепроницаемые повязки, чтобы сохранить рану сухой во время купания и душа.</p><p><br />Повязку можно снять через несколько дней, как только рана затянется.</p></div></div>
            <div className="line"><div><p><strong>Принять обезболивающее, если это необходимо</strong></p><p>Если рана очень сильно болит в течение первых нескольких дней, можно принять безрецептурные обезболивающие, такие как парацетамол или ибупрофен.</p></div></div></div>
            <h2 className="h2" id="sredstva-dlya-obrabotki-rany">Средства для обработки раны</h2>
            <p>Для обработки ран можно использовать различные антисептики. Они могут быть как в форме растворов, так и в форме мазей.</p>
            <div className="list-base"><p><strong>К ним относятся:</strong></p><ul><li>Растворы на основе йода, в том числе <strong><span style={{color:'#0f780b'}}>Бетадин<sup>®</sup></span></strong></li><li>Перекись водорода – H<sub>2</sub>O<sub>2</sub></li><li>Бриллиантовая зелень</li><li>Марганцовка, калия перманганат – KMnO<sub>4</sub></li><li>Хлоргексидина биглюконат</li></ul></div>
            <h2 className="h2" id="obrabotka-rany-rastvorom-betadin">Обработка раны раствором Бетадин®</h2>
            <div className="product-block"><div className="banner-product-img"><picture><source media="(max-width: 767px)" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-315x252.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-630x503.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg 1x,https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-1853x1832.jpg 2x" width={927} height={916} src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg" alt="Бетадин" /></picture></div><p><a href="/encyclopedia/povidon-jod/" data-type="page" data-id="271">Повидон-йод</a> – это комплекс поливинилпирролидона (повидона) и <a href="/encyclopedia/jod/">йода</a>, разработанный в Швейцарии. Повидон способствует постепенному высвобождению йода. Это свойство позволяет йоду дольше действовать в месте нанесения и быстрее восстанавливать пораженную ткань<sup><a href="#spisok-literatury">6,7,8</a></sup>.</p>
            <p>Повидон-йод является основным действующим веществом в растворе <strong><span style={{color:'#0f780b'}}>Бетадин<sup>®</sup></span></strong>.</p>
            <p>Уникальность данного средства заключается в том, что раствор абсолютно не щиплет, и им можно обрабатывать рану целиком. Важно отметить, что <strong><span style={{color:'#0f780b'}}>Бетадин<sup>® </sup></span></strong>Раствор разрешено использовать для лечения ссадин и потертостей даже у младенцев, начиная с одного месяца. При соприкосновении с кожей раствор не сушит ее и не вызывает неприятных ощущений<sup><a href="#spisok-literatury">7</a></sup>.</p>
            <p><strong><span style={{color:'#0f780b'}}>Бетадин<sup>®</sup></span></strong> Раствор активен не только в отношении бактерий, но и способствует гибели грибков, спор, простейших микроорганизмов и вирусов.</p>
            <p>Содержащийся в составе раствора йод также стимулирует кровоток в области раны<sup><a href="#spisok-literatury">8</a></sup> или ссадины и ускоряет заживление<sup><a href="#spisok-literatury">6,8</a></sup>.</p>
            <p><strong><span style={{color:'#0f780b'}}>Бетадин<sup>®</sup></span></strong> легко смывается водой с кожи.</p>
            <p className="buttons"><a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-rastvor-instruktsiya/">Инструкция</a></p></div>
            <h3 className="h3" id="betadin-dlya-obrabotki-ran-i-carapin-">Бетадин® для обработки ран и царапин: </h3>
            <p>Можно применять как в неразбавленном виде, так и в разведенном виде<sup><a href="#spisok-literatury">7</a></sup>. Из 10% раствора следует сделать 1% раствор, то есть приготовить в разведении 1:10 (например, 1 мл <strong>Бетадин<sup>®</sup></strong> и 10 мл воды или физраствора)<sup><a href="#spisok-literatury">6</a></sup>. Также для разведения препарата можно использовать 0,9 % раствор натрия хлорида, раствор Рингера, или воду для инъекций.</p>
            <p>После разведения промакивающими движениями необходимо обработать рану раствором и закрыть ее стерильной повязкой.</p>
            <picture className="img-normal"><source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3322/1b5dc8ae5b3144b36af43da5d19cd6c32966aeee334956f988e18d68b941f363-650x0/istockphoto-1341663000-2048x2048-2-7-650x325.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/3322/1b5dc8ae5b3144b36af43da5d19cd6c32966aeee334956f988e18d68b941f363-650x0/istockphoto-1341663000-2048x2048-2-7-1300x650.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/uploads/imagesv3/3322/1b5dc8ae5b3144b36af43da5d19cd6c32966aeee334956f988e18d68b941f363-650x0/istockphoto-1341663000-2048x2048-2-7-650x325.png" alt="Обработка царапины от кота на руке раствором Бетадин" /></picture>
            <p>Марганцовка убивает бактерии, активна в отношении грибков и обладает ранозаживляющим свойством.</p>
            <h3 className="h3" id="obrabotka-rany-perekisyu-vodoroda">Обработка раны перекисью водорода</h3>
            <p>Перекись водорода подойдет для обработки загрязненных рваных ран и царапин. Перекись способна удалять загрязнение и бактерии механическим путем за счет образования пузырьков. Однако способствует раздражению и воспалению краёв раны, дальнейшему распаду пораженных клеток, что затрудняет заживление раны<sup><a href="#spisok-literatury">9,10</a></sup>.</p>
            <h3 className="h3" id="obrabotka-rany-yodom">Обработка раны йодом</h3>
            <p>Йод в виде 5% спиртового раствора оказывает подсушивающее действие, однако обладает неприятным жгучим эффектом.</p>
            <p>Для уменьшения неприятных ощущений следует обрабатывать только края раны и не затрагивать поврежденную область кожи.</p>
            <div className="exlude-turbo"><picture className="banner-betadin banner-quastion"><source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" height={542} width={558} src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg" alt="Декоративные элементы" /></picture></div>
            <h2 className="h2" id="chasto-zadavaemye-voprosy">Часто задаваемые вопросы</h2>
            <h3 className="h3" id="pochemu-ne-zazhivaet-rana-na-ruke">Почему не заживает рана на руке?</h3>
            <p>В среднем неглубокая рана заживает за 7-10 дней. Если заживление не происходит за это время, остается нарыв, появляется покраснение и происходит повышение температуры, то необходимо немедленно обратиться за медицинской помощью к специалисту.</p>
            <h3 className="h3" id="chem-lechit-porezy-na-rukah">Чем лечить порезы на руках?</h3>
            <p>Достаточно остановить кровотечение, тщательно очистить рану, обработать ее антисептиком и заклеить пластырем, можно наложить стерильную повязку.</p>
            <h3 className="h3" id="chem-mazat-ranu-chtoby-ona-bystree-zatyanulas">Чем мазать рану, чтобы она быстрее затянулась?</h3>
            <p>Растворы йода, а также <strong style={{color:'#0f780b'}}>Бетадин<sup>®</sup></strong> обладают ранозаживляющими свойствами<sup><a href="#spisok-literatury">11</a></sup>.</p>
            <p><strong style={{color:'#0f780b'}}>Бетадин<sup>®</sup></strong> в форме мази легко можно брать с собой на работу, отдых и пользоваться в любое удобное время для обработки ран.</p>
            <div className="autor"><div className="autor-left"><p className="autor-title">Красковский Федор Янович</p><div className="autor-subtitle" /><p className="autor-footer">Автор статьи</p></div><picture><source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-470x406.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" height={203} width={235} src="https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.png" alt="" /></picture></div>
            <div className="h2 h2-read-more" id="chitat-po-teme">Читать по теме</div>
            <div className="slider-normal"><div className="swiper-wrapper"><div className="swiper-slide"><div className="slide-image"><picture><source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-0x166/obrabotka-ran-prevyu-246x166.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-0x166/obrabotka-ran-prevyu-491x332.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-0x166/obrabotka-ran-prevyu-246x166.png" alt="Обработка ран - превью" /></picture></div><div className="slide-body"><p className="slide-title"><strong>Обработка ран</strong></p><p>Как правильно обрабатывать раны, чтобы избежать осложнений на поврежденных участках кожи.</p><p className="slide-more"><a href="/encyclopedia/obrabotka-ran/"> Подробнее </a></p></div></div></div></div>
            <h2 className="h2" id="spisok-literatury">Список литературы</h2>
            <ol className="literature">
              <li id="literature-0">Завражанов А. А., Гвоздев М. Ю., Крутова В. А. и др. Раны и раневой процесс// Учебно- методическое пособие для интернов, ординаторов и практических врачей// Краснодар 2016.</li>
              <li id="literature-1">Гостищев В. и др. Общая хирургия // ГЭОТАР-Медиа, Москва 2015.</li>
              <li id="literature-2">Минченко А. Раны. Лечение и профилактика осложнений//Учебное пособие – 2014.</li>
              <li id="literature-3">Горюнов С. В., Ромашов Д. В., Бутивщенко И. А. Гнойная хирургия: атлас // Москва БИНОМ. Лаборатория знаний, 2004.</li>
              <li id="literature-4">Hermans MH. wounds and ulcers: back to the old nomenclature . Wounds. 2010;22(11):289-293.</li>
              <li id="literature-5">Носенко О. М., Москаленко Т. Я., Рутинская А. В. Повидон-йод (Бетадин) в современной акушерско-гинекологической практике // Репродуктивная эндокринология.– 2018 – №. 44 – С. 43-48.</li>
              <li id="literature-6">Инструкция по медицинскому применению Бетадин — раствор. (РН: П№015282/03).</li>
              <li id="literature-7">Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa MA. Povidone iodine in wound healing: A review of current concepts and practices. Int J Surg. 2017;44:260-268. doi:10.1016/j.ijsu.2017.06.073.</li>
              <li id="literature-8">Мартынов А.И., Кокорин В.А., Внутренняя медицина, основанная на доказательствах// Практическая Медицина, Краков, Польша 2018.</li>
              <li id="literature-9">Трошин Н. Стоит ли так активно использовать 3% раствор перекиси водорода при хирургических вмешательствах? // «РМЖ» №25 от 15.12.2005.</li>
              <li id="literature-10">Борисов И. В. Повидон-йод – новые возможности знакомого препарата // Раны и раневые инфекции. 2021, 8 (3): 12-18.</li>
              <li id="literature-11">Инструкция по медицинскому применению Бетадин<sup>®</sup> мазь. (РН: П№015282/02).</li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
};

export default RanaIliTsarapinaNaRuke;
