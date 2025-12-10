"use client";
import React, { useEffect, useRef } from 'react';

const TroficheskieYazvyNog: React.FC = () => {
  const triggeredRef = useRef<Record<number, boolean>>({ 25: false, 50: false, 75: false, 100: false });
  // Scroll tracking (converted from inline script). Guarded for SSR and when ym is defined.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      // Goals — use numeric percentages
      const scrollGoals: { [percent: number]: () => void } = {
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
          if (scrollPercent >= percent && !triggeredRef.current[percent as number]) {
            triggeredRef.current[percent as number] = true;
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
    } catch (e) {
      // ignore interruption / errors to keep component safe
      // eslint-disable-next-line no-console
      console.warn('Scroll tracking init failed', e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <span property="name">Трофические язвы ног и нижних конечностей</span>
                  </a>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Трофические язвы ног и нижних конечностей</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Трофические язвы ног: лечение и уход</h1>
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <img
                      decoding="async"
                      height={112}
                      width={115}
                      src="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png"
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.png 2x"
                      alt="картинка у заголовка"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Определение трофической язвы</h2>
                <div className="page-header-body">
                  <p>
                    Трофические язвы ног – это медленно заживающий дефект кожи, возникающий вследствие нарушения кровообращения и
                    питания тканей в области возникшего поражения.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#prichiny-vozniknoveniya-troficheskih-yazv">Причины возникновения</a>
                  </li>
                  <li>
                    <a href="#diagnostika-troficheskih-yazv">Диагностика</a>
                  </li>
                  <li>
                    <a href="#lechenie-troficheskih-yazv">Лечение, препараты и мази</a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <img
                      fetchPriority="high"
                      decoding="async"
                      height={615}
                      width={730}
                      src="https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-730x615.jpg"
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-730x615.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-1460x1230.jpg 2x"
                      alt="Трофические язвы ног"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#simptomy-troficheskoy-yazvy">Симптомы трофической язвы</a>
                </li>
                <li>
                  <a href="#prichiny-vozniknoveniya-troficheskih-yazv">Причины возникновения трофических язв</a>
                </li>
                <li>
                  <a href="#diagnostika-troficheskih-yazv">Диагностика трофических язв</a>
                </li>
                <li>
                  <a href="#lechenie-troficheskih-yazv">Лечение трофических язв</a>
                </li>
                <li>
                  <a href="#profilaktika-troficheskih-yazv">Профилактика трофических язв</a>
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
              <a href="#simptomy-troficheskoy-yazvy">Симптомы трофической язвы</a>
            </li>
            <li>
              <a href="#prichiny-vozniknoveniya-troficheskih-yazv">Причины возникновения трофических язв</a>
            </li>
            <li>
              <a href="#diagnostika-troficheskih-yazv">Диагностика трофических язв</a>
            </li>
            <li>
              <a href="#lechenie-troficheskih-yazv">Лечение трофических язв</a>
            </li>
            <li>
              <a href="#profilaktika-troficheskih-yazv">Профилактика трофических язв</a>
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

        <div className="home-container">
          <div className="new-disclaimer"> Информация в статье не&nbsp;заменяет консультацию врача</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Термин «трофический» в переводе с греческого языка означает питание. А значит, данное заболевание связано с нарушением питания тканей.
            </p>
            <p>
              Трофические язвы часто развиваются на фоне другого хронического заболевания, например, это может быть сахарный диабет, варикозная болезнь и
              другие.
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
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg"
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.jpg 2x"
                  alt="Декоративные элементы"
                />
              </picture>
            </div>

            <p>
              Такие дефекты нередко инфицируются патогенными микроорганизмами, что еще больше усугубляет процесс заживления. Чаще трофические язвы
              локализуются на нижних конечностях, но могут встречаться и в других местах.
            </p>
            <p>
              Есть еще одна разновидность нарушений целостности кожи — <a href="/encyclopedia/prolezhni/" title="11. Пролежни">пролежневая язва</a>, которая
              представляет собой повреждение кожи и подлежащей ткани, возникшее в результате длительного механического давления
              <sup>
                <a data-type="internal" data-id="#spisok-literatury" href="#spisok-literatury">
                  1
                </a>
              </sup>
              .
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-650x325.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-1300x650.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-650x325.png"
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-650x325.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-1300x650.png 2x"
                alt="язвы на ногах"
              />
            </picture>

            <div className="list-base">
              <p>
                Согласно международной классификации болезней <strong>МКБ-10</strong> врач может установить такой диагноз, используя код:
              </p>
              <ul>
                <li>
                  <strong>L98.4.2</strong> – язва кожи трофическая
                </li>
                <li>
                  <strong>I83.2</strong> – варикозное расширение вен нижних конечностей с язвой и воспалением
                </li>
              </ul>
              <p>
                По данным эпидемиологических исследований – около 1-2% взрослого населения страдает от трофических язв
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                .
              </p>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Пролежни</strong>
                </p>
                <p>Пролежни образуются в результате длительного давления на участок ткани. Как лечат такие повреждения?</p>
                <a href="/encyclopedia/prolezhni/" className="btn btn-green" target="_blank" rel="noreferrer">
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  height={210}
                  width={310}
                  src="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-310x210.png"
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-310x210.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-620x420.png 2x"
                  alt="пролежни-превью"
                />
              </picture>
            </div>

            <h3 className="h3" id="klassifikaciya-troficheskih-yazv">
              Классификация трофических язв
            </h3>
            <div className="list-base">
              <p>
                Трофические язвы могут быть
                <sup>
                  <a href="#spisok-literatury">1,2,3</a>
                </sup>
                :
              </p>
              <ul>
                <li>поверхностные (когда поражение ткани распространяется неглубоко)</li>
                <li>глубокие (поражение, имеющее сильное распространение)</li>
                <li>локальные (как правило, имеющее отдельный небольшой участок поражения)</li>
                <li>циркулярные (множественные, охватывающие большую площадь конечности)</li>
              </ul>
            </div>

            <p>
              <strong>В зависимости от хронического заболевания, провоцирующего образование трофических язв, их можно разделить на:</strong>
            </p>
            <p>
              <strong>1. Венозные язвы (сосудистое поражение вен):</strong> варикозная, посттромбофлебическая болезнь, синдром Клиппеля-Треноне (врожденные дисплазии
              глубоких вен)
            </p>

            <div className="list-base">
              <p>
                <strong>2. Артериальные язвы (сосудистое поражение артерий):</strong>
              </p>
              <ul>
                <li>плохое артериальное кровоснабжение (заболевание периферических сосудов, атеросклероз)</li>
                <li>диабетические микроангиопатии</li>
                <li>
                  синдром Паркса— Вебера—Рубашова (врожденные артериовенозные свищи и аневризмы), а также посттравматические артериовенозные свищи и аневризмы
                </li>
              </ul>
            </div>

            <p>
              <strong>3. Язвы, возникающие из-за хронической недостаточности кровообращения в конечностях (сосудистая ишемия):</strong> атеросклероз,
              диабетические ангиопатии, синдром Марторелла (гипертензионно-ишемические язвы)
            </p>
            <p>
              <strong>4. Диабетические язвы</strong> у больных сахарным диабетом (высокий уровень сахара в крови приводит к поражению мелких сосудов и нервов)
            </p>

            <div className="list-base">
              <p>
                <strong>5. Язвы, связанные с неврологическими заболеваниями:&nbsp;</strong>
              </p>
              <ul>
                <li>синдром Гийена-Барре</li>
                <li>сирингомиелия (полости в спинном мозге)</li>
                <li>паралич нижних конечностей</li>
                <li>диабетическая нейропатия</li>
                <li>алкогольная полинейропатия</li>
                <li>травмы, заболевания головного мозга и периферических нервов</li>
              </ul>
            </div>

            <p>
              <strong>6. Посттравматические язвы</strong>, возникающие из-за травм, приводящих к возникновению глубоких ран кожи и прилежащих тканей
            </p>
            <p>
              <strong>7. Язвы, вызванные общим снижением иммунитета организма:</strong> нарушения и заболевания крови, инфекционные заболевания (флегмона,
              рожистое воспаление), при нарушении рациона питания
            </p>

            <h2 className="h2" id="simptomy-troficheskoy-yazvy">
              Симптомы трофической язвы
            </h2>
            <p>
              Важно помнить, что симптомы возникновения язвы могут отличаться в зависимости от причины их возникновения. Как правило, они имеют такие
              общие закономерности:
            </p>

            <div className="big">
              <div className="line">
                <p>Появление синеватого пятна на фоне утолщения кожного покрова.</p>
              </div>
              <div className="line">
                <p>«Разрастание» участка поражения, увеличение площади пораженного участка.</p>
              </div>
              <div className="line">
                <p>Болезненность при прикосновении и надавливании на поврежденный участок.</p>
              </div>
              <div className="line">
                <p>
                  Пораженный участок кожи может некоторое время не менять внешний вид, что свидетельствует о медленном заживлении раны.
                </p>
              </div>
              <div className="line">
                <p>
                  Наличие симптомов дискомфорта со стороны пораженного участка: покалывание, боль, жжение, отек, ощущение пульсации или ноющей боли,
                  кожный зуд, ощущение «тяжелых» ног
                  <sup>
                    <a href="#spisok-literatury">10</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <h2 className="h2" id="prichiny-vozniknoveniya-troficheskih-yazv">
              Причины возникновения трофических язв на ногах, щиколотках, стопах и пальцах
            </h2>
            <p>Так как причины возникновения язв могут быть очень разнообразными, следует рассмотреть наиболее распространенные из них.</p>
            <h3 className="h3" id="diabeticheskie-yazvy">
              Диабетические язвы
            </h3>
            <p>
              <strong>Сахарный диабет</strong> – хроническое эндокринное заболевание, которое связано с нарушением обмена сахара в организме. Такие длительные
              нарушения приводят к изменениям в различных тканях нашего организма. При сахарном диабете язвы часто возникают на нижних конечностях.
            </p>
            <div className="green">
              <p>
                У людей с сахарным диабетом поражаются мелкие сосуды и нервы, возникает нарушение походки, из-за чего появляется лишнее давление на стопу.
                Это повышает травматизацию мягких тканей, и возникает изъязвление.
              </p>
            </div>
            <p>
              Далее длительное воспаление на поврежденном участке приводит к изменению чувствительности. При сахарном диабете у человека нарушается питание
              тканей, что приводит к замедлению процесса регенерации кожи, а присоединение инфекции осложняет течение раны. В этом случае происходит
              расширение площади поражения с вовлечением соседних участков кожи и тканей.
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-1300x650.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-650x325.png"
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-650x325.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-1300x650.png 2x"
                alt="Диабетические язвы"
              />
            </picture>
            <p>
              Также возможно <strong>ишемическое повреждение</strong> (местное нарушение кровотока), которое ухудшает заживление ран, снижая поступление кислорода
              и всех компонентов, необходимых для заживления.
            </p>
            <h3 className="h3" id="venoznye-yazvy">
              Венозные язвы
            </h3>
            <p>
              Хронические <strong>венозные язвы</strong> возникают ввиду последствий постоянного повышенного венозного давления на кожную микроциркуляцию.
            </p>
            <p>
              Пожилой возраст, ожирение, большая площадь язвы и несоблюдение пациентом компрессионной терапии отрицательно влияют на заживление язвы.
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-1300x650.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-650x325.png"
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-650x325.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-1300x650.png 2x"
                alt="Венозные язвы"
              />
            </picture>

            <h3 className="h3" id="neyrogennye-yazvy">
              Нейрогенные язвы
            </h3>
            <p>
              К <strong>нейрогенным язвам</strong> нижних конечностей относятся все язвы, причины которых связаны с нарушением работы нерва (нейропатией).
            </p>
            <p>
              Нейропатические язвы на подошвах стоп или кончиках пальцев обычно развиваются в местах, подверженных повторяющимся высоким нагрузкам во время
              повседневной деятельности. В точках аномальной нагрузки и трения может произойти образование мозолей. Впоследствии мозоль трескается и ломается, что
              приводит к изъязвлению. Таким образом, риск возникновения язвы повышается, когда на конечностях присутствуют мозоли.
            </p>

            <div className="iframe">
              <div className="bg_default bg_green" />
              <div className="h3 h3_green iframe-title">О лечении трофических язв смотрите в коротком видео:</div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/7de01729aaf5056b179900bface5b278/?p=Lc09mJZvNvKBsatikqztqQ"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Видео: лечение трофических язв"
                />
              </div>
              <div className="iframe_desc">
                Вы узнаете о возможных причинах возникновения трофических язв, симптомах и способах обработки таких незаживающих ран.
              </div>
            </div>

            <h2 className="h2" id="diagnostika-troficheskih-yazv">
              Диагностика трофических язв
            </h2>
            <div className="list-base">
              <p>
                При возникновении язвы следует обратиться к врачу-флебологу, который проведет комплексное обследование, как правило, включающее следующие
                исследования:
              </p>
              <ul>
                <li>общий анализ крови</li>
                <li>уровень сахара в крови</li>
                <li>протромбиновое время (время, за которое формируется кровяной сгусток)</li>
                <li>
                  частичное тромбопластиновое время – тест, позволяющий выявить нарушения в процессе свертываемости крови
                </li>
                <li>почечный и печеночный анализы</li>
                <li>профиль липидов (для оценки риска сосудистых заболеваний)</li>
                <li>
                  уровень гликированного гемоглобина (позволяет проанализировать уровень сахара в крови за определенный период времени)
                </li>
                <li>
                  уровень преальбумина (для оценки состояния питания больного)
                  <sup>
                    <a href="#spisok-literatury">5</a>
                  </sup>
                </li>
              </ul>
            </div>
            <p>Ежегодно необходимо проводить оценку уровня чувствительности диабетической стопы<sup>
                <a data-type="internal" data-id="#spisok-literatury" href="#spisok-literatury">5</a>
              </sup>.
            </p>
            <p>Кроме того, важна оценка артериального кровоснабжения.</p>

            <h2 className="h2" id="lechenie-troficheskih-yazv">Лечение трофических язв</h2>
            <div className="green">
              <p>
                Успех лечения трофических язв зависит от правильного определения причины возникновения заболевания, а также от местных и системных факторов,
                которые могут препятствовать процессу заживления.
              </p>
            </div>
            <p>
              Лечение раны начинается с ее очищения от гноя и омертвевших тканей<sup>
                <a href="#spisok-literatury">7</a>
              </sup>
              . После завершения очищения раны необходимо проведение <strong>местной антимикробной терапии</strong> для устранения бактерий в трофической
              язве<sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              . Для этих целей используют антисептические растворы, мази, кремы и гели, которые наносятся непосредственно на пораженный участок кожи. Возможно
              использование различных раневых повязок, например гидрогелевых с ионами серебра.
            </p>
            <p>
              Использование системных антибиотиков требуется только в острой инфекционной фазе, при наличии целлюлита или отсутствии заживления правильно
              обработанной раны. Их назначение определяет лечащий врач<sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
            </p>
            <p>
              При лечении тяжелых диабетических язв стопы эффективна <strong>гипербарическая оксигенация</strong> – насыщение организма пациента кислородом под
              высоким давлением<sup>
                <a href="#spisok-literatury">9</a>
              </sup>
              .
            </p>
            <p>
              Применяемые местно <strong>факторы роста</strong> помогают ускорить заживление, стимулируют образование новой соединительной ткани и усиливают
              восстановление верхнего слоя кожи<sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>
            <p>
              Также для восстановления поврежденного участка необходимо обеспечить <strong>снятие нагрузки с язвы</strong> – постельный режим, костыли, гипсовую
              повязку, специальную обувь<sup>
                <a href="#spisok-literatury">10</a>
              </sup>
              .
            </p>
            <p>
              При глубоких и обширных поражениях с большим количеством омертвевших тканей показаны <strong>хирургические варианты лечения</strong> – удаление краев
              язвы, некротических (омертвевших) тканей.
            </p>

            <h3 className="h3" id="mestnye-preparaty-dlya-lecheniya-troficheskih-yazv">Местные препараты для лечения трофических язв</h3>
            <p>
              Для лечения трофических язв могут использоваться антисептические растворы, мази и прочие средства для местного применения, а именно:
            </p>
            <div className="big">
              <div className="line">
                <p>
                  Раствор повидон-йода, который оказывает бактерицидное действие на грамположительные и грамотрицательные бактерии, эффективен в отношении
                  грибов, вирусов, простейших
                </p>
              </div>
              <div className="line">
                <div>
                  <p>Мази:</p>
                  <ul>
                    <li>
                      с антисептическим, противогрибковым, противомикробным действием широкого спектра — <a href="/encyclopedia/povidon-jod/">повидон-йод</a>
                      в форме мази
                    </li>
                    <li>с антибактериальным и бактерицидным действием широкого спектра</li>
                    <li>с бактериостатическим (подавление способности микроорганизмов к размножению)</li>
                    <li>с противовоспалительным, противомикробным действием</li>
                    <li>протеолитические ферменты с ранозаживляющим, раноочищающим, антибактериальным действием</li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <p>Кремы с противовоспалительным действием</p>
              </div>
              <div className="line">
                <p>Аэрозоли с противомикробным действием</p>
              </div>
            </div>

            <p>Местное лечение кожных ран направлено на подавление инфекции и ускорение заживления. Локальные (местные) средства обладают антимикробными свойствами, поддерживают процессы ранозаживления, а также удобны в применении.</p>

            <h4 className="h4" id="primenenie-povidona-yoda-betadin-dlya-lecheniya-troficheskih-yazv">Применение повидона-йода (Бетадин®) для лечения трофических язв</h4>
            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-315x252.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-630x503.webp 2x"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-1853x1832.jpg 2x"
                    width={927}
                    height={916}
                    src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg"
                    alt="Бетадин"
                  />
                </picture>
              </div>
              <p>
                Антисептическое средство повидон-йод (Бетадин<sup>®</sup>) часто используется для обработки
                <a href="/encyclopedia/obrabotka-ran/">раневой поверхности</a>. Йод постепенно высвобождается из комплекса с повидоном (носитель йода в лекарстве) при контакте с кожей, что способствует гибели микроорганизмов. Средства, содержащие йод, оказывают влияние на заживление кожных ран за счет своего антимикробного действия и ускорения образования новой соединительной ткани<sup>
                  <a href="#spisok-literatury">12,13</a>
                </sup>
                .
              </p>
              <p>Бетадин<sup>®</sup> имеет различные лекарственные формы. При лечении трофических язв используются:</p>
              <ul>
                <li>Водный 10% раствор Бетадина<sup>®</sup>, который разводят в соотношении 1:10 с водой или применяют неразбавленный раствор. Препарат наносят непосредственно на поверхность трофической язвы. Препарат не вызывает жжения и других неприятных ощущений.</li>
                <li>Мазь Бетадин<sup>®</sup> наносят на поверхность язвы тонким слоем 1 раз в сутки.</li>
              </ul>
              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-rastvor-instruktsiya/">
                  Инструкция
                </a>
              </p>
            </div>

            <div className="list-base">
              <p>
                <strong>Препарат Бетадин<sup>®</sup> имеет следующие противопоказания:</strong>
              </p>
              <ul>
                <li>повышенная чувствительность к йоду и другим составляющим препарата</li>
                <li>одновременное применение радиоактивного йода</li>
                <li>нарушение функции щитовидной железы</li>
                <li>аденома щитовидной железы</li>
                <li>герпетиформный дерматит Дюринга</li>
                <li>применение у новорожденных детей</li>
              </ul>
            </div>

            <div className="green">
              <p>
                Кроме того, препарат с осторожностью используется при заболевании почек, в периоды беременности и лактации
                <sup>
                  <a href="#spisok-literatury">12,13</a>
                </sup>
                .
              </p>
              <p>
                Ввиду широк</p>
                <p>ей антимикробной активности и благоприятного профиля польза/риск, повидон-йод является действенным средством в лечении острых и хронических ран
                <sup>
                  <a href="#spisok-literatury">12,13</a>
                </sup>
                .
              </p>
            </div>

            <h2 className="h2" id="profilaktika-troficheskih-yazv">
              Профилактика образования трофических язвна на ногах, стопе и пальцах ног
            </h2>
            <div className="list-base">
              <p>Для предупреждения развития трофических язв рекомендуется выполнять следующие профилактические мероприятия:</p>
              <ul>
                <li>Пациенты с сахарным диабетом должны осуществлять гликемический контроль (контроль уровня своего сахара в крови), следить за артериальным давлением</li>
                <li>Рекомендуется отказаться от курения и употребления алкоголя</li>
                <li>Тщательно ухаживать за ногами</li>
                <li>Регулярно проходить медицинные осмотры<sup><a href="#spisok-literatury">9</a></sup></li>
                <li>Всем пациентам с заболеваниями вен необходимо использовать компрессионные чулки. При наличии сопутствующей&nbsp;<strong>ишемической болезни чулки использовать нельзя<sup><a href="#spisok-literatury">1</a></sup></strong></li>
              </ul>
            </div>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.webp 2x"
                  type="image/webp"
                />
                <img loading="lazy" decoding="async" height={542} width={558} src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.jpg 2x" alt="Декоративные элементы" />
              </picture>
            </div>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">Часто задаваемые вопросы</h2>
            <h3 className="h3" id="kak-vyglyadit-troficheskaya-yazva-na-noge">Как выглядит трофическая язва на ноге?</h3>
            <p>Трофическая язва представляет собой глубокую рану в области нижней конечности (голени, пятки или стопы), которая медленно заживает.</p>
            <h3 className="h3" id="kakoy-vrach-lechit-troficheskie-yazvy">Какой врач лечит трофические язвы?</h3>
            <p>При поиске причины возникновения заболевания необходима консультация терапевта, эндокринолога, кардиолога. Трофическая язва — глубокая рана кожи, поэтому важно проконсультироваться с дерматологом. Точный диагноз может поставить хирург, потому что большинство трофических язв связано с нарушением кровообращения ног.</p>
            <h3 className="h3" id="chem-mazat-troficheskuyu-yazvu">Чем мазать трофическую язву?</h3>
            <p>Для лечения трофических язв хорошо зарекомендовала себя мазь на основе повидон-йода (Бетадин<sup>®</sup>). Препарат обладает антибактериальным, противогрибковым противовирусным действием<sup>
              <a href="#spisok-literatury">14</a>
            </sup>
            .</p>

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
                <img loading="lazy" decoding="async" height={203} width={235} src="https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.png" alt="" />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">Читать по теме</div>
            <div className="slider-normal">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/prolezhni-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/prolezhni-prevyu-491x332.webp 2x" type="image/webp" />
                      <img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/prolezhni-prevyu-246x166.png" alt="пролежни-превью" />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>Пролежни</strong></p>
                    <p>Пролежни образуются в результате длительного давления на участок ткани. Как лечат такие повреждения?</p>
                    <p className="slide-more"><a href="/encyclopedia/prolezhni/"> Подробнее </a></p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-491x332.webp 2x" type="image/webp" />
                      <img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-246x166.png" alt="Повидон-йод - превью" />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>Повидон йод</strong></p>
                    <p>Характеристики и свойства повидон-йода. Для чего применяется повидон-йод? Инструкция по применению раствора, мази, свечей Бетадин<sup>®</sup> с повидон-йодом.</p>
                    <p className="slide-more"><a href="/encyclopedia/povidon-jod/"> Подробнее </a></p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-491x332.webp 2x" type="image/webp" />
                      <img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-246x166.png" alt="Йод-превью" />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>Йод</strong></p>
                    <p>Сферы использования йода. Отличия повидон-йода от спиртового раствора йода.</p>
                    <p className="slide-more"><a href="/encyclopedia/jod/"> Подробнее </a></p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="h2" id="spisok-literatury">Список литературы</h2>
            <ol className="literature">
              <li>
                Puri V, Venkateshwaran N, Khare N. Trophic ulcers-Practical management guidelines. Indian J Plast Surg. 2012;45(2):340-351. doi:10.4103/0970-0358.101317.
              </li>
              <li>
                Кияшко В.А.Трофические язвы нижних конечностей.// РМЖ. №4 от 26.02.2003 стр. 221.
              </li>
              <li>
                Гриценко В.В., Орловский П.И., Гавриленков В.И. Современные аспекты диагностики и лечения трофических язв венозной этиологии// Издательство СПбГМУ, 2007.
              </li>
              <li>
                Gloviczki P, Comerota AJ, Dalsing MC, et al. The care of patients with varicose veins and associated chronic venous diseases: clinical practice guidelines of the Society for Vascular Surgery and the American Venous Forum. J Vasc Surg. 2011;53(5 Suppl):2S-48S. doi:10.1016/j.jvs.2011.01.079.
              </li>
              <li>
                Brem H, Sheehan P, Rosenberg HJ, Schneider JS, Boulton AJ. Evidence-based protocol for diabetic foot ulcers. Plast Reconstr Surg. 2006;117(7 Suppl):193S-211S. doi:10.1097/01.prs.0000225459.93750.29.
              </li>
              <li>
                Dorweiler B, Neufang A, Kreitner KF, Schmiedt W, Oelert H. Magnetic resonance angiography unmasks reliable target vessels for pedal bypass grafting in patients with diabetes mellitus. J Vasc Surg. 2002;35(4):766-772. doi:10.1067/mva.2002.119505.
              </li>
              <li>
                Steed DL, Donohoe D, Webster MW, Lindsley L. Effect of extensive debridement and treatment on the healing of diabetic foot ulcers. Diabetic Ulcer Study Group. J Am Coll Surg. 1996;183(1):61-64.
              </li>
              <li>
                White RJ, Cooper R, Kingsley A. Wound colonization and infection: the role of topical antimicrobials. Br J Nurs. 2001;10(9):563-578. doi:10.12968/bjon.2001.10.9.9387.
              </li>
              <li>
                Jeffcoate WJ, Harding KG. Diabetic foot ulcers. Lancet. 2003;361(9368):1545-1551. doi:10.1016/S0140-6736(03)13169-8.
              </li>
              <li>
                Boulton AJ, Bowker JH, Gadia M, et al. Use of plaster casts in the management of diabetic neuropathic foot ulcers. Diabetes Care. 1986;9(2):149-152. doi:10.2337/diacare.9.2.149.
              </li>
              <li>
                Ducic I, Felder JM 3rd, Iorio ML. The role of peripheral nerve surgery in diabetic limb salvage. Plast Reconstr Surg. 2011;127 Suppl 1:259S-269S. doi:10.1097/PRS.0b013e31820063d4.
              </li>
              <li>
                Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa MA. Povidone iodine in wound healing: A review of current concepts and practices. Int J Surg. 2017;44:260-268. doi:10.1016/j.ijsu.2017.06.073.
              </li>
              <li>
                Wang L, Qin W, Zhou Y, et al. Transforming growth factor β plays an important role in enhancing wound healing by topical application of Povidone-iodine. Sci Rep. 2017;7(1):991. Published 2017 Apr 20. doi:10.1038/s41598-017-01116-5
              </li>
              <li>Инструкция по медицинскому применению препарата Бетадин (раствор, мазь), РУ П N015282/03, РУ П N015282/02.</li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
};

export default TroficheskieYazvyNog;
