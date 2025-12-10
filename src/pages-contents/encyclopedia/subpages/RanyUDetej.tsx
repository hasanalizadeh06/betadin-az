'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function RanyUDetej() {
  const [isScrollTracked, setIsScrollTracked] = useState(false);

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
    setIsScrollTracked(true);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
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
                  <span property="name">Раны, укусы и ссадины у детей</span>
                </Link>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">Раны, укусы и ссадины у детей</span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>

          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                <h1 className="page-header-title-text">
                  Раны, укусы и ссадины у детей: обработка и уход
                </h1>
                <picture>
                  <source
                    srcSet="/icon-230x224.webp 1x"
                    type="image/webp"
                  />
                  <Image
                    height={112}
                    width={115}
                    src="/icon.png"
                    alt="картинка у заголовка"
                  />
                </picture>
              </div>
              <h2 className="page-header-subtitle">Какие раны бывают у детей</h2>
              <div className="page-header-body">
                <p>
                  Ввиду повышенной активности и любознательности дети нередко получают травмы.{' '}
                  <strong>Раны</strong> возникают в результате нарушения целостности кожного покрова,
                  слизистых оболочек, подкожной жировой клетчатки, мышц и других частей организма.
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li>
                  <a href="#pervaya-pomoshch-rebenku-pri-poverhnostnyh-ranah">
                    Первая помощь ребенку
                  </a>
                </li>
                <li>
                  <a href="#rastvor-betadin-povidon-yod-dlya-dezinfekcii-detskih-ran">
                    Средства для дезинфекции ран и укусов
                  </a>
                </li>
                <li>
                  <a href="#process-zazhivleniya-detskih-ran">Заживление детских ран и укусов</a>
                </li>
              </ul>
            </div>

            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source
                    srcSet="/frame-655-1-1460x1230.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    fetchPriority="high"
                    height={615}
                    width={730}
                    src="/frame-655-1-730x615.webp"
                    alt="Раны у детей"
                  />
                </picture>
              </div>
            </div>
          </div>

          <nav className="nav-content">
            <ul>
              <li>
                <a href="#harakternye-priznaki-ran">Характерные признаки ран</a>
              </li>
              <li>
                <a href="#pervaya-pomoshch-rebenku-pri-poverhnostnyh-ranah">
                  Первая помощь ребенку при поверхностных ранах
                </a>
              </li>
              <li>
                <a href="#process-zazhivleniya-detskih-ran">Процесс заживления детских ран</a>
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
            <a href="#harakternye-priznaki-ran">Характерные признаки ран</a>
          </li>
          <li>
            <a href="#pervaya-pomoshch-rebenku-pri-poverhnostnyh-ranah">
              Первая помощь ребенку при поверхностных ранах
            </a>
          </li>
          <li>
            <a href="#process-zazhivleniya-detskih-ran">Процесс заживления детских ран</a>
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
        <div className="new-disclaimer">Информация в статье не&nbsp;заменяет консультацию врача</div>
      </div>

      <div className="page-content-wrapper">
        <div className="container container-middle page-content">
          <p>
            Раны, при которых происходит повреждение только верхнего слоя кожи, называют{' '}
            <strong>ссадинами</strong>
            <sup>
              <a href="#literatura-0">1</a>
            </sup>
            .
          </p>

          <p>
            <strong>Виды ран</strong>
          </p>

          <div className="exlude-turbo">
            <picture className="banner-betadin banner-circle">
              <source
                srcSet="/circle-1006x1010.webp 2x"
                type="image/webp"
              />
              <Image
                height={505}
                width={503}
                src="/circle-503x505.webp"
                alt="Декоративные элементы"
              />
            </picture>
          </div>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-4-1300x300.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={150}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-4-650x150.webp"
              alt="Виды ран"
            />
          </picture>

          <picture className="img-normal">
            <source
              srcSet="/medical-kit-and-bandaid-509398-488-1-3-1300x650.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={325}
              width={650}
              src="/medical-kit-and-bandaid-509398-488-1-3-650x325.webp"
              alt="Виды ран2"
            />
          </picture>

          <p>
            Раны у детей могут быть незначительными (царапины, ссадины, небольшие{' '}
            <Link href="/encyclopedia/porezy/" title="7. Порезы">
              порезы
            </Link>
            ) или тяжелыми, приводить к угрожающим для жизни состояниям: обильной кровопотери,
            шоковому состоянию.
          </p>

          <p>
            Ввиду высокого риска развития раневой инфекции необходимо с особой ответственностью
            подходить к <strong>укушенным ранам</strong>. Укусы бродячих кошек, собак или диких
            животных могут привести к тяжелейшему вирусному осложнению – бешенству. Поэтому при
            подозрении бешенства у животного или возможном риске попадания слюны больного животного
            в свежую или уже имеющуюся рану требуется доставить пострадавшего ребенка в
            медицинское учреждение для введения антирабической сыворотки (против бешенства).
          </p>

          <p>
            Укусы змей или ядовитых насекомых также опасны, требуется незамедлительное обращение
            за медицинской помощью. Такие раны называются в медицине <strong>отравленными</strong>
            <sup>
              <a href="#literatura-0">1</a>
            </sup>
            .
          </p>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-12-1300x650.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={325}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-12-650x325.webp"
              alt="Первая помощь если ребенка укусил другой ребенок"
            />
          </picture>

          <p>
            <strong>Резаные раны</strong> (порезы) наносятся острыми режущими предметами. Края
            данной раны ровные, раневой канал открыт. Резанные раны при условии плотного смыкания
            краёв хорошо заживают. Именно поэтому при хирургическом лечении любого вида ран врачи
            стремятся создать ровные резанные края.
          </p>

          <p>
            <strong>Рубленые раны</strong> – результат травмы тяжелым острым предметом: топором,
            лопатой и прочими предметами. Они достаточно глубокие с высоким риском повреждения
            крупных кровеносных сосудов и внутренних органов. Рубленная рана характеризуется
            сильной болью, значительной кровопотерей и выражено открыта.
          </p>

          <p>
            <strong>Ушибленно-рваные раны</strong> могут быть следствием травмы при падении или
            удара тяжелым тупым предметом. При данном виде травмы края раны неровные.
          </p>

          <p>
            Раны могут быть <strong>колотыми и колото-резаными</strong>. Такие раны часто бывают
            проникающими и осложненными.
          </p>

          <p>
            При развитии раневой инфекции, кроме симптомов местного воспаления, появляются гнойные
            выделения, а также могут появляться общее симптомы недомогания: слабость, повышение
            температуры тела, озноб, снижение аппетита, учащенное сердцебиение.
          </p>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-11-1300x300.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={150}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-11-650x150.webp"
              alt="Первая помощь если ребенка укусил другой ребенок"
            />
          </picture>

          <div className="block-with-image">
            <div className="block-with-image__green">
              <p>
                <strong>Раны с инфекцией</strong>
              </p>
              <p>
                Далеко не все ссадины и порезы заживают быстро и без осложнений. Как лечить
                инфицированные раны?
              </p>
              <Link href="/encyclopedia/rany-s-infekciej/" className="btn btn-green" target="_blank">
                Подробнее
              </Link>
            </div>
            <picture>
              <source
                srcSet="/rany-s-infekcziej-prevyu-620x420.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={210}
                width={310}
                src="/rany-s-infekcziej-prevyu-310x210.webp"
                alt="Раны с инфекцией-превью"
              />
            </picture>
          </div>

          <h2 className="h2" id="harakternye-priznaki-ran">
            Характерные признаки ран
          </h2>

          <p>
            Для любого вида раны характерны: <strong>боль</strong>, видимое <strong>открытие</strong>{' '}
            раневого канала, <strong>кровотечение</strong>.
          </p>

          <p>
            Интенсивность болевых ощущений зависит от количества и степени повреждения нервных
            волокон. При поверхностной ране боль возникает только в момент получения травмы и
            достаточно быстро проходит. Если боль сильная и не исчезает после травмы длительное
            время, то это связано с невидимым глазу повреждением, и как следствие, избыточным
            раздражением нервных рецепторов во внутренних слоях тканей.
          </p>

          <p>
            Кровотечение в результате ранения может быть наружным и внутренним (кровь изливается в
            ткани, полости тела). Объем и продолжительность кровотечения зависит от нескольких
            факторов – площади, глубины поражения, а также состояния системы организма, отвечающей
            за свертывание крови.
          </p>

          <div className="list-base">
            <p>
              <strong>К признакам тяжелых ран относят:</strong>
            </p>
            <ul>
              <li>
                шоковое состояние, дефицит кислорода с проявлением одышки, что в итоге приводит к
                нарушению сознания
              </li>
              <li>болевой шок</li>
              <li>инфицирование раны с последующими осложнениями</li>
            </ul>
          </div>

          <div className="green">
            <p>
              На <strong>инфицирование</strong> раны будет указывать нарастающая{' '}
              <strong>пульсирующая боль, припухлость, гнойное отделяемое</strong>. Кожа травмированной
              области становится горячей на ощупь.
            </p>
          </div>

          <div className="iframe">
            <div className="bg_default bg_green"></div>
            <div className="h3 h3_green iframe-title">
              Про алгоритм обработки ран у ребёнка смотрите в коротком видео:
            </div>
            <div className="iframe-container">
              <iframe
                className="lazyloaded"
                src="https://rutube.ru/play/embed/b4d481279bdfcbafbb01e36ea31c0c4b/?p=aVSDYD--vLEfYAnNlSgG-Q"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="iframe_desc">
              Из видео вы узнаете, какими антисептиками можно продезинфицировать рану без
              дискомфортных ощущений у ребенка.
            </div>
          </div>

          <h2 className="h2" id="pervaya-pomoshch-rebenku-pri-poverhnostnyh-ranah">
            Первая помощь ребенку при поверхностных ранах
          </h2>

          <p>
            При порезах, ссадинах, царапинах основная задача заключается в скорейшем заживлении
            дефекта и предотвращении заражения раны болезнетворными микроорганизмами.
          </p>

          <p>
            <strong>Последовательность обработки детских поверхностных ран</strong>
          </p>

          <div className="big">
            <div className="line">
              <div>
                <p>
                  <strong>Промывание</strong>
                </p>
                <ol>
                  <li>Теплая вода + мыло</li>
                  <li>Раствор хлоргексидина/фурацилина/перекиси водорода 3%</li>
                  <li>Просушить рану: промакнуть салфеткой</li>
                </ol>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Дезинфекция</strong>
                </p>
                <p>
                  Йод и зеленка вызывают жжение и боль.
                  <br />
                  <strong>
                    Раствор <span style={{ color: '#0f780b' }}>Бетадин®:</span>
                  </strong>
                </p>
                <ul>
                  <li>не больно</li>
                  <li>не щиплет</li>
                  <li>не жжет</li>
                  <li>стойко не окрашивает кожу</li>
                </ul>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Наложение повязки / пластыря</strong>
                </p>
                <p>Пластырь, повязка – микробы не попадают.</p>
                <p>
                  <br />
                  Без пластыря – рана быстрее заживает, но могут попасть микробы.
                </p>
              </div>
            </div>
          </div>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-3-3-1300x300.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={150}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-3-3-650x150.webp"
              alt="Последовательность обработки детских поверхностных ран"
            />
          </picture>

          <h3 className="h3" id="rastvor-betadin-povidon-yod-dlya-dezinfekcii-detskih-ran">
            Раствор Бетадин® (повидон-йод) для дезинфекции детских ран
          </h3>

          <div className="product-block">
            <div className="banner-product-img">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/banner-betadin-927x916.webp 2x"
                  type="image/webp"
                />
                <Image
                  height={916}
                  width={927}
                  src="/banner-betadin-927x916.webp"
                  alt="Бетадин"
                />
              </picture>
            </div>
            <p>Раствор на основе повидон-йода (Бетадин®):</p>
            <ul>
              <li>обладает антисептическим и дезинфицирующим действием</li>
              <li>способствует уничтожению бактерий, вирусов, простейших микроорганизмов, грибковой инфекции</li>
              <li>при наружном и местном использовании практически не всасывается в кровоток</li>
            </ul>
            <p className="buttons">
              <Link
                className="btn btn-green btn-green-instruction"
                href="/betadin-rastvor-instruktsiya/"
              >
                Инструкция
              </Link>
            </p>
          </div>

          <div className="green">
            <p>
              Для дезинфекции ран у детей можно использовать раствор{' '}
              <Link href="/encyclopedia/povidon-jod/">повидон-йода</Link> –{' '}
              <strong>
                <span style={{ color: '#0f780b' }}>Бетадин®</span>
              </strong>
              . <Link href="/encyclopedia/jod/">Йод</Link> в данном растворе входит в специальный
              комплекс. За счёт постепенного высвобождения йода из комплекса продлевается его
              антимикробная активность, йод соединяется с белками микроорганизмов и способствует их
              гибели
              <sup>
                <a href="#literatura-5">6</a>
              </sup>
              .
            </p>
          </div>

          <p>
            Раствор <strong>
              <span style={{ color: '#0f780b' }}>Бетадин®</span>
            </strong>{' '}
            не содержит спирт, поэтому препарат не щиплет и не жжет кожу даже свежей раны.
          </p>

          <p>
            Препарат активен в отношении большинства возбудителей раневой инфекции. Оказывает
            бактерицидное действие на грамположительные и грамотрицательные бактерии. Активен в
            отношении грибов, вирусов, простейших и спор микроорганизмов
            <sup>
              <a href="#literatura-6">7</a>
            </sup>
            . Для обработки ран и ссадин можно использовать 10% неразбавленный раствор{' '}
            <strong>
              <span style={{ color: '#0f780b' }}>Бетадин®</span>
            </strong>
            <sup>
              <a href="#literatura-1">2</a>
            </sup>
            .
          </p>

          <div className="green">
            <p>
              <strong>
                Меры предосторожности и противопоказания к использованию{' '}
                <span style={{ color: '#0f780b' }}>Бетадин®</span> у детей
              </strong>{' '}
              <br />
              Необходимо избегать попадания раствора <strong>
                <span style={{ color: '#0f780b' }}>Бетадин®</span>
              </strong>{' '}
              в глаза! При возникновении зуда или покраснения кожи использование данного антисептика
              необходимо прекратить. Средство противопоказано к применению у новорожденных детей
              <sup>
                <a href="#literatura-1">2</a>
              </sup>{' '}
              (которым меньше 28 дней), а также пациентам с заболеваниями щитовидной железы.
            </p>
          </div>

          <h3 className="h3" id="promyvanie-rany-s-pomoshchyu-drugih-farmakologicheskih-sredstv">
            Промывание раны с помощью других фармакологических средств
          </h3>

          <p>
            Раневой канал можно промыть раствором хлоргексидина, фурацилина или перекиси водорода 3%
            (использование перекиси водорода способствует удлинению сроков заживления раны
            <sup>
              <a href="#literatura-8">8</a>
            </sup>
            <sup>
              <a href="#literatura-8">9</a>
            </sup>
            ). Если нет доступа к медикаментам, можно использовать чистую охлажденную кипяченую воду.
          </p>

          <h3 className="h3" id="nalozhenie-povyazki-posle-obrabotki-rany">
            Наложение повязки после обработки раны
          </h3>

          <p>
            После обработки раны накладывают чистую повязку или медицинский пластырь, защищающий
            открытую ранку от <Link href="/encyclopedia/rany-s-infekciej/">инфицирования</Link> опасными
            микроорганизмами. Повязки необходимо своевременно заменять на чистые.
          </p>

          <p>
            В течение всего периода заживления для уменьшения риска инфицирования возможно использовать{' '}
            <strong>
              мазь <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>Бетадин®</mark>
            </strong>
            . При наложении на инфицированные раны салфеток, пропитанных раствором или мазью{' '}
            <strong>
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>Бетадин®</mark>
            </strong>
            , в течение первых 5-7 суток наблюдается уменьшение отёка, количества гнойного
            отделяемого, отмечается уменьшение боли
            <sup>
              <a href="#literatura-2">3</a>
            </sup>
            . Для ускорения процесса заживления мазь{' '}
            <strong>
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>Бетадин®</mark>
            </strong>{' '}
            наносят на раневую поверхность 2-3 раза в день тонким слоем, возможно использовать под
            повязку
            <sup>
              <a href="#literatura-1">2</a>
            </sup>
            .
          </p>

          <div className="green">
            <p>
              <strong>
                При тяжелых ранах, кровотечении, загрязнении места ранения землей или другим
                инородными частицами рекомендовано <strong>незамедлительно обратиться к врачу</strong>
                .
              </strong>
            </p>
          </div>

          <h2 className="h2" id="process-zazhivleniya-detskih-ran">
            Процесс заживления детских ран
          </h2>

          <div className="list-base">
            <p>
              <strong>Заживление ран происходит поэтапно</strong>
              <sup>
                <a href="#literatura-4">4</a>
              </sup>
              :
            </p>
            <ul>
              <li>Фаза воспаления</li>
              <li>Фаза регенерации</li>
              <li>Фаза созревания</li>
            </ul>
          </div>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-3-4-1300x300.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={150}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-3-4-650x150.webp"
              alt="Процесс заживления детских ран"
            />
          </picture>

          <h3 className="h3" id="i-faza-vospaleniya">
            I Фаза воспаления
          </h3>

          <p>
            После ранения в область повреждения поступает кровь, через 5-10 мин сосуды сужаются,
            происходит образование кровяного сгустка и остановка кровотечения. В первые 72 часа
            после ранения ввиду повышенной сосудистой проницаемости появляется покраснение,
            отечность, болезненность, несколько повышается температура тканей, окружающих
            поврежденный участок.
          </p>

          <p>
            В течение всего этого времени в рану устремляются особые защитные иммунные клетки –
            лейкоциты, разрушающие впоследствии бактерии. Формируется корочка. При отсутствии
            инфекции количество лейкоцитов в ране уменьшается. Происходит процесс формирования новых
            сосудов взамен поврежденных ранее, а затем образовываются участки новой ткани.
          </p>

          <h3 className="h3" id="ii-faza-regeneracii">
            II Фаза регенерации
          </h3>

          <p>
            Уменьшение отёка вокруг поврежденных тканей свидетельствует о начале второй фазы –
            заживления ран (регенерация).
          </p>

          <p>
            Фаза заживления раны длится обычно от 5 дней до 3 недель. На ряду с образованием и
            ростом новых сосудов активизируется синтез коллагена, «строительного элемента» для
            множества тканей нашего организма. Наступление этого этапа видно невооруженным взглядом
            – края раны стягиваются друг к другу. В зависимости от локализации травмы скорость
            заживления будет отличаться
            <sup>
              <a href="#literatura-4">5</a>
            </sup>
            . На подвижных участках тела и в области суставов заживление происходит медленнее. Для
            уменьшения риска расхождения краёв раны после ушивание краев раны существуют
            ориентировочные сроки снятия швов. Например, швы на коже лица и шеи снимают через 2-5
            дней, швы на стопе – через две недели.
          </p>

          <h3 className="h3" id="iii-faza-sozrevaniya">
            III Фаза созревания
          </h3>

          <p>
            В эту фазу происходит созревание рубцовой ткани. В течение последующих 3 месяцев рубец
            светлеет, становится более мягким и может внешне не отличаться от соседних, не
            пострадавших участков кожи.
          </p>

          <div className="exlude-turbo">
            <picture className="banner-betadin banner-quastion">
              <source
                srcSet="/quastion-1115x1084.webp 2x"
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

          <h2 className="h2" id="chasto-zadavaemye-voprosy">
            Часто задаваемые вопросы
          </h2>

          <h3 className="h3" id="posle-zazhivleniya-rany-ostalsya-obemnyy-nekrasivyy-rubec-kak-uluchshit-vneshniy-vid">
            После заживления раны остался объемный некрасивый рубец, как улучшить внешний вид?
          </h3>

          <p>
            Со временем рубцы становятся мягче и уплощаются. Если этого не происходит, возможно,
            сформировался гипертрофический или келоидный рубец – патологическое разрастание грубой
            соединительной ткани. Лечением этих явлений занимается врач дерматолог-косметолог.
            Назначают специальные средства на основе силикона, внутриочаговые инъекции
            противовоспалительных гормонов, иногда требуется хирургическое иссечение.
          </p>

          <h3 className="h3" id="kak-dolgo-sohranyaetsya-bol-v-oblasti-rany">
            Как долго сохраняется боль в области раны?
          </h3>

          <p>
            Длительность болезненных ощущений зависит от характера и объема повреждений. В течение
            первых 5 дней болезненные ощущения должны постепенно уменьшаться. Если этого не
            происходит, необходимо обратиться к врачу, возможно, произошло нагноение раны.
          </p>

          <h3 className="h3" id="skolko-dney-nuzhno-obrabatyvat-ranu-antiseptikom">
            Сколько дней нужно обрабатывать рану антисептиком?
          </h3>

          <p>По уходу за операционной раной нужно соблюдать рекомендации лечащего врача.</p>

          <p>
            При обеззараживании мелких бытовых ран, обработку продолжают до формирования корочки
            (обычно 5-7 дней). Затем антисептическую обработку можно не проводить, так корочка
            защищает рану от инфицирования. Главное не допускать преждевременное отхождение корочки.
          </p>

          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">Мошкова Елена Михайловна</p>
              <div className="autor-subtitle"></div>
              <p className="autor-footer">Автор статьи</p>
            </div>
            <picture>
              <source
                srcSet="/moshkova-novyj-406x406.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={203}
                width={203}
                src="/moshkova-novyj-203x203.webp"
                alt="Мошкова Елена Михайловна"
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
                      srcSet="/rany-s-infekcziej-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      loading="lazy"
                      height={166}
                      width={246}
                      src="/rany-s-infekcziej-prevyu-246x166.webp"
                      alt="Раны с инфекцией-превью"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Раны с инфекцией</strong>
                  </p>
                  <p>
                    Далеко не все ссадины и порезы заживают быстро и без осложнений. Как лечить
                    инфицированные раны?
                  </p>
                  <p className="slide-more">
                    <Link href="/encyclopedia/rany-s-infekciej/">Подробнее</Link>
                  </p>
                </div>
              </div>

              <div className="swiper-slide swiper-slide-next">
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="/povidon-jod-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      loading="lazy"
                      height={166}
                      width={246}
                      src="/povidon-jod-prevyu-246x166.webp"
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
                    <Link href="/encyclopedia/povidon-jod/">Подробнее</Link>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="/chem-obrabotat-ranu-rebenku-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      loading="lazy"
                      height={166}
                      width={246}
                      src="/chem-obrabotat-ranu-rebenku-prevyu-246x166.webp"
                      alt="Чем обработать рану ребенку-превью"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Чем обработать рану ребенку</strong>
                  </p>
                  <p>Выбираем безопасное эффективное средство для обработки детских ран.</p>
                  <p className="slide-more">
                    <Link href="/encyclopedia/chem-obrabotat-ranu-rebenku/">Подробнее</Link>
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
              Михайловича В.А., Мирошниченко А.Г. Руководство для врачей скорой медицинской помощи//
              4е издание//Издательство МАПО, 2007.
            </li>
            <li id="literatura-1">
              Инструкция по медицинскому применению ЛП Бетадин® (раствор, мазь), РУ П№015282/03,
              П№015282/02.
            </li>
            <li id="literatura-2">
              РМЖ №29 от 23.12.2010 «Применение препарата Бетадин® в лечении инфицированных ран»
              авторы: В.В. Михальский, А.Е.Богданов, С.В.Жилина, А.И Привиденцев, А.И.Аникин, А.А.
              Ульянина.
            </li>
            <li id="literatura-3">
              Михальский В. В., Богданов А. Е., Жилина С. В., Привиденцев А. И., Аникин А. И.,
              Ульянина А. А.. Применение препарата Бетадин в лечении инфицированных ран// РМЖ №29 от
              23.12.2010.
            </li>
            <li id="literatura-4">
              Ключевский В.В. Хирургия повреждений//Руководство для фельдшеров, хирургов,
              травматологов// ОАО Рыбинский Дом печати 2004, Ярославль.
            </li>
            <li id="literatura-5">
              Bigliardi P.L. et al. Povidone iodine in wound healing: A review of current concepts and
              practices International Journal of Surgery 44, 2017.
            </li>
            <li id="literatura-6">
              Борисов И. В. Повидон-йод – новые возможности знакомого препарата//Раны и раневые
              инфекции 2021, 8 (3): 12-18.
            </li>
            <li id="literatura-7">
              Мартынов А.И., Кокорин В.А., Внутренняя медицина, основанная на доказательствах//
              Практическая Медицина, Краков, Польша 2018.
            </li>
            <li id="literatura-8">
              Трошин Н. Стоит ли так активно использовать 3% раствор перекиси водорода при
              хирургических вмешательствах? //РМЖ №25 от 15.12.2005.
            </li>
          </ol>
        </div>
      </div>
    </article>
  );
}
