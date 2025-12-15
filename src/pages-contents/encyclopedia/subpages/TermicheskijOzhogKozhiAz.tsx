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

export default function TermicheskijOzhogKozhiAz() {
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
                  <Link property="item" typeof="WebPage" href="/">
                    <span property="name">Ana səhifə</span>
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
                  <span property="name">Dərinin termiki yanığı</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Dərinin termiki yanığı: dərəcələri, əlamətləri, müalicəsi
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/icon-230x224.webp"
                      alt="başlıqda şəkil"
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Termiki yanıq nədir</h2>
                <div className="page-header-body">
                  <div>Termiki və ya istilik yanığı yüksək temperaturun dəriyə və aşağıda yerləşən</div>
                  <div>toxumalara təsiri nəticəsində yaranır.</div>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#pervaya-pomoshch-pri-termicheskih-ozhogah">Yanıqda ilk yardım</a>
                  </li>
                  <li>
                    <a href="#lechenie-ozhogov-ii-iii-stepeni">II-III dərəcəli yanıqların müalicəsi</a>
                  </li>
                  <li>
                    <a href="#obrabotka-termicheskih-ozhogov-preparatami-na-osnove-povidon-yoda-betadin">
                      Yanığın işlənməsi
                    </a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-3-730x615.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-3-730x615.webp"
                      alt="Dərinin termiki yanığı"
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
                  <a href="#stepen-tyazhesti-termicheskih-ozhogov-osnovnye-simptomy">
                    Termiki yanıqların ağırlıq dərəcəsi. Əsas əlamətlər
                  </a>
                </li>
                <li>
                  <a href="#opredelenie-ploshchadi-termicheskogo-ozhoga-indeks-tyazhesti-porazheniya-itp">
                    Termiki yanığın sahəsinin müəyyən edilməsi. Zədələnmə ağırlığı indeksi (ZAİ)
                  </a>
                </li>
                <li>
                  <a href="#oslozhneniya-ojogov">Ağırlaşmalar</a>
                </li>
                <li>
                  <a href="#lechenie-termicheskih-ozhogov">Termiki yanıqların müalicəsi</a>
                </li>
                <li>
                  <a href="#profilaktika-ozhogovogo-travmatizma">Yanıq travmatizminin profilaktikası</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div
                className="nav-content-title nav-content-title-cross"
                onClick={() => setNavOpened(!navOpened)}
              >
                Məzmun
              </div>
            </nav>
          </div>
        </div>

        <nav
          className={`nav-content nav-content-fixed ${secondaryNavOpened ? 'nav-content__open' : ''} ${navTitleHidden ? '' : 'nav-content-title-hidden'}`}
        >
          <ul>
            <li>
              <a href="#stepen-tyazhesti-termicheskih-ozhogov-osnovnye-simptomy">
                Termiki yanıqların ağırlıq dərəcəsi. Əsas əlamətlər
              </a>
            </li>
            <li>
              <a href="#opredelenie-ploshchadi-termicheskogo-ozhoga-indeks-tyazhesti-porazheniya-itp">
                Termiki yanığın sahəsinin müəyyən edilməsi. Zədələnmə ağırlığı indeksi (ZAİ)
              </a>
            </li>
            <li>
              <a href="#oslozhneniya-ojogov">Ağırlaşmalar</a>
            </li>
            <li>
              <a href="#lechenie-termicheskih-ozhogov">Termiki yanıqların müalicəsi</a>
            </li>
            <li>
              <a href="#profilaktika-ozhogovogo-travmatizma">Yanıq travmatizminin profilaktikası</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
            </li>
            <li>
              <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div
            className="nav-content-title nav-content-title-cross"
            onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}
          >
            Məzmun
          </div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətini əvəz etmir</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <div className="list-base">
              <p>
                <strong>Termiki yanığın yaranma səbəbləri</strong>
              </p>
              <ul>
                <li>açıq alovun dəriyə təsiri və ya paltarın alovlanması nəticəsində</li>
                <li>
                  qızdırılmış metal, metal-keramika əşyaları və ya digər əşyalarla təmas (ütü, tava, bişirmə paneli, asfalt sıçrayışları və s.)
                </li>
                <li>isti maye və ya buxarın təsiri</li>
                <li>orqanizmə elektrik cərəyanının zədələməsinə reaksiya</li>
                <li>açıq günəşdə qalma (günəş yanığı)</li>
              </ul>
            </div>

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

            <h2 className="h2" id="stepen-tyazhesti-termicheskih-ozhogov-osnovnye-simptomy">
              Termiki yanıqların ağırlıq dərəcəsi. Əsas əlamətlər
            </h2>

            <p>
              Termiki yanıq zədələnmələri: <strong>I, II, III və IV dərəcəli</strong> olur.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-2-4-650x150.webp"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-2-4-650x150.webp"
                alt="Termiki yanıqların ağırlıq dərəcəsi"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="ozhogi-i-stepeni">
              I dərəcəli yanıqlar
            </h3>

            <p>
              <strong>I dərəcəli</strong> yanıqlara <strong>səthi</strong> və ya{' '}
              <strong>epidermal</strong> deyilir
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Yalnız dərinin üst təbəqəsi zədələnir. Əlamətləri şişkinlik, ağrı və ya yandırma, dəri örtüyünün qırmızı rəngi olacaq. Belə yanıqları müstəqil olaraq müalicə etmək olar. Bir qayda olaraq, dərini bir neçə günə bərpa etmək mümkündür. Sağaldıqdan sonra zədələnmiş dəri sahəsi rəngcə qalan dəridən fərqlənməyəcək, lakin müvəqqəti soyulma ola bilər.
            </p>

            <h3 className="h3" id="ozhogi-ii-stepeni">
              II dərəcəli yanıqlar
            </h3>

            <p>
              <strong>II dərəcəli</strong> yanıqlara <strong>dermal</strong> və ya{' '}
              <strong>sərhəd</strong> deyilir
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Zədələyici təsir dərinin daha dərin təbəqələrinə toxunur. Buna görə də belə yanıqlarda dərinin qızarması, şişkinlik və ağrı ilə yanaşı, şəffaf məzmunlu qabarcıqlar əmələ gəlir. Sağalma iki həftə ərzində baş verir. Çox vaxt dərinin tam bərpasından sonra zədələnmiş sahə dəyişməmiş dəri ilə müqayisədə daha tünd və ya daha açıq çalar olacaq.
            </p>

            <h3 className="h3" id="ozhogi-iii-stepeni">
              III dərəcəli yanıqlar
            </h3>

            <p>
              <strong>III dərəcəli</strong> yanıqlara <strong>dərin</strong> deyilir
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Yanıq prosesinə dərinin bütün təbəqələri, o cümlədən dərialtı piy toxuması da cəlb edilir.
            </p>

            <p>
              <strong>Dərinin quruluşu</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-20-650x325.webp"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-20-650x325.webp"
                alt="Dərinin quruluşu"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              Bu zaman əlamətlər termiki yanığın səbəbindən asılı olaraq fərqlənəcək. Belə ki, açıq alov və ya qızdırılmış əşya ilə təmasda səthdə qəhvəyi rəngli qabıq (qotur) əmələ gəlir, dərinin isti maye və ya buxarla göyərdilməsində isə nəmli, ağ-boz rəngli olur.
            </p>

            <p>Dərin yanıqlarda qabarcıqlar da əmələ gələ bilər.</p>

            <p>
              Yanıq zədələnmələrinin bərpası 1,5 aya qədər uzanır. Tez-tez dəri plastikası tələb olunur. Sağalma faktı ilə dərinin piqmentasiya pozğunluğu qalır, yaxşı görünən çapıqlar əmələ gəlir.
            </p>

            <h3 className="h3" id="ozhogi-iv-stepeni">
              IV dərəcəli yanıqlar
            </h3>

            <p>
              <strong>IV dərəcəli</strong> yanıqlarda təkcə dəri və əzələləri örtən qişalar (fasciya) deyil, əzələlər və sümüklər də zərər görə bilər
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Tünd rəngli qabıq və kömürləşmə sahələri yaranır. Bərpa son dərəcə yavaş gedir, bir qayda olaraq, cərrahi işləmə, dəri köçürülməsi tələb olunur. Zərər görmüş bədən hissələrinin saxlanması məsələsi həll edilir.
            </p>

            <h2 className="h2" id="opredelenie-ploshchadi-termicheskogo-ozhoga-indeks-tyazhesti-porazheniya-itp">
              Termiki yanığın sahəsinin müəyyən edilməsi. Zədələnmə ağırlığı indeksi (ZAİ)
            </h2>

            <p>
              Əksər hallarda artıq vizual müayinə zamanı həkim diaqnoz qoya bilər — termiki yanıq. Əgər insan huşundadırsa, baş verənlər haqqında soruşmaq və termiki yanığın konkret səbəbini dəqiqləşdirmək olar.
            </p>

            <p>
              Yanıq yaralarının müalicə taktikasını seçmək üçün yanıq zədələnməsinin ağırlığının diaqnostikasını aparmaq lazımdır.
            </p>

            <p>
              Yanıqların öyrənilməsi ilə məşğul olan tibb sahəsi olan kombustiologiyada{' '}
              <strong>yanıq sahəsini müəyyən etmək üçün</strong> "ovuc qaydası" və "doqquzlar qaydası"ndan istifadə olunur.
            </p>

            <h3 className="h3" id="pravilo-ladoni">
              "Ovuc qaydası"
            </h3>

            <p>
              Xəstənin bir ovucunun sahəsi bütün bədən səthinin 1%-ni təşkil edir
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Bu qayda geniş olmayan yanıq zədələnmələrinin müəyyən edilməsi üçün uyğundur.
            </p>

            <h3 className="h3" id="pravilo-devyatok">
              "Doqquzlar qaydası"
            </h3>

            <p>
              Yetkin insanda başın dəri örtüyünün sahəsi bütün bədən sahəsinin 9%-ni təşkil edir. Yuxarı ətraf – 9%, bir aşağı ətraf – 18%, bədənin ön və arxa səthi – hər biri 18%, cinsiyyət orqanları və aralıq – 1%
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-21-650x325.webp"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-21-650x325.webp"
                alt="Doqquzlar qaydası"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="indeks-tyazhesti-porazheniya">
              Zədələnmə ağırlığı indeksi
            </h3>

            <div className="list-base">
              <p>
                Zədələnmə sahəsinin xüsusi qiymətləndirilməsi üçün{' '}
                <strong>zədələnmə ağırlığı indeksi (ZAİ)</strong> hesablanır. Bu göstərici zədələnmənin dərinliyi və genişliyi qiymətləndirilməsinə əsaslanır və şərti vahidlərlə ifadə olunur.
              </p>
              <ul>
                <li>I-II dərəcəli yanıqlarda yanıq sahəsinin 1%-i 1 VAH-a bərabərdir.</li>
                <li>IIIa dərəcəli yanıqlarda yanıq sahəsinin 1%-i 2 VAH-a bərabərdir.</li>
                <li>IIIb-IV dərəcəli yanıqlarda yanıq sahəsinin 1%-i 3 VAH-a bərabərdir.</li>
              </ul>
            </div>

            <h2 className="h2" id="oslozhneniya-ojogov">
              Yanıqların ağırlaşmaları
            </h2>

            <div className="list-base">
              <p>
                Termiki yanıqların ciddi ağırlaşması{' '}
                <strong>yanıq şoku</strong>
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                , əsas təzahürləri bunlardır:
              </p>
              <ul>
                <li>qusma</li>
                <li>təzyiqin düşməsi</li>
                <li>böyrəklərin sidik əmələ gətirməsinin azalması və ya dayanması (oliquriya və anuriya)</li>
                <li>titrəmə və ürək döyüntüsü</li>
                <li>dərinin solğunluğu və quruluğu</li>
                <li>hərəkət həyəcanı</li>
              </ul>
            </div>

            <p>
              <strong>Yüngül şok</strong> bədən səthinin 20%-dən çox olmayan dərin yanığında, ZAİ 30-70 VAH olduqda inkişaf edir.
            </p>

            <p>
              <strong>Ağır şok</strong> – bədən səthinin 20-40%-nin yanığında, ZAİ 71-130 VAH.
            </p>

            <p>
              <strong>Son dərəcə ağır şok</strong> – bədən səthinin 40%-dən çoxu yanmışdır, <br />
              ZAİ 130 VAH-dan çoxdur.
            </p>

            <p>
              <strong>Şok dövrü</strong> şokun ağırlığından asılı olaraq 10 saatdan 3 sutkaya qədər davam edir.
            </p>

            <p>
              4-cü gündən 14-cü günə qədər ölü toxumaların parçalanma məhsullarının və bakteriyaların orqanizmə ümumi təsiri səbəbindən <strong>kəskin yanıq toksemiyası</strong> yaranır.
            </p>

            <p>
              Yanıq şoku stasionarda müalicə edilir, burada adekvat ağrıkəsici, sidik kisəsinin kateterizasiyası aparılır, su-elektrolit balansı korreksiya edilir. Tez-tez süni ağciyər ventilyasiyası tələb olunur.
            </p>

            <p>
              Termiki yanıqların <strong>yerli ağırlaşmalarına</strong>{' '}
              <a href="/encyclopedia/rany-s-infekciej/" title="İnfeksiya ilə yaralar">
                infeksiya
              </a>{' '}
              bakteriya və göbələk mikroorqanizmləri ilə, zədələnmiş bədən hissəsinin fəaliyyətinin itirilməsi, kobud çapıqlanma və kontrakturalar aiddir.
            </p><h2 className="h2" id="lechenie-termicheskih-ozhogov">
              Termiki yanıqların müalicəsi
            </h2>

            <p>
              Məişət termiki yanıqlarının əksəriyyəti, kiçik ölçüləri və yüngül zədələnmə ağırlığını nəzərə alaraq, tibb təşkilatlarına müraciət etməyi tələb etmir.
            </p>

            <p>Lakin ilkin həkim qabağı yardımı düzgün göstərmək vacibdir.</p>

            <h3 className="h3" id="pervaya-pomoshch-pri-termicheskih-ozhogah">
              Termiki yanıqlarda ilk yardım
            </h3>

            <div className="list-base">
              <ul>
                <li>
                  Mümkün qədər tez istilik təsiri ilə təması kəsmək və ya yanan paltarı su, yorğan ilə söndürmək.
                </li>
                <li>
                  Termiki yanıq yerini soyuq su, buz, qar, soyuducu paketlərlə soyutmaq. Bu <strong>toxumalar daxilində temperaturun aşağı salınmasına</strong> imkan verəcək və istiliyin zədələyici təsirini azaldacaq.
                </li>
                <li>Bədənin yanmış hissəsindən paltarı kəsib çıxarırlar. Yapışmış paltarı qopartmırlar.</li>
                <li>
                  Əmələ gəlmiş qabarcıqların deşilməməsi tövsiyə olunur. Qabarcıq tək və kiçikdirsə, steril şprisdən steril iynə ilə istifadə etmək olar. Çoxsaylı qabarcıqlarda tibbi yardım üçün müraciət etmək lazımdır.
                </li>
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Yanıqlardan məlhəm və kremlər</strong>
                </p>
                <p>Yanıqların müalicəsi üçün hansı məlhəmlər olur və ən effektivini necə seçmək.</p>
                <a
                  href="/encyclopedia/mazi-i-kremy-ot-ozhogov/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp"
                  alt="Yanıqlardan məlhəm və kremlər-anons"
                  width={246}
                  height={166}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3" id="lechenie-legkih-poverhnostnyh-ozhogov">
              Yüngül səthi yanıqların müalicəsi
            </h3>

            <p>
              I dərəcəli yanıqların müalicəsində panthenol, dekspanthenol, tanin tərkibli sakitləşdirici kremlər, aerozollar, məhlullar istifadə olunur. Zədələnmə ocağındakı dəyişikliklər tam geri dönəndir və sağalma bir neçə günə baş verir.
            </p>

            <h3 className="h3" id="lechenie-ozhogov-ii-iii-stepeni">
              II-III dərəcəli yanıqların müalicəsi
            </h3>

            <p>
              Qabarcıqların əmələ gəlməsi dəri örtüyünün bütövlüyünün pozulmasından xəbər verir, dərinin və ya orqanizmin digər toxumalarının ölməsi isə infeksiyanın inkişafı üçün şərait yaradan amildir. Buna görə də ikinci və ya daha ağır dərəcəli yanıqlar <strong>xəstəlik törədən mikroorqanizmlərlə yoluxmaya meyllidir</strong>.
            </p>

            <p>
              İrinli ağırlaşmaların inkişafının qarşısını almaq üçün həm tibbi yardıma müraciətə qədər, həm də tibbi müdaxilədən sonra düzgün qulluq və yanıq səthinin işlənməsi vacibdir.
            </p>

            <p>
              Təzə yanıq yara səthini dezinfeksiya məqsədilə və yad hissəciklərin və mikroorqanizmlərin mexaniki yolla çıxarılması üçün yumaq lazımdır. Adətən furatsilin, marqansovka, xlorheksidin məhlullarından istifadə edilir. Sonra yaranın kənarlarına 5% yod məhlulu vurulur. Üstəlik qeyd etmək lazımdır ki, yodun{' '}
              <a href="/encyclopedia/povidon-jod/" title="Povidon yod">
                povidon-yod
              </a>{' '}
              adlanan xüsusi formaları mövcuddur.
            </p>

            <h3 className="h3" id="obrabotka-termicheskih-ozhogov-preparatami-na-osnove-povidon-yoda-betadin">
              Termiki yanıqların povidon-yod əsaslı preparatlarla işlənməsi (Betadine®)
            </h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    srcSet="/banner-betadin-927x916.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-927x916.webp"
                    alt="Betadine"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                Yara səthinin dezinfeksiyası üçün{' '}
                <strong>povidon-yod məhlulu</strong> (
                <strong>
                  <span style={{ color: '#0f780b' }}>Betadine<sup>®</sup></span>
                </strong>
                ) istifadə edilməsi tövsiyə olunur ki, yuxarıda sadalanan antiseptiklərdən fərqli olaraq, spirt ehtiva etmir, yanığın bütün səthində istifadəsinə icazə verilir, zədələnmiş toxumalarda yandırma yaratmır.
              </p>

              <p>
                <a href="/encyclopedia/povidon-jod/">Povidon-yod</a> (
                <strong>
                  <span style={{ color: '#0f780b' }}>Betadine<sup>®</sup></span>
                </strong>
                ) <strong>bakteriyaların, göbələklərin, sadə birləhüceyrəli mikroorqanizmlərin, virusların</strong> ölümünə kömək edir
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                . Bu zaman preparat praktiki olaraq qan dövranına sorulmur
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                ki, bu da yüksək təhlükəsizlik profilindən xəbər verir.
              </p>

              <p>
                Yanıqların müalicəsi üçün antiseptik, dezinfeksiya edən{' '}
                <strong>məlhəm</strong>{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Betadine<sup>®</sup></span>
                </strong>{' '}
                tətbiq etmək olar. Vasitə gündə 2-3 dəfə yanıq səthinə nazik təbəqə ilə vurulur. Yanıqların müalicəsində{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Betadine<sup>®</sup></span>
                </strong>{' '}
                <a href="/encyclopedia/jod-maz/">məlhəmi</a> sarğı altında da saxlamaq olar. Məhlul və ya məlhəmlə{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Betadine<sup>®</sup></span>
                </strong>{' '}
                isladılmış salfetlər altında infeksiya olunmuş yaraların müalicəsində ilk 5-7 gün ərzində şişkinlik və irinli ifrazatın miqdarı azalır, ağrının azalması qeyd olunur
                <sup>
                  <a href="#spisok-literatury">4</a>
                </sup>
                . Böyüklərdə və bir aylıqdan başlayaraq uşaqlarda{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Betadine<sup>®</sup></span>
                </strong>{' '}
                məhlulu və ya məlhəminin istifadəsinə icazə verilir
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                .
              </p>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  İstifadə təlimatı
                </a>
              </p>
            </div>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">Povidon-yodun xüsusiyyətləri haqqında qısa videoda izləyin:</div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Povidon-yodun xüsusiyyətləri haqqında video"
                ></iframe>
              </div>
              <div className="iframe_desc">
                Videodan siz yanıq yaralarını necə dezinfeksiya etməyi öyrənəcəksiniz ki, bu zaman yaranın sağalma prosesini pozmadan və istifadədə narahatlıq hiss etmədən.
              </div>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Yod əsaslı məlhəm</strong>
                </p>
                <p>
                  Yod əsaslı məlhəm: təsir mexanizmi, tətbiq sahəsi. Müxtəlif dəri xəstəliklərinin müalicəsi üçün povidon-yod əsaslı Betadine® məlhəmi.
                </p>
                <a
                  href="/encyclopedia/jod-maz/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
                  alt="Yod əsaslı məlhəm - anons"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h4 className="h4" id="lechenie-termicheskih-ozhogov-na-etape-zazhivleniya-i-sozrevaniya-rubca">
              Sağalma və çapıq yetişməsi mərhələsində termiki yanıqların müalicəsi
            </h4>

            <p>
              Antiseptik terapiya ilə yanaşı, lantan duzları, dezoksiribonukleat natrium əsaslı xarici sağaldıcı vasitələrdən istifadə etmək olar. Bir sıra mürəkkəb hallarda antibiotiklərlə müalicə tələb oluna bilər. Sağalma faktı ilə kobud çapıqların inkişafının profilaktik və müalicə məqsədilə silikon, hialuronidaza, qlükokortikosteroid əsaslı preparatlar təyin edilir.
            </p>

            <h2 className="h2" id="profilaktika-ozhogovogo-travmatizma">
              Yanıq travmatizminin profilaktikası
            </h2>

            <div className="list-base">
              <ul>
                <li>Kiçik uşaqları tək nəzarətsiz buraxmaq olmaz.</li>
                <li>Rozetkalar üçün xüsusi qoruyucu örtüklər istifadə etmək.</li>
                <li>Su kəməri borularına termostatlar quraşdırmaq.</li>
                <li>İstilik radiatorlarına qoruyucu ekranlar quraşdırmaq.</li>
                <li>
                  İsti məzmunlu fincan, boşqab, qazan, tavanı stolun mərkəzinə yaxın və ya bişirmə panelinin uzaq konforlarına qoymaq.
                </li>
                <li>Kibrit, alışqanı uşaqlar üçün əlçatmaz yerlərdə saxlamaq.</li>
                <li>
                  Stolüstü səthlərində olan elektrik cihazları divara yaxın itələnməlidir – su mənbəyindən uzaqda olmalıdır.
                </li>
                <li>
                  Təhlükəsiz günəşlənmə qaydalarına əməl etmək. Açıq günəşdə saat 11.00-a qədər və 16.00-dan sonra olmaq. Ən azı 30 SPF filtrli günəşdən qoruyucu krem istifadə etmək.
                </li>
              </ul>
            </div>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-558x542.webp"
                  type="image/webp"
                />
                <Image
                  src="/quastion-558x542.webp"
                  alt="Dekorativ elementlər"
                  width={558}
                  height={542}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              Tez-tez verilən suallar
            </h2>

            <h3 className="h3" id="kogda-nuzhno-obratitsya-za-medicinskoy-pomoshchyu-pri-termicheskom-ozhoge">
              Termiki yanıqda nə vaxt tibbi yardıma müraciət etmək lazımdır?
            </h3>

            <div className="list-base">
              <p>Təcili tibbi yardım çağırmaq lazımdır, əgər:</p>
              <ul>
                <li>yanıq sahəsi bədən səthinin 5%-dən (5 ovuc) çoxdur</li>
                <li>3-4 dərəcəli yanıqdır</li>
                <li>tüstü udulmuş, tənəffüs yolları yanmışdır</li>
                <li>üz və ya boyun, qasıq nahiyəsi yanıbsa, iki ətraf yanmışdır</li>
                <li>gözün yanıq travması olubsa</li>
                <li>termiki travma uşağa və ya yaşlı insana dəymişdirsə</li>
              </ul>
              <p>Hətta kiçik yanıqların müalicəsi zamanı irinli ağırlaşmalar yaranıbsa, həkim məsləhəti lazımdır.</p>
            </div>

            <h3 className="h3" id="mozhno-li-mochit-kozhu-posle-ozhoga">
              Yanıqdan sonra dərini islatmaq olarmı?
            </h3>

            <p>
              Termiki travmadan dərhal sonra hətta dərinin təmiz soyuq su ilə soyudulması tövsiyə olunur. Əgər 1 və 2 dərəcəli yanıqdırsa – axan su altında 10-15 dəqiqə saxlamaq. Əgər 3 və 4 dərəcəli yanıqdırsa – təmiz nəm sarğı vasitəsilə zədələnmiş dəri sahəsini soyutmaq. Zədələnmiş dərini su ilə soyudaraq, ovmayın və yaranı aktiv şəkildə yumağa çalışmayın.
            </p>

            <p>
              Qeyd etmək lazımdır ki, dəri örtüyünün bütövlüyünün pozulması ilə xarakterizə olunan yanıqların sağalma dövründə su ilə təmasda olmaq, sauna, hamam, hovuza getmək tövsiyə edilmir.
            </p>

            <h3 className="h3" id="mozhno-li-bintovat-obozhzhynnuyu-kozhu">
              Yanmış dərini sarımaq olarmı?
            </h3>

            <p>
              Termiki yanığın ilkin həkim qabağı işlənməsində və sağalma dövründə sarıma və ya təmiz sarğı qoymaq tövsiyə olunur. Bu zaman pambıq və ya digər tüklü materiallardan istifadə etmək olmaz.
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Moşkova Yelena Mixaylovna</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalənin müəllifi</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-406x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/moshkova-novyj-406x406 (1).webp"
                  alt="Moşkova Yelena Mixaylovna"
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
                        alt="İnfeksiya ilə yaralar-anons"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>İnfeksiya ilə yaralar</strong>
                    </p>
                    <p>
                      Bütün sürtülmələr və kəsiklər tez və ağırlaşmasız sağalmır. İnfeksiya olunmuş yaraları necə müalicə etmək lazımdır?
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
                        srcSet="/rastvor-joda-prevyu-246x166 (2).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/rastvor-joda-prevyu-246x166 (2).webp"
                        alt="Yod məhlulu - anons"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yod məhlulu</strong>
                    </p>
                    <p>Hansı yod məhlulları olur və onları nə üçün istifadə edirlər?</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/rastvor-joda/">Ətraflı</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/mazi-i-kremy-ot-ozhogov-prevyu-246x166 (1).webp"
                        alt="Yanıqlardan məlhəm və kremlər-anons"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yanıqlardan məlhəm və kremlər</strong>
                    </p>
                    <p>Yanıqların müalicəsi üçün hansı məlhəmlər olur və ən effektivini necə seçmək.</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/mazi-i-kremy-ot-ozhogov/">Ətraflı</Link>
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
                "Termiki, kimyəvi yanıqlar. Günəş yanıqları. Tənəffüs yollarının yanıqları" klinik tövsiyələr, 2020-ci il.
              </li>
              <li id="literatura-1">
                Mixayloviç V.A., Miroşniçenko A.Q. "Təcili tibbi yardım həkimləri üçün rəhbərlik", 4-cü nəşr, 2007-ci il.
              </li>
              <li id="literatura-2">
                Betadine® preparatının, məhlulun tibbi tətbiqi üzrə təlimat, QN П N015282/03.
              </li>
              <li id="literatura-3">
                Mixalskiy V. V., Boqdanov A. Ye., Jilina S. V., Prividentsev A. İ., Anikin A. İ., Ulyanina A. A.
                "Preparatın infeksiya olunmuş yaraların müalicəsində tətbiqi". RMJ №29, 23.12.2010.
              </li>
              <li id="literatura-4">
                Betadine<sup>®</sup> preparatının, məlhəmin tibbi tətbiqi üzrə təlimat, QN П N015282/02.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}