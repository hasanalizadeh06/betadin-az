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

export default function ObrabotkaShvovAz() {
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false);
  const [navTitleHidden, setNavTitleHidden] = useState<boolean>(true);
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

  useEffect(() => {
    const checkPosition = () => {
      if (typeof window === 'undefined') return;
      const threshold = 1000;
      const scrollY = window.scrollY ?? window.pageYOffset;
      if (scrollY >= threshold) {
        setNavTitleHidden(false);
      } else {
        setNavTitleHidden(true);
        setSecondaryNavOpened(false);
      }
    };

    checkPosition();
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
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
                    <span property="name">Ana səhifə</span>
                  </a>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/encyclopedia/">
                    <span property="name">Ensiklopediya</span>
                  </a>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Dikişlərin işlənməsi</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Əməliyyatdan sonra dikişlərin işlənməsi: alqoritm və preparatlar
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
                      alt="başlıq şəkli"
                      priority
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Niyə dikişləri işləmək lazımdır?</h2>
                <div className="page-header-body">
                  <p>
                    Əməliyyatdan sonra dövr yaranın sağalması, zədələnmiş orqanın və bütöv
                    orqanizmin funksiyalarının bərpası ilə tamamlanır. Hər hansı cərrahi müdaxilə
                    ağırlaşma riskləri yaradır. Dikişlərin irinlənməsi və əməliyyat sahəsində
                    dermatit riskini düzgün qulluq və antiseptik işlənmə ilə azaltmaq olar
                    <sup>
                      <a href="#spisok-literatury">2</a>
                    </sup>
                    .
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#pravila-obrabotki-shvov">Dikişlərin işlənməsi qaydaları</a>
                  </li>
                  <li>
                    <a href="#preparaty-dlya-obrabotki-shvov">Dikişlərin işlənməsi üçün preparatlar</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/banner-obrabotka-shvov-1-730x615.webp 1x, /banner-obrabotka-shvov-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/banner-obrabotka-shvov-1-730x615.webp"
                      alt="Dikişlərin işlənməsi"
                      priority
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
              <ul>
                <li>
                  <a href="#pravila-obrabotki-shvov">Dikişlərin işlənməsi qaydaları</a>
                </li>
                <li>
                  <a href="#preparaty-dlya-obrabotki-shvov">Dikişlərin işlənməsi üçün preparatlar</a>
                </li>
                <li>
                  <a href="#kogda-neobhodimo-obratitsya-k-vrachu">
                    Həkimə müraciət etməli olduğunuz zaman
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Populyar suallar</a>
                </li>
                <li>
                  <a href="#spisok-literatury">İstinadlar</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened(!navOpened)}>Mündəricat</div>
            </nav>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
          <ul>
            <li>
              <a href="#pravila-obrabotki-shvov">Dikişlərin işlənməsi qaydaları</a>
            </li>
            <li>
              <a href="#preparaty-dlya-obrabotki-shvov">Dikişlərin işlənməsi üçün preparatlar</a>
            </li>
            <li>
              <a href="#kogda-neobhodimo-obratitsya-k-vrachu">
                Həkimə müraciət etməli olduğunuz zaman
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Populyar suallar</a>
            </li>
            <li>
              <a href="#spisok-literatury">İstinadlar</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}>Mündəricat</div>
        </nav>

        {/* Disclaimer */}
        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkimin məsləhətini əvəz etmir</div>
        </div>

        {/* Main Content */}
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            {/* Section: Фазы заживления */}
            <h3 className="h3">Əməliyyatdan sonra yaranın sağalma mərhələləri</h3>
            <div className="list-base">
              <p>
                Yaranın sağalmasını təmin edən mexanizm yara prosesi adlanır və üç mərhələdən ibarətdir
                <sup>
                  <a href="#spisok-literatury">15</a>
                </sup>
                :
              </p>
              <ol>
                <li>
                  <strong>İltihab fazası</strong>. Bu mərhələdə ağrı, şişlik və cərrahi sahənin
                  qızarması müşahidə olunur. Sağlam toxumalar və zərərli mikroorqanizmlərdən
                  təmizləmə prosesi gedir.
                  <br />
                  &nbsp;
                </li>
                <li>
                  <strong>Regenerasiya fazası</strong> (bərpa). Yara defekti doldurulur və gənc
                  toxuma ilə bərpa olunur.
                  <br />
                  &nbsp;
                </li>
                <li>
                  <strong>Skarın yetişmə fazası</strong> (təşkilatlanma). Skar toxuması "yetişir"
                  və dəri səthi tamamilə sağalır.
                </li>
              </ol>
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
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/osh-2at4x-650x325.webp 1x, /osh-2at4x-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/osh-2at4x-650x325.webp"
                alt="Yaranın sağalma mərhələləri"
              />
            </picture>

            <p>
              Yarada irin əmələ gəlməsi infeksion ağırlaşmaya işarə edir. Bu, yara prosesinin
              adi gedişatına mane olur və yaranın sağalmasını yavaşladır. Bədənin müdafiə
              mexanizmləri zəif olduqda lokal infeksiya qan yoluyla yayıla bilər.
            </p>

            <p>
              Yaranın açılması (zəyaflaşması) infeksiyalaşma riskini artırır, çünki patogen
              mikroorqanizmlərlə çirklənmə ehtimalı yüksəlir. Buna görə də böyük, açıq defektlər
              tikilir
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            {/* Section: Правила обработки швов */}
            <h2 className="h2" id="pravila-obrabotki-shvov">
              Dikişlərin işlənməsi qaydaları
            </h2>
            <p>Ev şəraitində əməliyyat yarasına qulluq infeksiyalaşma riskinin azalmasına yönəlib.</p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>Təmizlik.</strong> Bunu təmin etmək üçün sarğı materialları (bintlər,
                  plastırlar, marla salfetlər) və yaranın toxumaları təmiz olmalıdır. Əgər yataq rejimi
                  məsləhət görülürsə, yataq və alt paltarları təmiz olmalı və vaxtında dəyişdirilməlidir
                  <sup>
                    <a href="#spisok-literatury">2</a>
                  </sup>
                  .
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Antiseptik işlənmə.</strong> Dikişdən dərhal sonra yara antiseptik vasitəsi ilə
                  işlənir və sarğı/plastır ilə örtülür. Sarğı gəzmə dərinin mikrosirkulyasiyasını
                  pozmamalıdır. Bəzən yaranın drenajı üçün drenajlar qoyulur; bu halda drenaj ətrafının
                  qulluğuna diqqət göstərilməlidir
                  <sup>
                    <a href="#spisok-literatury">2</a>
                  </sup>
                  .
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Sarğının vaxtında dəyişdirilməsi.</strong> Sarğılar vaxtında dəyişdirilməli və
                  onların vəziyyəti yoxlanılmalıdır. Sarğılar quru olmalı və paltarları kirletməməlidir.
                  İlk 12 saat ərzində ağrını azaltmaq və qanaxmanı dayandırmaq məqsədilə soyuq
                  kompres tətbiq edilə bilər
                  <sup>
                    <a href="#spisok-literatury">2</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/osh-3at4x-650x150.webp 1x, /osh-3at4x-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="/osh-3at4x-650x150.webp"
                alt="Dikişlərin işlənməsi qaydaları"
              />
            </picture>

            {/* Section: Препараты для обработки швов */}
            <h2 className="h2" id="preparaty-dlya-obrabotki-shvov">
              Dikişlərin işlənməsi üçün preparatlar
            </h2>
            <div className="list-base">
              <p>Yara prosesinin mərhələsindən asılı olaraq dikişlərə qulluq üçün dərman və antiseptiklər seçilir.</p>
              <ul>
                <li>
                  <strong>İltihab fazasında</strong> zədələnmiş sahəni immobilizasiya etmək lazımdır.
                  Yaranın üzərinə nəm-quruyan sarğılar tətbiq oluna bilər. Preparatlar suyu
                  soran (hidrofilik), antipatojen, iltihab əleyhinə və ağrı azaltıcı xüsusiyyətə malik
                  olmalıdır.
                </li>
                <li>
                  <strong>Regenerasiya fazasında</strong> sağaldıcı krem/mazlar təyin edilir.
                </li>
                <li>
                  <strong>Skarın yetişmə fazasında</strong> isə skar toxumasının həddindən artıq
                  böyüməsinin qarşısını alan vasitələr istifadə olunur.
                </li>
              </ul>
            </div>

            <p>
              Çirkləri, yara sekresiyasını və qan laxtalarını yumaq və mexaniki çıxarmaq üçün povidon-yod
              (Betadin®), 10% hipertonik natrium xlorid məhlulu, furasilin məhlulu (1:5000), 3% hidrogen
              peroksid, 0.1% kalium permanganat ("margantsovka") və 0.05% xlorheksidin biglukanat məhlulu
              istifadə edilə bilər.
            </p>

            {/* Subsection: Бетадин для обработки швов */}
            <h3 className="h3">Dikişlərin işlənməsi üçün Betadin® məhlulu və mazı</h3>
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
                    alt="Betadin məhlulu"
                  />
                </picture>
              </div>
              <p>
                Yaranı təmizləmək və dezinfeksiya etmək məqsədilə povidon-yod əsasında olan Betadin®
                məhlulu və mazi istifadə oluna bilər. Aktiv maddə bakteriyalara, protozoalara, viruslara
                və göbələk törədicilərinə qarşı təsirlidir
                <sup>
                  <a href="#spisok-literatury">11,13</a>
                </sup>
                . Mazın tərkibinə daxil olan makrogol osmotik təsir göstərərək irin çıxmasına kömək edir
                və yaranın təmizlənməsini təmin edir
                <sup>
                  <a href="#spisok-literatury">12,14</a>
                </sup>
                .
              </p>
              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  Təlimat
                </a>
              </p>
            </div>

            <div className="green">
              <p>
                Tədqiqatlar Betadin® mazı və 10% məhlulunun ödemi, irin ifrazatını və ağrını azaltmaqda
                təsirli olduğunu göstərmişdir. Effekt 5–7 gün ərzində əldə olunmuşdur
                <sup>
                  <a href="#spisok-literatury">12</a>
                </sup>
                .
              </p>
            </div>

            <div className="list-base">
              <p>
                Betadin® xəttinə aid antiseptik vasitələri geniş yara səthlərində istifadə etmək olar,
                çünki preparat
                <sup>
                  <a href="#spisok-literatury">11</a>
                </sup>
                :
              </p>
              <ul>
                <li>demək olar ki, qan dövranına sorulmur</li>
                <li>yanma hissi yaratmır</li>
                <li>istənilsə su ilə asanlıqla yuyulur və dərini davamlı boyamır.</li>
              </ul>
              <p>İkinci aydan etibarən uşaqlarda istifadə etmək mümkündür.</p>
            </div>

            {/* Subsection: Спиртовой раствор йода */}
            <h3 className="h3">Spirtli iyod məhlulu</h3>
            <p>
              Preparat qram-müsbət floraya və göbələk törədicilərinə qarşı aktivdir. Yaralar yalnız kənardan
              işlənməlidir
              <sup>
                <a href="#spisok-literatury">10</a>
              </sup>
              . Yaraya düşdükdə yanma hissi yaradır. 12 yaşdan kiçik uşaqlara tövsiyə edilmir
              <sup>
                <a href="#spisok-literatury">10</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-9-650x325.webp 1x, /istockphoto-1341663000-2048x2048-2-9-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/istockphoto-1341663000-2048x2048-2-9-650x325.webp"
                alt="Yaraların dezinfeksiyası üçün məhlullar"
              />
            </picture>

            {/* Subsection: Спиртовой раствор бриллиантового зелёного */}
            <h3 className="h3">Spirtli büllur yaşıl (brilliant green) məhlulu</h3>
            <p>
              "Yaşılka" yalnız qram-müsbət infeksiyanın törədicilərinə qarşı aktivdir
              <sup>
                <a href="#spisok-literatury">9</a>
              </sup>
              .
            </p>
            <p>
              Tərkibində etil spirt olduğuna görə dərini sancdırır və geniş yara səthlərində istifadəsini
              məhdudlaşdırır. Dərinin xarakterik rənglə davamlı boyanmasına səbəb olur.
            </p>

            {/* Subsection: Гипертонический раствор хлорида натрия */}
            <h3 className="h3">10% natrium xloridın hipertermik məhlulu</h3>
            <p>
              Pippik olaraq kompress və lapalar şəklində irinli yaraların müalicəsində istifadə olunur,
              çünki irin çıxmasına kömək edir və antimikrob təsirə malikdir
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            {/* Subsection: Раствор фурацилина */}
            <h3 className="h3">Furasilin məhlulu</h3>
            <p>
              Stafilokoklar, streptokoklar, bağırsaq çöpləri, şigellalar, salmonellalar və bacillalara
              qarşı antimikrob təsirə malikdir. Müalicə sxemi fərdi olaraq müəyyən edilir
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              .
            </p>

            {/* Subsection: Растворы перекиси водорода и перманганата калия */}
            <h3 className="h3">Hidrogen peroksid və kalium permanganat məhlulları</h3>
            <p>
              3% hidrogen peroksid və 0,1% kalium permanganat oksidləşdiricilər qrupuna aiddir. Fermentlərin
              təsiri ilə yara səthi ilə təmasda atom oksigen əmələ gətirərək çürüyən və anaerob mikrofloraya
              zərər verir
              <sup>
                <a href="#spisok-literatury">5,6</a>
              </sup>
              . 3% peroksidlə yuyulduqda əmələ gələn köpük əlavə olaraq yaradan qan, nekroz olmuş toxumaları
              və mikrobları təmizləyir
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>

            {/* Subsection: Раствор хлоргексидина биглюконата */}
            <h3 className="h3">Xlorheksidin biglukanat 0.05% məhlulu</h3>
            <p>
              0.05% xlorheksidin biglukanat məhlulu bakteriya və göbələk infeksiyasını məhv edir.
              Yaxşı dözülür, nadir hallarda allergik reaksiya yaradır, lakin dəri üzərində ultrabənövşəyi
              şüalara həssaslığı artırır. Uşaqlarda ehtiyatla istifadə olunur
              <sup>
                <a href="#spisok-literatury">7</a>
              </sup>
              .
            </p>

            {/* Subsection: Мазь на основе диоксиметилтетрагидропиримидина */}
            <h3 className="h3">Dioksimetiltetrahidropirimidin və xloramfenikol əsasında maz</h3>
            <p>
              Vasitə iltihab əleyhinə və antimikrob təsir göstərir (stafilokoklar, Pseudomonas aeruginosa
              və bağırsaq çöplərinə qarşı). 1 yaşdan kiçik uşaqlarda istifadəsi məsləhət görülmür
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
            </p>

            {/* Section: Когда необходимо обратиться к врачу */}
            <h2 className="h2" id="kogda-neobhodimo-obratitsya-k-vrachu">
              Həkimə müraciət etməli olduğunuz hallar
            </h2>
            <p>
              Ağrı artarsa, şiş və dikiş sahəsində qızartı güclənərsə dərhal müalicə edən həkiminizə
              müraciət edin. Əgər hərarət yüksəlibsə (təqribi respirator infeksiya əlamətləri olmadan),
              və ya sıxarkən irin gəlirsə və ya drenajdan gələn ifrazatın xarakteri dəyişibsə, həkimə
              müraciət etmək vacibdir.
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
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            {/* Section: Часто задаваемые вопросы */}
            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              Suallara cavablar
            </h2>

            <h3 className="h3">Dikişlərin işlənməsi tikiş məftilinin növündən asılıdırmı?</h3>
            <p>Dikiş sahəsinə qulluq və işlənməsi tikiş materialının növündən asılı deyil.</p>

            <h3 className="h3">Dikişlərin üzərinə sarğı qoymaq lazımdırmı?</h3>
            <p>
              Adətən həkimlər dikiş götürülənə qədər sarğı tətbiq etməyi və ya dikiş sahəsini plastırla
              örtməyi tövsiyə edirlər. Bəzi anatomik sahələrdə, məsələn perianal bölgədə, sarğı/plastır
              tətbiq etmək çətin ola bilər.
            </p>

            <h3 className="h3">Xarici və daxili tikişlərin işlənməsi fərqlidirmi?</h3>
            <p>
              Daxili tikişlər toxuma dərinliyində, əzələlərdə və ya daxili orqanlarda qoyulur və adətən
              orada qalır. Onlar həll olan və ya sintetik materiallardan istifadə edilməklə tətbiq olunur.
              Kənar tikişlərə görə qulluq adi qaydada aparılır.
            </p>

            {/* Author Section */}
            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Moshkova Elena Mixaylovna</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalə müəllifi</p>
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
                  alt="Məqalə müəllifi"
                />
              </picture>
            </div>

            {/* Related Articles Section */}
            <div className="h2 h2-read-more" id="chitat-po-teme">
              Mövzu üzrə oxu
            </div>
            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/kesarevo-sechenie-obrabotka-shvov-prevyu-246x166.webp 1x, /kesarevo-sechenie-obrabotka-shvov-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/kesarevo-sechenie-obrabotka-shvov-prevyu-246x166.webp"
                        alt="Sezari əməliyyatı: dikişlərin işlənməsi - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Sezari əməliyyatı: dikişlərin işlənməsi</strong>
                    </p>
                    <p>
                      Əməliyyatdan sonra dikişlərə necə düzgün qulluq etmək və komplikasiyalardan
                      necə qorunmaq.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/kesarevo-sechenie/">Ətraflı</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/rany-s-infekcziej-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/rany-s-infekcziej-prevyu-246x166 (1).webp"
                        alt="İnfeldə olan yaralar - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>İnfeksiyalı yaralar</strong>
                    </p>
                    <p>
                      Hər yaralar və kəsiklər tez və problemsiz sağalmır. İnfeksiyalı yaralar necə müalicə olunur?
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/rany-s-infekciej/">Ətraflı</a>
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
                        alt="Povidon-yod - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Povidon-yod</strong>
                    </p>
                    <p>
                      Povidon-yodun xüsusiyyətləri və tətbiqi. Betadin® məhlulu, mazı və şamlarının
                      tətbiqi üzrə təlimat.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/povidon-jod/">Ətraflı</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* References Section */}
            <h2 className="h2" id="spisok-literatury">
              İstinadlar
            </h2>
            <ol className="literature">
              <li id="literature-0">
                Semenov G.M., Petrishin V.L., Kovshova M.V. Cərrahi tikiş. Tədris vəsaiti, SPb, 2001.
              </li>
              <li id="literature-1">
                Larichev A.B. Cərrahi əməliyyatdan sonra xəstələrə qulluq əsasları, metodik tövsiyələr, 2013, YAGMA.
              </li>
              <li id="literature-2">Vidal lüğəti, 10% natrium xlorid məhlulunun istifadə təlimatı.</li>
              <li id="literature-3">
                Vidal lüğəti, Furacilin preparatının istifadə təlimatı.
              </li>
              <li id="literature-4">
                Dərman vasitələri reyestri, 3% hidrogen peroksid məhlulunun rəsmi təlimatı.
              </li>
              <li id="literature-5">
                Dərman vasitələri reyestri, kalium permanganat məhlulunun rəsmi təlimatı.
              </li>
              <li id="literature-6">
                Dərman vasitələri reyestri, xlorheksidin biglukanat preparatının rəsmi təlimatı.
              </li>
              <li id="literature-7">
                Dərman vasitələri reyestri, Levomekol® preparatının rəsmi təlimatı.
              </li>
              <li id="literature-8">
                Dərman vasitələri reyestri, brilliant yaşıl məhlulunun rəsmi təlimatı.
              </li>
              <li id="literature-9">
                Dərman vasitələri reyestri, spirtli iyod məhlulunun rəsmi təlimatı.
              </li>
              <li id="literature-10">
                Betadin məhlulunun tibbi istifadə təlimatı. RN: P№015282/03.
              </li>
              <li id="literature-11">
                Mihalskiy V.V., Bogdanov A.E., Zhilina S.V., Prividentsev A.I., Anikin A.I., Ulyanina A.A.
                RMJ №29, 23.12.2010 "Betadin® preparatının infeksiyalı yaraların müalicəsində tətbiqi".
              </li>
              <li id="literature-12">
                Dərman vasitələri reyestri, povidon-yod aktiv maddəsi üzrə rəsmi təlimat.
              </li>
              <li id="literature-13">
                Betadin mazının tibbi istifadə təlimatı. RU P N015282/02.
              </li>
              <li id="literature-14">
                Yaralar və yara prosesi. İnternlər, ordinatorlar və praktik həkimlər üçün tədris-metodik
                vəsait. 2016, KGMU, Rusiya Səhiyyə Nazirliyi.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
