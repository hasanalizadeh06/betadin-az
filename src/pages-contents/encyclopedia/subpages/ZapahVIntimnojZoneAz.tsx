'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function ZapahVIntimnojZoneAz() {
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
                    <span property="name">İntim zonada qoxu</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">İntim zonada qoxu</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">İntim zonada xoşagəlməz qoxu: səbəbləri və aradan qaldırılması</h1>
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      height={112}
                      width={115}
                      src="/images/encyclopedia/zapah-icon.png"
                      alt="başlıq yanında şəkil"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">
                  İntim zonada qoxunun yaranma səbəbləri
                </h2>
                <div className="page-header-body">
                  <p>
                    Vagina bir sıra mikroorqanizmlərin birgə yaşadığı və qarşılıqlı təsir göstərdiyi unikal bioekosistem təşkil edir.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#kakie-vidy-zapaha-mogut-prisutstvovat-vo-vlagalishche-i-o-chem-oni-svidetelstvuyut">
                      Qoxu növləri
                    </a>
                  </li>
                  <li>
                    <a href="#chasto-zadavaemye-voprosy">Suallar</a>
                  </li>
                  <li>
                    <a href="#diagnostika">Diaqnostika</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1648/ed9566ff278bde1ceff9e5c88d32176c0c136ffac222e1735cfc489faf79c248-730x615/kartinka-banner-6-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1648/ed9566ff278bde1ceff9e5c88d32176c0c136ffac222e1735cfc489faf79c248-730x615/kartinka-banner-6-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/images/encyclopedia/zapah-header.jpg"
                      alt="İntim zonada qoxu"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#kakie-vidy-zapaha-mogut-prisutstvovat-vo-vlagalishche-i-o-chem-oni-svidetelstvuyut">
                    Vaginada hansı qoxu növləri ola bilər və onlar nə barədə şahidlik edir
                  </a>
                </li>
                <li>
                  <a href="#diagnostika">Diaqnostika</a>
                </li>
                <li>
                  <a href="#lechenie-ginekologicheskih-zabolevaniy-soprovozhdayushchihsya-poyavleniem-nepriyatnogo-zapaha">
                    Xoşagəlməz qoxunun yaranması ilə müşayiət olunan ginеkoloji xəstəliklərin müalicəsi
                  </a>
                </li>
                <li>
                  <a href="#profilaktika">Profilaktika</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
                </li>
                <li>
                  <a href="#literatura">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross">Məzmun</div>
            </nav>
          </div>
        </div>

        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#kakie-vidy-zapaha-mogut-prisutstvovat-vo-vlagalishche-i-o-chem-oni-svidetelstvuyut">
                Vaginada hansı qoxu növləri ola bilər və onlar nə barədə şahidlik edir
              </a>
            </li>
            <li>
              <a href="#diagnostika">Diaqnostika</a>
            </li>
            <li>
              <a href="#lechenie-ginekologicheskih-zabolevaniy-soprovozhdayushchihsya-poyavleniem-nepriyatnogo-zapaha">
                Xoşagəlməz qoxunun yaranması ilə müşayiət olunan ginеkoloji xəstəliklərin müalicəsi
              </a>
            </li>
            <li>
              <a href="#profilaktika">Profilaktika</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
            </li>
            <li>
              <a href="#literatura">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross">Məzmun</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətini əvəz etmir</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Normada vaginanın mikrobiosenozu təmsilçilərinin əsasını süd turşusu bakteriyaları (Lactobacillus) təşkil edir ki, onlar da hamısından üstün gəlir. Mikrob cəmiyyətinin təmsilçilərinin bir hissəsi şərti-patogendir ki, bunlar vaginada əhəmiyyətsiz miqdarda mövcuddur. Bu zaman şərti-patogen mikroorqanizmlərin artımı və miqdarı "faydalı" flora tərəfindən nəzarət edilir. Laktobasillər süd turşusunu istehsal edir ki, bunun sayəsində vaginada normada turş mühit (pH 3,8–4,4) saxlanılır. Bir tərəfdən bu, laktobakteriyaların çoxalması üçün əlverişli şəraitdir, digər tərəfdən isə — patogen mikrobların əksəriyyəti bu şəraitdə yaşaya və çoxala bilmir
              <sup>
                <a href="#literatura-0">1-3</a>
              </sup>
              .
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

            <div className="green">
              <p>
                Normada vaginada mikroorqanizmlərin düzgün nisbətində "faydalı" laktobakteriyaların üstünlüyü və süd turşusunun kifayət qədər istehsalı zamanı vaginada qoxu ya zəif turşdur, ya da yoxdur.
              </p>
            </div>

            <p>
              Orqanizmdə müxtəlif əlverişsiz şərtlərdə intim zonanın mikrobiosenozu tərkibində mikroorqanizmlərin nisbəti dəyişə bilər. Bu zaman təbii sağlam balans pozulur, laktobakteriyaların miqdarı azalır və çox miqdarda şərti-patogen mikrobların artımı başlayır ki, bu da bu və ya digər xoşagəlməz qoxunun yaranması ilə əlaqəli olur.
            </p>

            <div className="green">
              <p>
                Xoşagəlməz qoxu— bu xəstəliyin və ya intim zonada mikrofloranın pozulmasının olmasının özünəməxsus göstəricisidir.
              </p>
            </div>

            <h2 id="kakie-vidy-zapaha-mogut-prisutstvovat-vo-vlagalishche-i-o-chem-oni-svidetelstvuyut">
              Vaginada hansı qoxu növləri ola bilər və onlar nə barədə şahidlik edir
            </h2>

            <h3>Kəskin turş qoxu</h3>
            <p>
              İntim zonada kəskin turş qoxu (kefir qoxusu, turşuyan süd) daha çox vulvovagin kandidozunun inkişafı ilə əlaqəlidir ("<a href="https://betadin.ru/encyclopedia/svechi-ot-molochnicy/" title="Kandidozdan şamlar">
                kandidoz
              </a>
              "). Bu xəstəliyin digər əlamətləri vaginadan "kəsmiyəbənzər"{' '}
              <a href="https://betadin.ru/encyclopedia/vaginalnye-vydeleniya/" title="Vaginal ifrazatlar">
                ifrazatların
              </a>{' '}
              yaranması,{' '}
              <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/" title="İntim zonada qaşınma">
                qaşınma
              </a>{' '}
              və{' '}
              <a href="https://betadin.ru/encyclopedia/zhzhenie-vo-vlagalishche/" title="Vaginada yanma">
                yanma
              </a>{' '}
              xarici cinsi orqanlar bölgəsindədir. Kandidoz Candida cinsindən olan göbələklərin aktiv çoxalması ilə əlaqəlidir.
            </p>

            <div className="green">
              <p>
                İfrazatların xarakteri, bir qayda olaraq, menstrual sikl boyunca dəyişir, lakin xəstəlik olmadıqda onlar heç vaxt normal ifrazatlara xas olan xüsusiyyətlərini itirmirlər.
              </p>
            </div>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1649/36fc01e3902f829644102ef23a39050658058a97f1ef6ed877adaeedc441bab5-650x0/medical-kit-and-bandaid-509398-488-1-35-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1649/36fc01e3902f829644102ef23a39050658058a97f1ef6ed877adaeedc441bab5-650x0/medical-kit-and-bandaid-509398-488-1-35-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/acrid-smell.png"
                alt="İntim zonada kəskin turş qoxu"
              />
            </picture>

            <h3>Balıq qoxusu</h3>
            <p>
              <strong>Balıq qoxusu</strong> (çürük balıq qoxusu), həmçinin <strong>xlor qoxusu</strong> infeksion qeyri-iltihabi proses ilə əlaqəlidir ki, bu zaman vaginada bir qayda olaraq müxtəlif mikroorqanizm növlərinin bol artımı baş verir. Bu vəziyyətdə ginekoloq tez-tez qadında{' '}
              <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/" title="Bakterial vaginoz">
                bakterial vaginoz
              </a>{' '}
              diaqnozu qoyur. Bu, əsasında normal mikrofloranın pozulması və şərti-patogen bakteriyaların (Gardnerella vaginalis, Atopobium vaginae və bir sıra digərləri) çoxalması dayanan xəstəlikdir. Bakterial vaginozda vaginadan bol və ya orta boz-ağımtıl ifrazatlar müşahidə olunur.
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1650/dc0552fbc65bcc5e493be1cf88e93478f0be1378f40b26d94c3ccc1e7157095b-650x0/medical-kit-and-bandaid-509398-488-1-36-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1650/dc0552fbc65bcc5e493be1cf88e93478f0be1378f40b26d94c3ccc1e7157095b-650x0/medical-kit-and-bandaid-509398-488-1-36-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/fish-smell.png"
                alt="İntim zonada balıq qoxusu"
              />
            </picture>

            <h3>Xüsusi irinli qoxu</h3>
            <p>
              <strong>Xüsusi "irinli" xoşagəlməz qoxu</strong> iltihabi xəstəliklər üçün xarakterikdir: vaginada iltihab (kolpit), uşaqlıq boynunda iltihab (servisit), uşaqlıqda iltihabi proseslər (endometrit) və uşaqlıq borularında və yumurtalıqlarda (salpinqooforit). İltihabın xarakterik əlamətləri vaginadan bol irinli ifrazatlar, qarının aşağı hissəsində müxtəlif intensivlikdə ağrılı hisslər, bəzən bədən hərarətinin yüksəlməsidir. Kiçik çanaq orqanlarının iltihabi xəstəliklərinin törədiciləri müxtəlif patogen və şərti-patogen mikroorqanizmlərdir. Cinsi yolla ötürülən infeksiyaların (CYİ) törədiciləri arasında tez-tez qonokoklar, xlamidiyalar, trixomonadalar rast gəlinir.
            </p>

            <h3>Sarımsaq və ya soğan qoxusu</h3>
            <p>
              <strong>Sarımsaq və ya soğan qoxusu</strong> iltihabi xəstəliklərin olmasından (kolpit, servisit) şahidlik edə bilər, həmçinin vaginanın mikroflorasının pozulması, laktobakteriyaların miqdarının azalması və qarışıq floranın üstünlüyü ilə əlaqəli ola bilər, həmçinin orqanizmdə immunçatışmazlıq və maddələr mübadiləsinin pozulmasından şahidlik edə bilər.
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1651/584407f57150dc1435881dac1ea683e6cf078c62cace548c4d77b3f346a0364a-650x0/medical-kit-and-bandaid-509398-488-1-37-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1651/584407f57150dc1435881dac1ea683e6cf078c62cace548c4d77b3f346a0364a-650x0/medical-kit-and-bandaid-509398-488-1-37-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/garlic-onion-smell.png"
                alt="İntim zonada sarımsaq və ya soğan qoxusu"
              />
            </picture>

            <h2 id="diagnostika">Diaqnostika</h2>
            <p>
              İntim zonada xoşagəlməz qoxu olduqda diaqnostikanın əsası bu simptomu yaratmış konkret mikroorqanizmlərin aşkar edilməsidir. Müəyyən patogenlərin olmasını aşkar edən müxtəlif laborator diaqnostika metodları mövcuddur.
            </p>
            <p>
              İntim zonada xoşagəlməz qoxu yarandıqda qadın ginekoloq həkimə müraciət etməlidir. Mütəxəssis müayinə alqoritmini düzgün təyin edə biləcək.
            </p>

            <div className="list-base">
              <p>
                <strong>Standart diaqnostika sxemi bunları əhatə edir:</strong>
              </p>
              <ul>
                <li>Qəbulda həkimlə narahat edən simptomlar barədə söhbət</li>
                <li>
                  Ginеkoloji kreслoda müayinə, həmçinin sonrakı diaqnostika üçün sidik-cinsiyyət orqanlarından ifrazat götürülməsi
                </li>
                <li>
                  Materialın laborator tədqiqi (vaginadan yaxmaların mikroskopik tədqiqi, törədicinin DNT-sini müəyyən etmək üçün PTR (polimeraz zəncirvari reaksiya) metodları, vaginal yaхmadan mikroorqanizmlərin xüsusi qidalı mühitlərə əkilməsi (müəyyən bakteriyaların artımının identifikasiyası üçün) və digər tədqiqatlar)
                </li>
              </ul>
            </div>

            <h2 id="lechenie-ginekologicheskih-zabolevaniy-soprovozhdayushchihsya-poyavleniem-nepriyatnogo-zapaha">
              Xoşagəlməz qoxunun yaranması ilə müşayiət olunan ginеkoloji xəstəliklərin müalicəsi
            </h2>
            <p>
              İntim zonada xoşagəlməz qoxu müstəqil xəstəlik deyil, bu cinsi orqanlarda patoloji prosesin olmasından şahidlik edən simptomdur. Ona görə də xoşagəlməz qoxunu aradan qaldırmaq üçün bu simptomu yaratmış səbəbi müəyyən etmək və müalicə etmək lazımdır.
            </p>
            <p>
              Bir qayda olaraq, xoşagəlməz qoxu müəyyən növ bakteriyaların aktiv artımı və çoxalması zamanı yaranır, ona görə də terapiyanın əsas məqsədi onların məhv edilməsi və ya patogenlərin miqdarının normal səviyyəyə endirilməsidir.
            </p>
            <p>Preparatın seçilməsi xoşagəlməz qoxu ilə müşayiət olunan xəstəliyi törədən mikroorqanizmin növündən asılı olacaq.</p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>Candida cinsindən olan göbələklərin törətdiyi vulvovagin kandidozda</strong> göbələyəqarşı preparatlar təyin edilir, həmçinin göbələyəqarşı aktivliyə malik olan bəzi antiseptiklərdən istifadə mümkündür (məsələn, Betadin<sup>®</sup>).
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Viruslar, bakteriyalar və ya sadə canlıların törətdiyi cinsi yolla ötürülən infeksiyalarda (CYİ)</strong> bir qayda olaraq vaginada yerli antibakterial və ya antiseptik vasitələrlə birlikdə daxilə qəbul üçün geniş təsir spektrli sistem antibiotikləri təyin edilir.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Bakterial vaginoz – polimikrob xəstəliyidir</strong>. O, əksər hallarda şərti-patogen floranın miqdarını azalda bilən yerli vaginal preparatların təyini ilə müalicə edilir.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>İntim zonada xoşagəlməz qoxu törədən bu və ya digər mikroorqanizmlərin birləşmələrində</strong> vasitənin seçilməsi onun təsir spektrindən asılıdır. Yaxşı təhlükəsizlik profilinə malik geniş təsir spektrli preparatlara üstünlük verilir.
                </p>
              </div>
            </div>

            <h3 id="betadin-dlya-lecheniya-zapaha-vo-vlagalishche">
              İntim zonada xoşagəlməz qoxu törədən xəstəliklərin müalicəsi üçün Betadin® şamları
            </h3>

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
                Ginekologiyada müalicə və profilaktika üçün geniş istifadə olunan preparatlardan biri vaginal şamlar şəklində buraxılan Betadin<sup>®</sup>-dir. Betadin<sup>®</sup>-in aktiv maddəsi povidon-yoddur — bu, yod və povidonun kompleksidir ki, o da "daşıyıcı" və depo rolu oynayır.
              </p>

              <p>
                Preparatın iltihab zonasında təsiri zamanı depodan tədricən aktiv yod ayrılır ki, bu da qram-müsbət və qram-mənfi bakteriyalar, viruslar, göbələklər və bəzi sadə canlılara qarşı geniş təsir spektrinə malikdir. Polimer molekul sayəsində yod iltihablanmış toxumalara təqribən 1 mm dərinliyə nüfuz edə bilir, bu zaman sonradan onların bərpası proseslərini pozmur
                <sup>
                  <a href="#literatura-7">9</a>
                </sup>
                .
              </p>

              <p>
                Tədqiqatlarda kiçik konsentrasiyada belə sərbəst yodun viruslar və bakteriyalara qarşı əhəmiyyətli təsiri nümayiş etdirilmişdir ki, bu da digər antiseptiklərdən üstündür. Həmçinin preparatın yaxşı dözümlülüyü və yüksək təhlükəsizlik profili aşkar edilmişdir
                <sup>
                  <a href="#literatura-8">9</a>
                </sup>
                .
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noreferrer"
                  href="/betadin-svechi-instruktsiya/"
                >
                  Təlimat
                </a>
              </p>
            </div><div className="list-base">
              <p>
                <strong>Betadin® preparatının üstünlükləri bunlar hesab edilə bilər:</strong>
              </p>
              <ul>
                <li>Yüksək aktivlik və geniş təsir spektri (müxtəlif etiologiyalı vaginada iltihab zamanı tətbiq edilə bilər)</li>
                <li>İltihab ocağında müxtəlif fiziki-kimyəvi mühitlərdə (qan, irin və s.) aktivliyin saxlanması</li>
                <li>"Alışma" və preparatın təsirinə həssaslığın azalması hallarının qeydə alınmaması</li>
                <li>Müalicədən sonra vaginanın turşuluğunun normallaşması hesabına normal vaginal mikrofloranın bərpası üçün əlverişli şəraitin yaradılması</li>
                <li>
                  Geniş əlçatanlıq (preparatın olması və aşağı qiymət)
                  <sup>
                    <a href="#literatura-7">8,9,10</a>
                  </sup>
                </li>
              </ul>
            </div>

            <p>
              Betadin<sup>®</sup> preparatı vaginal şamlar, məlhəm və xarici istifadə üçün məhlul şəklində buraxılır.
            </p>

            <p>
              Mikroorqanizmlərə təsirdən maksimum effekt ilk 30 saniyə ərzində baş verir və artıq 1 dəqiqədən sonra mikrobların əksəriyyətinin məhvi müşahidə olunur
              <sup>
                <a href="#literatura-10">11</a>
              </sup>
              . Betadin<sup>®</sup> şamlarının istifadəsi üçün göstərişlər vaginanın kəskin və xroniki iltihabi xəstəlikləri, qarışıq qeyri-spesifik infeksiyalar, vaginanın kandidozu, həmçinin trixomoniaz (CYİ-yə aiddir) və ginеkoloji əməliyyatlardan əvvəl profilaktikadır
              <sup>
                <a href="#literatura-10">11</a>
              </sup>
              .
            </p>

            <div className="green">
              <p>
                Vaginada iltihabi proseslərin müalicəsi üçün, həmçinin cərrahi müdaxilədən əvvəl profilaktika üçün Betadin<sup>®</sup> 7 gün ərzində gecələr 1 vaginal şam istifadə edilir.
              </p>
            </div>

            <p>
              Beləliklə, geniş mikroorqanizm dairəsinə təsir və istifadə rahatlığı sayəsində Betadin<sup>®</sup> şamlarını intim zonada xoşagəlməz qoxunun yaranması ilə əlaqəli xəstəliklərin müalicəsi üçün universal vasitə adlandırmaq olar.
            </p>

            <h2 id="profilaktika">Profilaktika</h2>
            <div className="list-base">
              <p>
                <strong>
                  İntim zonada xoşagəlməz qoxunun yaranması ilə əlaqəli xəstəliklərin profilaktikası bunları əhatə edir:
                </strong>
              </p>
              <ul>
                <li>İntim gigiyena qaydalarına riayət etmək</li>
                <li>İmmunitetin saxlanması</li>
                <li>Ginekoloq həkimə müntəzəm müraciət</li>
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
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <h2 id="chasto-zadavaemye-voprosy">Tez-tez verilən suallar</h2>

            <h3>Bir menstrual sikl ərzində intim bölgədə qoxunun dəyişməsi normaldırmı?</h3>
            <p>
              Menstrual sikl boyunca qadın orqanizmində daimi olaraq bu və ya digər hormonların miqdarı, həmçinin onların bir-birinə nisbəti dəyişir. Bununla mikrobiosenozun növ tərkibinin, bu və ya digər bakteriyaların sayının müəyyən dəyişməsi əlaqəli ola bilər. Lakin dəyişən hormonal parametrlərdə belə intim zonada qoxu kəskin, xoşagəlməz olmamalı və yuxarıda təsvir edilən patologiyanın digər əlamətlərini daşımamalıdır.
            </p>

            <h3>Vaginadan dəmir qoxusu nə demək ola bilər?</h3>
            <p>
              Dəmir qoxusu menstrual qanaxma zamanı normadır, bu vaginada qanın olmasının əlamətidir. Menstrual sikl ortasında nadir hallarda ovulyasiya prosesini müşayiət edən qan zolaqları və ya kiçik qanlı ifrazatlarla birlikdə dəmir qoxusu görünə bilər (yumurta hüceyrəsinin yumurtalıqdan çıxması).
            </p>

            <h3>İntim zonada qoxu ilə mübarizə aparmağa kömək edəcək intim gigiyena vasitələri hansılardır?</h3>
            <p>
              Əgər intim zonada qoxu narahatlıq yaradırsa, mütəxəssisə müraciət etmək lazımdır. Patologiya olmadıqda, əgər intim zonada qoxu hələ də narahatlıq yaradırsa, tərkibinə aqressiv komponentlər (spirt, qələvi, boyalar) daxil olmamalı olan intim gigiyena üçün xüsusi vasitələrdən istifadə etmək olar. Məsələn, Zalagel<sup>®</sup> İntim tərkibində qoruyucu və dezodorantlaşdırıcı təsirə malik, intim zonada rahatlığın saxlanmasına kömək edən çay ağacı yağı var.
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
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/vaginalnye-vydeleniya.png"
                        alt="Vaginal ifrazatlar - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Vaginal ifrazatlar</strong>
                    </p>
                    <p>
                      Hansı vaginal ifrazatlar olur və normal ağ axıntıları patoloji olanlardan necə fərqləndirmək olar?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/vaginalnye-vydeleniya/">Ətraflı</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide swiper-slide-next">
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
                        alt="Bakterial vaginoz - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Bakterial vaginoz</strong>
                    </p>
                    <p>
                      Qadınlarda patoloji ifrazatların demək olar ki, 90% hallarda bakterial vaginoz diaqnozu qoyulur.
                      Bu xəstəlik niyə yaranır və onu necə müalicə etmək olar?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/">Ətraflı</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
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
                        alt="Vaginitin müalicəsi - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Vaginitin müalicəsi</strong>
                    </p>
                    <p>
                      Vaginit — vaginanın selikli qişasının iltihabı nə vaxt yaranır? Bu xəstəliyin yaranma səbəbləri və müalicəsi.
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/vaginit/">Ətraflı</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="literatura">Ədəbiyyat siyahısı</h2>
            <ol className="literature">
              <li id="literatura-0">
                Medjidova M. K., Zaydieva Z. S., Veresova A. A. Vaginanın mikrobiosenozu və onun vəziyyətinə təsir edən faktorlar // Tibbi məsləhət №3-2 2013.
              </li>
              <li id="literatura-1">
                Buchta V. Vaginal microbiome. Vaginální mikrobiom. Ceska Gynekol. 2018;83(5):371-379.
              </li>
              <li id="literatura-2">
                Saraf VS, Sheikh SA, Ahmad A, Gillevet PM, Bokhari H, Javed S. Vaginal microbiome: normalcy vs
                dysbiosis. Arch Microbiol. 2021 Sep;203(7):3793-3802. doi: 10.1007/s00203-021-02414-3. Epub 2021 Jun
                13. PMID: 34120200.
              </li>
              <li id="literatura-3">
                Romero Herrero D, Andreu Domingo A. Vaginosis bacteriana [Bacterial vaginosis]. Enferm Infecc Microbiol
                Clin. 2016 Jul;34 Suppl 3:14-8. Spanish. doi: 10.1016/S0213-005X(16)30214-2. PMID: 27474242.
              </li>
              <li id="literatura-4">
                Donders GGG, Bellen G, Grinceviciene S, Ruban K, Vieira-Baptista P. Aerobic vaginitis: no longer a
                stranger. Res Microbiol. 2017 Nov-Dec;168(9-10):845-858. doi: 10.1016/j.resmic.2017.04.004. Epub 2017
                May 11. PMID: 28502874.
              </li>
              <li id="literatura-5">
                McCormack D, Koons K. Sexually Transmitted Infections. Emerg Med Clin North Am. 2019 Nov;37(4):725-738.
                doi: 10.1016/j.emc.2019.07.009. Epub 2019 Aug 24. PMID: 31563204.
              </li>
              <li id="literatura-6">
                Marnach ML, Wygant JN, Casey PM. Evaluation and Management of Vaginitis. Mayo Clin Proc. 2022
                Feb;97(2):347-358. doi: 10.1016/j.mayocp.2021.09.022. PMID: 35120697.
              </li>
              <li id="literatura-7">
                Tixomirov A.L., Sarsaniya S.İ., Tuskaev K.S. Mamalıq-ginekologiya həkiminin praktikasında povidon-yodun tətbiqinin aktuallığı //RMJ №1, 30.01.2014.
              </li>
              <li id="literatura-8">
                Eggers M. Infectious Disease Management and Control with Povidone Iodine. Infect Dis Ther. 2019
                Dec;8(4):581-593. doi: 10.1007/s40121-019-00260-x. Epub 2019 Aug 14. Erratum in: Infect Dis Ther. 2019
                Aug 22;: PMID: 31414403; PMCID: PMC6856232.
              </li>
              <li id="literatura-9">
                Kramer A, Dissemond J, Kim S, Willy C, Mayer D, Papke R, Tuchmann F, Assadian O. Consensus on wound
                antisepsis: update 2018. Skin Pharmacol Physiol. 2018;31(1):28–58.
              </li>
              <li id="literatura-10">
                Betadin<sup>®</sup> suppozitorilər üzrə tətbiq təlimatı QQ: П№015282/01.
              </li>
              <li id="literatura-11">
                Safina M.R., Soloşkina D.A. Qarışıq vaginal infeksiyalar: hamiləliyin I trimestrində diaqnostika və müalicənin korrelyasiyası // Tibbi xəbərlər. 2006. № 7. Səh. 74–76.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
