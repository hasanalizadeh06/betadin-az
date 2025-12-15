"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Vaginit: React.FC = () => {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

  useEffect(() => {
    // Console/debug similar to original script
    // eslint-disable-next-line no-console
    console.log(1);

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
    // initial check in case it's already scrolled
    checkScroll();

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 1000;
      setNavTitleHidden(scrolled);
      if (scrolled) {
        setSecondaryNavOpened(false);
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
                <a property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/">
                  <span property="name">Лечение вагинита</span>
                </a>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">Лечение вагинита</span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>
          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                <h1 className="page-header-title-text">Вагинит: причины, симптомы и современное лечение</h1>
                <picture>
                  <source
                    srcSet="/icon-230x224.webp"
                    type="image/webp"
                  />
                  <Image
                    decoding="async"
                    height={112}
                    width={115}
                    src="/icon-230x224.webp"
                    alt="картинка у заголовка"
                  />
                </picture>
              </div>
              <h2 className="page-header-subtitle">Что такое вагинит </h2>
              <div className="page-header-body">
                <p>
                  <strong>Вагинит</strong>, или <strong>кольпит</strong>, — это воспаление слизистой оболочки влагалища, которое в ряде случаев может быть связано с инфекцией.
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li>
                  <a href="https://betadin.ru/encyclopedia/vaginit/#formy-vaginita">Формы вагинита</a>
                </li>
                <li>
                  <a href="https://betadin.ru/encyclopedia/vaginit/#lechenie-vaginita">Лечение</a>
                </li>
                <li>
                  <a href="https://betadin.ru/encyclopedia/vaginit/#profilaktika">Профилактика</a>
                </li>
              </ul>
            </div>
            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-1460x1230.webp 2x"
                    type="image/webp"
                  />
                  <img
                    fetchPriority="high"
                    decoding="async"
                    height={615}
                    width={730}
                    src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-730x615.jpg.webp"
                    srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-730x615.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-1460x1230.jpg.webp 2x"
                    alt=""
                  />
                </picture>
              </div>
            </div>
          </div>
          <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}`}>
            <ul>
              <li>
                <a href="#prichiny-poyavleniya-vaginita">Причины появления вагинита</a>
              </li>
              <li>
                <a href="#formy-vaginita">Формы вагинита</a>
              </li>
              <li>
                <a href="#simptomy-vaginita">Симптомы вагинита</a>
              </li>
              <li>
                <a href="#diagnostika">Диагностика</a>
              </li>
              <li>
                <a href="#lechenie-vaginita">Лечение вагинита</a>
              </li>
              <li>
                <a href="#profilaktika">Профилактика</a>
              </li>
              <li>
                <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
              </li>
            </ul>
            <div
              className="nav-content-title nav-content-title-cross"
              onClick={() => setNavOpened(!navOpened)}
            >
              Содержание
            </div>
          </nav>
        </div>
      </div>

      <nav
        className={`nav-content nav-content-fixed${navTitleHidden ? '' : ' nav-content-title-hidden'}${secondaryNavOpened ? ' nav-content__open' : ''}`}
      >
        <ul>
          <li>
            <a href="#prichiny-poyavleniya-vaginita">Причины появления вагинита</a>
          </li>
          <li>
            <a href="#formy-vaginita">Формы вагинита</a>
          </li>
          <li>
            <a href="#simptomy-vaginita">Симптомы вагинита</a>
          </li>
          <li>
            <a href="#diagnostika">Диагностика</a>
          </li>
          <li>
            <a href="#lechenie-vaginita">Лечение вагинита</a>
          </li>
          <li>
            <a href="#profilaktika">Профилактика</a>
          </li>
          <li>
            <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
          </li>
        </ul>
        <div
          className="nav-content-title nav-content-title-cross"
          onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}
        >
          Содержание
        </div>
      </nav>

      <div className="home-container">
        <div className="new-disclaimer"> Информация в статье не&nbsp;заменяет консультацию врача</div>
      </div>
      <div className="page-content-wrapper">
        <div className="container container-middle page-content">
          <p>Симптомы данного заболевания — зуд, боль и наличие патологических выделений из половых путей.</p>
          <p>
            <strong>Воспаление слизистой оболочки влагалища</strong>
          </p>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-1300x650.webp 2x"
              type="image/webp"
            />
            <img
              decoding="async"
              height={325}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-650x325.png.webp"
              srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-650x325.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-1300x650.png.webp 2x"
              alt="Воспаление слизистой оболочки влагалища"
            />
          </picture>
          <div className="exlude-turbo">
            <picture className="banner-betadin banner-circle">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={505}
                width={503}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp"
                srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.jpg.webp 2x"
                alt="Декоративные элементы"
              />
            </picture>
          </div>
          <h2 className="h2" id="prichiny-poyavleniya-vaginita">Причины появления вагинита</h2>
          <div className="list-base">
            <p>Причинами возникновения вагинита могут быть:</p>
            <ul>
              <li>Заражение <strong>инфекцией</strong> во время незащищенного полового контакта.</li>
              <li>Чрезмерное <strong>размножение условно-патогенных микробов</strong>, которые в норме присутствуют во влагалище в небольшом количестве, однако при увеличении их численности возникает данное заболевание.</li>
            </ul>
          </div>
          <p>
            В развитии вагинита большое значение имеет нарушение нормальной микрофлоры влагалища, уменьшение количества «полезных» лактобактерий, снижение защитных свойств клеток, выстилающих влагалище.
          </p>
          <p>
            Условно-патогенные и инфекционные микроорганизмы повреждают клетки верхнего слоя влагалища, вызывая ответ со стороны организма в виде развития воспалительной реакции. При этом наблюдаются классические симптомы воспаления: боль, отек и покраснение.
          </p>
          <h2 className="h2" id="formy-vaginita">Формы вагинита</h2>
          <div className="two-column">
            <div className="column">
              <h4>Специфический вагинит</h4>
              <p>Связан с заражением инфекциями, передаваемыми половым путем: трихомонады, хламидии и прочие.</p>
            </div>
            <div className="column">
              <h4>Неспецифический</h4>
              <p>Связан с размножением условно-патогенных микроорганизмов, например грибов рода Candida.</p>
              <p>Данная форма вагинита встречается наиболее часто.</p>
            </div>
          </div>
          <div className="list-base">
            <p>
              <strong>Отдельно выделяют:</strong>
            </p>
            <ul>
              <li>
                <strong>Атрофический вагинит</strong> (связан со снижением количества женских половых гормонов-эстрогенов в старшем возрасте, которые участвуют в формировании защитных механизмов во влагалище).
              </li>
              <li>
                Вагинит <strong>на фоне аллергии</strong>.
              </li>
            </ul>
          </div>
          <h2 className="h2" id="simptomy-vaginita">Симптомы вагинита</h2>
          <p>Проявления вагинита на фоне микробной активности зависят от вида возбудителя, а также от стадии процесса, которая напрямую связана с длительностью заболевания.</p>
          <p><strong>Возможные симптомы вагинита:</strong></p>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-1300x650.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={325}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-650x325.png.webp"
              srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-650x325.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-1300x650.png.webp 2x"
              alt="Возможные симптомы вагинита"
            />
          </picture>
          <div className="big">
            <div className="line">
              <p>
                <strong>Острая стадия воспаления</strong> (длительность до 2-х месяцев) характеризуется возникновением дискомфортных и иногда болезненных ощущений в области половых органов, появлением патологических выделений, а также отеком, покраснением слизистой, высыпаниями на коже и слизистой оболочке наружных половых органов.
              </p>
            </div>
            <div className="line">
              <p>По мере развития болезни симптомы могут несколько стихать, маскируясь под начало выздоровления (подострая стадия, длительность которой может быть более 2 месяцев).</p>
            </div>
            <div className="line">
              <p>При отсутствии адекватного лечения нередко происходит переход болезни в <strong>хроническую</strong> стадию, когда симптомы носят стертый и невыраженный характер (длительность болезни свыше 6 месяцев). Такой процесс может длиться годами.</p>
            </div>
          </div>
          <p>Основное проявление вагинита — патологические выделения. В зависимости от причины воспаления они могут быть обильными или умеренными (реже скудными), приобретать различный цвет и консистенцию.</p>
          <h2 className="h2" id="diagnostika">Диагностика</h2>
          <p>Для того, чтобы врач назначил правильное лечение вагинита, необходимо установить возбудителя и стадию заболевания.</p>
          <p>При появлении признаков воспаления во влагалище женщина должна обратиться к гинекологу.</p>
          <p>Гинеколог проведет осмотр и сделает забор вагинальных выделений для дальнейшей лабораторной диагностики.</p>
          <h2 className="h2" id="lechenie-vaginita">Лечение вагинита</h2>
          <p>Правильный подбор лекарственных препаратов имеет большое значение для быстрого устранения симптомов, предупреждения перехода вагинита в хроническую форму и возникновения осложнений.</p>
          <div className="list-base">
            <p>
              <strong>Выбор тактики лечения зависит от:</strong>
            </p>
            <ul>
              <li>течения заболевания</li>
              <li>результатов лабораторных исследований и идентификации возбудителя</li>
              <li>состояния здоровья и общего иммунитета женщины</li>
              <li>особенностей действия лекарства, показаний и противопоказаний</li>
              <li>соблюдение пациентом рекомендаций врача по кратности и длительности приема лекарства</li>
            </ul>
          </div>
          <div className="green">
            <p>Лечением вагинита занимается врач акушер-гинеколог.</p>
          </div>
          <h3 className="h3">Цели лечения вагинита</h3>
          <div className="list-base">
            <p>Основными целями при лечении специфических и неспецифических вагинитов являются:</p>
            <ul>
              <li>Снижение числа условно-патогенных микроорганизмов до нормального уровня или полное уничтожение возбудителей.</li>
              <li>Устранение симптомов заболевания и воспаления во влагалище.</li>
              <li>Предупреждение возможных осложнений, включая восходящее распространение инфекции.</li>
              <li>На заключительном этапе терапии возможны мероприятия по восстановлению нормальной микрофлоры влагалища.</li>
            </ul>
          </div>
          <p>Существует 2 формы препаратов: системные и местные — применяются внутрь/инъекционно или вводятся непосредственно во влагалище.</p>
          <h3 className="h3">Лечение специфических вагинитов</h3>
          <p>При лечении специфических вагинитов назначают системные антибактериальные препараты иногда в комбинации с местными.</p>
          <p>Длительность лечения и выбор антибиотика зависят от чувствительности возбудителя. Лечение должно включать обоих половых партнеров.</p>
          <h3 className="h3">Лечение неспецифических вагинитов</h3>
          <p>Чаще используются местные средства – кремы, мази, свечи, вагинальные таблетки, растворы для орошения.</p>
          <div className="block-with-image">
            <div className="block-with-image__green">
              <p>
                <strong>Свечи от вагинита</strong>
              </p>
              <p>Лечение вагинита местными препаратами в форме вагинальных свечей. Как выбрать свечи от воспаления во влагалище?</p>
              <a href="https://betadin.ru/encyclopedia/svechi-ot-vaginita/" className="btn btn-green" target="_blank" rel="noreferrer">Подробнее</a>
            </div>
            <picture>
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-620x420.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={210}
                width={310}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-310x210.png.webp"
                alt="Свечи от вагинита - превью"
              />
            </picture>
          </div>
          <h3 className="h3">Местные средства для лечения вагинитов</h3>
          <p>В настоящее время при лечении неспецифических вагинитов врачи отдают предпочтение лекарственным средствам с широким спектром действия.</p>
          <h3 className="h3">Свечи Бетадин® в лечении вагинитов различной этиологии</h3>
          <div className="product-block">
            <div className="banner-product-img">
              <picture>
                <source media="(max-width: 767px)" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/e367d1b34f2621dac4bba93779ac51d93fe1d94967f4d45ee45569d04cecb2a0-315x310/banner-betadin-svechi-mobile-315x235.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/e367d1b34f2621dac4bba93779ac51d93fe1d94967f4d45ee45569d04cecb2a0-315x310/banner-betadin-svechi-mobile-630x470.webp 2x" type="image/webp" />
                <img loading="lazy" decoding="async" srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-927x916.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-1853x1832.jpg.webp 2x" width={927} height={916} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-927x916.jpg.webp" alt="Бетадин" />
              </picture>
            </div>
            <p>
              <strong>Бетадин<sup>®</sup></strong> — это местный антисептический препарат. Активное вещество свечей Бетадин<sup>®</sup> — повидон-йод.
            </p>
            <p>Важно отметить, что повидон-йод — это специальный комплекс, в котором к йоду присоединяется повидон. Такая комбинация повышает эффект.</p>
            <p className="buttons">
              <a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-svechi-instruktsiya/" rel="noreferrer">Инструкция</a>
            </p>
          </div>
          <h4 className="h4">Действие вагинальных свечей Бетадин®</h4>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2374/5c886975bcdee2f29cf901055b74ab48d5157f79b29beac27387df5212e3cae7-650x0/dejstvie-vaginalnyh-svechej-betadin-scaled-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2374/5c886975bcdee2f29cf901055b74ab48d5157f79b29beac27387df5212e3cae7-650x0/dejstvie-vaginalnyh-svechej-betadin-scaled-1300x650.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2374/5c886975bcdee2f29cf901055b74ab48d5157f79b29beac27387df5212e3cae7-650x0/dejstvie-vaginalnyh-svechej-betadin-scaled-650x325.png.webp" alt="Действие вагинальных свечей Бетадин®" />
          </picture>
          <p>Для применения свечей существуют ограничения: препарат не назначают во время беременности и при заболеваниях щитовидной железы.</p>
          <h2 className="h2" id="profilaktika">Профилактика</h2>
          <p>Говоря о профилактике вагинитов, можно выделить два аспекта:</p>
          <div className="two-column">
            <div className="column">
              <p>Профилактика развития воспалительных заболеваний во влагалище</p>
            </div>
            <div className="column">
              <p>Профилактика осложнений вагинитов (восходящее инфицирование матки и придатков)</p>
            </div>
          </div>
          <div className="list-base">
            <p>
              <strong>Некоторые рекомендации профилактики вагинита:</strong>
            </p>
            <ul>
              <li>Носите нижнее белье из натуральных тканей и меняйте его ежедневно.</li>
              <li>Пользуйтесь специальными средствами, предназначенными для интимной гигиены.</li>
              <li>Меняйте мокрую одежду сразу после купания или занятия спортом.</li>
              <li>Добавляйте в рацион пробиотики для поддержания кишечной и вагинальной микрофлоры</li>
              <li>Укрепляйте иммунитет и лечите хронические заболевания.</li>
              <li>Не забывайте о барьерной контрацепции.</li>
            </ul>
          </div>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2375/de10cea60c75011c866a80f3e1425aa7c209bc7b55e24bc70a059d2c4efbf974-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-1-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2375/de10cea60c75011c866a80f3e1425aa7c209bc7b55e24bc70a059d2c4efbf974-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-1-1300x300.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={150} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2375/de10cea60c75011c866a80f3e1425aa7c209bc7b55e24bc70a059d2c4efbf974-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-1-650x150.png.webp" alt="Некоторые рекомендации профилактики вагинита-1" />
          </picture>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2376/b2b4dc75ce63880e26e153b947bc0414f65ffd36be0c1a4f09baf3db4bcc5e3b-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-2-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2376/b2b4dc75ce63880e26e153b947bc0414f65ffd36be0c1a4f09baf3db4bcc5e3b-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-2-1300x300.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={150} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2376/b2b4dc75ce63880e26e153b947bc0414f65ffd36be0c1a4f09baf3db4bcc5e3b-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-2-650x150.png.webp" alt="" />
          </picture>
          <p><strong>Для профилактики восходящей инфекции</strong> из влагалища во время гинекологических манипуляций и оперативных вмешательств врачи часто назначают антисептические препараты за несколько дней до процедуры. Одним из показаний для использования свечей Бетадин® является профилактика перед хирургическими и диагностическими вмешательствами во влагалище.</p>
          <h2 className="h2" id="chasto-zadavaemye-voprosy">Часто задаваемые вопросы</h2>
          <h3 className="h3">Через какое время после проведенного лечения нужно идти на повторный прием к гинекологу и сдавать анализы?</h3>
          <p>Обычно контрольное обследование после проведенного лечения назначают не ранее, чем через 10 дней от последнего дня использования препарата. В среднем через 10-14 дней.</p>
          <h3 className="h3">Как лечить полового партнера?</h3>
          <p>При появлении первых признаков вагинита у женщины ее половому партнеру необходимо обратиться на прием к андрологу для обследования и дальнейшего назначения терапии.</p>
          <h3 className="h3">Как часто нужно посещать гинеколога при отсутствии жалоб?</h3>
          <p>При отсутствии каких-либо жалоб и проявлений гинекологического заболевания женщине рекомендуется проходить профилактическое обследование у врача-гинеколога не реже 1 раз в год.</p>
          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">Молчанов Олег Леонидович</p>
              <div className="autor-subtitle" />
              <p className="autor-footer">Автор статьи</p>
            </div>
            <picture>
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-235x203.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-470x406.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" height={203} width={235} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-235x203.png.webp" alt="" />
            </picture>
          </div>
          <div className="h2 h2-read-more" id="chitat-po-teme">Читать по теме</div>
          <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
            <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
              <div className="swiper-slide swiper-slide-active" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source srcSet="/povidon-jod-prevyu-620x420.webp" type="image/webp" />
                    <img loading="lazy" decoding="async" height={210} width={310} src="/povidon-jod-prevyu-620x420.webp" alt="Повидон-йод - превью" />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title"><strong>Повидон йод</strong></p>
                  <p>Характеристики и свойства повидон-йода. Для чего применяется повидон-йод?</p>
                </div>
              </div>
              <div className="swiper-slide swiper-slide-next" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-491x332.webp 2x" type="image/webp" />
                    <img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-246x166.png.webp" alt="Вагинальные выделения - первью" />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title"><strong>Вагинальные выделения</strong></p>
                  <p>Какие бывают вагинальные выделения, и как отличить нормальные бели от патологических?</p>
                </div>
              </div>
              <div className="swiper-slide" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-491x332.webp 2x" type="image/webp" />
                    <img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-246x166.png.webp" alt="Свечи от вагинита - превью" />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title"><strong>Свечи от вагинита</strong></p>
                  <p>Лечение вагинита местными препаратами в форме вагинальных свечей. Как выбрать свечи?</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="h2" id="spisok-literatury">Список литературы</h2>
          <ol className="literature">
            <li id="literature-0">Paladine HL, Desai UA. Vaginitis: Diagnosis and Treatment. Am Fam Physician. 2018 Mar 1;97(5):321-329.</li>
            <li id="literature-1">Клинические рекомендации по диагностике и лечению заболеваний, сопровождающихся патологическими выделениями из половых путей женщин // под ред.Прилепской В.Н., Кира Е.Ф.,РОАГ, 2019 г.</li>
            <li id="literature-2">Neal CM, Kus LH, Eckert LO, Peipert JF. Noncandidal vaginitis: a comprehensive approach to diagnosis and management. Am J Obstet Gynecol. 2020 Feb;222(2):114-122.</li>
            <li id="literature-3">Marnach ML, Wygant JN, Casey PM. Evaluation and Management of Vaginitis. Mayo Clin Proc. 2022 Feb;97(2):347-358.</li>
            <li id="literature-4">Stika CS. Atrophic vaginitis. Dermatol Ther. 2010 Sep Oct;23(5):514-22.</li>
            <li id="literature-5">Ширева Ю.В., Сандакова Е.А., Карпунина Т.И. Неспецифический аэробный вагинит.</li>
            <li id="literature-6">Vaginitis in Nonpregnant Patients: ACOG Practice Bulletin, Number 215. Obstet Gynecol. 2020;135(1):e1-e17.</li>
            <li id="literature-7">Бетадин® суппозитории. Инструкции по медицинскому применению (РН: П№015282/01).</li>
            <li id="literature-8">Petersen EE, Weissenbacher ER, Local treatment of vaginal infections with dequalinium chloride or povidone iodine. Arzneimittelforschung. 2002;52(9):706-715.</li>
            <li id="literature-9">Haas DM, Morgan S et al. Vaginal preparation with antiseptic solution before cesarean section for preventing postoperative infections. Cochrane Database Syst Rev. 2018;7(7):CD007892.</li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Vaginit;
