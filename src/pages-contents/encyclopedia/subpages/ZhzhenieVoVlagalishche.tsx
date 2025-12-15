'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function ZhzhenieVoVlagalishche() {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

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
                    <span property="name">Жжение во влагалище</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Жжение во влагалище</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Жжение во влагалище: причины и устранение</h1>
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
                <h2 className="page-header-subtitle">
                  Наиболее частые заболевания, симптомом которых может быть жжение во влагалище
                </h2>
                <div className="page-header-body">
                  <p>
                    Жжение во влагалище — это симптом, характерный для различных заболеваний вульвы и влагалища
                    <sup>
                      <a href="#literatura-0">1</a>
                    </sup>
                    .
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#osnovnye-zabolevaniya-provociruyushchie-poyavlenie-zuda">
                      Связанные заболевания
                    </a>
                  </li>
                  <li>
                    <a href="#diagnostika-prichiny-zhzheniya-vo-vlagalishcha">Диагностика</a>
                  </li>
                  <li>
                    <a href="#lechenie-zhzheniya-vo-vlagalishche">Лечение</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/956/bd06c86e5eddc63d50a5a339cef4864270991804991fe3a97d218c69b5846030-730x615/frame-655-5-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/956/bd06c86e5eddc63d50a5a339cef4864270991804991fe3a97d218c69b5846030-730x615/frame-655-5-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/images/encyclopedia/zhzhenie-header.jpg"
                      alt="Жжение во влагалище"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}`}>
              <ul>
                <li>
                  <a href="#diagnostika-prichiny-zhzheniya-vo-vlagalishcha">
                    Диагностика причин жжения во влагалище
                  </a>
                </li>
                <li>
                  <a href="#lechenie-zhzheniya-vo-vlagalishche">Лечение жжения во влагалище</a>
                </li>
                <li>
                  <a href="#profilaktika-poyavleniya-zhzheniya-vo-vlagalishche">
                    Профилактика появления жжения во влагалище
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
                </li>
                <li>
                  <a href="#literatura">Список литературы</a>
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
              <a href="#diagnostika-prichiny-zhzheniya-vo-vlagalishcha">
                Диагностика причин жжения во влагалище
              </a>
            </li>
            <li>
              <a href="#lechenie-zhzheniya-vo-vlagalishche">Лечение жжения во влагалище</a>
            </li>
            <li>
              <a href="#profilaktika-poyavleniya-zhzheniya-vo-vlagalishche">
                Профилактика появления жжения во влагалище
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="#literatura">Список литературы</a>
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
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Заболевания, сопровождающиеся жжением во влагалище, как правило, являются поводом для обращения к врачу-гинекологу, реже к дерматовенерологу. В начале необходимо исключить опасные виды инфекции, которые могут быть причиной жжения, например инфекции, передаваемые половым путем (ИППП).
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

            <div className="list-base">
              <p>
                <strong>Жжение во влагалище может вызываться:</strong>
              </p>
              <ul>
                <li>Хламидиями</li>
                <li>Микоплазмами</li>
                <li>Герпесом</li>
                <li>Трихомонадами</li>
                <li>Атрофией</li>
                <li>Бактериальным вагинозом</li>
                <li>Аллергией</li>
                <li>Молочницей</li>
                <li>Аэробным вагинитом</li>
                <li>Гонореей</li>
              </ul>
            </div>

            <p>
              Однако в более частых случаях причиной заболевания являются микроорганизмы, которые в норме живут во влагалище. Но по разным причинам они могут проявлять себя достаточно агрессивно, провоцируя симптомы интимного дискомфорта.
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1134/b404729e1f410d5a97bdf9cd23ca209810ff6736cc618aedf9543d6dfed64b23-650x0/medical-kit-and-bandaid-509398-488-1-13-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1134/b404729e1f410d5a97bdf9cd23ca209810ff6736cc618aedf9543d6dfed64b23-650x0/medical-kit-and-bandaid-509398-488-1-13-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/microorganisms.png"
                alt="микроорганизмы во влагалище"
              />
            </picture>

            <div className="list-base">
              <h3 id="osnovnye-zabolevaniya-provociruyushchie-poyavlenie-zuda">
                <strong>
                  Разберем основные заболевания, провоцирующие появление зуда во влагалище, связанные с
                  проявлением агрессивности нормальной флоры.
                </strong>
              </h3>
            </div>

            <h4 id="aerobnyy-vaginit">Аэробный вагинит</h4>
            <p>
              Аэробный вагинит — это воспаление слизистой влагалища, возникающее при увеличении числа микроорганизмов, которые в норме должны встречаться в меньшем количестве. Статистика свидетельствует, что заболевание встречается достаточно часто, в основном у женщин в возрасте от 21 года до 30 лет (32,3%)
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
              .
            </p>
            <p>
              У пациента с аэробным вагинитом в микробиологических анализах будет встречаться кишечная палочка (Escherichia coli), энтерококки, стрептококки группы B (Streptococcus agalactiae) и стафилококки (Staphylococcus aureus)
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
              . Все эти микроорганизмы в небольшом количестве могут встречаться по всему нашему организму. Поэтому аэробный вагинит не относится к «классическим» инфекциям.
            </p>
            <div className="green">
              <p>
                <strong>Симптомы</strong>, которые часто сочетаются со жжением во влагалище при аэробном вагините: обильные выделения с гнилостным запахом, общий дискомфорт, дискомфортные ощущения во время секса.
              </p>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Бактериальный вагиноз</strong>
                </p>
                <p>
                  Почти в 90% случаев патологических выделений у женщин диагностируется бактериальный вагиноз. Почему возникает это заболевание, и как его лечить?
                </p>
                <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/" className="btn btn-green" target="_blank" rel="noreferrer">
                  Подробнее
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-310x235/bakterialnyj-vaginoz-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-310x235/bakterialnyj-vaginoz-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="/images/encyclopedia/bakterialnyj-vaginoz.png"
                  alt="Бактериальный вагиноз - превью"
                />
              </picture>
            </div>

            <h4 id="bakterialnyy-vaginoz">Бактериальный вагиноз</h4>
            <p>
              <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/" title="Бактериальный вагиноз">
                Бактериальный вагиноз
              </a>
              – заболевание, которое также часто проявляется жжением во влагалище. Причиной бактериального вагиноза, как и аэробного вагинита, является избыточный рост определённых бактерий, в норме содержащихся во влагалище. Однако, важно отметить, что при бактериальном вагинозе снижается одновременно с этим количеством «хороших» и «полезных» бактерий – лактобактерий. При данном заболевании в микробиологических анализах можно часто увидеть большое количество Gardnerella vaginalis
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              . Это наиболее часто происходит из-за снижения иммунитета, обострения хронических заболеваний, неправильном соблюдении правил интимной гигиены. Таким образом, данное заболевание в целом характеризуется нарушением соотношения нормальной микрофлоры и требует своевременного лечения, что позволяет значительно снизить риски осложнений.
            </p>
            <div className="green">
              <p>
                <strong>Симптомы</strong>, которые часто сочетаются со жжением во влагалище при бактериальном вагинозе: выделения с запахом тухлой рыбы, которые могут усиливаться после подмывания щелочными моющими средствами (гели для душа, мыло) или после полового акта
                <sup>
                  <a href="#literatura-7">8</a>
                </sup>
                . Другие проявления (зуд, болезненность и жжение) появляются нечасто.
              </p>
            </div>

            <h4 id="molochnica">Молочница</h4>
            <p>
              Вульвовагинальный кандидоз, как и предыдущие описанные заболевания, является следствием нарушения нормальной микрофлоры влагалища. Практически каждая женщина имела в своей жизни не менее одного эпизода молочницы. В данном случае причиной развития данного заболевания являются грибы рода Candida
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
              . Наиболее частым представителем здесь является Candida albicans. Реже причиной молочницы являются другие грибы из этого же рода (в 8—20% случаев) — C. glabrata, C. tropicalis, C. krusei
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
              . Как показывают исследования, наличие более редких разновидностей, по сравнению с C. albicans является неблагоприятным фактором для более тяжелого течения заболевания. Узнать точно, какая именно разновидность молочницы встречается у конкретного пациента без труда можно с помощью микробиологического исследования.
            </p>
            <div className="green">
              <p>
                <strong>Симптомы</strong>, которые часто сочетаются со жжением во влагалище при молочнице: выделения, похожие на творог, дискомфорт во время секса, иногда могут наблюдаться болезненные ощущения при мочеиспускании.
              </p>
            </div>

            <h4 id="atroficheskie-processy-vulvy-i-vlagalishcha">Атрофические процессы вульвы и влагалища</h4>
            <p>
              Жжение гениталий может быть обусловлено физиологическими причинами на фоне возрастных процессов – атрофии.
            </p>
            <p>
              Чаще это проявляется в постменопаузе на фоне дефицита эстрогенов (определенный тип гормонов), что связано с «выключением» яичников. Аналогичные проявления могут встречаться и в молодом возрасте при нарушении функции яичников на фоне какого-то заболевания.
            </p>
            <p>
              При возрастных атрофических процессах в слизистой вульвы и влагалища вместе со жжением будет встречаться сухость, дискомфорт в области гениталий, приливы жара, ночная потливость, нарушение сна и иные симптомы
              <sup>
                <a href="#literatura-8">9</a>
              </sup>
              .
            </p>

            <h3 id="zhzhenie-vo-vlagalishche-vyzvannoe-allergicheskoy-reakciey">
              Жжение во влагалище, вызванное аллергической реакцией
            </h3>
            <p>
              Нередко неприятный симптом в области гениталий может спровоцировать аллергическая реакция на средства, используемые для интимной гигиены, лубриканты или вагинальные лекарственные препараты.
            </p>

            <h3 id="zhzhenie-vo-vlagalishche-vyzvannoe-infekciyami-peredavaemymi-polovym-putem-ippp">
              Жжение во влагалище, вызванное инфекциями, передаваемыми половым путем (ИППП)
            </h3>
            <p>
              Важно помнить, что точную причину жжения во влагалище может установить только врач на основании осмотра и лабораторной диагностики!
            </p>

            <h4 id="hlamidiynaya-infekciya-hlamidioz">Хламидийная инфекция (хламидиоз)</h4>
            <p>
              Возбудителем данной инфекции является Chlamidia trahomatis – микроорганизм, который занимает промежуточное положение между бактериями и вирусами, то есть обладает свойствами обоих
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
              . Чаще хламидиозом страдают люди моложе 25 лет
              <sup>
                <a href="#literatura-3">4</a>
              </sup>
              . Факторами риска являются: частая смена половых партнеров, случайные половые связи без использования презерватива. У 70–95% женщин заболевание может протекать без каких-либо симптомов. Реже наблюдаются слизистые выделения с примесью гноя, болезненный секс, зуд, жжение гениталий, болезненное мочеиспускание, болевые ощущения внизу живота и нарушение менструального цикла
              <sup>
                <a href="#literatura-3">4</a>
              </sup>
              .
            </p>

            <h4 id="gonoreya">Гонорея</h4>
            <p>
              Гонорея, провоцируемая гонококками (Neisseria gonorrhoeae), является одной из самых распространенных инфекций, передаваемых половым путем. Каждый год в мире регистрируется порядка 60 миллионов случаев гонореи
              <sup>
                <a href="#literatura-4">5</a>
              </sup>
              . Характерные жалобы: гноевидные выделения, зуд, жжение гениталий, боль во время секса, болезненность при мочеиспускании, ноющие боли внизу живота
              <sup>
                <a href="#literatura-4">5</a>
              </sup>
              .
            </p>

            <h4 id="trihomoniaz">Трихомониаз</h4>
            <p>
              Трихомониаз – инфекция, вызываемая паразитом (Trihomonas Vaginalis)
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
              . Каждый год регистрируется до 250 миллионов человек, заболевших трихомониазом
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
              . Обычно заболевших беспокоят выделения из половых путей серо-желтого или иногда зеленоватого цвета (выделения могут быть пенящиеся) с неприятным запахом, зуд и жжение гениталий, боль во время мочеиспускания и при половых контактах, дискомфорт внизу живота
              <sup>
                <a href="#literatura-5">6</a>
              </sup>
              .
            </p>

            <h4 id="mikoplazmennaya-infekciya">Микоплазменная инфекция</h4>
            <p>
              Mycoplasma genitalium – патоген, вызывающий воспаление уретры (мочеиспускательного канала), шейки матки, а также других органов малого таза. Микоплазменная инфекция, по данным литературы, составляет от 10% до 45% от всех воспалительных гинекологических заболеваний. Половина инфицированных женщин не имеет никаких жалоб
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              . Среди жалоб выделяют: выделения слизисто-гнойного характера, зуд, жжение во влагалище и на коже промежности (нечасто), болезненность, неприятные ощущения при мочеиспускании.
            </p>

            <h4 id="genitalnyy-gerpes">Генитальный герпес</h4>
            <p>
              Генитальный герпес – хроническое вирусное заболевание. Возбудителем является вирус простого герпеса II и/или I типа. В 70% случаев заражение происходит от полового партнера, имеющего бессимптомное течение заболевания, в чем кроется основное коварство генитального герпеса
              <sup>
                <a href="#literatura-6">7</a>
              </sup>
              . Основной путь передачи инфекции – половой. Выделение вирусов герпеса может происходить и при отсутствии видимых элементов, например в области шейки матки, уретры или полости рта
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
              . Герпес способен поражать уретру, влагалище, шейку матки, мочевой пузырь и прямую кишку.
            </p>

            <h4 id="chto-vazhno-znat-pro-genitalnyy-gerpes">Что важно знать про генитальный герпес?</h4>
            <p>
              Первичный эпизод характеризуется яркими клиническими проявлениями, нередко с симптомами интоксикации (недомоганием и повышением температуры тела до 38 °C). Высыпания на коже и слизистых типичны, они выглядят как элементы с прозрачным содержимым (пузырьками). После вскрытия пузырьков образуются маленькие язвочки, эрозии небольшого размера.
            </p>
            <p>
              Сыпь при генитальном герпесе может сопровождаться болью, жжением, и дискомфортом в том месте, где она появилась
              <sup>
                <a href="#literatura-6">7</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1135/32a452bbaf2054d06d610e1d41bda606d7ee1f7e233aacdd02f2ede8b215e0ff-650x0/medical-kit-and-bandaid-509398-488-1-14-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1135/32a452bbaf2054d06d610e1d41bda606d7ee1f7e233aacdd02f2ede8b215e0ff-650x0/medical-kit-and-bandaid-509398-488-1-14-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/herpes.png"
                alt="Генитальный герпес"
              />
            </picture>

            <div className="green">
              <p>
                <strong>
                  Если женщина до появления жжения во влагалище имела случайные незащищенные половые контакты или сменила партнера, то необходимо пройти обследование у гинеколога, чтобы исключить инфекции, передаваемые половым путем.
                </strong>
              </p>
            </div>

            <h2 id="diagnostika-prichiny-zhzheniya-vo-vlagalishcha">Диагностика причины жжения во влагалища</h2>
            <p>
              При возникновении жжения половых органов, а также симптомов, включающих выделения из половых путей, дискомфорта, зуда, болезненности гениталий необходимо незамедлительно обратиться к врачу-гинекологу.
            </p>

            <div className="list-base">
              <p>На приеме доктор произведет забор мазков для исследования и выявления причины заболевания. Для диагностики могут использоваться следующие методы:</p>
              <ul>
                <li>
                  <strong>Микроскопический метод</strong>. Врач непосредственно под микроскопом устанавливает вид возбудителя заболевания.
                </li>
                <li>
                  <strong>Посев микроорганизмов</strong> вагинального мазка на специальные питательные среды для определения возбудителя и его чувствительности к антимикотикам (противогрибковым препаратам).
                </li>
                <li>
                  <strong>ПЦР диагностика</strong> (полимеразная цепная реакция) – современный метод лабораторной идентификации микроорганизмов по молекуле ДНК.
                </li>
              </ul>
            </div>

            <h2 id="lechenie-zhzheniya-vo-vlagalishche">Лечение жжения во влагалище</h2>
            <div className="green">
              <p>
                <strong>
                  Лечение жжения во влагалище должно быть назначено врачом после обследования и выявления его точной причины.
                </strong>
              </p>
            </div>

            <p>
              Как правило, врач-гинеколог назначает местные препараты в виде свечей, мазей, вагинальных таблеток. При определенных ситуациях (например, при подтверждении инфекции, передаваемой половым путем) прописываются препараты системного действия, принимаемые перорально (через рот).
            </p>

            <div className="green">
              <p>
                <strong>Лечение инфекций, передаваемых половым путем, проводит врач-дерматовенеролог.</strong>
              </p>
            </div>

            <p>
              Местные средства для лечения воспалительных вагинальных заболеваний, которые могут сопровождаться жжением во влагалище, обладают рядом преимуществ за счет непосредственной близости к очагу инфекции и воспаления, а также ввиду отсутствия системных (влияющих на весь организм) побочных эффектов.
            </p>

            <h3 id="betadin-dlya-lecheniya-zhzheniya-vo-vlagalishche">Бетадин® для лечения жжения во влагалище</h3>

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
                Нередко в лечении воспалительных заболеваний вульвы и влагалища используются{' '}
                <a href="https://betadin.ru/encyclopedia/svechi-ot-molochnicy/">свечи</a> на основе{' '}
                <a href="https://betadin.ru/encyclopedia/povidon-jod/">повидона-йода</a> –{' '}
                <span style={{ color: '#0f780b' }}>
                  <strong>Бетадин®</strong>
                </span>
                <sup>
                  <a href="#literatura-9">10</a>
                </sup>
                . Действующее вещество препарата{' '}
                <span style={{ color: '#0f780b' }}>
                  <strong>Бетадин®</strong>
                </span>{' '}
                (активный <a href="https://betadin.ru/encyclopedia/jod/">йод</a>) способствует уничтожению грам-положительных и грам-отрицательных микроорганизмов, вирусов, простейших, грибов и спор. Ввиду данных особенностей{' '}
                <span style={{ color: '#0f780b' }}>
                  <strong>Бетадин®</strong>
                </span>{' '}
                подходит для лечения основных заболеваний влагалища, сопровождающихся жжением (в составе комплексной терапии или самостоятельно)
                <sup>
                  <a href="#literatura-9">10</a>
                </sup>
                .
              </p>

              <p>
                <strong>Показания для назначения свечей</strong>{' '}
                <span style={{ color: '#0f780b' }}>
                  <strong>Бетадин®</strong>
                </span>
                : острый или хронический <a href="https://betadin.ru/encyclopedia/vaginit/">вагинит</a> (воспаление слизистой влагалища), кандидоз (молочница) влагалища и вульвы, трихомониаз, инфекции влагалища после антибактериальной или гормональной терапии, а также в качестве профилактики перед операциями и манипуляциями в гинекологии.
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noreferrer"
                  href="/betadin-svechi-instruktsiya/"
                >
                  Инструкция
                </a>
              </p>
            </div>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1136/d0f06c09d0d370144d1ea31e2fa6b348362477322fe013b487229104d94ce2d0-650x0/medical-kit-and-bandaid-509398-488-1-15-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1136/d0f06c09d0d370144d1ea31e2fa6b348362477322fe013b487229104d94ce2d0-650x0/medical-kit-and-bandaid-509398-488-1-15-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/treatment.png"
                alt="Лечение вагинального жжения свечами"
              />
            </picture>

            <p>
              При неосложненном воспалении слизистой влагалища необходимо применять по одной вагинальной свече во влагалище 1 раз в день в течение 1 недели. При наличии тяжелых форм заболевания лечение можно продолжить еще в течение одной недели (суммарно 14 дней)
              <sup>
                <a href="#literatura-9">10</a>
              </sup>
              .
              <br />
              Необходимо помнить, что применение свечей{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>Бетадин®</strong>
              </mark>{' '}
              противопоказано в период вынашивания и кормления ребенка грудью. Другими ограничениями применения свечей{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>Бетадин®</strong>
              </mark>{' '}
              являются заболевания щитовидной железы и аллергические реакции на йод
              <sup>
                <a href="#literatura-9">10</a>
              </sup>
              .
            </p>

            <h2 id="profilaktika-poyavleniya-zhzheniya-vo-vlagalishche">
              Профилактика появления жжения во влагалище
            </h2>
            <div className="list-base">
              <ul>
                <li>Регулярное посещение гинеколога (при отсутствии жалоб 1 раз в год)</li>
                <li>Исключение самолечения</li>
                <li>Лечение антибактериальными препаратами только по назначению врача</li>
                <li>Использование барьерной контрацепции (презерватив)</li>
                <li>Избегание случайных половых связей и частой смены половых партнёров</li>
                <li>Укрепление общего иммунитета, контроль хронических заболеваний</li>
                <li>Правильная интимная гигиена (специальные средства с нейтральным или кислым pH)</li>
              </ul>
            </div>

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

            <h3 id="bespokoit-zhzhenie-bez-vydeleniy-iz-polovyh-putey-mozhet-li-eto-byt-simptomom-infekcii">
              Беспокоит жжение без выделений из половых путей. Может ли это быть симптомом инфекции?
            </h3>
            <p>
              Да, конечно. Многие инфекции, передаваемые половым путем, могут протекать бессимптомно или иметь подострое течение (проявляются только одним симптомом, например, жжением гениталий). Опасность заключается в том, что не вылеченная вовремя инфекция может начать распространяться, затронуть матку, маточные трубы, яичники, клетки органов малого таза. В долгосрочной перспективе существует опасность возникновения спаечного процесса в придатках матки, что может привести к бесплодию или внематочной беременности.
            </p>

            <h3 id="bespokoit-zhzhenie-v-promezhnosti-pri-otsutstvii-patologii-v-mazke-na-floru">
              Беспокоит жжение в промежности при отсутствии патологии в мазке на флору.
            </h3>
            <p>
              В данном случае необходимо повторно посетить врача-гинеколога для исключения инфекций, передаваемых половым путем, атрофических процессов слизистой влагалища и вульвы, аллергической реакции и других причин. Возможно провести более точную ПЦР-диагностику.
            </p>

            <h3 id="mozhno-li-vylechit-zud-i-zhzhenie-vo-vlagalishche-v-domashnih-usloviyah">
              Можно ли вылечить зуд и жжение во влагалище в домашних условиях?
            </h3>
            <p>
              Заниматься самолечением нельзя, иначе процесс может распространиться восходящим путем на другие органы малого таза, что чревато возникновением осложнений, переходом заболевания в хроническую стадию.
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
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/vaginalnye-vydeleniya.png"
                        alt="Вагинальные выделения - первью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Вагинальные выделения</strong>
                    </p>
                    <p>Какие бывают вагинальные выделения, и как отличить нормальные бели от патологических?</p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/vaginalnye-vydeleniya/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide swiper-slide-next">
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
                        src="/images/encyclopedia/lechenie-vaginita.png"
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

                <div className="swiper-slide">
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
                        src="/images/encyclopedia/bakterialnyj-vaginoz.png"
                        alt="Бактериальный вагиноз - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Бактериальный вагиноз</strong>
                    </p>
                    <p>
                      Почти в 90% случаев патологических выделений у женщин диагностируется бактериальный вагиноз. Почему возникает это заболевание, и как его лечить?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/">Подробнее</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="literatura">Список литературы</h2>
            <ol className="literature">
              <li id="literatura-0">
                Савельева Г. М., Сухих Г. Т., Серов В. Н., Радзинский В. Е Национальное руководство «Гинекология» //
                ГЭОТАР-Медиа 2020, Москва.
              </li>
              <li id="literatura-1">
                Клинические рекомендации «Воспалительные заболевания шейки матки, влагалища, вульвы»// РОАГ, 2021.
              </li>
              <li id="literatura-2">
                Петерсен Э.Э. Инфекции в акушерстве и гинекологии// МЕДпресс информ, Москва 2007.
              </li>
              <li id="literatura-3">
                Клинические рекомендации «Хламидийная инфекция» от 17.02.2021.
              </li>
              <li id="literatura-4">
                Клинические рекомендации «Гонококковая инфекция» 2021.
              </li>
              <li id="literatura-5">
                Клинические рекомендации «Урогенитальный трихомониаз» 2021.
              </li>
              <li id="literatura-6">
                Клинические рекомендации «Аногенитальная герпетическая вирусная инфекция» 2021.
              </li>
              <li id="literatura-7">
                Клинические рекомендации по диагностике и лечению заболеваний, сопровождающихся патологическими
                выделениями из половых путей женщин, 2019.
              </li>
              <li id="literatura-8">
                Клинические рекомендации «Менопауза и климактерическое состояние у женщины»// РОАГ 2021.
              </li>
              <li id="literatura-9">
                Инструкция по медицинскому применению Бетадин®, суппозитории, РН: П№015282/01.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
