'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function RastvorJodaAz() {
  const [scrollTriggered, setScrollTriggered] = useState<Triggered>({
    40: false,
    80: false,
  });

  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Səhifə fırlanması40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Səhifə fırlanması80');
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
                  <span property="name">İyod məhlulu</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    İyod məhlulu: xüsusiyyətlər, göstərişlər, tətbiq üsulları
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-115x112.webp 1x, /icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/icon-230x224.webp"
                      alt="başlıqdakı şəkil"
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">İyod məhlulu nədir</h2>
                <div className="page-header-body">
                  <p>
                    İyod tərkibli antiseptiklər yerli tətbiq üçün istifadə olunur və ümumi tərkib hissəsi —
                    iyod olsa da, onun müxtəlif formalarından ibarətdir. Məsələn, elementar iyod, kalium yodid,
                    su, spirt və ya qliserin qarışıqları.
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#ispolzovanie-preparatov-betadin-na-osnove-povidon-yoda">İstifadə</a>
                  </li>
                  <li>
                    <a href="#preimushchestva-povidon-yoda-pered-spirtovym-rastvorom-yoda">Povidon-iyod</a>
                  </li>
                  <li>
                    <a href="#rastvor-betadin-">Betadin məhlulu</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-2-1-730x615.webp 1x, /kartinka-banner-2-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                      <Image
                        src="/kartinka-banner-2-1-1460x1230.webp"
                        alt="İyod məhlulu"
                        width={730}
                        height={615}
                        fetchPriority="high"
                        decoding="async"
                      />
                  </picture>
                </div>
              </div>
            </div>

            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#yodnye-rastvory-pokazaniya-k-primeneniyu">
                    İyod məhlulları: tətbiq göstərişləri
                  </a>
                </li>
                <li>
                  <a href="#osobye-ukazaniya-pri-obrabotke-rastvorami-yoda">
                    İyod məhlulları ilə işləmək üzrə xüsusi göstərişlər
                  </a>
                </li>
                <li>
                  <a href="#preimushchestva-povidon-yoda-pered-spirtovym-rastvorom-yoda">
                    Povidon-iyodun spirtli iyod məhluluna üstünlükləri
                  </a>
                </li>
                <li>
                  <a href="#ispolzovanie-preparatov-betadin-na-osnove-povidon-yoda">
                    Povidon-iyod əsasında Betadin preparatlarının istifadəsi
                  </a>
                </li>
                <li>
                  <a href="#mery-predostorozhnosti-pri-ispolzovanii-sredstv-na-osnove-povidon-yoda">
                    Povidon-iyod əsasında vasitələrin istifadəsi üzrə ehtiyat tədbirləri
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross">Məzmun</div>
            </nav>
          </div>
        </div>

        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#yodnye-rastvory-pokazaniya-k-primeneniyu">
                İyod məhlulları: tətbiq göstərişləri
              </a>
            </li>
            <li>
              <a href="#osobye-ukazaniya-pri-obrabotke-rastvorami-yoda">
                İyod məhlulları ilə işləmək üzrə xüsusi göstərişlər
              </a>
            </li>
            <li>
              <a href="#preimushchestva-povidon-yoda-pered-spirtovym-rastvorom-yoda">
                Povidon-iyodun spirtli iyod məhluluna üstünlükləri
              </a>
            </li>
            <li>
              <a href="#ispolzovanie-preparatov-betadin-na-osnove-povidon-yoda">
                Povidon-iyod əsasında Betadin preparatlarının istifadəsi
              </a>
            </li>
            <li>
              <a href="#mery-predostorozhnosti-pri-ispolzovanii-sredstv-na-osnove-povidon-yoda">
                Povidon-iyod əsasında vasitələrin istifadəsi üzrə ehtiyat tədbirləri
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
            </li>
            <li>
              <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross">Məzmun</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkimin məsləhətinin yerini tutmur</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Bu məhlulların əsas aktiv tərkib hissəsi — molekulyar
              <a href="/encyclopedia/jod/" title="İyod">
                iyod
              </a>
              , qram-müsbət və qram-mənfi bakteriyalar, eləcə də göbələk infeksiyasının törədiciləri üçün zəhərlidir
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Buna görə iyod məhlulları dəri və selikli qişaların dezinfeksiyası və müalicəsində geniş istifadə
              olunur. Həmçinin iyod toxumalarda yerli qıcıqlandırıcı təsir göstərərək travmatizə olmuş toxumalarda
              mikroqansirkulyasiyanı artırır, nəticədə ödem azalır, iltihabi elementlər sorulur və göyərmələr azalır.
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/circle-1006x1010.webp"
                  alt="Dekorativ elementlər"
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <p>
              Kalium yodid — iyodun suda və qliserində həll olunmasına kömək edən əlavə komponentdir
              <sup>4</sup>.
            </p>

            <h2 className="h2" id="yodnye-rastvory-pokazaniya-k-primeneniyu">
              İyod məhlulları: tətbiq göstərişləri
            </h2>

            <h3 className="h3">Dezinfeksiya</h3>

            <p>
              Kəsik və cızıq kimi yaraların işlənməsi üçün adətən 5% iyod tərkibli <strong>spirtli məhlul</strong>
              istifadə olunur. Məhsulun spirt əsaslı olması molekulyar iyodun qıcıqlandırıcı təsirini azaldır və onun
              xaric olma sürətini yavaşladır
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Spirt tərkibli iyod məhlulu iltihabi elementlərin müalicəsində və invaziv müdaxilələrdən əvvəl dəri
              üzərində (inyeksiyalar, punksiyalar, kateter yerləşdirilməsi) istifadə olunur
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Böyük yaralar yalnız kənarlarından işlənməlidir, çünki iyodizmin (bədəndə iyodun çoxluğu) riski
              mövcuddur — bunun nəticəsində Kvinke ödemi, göz yaşı və tüpürcək ifrazı, akneform səpgilər kimi reaksiyalar
              yarana bilər
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Bundan əlavə, spirt tərkibli məhlul dermatit və dəri yanıqlarına səbəb ola bilər
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h3 className="h3">Balzer testi</h3>

            <p>
              Dermatologiyada rozetska (pitiriaz) diaqnozunu təsdiqləmək üçün spirtli iyod məhlulundan istifadə
              edilərək <strong>Balzer testi</strong>
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              aparılır. Xüsusi səpgələri olan dəri sahələri spirtli iyod məhlulu ilə sürtülür; əgər dərinin kornifikasiyalı
              qatı mayalanmaya bənzər göbələk Malassezia furfur səbəbindən zəifləyibsə, ləkələr tünd-qəhvəyi rəngə boyanır.
            </p>

            <h3 className="h3">Minor testi</h3>

            <p>
              Hipozidroz (artmış tərləmə) korreksiyasından əvvəl əksər hallarda qoltuqaltı və ovuç dərisində
              Minor-un iyod-nişasta testi aparılır
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              . Əvvəlcə quru problemli sahə 5% spirtli iyod məhlulu ilə işlənir, sonra nişasta səpilir; tərləmə zamanı
              əmələ gələn damlalar mavi rəngə boyanır və hiperhidroz təsdiqlənir.
            </p>

            <h2 className="h2" id="osobye-ukazaniya-pri-obrabotke-rastvorami-yoda">
              İyod məhlulları ilə işləmək üzrə xüsusi göstərişlər
            </h2>

            <p>
              İyod tərkibli antiseptiklər irin, qan və yağ kimi çirkləndiricilərin mövcudluğu zamanı dezinfeksiya
              qabiliyyətini itirə bilər; bu, yaraların işlənməsi zamanı nəzərə alınmalıdır. Başqa (türşülü və ya qələvilı)
              antiseptiklərlə eyni zamanda istifadə dərinin işlənmə effektivliyini azaldır. Bu vasitələr ammonyak,
              efir əsaslı ekstraktlar və ferment preparatları ilə tamamilə uyğun gəlmir
              <sup>
                <a href="#spisok-literatury">1, 4</a>
              </sup>
              . Spirtli iyod məhlulu və Lugol-un su məhlulu uşaqlarda ehtiyatla istifadə edilməlidir
              <sup>
                <a href="#spisok-literatury">1, 4</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="preimushchestva-povidon-yoda-pered-spirtovym-rastvorom-yoda">
              Povidon-iyodun spirtli iyod məhluluna üstünlükləri
            </h2>

            <p>
              XX əsrin ortalarından bəri tibbdə antiseptik vasitə kimi aktiv şəkildə istifadə olunan —
              <a href="/encyclopedia/povidon-jod/" title="Povidon-iyod">
                povidon-iyod
              </a>
              .
            </p>

            <p>
              İyod molekulu təhlükəsiz polimer —
              <a href="/encyclopedia/polivinilpirrolidon/" title="Polivinilpirrolidon (povidon)">
                povidon
              </a>
              ilə birləşdirilmişdir və bu polimer onun daşıyıcısı kimi fəaliyyət göstərir. Bu sayədə iyodun yüksək
              antiseptik keyfiyyəti qorunub saxlanıldı və onun qana sorulması azaldıldı. Povidon-iyod kompleksi ilə dəri
              qarşılıqlı təsir etdikdə aktiv iyodun molekulları tədricən sərbəst buraxılır və bu, bir çox bakteriyaların,
              göbələk törədicilərinin, təkhüceyrəli parazitlərin və virusların məhv edilməsinə səbəb olur
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>

            <div className="list-base">
                <p>
                  <strong>Povidon-iyod məhlulu ilə işləmə (hətta yeni yaranmış yaralarda):</strong>
                </p>
              <ul>
                <li>yanma hissi yaratmır</li>
                <li>dəriyə və yara səthinə yanıq vermir</li>
                <li>qalıcı rənglənmə buraxmır</li>
                <li>zərurət varsa asanlıqla su ilə yuyulur</li>
                <li>
                  yerli tətbiq zamanı iyodun sorulmasının minimal olduğunu nəzərə alaraq, iyodizmin inkişafı nadir
                  hesab edilir
                </li>
                <li>hətta kiçik uşaqlarda (doğumdan bir ay) istifadə üçün icazəlidir</li>
              </ul>
            </div>

            <div className="list-base">
              <p>
                <strong>
                  Povidon-iyod məhlulu ilə:
                  <sup>
                    <a href="#spisok-literatury">5</a>
                  </sup>
                </strong>
              </p>
              <ul>
                <li>cərrahiyyə, stomatologiya və travmatologiyada yaralı səthləri müalicə edir və dezinfeksiya edir</li>
                <li>yanıq yaraları, yırtılıqlar, xoraları işləyir</li>
                <li>dermatologiyada dəri üçün bakterial, göbələk və virus infeksiyalarını müalicə edir</li>
                <li>stomatoloji müdaxilələr zamanı ağız boşluğunu dezinfeksiya edir</li>
                <li>cərrahi müdaxilə, inyeksiya və punksiya öncəsi dərini işləyir</li>
                <li>
                  doğuş yollarının sanitizasiyasını aparır və ginekologiyada kiçik əməliyyatlar (intrauterin spiralın
                  yerləşdirilməsi, abortlar) zamanı geniş tətbiq olunur
                </li>
              </ul>
            </div>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                Povidon-iyod məhlulunun təsiri haqqında qısa videoya baxın:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Povidon-iyod məhlulunun təsiri haqqında video"
                ></iframe>
              </div>
              <div className="iframe_desc">
                Videodan povidon-iyodun nəyə görə tətbiq olunduğunu, mikroorqanizmlərə necə təsir etdiyini və
                hansı üstünlüklərə malik olduğunu öyrənəcəksiniz.
              </div>
            </div>

            <h2 className="h2" id="ispolzovanie-preparatov-betadin-na-osnove-povidon-yoda">
              Povidon-iyod əsasında Betadin preparatlarının istifadəsi
            </h2>

            <div className="list-base">
              <p>
                <strong>
                  Povidon-iyod əsasında yaradılmış Betadin preparatları seriyası:
                  <span style={{ color: '#0f780b' }}>
                    Бетадин<sup>®</sup>
                  </span>
                </strong>
              </p>
              <ul>
                <li>Xarici istifadə üçün 10% məhlul</li>
                <li>10% məlhəm</li>
                <li>vaginal şamlar (suppozitoriyalar), 200 mq</li>
              </ul>
            </div>

            <h3 className="h3" id="rastvor-betadin-">
              Betadin məhlulu
            </h3>

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
                    src="/banner-betadin-1853x1832.webp"
                    alt="Betadin"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                <strong>
                  Yaraların, xoraların, yanıq və infeksiyalı dəri və selikli qişaların müalicə və dezinfeksiyası üçün
                </strong>{' '}
                seyreltilməyən Betadin<sup>®</sup> məhlulu tövsiyə olunur. Vasitə yaraya gündə 2 dəfə çəkilir və ya
                nəm kompress kimi istifadə olunur. Müalicə kursu fərdi olaraq təyin edilir
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                .
              </p>

              <p>
                <strong>Drenaj sistemlərində istifadə üçün</strong> 10% povidon-iyod məhlulu (Betadin<sup>®</sup>)
                10–100 dəfə seyreltilir.
              </p>

              <p>
                <strong>İnvaziv müdaxilə öncəsi xəstənin dərisini işləmək məqsədilə</strong>
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>{' '}
                seyreltilməyən 10% povidon-iyod məhlulu (Betadin<sup>®</sup>) dərinin üzərinə 5 dəqiqə ərzində
                tətbiq edilir və sonra yuyulur. Proseduru iki dəfə təkrarlamaq lazımdır.
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

            <h3 className="h3">Betadin məlhəmi</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/banner-betadin-maz-mobile-315x226.webp 1x, /banner-betadin-maz-mobile-630x451.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/banner-betadin-maz-927x916.webp 1x, /banner-betadin-maz-1853x1832.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-maz-1853x1832.webp"
                    alt="Betadin"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                <strong>
                  10% Betadin məlhəmi povidon-iyod əsaslıdır və yaraların müxtəlif mərhələlərində (iltihab və
                  sağalma fazalarında) dezinfeksiya və irin drenajının yaxşılaşdırılması üçün istifadə olunur
                  <sup>
                    <a href="#spisok-literatury">9</a>
                  </sup>
                  .
                </strong>
                Povidon-iyod bir çox patogen mikroorqanizmləri məhv edir, məlhəmin tərkibindəki makrogol isə yaranı
                irinlərdən təmizləməyə kömək edir
                <sup>
                  <a href="#spisok-literatury">10</a>
                </sup>
                . Betadin məlhəmi irinli yaraya ehtiyatla (sürtmədən) gündə 2–3 dəfə tətbiq olunur və sarğı edilir
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                .
              </p>

              <p>
                İnfeksiyalaşmış yaraların müalicəsində məhlulla və ya məlhəmlə isladılmış salfetlər altında ilk 5–7
                gün ərzində ödem və irin ifrazatında azalma, ağrı hissində azalma müşahidə olunub
                <sup>
                  <a href="#spisok-literatury">6</a>
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

            <h3 className="h3">Betadin vaginal şamları</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/banner-betadin-svechi-mobile-315x235.webp 1x, /banner-betadin-svechi-mobile-630x470.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/banner-betadin-svechi-927x916.webp 1x, /banner-betadin-svechi-1853x1832.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-svechi-1853x1832.webp"
                    alt="Betadin"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                Vaginal şamların tərkibində povidon-iyod kəskin və xroniki
                <a href="/encyclopedia/svechi-ot-vaginita/">vaginitlərin</a>, kandidozun ("molkavnitsa") və trixomoniazın
                müalicəsində istifadə olunur
                <sup>
                  <a href="#spisok-literatury">6</a>
                </sup>
                .
              </p>

              <p>
                <strong>Kəskin vaginitlərdə</strong> yuyunduqdan sonra gündə 1 dəfə 200 mq Betadin vaginal şamı istifadə edilir
                və müalicə 7 gün davam edir.
              </p>

              <p>
                <strong>Xroniki və subakut vaginitlərdə</strong> — gündə 1 dəfə yatmazdan əvvəl 200 mq Betadin vaginal şamı
                14 gün ərzində tətbiq olunur.
              </p>

              <p>
                <strong>Profilaktik məqsədlə</strong> ginekologiyada əməliyyata hazırlıq üçün vasitə gündə 2 dəfə
                (səhər və axşam yatmazdan əvvəl) 1–7 gün ərzində vaginal tətbiq edilir.
              </p>

              <p>
                Betadin vaginal suppozitoriyalarının menstruasiya zamanı istifadəsi mümkündür
                <sup>
                  <a href="#spisok-literatury">6, 8</a>
                </sup>
                .
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

            <h2 className="h2" id="mery-predostorozhnosti-pri-ispolzovanii-sredstv-na-osnove-povidon-yoda">
              Povidon-iyod əsasında vasitələrin istifadəsi üzrə ehtiyat tədbirləri
            </h2>

            <p>
              Povidon-iyodlu vasitələrin gözə düşməsindən çəkinmək lazımdır! <br />
              Qaşınma və ya dəri qızarması yaranarsa, bu antiseptiklərin istifadəsini dayandırın.
            </p>

            <p>
              Bu iyod tərkibli preparat olduğu üçün qalxanabənzər vəzinin xəstəlikləri varsa istifadə etməzdən əvvəl
              həkimlə məsləhətləşmək tövsiyə olunur.<br />
            </p>

            <p>
              Povidon-iyod radioaktiv iyodla müalicədən əvvəl, böyrək çatışmazlığı və Düring-in herpetiform dermatiti
              (baloncuklu dermatozun bir növü) zamanı tövsiyə edilmir. Hamilə qadınlara (3-cü aydan etibarən) və
              əmizdirən analara məsləhət görülmür
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              . Yeniyetmə yaşına çatmamış qızlarda Betadin vaginal suppozitoriyalarının istifadəsi kontrendikedir
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              .
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Povidon-iyod</strong>
                </p>
                <p>
                  Povidon-iyodun xüsusiyyətləri və xassələri. Povidon-iyod nə üçün tətbiq olunur? Betadin
                  məhlul, məlhəm və şamların tətbiq təlimatı.
                </p>
                <a
                  href="/encyclopedia/povidon-jod/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="/povidon-jod-prevyu-310x210.webp 1x, /povidon-jod-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/povidon-jod-prevyu-620x420.webp"
                  alt="Povidon-iyod - önizləmə"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-558x542.webp 1x, /quastion-1115x1084.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/quastion-1115x1084.webp"
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

            <h3 className="h3">Betadin məhlulundan hansı yaşdan istifadə etmək olar?</h3>

            <p>
              Betadin məhlulu böyüklər və uşaqlar üçün, doğumdan bir ay sonra istifadə edilməsinə icazə verilmişdir
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>

            <h3 className="h3">
              Возможно ли совместное использование 10% раствора Бетадин® со спиртовым раствором йода, зелёнки,
              фукорцина?
            </h3>

            <p>
              10% раствор{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Бетадин<sup>®</sup>
              </mark>{' '}
              несовместим с другими дезинфицирующими <br />
              и антисептическими средствами, особенно содержащими щелочи, ферменты <br />и ртуть. С
              обеззараживающей и лечебной целью вместо комбинации средств можно использовать раствор{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }}>
                Бетадин<sup>®</sup>
              </mark>
              . Препарат активен в отношении большинства бактерий и простейших одноклеточных организмов,
              возбудителей грибковой инфекции, вирусов
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              . Используется для лечения ран в период воспаления и формирования новых покровных тканей, не
              вызывает жжения.
            </p>

            <h3 className="h3">Как долго можно использовать средства на основе повидон-йода?</h3>

            <p>
              Длительность использования препаратов на основе повидон-йода определяется инструкцией к
              лекарственному средству или по решению врача. Однако, если после начала лечения наблюдается
              ухудшение, появилось жжение и зуд, терапию повидон-йодом необходимо прекратить и обратиться к своему
              лечащему врачу.
            </p>

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
                  src="/moshkova-novyj-406x406.webp"
                  alt="Мошкова Елена Михайловна"
                  width={203}
                  height={203}
                  loading="lazy"
                  decoding="async"
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
                        srcSet="/polivinilpirrolidon-povidon-prevyu-246x166.webp 1x, /polivinilpirrolidon-povidon-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/polivinilpirrolidon-povidon-prevyu-491x332.webp"
                        alt="Polivinilpirrolidon (povidon) - önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Поливинилпирро­лидон (повидон)</strong>
                    </p>
                    <p>Поливинилпирролидон (повидон): применение, использование в комплексе повидон-йод.</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/polivinilpirrolidon/">Подробнее</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/povidon-jod-prevyu-246x166.webp 1x, /povidon-jod-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/povidon-jod-prevyu-491x332.webp"
                        alt="Povidon-iyod - önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Повидон йод</strong>
                    </p>
                    <p>
                      Характеристики и свойства повидон-йода. Для чего применяется повидон-йод? Инструкция по
                      применению раствора, мази, свечей Бетадин<sup>®</sup> с повидон-йодом.
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
                        srcSet="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp 1x, /maz-dlya-zazhivleniya-ran-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/maz-dlya-zazhivleniya-ran-prevyu-491x332.webp"
                        alt="Yaraların sağalması üçün məlhəm - önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Мазь для заживления ран</strong>
                    </p>
                    <p>Какие бывают заживляющие мази, и как выбрать самую эффективную.</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/maz-dlya-zazhivleniya-ran/">Подробнее</Link>
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
                Инструкция по медицинскому применению ЛП раствор йода спиртовой 5%, РЛС.
              </li>
              <li id="literatura-1">
                Бутов Ю.С., Скрипкин Ю.К. Иванов О.Л. Национальное руководство по дерматовенерологии //
                ГЭОТАР- Медиа 2017, Москва.
              </li>
              <li id="literatura-2">
                Бауман Л. Косметическая дерматология: принципы и практика //«МЕДпресс-информ» 2012 Москва.
              </li>
              <li id="literatura-3">Инструкция по медицинскому применению ЛП раствор Люголя ЛП 008222-020622.</li>
              <li id="literatura-4">
                Инструкция по медицинскому применению ЛП Бетадин<sup>®</sup> (раствор, мазь), РУ П №015282/03, П
                №015282/02
              </li>
              <li id="literatura-5">
                Инструкция по медицинскому применению ЛП Бетадин<sup>®</sup> (суппозитории вагинальные), РУ П
                №015282/017.
              </li>
              <li id="literatura-6">
                Михальский В.В., Богданов А.Е., Жилина С.В., и др. «Применение препарата Бетадин<sup>®</sup> в
                лечении инфицированных ран» //РМЖ №29, 23.12.2010.
              </li>
              <li id="literatura-7">
                Богомазова И.М. , Белоусова В.С. , Максимов М.Л. Эффективность использования препарата Бетадин
                <sup>®</sup> при бактериальном вагинозе // РМЖ Мать и дитя. №19 от 09.09.2014.
              </li>
              <li id="literatura-8">
                Блатун Л.А. Местное медикаментозное лечение ран. Хирургия. Журнал им. Н.И. Пирогова. 2011;(4):51
                59.
              </li>
              <li id="literatura-9">
                Яремчук Ан.А. и соавт. Обоснование состава многокомпонентной мази для лечения гнойных ран в первой
                фазе раневого процесса. Вестник фармации №3 (57) 2012.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
