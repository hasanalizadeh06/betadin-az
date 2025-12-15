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

export default function PovidonJodAz() {
  const [scrollTriggered, setScrollTriggered] = useState<Triggered>({
    40: false,
    80: false,
  });
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

    const handleScroll = () => {
      const shouldHideTitle = window.scrollY >= 1000;
      setNavTitleHidden(shouldHideTitle);

      if (shouldHideTitle) {
        setSecondaryNavOpened(false);
      }
    };

    const handleResize = () => {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    };

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('scroll', handleScroll);
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
                  <Link property="item" typeof="WebPage" href="/">
                    <span property="name">Əsas səhifə</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="/encyclopedia/">
                    <span property="name">Ensiklopediya</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Povidon-yod</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Povidon-yod: xassələri, göstərişlər və tətbiq sahələri
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/icon-230x224.webp"
                      alt="Başlıq şəkli"
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Əvvəllər yaralar necə müalicə olunurdu?</h2>
                <div className="page-header-body">
                  <p>
                    Əsrlər boyu həkimlər yaraların sağalması üçün bəzi bitkilərin (qəlpəçi, itburnu,
                    ağ dəvədaban) dəmləmələrindən, şərabla kompresslərdən, bəzən isə kükürd və mis sulfatı
                    tətbiq edirdilər.
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#otkrytie-yoda-i-povidon-yoda">Yodun və povidon-yodun kəşfi</a>
                  </li>
                  <li>
                    <a href="#produkciya-na-osnove-povidon-yoda">Məhsullar</a>
                  </li>
                  <li>
                    <a href="#oblasti-primeneniya-betadin-povidon-yod">Tətbiq sahələri</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/polivinilpirrolidon-povidon-730x615.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/polivinilpirrolidon-povidon-730x615.webp"
                      alt="Polivinilpirrolidon"
                      width={730}
                      height={615}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content ${navOpened ? 'nav-content__open' : ''}`}>
              <ul>
                <li>
                  <a href="#otkrytie-yoda-i-povidon-yoda">Yodun və povidon-yodun kəşfi</a>
                </li>
                <li>
                  <a href="#produkciya-na-osnove-povidon-yoda">Povidon-yod əsasında məhsullar</a>
                </li>
                <li>
                  <a href="#oblasti-primeneniya-betadin-povidon-yod">
                    Betadin® (povidon-yod) tətbiq sahələri
                  </a>
                </li>
                <li>
                  <a href="#preimushchestva-povidon-yoda">Povidon-yodun üstünlükləri</a>
                </li>
                <li>
                  <a href="#mery-predostorozhnosti-i-protivopokazaniya">
                    Ehtiyat tədbirləri və əks-göstərişlər
                  </a>
                </li>
                <li>
                  <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div
                className="nav-content-title nav-content-title-cross"
                onClick={() => setNavOpened((prev) => !prev)}
              >
                Mündəricat
              </div>
            </nav>
          </div>
        </div>

        <nav
          className={`nav-content nav-content-fixed ${secondaryNavOpened ? 'nav-content__open' : ''} ${navTitleHidden ? '' : 'nav-content-title-hidden'}`}
        >
          <ul>
            <li>
              <a href="#otkrytie-yoda-i-povidon-yoda">Yodun və povidon-yodun kəşfi</a>
            </li>
            <li>
              <a href="#produkciya-na-osnove-povidon-yoda">Povidon-yod əsasında məhsullar</a>
            </li>
            <li>
              <a href="#oblasti-primeneniya-betadin-povidon-yod">
                Betadin® (povidon-yod) tətbiq sahələri
              </a>
            </li>
            <li>
              <a href="#preimushchestva-povidon-yoda">Povidon-yodun üstünlükləri</a>
            </li>
            <li>
              <a href="#mery-predostorozhnosti-i-protivopokazaniya">
                Ehtiyat tədbirləri və əks-göstərişlər
              </a>
            </li>
            <li>
              <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div
            className="nav-content-title nav-content-title-cross"
            onClick={() => setSecondaryNavOpened((prev) => !prev)}
          >
            Mündəricat
          </div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətinin yerini tutmur</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Əvvəllər xalq təbabəti yoluxucu dəri xəstəlikləri, yaralar və travmalardan əziyyət
              çəkən xəstələr üçün əsas ümid idi.
            </p>

            <p>
              Zamanla bəzi maddələrin mikroorqanizmlərin inkişafını necə əngəllədiyi və ya onları
              necə məhv etdiyi açıqlanmağa başladı. Birincilər <strong>antiseptik</strong>, ikincilər isə
              <strong>dezinfeksiyaedici və bakterisid maddələr</strong> adlandırıldı.
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp"
                  type="image/webp"
                />
                <Image
                  src="/circle-503x505.webp"
                  alt="Dekorativ elementlər"
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="otkrytie-yoda-i-povidon-yoda">
              Yodun və povidon-yodun kəşfi
            </h2>

            <p>
              1811-ci ildə Bernard Courtois yodun antiseptik xassələrini kəşf etdi və o vaxtdan
              bəri yod məzmunlu məhlullar tibb sahəsində geniş istifadə olunur.
            </p>

            <p>
              20-ci əsrin 50-ci illərində yeni nəsil antiseptik — povidon-yod meydana gəldi. Bu
              vasitə daha təhlükəsiz hesab edildi, alimlər onun toksikliyini azaltmağa və yanma
              hissi olmadan istifadəni təmin etməyə nail oldular.
            </p>

            <p>
              Povidon-yod antiseptik, bakterisid, dezinfeksiyaedici və antiviral təsirlərə malikdir,
              həmçinin təkhüceyrəli orqanizmlərə qarşı da təsiri olduğu qeyd edilir
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Buna görə də povidon-yod tezliklə xəstələr və həkimlər arasında geniş populyarlıq
              qazandı.
            </p>

            <p>
              <strong>Povidon-yod necə işləyir?</strong>
            </p>

            <p>
              Hər canlı orqanizmin hüceyrələri zülallardan ibarətdir, mikrobların hüceyrələri də
              istisna deyil. Povidon-yod patogen mikroorqanizmlərdəki fermentlər və ya
              struktur zülallarla təmasda olduqda iyodaminlər adlanan birləşmələr yaranır, nəticədə
              bu zülallar deaktivləşir və ya məhv olur, bu da mikroorqanizmlərin ölümünə
              gətirib çıxarır. Eyni zamanda patogenlərdə maddəyə qarşı müqavimət formalaşmır
              <sup>
                <a href="#spisok-literatury">2, 3</a>
              </sup>
              . Povidonun mövcudluğu sayəsində iyod dərmandan tədricən azad olunur və bu, təhlükəli
              mikroorqanizmlərə daha uzunmüddətli təsir göstərməyə imkan verir.
            </p>

            <p>Qeyd etmək vacibdir ki, bu vasitə spirt tərkibli olmadığı üçün yanma hissi yaratmır.</p>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                Povidon-yodun təsirləri haqqında qısa videoya baxın:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Povidon-iyodun təsirləri haqqında video"
                ></iframe>
              </div>
              <div className="iframe_desc">
                Videodan povidon-yodun hansı unikal xassələrə malik olduğunu, harada tətbiq
                edildiyini və necə istifadə olunduğunu öyrənəcəksiniz.
              </div>
            </div>

            <h2 className="h2" id="produkciya-na-osnove-povidon-yoda">
              Povidon-yod əsasında məhsullar
            </h2>

            <div className="list-base">
              <p>
                Povidon-yod əsasında müxtəlif dərman formaları hazırlanmışdır
                <span style={{ color: '#0f780b' }}>
                  Betadin<sup>®</sup>
                </span>
                :
              </p>
              <ul>
                <li>10% xarici tətbiq üçün məhlul</li>
                <li>10% məlhəm</li>
                <li>vaginal şamlar (suppozitoriyalar), 200 mg</li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-7-scaled-650x325.webp"
                type="image/webp"
              />
              <Image
                src="/mask-group-7-scaled-650x325.webp"
                alt="Povidon-yod əsasında məhsullar"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Povidon-yodun tibb müəssisələrində istifadəsi</h3>

            <p>
              Povidon-yod əsaslı antiseptiklər tibb müəssisələrində geniş tətbiq olunur. Xəstəxana
              və klinikalarda onlar dəri üzərində, o cümlədən venadan qan götürülmə və ya inyeksiya
              öncəsi istifadə olunur. Cərrahlar əməliyyatdan əvvəl xəstənin dərisini dezinfeksiya edir,
              həm təmiz əməliyyat sahələrində, həm də iltihab əlamətləri olan yaralarda məhluldan
              istifadə edirlər. Povidon-yod tez-tez drenaj, kateter və digər müdaxilələr sonrası yaranan
              irinli ağırlaşmaların qarşısını almaq və müalicə etmək üçün gündəlik qulluqda tətbiq
              edilir. Yığım təsiri sayəsində o, qanaxmanın dayanmasına kömək edir və mikrobların
              yükünü azaltmaqla iltihab əleyhinə təsir göstərir
              <sup>
                <a href="#spisok-literatury">16</a>
              </sup>
              . Povidon-yod xroniki ayaq yaralarının sağalmasını sürətləndirməyə kömək edir
              <a href="/encyclopedia/troficheskie-yazvy-nog/">yaralar</a>
              <sup>
                <a href="#spisok-literatury">17</a>
              </sup>
              .
            </p>

            <h3 className="h3">Povidon-yod dermatologiyada</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    srcSet="/banner-betadin-927x916.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-927x916.webp"
                    alt="Betadin"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                Bir çox dəri xəstəlikləri qaşınma və ona bağlı cızılmalarla müşayiət olunur. Cızılmalar
                patogen mikroorqanizmlərin daxil olması üçün giriş qapısı rolunu oynayır. Eksema,
                invers psoriaz, ekzudativ psoriaz və digər xəstəliklər nəmli iltihab və dəri bütövlüyünün
                pozulması ilə səciyyələnə bilər. Bu dermatozlar bakterial və göbələk mənşəli ikinci dərəcəli
                infeksiyalara meyllidir. Buna görə həkimlər əsas xəstəliyi müalicə etməklə yanaşı,
                profilaktik və terapevtik məqsədlə antiseptik, antifungal və antibakterial təsirli
                vasitələrdən, o cümlədən povidon-yoddan istifadə edirlər.
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  Təlimat
                </a>
              </p>
            </div>

            <h3 className="h3">Povidon-yod kosmetologiyada</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    srcSet="/banner-betadin-maz-927x916.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-maz-927x916.webp"
                    alt="Betadin"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                Kosmetologiyada povidon-yod məhlulu dərinin cərgə və dartıcı iplərin yerləşdirilməsi
                öncəsi emalı, yaraların müalicəsi və həmçinin yaxşıxaslı dəri törəmələrinin çıxarılmasından
                sonra evdə qulluq üçün tövsiyə olunur.
              </p>

              <p>
                Povidon-yod məlhəm şəkilində (<span style={{ color: '#0f780b' }}>
                  Betadin<sup>®</sup>
                </span>{' '}
                10% məlhəm) bir çox dəri problemlərində, o cümlədən trofik xoralar və yataq yaralarında
                istifadə olunur
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                . Həmçinin herpes viruslarına və insan papilloma virusuna qarşı təsiri barədə məlumatlar
                mövcuddur
                <sup>
                  <a href="#spisok-literatury">19</a>
                </sup>
                .
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-maz-instruktsiya/"
                >
                  Təlimat
                </a>
              </p>
            </div>

            <h3 className="h3">Povidon-yod ginekologiyada</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    srcSet="/svechi-553x512.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/svechi-553x512.webp"
                    alt="Betadin"
                    width={553}
                    height={512}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                <strong>Ambulator ginekologiyada</strong> povidon-yod eroziyaların kauterizasiyası,
                poliplərin çıxarılması və intrauterin spiralların qoyulması zamanı lokal antiseptik kimi
                istifadə olunur.
              </p>

              <p>
                  Obstetr-ginekoloqlar vaginal şamları (<span style={{ color: '#0f780b' }}>
                  Betadin<sup>®</sup>
                </span>{' '}
                200 mg şamlar)
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
                məktəbemente – kiçik çanaq orqanlarının iltihabi xəstəliklərinin, xüsusilə göbələk
                mənşəli infeksiyaların və trikomoniazın müalicəsində istifadə edirlər
                <sup>
                  <a href="#spisok-literatury">7</a>
                </sup>
                . Vaginal şamlar həmçinin planlı diaqnostik və ya müalicə müdaxilələrindən əvvəl
                profilaktik məqsədlə təyin oluna bilər.
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-svechi-instruktsiya/"
                >
                  Təlimat
                </a>
              </p>
            </div>

            <h2 className="h2" id="oblasti-primeneniya-betadin-povidon-yod">
              Betadin® (povidon-yod) tətbiq sahələri
            </h2>

            <div className="list-base">
              <ul>
                <li>
                  Yaraların və cızıq-kəsiklərin təmizlənməsi üçün 10% seyreltilməmiş məhluldan
                  istifadə oluna bilər
                  <span style={{ color: '#0f780b' }}>
                    Betadin<sup>®</sup>
                  </span>
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>
                  .
                </li>
                <li>
                  Yaralarda, yanıq səthlərində və infeksiya əlamətləri olan dəri örtüklərində
                  1:10 nisbətində seyreltilmiş və ya 1–2 saniyə ərzində seyreltilməmiş məhlul tətbiq
                  olunmalı, sonra isə yuyulmalıdır
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>
                  .
                </li>
                <li>
                  İnfeksiyaya qoşulmuş dəri zədələrində <span style={{ color: '#0f780b' }}>
                    Betadin<sup>®</sup>
                  </span>
                  məlhəmdən istifadə etmək olar; povidon-yod bakteriya, virus və göbələklərə qarşı
                  təsir edir, makrogol isə yaradan çirkləri xaric edir
                  <sup>
                    <a href="#spisok-literatury">20</a>
                  </sup>
                  . Məhsul dərinin üzərinə nazik təbəqə ilə 2–3 dəfə gündə tətbiq olunur
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>
                  .
                </li>
                <li>
                  Cərrahi müdaxilə əvvəlində dəri antiseptikləşdirilməsi: povidon-yod məhlulu 3–5
                  saniyə saxlanılır, sonra steril su ilə yuyulur. Dezinfeksiya prosesi adətən iki dəfə
                  təkrarlanır.
                </li>
                <li>
                  Stomatoloji əməliyyatlarda ağız boşluğunun dezinfeksiyası üçün povidon-yod
                  məhlulundan istifadə olunur
                  <sup>
                    <a href="#spisok-literatury">21</a>
                  </sup>
                  .
                </li>
                <li>
                  Tibb personalının əl dərisinin dezinfeksiyası: 10% povidon-yod məhlulu əllərdə
                  5 dəqiqə ərzində tətbiq olunur, sonra yuyulur. Proseduru adətən 2 dəfə təkrarlamaq
                  tövsiyə olunur
                  <sup>
                    <a href="#spisok-literatury">14</a>
                  </sup>
                  .
                </li>
                <li>
                  Kəskin vaginal infeksiyalarda (yuyunduqdan sonra) gündə 1 dəfə dərinlikdə 1
                  ədəd 200 mg-lıq vaginal şam tətbiq olunur, müalicə müddəti 7 gündür. Xronik və ya
                  subakut vəziyyətlərdə isə gündə 1 dəfə yatmazdan əvvəl 14 gün tətbiq edilir
                  <sup>
                    <a href="#spisok-literatury">9</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Uşaqlarda yaralar</strong>
                </p>
                <p>
                  Uşaqların aktiv və maraqlı olmaları səbəbindən tez-tez yaralanmalar baş verir. Yaraları
                  düzgün necə təmizləmək və müalicə etmək olar?
                </p>
                <a
                  href="/encyclopedia/rany-u-detej/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="/rany-u-detej-prevyu-246x166.webp, /rany-u-detej-prevyu-246x166.webp"
                  type="image/webp"
                />
                <Image
                  src="/rany-u-detej-prevyu-246x166.webp"
                  alt="Uşaqlarda yaralar - önizləmə"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="preimushchestva-povidon-yoda">
              Povidon-yodun üstünlükləri
            </h2>

            <div className="list-base">
              <p>Povidon-yod bir sıra tibbi sahələrdə istifadə olunur, buna görə ki:</p>
              <ul>
                <li>
                  <strong>Geniş fəaliyyət spektri</strong> (göbələklərə, viruslara və protozoalara qarşı aktiv).
                </li>
                <li>
                  <strong>Bioplyonka üzərində təsir</strong> – bəzi mikroorqanizmlərin təhlükəli forması,
                  hansında ki, bir çox dərmanlar effektiv olmur.
                </li>
                <li>
                  Yüksək təhlükəsizlik profili – lokal tətbiq zamanı iyodun sistemik absorbsiyası
                  demək olar ki, baş vermir.
                </li>
                <li>
                  <strong>Yumşaq antiseptik təsir</strong> – yanma hissi yaratmır və yeni toxuma
                  formalaşmasına mane olmur.
                </li>
                <li>
                  <strong>Emal sahəsinin nəzarəti</strong> – məhlul dəridə qəhvəyi rəng yaradır, hansı
                  ki, tezliklə yox olur. İstəsəniz, <span style={{ color: '#0f780b' }}>
                    Betadin<sup>®</sup>
                  </span>
                  adi su ilə asanlıqla yuyulur.
                </li>
              </ul>
            </div>

            <h2 className="h2" id="mery-predostorozhnosti-i-protivopokazaniya">
              Ehtiyat tədbirləri və əks-göstərişlər
            </h2>

            <div className="list-base">
              <ul>
                <li>
                  Povidon-yod məhlullarının gözə daxil olmasından çəkinmək lazımdır. Dərinin
                  qaşınması və ya qızarması halında məhsulun istifadəsinə son verin.
                </li>
                <li>
                  Qalxanabənzər vəzinin xəstəlikləri varsa, istifadə etməzdən əvvəl həkimlə
                  məsləhətləşin.
                </li>
                <li>
                  Radioaktiv yodla müalicədən əvvəl, böyrək çatışmazlığı və Düring herpetiform
                  dermatit zamanı bu qrup vasitələr istifadə edilmir. Hamilə qadınlara (3-cü aydan
                  etibarən) və süd verən analara da tövsiyə edilmir
                  <sup>
                    <a href="#spisok-literatury">9</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Moqkova Elena Mixaylovna</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalə müəllifi</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-406x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/moshkova-novyj-406x406 (1).webp"
                  alt="Moqkova Elena Mixaylovna"
                  width={203}
                  height={203}
                  loading="lazy"
                  decoding="async"
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
                        srcSet="/rany-s-infekcziej-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/rany-s-infekcziej-prevyu-246x166 (1).webp"
                        alt="İnfeksiyalı yaralar - önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>İnfeksiyalı yaralar</strong>
                    </p>
                    <p>
                      Bütün cızıq və kəsiklər tez və problemsiz sağalmır. İnfeksiyalı yaralar necə
                      müalicə olunmalıdır?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/rany-s-infekciej/">Ətraflı</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/lechenie-troficheskih-yazv-prevyu-246x166.webp"
                        type="image/webp"
                      />
                      <Image
                        src="/lechenie-troficheskih-yazv-prevyu-246x166.webp"
                        alt="Trofik xoraların müalicəsi - önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Trofik xoraların müalicəsi</strong>
                    </p>
                    <p>
                      Trofik xoralar — uzun müddət sağalmayan yaralardır və toxuma qidalanmasının
                      pozulması nəticəsində yaranır. Bu cür yaralar necə və nə ilə müalicə olunmalıdır?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/lechenie-troficheskih-yazv/">Ətraflı</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/svechi-ot-vaginita-prevyu-246x166 (1).webp, /svechi-ot-vaginita-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/svechi-ot-vaginita-prevyu-246x166 (1).webp"
                        alt="Vaginit şamları - önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Vaginit şamları</strong>
                    </p>
                    <p>
                      Vaginitin müalicəsi lokallaşdırılmış preparatlarla, vaginal şamlar formasında edilir.
                      Vajinal iltihab üçün şamları necə seçmək lazımdır?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/svechi-ot-vaginita/">Ətraflı</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="h2" id="spisok-literatury">
              Ədəbiyyat siyahısı
            </h2>

            <ol className="literature">
              <li id="literatura-0">
                Betadin<sup>®</sup> (məhlul, məlhəm) preparatlarının tibbi tətbiq təlimatı, RÜ P №015282/03,
                №015282/02.
              </li>
              <li id="literatura-1">
                Wade RG, Burr NE, McCauley G, Bourke G, Efthimiou O. The Comparative Efficacy of
                Chlorhexidine Gluconate and Povidone-iodine Antiseptics for the Prevention of
                Infection in Clean Surgery: A Systematic Review and Network Meta-analysis. Ann Surg.
                2021;274(6):e481-e488. doi:10.1097/SLA.0000000000004076.
              </li>
              <li id="literatura-2">
                Zellner P. R. and Bugyi S. Povidone–iodine in the treatment of burn patients. –
                //Journal of Hospital Infection, 1985, V. 6. – Р.139–140.
              </li>
              <li id="literatura-3">
                Гавриленко Ю.В. Эффективность использования раствора Бетадин<sup>®</sup> при
                местном лечении хронического тонзиллита у детей // Здоровья Украины, 2014.
              </li>
              <li id="literatura-4">
                Михальский В.В., Богданов А.Е., Жилина С.В., Привиденцев А.И, Аникин А.И., Ульянина
                А.А. Применение препарата Бетадин<sup>®</sup> в лечении инфицированных ран, РМЖ №29
                12/2010.
              </li>
              <li id="literatura-5">
                Богомазова И. М. , Белоусова В. С. , Максимов М. Л. «Эффективность использования
                препарата Бетадин<sup>®</sup> при бактериальном вагинозе»// РМЖ. Мать и дитя. №19
                от 09.09.2014.
              </li>
              <li id="literatura-6">
                Логутова Л.С., Гаспарян Н. Д., Будыкина Т. С., Дуб Н. В., Бабунашвили Е. Л.
                Применение Бетадин<sup>®</sup> для лечения бактериальной инфекции у женщин
                репродуктивного возраста. //Российский вестник акушера-гинеколога, № 6, 2005.
              </li>
              <li id="literatura-7">
                Осипов И.С., Леонов С.В. Использование антимикробного средства «Бетадин» в
                хирургической клинике. М: «Эгис»– 1990. – № 3. – С.7–10.
              </li>
              <li id="literatura-8">
                Бетадин<sup>®</sup> суппозитории. Инструкция по медицинскому применению (РН:
                П№015282/01).
              </li>
              <li id="literatura-9">
                Lachapelle J.-M., Castel O., Casado A. F., et al. Antiseptics in the era of
                bacterial resistance: a focus on povidone iodine. Clin Pract. 2013; 10(5): 579-592.
              </li>
              <li id="literatura-10">
                Lacey R. W., Catto A. Action of povi-done-iodine against methicillin-sensitive and
                -resistant cultures of Staphylococcus aureus. Postgrad Med J. 1993; 69 (Suppl 3):
                S78-S83.
              </li>
              <li id="literatura-11">
                Malone M., Bjarnsholt T., McBain A. J., et al. The prevalence of biofilms in chronic
                wounds: a systematic review and meta-analysis of published data. J Wound Care. 2017;
                26 (1): 20-25.
              </li>
              <li id="literatura-12">
                Kudykin M.N. İnfeksiyalaşmış yaraların müalicəsində povidon-iyod. //RMJ. 2013; 34:
                1755.
              </li>
              <li id="literatura-13">
                Rodin A.V., Privolnev V.V., Savkin V.A. Cərrah-həkim praktikasinda yara infeksiyalarinin
                müalicəsi və profilaktikası üçün povidon-iyodun tətbiqi. Ambulator cərrahiyyə.
                2017; 3-4 (67-68): 43-51.
              </li>
              <li id="literatura-14">
                Hoekstra M. J., Westgate S. J., Mueller S. Povidone-iodine ointment demonstrates in
                vitro efficacy against biofilm formation. Int Wound J. 2017; 14 (1): 172-179.
              </li>
              <li id="literatura-15">
                Kumar K. S., Reddy G.V., Naidu G., Pandiarajan R. Role of povidone iodine in
                periapical surgeries: Hemostyptic and anti-inflammatory. Ann Maxillofac Surg. 2011;
                1 (1): 107-111.
              </li>
              <li id="literatura-16">
                Pierard-Franchimont C., Paquet P., Arrese J. E., Pierard G.E. Healing rate and
                bacterial necrotizing vasculitis in venous leg ulcers. Dermatology. 1997; 194 (4):
                383-387.
              </li>
              <li id="literatura-17">
                Koroleva İ.A., Kojuxov A.A. Oftalmoloji praktikada povidon-iyodun yeri //
                RMJ "Klinik oftalmologiya". 2018;1:45-49.
              </li>
              <li id="literatura-18">
                Dubrovina S.O., Krasilnikova L.V., Ardinseva O.A. və b. Povidon-iyodun uşaqlıq boynu
                zədələnməsi olan qadınlarda yüksək onkogen HPV tiplərinin eradikasiyasına təsiri. RMJ. Ana
                və uşaq. 2018;1(2):156-161. DOI: 10.32364/2618-8430-2018-1-2-156-161.
              </li>
              <li id="literatura-19">
                Blatun L.A. Yaraların yerli dərman müalicəsi. Cərrahiyyə. N.İ. Piroqov adına jurnal.
                2011;(4):51-59.
              </li>
              <li id="literatura-20">
                R. Rahn Postgrad Med J, 1993; 69(Suppl.3): 4-9, Cərrahi stomatologiya şöbəsi,
                Frankfurt Universiteti, Almaniya.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
