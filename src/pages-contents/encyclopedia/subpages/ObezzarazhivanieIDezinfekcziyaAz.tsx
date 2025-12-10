'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function ObezzarazhivanieIDezinfekcziyaAz() {
  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Skrolinq40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Skrolinq80');
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
                    <span property="name">Başlıq</span>
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
                  <span property="name">Dezinfeksiya və yoluxmağa qarşı mübarizə</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Dezinfeksiya və yoluxmağa qarşı mübarizə: qaydalar, vasitələr
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
                      alt="başlıq yanında şəkil"
                      priority
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Dezinfeksiya nə vaxt lazımdır?</h2>
                <div className="page-header-body">
                  <p>
                    Dezinfeksiya və antiseptik vasitələrinin vaxtında istifadəsi yoluxucu xəstəlikləri,
                    cərrahi müdaxələlə bağlı və ya byt travmalarından sonra xoşaməd fəsadlarını
                    profilaktika edir və əngəlləyir.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#chem-mozhno-prodezinficirovat-ranu">Dezinfeksiya vasitələri</a>
                  </li>
                  <li>
                    <a href="#pravila-dezinfekcii-chem-obrabotat-ssadinu">Yaraların dezinfeksiyası qaydaları</a>
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
                      alt="Dezinfeksiya"
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
                    Yara nə ilə dezinfeksiya edilə bilər?
                  </a>
                </li>
                <li>
                  <a href="#pravila-dezinfekcii-chem-obrabotat-ssadinu">
                    Dezinfeksiya qaydaları, cızıqları necə dezinfeksiya etmək olar?
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Tez-tez soruşulan suallar</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross">Mündəricat</div>
            </nav>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#chem-mozhno-prodezinficirovat-ranu">Yara nə ilə dezinfeksiya edilə bilər?</a>
            </li>
            <li>
              <a href="#pravila-dezinfekcii-chem-obrabotat-ssadinu">
                Dezinfeksiya qaydaları, cızıqları necə dezinfeksiya etmək olar?
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Tez-tez soruşulan suallar</a>
            </li>
            <li>
              <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross">Mündəricat</div>
        </nav>

        {/* Disclaimer */}
        <div className="home-container">
          <div className="new-disclaimer">Bu məqalədəki məlumat həkimin məsləhətini əvəz etmir</div>
        </div>

        {/* Main Content */}
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>Antiseptiklər byt şəraitində yaraların dezinfeksiyası üçün istifadə olunur:</p>
            <div className="list-base">
              <ul>
                <li>kəsilər üçün</li>
                <li>cızıqlar üçün</li>
                <li>yanıqlar üçün</li>
              </ul>
            </div>

            <p>Tibbi müəssisələrdə antiseptiklər bir çox hallarda xəstələrin dərisini dezinfeksiya edir:</p>
            <div className="list-base">
              <ul>
                <li>inyeksiyalar və cərrahi müdaxələlər əvvəlində</li>
                <li>yanıqların və yaraların kompleks müalicəsində</li>
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
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <p>Ağız boşluğunun sanasiyası üçün müalicə zamanı:</p>
            <div className="list-base">
              <ul>
                <li>tonsillit</li>
                <li>faringit</li>
                <li>glossit</li>
                <li>stomatit</li>
                <li>gingivit</li>
              </ul>
            </div>

            {/* Section: Чем можно продезинфицировать рану? */}
            <h2 className="h2" id="chem-mozhno-prodezinficirovat-ranu">
              Yara nə ilə dezinfeksiya edilə bilər?
            </h2>
            <p>
              Yaranın təmiz su ilə yuyulması yoluxmanın ehtimalını azalda bilər, çünki bakteriyalar
              yaranın səthindən mexaniki olaraq çıxarılır.
            </p>
            <p>
              Ancaq bundan sonra da yaranı antiseptik vasitələrdən biri ilə dezinfeksiya etmək məqsədəuyğundur.
              Onlardan bəzilərini daha ətraflı nəzərdən keçirək.
            </p>

            {/* Subsection: Йодофоры */}
            <h3 className="h3">Yodforlər</h3>

            <h4 className="h4">Yod</h4>
            <p>
              Yod bakteriyalar, göbələklər, viruslar, sadə orqanizmlərdə aktiv təsir göstərir. Yodun
              spirt məhlulu ilə dezinfeksiya yaranın kənarlarında aparılmalı, yaranın kanala daxil
              olmasından qaçınılmalıdır. Dezinfeksiya zamanı sərinlikə əlveriş edir.
            </p>

            <h4 className="h4">Povidon-yod</h4>
            <p>
              Bu qrup dərmanlar yaraların və dişlərin tikilişinin dezinfeksiyası, yanıqların, cərrahi
              müdaxələlə əvvəl dəri və slizist membranlı dezinfeksiyası, dəri göbələk yoluxmasında
              antiseptik vasitə kimi istifadə olunur
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  12
                </a>
              </sup>
              .
            </p>

            <div className="green">
              <p>
                <strong>Povidon-yod</strong> — geniş spektrli antiseptik fəaliyyətinə malik müasır
                antiseptikdir. Spirti ehtiva etmir və yerli tətbiq zamanı yanıq vurmaz, asanlıqla su ilə
                yuyulur.
              </p>
            </div>

            <h4 className="h4">Povidon-yod əsasında Betadin® məhlulu</h4>
            <p>Povidon-yod əsasında məhlul (Betadin®) müxtəlif məqsədlər üçün dezinfeksiyada istifadə olunur.</p>

            <div className="list-base">
              <ul>
                <li>
                  <strong>Cızıqları, kəsilər, ülser qüsurlarını, yanıq səthini, dəri və slizist membranlı
                  püstülləri dezinfeksiya və müalicə məqsədi ilə</strong> 10% seyrəldilməmiş Betadin® məhlulu istifadə olunur.
                  Dərman yaranın səthində günə 2 dəfə tətbiq olunur və ya rəngli kompres şəklində istifadə olunur
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>
                  . Müalicə müddəti fərdi olaraq seçilir.
                </li>
                <li>
                  <strong>Ağız slizist membranlı yoluxucu xəstəlikləri zamanı</strong> Betadin® məhlulu
                  təmiz halda və ya seyrəldilməmiş halda (½ stəkan təmiz suya 1 çay qaşığı vasitə əlavə olunur)
                  tövsiyə olunur
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>
                  . Gündə bir neçə dəfə qargara məqsədi ilə tətbiq olunur.
                </li>
                <li>
                  <strong>Cərrahi müdaxələdən sonra drenaj sistemlərində istifadə üçün</strong> 10% məhlul
                  (Betadin®) povidon-yodun 1:10 və ya 1:100 seyrəltməsində istifadə olunur
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>
                  .
                </li>
                <li>
                  <strong>Tibbi müdaxələdən əvvəl xəstənin dərini dezinfeksiya üçün</strong>
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>
                  {' '}
                  seyrəldilməmiş povidon-yod məhlulu (Betadin®) dəriyə 5 dəqiqə müddətində tətbiq olunur,
                  sonra tərkib yuyulmalıdır. Manipulyasiya iki dəfə təkrarlanır.
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
                alt="Betadin paketləri"
              />
            </picture>

            <h4 className="h4">Yaraların dezinfeksiyası üçün Betadin® mərhəmi</h4>
            <p>
              Betadin® mərhəmi povidon-yod tərkibində yaranın iltihabı və sağalma mərhələsində göstərilir.
              Tərkibində olan makrogolun hesabına dərman təkcə dezinfeksiya etmir, həm də irin "çıxarır".
              Betadin® mərhəmi yaranın əti üzərində nazik təbəqə halında bölüstürülür (sürtsəmədən) günə 2-3 dəfə
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
                alt="Betadin mərhəmi"
              />
            </picture>

            <p>
              Betadin® məhlulu və ya mərhəmi ilə islənmiş sallaqallar altında yoluxmuş yaraların müalicəsi zamanı
              ilk 5-7 gün ərzində şişkilik azalır və pürüllü ifrazatın miqdarı azalır, ağrı azalması müşahidə olunur
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  14
                </a>
              </sup>
              .
            </p>

            {/* Subsection: Окислители для дезинфекции ран */}
            <h3 className="h3">Yaraların dezinfeksiyası üçün oksidləyicilər</h3>

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
                alt="Oksidləyicilər"
              />
            </picture>

            <h4 className="h4">Hidrogen peroksid</h4>
            <p>
              3% hidrogen peroksid məhlulu rəngsiz, şəffaf, iyə qoxusu olmayan maye
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  2
                </a>
              </sup>
              .
            </p>
            <p>
              Məhlul yaranın səthində aktiv oksigen ayrılır, bu da çürütücü və anaerob yoluxmanın yaranmasını
              əngəlləyir. Bundan başqa, meydana gələn köpük yaranın çöpləri, qanı, yad cisimləri çıxarmağa kömək edir.
              Hidrogen peroksid məhlulu yanıq vurmağa səbəb ola bilər və bəzi hallarda allerji reaksiyalarına səbəb olmağa bilər
              (nadir hallarda)
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  2
                </a>
              </sup>
              .
            </p>

            <h4 className="h4">Kalium permanganat</h4>
            <p>
              Kalium permanganatın su məhlulu ("marqanets"), müxtəlif şəffaflıq dərəcəsində qırmızı rəngli maye.
              Güclü oksidləyicidır
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  3,4
                </a>
              </sup>
              , ona görə də mikroorqanizmlərin hüceyrələrini dağıdır. Antiseptik məqsədlərlə 0,1%–5% konsentrasiyasında istifadə olunur.
              Yanıq və yaraların dezinfeksiyası üçün 5% məhlul hazırlanır (5 q quru kalium permanganat 100 ml təmiz suya həll edilir, distillə suyu istifadə etmək olar).
              Yaraların yuyulması üçün 0,1% konsentrasiyasında istifadə olunur
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  5
                </a>
              </sup>
              .
            </p>

            <div className="green">
              <p>Hazırda kalium permanganatının dəbcilik əczaçılıq şəbəkəsində satışı məhdudlaşdırılıb.</p>
            </div>

            {/* Subsection: Раствор хлоргексидина */}
            <h3 className="h3">Xlorheksidinin məhlulu</h3>
            <p>
              0,05% xlorheksidinin biqlükonatı məhlulu bakteriyalar və göbələk yoluxmasında aktiv təsir göstərir.
              Yanıq vurmaz. Adətən yaxşı tolerasiya edilir, lakin allerji reaksiyalarına və günəş işığına dərinin
              həssaslığının artmasına səbəb ola bilər. Dərmanın təlimatına əsasən, uşaq yaşında (18 yaşına qədər) ehtiyatla istifadə olunur
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  9
                </a>
              </sup>
              .
            </p>

            {/* Subsection: Анилиновые красители */}
            <h3 className="h3">Anilin boyaları</h3>
            <div className="list-base">
              <ul>
                <li>Parlaq yaşıl ("yaşıl")</li>
                <li>Metilenin mavisi</li>
                <li>Etakridini</li>
                <li>Metilenin xlorid</li>
              </ul>
            </div>

            <p>
              Anilin boyalarının fəaliyyət mexanizmi oksidləmə-azalma reaksiyalarının realizasiyasından ibarətdir,
              onların təsiri altında zərərli mikroorqanizmlərin həyat fəaliyyəti pozulur. Bu qrup vasitələr
              əleyhissəbəb təsirə də malikdir.
            </p>
            <p>
              Anilin boyaları dezinfeksiya məqsədi ilə dermatoloji sahədə, həmçinin kiçik yaraların, tikiş yerlərin,
              cızıqların dezinfeksiyası üçün istifadə olunur.
            </p>
            <p>Dəri ilə temas zamanı sərinlikə əlveriş edir. Dərini boyacı rəngində boyayır.</p>

            <div className="green">
              <p>
                Anilin antiseptik vasitələri yodforlər, halogenlərlə, qələvilər ilə birlikdə istifadə edilə bilməz.
              </p>
            </div>

            {/* Subsection: Обеззараживающие средства в форме порошка */}
            <h3 className="h3">Toz formada dezinfeksiya vasitələri</h3>
            <p>
              Sulfanilamid– kənardan istifadə üçün toz formada antimikrob dərman
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  10
                </a>
              </sup>
              . Yalnız bakteriyalara təsir edir. Təlimata əsasən, 3 yaşına qədər uşaqlarda ehtiyatla istifadə olunur.
            </p>
            <p>
              Basistrasin və neomisin kombinasiyası geniş spektrli birləşmiş antibiotiklərin qrupuna aiddir
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  11
                </a>
              </sup>
              . Yaranın geniş hissələrində istifadə olmaqdan menetmə olunur, çünki dərman qan axınına daxil olur
              və simptom xarici təsir göstərə bilər, o cümlədən eşitməyi itirmə.
            </p>

            {/* Section: Правила дезинфекции */}
            <h2 className="h2" id="pravila-dezinfekcii-chem-obrabotat-ssadinu">
              Dezinfeksiya qaydaları, cızıqları, yanıqları necə dezinfeksiya etmək olar?
            </h2>
            <p>
              Yüksək temperaturun dəriyə təsiri (qızdırılmış səthə toxunma, açıq odla temas, buxar və ya qaynar
              su ilə qızışdırılma) zamanı termal yanıqlar meydana gəlir. Turşu və əsasların qorumasız dərisi və
              slizist membranlı ilə temas zamanı kimyəvi yanıq meydana gəlir. 1 və 2 dərəcəli yanıqları
              müstəqil müalicə etmək olar. (1 dərəcə — şişkilik, qızıllaşma sonradan qabarcıqlanma, 2 dərəcə —
              qızıllaşma, şişkilik, qabarcıq və ya cıltı meydana gəlməsi). 3-4 dərəcəli yanıqlar (dərinləşmə)
              xəstəxana müalicəsi tələb edir.
            </p>
            <p>
              Kiçik dəri zədələnmələri (cızıqlar, çıpalar və dərin olmayan kəsiklər) müstəqil olaraq dezinfeksiya
              edilə bilər, tibbi yardıma müraciət etmədən.
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
                alt="Dezinfeksiya qaydaları"
              />
            </picture>

            <p>
              Byt zədələnməsinin xarakterindən asılı olmayaraq, bundan sonra yaranın dezinfeksiya fəaliyyəti
              yıkamaqdan, antiseptik işləməsindən və sallaq qoyulmaqdan (lazım olduqda) ibarətdir.
            </p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>Yıkama.</strong> Bu məqsəd üçün 3% hidrogen peroksid məhlulu, 0,05% xlorheksidini
                  biqlükonatı kimi antiseptik həllər istifadə olunur. Bu yaranı qandan və yad hissəciklərdən
                  (məsələn, torpağın, qumun hissəcikləri) təmizləyəcəkdir. Xüsusi həllər mövcud olmadığı halda,
                  təmiz su ilə yıkaya bilərsiniz.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Antiseptik işləməsi.</strong> Yara "yaşıl", yod, povidon-yod ilə dezinfeksiya edilə bilər.
                  Ancaq onlardan bəzilərinin dərini boyadığını və yaranın səthində temas zamanı sərinlikə əlveriş
                  etdiyini nəzərə almaq lazımdır. Bu xüsusilə cızıq böyükdürsə və ya uşaq yaralanmışdırsa nəzərə alınmalıdır.
                </p>
              </div>
            </div>

            <div className="green">
              <p>
                Müxtəlif yaranın səthinin dezinfeksiyası üçün müasır vasitə povidon-yoddur
                (<strong>Betadin®</strong>). O, dərini sabit olaraq boyamır və hətta geniş dəri hissələrinin
                dezinfeksiyası zamanı da yanıq vurmaz.
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
                    alt="Betadin məhlulu"
                  />
                </picture>
              </div>
              <p>
                Betadin® məhlulu yaranın səthinin dezinfeksiyası üçün istifadə olunur (cızıqlar, yaralanma,
                kəsilər zamanı)
                <sup>
                  <a href="#spisok-literatury">12</a>
                </sup>
                :
              </p>
              <ul>
                <li>dərini sərinlik vurmaz</li>
                <li>
                  bakteriyalar, sadə orqanizmlər, göbələk yoluxması, viruslara qarşı aktiv
                  <sup>
                    <a href="#spisok-literatury">12</a>
                  </sup>
                </li>
                <li>
                  patogen mikroorqanizmlərində uyğunlaşma yaratmır
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
                  Təlimat
                </a>
              </p>
            </div>

            <div className="green">
              <p>
                Agar yara qanıyor olarsa, əlavə olaraq hemostazis seqeləsindən istifadə etmək olar, eger 10 dəqiqə
                ərzində qanama davam edərsə - tibbi yardıma müraciət etmək lazımdır.
              </p>
            </div>

            <p>
              <strong>Sallaq qoyulması.</strong> Antiseptik işlənmədən sonra yara bağlanır və ya yapışqan plastir ilə
              qorunur. Dezinfeksiya dərmanının təlimatına diqqət yetirmək lazımdır - bütün antiseptiklər sallaq altında
              saxlanıla bilməz. Məsələn, Betadin® mərhəmi bandaj və ya qapyuran materialı altında istifadə olunmasına icazə verilir
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
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            {/* Section: Часто задаваемые вопросы */}
            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              Sualların cavabları
            </h2>

            <h3 className="h3">Yara travmasından sonra nə qədər tez dezinfeksiya etmək lazımdır?</h3>
            <p>
              Byt şəraitində alınan kəsiklər, cızıqlar, yanıqlar yüksək yoluxma riski altındadır. Bu purulent
              fəsadlara və qan yoluxmasına (sepsis) səbəb ola bilər. Yaranın torpaqla kirlənməsi, Clostridium tetani
              ilə mikroorqanizmlə işğal olunmuş torpaqla kirlənməsi tetanuzun inkişafına səbəb ola bilər. Bu halda,
              yaranın səthində yalnız özü qalır, lakin onun tərəfindən istehsal olunan eksotoksin qana, lenfaya, perinevral
              fəzalara daxil olur - burulğu, üz, boyun, qan boğazının əzələlərinin zədələnməsi, yutmaqda çətinlik yaranır.
              Statistikaya görə, tetanuz tağlı tələ travmalı insanların 30% -ində aşkar edilir
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  13
                </a>
              </sup>
              .
            </p>
            <p>
              Purulent komplikasiyaların, həyat və sağlamlığa töhfənin profilaktikası üçün - byt yaraları mümkün
              qədər tez dezinfeksiya etmək lazımdır. Yaranı yad hissəciklərdən, qandan 3% hidrogen peroksid məhlulu,
              xlorheksidini qat altında yıkamaq lazımdır. Yuxarıda göstərilən həllər olmadığı halda, kifayət qədər
              təmiz su istifadə etmək olar. Sonra geniş spektrli antiseptik dezinfeksiya etmək lazımdır. Betadin®
              məhlulu (povidon-yod) - müasır dərman, bakteriyaları, göbələk yoluxmasını, virusları və sadə orqanizmləri
              yox edən. Dərman spirti ehtiva etmir, ona görə yanıq vurmaz, geniş yaranın səthinin, yanıq səthlərinin
              dezinfeksiyası üçün uygundur. Səbəbkar mikroorqanizmlərlə təkrar işğal olmasından qoruyan bir qoruyan film əmələ gətirir.
              1 aydan böyük uşaqlarda istifadəsə icazə verilir. Purulent əlamətlər zamanı Betadin® mərhəmi (povidon-yod) də istifadə
              etmək olar, antiseptik xüsusiyyətlərə malikdir.
            </p>

            <h3 className="h3">Yaraların dezinfeksiyası nə qədər tez-tez edilməlidir?</h3>
            <p>
              Yaranın səthinin dezinfeksiyası üçün antiseptik dərmanlar dərmanın təlimatına və ya müalicə həkiminin
              tövsiyələrinə uyğun olaraq istifadə edilməlidir. Məsələn, Betadin® mərhəmi (povidon-yod) zədələnmiş
              səthinə nazik təbəqə halında günə 2-3 dəfə tətbiq olunması tövsiyə olunur, sallaq altında saxlanıla bilər
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  12
                </a>
              </sup>
              . Dəri və slizist membranlı yaraların dezinfeksiyası və yıkamması məqsədi ilə 10% Betadin® məhlulu
              (povidon-yod) təyin olunur. Seyrəldilməmiş halda istifadə etmək olar, eləcə də rəngli kompres şəklində.
              Yaranın səthində dərmanın təsiri zamanı qonur rəngli film meydana gəlir, dərmanın fəaliyyətinin sona çatdığı
              zaman solğunlaşır.
            </p>

            <h3 className="h3">Yaranı yapışqan plastir və ya sallaq ilə örtmək lazımdırmı?</h3>
            <p>
              Yaranın səthinin müalicə taktikası onun böyüklüyündən, lokalizasiyasından, sağalma mərhələsindən asılıdır.
              Kiçik qüsurlar açıq vəziyyətdə keçə bilər (bağlamadan və yapışqan plastir qoymadan). Barmaqların əyilən hissəsində
              və ya digər hərəkətli sahələrdə yaraların sağalması daha yavaş keçir, ona görə bu yerləri yapışqan plastir ilə
              örtmək daha yaxşıdır. Bandaj materialı istifadə edərkən, kirlənmiş bandajları/plasterləri vaxtında dəyişmək lazımdır.
              Qayğı ilə bağlamaq, mikrosirkulyasiyanın pozulmasına icazə verməmək lazımdır. Antiseptik vasitələrinin sallaq altında
              istifadəsinin mümkünlüyünə diqqət etmək lazımdır (bütün antiseptik dərmanlar sallaq altında saxlanılmır).
            </p>

            {/* Author Section */}
            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Elena Mikhailovna Moshkova</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalənin müəllifi</p>
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
                  alt="Məqalənin müəllifi"
                />
              </picture>
            </div>

            {/* Related Articles Section */}
            <div className="h2 h2-read-more" id="chitat-po-teme">
              Mövzu üzrə oxuyun
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
                        alt="Uşaq yarasını necə dezinfeksiya etmək olar-preview"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Uşaq yarasını necə dezinfeksiya etmək olar</strong>
                    </p>
                    <p>Uşaq yaraları dezinfeksiyası üçün təhlükəsiz və əlverişli vasitə seçirik.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/chem-obrabotat-ranu-rebenku/">Ətraflı</a>
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
                        alt="Yaraların sağalması üçün mərhəm-preview"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yaraların sağalması üçün mərhəm</strong>
                    </p>
                    <p>Hansı mərhəmlər var və ən effektiv olanı necə seçmək olar.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/maz-dlya-zazhivleniya-ran/">Ətraflı</a>
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
                        alt="Yoluxmuş yaraları-preview"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yoluxmuş yaraları</strong>
                    </p>
                    <p>
                      Bütün cızıqlar və kəsiklər cəbrayab və fəsadsız sağalmır. Yoluxmuş yaraları necə müalicə etmək olar?
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/rany-s-infekciej/">Ətraflı</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* References Section */}
            <h2 className="h2" id="spisok-literatury">
              Ədəbiyyat siyahısı
            </h2>
            <ol className="literature">
              <li id="literature-0">
                Yaraları və yaranın yoluxması, Ural Dövlət Tibbi Universiteti MZ RF, 2018.
              </li>
              <li id="literature-1">
                Dərmanlı vasitələrin reyestri, 3% hidrogen peroksid məhlulunun rəsmi təlimatı.
              </li>
              <li id="literature-2">
                Dəri xəstəlikləri və cinsi yolla ötürülən xəstəliklərin rasional farmakoterapi.
                A.A. Kubanova tərəfindən redaktə edilmiş, 2007.
              </li>
              <li id="literature-3">
                Dərmanlı vasitələrin reyestri, kalium permanganat məhlulunun rəsmi təlimatı.
              </li>
              <li id="literature-4">
                Nartaylakovı M.A., Mustafin A.H., Cinqizova G.N., Pantelev V.S., Muşarapov D.R.,
                Qaraev M.R., Bakirov A.A., Gritsaenko A.İ., Kaşaev M.Ş., Smakaev R.U., Minqazov
                R.S. Ümumi cərrahiyyə. GBOU ali peşə təhsili "Başqır Dövlət Tibbi Universiteti" MZ RF, 2015.
              </li>
              <li id="literature-5">
                Borisov I. V. Povidon-yod - tanış dərmanın yeni imkanları // Yaraları və yaranın yoluxması 8 (3) 2021, səh. 12-18.
              </li>
              <li id="literature-6">
                Dərmanlı vasitələrin reyestri, Fukortsinin rəsmi təlimatı.
              </li>
              <li id="literature-7">
                Dərmanlı vasitələrin reyestri, Dimeksid dərmanının rəsmi təlimatı.
              </li>
              <li id="literature-8">
                Dərmanlı vasitələrin reyestri, xlorheksidini biqlükonatının rəsmi təlimatı.
              </li>
              <li id="literature-9">
                Dərmanlı vasitələrin reyestri, Ranaveksim® dərmanının rəsmi təlimatı.
              </li>
              <li id="literature-10">
                Dərmanlı vasitələrin reyestri, Baneotsinin® rəsmi təlimatı.
              </li>
              <li id="literature-11">
                Betadin məhlulu tətbiq üçün əlaqə. RN: P№015282/03.
              </li>
              <li id="literature-12">
                Lysenko V.İ., Qolyaniştsev M.A., Karamushko İ.V. Tetanuz: hiyləgərlik və rasional terapiya.
                Klinik hal uğurlu müalicə. Xarkov tibbi academia sonra tərəfindən təhsil. KUZ Xarkov şəhər klinik xəstəxana №2.
              </li>
              <li id="literature-13">
                Mikhalskiy V.V., Boqdanov A.E., Jilina S.V., Pravidentsev A.İ., Anikin A.İ.,
                Ulyaninaova A.A. RMJ №29 23.12.2010 "Betadin® dərmanının yoluxmuş yaraların müalicəsində istifadəsi".
              </li>
              <li id="literature-14">
                Betadin mərhəmi tətbiq üçün əlaqə. RN: P№015282/02.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
