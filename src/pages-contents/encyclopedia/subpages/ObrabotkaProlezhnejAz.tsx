"use client";
import React, { useEffect } from "react";

export default function ObrabotkaProlezhnejAz () {
  useEffect(() => {
    // Analytics scroll tracking logic adapted from the original script
    // Guard for browsers and the global ym function (Yandex Metrica)
    const scrollGoals: { [key: number]: () => void } = {
      25: () =>
        typeof (window as any).ym === "function" &&
        (window as any).ym(37744585, "reachGoal", "Skreollinq25"),
      50: () =>
        typeof (window as any).ym === "function" &&
        (window as any).ym(37744585, "reachGoal", "Skreollinq50"),
      75: () =>
        typeof (window as any).ym === "function" &&
        (window as any).ym(37744585, "reachGoal", "Skreollinq75"),
      100: () =>
        typeof (window as any).ym === "function" &&
        (window as any).ym(37744585, "reachGoal", "Skreollinq100"),
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
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor(
        ((scrollTop + winHeight) / docHeight) * 100
      );
      for (let percent of [25, 50, 75, 100]) {
        if (scrollPercent >= percent && !triggered[percent]) {
          triggered[percent] = true;
          scrollGoals[percent]();
          // eslint-disable-next-line no-console
          console.log(percent);
        }
      }
      if (Object.values(triggered).every((v) => v)) {
        window.removeEventListener("scroll", checkScroll);
      }
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <main>
      <div className="container-page-header">
        <div className="container">
          <div className="page-header page-header-breadcrumbs">
            <ol
              className="breadcrumb"
              vocab="https://schema.org/"
              typeof="BreadcrumbList"
            >
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://betadin.ru">
                  <span property="name">Ana səhifə</span>
                </a>
                <meta property="position" content="1" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="/encyclopedia/">
                  <span property="name">
                    Yataq yaralarının işlənməsi üçün məlhəm və kremlər
                  </span>
                </a>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">
                  Yataq yaralarının işlənməsi üçün məlhəm və kremlər
                </span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>
          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                <h1 className="page-header-title-text">
                  Yataq yaraları üçün məlhəm və kremlər: növləri, tətbiqi,
                  məsləhətlər
                </h1>
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
                    alt="başlıq yanında şəkil"
                  />
                </picture>
              </div>
              <h2 className="page-header-subtitle">Yataq yaraları nədir? </h2>
              <div className="page-header-body">
                <p>
                  <a href="/encyclopedia/prolezhni/">Yataq yaraları</a> –
                  uzunmüddətli xarici təzyiq nəticəsində dəri və dərin toxuma
                  təbəqələrinin aydın müəyyən edilən zədələnmə sahəsi
                  <sup>
                    <a href="#spisok-literatury">8</a>
                  </sup>
                  .
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li>
                  <a href="/encyclopedia/obrabotka-prolezhnej/#mazi-i-kremy-dlya-obrabotki-prolezhney">
                    Məlhəmlərin siyahısı
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/obrabotka-prolezhnej/#maz-na-osnove-povidon-yoda">
                    Povidon-yodlu məlhəm
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/obrabotka-prolezhnej/#kak-vybrat-maz-ot-prolezhney">
                    Yataq yaralarının mərhələsinə görə məlhəmlər
                  </a>
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
                    alt="Yataq yaralarının müalicəsi üçün məlhəm və kremlər"
                  />
                </picture>
              </div>
            </div>
          </div>
          <nav className="nav-content">
            <ul>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#kak-obrabatyvat-prolezhni">
                  Yataq yaralarını necə işləmək lazımdır
                </a>
              </li>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#mazi-i-kremy-dlya-obrabotki-prolezhney">
                  Yataq yaralarının işlənməsi üçün məlhəm və kremlər
                </a>
              </li>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#kak-vybrat-maz-ot-prolezhney">
                  Yataq yaraları üçün məlhəm necə seçmək lazımdır
                </a>
              </li>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#otvety-na-voprosy">
                  Suallara cavablar
                </a>
              </li>
              <li>
                <a href="/encyclopedia/obrabotka-prolezhnej/#spisok-literatury">
                  Ədəbiyyat siyahısı
                </a>
              </li>
            </ul>
            <div className="nav-content-title nav-content-title-cross">
              {" "}
              Məzmun
            </div>
          </nav>
        </div>
      </div>

      <nav className="nav-content nav-content-fixed nav-content-title-hidden">
        <ul>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#kak-obrabatyvat-prolezhni">
              Yataq yaralarını necə işləmək lazımdır
            </a>
          </li>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#mazi-i-kremy-dlya-obrabotki-prolezhney">
              Yataq yaralarının işlənməsi üçün məlhəm və kremlər
            </a>
          </li>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#kak-vybrat-maz-ot-prolezhney">
              Yataq yaraları üçün məlhəm necə seçmək lazımdır
            </a>
          </li>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#otvety-na-voprosy">
              Suallara cavablar
            </a>
          </li>
          <li>
            <a href="/encyclopedia/obrabotka-prolezhnej/#spisok-literatury">
              Ədəbiyyat siyahısı
            </a>
          </li>
        </ul>
        <div className="nav-content-title nav-content-title-cross"> Məzmun</div>
      </nav>

      <div className="home-container">
        <div className="new-disclaimer">
          {" "}
          Məqalədəki məlumat həkim məsləhətini əvəz etmir
        </div>
      </div>
      <div className="page-content-wrapper">
        <div className="container container-middle page-content">
          <p>
            Bu patologiya yaşlı və hərəkətdə məhdud olan insanlarda, o cümlədən
            həssaslığı azalmış (iflic olmuş və ya huşsuz olan) şəxslərdə geniş
            yayılmışdır. Uzunmüddətli sıxılma sıxılma sahəsində qan axınının
            azalmasına (işemiya) səbəb olur. Bu səbəbdən toxumalarda oksigen
            çatışmazlığı (toxuma hipoksiyası) baş verir ki, bu da nəticədə
            toxumaların ölümünə səbəb olur. Xüsusilə sümük çıxıntıları üzərində
            olan dəri sahələri, məsələn, kürək sümüyü, bud, dirsək və dabanlar
            həssasdır. Bəzi insanlarda yataq yaralarının əmələ gəlməsi üçün cəmi
            iki saat hərəkətsizlik və dəri örtüyünə daimi xarici təzyiq
            kifayətdir
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
                alt="Dekorativ elementlər"
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
              srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1127/ee0a6023af4d3b4eb2d4e65b6ca5983eb07f6f4b460d606fbb287f00c0b12a5-650x0/medical-kit-and-bandaid-509398-488-1-10-650x325.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1127/ee0a68023af4d3b4eb2d4e65b6ca5983eb07f6f4b460d606fbb287f00c0b12a5-650x0/medical-kit-and-bandaid-509398-488-1-10-1300x650.png.webp 2x"
              alt="yataq yaraları nədir"
            />
          </picture>
          <h2 className="h2" id="kak-obrabatyvat-prolezhni">
            Yataq yaralarını necə işləmək lazımdır
          </h2>
          <div className="list-base">
            <p>
              Yataq yaralarının işlənməsi, adətən, bir neçə mərhələdən
              ibarətdir:
            </p>
            <ul>
              <li>Təmizləmə</li>
              <li>Dezinfeksiya</li>
              <li>Sarğı qoyulması</li>
            </ul>
          </div>
          <h3 className="h3" id="ochishchenie">
            Təmizləmə
          </h3>
          <p>
            Yataq yarasının uğurla sağalmasının mütləq şərti – quru yoluxmamış
            qabıq (strup) istisna olmaqla, ölü toxumaların çıxarılmasıdır. Nəm
            ölü (nekrotik) toxuma yoluxur, iltihab prosesini gücləndirir ki, bu
            da yaranın sağalmasını çətinləşdirir
            <sup>
              <a href="#spisok-literatury">3</a>
            </sup>
            . Yataq yarasının sağalmasını sürətləndirmək üçün hər sarğı
            dəyişdirilməsində təkcə zədələnmə sahəsini deyil, həm də onun
            ətrafındakı dərini təmizləmək tövsiyə olunur.
          </p>
          <h3 className="h3" id="obezzarazhivanie-povrezhdennogo-uchastka">
            Zədələnmiş sahənin dezinfeksiyası
          </h3>
          <p>
            Yataq yarası təmizləndikdən sonra onu antiseptik vasitələrlə
            dezinfeksiya etmək lazımdır. Bu zaman marqans, spirtli yod və
            zelyonka məhlulları, hidrogen peroksid istifadə etmək tövsiyə
            olunmur, çünki bu preparatlar zədələnmiş səthi həddindən artıq
            qurudur və gələcəkdə yaranı dolduracaq gənc birləşdirici toxumaya
            (qranulyasiya) zərər verə bilər. Buna görə də, yataq yarasının
            təmizlənməsi üçün xüsusi vasitələr, məsələn
            <a href="/encyclopedia/povidon-jod/" title="29. Povidon yod">
              povidon-yod
            </a>
            (Betadin<sup>®</sup>) istifadə etmək daha məqsədəuyğundur ki, bu da
            geniş antimikrob aktivliyə malikdir. Qeyd etmək vacibdir ki, o,
            narahatlıq yaratmır - dərini cırmır və yandırmır, yeni toxumanın
            əmələ gəlməsinə mane olmur.
          </p>
          <h3 className="h3" id="nalozhenie-povyazkinalozhenie-povyazki">
            Sarğı qoyulması
          </h3>
          <p>
            Yataq yaralarının işlənməsində son mərhələ yaranın örtülməsidir.
            Bunun üçün yataq yarasının səthinə və ya birbaşa sarğıya antimikrob
            və bərpaedici təsirə malik xüsusi məlhəm və ya kremlər vurulur.
          </p>
          <div className="iframe">
            <div className="bg_default bg_green" />
            <div className="h3 h3_green iframe-title">
              Yataq yaralarını necə düzgün işləmək lazımdır, qısa videoda
              izləyin:
            </div>
            <div className="iframe-container">
              <iframe
                className="lazyloaded"
                data-src="https://rutube.ru/play/embed/fa8f8cff35b68d5c8f024cee12b45743/?p=PkU2rTUw0f2w7kXkBCs9vA"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="iframe_desc">
              Videodan siz infeksion ağırlaşmalardan qaçmağa və zədələnmiş
              toxumaların sağalmasını sürətləndirməyə imkan verən nüanslar
              haqqında məlumat əldə edəcəksiniz.
            </div>
          </div>
          <h2 className="h2" id="mazi-i-kremy-dlya-obrabotki-prolezhney">
            Yataq yaralarının işlənməsi üçün məlhəm və kremlərin növləri
          </h2>
          <p>
            Arzuolunmaz hadisələrin qarşısını almaq üçün xüsusi məlhəm və
            kremlərlə yara səthlərinin gündəlik işlənməsini aparmaq tövsiyə
            olunur.
          </p>
          <p>
            <br />
            <strong>Müalicə məqsədlərindən asılı olaraq məlhəmlər olur:</strong>
          </p>
          <div className="big">
            <div className="line">
              <div>
                <p>
                  <strong>Təmizləyici:</strong>
                </p>
                <p>
                  Yaranı ölü toxumalardan təmizləyən ferment məlhəmləri
                  (məsələn, kollagenaza ilə məlhəm).
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Dezinfeksiyaedici:</strong>
                </p>
                <p>
                  Yod, gümüş ionları, antibiotiklər tərkibli vasitələr
                  (povidon-yod, basitasin, mupirotsin, gümüş sulfadiazin).
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Bərpaedici:</strong>
                </p>
                <p>
                  Toxumalarda mübadilə proseslərinin aktivləşməsini və kollagen
                  liflərinin əmələ gəlməsini stimullaşdıran məlhəmlər
                  (dekspantenol).
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>İltihabəleyhinə:</strong>
                </p>
                <p>
                  Toxumalarda iltihab proseslərini azaldır, immun sisteminin
                  həddindən artıq yüksək aktivliyini boğur (hidrokortizol
                  asetat).
                </p>
              </div>
            </div>
          </div>
          <p>
            Toxumalarda iltihab proseslərini azaldır, immun sisteminin həddindən
            artıq yüksək aktivliyini boğur (hidrokortizol asetat).
          </p>
          <div className="green">
            <p>
              <strong>Vacibdir!</strong>
            </p>
            <p>
              Hər hansı məlhəm tətbiq etməzdən əvvəl mütləq müalicə həkimi ilə
              məsləhətləşmək lazımdır! Hər bir preparat öz xüsusi tətbiq və
              dozalaşdırma xüsusiyyətlərinə malikdir ki, bunları da mütəxəssis
              hər bir xəstənin fərdi sağlamlıq xüsusiyyətlərindən çıxış edərək
              müəyyən etməlidir.
            </p>
          </div>
          <h3 className="h3" id="maz-na-osnove-povidon-yoda">
            Povidon-yod əsaslı məlhəm
          </h3>
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
                  alt="Betadin"
                />
              </picture>
            </div>
            <p>
              Betadin<sup>®</sup> məlhəmi
              <a
                href="/encyclopedia/povidon-jod/"
                data-type="page"
                data-id="271"
              >
                povidon-yod
              </a>{" "}
              əsasında
              <a href="/encyclopedia/jod/" data-type="page" data-id="306">
                yod
              </a>{" "}
              və povidonun xüsusi kompleksini təmsil edir.
            </p>
            <p>
              Antiseptik xassələri sayəsində Betadin<sup>®</sup> Məlhəmi,
              xüsusilə sarğı altında yaraların dezinfeksiyası və yataq
              yaralarının müalicəsi üçün istifadə olunur. Preparat gündə 1 dəfə
              zədələnmiş sahəyə 1 sm sağlam dərini də əhatə edəcək şəkildə nazik
              təbəqə ilə vurulur.
            </p>
            <p className="buttons">
              <a
                className="btn btn-green btn-green-instruction"
                target="_blank"
                href="/betadin-maz-instruktsiya/"
              >
                Təlimat
              </a>
            </p>
          </div>
          <h3 className="h3" id="maz-s-kollagenazoy">
            Kollagenaza ilə məlhəm
          </h3>
          <p>
            Kollagenaza – ölü toxumalarda kollageni məhv edən və bununla da
            yataq yarasının irinlərdən, köhnə və ölü dəri hissəciklərindən
            təmizlənməsinə kömək edən fermentdir. Kollagenazalı məlhəm həmçinin
            patoloji çapıq və izlərin əmələ gəlməsinin qarşısını alır, dərinin
            qeyri-bərabərliklərini, kobudlaşmalarını hamarlaşdırır.
          </p>
          <p>
            Məlhəm gündə 1 dəfə istifadə olunur. Məlhəmin tətbiq müddətini həkim
            yataq yarasının vəziyyətindən çıxış edərək müəyyən edir.
          </p>
          <h3 className="h3" id="maz-s-bacitracinom-i-neomicinom">
            Basitasin və neomitsinlə məlhəm
          </h3>
          <p>
            Basitasin və neomitsin – həm bakteriyaların çoxalmasını dayandıran,
            həm də zərərli mikroorqanizmlərin ölümünə səbəb olan antibakterial
            preparatların kombinasiyasıdır.
          </p>
          <p>
            Bu məlhəm kiçik kəsiklər, cızıqlar və yanıqlarda infeksion-iltihabi
            xəstəliklərin müalicəsi və profilaktikası üçün istifadə olunur.
          </p>
          <p>
            Preparat gündə 2-3 dəfə zədələnmiş sahəyə vurulur. İstifadə müddəti
            – 7 gündən çox deyil.
          </p>
          <h3 className="h3" id="maz-na-osnove-dekspantenola">
            Dekspantenol əsaslı məlhəm
          </h3>
          <p>
            Bu məlhəm zədələnmiş toxumanın bərpasını aktivləşdirir, dərinin
            elastikliyi və elastikliyi üçün lazım olan komponentləri istehsal
            edən hüceyrələrin sayının artmasını stimullaşdırır. Həmçinin
            dekspantenollu məlhəm (məsələn, Novathenol) hüceyrə metabolizmini
            normallaşdırır, hüceyrələrin bölünməsini sürətləndirir və kollagen
            liflərinin möhkəmliyini artırır.
          </p>
          <p>
            Tətbiq tezliyi göstərişlərdən asılıdır və müalicə həkimi tərəfindən
            müəyyən edilir.
          </p>
          <h3 className="h3" id="maz-na-osnove-gidrokortizona-acetata">
            Hidrokortizol asetat əsaslı məlhəm
          </h3>
          <p>
            Bu məlhəm kortikosteroid preparatlara aiddir. İltihabəleyhinə və
            immunosupressiv (arzuolunmaz immun reaksiyalarını boğan) təsirə
            malikdir.
          </p>
          <p>Məlhəm 6-14 gün ərzində gündə 2-3 dəfə vurulur.</p>
          <h2 className="h2" id="kak-vybrat-maz-ot-prolezhney">
            Yataq yaralarının mərhələsinə görə məlhəm seçimi
          </h2>
          <p>
            Məlhəmin seçimi yataq yarasının inkişaf mərhələsindən,
            ağırlaşmaların olmasından və ya olmamasından asılıdır:
          </p>
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
              alt="yataq yarasının inkişaf mərhələləri"
            />
          </picture>
          <div className="list-base">
            <ul>
              <li>
                <strong>1-ci mərhələ</strong> – bu mərhələdə dəri örtükləri
                pozulmamış, yalnız dərinin qızarması var. Zərər verici amillərin
                sonrakı təsirinin qarşısını almaq məqsədilə xəstəni hər 2
                saatdan bir yataqda çevirmək və ya toxumalara lokal təzyiri
                azaltmaq üçün xüsusi vasitələr istifadə etmək lazımdır. Yataqda
                uzanan xəstələrə qulluq qaydalarına riayət etmək, onların
                dərisinin təmizliyinə və vəziyyətinə nəzarət etmək lazımdır.
                Qızarmış dərini, məsələn, fizioloji məhlul, kamfor spirti ilə
                təmizləməklə kifayətlənmək olar.
              </li>
              <li>
                <strong>2-ci mərhələ</strong> – bu mərhələdə yataq yarasına
                nəzarətin məqsədləri səthi yaranın sağalması və yoluxmanın
                profilaktikasıdır. Yudulduqdan sonra antimikrob və bərpaedici
                təsirə malik məlhəmlər (məsələn, povidon-yod Betadin<sup>®</sup>
                , dekspantenol) istifadə etmək lazımdır. Yaranı ehtiyatla sarğı
                ilə örtmək lazımdır.
              </li>
              <li>
                <strong>3-cü mərhələ</strong> – bu mərhələdə müalicəyə yaranın
                ölü toxumalardan və irindən təmizlənməsinə kömək edəcək
                fermentli məlhəmlər (kollagenaza) daxil etməyə yol verilir.
                Həmçinin antimikrob və iltihabəleyhinə məlhəmlər (povidon-yod
                Betadin<sup>®</sup>, hidrokortizol asetat) istifadə etmək
                vacibdir. Bu vasitələrin vurulması sağalma müddətlərini
                qısaltmağa və ağırlaşma risklərini azaltmağa imkan verəcək.
              </li>
              <li>
                <strong>4-cü mərhələ</strong> – dərinin bütün təbəqələrinin
                dağılması və altında yerləşən toxumaların ölümü ilə əlaqədar
                olaraq sonrakı dermoplastika ilə yaranın cərrahi təmizlənməsi
                lazımdır. 3-cü mərhələdə tətbiq olunan preparatlara əlavə
                olaraq, müalicəyə fizioterapevtik prosedurlar qoşulur: yataq
                yarasının ultrasəs və ya ultrayu yüksək tezlikli elektromaqnit
                sahəsi ilə işlənməsi, antiseptiklərlə birləşmədə fonoforez və
                antibiotiklərin tətbiqi ilə elektroforez.
              </li>
            </ul>
          </div>
          <p>
            Yaranın sağalması üçün əsas maneələrdən biri infeksiya olduğundan,
            yoluxma əlamətləri olan yataq yaralarının müalicəsində yerli
            antimikrob vasitələrə diqqət yetirilir.
          </p>
          <div className="green">
            <p>
              Yataq yaraları – dərinin ciddi travmasıdır, ağırlaşmaları sepsis
              (qan zəhərlənməsi) səbəb ola bilər ki, bu da tez-tez ölümlə
              nəticələnir, ona görə də{" "}
              <strong>
                müalicə həkimin ciddi nəzarəti altında aparılmalıdır.
              </strong>
            </p>
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
                alt="Dekorativ elementlər"
              />
            </picture>
          </div>
          <h2 className="h2" id="otvety-na-voprosy">
            Suallara cavablar
          </h2>
          <h3 className="h3" id="kak-izbezhat-vozniknoveniya-prolezhney">
            Yataq yaralarının əmələ gəlməsinin qarşısını necə almaq olar?
          </h3>
          <p>
            Yataq yarasının əmələ gəlməsinin qarşısını almaq üçün xəstənin
            vəziyyətini hər 2-4 saatdan bir dəyişdirmək tövsiyə olunur. Bu
            xəstədə ən həssas olan bölgələrə təzyiri azaltmaq üçün yastıqlar və
            s. istifadə edilir. Dərinin vəziyyətinə nəzarət etmək və intensiv
            qulluq göstərmək lazımdır.
          </p>
          <h3 className="h3" id="kakie-priznaki-prolezhnya">
            Yataq yarasının əlamətləri hansılardır?
          </h3>
          <p>
            Yataq yarasının əlaməti həm lokal qızarma, həm də müxtəlif
            dərinlikdə yaranın əmələ gəlməsi ola bilər, həmçinin qabığın və ya
            qabarın yaranması mümkündür.
          </p>
          <h3
            className="h3"
            id="mozhno-li-lechit-prolezhni-v-domashnih-usloviyah"
          >
            Yataq yaralarını evdə müalicə etmək olarmı?
          </h3>
          <p>
            Hər şey yataq yarasının mərhələsindən asılıdır. Məsələn, cüzi
            zədələnmələr üçün evdə müalicə mümkündür, halbuki 3-4-cü mərhələdə
            yataq yaraları zamanı tibb müəssisəsinə yerləşdirilmə lazımdır. Hər
            halda yataq yarası əmələ gəldikdə müalicə həkimin nəzarəti altında
            aparılmalıdır.
          </p>
          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">Kraskovskiy Fedor Yanoviç</p>
              <div className="autor-subtitle" />
              <p className="autor-footer">Məqalənin müəllifi</p>
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
          <div className="h2 h2-read-more" id="chitat-po-teme">
            Mövzu üzrə oxumaq
          </div>
          <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              style={{
                transform: "translate3d(-284.078px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <div
                className="swiper-slide swiper-slide-prev"
                style={{ marginRight: "29px" }}
              >
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
                      alt="yataq yaraları-önizləmə"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Yataq yaraları</strong>
                  </p>
                  <p>
                    Yataq yaraları toxuma sahəsinə uzunmüddətli təzyiq
                    nəticəsində əmələ gəlir. Bu cür zədələnmələr necə müalicə
                    olunur?
                  </p>
                  <p className="slide-more">
                    <a href="/encyclopedia/prolezhni/"> Ətraflı </a>
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                style={{ marginRight: "29px" }}
              >
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
                      alt="Povidon-yod - önizləmə"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Povidon yod</strong>
                  </p>
                  <p>
                    Povidon-yodun xarakteristikaları və xassələri. Povidon-yod
                    nə üçün tətbiq olunur? Povidon-yodlu Betadin<sup>®</sup>{" "}
                    məhlul, məlhəm, şamlarının tətbiq təlimatı.
                  </p>
                  <p className="slide-more">
                    {" "}
                    <a href="/encyclopedia/povidon-jod/"> Ətraflı </a>{" "}
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                style={{ marginRight: "29px" }}
              >
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
                      alt="Yod məhlulu - önizləmə"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Yod məhlulu</strong>
                  </p>
                  <p>Hansı yodlu məhlullar var və nə üçün tətbiq olunur?</p>
                  <p className="slide-more">
                    {" "}
                    <a href="/encyclopedia/rastvor-joda/"> Ətraflı </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="h2" id="spisok-literatury">
            Ədəbiyyat siyahısı
          </h2>
          <ol className="literature">
            <li id="literature-0">
              McInnes E, Dumville JC, Jammali-Blasi A, Bell-Syer SE. Support
              surfaces for treating pressure ulcers. Cochrane Database Syst Rev.
              2011;(12):CD009490. Published 2011 Dec 7.
              doi:10.1002/14651858.CD009490.
            </li>
            <li id="literature-1">
              Zhao R, Liang H, Clarke E, Jackson C, Xue M. Inflammation in
              Chronic Wounds. Int J Mol Sci. 2016;17(12):2085. Published 2016
              Dec 11. doi:10.3390/ijms17122085.
            </li>
            <li id="literature-2">
              Bosanquet DC, Wright AM, White RD, Williams IM. A review of the
              surgical management of heel pressure ulcers in the 21st century.
              Int Wound J. 2016;13(1):9-16. doi:10.1111/iwj.12416.
            </li>
            <li id="literature-3">
              Elliott D, Kufera JA, Myers RA. The microbiology of necrotizing
              soft tissue infections. Am J Surg. 2000;179(5):361-366.
              doi:10.1016/s0002-9610(00)00360-3.
            </li>
            <li id="literature-4">
              O'Neill DK, Tsui SM, Ayello EA, et al. Anesthesia protocol for
              heel pressure ulcer debridement. Adv Skin Wound Care.
              2012;25(5):209-219. doi:10.1097/01.ASW.0000414704.48514.fb.
            </li>
            <li id="literature-5">
              Schiffman J, Golinko MS, Yan A, Flattau A, Tomic-Canic M, Brem H.
              Operative debridement of pressure ulcers. World J Surg.
              2009;33(7):1396-1402. doi:10.1007/s00268-009-0024-4
            </li>
            <li id="literature-6">
              Westby MJ, Dumville JC, Soares MO, Stubbs N, Norman G. Dressings
              and topical agents for treating pressure ulcers. Cochrane Database
              Syst Rev. 2017;6(6):CD011947. Published 2017 Jun 22.
              doi:10.1002/14651858.CD011947.pub2.
            </li>
            <li id="literature-7">
              Nguyen R, Khanna NR, Safadi AO, Sun Y. Bacitracin Topical. In:
              StatPearls. Treasure Island (FL): StatPearls Publishing; November
              25, 2021.
            </li>
            <li id="literature-8">
              Sauerbrei A. Bactericidal and virucidal activity of ethanol and
              povidone-iodine. Microbiologyopen. 2020;9(9):e1097.
              doi:10.1002/mbo3.1097
            </li>
            <li id="literature-9">
              Durani P, Leaper D. Povidone-iodine: use in hand disinfection,
              skin preparation and antiseptic irrigation. Int Wound J.
              2008;5(3):376-387. doi:10.1111/j.1742-481X.2007.00405.x.
            </li>
            <li id="literature-10">
              Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa
              MA. Povidone iodine in wound healing: A review of current concepts
              and practices. Int J Surg. 2017;44:260-268.
              doi:10.1016/j.ijsu.2017.06.073.
            </li>
            <li id="literature-11">
              Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa
              MA. Povidone iodine in wound healing: A review of current concepts
              and practices. Int J Surg. 2017;44:260-268.
              doi:10.1016/j.ijsu.2017.06.073.
            </li>
            <li id="literature-12">
              Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa
              MA. Povidone iodine in wound healing: A review of current concepts
              and practices. Int J Surg. 2017;44:260-268.
              doi:10.1016/j.ijsu.2017.06.073.
            </li>
            <li id="literature-13">
              Yildirim A, Metzler P, Lanzer M, Lübbers HT, Yildirim V.
              Solcoseryl Dental-Adhäsivpaste — Wirkmechanismus und Risiken.
              Swiss Dent J. 2015;125(5):612-613.
            </li>
            <li id="literature-14">
              Dibirov M.D. Yataq yaraları: profilaktika və müalicə// Tibbi
              məsləhət № 3-4 2013
            </li>
            <li id="literature-15">
              Kollagenaza üzrə tibbi tətbiq təlimatı, RLS.
            </li>
            <li id="literature-16">Baneotsin üzrə tibbi tətbiq təlimatı</li>
            <li id="literature-17">
              Betadin<sup>®</sup> (məhlul, məlhəm) dərman preparatının tətbiq
              təlimatı. RU P№015282/03, RU P№015282/02.
            </li>
            <li id="literature-18">
              Axtyamova N.E. Az hərəkətli xəstələrdə yataq yaralarının müalicəsi
              // RMJ. 2015. № 26. S. 1549-1552.
            </li>
            <li id="literature-19">
              Mupirotsin üzrə tibbi tətbiq təlimatı, RLS.
            </li>
            <li id="literature-20">
              Sulfargin, məlhəm üzrə tibbi tətbiq təlimatı, RLS.
            </li>
            <li id="literature-21">
              Hidrokortizol asetat üzrə tibbi tətbiq təlimatı, RLS.
            </li>
            <li id="literature-22">
              Hidrokortizol asetat üzrə tibbi tətbiq təlimatı, RLS.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};
