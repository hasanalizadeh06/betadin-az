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

export default function SvechiOtMolochnicyAz() {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) {
        setNavTitleHidden(true);
        setSecondaryNavOpened(false);
      } else {
        setNavTitleHidden(false);
      }
    };

    const handleResize = () => {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Skrelleme40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Skrelleme80');
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

  return (
    <main>
      <article>
        <div className="container-page-header">
          <div className="container">
            <div className="page-header page-header-breadcrumbs">
              <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="https://betadin.ru">
                    <span property="name">Ana səhifə</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/">
                    <span property="name">Kandidadan şamlar</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Kandidadan şamlar</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Kandidadan şamlar: necə seçmək və tətbiq etmək</h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      height={112}
                      width={115}
                      src="/icon-230x224.webp"
                      alt="başlıq yanında şəkil"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">«Kandida» anlayışına nə daxildir</h2>
                <div className="page-header-body">
                  <p>
                    <strong>Kandidoz («kandida»)</strong> – Candida cinsi maya kimi göbələklərin həddindən artıq çoxalması zamanı yaranan selikli qişaların infeksion xəstəliyidir.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#svechi-ot-molochnicy-na-osnove-antiseptikov">Antiseptik şamlar</a>
                  </li>
                  <li>
                    <a href="#svechi-na-osnove-preparatov-azolovoy-gruppy">Azol şamları</a>
                  </li>
                  <li>
                    <a href="#svechi-ot-molochnicy-na-osnove-ketokonazola">Antibiotikli şamlar</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1145/ed6f76b316c3b1d1fcf39aa847ca0437b5216abab8bb3b121b80e39ffc366d47-730x615/frame-655-8-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1145/ed6f76b316c3b1d1fcf39aa847ca0437b5216abab8bb3b121b80e39ffc366d47-730x615/frame-655-8-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/images/encyclopedia/svechi-molochnicy-header.jpg"
                      alt="Kandidadan şamlar"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}${navTitleHidden ? ' nav-content-title-hidden' : ''}`}>
              <ul>
                <li>
                  <a href="#simptomy-vaginalnogo-kandidoza-molochnicy">Vaginal kandidozun (kandida) simptomları</a>
                </li>
                <li>
                  <a href="#prichiny-provociruyushchie-poyavlenie-molochnicy">Kandida yaranmasına səbəb olan amillər</a>
                </li>
                <li>
                  <a href="#diagnostika">Diaqnostika</a>
                </li>
                <li>
                  <a href="#chem-lechit-vaginalnyy-kandidoz-molochnicu">Vaginal kandidozu (kandida) necə müalicə etmək lazımdır?</a>
                </li>
                <li>
                  <a href="#kakie-byvayut-svechi-ot-molochnicy">Kandidadan hansı şamlar olur?</a>
                </li>
                <li>
                  <a href="#zaklyuchenie">Nəticə</a>
                </li>
                <li>
                  <a href="#literatura">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened((prev) => !prev)}>Məzmun</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${secondaryNavOpened ? ' nav-content__open' : ''}${navTitleHidden ? '' : ' nav-content-title-hidden'}`}>
          <ul>
            <li>
              <a href="#simptomy-vaginalnogo-kandidoza-molochnicy">Vaginal kandidozun (kandida) simptomları</a>
            </li>
            <li>
              <a href="#prichiny-provociruyushchie-poyavlenie-molochnicy">Kandida yaranmasına səbəb olan amillər</a>
            </li>
            <li>
              <a href="#diagnostika">Diaqnostika</a>
            </li>
            <li>
              <a href="#chem-lechit-vaginalnyy-kandidoz-molochnicu">Vaginal kandidozu (kandida) necə müalicə etmək lazımdır?</a>
            </li>
            <li>
              <a href="#kakie-byvayut-svechi-ot-molochnicy">Kandidadan hansı şamlar olur?</a>
            </li>
            <li>
              <a href="#zaklyuchenie">Nəticə</a>
            </li>
            <li>
              <a href="#literatura">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened((prev) => !prev)}>Məzmun</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətini əvəz etmir</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              İnsan orqanizmində çoxlu mikoroorganizmlər yaşayır, onlar ev sahibi ilə zəruri tarazlıq və birgəyaşayış vəziyyətindədirlər. Bu balans onlara qarşılıqlı yaşamağa kömək edir. Ayrı-ayrı mikroorqanizmlərin sayının artması səbəbindən yaranan hər hansı dəyişiklik, vagina mikroflorasının ümumi tərkibinin pozulmasına və nəticədə xəstəliklərin yaranmasına səbəb olur
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              . Beləliklə, Candida cinsi maya kimi göbələklərin həddindən artıq çoxalması zamanı kandidoz («kandida») inkişaf edir – bu patogenlə dərinin zədələnməsi zamanı selikli qişaların infeksion xəstəliyi və mikoz.
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
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1146/4d248cd23f60b6aa77db501d90cd454439ba1a237fcbc69e200802c186031d21-650x0/istockphoto-1341663000-2048x2048-2-1-1-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1146/4d248cd23f60b6aa77db501d90cd454439ba1a237fcbc69e200802c186031d21-650x0/istockphoto-1341663000-2048x2048-2-1-1-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/candidiasis.png"
                alt="Kandida"
              />
            </picture>

            <p>Göbələklərlə xarici cinsi orqanların və vaginanın zədələnməsinə vulvovaginal kandidoz deyilir.</p>

            <div className="green">
              <p>
                Rusiya ərazisində vaginal kandidoz vaginanın bütün infeksion zədələnmələri arasında ikinci yeri tutur
                <sup>
                  <a href="#literatura-1">2</a>
                </sup>
                . ABŞ və Avropa ölkələrində hər il bu xəstəliyin 13 milyon hadisəsi qeydə alınır
                <sup>
                  <a href="#literatura-2">3</a>
                </sup>
                .
              </p>
            </div>

            <h2 id="simptomy-vaginalnogo-kandidoza-molochnicy">Vaginal kandidozun (kandida) simptomları</h2>
            <div className="list-base">
              <p>
                Adətən, maya kimi <strong>Candida</strong> göbələklərinin aktiv çoxalması bunlarla özünü göstərir:
              </p>
              <ul>
                <li>
                  periney nahiyəsində <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/">qaşınma</a> və{' '}
                  <a href="https://betadin.ru/encyclopedia/zhzhenie-vo-vlagalishche/">yanma</a>
                </li>
                <li>şişkinlik və güclü qızarma</li>
                <li>vaginadan kəsmiyə bənzər ifrazatlar</li>
                <li>sidik ifrazı zamanı və cinsi əlaqə zamanı ağrı</li>
                <li>duşdan sonra, menstruasiyadan əvvəl və hamiləlik zamanı simptomların güclənməsi</li>
              </ul>
            </div>

            <p>
              Vulvovaginal kandidozun mürəkkəb formasında bulanıq maye ilə kiçik qabarcıqların yaranması mümkündür, onlara «vezikullar» deyilir. Onlar partlaya və dərinin səthi təbəqəsinin - epitelin zədələnməsini əmələ gətirə bilər
              <sup>
                <a href="#literatura-3">4</a>
              </sup>
              .
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>İntim zonada qaşınma</strong>
                </p>
                <p>İntim zonada qaşınma niyə yaranır və bu xoşagəlməz simptomu necə aradan qaldırmaq olar?</p>
                <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/" className="btn btn-green" target="_blank" rel="noreferrer">
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1938/1624f25edba39d1d283c2a4b74ce9420e366b5350ca2cf4012f5ba213939d029-310x235/zud-v-intimnoj-zone-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1938/1624f25edba39d1d283c2a4b74ce9420e366b5350ca2cf4012f5ba213939d029-310x235/zud-v-intimnoj-zone-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="/images/encyclopedia/zud-v-intimnoj-zone.png"
                  alt="İntim zonada qaşınma - önizləmə"
                />
              </picture>
            </div>

            <h2 id="prichiny-provociruyushchie-poyavlenie-molochnicy">Kandida yaranmasına səbəb olan amillər</h2>
            <div className="list-base">
              <p>Candida göbələklərinin aktiv çoxalması aşağıdakı əlverişsiz amillərin təsiri səbəbindən başlayır:</p>
              <ul>
                <li>
                  <strong>Dərman preparatlarının qəbulu</strong>: antibiotiklər, sitostatiklər (şiş əleyhinə preparatlar), hormonal kontraseptivlər, kortikosteroidlər, kimyaterapiya
                </li>
                <li>
                  <strong>Xroniki xəstəliklər</strong>, immunitetin azalması ilə müşayiət olunan: onkologiya, uşaqlıq əlavələrinin xroniki iltihabı
                </li>
                <li>
                  <strong>Endokrin xəstəliklər</strong>: şəkərli diabet, hipotiroidizm
                </li>
                <li>
                  <strong>Mexaniki</strong>: sintetik parçalardan olan sıx alt paltarı geyinmək, daxiliuşaqlıq spiraldan istifadə, vagina toxumalarının zədələnməsi
                </li>
                <li>
                  <strong>Fizioloji</strong>: hamiləlik, menopauza
                </li>
                <li>
                  <strong>Psixoloji</strong>: stress, xroniki yorğunluq
                </li>
                <li>
                  <strong>Digərləri</strong>: disbakterioz, mübadilənin pozulması, iqlimin dəyişməsi, intim gigiyena qaydalarına əməl edilməməsi
                </li>
              </ul>
            </div>

            <p>
              Bu amillərin olması «<strong>kandida</strong>» yaranmasının <strong>məcburi şərti deyil</strong>, lakin onun yaranması və xəstəliyin daha ağır gedişi ehtimalı əhəmiyyətli dərəcədə artır. Effektiv müalicə kompleks olmalıdır, yəni təkcə <strong>Candida</strong> göbələklərini sıxışdırmaqla yanaşı, onların böyüməsinə səbəb olan səbəbləri də aradan qaldırmalıdır.
            </p>

            <h2 id="diagnostika">Vaginal kandidozun diaqnostikası</h2>
            <p>
              Diaqnostikanı ginekoloq həkim vizual müayinə, xəstənin şikayətləri və laboratoriya analizlərinin nəticələri əsasında aparır, bunlar göbələklərin növünü, onların miqdarını və müxtəlif antifungal preparatlara reaksiyasını müəyyən etməyə imkan verir. Bu metodların məcmusu ən effektiv müalicəni seçməyə imkan verir.
            </p>

            <p>
              Vaginal kandidoz kəskin və xroniki olur. Kəskin kandidoz forması üçün xəstəliyin parlaq şəkildə özünü göstərməsi xarakterikdir və müddəti iki aydan çox olmur. Əgər müalicə düzgün seçilməyibsə, xəstəlik daha uzun müddət davam edə və ya daim qayıda bilər. Bu halda xəstəlik xroniki gedişə malikdir. Ona görə də müalicə üçün göbələklərdə onlara alışmaya səbəb olmayacaq preparatı düzgün seçmək çox vacibdir.
            </p>

            <h2 id="chem-lechit-vaginalnyy-kandidoz-molochnicu">Vaginal kandidozu (kandida) necə müalicə etmək lazımdır?</h2>
            <p>
              «Kandida» müalicəsi üçün həm sistemli vasitələr (daxilə qəbul üçün tabletlər), həm də yerli vasitələr istifadə olunur ki, onlar bilavasitə infeksiya ocağına - vaginal şamlar və tabletlər, yuma üçün məhlullar, məlhəmlər daxil edilir.
            </p>

            <div className="list-base">
              <p>Ən çox ginekoloji təcrübədə vaginal şamlardan istifadə olunur, onların əsas üstünlükləri bunlardır:</p>
              <ul>
                <li>Bilavasitə zədələnmə ocağında təsir</li>
                <li>Bütün orqanizmə minimal təsir</li>
                <li>Əks göstərişlərin minimal mümkün siyahısı</li>
                <li>Preparatların böyük seçimi</li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1147/b3b664bc9734e08e36ec8323c6ea0501e5b6c09244ac2bbf978c55e639c76ec4-650x0/istockphoto-1341663000-2048x2048-2-1-2-650x275.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1147/b3b664bc9734e08e36ec8323c6ea0501e5b6c09244ac2bbf978c55e639c76ec4-650x0/istockphoto-1341663000-2048x2048-2-1-2-1300x550.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={275}
                width={650}
                src="/images/encyclopedia/candidiasis-treatment.png"
                alt="Kandida müalicəsi"
              />
            </picture>

            <h2 id="kakie-byvayut-svechi-ot-molochnicy">Kandidadan hansı şamlar olur</h2>
            <p>Vaginal şamların əsas fərqi müxtəlif təsir edən maddədir ki, onun hesabına müxtəlif müalicəvi təsirlər göstərilir.</p>

            <div className="list-base">
              <p>Kandidadan şamların tərkibinə daxil olan preparatları şərti olaraq aşağıdakı qruplara bölmək olar:</p>
              <ol>
                <li>Antiseptiklər (məsələn, povidon-yod)</li>
                <li>Azollar (məsələn, ketokonazol, sertakonazol)</li>
                <li>Polien antibiotiklər (məsələn, nistatin, natamisin)</li>
                <li>Kombinə edilmiş preparatlar</li>
              </ol>
            </div>

            <p>Yuxarıda qeyd edilən preparatlar əsasında şamların təsir mexanizmlərini və xüsusiyyətlərini nəzərdən keçirək.</p>

            <h3 id="svechi-ot-molochnicy-na-osnove-antiseptikov">Antiseptiklər əsasında kandidadan şamlar</h3>

            <h4 id="povidon-yod-betadin">Povidon-yod (Betadin®)</h4>

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
                    alt="Betadin"
                  />
                </picture>
              </div>

              <p>
                <a href="https://betadin.ru/encyclopedia/povidon-jod/">Povidon-yod</a> – antiseptik vasitə. Yodun və povidonun kompleksini təşkil edir. Belə formulaya görə dəri və selikli qişalarla təmasda povidondan aktiv{' '}
                <a href="https://betadin.ru/encyclopedia/jod/">yodun</a> tədricən sərbəst buraxılması baş verir ki, bu da preparatın uzunmüddətli təsirini təmin edir
                <sup>
                  <a href="#literatura-4">5</a>
                </sup>
                .
              </p>

              <p>
                Preparatın <strong>təsir mexanizmi</strong> zərərli mikroorqanizmlərin hüceyrələrinin tərkibinə daxil olan əsas zülalların və fermentlərin inaktivasiyası və məhvinə əsaslanır. Nəticədə funqisid təsir yaranır – göbələyin ölümü. Patogenlərin əksəriyyəti 1 dəqiqə ərzində məhv ola bilər
                <sup>
                  <a href="#literatura-4">5</a>
                </sup>
                .
              </p>

              <p>
                Povidon-yod göbələklərə, streptokokklara, stafilokokklara, sadə hüceyrəlilərə, viruslara və bakteriyalara qarşı aktivdir. Bundan əlavə, tədqiqatlar nəticəsində göstərilmişdir ki, preparat yetkin bakterial və göbələk bioplenkalara təsir göstərir
                <sup>
                  <a href="#literatura-5">6</a>
                </sup>
                . Bioplenkalar dərman vasitələrinin nüfuz etməsinə mane olan qoruyucu "günbəz" yaradan mikroorqanizmlərin birliklərini təşkil edir. Povidon-yod əsasında <span style={{ color: '#0f780b' }}>Betadin®</span> şamları bioplenkalar yarada bilən bu cür mikroorqanizmlərə qarşı təsirlilik nümayiş etdirir.
              </p>

              <p>
                Çox vaxt kandida müalicəsinin təsirsizliyi göbələklərin müəyyən preparata "alışması" ilə əlaqədardır. Tədqiqat nəticələrinə görə, <strong>povidon-yod rezistentliyin inkişafına səbəb olmur</strong> – mikroorqanizmlərin dərmanların təsirinə qarşı həssaslığının olmaması
                <sup>
                  <a href="#literatura-6">7</a>
                </sup>
                .
              </p>

              <p>
                Bəzən kandidoz (kandida) başqa infeksiyalarla birləşir. <span style={{ color: '#0f780b' }}>Betadin®</span> şamlarının geniş təsir spektri hətta belə birləşmiş xəstəlikləri müalicə etməyə imkan verir.
              </p>

              <p>
                Vaginal kandidozun müalicəsi üçün gecə vaxtı vaginaya 7 gün ərzində 1 şam daxil edilir. Müalicədən əvvəl mütləq həkimlə məsləhətləşmək lazımdır, çünki preparatın əks göstərişləri var.
              </p>

              <p>
                Beləliklə, povidon-yod əsasında şamlar (<span style={{ color: '#0f780b' }}>Betadin®</span>) dərman vasitələrinin müasir tələblərinə cavab verir. Preparat bir çox xəstələrdə yaxşı dözümlülük nümayiş etdirir
                <sup>
                  <a href="#literatura-8">9</a>
                </sup>
                , həmçinin vaginal mikrofloranın bərpası qabiliyyətini dəstəkləyir
                <sup>
                  <a href="#literatura-7">8</a>
                </sup>
                .
              </p>

              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-svechi-instruktsiya/">
                  Təlimat
                </a>
              </p>
            </div>

            <h4 id="vaginalnye-tabletki-na-osnove-dekvaliniya-hlorida">Dekvalinium xlorid əsasında vaginal tabletlər</h4>
            <p>
              Dekvalinium xlorid – antiseptik preparat, onun <strong>təsir mexanizmi</strong> göbələk hüceyrəsinin fermentlərinin fəaliyyətinin pozulmasına əsaslanır ki, bu da sonradan göbələk hüceyrəsinin ölümünə gətirib çıxarır.
            </p>

            <p>
              <strong>Preparat qram-müsbət və qram-mənfi bakteriyalara</strong>, göbələklərə və viruslara qarşı aktivdir. İltihab əleyhinə təsirə malikdir.
            </p>

            <p>
              Kandida müalicəsi üçün 1 vaginal tablet 6 gün ərzində intravaginal daxil edilir
              <sup>
                <a href="#literatura-11">13</a>
              </sup>
              . Tam kursu keçmək lazımdır.
            </p>

            <p>
              Preparatın mənfi cəhətləri: vaginanın həddindən artıq quruyuğunda, tabletin həll olunmamış qalması ehtimalı var, yerli qıcıqlanma reaksiyaları, qaşınma, yanma və ya vagina selikli qişasının qızarması müşahidə oluna bilər.
            </p>

            <p>
              Qeyd etmək lazımdır ki, bu gün tərkibində xlor olan molekula malik olan bir sıra antiseptiklərin təsirliliyinin azalması müşahidə olunur
              <sup>
                <a href="#literatura-9">10</a>
              </sup>
              .
            </p>

            <h3 id="svechi-na-osnove-preparatov-azolovoy-gruppy">Azol qrupu preparatları əsasında kandidadan şamlar</h3>

            <h4 id="svechi-na-osnove-sertakonazola">Sertakonazol əsasında şamlar</h4>
            <p>
              <strong>Sertakonazol</strong> – imidazol və benzotiofenin törəməsi. Preparat <strong>Candida</strong> cinsi maya kimi göbələklərə, streptokokklara və stafilokokklara qarşı aktivdir
              <sup>
                <a href="#literatura-12">14</a>
              </sup>
              .
            </p>

            <p>
              Sertakonazol <strong>üçlü təsir göstərir</strong>: göbələklərin böyüməsini və çoxalmasını maneə törədir (fungistatic təsir), göbələklərin ölümünə səbəb olur (funqisid təsir) və vaginanın normal mikroflorasının əsas nümayəndələrinin – faydalı laktobakteriyaların yaşayıcılığını sıxışdırmır.
            </p>

            <p>
              Yerli tətbiqdə sertakonazol bilavasitə zədələnmə ocağında göbələklərə təsir göstərməyə başlayır. Eyni zamanda qan dövranına sorulmur ki, bu da preparatın yüksək təhlükəsizlik profilini göstərir.
            </p>

            <p>
              <strong>Sertakonazolun təsir mexanizmi</strong> ergosterol sintezinin sıxışdırılması və göbələk hüceyrə membranının keçiriciliyinin artmasından ibarətdir ki, bu da onun ölümünə səbəb olur.
            </p>

            <p>
              Kandida müalicəsi üçün sertakonazol ilə şamlar 1 dəfə vaginaya 1 şam daxil edilməklə tətbiq olunur. Simptomlar davam etdikdə 7 gündən sonra 1 şamın təkrar daxil edilməsi mümkündür.
            </p>

            <h4 id="svechi-na-osnove-ketokonazola">Ketokonazol əsasında şamlar</h4>
            <p>
              <strong>Ketokonazol</strong> – azol qrupunun antimikotik (göbələk əleyhinə) preparatı.
            </p>

            <p>
              <strong>Təsir mexanizmi</strong> fungistatic və funqisid təsirə malikdir.
            </p>

            <p>
              Lakin ketokonazola qarşı göbələklərin davamlılığı inkişaf edə bilər və xəstəlik ağırlaşmalarla xroniki formaya keçə bilər.
            </p>

            <p>
              Kandida müalicəsi üçün 1 şam 3-5 gün ərzində vaginaya daxil edilir
              <sup>
                <a href="#literatura-13">15</a>
              </sup>
              .
            </p>

            <p>
              Həkim tərəfindən təyin edilmiş müalicə sxeminə əməl etmək vacibdir, çünki tamamlanmamış terapiya xəstəliyin xroniki formasının inkişafına kömək edə bilər.
            </p>

            <h3 id="svechi-ot-molochnicy-na-osnove-ketokonazola">Polien antibiotikləri əsasında kandidadan şamlar</h3>

            <h4 id="svechi-na-osnove-natamicina">Natamisin əsasında şamlar</h4>
            <p>
              <strong>Natamisin</strong> – göbələk əleyhinə polien antibiotik. Geniş spektrli göbələk əleyhinə təsirə malikdir, göbələklərin ölümünə səbəb olur.
            </p>

            <p>
              Natamisinin <strong>təsir mexanizmi</strong> göbələk hüceyrəsinin membranlarının bütövlüyünün və fəaliyyətinin pozulmasına əsaslanır. Preparat Candida cinsi maya göbələklərinin əksəriyyətinə qarşı aktivdir. <strong>Dermatofitlərə - kif göbələklərinə qarşı natamisinə daha az həssaslığa malikdir</strong>.
            </p>

            <p>
              Preparatı vaginaya bir şam 1 dəfə/gündə gecə 3-6 gün ərzində daxil etməklə tətbiq edirlər
              <sup>
                <a href="#literatura-15">16</a>
              </sup>
              .
            </p>

            <p>
              Kursun müddətini müalicə edən həkim müəyyən edir. Simptomlar yox olduqdan dərhal sonra müalicəni dayandırmaq tövsiyə edilmir.
            </p>

            <h3 id="svechi-ot-molochnicy-na-osnove-kombinirovannyh-preparatov">Kombinə edilmiş preparatlar əsasında kandidadan şamlar</h3>
            <p>
              Vaginal tətbiq üçün kombinə edilmiş preparatlar göbələk əleyhinə, antibakterial və antiprotozoy təsirə malikdir.
            </p>

            <p>
              Bu preparatların birləşməsi göbələk hüceyrələrinin membranına aktiv təsir göstərməyə, onların ölümünə səbəb olmağa, həmçinin bir neçə mikroorqanizm tərəfindən törədilən infeksiyaları müalicə etməyə imkan verir.
            </p>

            <p>
              Bəzən bu vasitələrdən istifadə zamanı vagina selikli qişasının qaşınma, yanma, qıcıqlanması şəklində yerli reaksiyanın yaranması mümkündür.
            </p>

            <h2 id="zaklyuchenie">Nəticə</h2>
            <p>
              Hər hansı şamları tətbiq etməzdən əvvəl müalicə edən həkimlə məsləhətləşmək lazımdır, çünki hər bir preparatın əks göstərişləri və xəstəliyin gedişinin fərdi xüsusiyyətlərindən asılı olaraq öz dozalaşdırma rejimi var.
            </p>

            <p>
              Şübhəsiz ki, geniş təsir spektrinə malik, göbələk bioplenkalara qarşı aktiv olan, hətta dərmanlara davamlı mikroorqanizmlərə qarşı belə təsirliliyini saxlayan preparatlara üstünlük vermək lazımdır (məsələn, povidon-yod əsasında{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Betadin<sup>®</sup>
              </mark>{' '}
              şamları, sertakonazol əsasında suppozitorlər).
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Molçanov Oleq Leonidoviç</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalənin müəllifi</p>
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
                  alt="Molçanov Oleq Leonidoviç"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              Mövzu üzrə oxumaq
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
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
                        src="/images/encyclopedia/bakterialnyj-vaginoz-preview.png"
                        alt="Bakterial vaginoz - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Bakterial vaginoz</strong>
                    </p>
                    <p>
                      Qadınlarda patoloji ifrazatların demək olar ki, 90%-də bakterial vaginoz diaqnozu qoyulur. Bu xəstəlik niyə yaranır və necə müalicə olunur?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/">Ətraflı</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide swiper-slide-next">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1938/1624f25edba39d1d283c2a4b74ce9420e366b5350ca2cf4012f5ba213939d029-0x166/zud-v-intimnoj-zone-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1938/1624f25edba39d1d283c2a4b74ce9420e366b5350ca2cf4012f5ba213939d029-0x166/zud-v-intimnoj-zone-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/zud-v-intimnoj-zone-preview.png"
                        alt="İntim zonada qaşınma - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>İntim zonada qaşınma</strong>
                    </p>
                    <p>İntim zonada qaşınma niyə yaranır və bu xoşagəlməz simptomu necə aradan qaldırmaq olar?</p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/">Ətraflı</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/svechi-ot-vaginita-preview.png"
                        alt="Vaginitdən şamlar - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Vaginitdən şamlar</strong>
                    </p>
                    <p>
                      Vaginal şamlar formasında yerli preparatlarla vaginitin müalicəsi. Vaginadakı iltihaba qarşı şamları necə seçmək lazımdır?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/svechi-ot-vaginita/">Ətraflı</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="literatura">Ədəbiyyat siyahısı</h2>
            <ol className="literature">
              <li id="literatura-0">
                Prilepskaya V.N., Mirzabalaeva A.K., Kira E.F., Gomberg M.A., Apolihina I.A., Bayramova G.R. Qadınların cinsiyyət yollarından patoloji ifrazatlarla müşayiət olunan xəstəliklərin diaqnostikası və müalicəsi// Federal kliniki tövsiyələr. M., 2013. Səh. 50.
              </li>
              <li id="literatura-1">
                Kokoeva D. N., Medzidova M. K., Domova N. A., Kan N. E., Tyutyunnik V. L. Vaginal kandidozlu hamilələrdə vaxtından əvvəl doğuşun profilaktikası// Tibbi məsləhət. 2019;(7):52-56.
              </li>
              <li id="literatura-2">
                Vulvovaginal kandidoz. Cinsi yolla ötürülən xəstəliklərin müalicəsi üzrə təlimatlar, 2010. MMWR Recomm Rep. 2010;59(RR-12):61-63. Mövcuddur: https://www.cdc.gov/mmwr/pdf/rr/rr5912.pdf.
              </li>
              <li id="literatura-3">
                Kliniki tövsiyələr «Urogenital kandidoz»// Moskva, 2016, səh.22.
              </li>
              <li id="literatura-4">
                Betadin<sup>®</sup> suppozitorlərin tibbi tətbiqi üzrə təlimat, QN: П№015282/01.
              </li>
              <li id="literatura-5">
                Lepelletier D, Maillard JY, Pozzetto B, Simon A. Povidon-yod: Xüsusiyyətləri, Təsir Mexanizmləri və İnfeksiyaya Nəzarət və Staphylococcus aureus Dekolonizasiyasında Rolu. Antimicrob Agents Chemother. 2020;64(9):e00682-20. Nəşr 2020 Avq 20. doi:10.1128/AAC.00682-20.
              </li>
              <li id="literatura-6">
                Borisov İ. V. Povidon-yod – tanış preparatın yeni imkanları //Yaralar və yara infeksiyaları 2021, 8 (3): 12-18.
              </li>
              <li id="literatura-7">
                Romaşevski N. V. və b. Reproduktiv yaşda olan xəstələrdə vaginal disbiozların korreksiyası üçün Betadin (EGIS) tətbiqinin təcrübəsi // Rusiya mamalıq-ginekologiya assosiasiyasının bülleteni№ 1/2000.
              </li>
              <li id="literatura-8">
                Gasparyan S.A., Hazhbiev A.A., Ryjkov V.V. Vulvovaginal kandidozlu hamilələrdə sertakonazolun tətbiqi təcrübəsi. Tibbi Məsləhət. 2019;(13):160-165. https://doi.org/10.21518/2079-701X-2019-13-160-165.
              </li>
              <li id="literatura-9">
                Kvaşnina D.V., Kovalişena O.V. Sistemli icmal və rezistentliyin regional monitorinqinin təhlili üzrə məlumatlara görə mikroorqanizmlərin xlorgeksidinə davamlılığının yayılması//Fundamental və klinik tibb 2018;3(1):63-71.
              </li>
              <li id="literatura-10">
                Voznesenskaya N.V., Haritonov V.M., Burganova R.F., İstomina N.S., Saakyan K.G. Hamilələrdə vulvovaginal kandidozun müalicəsində Sertakonazol (zalain). Ulyanovsk tibbi-biologiya jurnalı. 2013;(2):36-39. Giriş rejimi: https://www.old.ulsu.ru/images/stories/antipoviv/ulsubook/2013/2-2013.pdf.
              </li>
              <li id="literatura-11">
                Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC, Villa MA. Yaraların sağalmasında povidon-yod: Cari konsepsiyaların və praktikanın icmalı. Int J Surg. 2017;44:260-268. doi:10.1016/j.ijsu.2017.06.073.
              </li>
              <li id="literatura-12">
                Dekvalinium xloridinin tibbi tətbiqi üzrə təlimat. RLS.
              </li>
              <li id="literatura-13">
                Sertakonazolun tibbi tətbiqi üzrə təlimat, RLS.
              </li>
              <li id="literatura-14">
                Ketokonazolun tibbi tətbiqi üzrə təlimat, RLS.
              </li>
              <li id="literatura-15">
                Natamisin tibbi tətbiq təlimatı, RLS.
              </li>
              <li id="literatura-16">
                Nistatin tibbi tətbiq təlimatı, RLS.
              </li>
              <li id="literatura-17">
                Makmiror kompleks, şamlar tibbi tətbiq təlimatı, RLS.
              </li>
              <li id="literatura-18">
                Neo-penotran, şamlar tibbi tətbiq təlimatı, RLS.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
