
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function ObezzarazhivanieIDezinfekcziya() {
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
                  <span property="name">Обеззараживание и дезинфекция</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Обеззараживание и дезинфекция: правила, средства
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
                <h2 className="page-header-subtitle">Когда нужна дезинфекция?</h2>
                <div className="page-header-body">
                  <p>
                    Своевременное использование дезинфицирующих и антисептических средств
                    профилактирует и предотвращает распространение инфекционных заболеваний,
                    гнойных осложнений после хирургических вмешательств или бытовых травм.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#chem-mozhno-prodezinficirovat-ranu">Препараты для дезинфекции</a>
                  </li>
                  <li>
                    <a href="#pravila-dezinfekcii-chem-obrabotat-ssadinu">Правила дезинфекции ран</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/banner-1-730x615.webp 1x, /banner-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/banner-1-730x615.webp"
                      alt="Обеззараживание"
                      priority
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#chem-mozhno-prodezinficirovat-ranu">
                    Чем можно продезинфицировать рану?
                  </a>
                </li>
                <li>
                  <a href="#pravila-dezinfekcii-chem-obrabotat-ssadinu">
                    Правила дезинфекции, чем обработать ссадину?
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Ответы на вопросы</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Список литературы</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross">Содержание</div>
            </nav>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#chem-mozhno-prodezinficirovat-ranu">Чем можно продезинфицировать рану?</a>
            </li>
            <li>
              <a href="#pravila-dezinfekcii-chem-obrabotat-ssadinu">
                Правила дезинфекции, чем обработать ссадину?
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Ответы на вопросы</a>
            </li>
            <li>
              <a href="#spisok-literatury">Список литературы</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross">Содержание</div>
        </nav>

        {/* Disclaimer */}
        <div className="home-container">
          <div className="new-disclaimer">Информация в статье не заменяет консультацию врача</div>
        </div>

        {/* Main Content */}
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>Антисептики используются для обработки ран в бытовых условиях:</p>
            <div className="list-base">
              <ul>
                <li>при порезах</li>
                <li>ссадинах</li>
                <li>ожогах</li>
              </ul>
            </div>

            <p>В медицинских организациях антисептиками обеззараживают кожу пациентов во многих случаях:</p>
            <div className="list-base">
              <ul>
                <li>перед инъекциями и хирургическими вмешательствами</li>
                <li>в комплексной терапии ожогов и раневых поверхностей</li>
              </ul>
            </div>

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

            <p>Для санации ротовой полости при лечении:</p>
            <div className="list-base">
              <ul>
                <li>тонзиллитов</li>
                <li>фарингитов</li>
                <li>глосситов</li>
                <li>стоматитов</li>
                <li>гингивитов</li>
              </ul>
            </div>

            {/* Section: Чем можно продезинфицировать рану? */}
            <h2 className="h2" id="chem-mozhno-prodezinficirovat-ranu">
              Чем можно продезинфицировать рану?
            </h2>
            <p>
              Промывание раны чистой водой может снизить вероятность заражения, так как происходит
              механическое удаление бактерий с поверхности раны.
            </p>
            <p>
              Однако после этого всё равно желательно обработать рану одним из антисептических
              средств. Разберем подробнее некоторые из них.
            </p>

            {/* Subsection: Йодофоры */}
            <h3 className="h3">Йодофоры</h3>

            <h4 className="h4">Йод</h4>
            <p>
              Йод активен в отношении бактерий, грибов, вирусов, простейших. Обработку спиртовым
              раствором йода рекомендовано проводить по краям раны, исключая попадание внутрь
              раневого канала. При обеззараживании вызывает пощипывание.
            </p>

            <h4 className="h4">Повидон-йод</h4>
            <p>
              Препараты из этой группы используют как антисептические средства при обработке ран и
              швов, ожогов, для обеззараживания кожи и слизистых перед хирургическим вмешательством,
              грибковом поражении кожи
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  12
                </a>
              </sup>
              .
            </p>

            <div className="green">
              <p>
                <strong>Повидон-йод</strong> — современный антисептик, обладающий широким спектром
                антисептической активности. Не содержит спирта и при местном нанесении не вызывает
                жжения, легко смывается водой.
              </p>
            </div>

            <h4 className="h4">Раствор Бетадин® на основе повидон-йода</h4>
            <p>Раствор на основе повидон-йода (Бетадин®) используют для дезинфекции в различных целях.</p>

            <div className="list-base">
              <ul>
                <li>
                  <strong>С целью обеззараживания и лечения ссадин</strong>, порезов, язвенных
                  дефектов, ожоговых поверхностей, гнойничковых заболеваний кожи и слизистых
                  используют 10% неразбавленный раствор Бетадин®. Препарат наносят на раневую
                  поверхность 2 раза в день или применяют в качестве влажного компресса
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>
                  . Продолжительность лечения подбирается индивидуально.
                </li>
                <li>
                  <strong>При инфекционных заболеваниях слизистой оболочки рта</strong> раствор
                  Бетадин® можно рекомендовать в чистом виде или в разведении (в ½ стакана чистой
                  воды разводят 1 чайную ложку средства)
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>
                  . Назначают в качестве полосканий несколько раз в сутки.
                </li>
                <li>
                  <strong>Для использования в дренажных системах</strong> после оперативного
                  вмешательства 10% раствор (Бетадин®) повидон-йода используют в разведении 1:10
                  или 1:100
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>
                  .
                </li>
                <li>
                  <strong>Для обеззараживания кожи пациента перед медицинским вмешательством</strong>
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>{' '}
                  неразбавленный раствор повидон-йода (Бетадин®) наносят на кожу экспозицией в
                  течение 5 минут, затем, состав необходимо смыть. Манипуляцию повторяют дважды.
                </li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/betadin-upakovki-650x325.webp 1x, /betadin-upakovki-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/betadin-upakovki-650x325.webp"
                alt="Бетадин упаковки"
              />
            </picture>

            <h4 className="h4">Мазь Бетадин® для обеззараживания ран</h4>
            <p>
              Мазь Бетадин® с повидон-йодом в составе показана в стадию воспаления и заживления
              раневого процесса. За счет входящего в состав макрогола, препарат не только
              обеззараживает, но и «вытягивает» гной. Мазь Бетадин® тонким слоем распределяют по
              гнойной ране (без втирания) 2-3 раза в день
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  15
                </a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/betadin-maz-tyubik-scaled-650x325.webp 1x, /betadin-maz-tyubik-scaled-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/betadin-maz-tyubik-scaled-650x325.webp"
                alt="Бетадин мазь"
              />
            </picture>

            <p>
              При лечении инфицированных ран под салфетками, пропитанными раствором или мазью
              Бетадин®, в течение первых 5–7 суток уменьшается отёк и количество гнойного
              отделяемого, отмечается уменьшение боли
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  14
                </a>
              </sup>
              .
            </p>

            {/* Subsection: Окислители для дезинфекции ран */}
            <h3 className="h3">Окислители для дезинфекции ран</h3>

            <picture className="img-normal">
              <source
                srcSet="/od-a2-a5at4x-650x168.webp 1x, /od-a2-a5at4x-1300x335.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={168}
                width={650}
                src="/od-a2-a5at4x-650x168.webp"
                alt="Окислители"
              />
            </picture>

            <h4 className="h4">Перекись водорода</h4>
            <p>
              Раствор перекиси водорода 3% — бесцветная, прозрачная жидкость, не имеющая запаха
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  2
                </a>
              </sup>
              .
            </p>
            <p>
              При контакте раствора с раневой поверхностью высвобождается активный кислород,
              губительный для возбудителей гнилостной и анаэробной инфекции. К тому же образуется
              обильная пена, которая способствует удалению из раны гноя, крови, инородных тел.
              Раствор перекиси водорода может вызывать жжение и в некоторых случаях аллергические
              реакции (редко)
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  2
                </a>
              </sup>
              .
            </p>

            <h4 className="h4">Перманганат калия</h4>
            <p>
              Водный раствор перманганата калия («марганцовка»), жидкость малинового цвета разной
              степени прозрачности. Является мощным окислителем
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  3,4
                </a>
              </sup>
              , поэтому разрушает клетки микроорганизмов. В антисептических целях используют в
              концентрации от 0,1%–5%. Для прижигания и обеззараживания ран готовят 5% раствор (5 г
              сухого перманганата калия растворяют в 100 мл чистой воды, можно дистиллированной).
              Для промывания ран используют концентрацию 0,1%
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  5
                </a>
              </sup>
              .
            </p>

            <div className="green">
              <p>В настоящее время продажа калия перманганата в розничной аптечной сети ограничена.</p>
            </div>

            {/* Subsection: Раствор хлоргексидина */}
            <h3 className="h3">Раствор хлоргексидина</h3>
            <p>
              Раствор хлоргексидина биглюконата 0,05% активен в отношении бактерий и грибковой
              инфекции. Не вызывает жжения. Обычно хорошо переносится, но может вызывать
              аллергические реакции, повышать чувствительность кожи к солнечному свету. Согласно
              инструкции к препарату, используют с осторожностью в детском возрасте (до 18 лет)
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  9
                </a>
              </sup>
              .
            </p>

            {/* Subsection: Анилиновые красители */}
            <h3 className="h3">Анилиновые красители</h3>
            <div className="list-base">
              <ul>
                <li>Бриллиантовый зеленый («зелёнка»)</li>
                <li>Метилрозанилиния хлорид (метиленовый синий)</li>
                <li>Этакридин</li>
                <li>Метилтиония хлорид</li>
              </ul>
            </div>

            <p>
              Механизм действия анилиновых красителей заключается в реализации окислительно-восстановительных
              реакций, под действием которых нарушается жизнедеятельность вредоносных микроорганизмов.
              Средства из этой группы обладают и противовоспалительным эффектом.
            </p>
            <p>
              Анилиновые красители с целью обеззараживания используют в дерматологии, а также для
              обработки ранок, швов, ссадин.
            </p>
            <p>Пощипывают при контакте с поврежденной кожей. Окрашивают кожу в цвет красителя.</p>

            <div className="green">
              <p>
                Анилиновые антисептические средства нельзя использовать совместно с йодофорами,
                галогенами, щелочами.
              </p>
            </div>

            {/* Subsection: Обеззараживающие средства в форме порошка */}
            <h3 className="h3">Обеззараживающие средства в форме порошка</h3>
            <p>
              Сульфаниламид– противомикробный препарат в форме порошка для наружного использования
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  10
                </a>
              </sup>
              . Действует только на бактерии. Согласно инструкции, с осторожностью используют у детей
              до 3 лет.
            </p>
            <p>
              Комбинация бацитрацина и неомицина относится к группе комбинированных антибиотиков
              широкого спектра действия
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  11
                </a>
              </sup>
              . Противопоказан к использованию на обширных участках раневой поверхности, поскольку
              препарат всасывается в кровоток и может вызывать системные побочные действия, в том
              числе потерю слуха.
            </p>

            {/* Section: Правила дезинфекции */}
            <h2 className="h2" id="pravila-dezinfekcii-chem-obrabotat-ssadinu">
              Правила дезинфекции, чем обработать ссадину, ожог?
            </h2>
            <p>
              При воздействии на кожу высоких температур (прикосновение к раскаленной поверхности,
              контакте с открытым огнём, ошпаривании паром или кипятком) возникают термические
              ожоги. При контакте кислот и щелочей с незащищенной кожей и слизистыми – химический
              ожог. Ожоги 1 и 2 степеней можно лечить самостоятельно. (1 степени — отёк, покраснение
              с последующим шелушением, 2 степени — покраснение, отёчность, появление корочек и
              пузырей). Ожоги с омертвением тканей (3–4 степени) требуют нахождения в стационаре.
            </p>
            <p>
              Незначительные повреждения кожи (ссадины, царапины и неглубокие порезы) можно
              обработать самостоятельно, не обращаясь за медицинской помощью.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/illyustracziya-od-2at4x-650x150.webp 1x, /illyustracziya-od-2at4x-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="/illyustracziya-od-2at4x-650x150.webp"
                alt="Правила дезинфекции"
              />
            </picture>

            <p>
              Вне зависимости от характера травмы, полученной в быту, последующий обеззараживающий
              уход за раневой поверхностью сводится к промыванию, антисептической обработке и
              наложению повязки (при необходимости).
            </p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>Промывание.</strong> С этой целью используют антисептические растворы,
                  например, раствор 3% перекиси водорода, хлоргексидина биглюконата 0,05%. Это
                  очистит рану от крови и инородных частиц (например, частичек почвы, песка). При
                  отсутствии специальных растворов можно промыть чистой водой.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Антисептическая обработка.</strong> Рану можно обработать «зелёнкой», йодом,
                  повидон-йодом. Однако необходимо помнить, что некоторые из них окрашивают кожу и
                  вызывают пощипывание при контакте с раневой поверхностью. Это надо учитывать,
                  особенно если ссадина достаточно большая по площади или поранился ребенок.
                </p>
              </div>
            </div>

            <div className="green">
              <p>
                Современным средством для обработки различных раневых поверхностей является повидон-йод
                (<strong>Бетадин®</strong>). Он не вызывает стойкого окрашивания кожи и не жжёт даже
                при обработке обширных участков кожи.
              </p>
            </div>

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
                Раствор Бетадин® используется для обеззараживания раневых поверхностей (при ссадинах,
                ранах, порезах)
                <sup>
                  <a href="#spisok-literatury">12</a>
                </sup>
                :
              </p>
              <ul>
                <li>не щиплет кожу</li>
                <li>
                  активен в отношении бактерий, простейших микроорганизмов, грибковой инфекции,
                  действует на вирусы
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>
                </li>
                <li>
                  не вызывает привыкания у болезнетворных микроорганизмов
                  <sup>
                    <a href="#spisok-literatury">17</a>
                  </sup>
                </li>
              </ul>
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

            <div className="green">
              <p>
                Если рана кровит, дополнительно можно использовать гемостатическую губку, если в
                течение 10 мин кровотечение продолжается — необходимо обратиться за медицинской
                помощью.
              </p>
            </div>

            <p>
              <strong>Наложение повязки.</strong> После антисептической обработки, рану бинтуют или
              закрывают пластырем для защиты от загрязнений. Необходимо обращать внимание на
              инструкцию к обеззараживающему препарату — не все антисептики можно оставлять под
              повязкой. Например, мазь Бетадин® разрешено использовать под перевязочным материалом, в
              том числе окклюзионным
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  15
                </a>
              </sup>
              .
            </p>

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
              Ответы на вопросы
            </h2>

            <h3 className="h3">Как быстро необходимо обработать рану после травмы?</h3>
            <p>
              Порезы, ссадины, ожоги, полученные в быту, имеют высокий риск инфицирования. Это может
              привести к нагноению и заражению крови (сепсис). А загрязнение раны землёй,
              обсемененной Clostridium tetani может стать причиной развития столбняка. При этом сам
              возбудитель остается только в раневой поверхности, но вырабатываемый им экзотоксин
              проникает в кровь, лимфу, периневральные пространства — вызывает судороги, поражение
              мышц лица, шеи, глотки, затрудненное глотание. По статистике столбнячная палочка
              обнаруживается примерно у 30% травмированных
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  13
                </a>
              </sup>
              .
            </p>
            <p>
              Для профилактики гнойных осложнений, угрозы жизни и здоровья — обрабатывать бытовые
              раны необходимо как можно быстрее. Промыть рану от инородных частиц, крови раствором
              перекиси водорода, хлоргексидина. При отсутствии вышеупомянутых растворов можно
              использовать достаточное количество чистой воды. Затем необходимо обработать
              антисептиком широкого спектра действия. Раствор Бетадин® (повидон-йод) — современный
              препарат, уничтожающий бактерии, грибковую инфекцию, вирусы и простейшие микроорганизмы.
              Препарат не содержит спирт, поэтому не вызывает жжения, подходит для обработки обширных
              раневых поверхностей, включая ожоговые. Формирует защитную плёнку, предотвращающую от
              повторного обсеменения болезнетворными микроорганизмами. Разрешен к использованию у
              детей старше 1 месяца. При признаках нагноения также можно использовать мазь Бетадин®
              (повидон-йод), обладающую антисептическими свойствами.
            </p>

            <h3 className="h3">Как часто необходимо обрабатывать раны?</h3>
            <p>
              Использовать антисептические препараты для обработки раневой поверхности необходимо в
              соответствии с инструкцией к лекарственному средству или рекомендациями лечащего врача.
              Например, мазь Бетадин® (повидон-йод) рекомендуются наносить тонким слоем на пораженную
              поверхность 2-3 раза в день, можно оставлять под повязкой
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  12
                </a>
              </sup>
              . С целью обеззараживания и для промывания ран кожи и слизистых оболочек назначают 10%
              раствор Бетадин® (повидон-йод). Можно использовать в неразбавленном виде, в том числе в
              виде влажных компрессов. При использовании средства на раневой поверхности формируется
              пленка бурого цвета, бледнеющая по мере прекращения действия препарата.
            </p>

            <h3 className="h3">Нужно ли закрывать рану пластырем или повязкой?</h3>
            <p>
              Тактика лечения раневой поверхности зависит от её размера, локализации, стадии
              заживления. Незначительные дефекты можно вести открыто (без бинтования и наложения
              пластыря). Раны в области сгиба пальцев или других подвижных участках заживают
              медленнее, поэтому такие места лучше закрывать пластырем. При использовании
              перевязочного материала важно своевременно менять загрязненные бинты/пластыри. Бинтовать
              с осторожностью, не допуская нарушения микроциркуляции. Обращать внимание о возможности
              использования антисептических средств под повязки (не все антисептические препараты
              разрешено оставлять под повязкой).
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
                  srcSet="/moshkova-novyj-203x203.webp 1x, /moshkova-novyj-406x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={203}
                  width={203}
                  src="/moshkova-novyj-203x203.webp"
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
                        srcSet="/chem-obrabotat-ranu-rebenku-prevyu-246x166.webp 1x, /chem-obrabotat-ranu-rebenku-prevyu-491x332.webp 2x"
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
                      <a href="/encyclopedia/chem-obrabotat-ranu-rebenku/">Подробнее</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp 1x, /maz-dlya-zazhivleniya-ran-prevyu-491x332.webp 2x"
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
                        srcSet="/rany-s-infekcziej-prevyu-246x166.webp 1x, /rany-s-infekcziej-prevyu-491x332.webp 2x"
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
                      <a href="/encyclopedia/rany-s-infekciej/">Подробнее</a>
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
                Раны и раневая инфекция, Уральский Государственный Медицинский Университет МЗ РФ,
                2018 год.
              </li>
              <li id="literature-1">
                Реестр лекарственных средств, официальная инструкция раствора 3% раствора перекиси
                водорода.
              </li>
              <li id="literature-2">
                Рациональная фармакотерапия заболеваний кожи и инфекций, передаваемых половым путём.
                Под редакцией А.А.Кубановой, 2007 год.
              </li>
              <li id="literature-3">
                Реестр лекарственных средств, официальная инструкция раствора перманганат калия.
              </li>
              <li id="literature-4">
                Нартайлаков М.А., Мустафин А.Х., Чингизова Г.Н., Пантелеев В.С., Мушарапов Д.Р.,
                Гараев М.Р., Бакиров А.А., Грицаенко А.И., Кашаев М.Ш., Смакаев Р.У., Мингазов
                Р.С. Общая хирургия. ГБОУ высшего профессионального образования «Башкирский
                Государственный Медицинский Университ» МЗ РФ, 2015 г.
              </li>
              <li id="literature-5">
                Борисов И. В. Повидон-йод – новые возможности знакомого препарата // Раны и раневые
                инфекции 8 (3) 2021, стр. 12-18.
              </li>
              <li id="literature-6">
                Реестр лекарственных средств, официальная инструкция раствора Фукорцин.
              </li>
              <li id="literature-7">
                Реестр лекарственных средств, официальная инструкция препарата Димексид.
              </li>
              <li id="literature-8">
                Реестр лекарственных средств, официальная инструкция препарата хлоргексидин
                биглюконат.
              </li>
              <li id="literature-9">
                Реестр лекарственных средств, официальная инструкция препарата Ранавексим®.
              </li>
              <li id="literature-10">
                Реестр лекарственных средств, официальная инструкция препарата Банеоцин®.
              </li>
              <li id="literature-11">
                Инструкция по медицинскому применению Бетадин раствор. РН: П№015282/03.
              </li>
              <li id="literature-12">
                Лысенко В.И., Голянищев М.А., Карамушко И.В. Столбняк: коварство и рациональная
                терапия. Клинический случай успешного лечения. Харьковская медицинская акадкмия
                последипломного образования. КУЗ Харьковская городская клиническая больница №2.
              </li>
              <li id="literature-13">
                Михальский В.В., Богданов А.Е., Жилина С.В., Привиденцев А.И., Аникин А.И.,
                Ульянина А.А. РМЖ №29 от 23.12.2010 «Применение препарата Бетадин® в лечении
                инфицированных ран».
              </li>
              <li id="literature-14">
                Инструкция по медицинскому применению Бетадин мазь. РН: П№015282/02.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
