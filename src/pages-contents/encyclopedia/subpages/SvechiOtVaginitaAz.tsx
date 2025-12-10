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

export default function SvechiOtVaginitaAz() {
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
                    <span property="name">Vaginitdən şamlar</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Vaginitdən şamlar</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Vaginitdən şamlar: növləri və necə seçmək</h1>
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      height={112}
                      width={115}
                      src="/images/encyclopedia/svechi-icon.png"
                      alt="başlıqda şəkil"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Nəyə görə həkimlər vaginitdən şamlar təyin edirlər və onlar hansı problemləri həll edirlər?</h2>
                <div className="page-header-body">
                  <p>
                    Beynəlxalq statistikaya görə, ginekoloq həkimlərin qəbulunda xəstələrin ən tez-tez intim şikayətləri cinsiyyət yollarından "qəribə" ifrazatlardır.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#chto-predstavlyaet-iz-sebya-vaginit">Xəstəliklər</a>
                  </li>
                  <li>
                    <a href="#kak-vybrat-svechi-ot-vaginita">Müalicə</a>
                  </li>
                  <li>
                    <a href="#profilaktika-vaginita">Profilaktika</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1632/b4eeb7e96db3dbed0dcf1a02e88acd5ed68e87205867a21b05d0e65d3a2df74d-730x615/kartinka-banner-5-2-697x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1632/b4eeb7e96db3dbed0dcf1a02e88acd5ed68e87205867a21b05d0e65d3a2df74d-730x615/kartinka-banner-5-2-1394x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={697}
                      src="/images/encyclopedia/svechi-vaginit-header.jpg"
                      alt="Vaginitdən şamlar"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#svechi-ot-vaginita--kakie-luchshe">Vaginitdən şamlar – hansılar daha yaxşıdır?</a>
                </li>
                <li>
                  <a href="#kak-vybrat-svechi-ot-vaginita">Vaginitdən şamları necə seçmək?</a>
                </li>
                <li>
                  <a href="#profilaktika-vaginita">Vaginit profilaktikası</a>
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
              <a href="#svechi-ot-vaginita--kakie-luchshe">Vaginitdən şamlar – hansılar daha yaxşıdır?</a>
            </li>
            <li>
              <a href="#kak-vybrat-svechi-ot-vaginita">Vaginitdən şamları necə seçmək?</a>
            </li>
            <li>
              <a href="#profilaktika-vaginita">Vaginit profilaktikası</a>
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
              Belə intim narahatlıq əlamətlərinin ən çox ehtimal olunan və tez-tez səbəbi vaginitdir (vaginada iltihabi proses)
              <sup>
                <a href="#literatura-0">1,2</a>
              </sup>
              . Ginekoloq həkim qadının klinik və laborator müayinəsindən sonra dərman preparatları təyin edir. Vagina selikli qişasının{' '}
              <a href="https://betadin.ru/encyclopedia/vaginit/" title="Vaginit müalicəsi">
                iltihabında
              </a>{' '}
              vaginaya yeridilən yerli müalicə vasitələri tətbiq olunur. Bu preparatların üstünlüyü birbaşa iltihab ocağında təsir göstərməsidir. Vaginada iltihabi proseslərin yerli müalicəsi üçün preparatların geniş yayılmış forması vaginal şamlardır
              <sup>
                <a href="#literatura-1">2,3</a>
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

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Vaginit müalicəsi</strong>
                </p>
                <p>
                  Vaginit - vagina selikli qişasının iltihabı nə zaman yaranır? Bu xəstəliyin yaranma səbəbləri və müalicəsi.
                </p>
                <a href="https://betadin.ru/encyclopedia/vaginit/" className="btn btn-green" target="_blank" rel="noreferrer">
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-310x235/lechenie-vaginita-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-310x235/lechenie-vaginita-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="/images/encyclopedia/lechenie-vaginita.png"
                  alt="Vaginit müalicəsi - anons"
                />
              </picture>
            </div>

            <h3 id="chto-predstavlyaet-iz-sebya-vaginit">Vaginit nədir</h3>
            <p>
              <strong>Vaginit (kolpit)</strong> – bu, daha çox şərti patogen mikroorqanizmlərin səbəb olduğu vagina selikli qişasının iltihabıdır. Vagina mikroflorasında şərti patogen mikroorqanizmlar normada az miqdarda olur. Onların fəaliyyətini "yaxşı" mikroorqanizmlər – laktobakteriyalar nəzarət edir.
            </p>

            <p>
              <strong>Vagina iltihabı</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1633/f776707c6ac9ff31051f4726f87582264b3fc3515e90d232e41776d9e4e7eade-650x0/medical-kit-and-bandaid-509398-488-1-33-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1633/f776707c6ac9ff31051f4726f87582264b3fc3515e90d232e41776d9e4e7eade-650x0/medical-kit-and-bandaid-509398-488-1-33-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/vaginal-inflammation.png"
                alt="Vagina iltihabı"
              />
            </picture>

            <div className="list-base">
              <p>
                Şərti patogen mikroorqanizmlərin miqdarının artmasına təsir edən amillər
                <sup>
                  <a href="#literatura-0">1,3-5</a>
                </sup>
                :
              </p>
              <ul>
                <li>
                  laktobakteriyaların (vagina mikroflorasının təbii balansını saxlayan faydalı mikroorqanizmlərin) miqdarının azalması
                </li>
                <li>vaginada mühitin turşuluq səviyyəsinin pozulması</li>
                <li>ümumi və/və ya yerli immunitetin zəifləməsi</li>
                <li>xroniki xəstəliklərin kəskinləşməsi</li>
                <li>intim gigiyena qaydalarına əməl edilməməsi</li>
                <li>antimikrob preparatlarının istifadəsi</li>
              </ul>
            </div>

            <p>
              Vaginitin səbəbi cinsi yolla ötürülən infeksiyalar (CYÖİ) ola bilər, yəni törədicilərlə birbaşa təmas baş verdikdə.
            </p>

            <h2 id="svechi-ot-vaginita--kakie-luchshe">Vaginitdən şamlar – hansılar daha yaxşıdır?</h2>
            <p>
              Vaginal şamlar formasında buraxılan və vaginada iltihabi proseslərin müalicəsində istifadə olunan preparatların geniş spektri mövcuddur. Bunlar yerli antibakterial, antifunqal və antiseptik təsirə malik vasitələrdir. Preparatlar bir tərkib maddəsi ilə və ya bir neçə aktiv komponentin birləşməsi ilə olur.
            </p>

            <p>Aşağıda vaginitin yerli müalicəsi üçün istifadə olunan şam formasında bəzi preparatların xarakteristikası verilmişdir.</p>

            <h3>Povidon-yod (Betadine®)</h3>

            <h4>Xarakteristika</h4>

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
                    alt="Betadine"
                  />
                </picture>
              </div>

              <p>
                Qram-müsbət və qram-mənfi bakteriyalara, viruslara, bəzi sadə orqanizmlərə, göbələklərə və onların sporlarına qarşı geniş təsir spektrinə malik yerli antiseptik.
              </p>

              <p className="buttons">
                <a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-svechi-instruktsiya/">
                  İstifadə təlimatı
                </a>
              </p>
            </div>

            <h4>Təsir xüsusiyyətləri</h4>
            <p>
              Povidon-yod{' '}
              <a href="https://betadin.ru/encyclopedia/jod/" title="Yod">
                yod
              </a>{' '}
              və povidonun kompleksidir ki, bu da Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  <sup>®</sup>
                </strong>
              </mark>{' '}
              şamlarından yodu tədricən azad edir, bu da geniş spektrli patogen mikroorqanizmlərə uzun müddətli təsir göstərir.
            </p>

            <p>
              Aktiv yod hüceyrənin strukturunu dağıdır və beləliklə, onun ölümünə səbəb olur. Mikroobların əksəriyyəti aktiv yodun təsirindən bir dəqiqə sonra məhv edilir ki, bu da iltihabın xoşagəlməz əlamətlərinin azalmasına kömək edir
              <sup>
                <a href="#literatura-5">6</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1634/23c9c4b4f16f32ff1b704118b62b134d1300e41b1d4fb2aba524c84720aed1c5-650x0/medical-kit-and-bandaid-509398-488-1-34-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1634/23c9c4b4f16f32ff1b704118b62b134d1300e41b1d4fb2aba524c84720aed1c5-650x0/medical-kit-and-bandaid-509398-488-1-34-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/svechi-treatment.png"
                alt="şamlar iltihabın müalicəsi"
              />
            </picture>

            <h4>Dozalaşdırma və qəbul rejimi</h4>
            <p>
              Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  <sup>®</sup>
                </strong>
              </mark>{' '}
              şamları trixomoniaz, kandidoz, qarışıq qeyri-spesifik infeksiyalar (o cümlədən xroniki formalarda), antibiotik və ya steroid preparatlarla terapiyadan sonra vagina infeksiyaları səbəbindən yaranan vaginitlərdə istifadəyə göstərilir. Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  <sup>®</sup>
                </strong>
              </mark>{' '}
              şamları vaginada cərrahi və ya diaqnostik müdaxilələrdən əvvəl profilaktika üçün istifadə olunur.
            </p>

            <p>
              Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  <sup>®</sup>
                </strong>
              </mark>{' '}
              7 gün ərzində gündə 1 vaginal şam vaginaya yeridilir. Əlamətlər qalarsa, terapiyanın müddəti daha 7 gün artırıla bilər. Preparatın gecə yatmazdan əvvəl gündəlik prokladla istifadə edilməsi tövsiyə olunur.
            </p>

            <p>
              Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  <sup>®</sup>
                </strong>
              </mark>{' '}
              şamları hamiləlik və südəmirmə dövründə, həmçinin qalxanvari vəzi xəstəlikləri olan qadınlarda istifadə edilmir.
            </p>

            <h3>Xlorheksidin biqlukonat</h3>

            <h4>Xarakteristika</h4>
            <p>Yerli antiseptik.</p>

            <h4>Təsir xüsusiyyətləri</h4>
            <p>
              Bir sıra qram-müsbət və qram-mənfi mikroorqanizmlərə, həmçinin sadə herpes viruslarına qarşı təsirlidir.
            </p>

            <h4>Dozalaşdırma və qəbul rejimi</h4>
            <p>
              Preparatın təyin edilməsi üçün göstəriş cinsi yolla ötürülən infeksiyaların profilaktikası, mamalıq-ginekoloji əməliyyatlardan və manipulyasiyalardan əvvəl profilaktika, həmçinin qeyri-spesifik vaginitlərin müalicəsidir.
            </p>

            <p>
              Standart müalicə sxemi 7-10 gün ərzində gündə 2 vaginal şamın (səhər və axşam) istifadəsindən ibarətdir
              <sup>
                <a href="#literatura-14">15</a>
              </sup>
              .
            </p>
<h2 id="kak-vybrat-svechi-ot-vaginita">Vaginitdən şamları necə seçmək?</h2>
            <p>
              Vaginit müalicəsi üçün vasitə seçərkən həkim mütləq mikroorqanizmlərin (xəstəliyin törədiciləri) ona həssaslığını nəzərə alır. Tez-tez geniş təsir spektrli vasitələrə, həmçinin patogenlərin çoxalmasını dayandırmaqla yanaşı, onların ölümünə səbəb ola bilən preparatlara üstünlük verilir. Müalicə üçün preparat seçərkən həkimlər təhlükəsizlik, effektivlik və istifadə rahatlığı prinsipləri ilə rəhbərlənir.
            </p>

            <p>
              Son illərdə aydın oldu ki, şərti patogen mikroorqanizmlərin səbəb olduğu vaginitlərin antimikrob müalicəsi həmişə kifayət qədər effektiv olmur
              <sup>
                <a href="#literatura-6">8,9</a>
              </sup>
              . Elmi-tibbi məlumatlara uyğun olaraq
              <sup>
                <a href="#literatura-7">10</a>
              </sup>
              , müalicədən 1 ay sonra yalnız 65-85% hallarda klinik və laborator sağalma müşahidə olunur, qalan hallarda patoloji vaginal ifrazatlar yenidən yaranır. İnfeksion-iltihabi prossesin xroniki formaya keçməsinin səbəblərindən biri rezistentliyin (preparatın aktiv maddəsinə həssaslığın olmaması) inkişafı və bakterial biofilmlərin - bəzi mikroorqanizmlərin immun sistemdən və antimikrob dərmanlardan "gizlənməyə" imkan verən həyat formasının formalaşmasıdır
              <sup>
                <a href="#literatura-6">9</a>
              </sup>
              .
            </p>

            <h3>Vaginit müalicəsi üçün Betadine® şamlarının üstünlükləri</h3>
            <p>Bu günə qədər mikroorqanizmlərin yod preparatlarına qarşı həssaslığının (rezistentliyin) yaranmasını təsdiq edən tədqiqatlar yoxdur.</p>

            <p>
              "D. O. Ott adına Mamalıq və Ginekologiya Elmi-Tədqiqat İnstitutu" kollektivinin apardığı tədqiqata görə, digər bakteriyalarla birlikdə ureaplazmların səbəb olduğu vaginitin Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  <sup>®</sup>
                </strong>
              </mark>{' '}
              şamları ilə yerli olaraq 14 gün müddətində ümumi antibakterial terapiya ilə eyni vaxtda müalicəsinin effektivliyi 82,4±9,2% (ureaplazmların, qardnerellaların tam silinməsi və klinik sağalma) qiymətləndirilir
              <sup>
                <a href="#literatura-11">12</a>
              </sup>
              .
            </p>

            <p>
              Bu məlumatlar Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  <sup>®</sup>
                </strong>
              </mark>{' '}
              şamlarını bakterial vaginoz, ureaplazmaların qardnerellalarla, Candida cinsi göbələklərlə, streptokokklarla birləşməsindən yaranan kəskin və ya xroniki vaginitin kompleks müalicəsi üçün tövsiyə etməyə imkan verir
              <sup>
                <a href="#literatura-11">12</a>
              </sup>
              .
            </p>

            <p>
              Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  <sup>®</sup>
                </strong>
              </mark>{' '}
              şamlarının mühüm üstünlüyü ondan ibarətdir ki, patogen mikroorqanizmlər aktiv yodla terapiyaya qarşı davamlılıq və alışqanlıq inkişaf etdirə bilmirlər. Preparatın əsas xüsusiyyətlərini nəzərə alaraq, Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <strong>
                  <sup>®</sup>
                </strong>
              </mark>{' '}
              şamları həm müstəqil müalicə kimi, həm də vaginitlərin kompleks terapiyasının tərkibində istifadə oluna bilər
              <sup>
                <a href="#literatura-5">6,7</a>
              </sup>
              .
            </p>

            <div className="green">
              <p>
                <strong>Önəmli!</strong>
              </p>
              <p>Vaginada iltihabın müalicəsi üçün istənilən şamları həkim klinik və laborator müayinədən sonra təyin edir.</p>
            </div>

            <h2 id="profilaktika-vaginita">Vaginit profilaktikası</h2>
            <div className="list-base">
              <p>
                Vaginada iltihabi proseslərin inkişaf riskinin qarşısını almaq və ya minimuma endirmək üçün <strong>aşağıdakı qaydalara əməl etmək lazımdır:</strong>
              </p>
              <ul>
                <li>Prezervativ istifadə etmədən təsadüfi intim əlaqələrə yol verməmək.</li>
                <li>İntim gigiyenaya diqqətlə və düzgün əməl etmək.</li>
                <li>Ümumi immunitetı gücləndirmək, mövcud ümumi xəstəlikləri vaxtında müalicə etmək.</li>
                <li>Sintetik alt paltarı və dar geyim geyinməkdən imtina etmək.</li>
                <li>
                  Ginekoloqun yanında müntəzəm müayinələrdən keçmək (şikayət olmadıqda ildə 1 dəfə)
                  <sup>
                    <a href="#literatura-3">4</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1635/be64a85ce4577d4a5abb3d1bae0c209bea7dc0ae16165b9d6cd21ac0d29c6f20-650x0/group-516-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1635/be64a85ce4577d4a5abb3d1bae0c209bea7dc0ae16165b9d6cd21ac0d29c6f20-650x0/group-516-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="/images/encyclopedia/profilaktika-vaginita.png"
                alt="Vaginit profilaktikası"
              />
            </picture>

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

            <h3>Vaginitdən şamlarla müalicə zamanı cinsi partnerin eyni vaxtda müalicəsi lazımdırmı?</h3>
            <p>
              Spesifik etiologiyalı bütün vaginitlər (cinsi yolla ötürülən infeksiyaların səbəb olduğu) hər iki cinsi partnerin mütləq eyni vaxtda müalicəsini tələb edir. Bu halda kişinin müalicəsi ilə uroloq məşğul olur. Qeyri-spesifik etiologiyalı iltihab xəstəlikləri (vaginoz, kandidoz) həmişə partnerin eyni vaxtda müalicəsini tələb etmir, lakin qadında istənilən iltihab əlamətləri yarandıqda onun cinsi partnerinə həkimə müayinədən keçmək lazımdır.
            </p>

            <h3>Vaginitdən şamların mənə uyğun gəlmədiyini necə başa düşmək olar?</h3>
            <p>
              Vaginal şamların istifadəsi zamanı preparata fərdi reaksiya yarana bilər ki, bu da yandırma, güclü qaşınma, dəridə səpgilər, qızartı və ya şişkinlik kimi simptomlarla özünü göstərir. Bu, preparatın tərkibinə daxil olan komponentlərə allergiya və ya bu komponentlərə fərdi dözümsüzlük (yüksək həssaslıq) səbəbindən baş verir. Belə hallarda preparatı ləğv etmək və alternativ terapiyanın təyin edilməsi üçün həkimə müraciət etmək lazımdır.
            </p>

            <h3>Vaginada iltihabdan şamlar kömək etmirsə nə etmək lazımdır?</h3>
            <p>
              İstənilən vaginal şamların istifadəsinə başlamazdan əvvəl təlimatla diqqətlə tanış olmaq və ya ginekologiyanın qəbulunda müvafiq suallar vermək lazımdır. Bəzi preparatlar maksimum sürətlə təsir göstərməyə başlayır (məsələn, Betadine<mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                <sup>®</sup>
              </mark>{' '}
              şamları), digərlərində isə maksimum effekt yalnız bir neçə gündən sonra inkişaf edə bilər. Xəstəliyin törədicisinin artıq bu terapiyaya qarşı həssaslığını itirdiyi və müalicəyə baxmayaraq əlamətlərin qaldığı, xüsusən də bəzi şamların vaginada təkrar istifadəsi zamanı vəziyyətlər olur. Belə halda alternativ terapiyanın seçilməsi üçün həkimə müraciət etmək lazımdır.
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
              Mövzu üzrə oxu
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
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
                        src="/images/encyclopedia/lechenie-vaginita-preview.png"
                        alt="Vaginit müalicəsi - anons"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Vaginit müalicəsi</strong>
                    </p>
                    <p>
                      Vaginit - vagina selikli qişasının iltihabı nə zaman yaranır? Bu xəstəliyin yaranma səbəbləri və müalicəsi.
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/vaginit/">Ətraflı</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide swiper-slide-next">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/jod-preview.png"
                        alt="Yod-anons"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yod</strong>
                    </p>
                    <p>Yodun istifadə sahələri. Povidon-yodun spirt yod məhlulundan fərqləri.</p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/jod/">Ətraflı</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/images/encyclopedia/povidon-jod-preview.png"
                        alt="Povidon-yod - anons"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Povidon yod</strong>
                    </p>
                    <p>
                      Povidon-yodun xarakteristikaları və xüsusiyyətləri. Povidon-yod nə üçün istifadə olunur? Povidon-yod tərkibli Betadine
                      <sup>®</sup> məhlulunun, məlhəmin, şamların istifadə təlimatı.
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/povidon-jod/">Ətraflı</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="literatura">Ədəbiyyat siyahısı</h2>
            <ol className="literature">
              <li id="literatura-0">
                Paladine HL, Desai UA. Vaginitis: Diagnosis and Treatment. Am Fam Physician. 2018 Mar 1;97(5):321 329. PMID: 29671516.
              </li>
              <li id="literatura-1">
                Marnach ML, Wygant JN, Casey PM. Evaluation and Management of Vaginitis. Mayo Clin Proc. 2022 Feb;97(2):347 358. doi: 10.1016/j.mayocp.2021.09.022. PMID: 35120697.
              </li>
              <li id="literatura-2">
                Neal CM, Kus LH, Eckert LO, Peipert JF. Noncandidal vaginitis: a comprehensive approach to diagnosis and management. Am J Obstet Gynecol. 2020 Feb;222(2):114 122. doi: 10.1016/j.ajog.2019.09.001. Epub 2019 Sep 9. PMID: 31513780.
              </li>
              <li id="literatura-3">
                Prilepskaya V.N., Kira Ye.F. Qadınların cinsiyyət yollarından patoloji ifrazatlarla müşayiət olunan xəstəliklərin diaqnostikası və müalicəsi üzrə klinik tövsiyələr //ROAQ, Moskva 2019-cu il.
              </li>
              <li id="literatura-4">
                Vaginitis in Nonpregnant Patients: ACOG Practice Bulletin, Number 215. Obstet Gynecol. 2020 Jan;135(1):e1 e17. doi: 10.1097/AOG.0000000000003604. PMID: 31856123.
              </li>
              <li id="literatura-5">
                Betadine<sup>®</sup> suppozitorilərinin tibbi tətbiqi üzrə təlimat QN: П№015282/01.
              </li>
              <li id="literatura-6">
                Rigo GV, Tasca T. Vaginitis: Review on Drug Resistance. Curr Drug Targets. 2020;21(16):1672 1686. doi: 10.2174/1389450121666200804112340. PMID: 32753007.
              </li>
              <li id="literatura-7">
                Podzolkova N. M., Nikitina T. İ. Bakterial vaginoz və qeyri-spesifik vulvovaginitli xəstələrin müalicəsinin müxtəlif sxemlərinin müqayisəli qiymətləndirilməsi //Mamalıq-ginekologiya Rusiya xəbərçisi. 2012; 4: səh.75 -81.
              </li>
              <li id="literatura-8">
                Swidsinski A, Verstraelen H, Loening-Baucke V, et al Presence of a polymicrobial endometrial biofilm in patients with bacterial vaginosis. PLoS One. 2013;8(1):e53997. doi:10.1371/journal.pone.0053997.
              </li>
              <li id="literatura-9">
                Donders GG, Zodzika J, Rezeberga D. Treatment of bacterial vaginosis: what we have and what we miss. Expert Opin Pharmacother. 2014;15(5):645-657. doi:10.1517/14656566.2014.881800.
              </li>
              <li id="literatura-10">
                Verstraelen H, Verhelst R. Bacterial vaginosis: an update on diagnosis and treatment. Expert Rev Anti Infect Ther. 2009;7(9):1109-1124. doi:10.1586/eri.09.87.
              </li>
              <li id="literatura-11">
                Saviçeva A. M., Selimyan N. K., Qrinenko Q. V., Novikova L. N., Rybina Ye. V., Zatsiorskaya S. L., Martikaynen Z. M. // Bakterial vaginoz və ya vaginitli hamilə olmayan qadınların müalicəsində Betadine preparatının tətbiqi // Mamalıq və qadın xəstəlikləri jurnalı №1/2003 https://doi.org/10.17816/JOWD88798.
              </li>
              <li id="literatura-12">
                Klindatsin<sup>®</sup> dərman preparatının tibbi tətbiqi üzrə təlimat, RDS.
              </li>
              <li id="literatura-13">
                Metronidazol aktiv maddəsinin tibbi tətbiqi üzrə təlimat, RDS.
              </li>
              <li id="literatura-14">
                Heksikon<sup>®</sup> dərman preparatının tibbi tətbiqi üzrə təlimat, RDS.
              </li>
              <li id="literatura-15">
                Neo-Penotran<sup>®</sup> dərman preparatının tibbi tətbiqi üzrə təlimat, RDS.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}