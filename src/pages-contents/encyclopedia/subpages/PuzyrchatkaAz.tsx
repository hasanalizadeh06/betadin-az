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

export default function PuzyrchatkaAz() {
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
                  <Link property="item" typeof="WebPage" href="/">
                    <span property="name">Ana səhifə</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="/encyclopedia/">
                    <span property="name">Pemfiqus: müalicə və preparatlar</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Pemfiqus: müalicə və preparatlar</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Pemfiqus: simptomlar, diaqnostika, müalicə</h1>
                  <picture>
                    <source
                      srcSet="/icon-115x112.webp 1x, /icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/icon-230x224.webp"
                      alt="başlıq şəkli"
                      width={115}
                      height={112}
                      decoding="async"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Pemfiqus nədir?</h2>
                <div className="page-header-body">
                  <p>
                    Pemfiqus (pemphigus) nadir dəri xəstəliklərinin bir qrupunu təsvir etmək üçün istifadə olunan
                    ümumi termindir.
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#diagnostika">Diaqnostika</a>
                  </li>
                  <li>
                    <a href="#lechenie">Pemfiqusun müalicəsi</a>
                  </li>
                  <li>
                    <a href="#preparaty-yoda-betadin-dlya-obrabotki-porazhennyh-uchastkov-kozhi">Emal</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/frame-758-730x615.webp 1x, /frame-758-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/frame-758-1460x1230.webp"
                      alt="Pemfiqus"
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
                  <a href="#pochemu-voznikaet-puzyrchatka">Pemfiqus niyə yaranır?</a>
                </li>
                <li>
                  <a href="#kak-voznikaet-puzyrchatka">Pemfiqus necə yaranır?</a>
                </li>
                <li>
                  <a href="#vidy-puzyrchatki">Pemfiqusun növləri</a>
                </li>
                <li>
                  <a href="#diagnostika">Diaqnostika</a>
                </li>
                <li>
                  <a href="#lechenie">Müalicə</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross">Mündəricat</div>
            </nav>
          </div>
        </div>

        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#pochemu-voznikaet-puzyrchatka">Pemfiqus niyə yaranır?</a>
            </li>
            <li>
              <a href="#kak-voznikaet-puzyrchatka">Pemfiqus necə yaranır?</a>
            </li>
            <li>
              <a href="#vidy-puzyrchatki">Pemfiqusun növləri</a>
            </li>
            <li>
              <a href="#diagnostika">Diaqnostika</a>
            </li>
            <li>
              <a href="#lechenie">Müalicə</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
            </li>
            <li>
              <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross">Mündəricat</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətinin yerini tutmur</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Pemfiqusun fərqləndirici əlaməti dəridə və selikli qişalarda əmələ gələn geniş yayılan, yumşaq
              qabarcıqlar və eroziyaların olmasıdır
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <p>
              «Pemphigus» termini yunan sözü «pemphix»-dən gəlir və «qabarcıq» deməkdir
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
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
              <strong>Pemfiqusun meydana çıxması</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-2-scaled-650x350.webp 1x, /mask-group-2-scaled-1300x700.webp 2x"
                type="image/webp"
              />
              <Image
                src="/mask-group-2-scaled-1300x700.webp"
                alt="Pemfiqusun meydana çıxması"
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Xəstəliyin yayılması</h3>

            <p>
              Epidemioloji məlumatlara görə, pemfiqus bütün dəri xəstəliklərinin cəmi içərisində yalnız 1%-ni
              təşkil edir
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              . Birləşmiş Krallıqda aparılmış bir tədqiqatda xəstəliyin insidensiyası ildə 100 000 nəfərə 0,68
              hallar olduğu bildirilib
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Xəstəliyin yayılması dünya üzrə fərqli bölgələrdə dəyişir; pemfiqus Orta və Yaxın Şərqdə Qərbi
              Avropa və Şimali Amerikadan daha çox müşahidə olunur
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              .
            </p>

            <p>
              Xəstələnmə adətən orta yaşlı insanlarda (40-60 yaş) daha çox rast gəlinir; pemfiquslu xəstələrin
              60%-i qadınlardır
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              .
            </p>

            <h3 className="h3">Pemfiqus necə özünü göstərir?</h3>

            <div className="list-base">
              <p>Pemfiqusun simptomları:</p>
              <ul>
                <li>
                  Asılmış, asanlıqla partlayan qabarcıqların əmələ gəlməsi; bunlar partladıqda eroziya buraxırlar və
                  partlamış qabarcıqların qalıqları ilə əhatə olunurlar.
                </li>
                <li>Qabarcıqlar həm bədənin dərisində, həm də selikli qişalarda görünə bilər.</li>
                <li>Zədələnmiş sahələrdə ağrı hissi.</li>
              </ul>
            </div>

            <h2 className="h2" id="pochemu-voznikaet-puzyrchatka">
              Pemfiqus niyə yaranır?
            </h2>

            <div className="list-base">
              <p>
                <strong>Bu xəstəliyin inkişafı ilə bağlı bir neçə nəzəriyyə mövcuddur:</strong>
              </p>
              <ul>
                <li>İnfectioz</li>
                <li>Neurogen (nevroloji xəstəliklərin nəticəsi)</li>
                <li>Toksik</li>
                <li>
                  Irsi
                  <sup>
                    <a href="#spisok-literatury">4</a>
                  </sup>
                </li>
              </ul>
            </div>

            <p>
              Pemfiqusun yaranmasında genetik meyl mühüm rol oynayır. Belə meyli olan insanlarda tetikləyici amillərin
              təsiri ilə immun sisteminin funksiyalarının pozulduğunu göstərən maddələrin (avtoantitellərin) əmələ
              gəlməsi başlayır və nəticədə xəstəlik debüt edir
              <sup>
                <a href="#spisok-literatury">4,13</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="kak-voznikaet-puzyrchatka">
              Pemfiqus necə yaranır?
            </h2>

            <p>
              Pemfiqusun inkişaf mexanizmində əsas yer akantolizə məxsusdur — bu, dəri hüceyrələri arasındakı
              əlaqənin pozulması və xarakterik asılmış qabarcıqların əmələ gəlməsidir
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <p>
              Akantoliz hüceyrələrin səthi strukturlarına (desmogleinlər) qarşı yaranan antitellərin (IgG) təsiri
              nəticəsində baş verir. Bu zülallar hüceyrələrarası yapışmanı və hüceyrələrarası siqnal ötürülməsini
              təmin edir. Antitellərin təsiri ilə zülallar parçalanır, hüceyrələrarası əlaqə itir və dəri örtüyünün
              bütövlüyü pozulur.
            </p>

            <h2 className="h2" id="vidy-puzyrchatki">
              Pemfiqusun növləri
            </h2>

            <div className="list-base">
              <p>
                <strong>Dəri epidermisinin xarici təbəqəsi 5 qatdan ibarətdir:</strong>
              </p>
              <ul>
                <li>Keratin (hörgü) təbəqəsi</li>
                <li>Parlaq təbəqə</li>
                <li>Taxılcıqlı təbəqə</li>
                <li>Dikenli təbəqə</li>
                <li>Baza təbəqəsi</li>
              </ul>
            </div>

            <div className="list-base">
              <p>
                Qabarcıqların yerləşdiyi təbəqəyə, xəstəliyin xarici əlamətlərinə və onları provokasiya edən amillərə
                əsasən
                <strong>
                  , pemfiqusu aşağıdakı növlərə ayırırlar
                  <sup>
                    <a href="#spisok-literatury">8,11</a>
                  </sup>
                  :
                </strong>
              </p>
              <ul>
                <li>Adətən (vulqar)</li>
                <li>Veqetasiya edən</li>
                <li>Yarpaqlı (listovid)</li>
                <li>Paraneoplastik</li>
                <li>Dərmanlara bağlı</li>
              </ul>
            </div>

            <p>
              <strong>Dərinin səth təbəqəsinin strukturu</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-39-650x352.webp 1x, /medical-kit-and-bandaid-509398-488-1-39-1300x704.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-39-1300x704.webp"
                alt="Dərinin səth təbəqəsinin strukturu"
                width={650}
                height={352}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Vulqar (adətən) pemfiqus</h3>

            <div className="list-base">
              <ul>
                <li>
                  Xüsusilə selikli qişalarda (ağız boşluğu, cinsi orqanlar) və dəridə (sinə, bel, çiyinlər) qabarcıqlar
                  və eroziyaların meydana gəlməsi ilə xarakterizə olunur.
                </li>
                <li>
                  Ağız selikli qişasındakı zədələnmələr dəridə görünən dəyişikliklərdən əvvəl 4 aya qədər davam edə
                  bilər.
                </li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-5-scaled-650x350.webp 1x, /mask-group-5-scaled-1300x700.webp 2x"
                type="image/webp"
              />
              <Image
                src="/mask-group-5-scaled-1300x700.webp"
                alt="Vulqar pemfiqus"
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Veqetasiya edən pemfiqus</h3>

            <div className="list-base">
              <ul>
                <li>
                  Vegetasiya edən forma təbii dəliklərin ətrafında və dəri qatları daxilində qabarcıqların və/vəya
                  pustulların (iri səpkilər) əmələ gəlməsi ilə xarakterizə olunur.
                </li>
                <li>
                  Qabarcıqlar partladıqdan sonra onların dibində böyümə - veqetasiya əmələ gəlir.
                </li>
              </ul>
            </div>

            <h3 className="h3">Yarpaqlı pemfiqus</h3>

            <div className="list-base">
              <ul>
                <li>
                  Yarpaqlı formada düyünlü, çökmüş qabarcıqların (kənarları qabıq ilə örtülmüş) əmələ gəlməsi xarakterikdir.
                </li>
                <li>
                  Zədələnmələr üz, saçlı dərisi və bədənin yuxarı hissəsində yerləşir.
                </li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/ris-puzyrchatka-listovideaya-scaled-650x350.webp 1x, /ris-puzyrchatka-listovideaya-scaled-1300x700.webp 2x"
                type="image/webp"
              />
              <Image
                src="/ris-puzyrchatka-listovideaya-scaled-1300x700.webp"
                alt="Yarpaqlı pemfiqus"
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              <strong>Yarpaqlı pemfiqusun subtipleri:</strong>
            </p>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>Eritematoz (seboreik, Senir—Asher sindromu) pemfiqus</strong>
                  </p>
                  <p>
                    Sarı-qəhvəyi rəngdə yağlı pulcuqlar və qabıqlarla müşayiət olunan qızarıqlıq fonunda meydana gəlir.
                    Həmçinin sürətlə partlayan qabarcıqlar və onların yerində eroziyaların əmələ gəlməsi mümkündür. Səpkilər
                    saçlı dəridə, üzdə, kürək arası və sinənin yuxarı hissəsində lokalizasiya olunur.
                  </p>
                </div>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>Braziliya pemfiqusu</strong>
                  </p>
                  <p>Braziliyanın kənd rayonlarında aşkar olunmuş yarpaqlı pemfiqus formasıdır.</p>
                </div>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>Herpetiform pemfiqus</strong>
                  </p>
                  <p>
                    Nodul və kiçik qabarcıqların toplaşması ilə xarakterizə olunur
                    <sup>
                      <a href="#spisok-literatury">11</a>
                    </sup>
                    .
                  </p>
                </div>
              </div>
            </div>

            <h3 className="h3">Paraneoplastik pemfiqus</h3>

            <div className="list-base">
              <ul>
                <li>
                  Paraneoplastik formada üz, saçlı dərisi, bədən və əzaların üzərində qabarcıqlar, eroziyalar, ləkələr və
                  düyünlər kimi müxtəlif zədələnmələr yaranır.
                </li>
                <li>
                  Bu tip pemfiqusun yaranması irəliləmiş malign xəstəliklərlə əlaqədardır
                  <sup>
                    <a href="#spisok-literatury">10</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <h3 className="h3">Dərmanlara bağlı pemfiqus</h3>

            <div className="list-base">
              <ul>
                <li>
                  Bu forma vulqar, seboreik və ya yarpaqlı pemfiqusa oxşar əlamətlərlə gedir.
                </li>
                <li>
                  Zədələnmələr qoltuqaltı, bədən və ətraflarda lokalizasiya olunur
                  <sup>
                    <a href="#spisok-literatury">11,14</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <h2 className="h2" id="diagnostika">
              Pemfiqusun diaqnostikası
            </h2>

            <p>
              Əksər hallarda pemfiqus vizual müayinə ilə diaqnoz olunur, lakin dəri biopsiyası və serum analizləri
              həkimə diaqnozu təsdiqləməyə kömək edə bilər.
            </p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>Vizual müayinə</strong> – asılmış qabarcıqlar və eroziyalar.
                </p>
              </div>

              <div className="line">
                <p>
                  <strong>Nikolski fenomeni</strong> (eroziyaya yaxın sağlam dəri qatının soyulması), <strong>Asbo-Hansen fenomeni</strong> (qabarcığa təzyiq edildikdə onun sahəsinin artması).
                </p>
              </div>

              <div className="line">
                <p>
                  <strong>Sitoloji müayinə</strong> – akantolitik hüceyrələrin aşkar edilməsi (dikenli təbəqə hüceyrələrinin dəyişmiş hissələri).
                </p>
              </div>

              <div className="line">
                <p>
                  <strong>Gistoloji müayinə</strong> – epidermis daxilində, dikenli təbəqədə intraepidermal qabarcığın aşkar edilməsi.
                </p>
              </div>

              <div className="line">
                <div>
                  <p>
                    <strong>İmmunohistokimyəvi müayinə:</strong>
                  </p>
                  <ul>
                    <li>
                      İndirekt immunofluoresans reaksiya – serumda IgG sinfinə aid avtoantitellərin aşkar edilməsi.
                    </li>
                    <li>
                      Birbaşa immunofluoresans reaksiya – epidermisin dikenli təbəqəsində IgG avtoantitellərinin
                      lokallaşması.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="line">
                <p>
                  <strong>ELISA metodu (enzim immunoassay)</strong> – avtoantitellərin dəri zülalları (desmogleinlər)
                  ilə qarşılıqlı təsirinin müəyyən edilməsi
                  <sup>
                    <a href="#spisok-literatury">6</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <h2 className="h2" id="lechenie">
              Pemfiqusun müalicəsi
            </h2>

            <div className="list-base">
              <p>
                <strong>
                  Müalicənin əsas məqsədi dəridə və/və ya selikli qişalarda qabarcıqların sağalmasını təmin etmək və
                  mümkün qədər ciddi yan təsirləri minimuma endirməkdir.
                </strong>
              </p>
              <ul>
                <li>Pemfiqus həyat üçün təhlükəli ola bilər və intensiv, sürətli sistemli kortikosteroidlər tələb edir.</li>
                <li>Ağır formalarda immunosupressantlar da istifadə olunur.</li>
                <li>
                  Ağır və davamlı halların müalicəsində kortikosteroidlərin venadaxili impulsoterapiyası, plazmaferez və
                  intravena immunoglobulin tətbiqi istifadə oluna bilər
                  <sup>
                    <a href="#spisok-literatury">6</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <div className="green">
              <p>Bütün pemfiqus hallarında xüsusilə erkən mərhələlərdə lokal müalicəyə diqqət yetirmək lazımdır.</p>
            </div>

            <h3 className="h3">Yerel müalicə</h3>

            <p>
              Pemfiqusun lokal terapiyası əsasən simptomatikdir — iltihabı azaltmaq və ikincili infeksiyaların qarşısını
              almaq məqsədi daşıyır.
            </p>

            <div className="list-base">
              <p>
                <strong>Adətən zədələnmiş sahələr aşağıdakılarla işlənir:</strong>
              </p>
              <ul>
                <li>
                  Anilin boyaları və <strong>antiseptik</strong> məhlullar (məsələn, povidon-yod məhlulu, yaşıl boyası).
                </li>
                <li>
                  <strong>Kortikosteroid məlhəmlər</strong>, iltihaba qarşı və immunosupressiv təsirə malikdir.
                </li>
                <li>
                  <strong>Kalsinorin inhibitorları</strong>, iltihab əleyhinə təsir göstərir.
                </li>
                <li>
                  <strong>Qarışıq kortikosteroid məlhəmlər</strong> (hidrokortizon + antibiotiklər) — iltihabəleyhinə və
                  antimikrob təsirə malikdir.
                </li>
              </ul>
            </div>

            <p>
              Dəri eroziyalı zədələrə yapışmayan bintlər tətbiq olunmalıdır. Ağız içi zədələnmələr üçün lokal anestezik
              tərkibli gellər və düzgün diş baxımı məsləhət görülür.
            </p>

            <p>
              Düzgün yara baxımı xəstədə narahatlığı azaltmağa və infeksiya riskini azaltmağa kömək edəcək
              <sup>
                <a href="#spisok-literatury">9</a>
              </sup>
              .
            </p>

            <h3 className="h3" id="preparaty-yoda-betadin-dlya-obrabotki-porazhennyh-uchastkov-kozhi">
              Yod preparatları (Betadin®) pemfiqusla zədələnmiş sahələrin işlənməsi üçün
            </h3>

            <p>
              Pemfiqus zamanı dəri eroziyalarının müalicəsi (Dermatit Düring kimi herpetiform dermatitis kontraendikedir)
              üçün Betadin<sup>®</sup> preparatlarının (<a href="/encyclopedia/jod-maz/">mələ</a> və
              <a href="/encyclopedia/rastvor-joda/"> məhlul</a>) gündə iki dəfə tətbiqi və sonra sarğıların qoyulması
              tövsiyə olunur
              <sup>
                <a href="#spisok-literatury">16</a>
              </sup>
              .
            </p>

            <p>
              Povidon-yod preparatları antimikrob və yara sağaldıcı təsirə malikdir, bu da eroziyalara infeksiyanın
              daxil olmasını əngəlləyir.
            </p>

            <p>
              Antimikrob təsiri bakteriyaların artmasının qarşısını almaqla və yara sağaldıcı təsiri isə toxuma hüceyrələrinə
              zərər verməməsi ilə təmin olunur
              <sup>
                <a href="#spisok-literatury">17</a>
              </sup>
              .
            </p>

            <p>
              Bundan başqa, povidon-yod in vitro şəraitdə Pseudomonas aeruginosa, Candida albicans və metisillinə
              davamlı Staphylococcus aureus (MRSA) tərəfindən əmələ gələn biofilmlərə qarşı aktivdir — patogenlərin
              bəzi dərmanlara qarşı müqavimət göstərməsinə səbəb olan xüsusi həyat forması
              <sup>
                <a href="#spisok-literatury">20</a>
              </sup>
              .
            </p>

            <h4 className="h4">Betadin® preparatları nədir?</h4>

            <p>
              <a href="/encyclopedia/povidon-jod/">Povidon-yod</a> (Betadin<sup>®</sup>) — povidon daşıyıcısı ilə birləşmiş
              yodofordur. Dəri və selikli qişa ilə təmasda olduqda yod povidondan tədricən ayrılır və zərərli mikroorqanizmləri
              məhv edir.
            </p>

            <h4 className="h4">Betadin® hansı mikroorqanizmlərə qarşı aktivdir?</h4>

            <p>
              Betadin<sup>®</sup> preparatının üstünlüyü müxtəlif mikroorqanizmlərə — qram-müsbət və qram-mənfi bakteriyalara
              (bəzən antiseptiklərə və antibiotiklərə davamlı ştammlar daxil olmaqla), göbələklərə, protozoalara, viruslara
              və bakterial sporlarına qarşı geniş spektrdə aktiv olmasıdır
              <sup>
                <a href="#spisok-literatury">17,20,21</a>
              </sup>
              .
            </p>

            <h4 className="h4">Betadin® necə istifadə olunur?</h4>

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
                <strong>Betadin® məhlul və məlhəm formasında istifadə olunur</strong>
                <sup>
                  <a href="#spisok-literatury">18,19</a>
                </sup>
                :
              </p>

              <ul>
                <li>Betadin məhlulu seyrəkləşdirilməmiş formada zədələnmiş sahələrə tətbiq edilir.</li>
                <li>
                  Betadin<sup>®</sup> məlhəm forması zədələnmiş sahələrə nazik təbəqə ilə gündə 1–2 dəfə tətbiq edilir.
                  Hər hansı dərman vasitəsinin istifadəsi mütləq həkim nəzarəti altında olmalıdır, çünki hər bir vasitənin
                  əks göstərişləri və tətbiq xüsusiyyətləri var.
                </li>
              </ul>

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

            <h3 className="h3">Pemfiqusla oxşar simptomları olan xəstəliklər hansılardır?</h3>

            <div className="list-base">
              <p>Oxşar simptomlu xəstəliklər çoxdur:</p>
              <ul>
                <li>
                  <strong>Autoimmun xəstəliklər:</strong> bulloz pemfigoid, selikli qişa pemfigoid, pemfigoidlə əlaqəli
                  lichen planus, əldə edilən bulloz epidermoliz, xətti IgA-bulloz dermatit və bulloz lupus.
                </li>
                <li>
                  <strong>İnfeksion xəstəliklər:</strong> qaynar su sindromu (stafilokokk), bulloz impetigo və akut
                  herpetik stomatit.
                </li>
                <li>
                  <strong>Genetik xəstəliklər:</strong> Hailey–Hailey xəstəliyi.
                </li>
                <li>
                  <strong>Digər:</strong> aftoz stomatit, çoxformalı eritema, Stevens–Johnson sindromu, toksik epidermal
                  nekroliz, lichen planus, transplantat-qarşısı xəstəlik reaksiyası, Grover xəstəliyi (keçici akantolitik
                  dermatit), seboreik dermatit
                  <sup>
                    <a href="#spisok-literatury">8</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <h3 className="h3">Pemfiqusun fəsadları hansılardır?</h3>

            <p>
              Pemfiqusun fəsadlarına ikincili bakterial infeksiyalar, dəri ülserləri, sepsis və gangrena daxil ola bilər
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              .
            </p>

            <h3 className="h3">Kortikosteroid terapiyasının yan təsirləri hansılardır?</h3>

            <p>
              Uzun müddətli kortikosteroid istifadəsi diabet, İtsenko—Kušing sindromu (çəki artımı, arterial hipertenziya,
              osteoporoz və s.) kimi yan təsirlərə səbəb ola bilər. Sistemli kortikosteroidləri immunosupressantlarla
              birlikdə tətbiq etmək yan təsirlərin qarşısını almağa kömək edir
              <sup>
                <a href="#spisok-literatury">4,7</a>
              </sup>
              .
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Tamrazova Olga Borisovna</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalənin müəllifi</p>
              </div>
              <picture>
                <source
                  srcSet="/tamrazova-olga-borisovna-1-179x203.webp 1x, /tamrazova-olga-borisovna-1-359x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/tamrazova-olga-borisovna-1-359x406.webp"
                  alt="Tamrazova Olga Borisovna"
                  width={179}
                  height={203}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              Mövzuya dair oxu
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/povidon-jod-prevyu-246x166.webp 1x, /povidon-jod-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/povidon-jod-prevyu-491x332.webp"
                        alt="Povidon-yod - prevyu"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Povidon-yod</strong>
                    </p>
                    <p>
                      Povidon-yodun xüsusiyyətləri və xassələri. Povidon-yod nə üçün istifadə olunur? Məhlul,
                      məlhəm və Betadin<sup>®</sup> şamlarının istifadəsi üzrə təlimat.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/povidon-jod/">Ətraflı</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-246x166.webp 1x, /piodermiya-lechenie-mazi-kremy-sredstva-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/piodermiya-lechenie-mazi-kremy-sredstva-prevyu-491x332.webp"
                        alt="Piodermiya: müalicə, məlhəmlər - prevyu"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Piodermiya: müalicə, məlhəmlər, vasitələr</strong>
                    </p>
                    <p>
                      Piodermiyanın yaranma səbəbləri, simptomları, növləri və müalicə üsulları. Puslu xəstəliklərin
                      profilaktikası.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/piodermiya/">Ətraflı</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/impetigo-prevyu-246x166.webp 1x, /impetigo-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/impetigo-prevyu-491x332.webp"
                        alt="İmpetigo - prevyu"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>İmpetigo</strong>
                    </p>
                    <p>İmpetigo — geniş yayılmış dəri infeksiyası. Niyə yaranır və necə düzgün müalicə olunur?</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/impetigo/">Ətraflı</Link>
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
                Malik AM, Tupchong S, Huang S, Are A, Hsu S, Motaparthi K. An Updated Review of Pemphigus Diseases.
                Medicina (Kaunas). 2021;57(10):1080. Published 2021 Oct 9. doi:10.3390/medicina57101080.
              </li>
              <li id="literatura-1">
                Langan SM, Smeeth L, Hubbard R, Fleming KM, Smith CJ, West J. Bullous pemphigus and pemphigus vulgaris—incidence
                and mortality in the UK: population based cohort study. BMJ. 2008;337(7662):a180. Published 2008 Jul 9.
                doi:10.1136/bmj.a180.
              </li>
              <li id="literatura-2">
                Simon DG, Krutchkoff D, Kaslow RA, Zarbo R. Pemphigus in Hartford County, Connecticut, from 1972 to 1977.
                Arch Dermatol. 1980;116(9):1035-1037.
              </li>
              <li id="literatura-3">
                Olisova O. Yu. Dəri və venereal xəstəliklər: dərslik/ Praktik medicine, 2017, Moskva.
              </li>
              <li id="literatura-4">
                Groves RW. Pemphigus: a brief review. Clin Med (Lond). 2009;9(4):371-375. doi:10.7861/clinmedicine.9-4-371.
              </li>
              <li id="literatura-5">
                Pile H.D., Yarrarapu S.N.S., Crane J.S. StatPearls. StatPearls Publishing; Treasure Island, FL, USA: 2021.
                Drug Induced Pemphigus.
              </li>
              <li id="literatura-6">
                Groves RW. Pemphigus: a brief review. Clin Med (Lond). 2009;9(4):371-375. doi:10.7861/clinmedicine.9-4-371.
              </li>
              <li id="literatura-7">
                Craske MG, Stein MB, Eley TC, et al. Anxiety disorders [published correction appears in Nat Rev Dis Primers.
                2017 Dec 14;3:17100]. Nat Rev Dis Primers. 2017;3:17024. Published 2017 May 4. doi:10.1038/nrdp.2017.24.
              </li>
              <li id="literatura-8">
                Di Lernia V, Casanova DM, Goldust M, Ricci C. Pemphigus Vulgaris and Bullous Pemphigoid: Update on Diagnosis
                and Treatment. Dermatol Pract Concept. 2020;10(3):e2020050. Published 2020 Jun 29.
                doi:10.5826/dpc.1003a50.
              </li>
              <li id="literatura-9">
                Volkova M. A., Kichigina M. Yu., Potekaev N. S., Tepliuk N. P., Kupriyanova A. G. Paraneoplastic pemphigus — rare
                autoimmune complication in chronic lympholeukemia // Onkogematologiya № 1 2007.
              </li>
              <li id="literatura-10">
                Pemfiqus üzrə klinik tövsiyələr // Rusiya Dermatovenereologiya və Kosmetologiya Cəmiyyəti, 2020.
              </li>
              <li id="literatura-11">
                Karamova A.E., Znamenskaya L.F., Chikin V.V., Mikhina V.A., Nefedova M.A. IgG/IgA-pemphigus — nadir
                autoimmune bulloz dermatoz //Vestnik dermatologii venereologii Tom 96, № 1 2020.
              </li>
              <li id="literatura-12">
                Davidenko E.B., Makhneva N.V., Beletskaya L.V. Müasir baxış: pemfiqusun patogenezi və inkişafına təsir edən
                amillər // Klinicheskaya dermatologiya i venerologiya. 2013;11(3):4-13.
              </li>
              <li id="literatura-13">
                Drug Induced Pemphigus Hannah D. Pile, Siva Naga S. Yarrarapu, Jonathan S. Crane. In: StatPearls [Internet].
                Treasure Island (FL): StatPearls Publishing; 2022 Jan. 2022 May 8. PMID: 29763039 Bookshelf ID: NBK499864.
              </li>
              <li id="literatura-14">
                Int J Mol Sci. 2017 Dec; 18(12): 2532. Paraneoplastic Pemphigus: Insight into the Autoimmune Pathogenesis,
                Clinical Features and Therapy. PMCID: PMC5751135 PMID: 29186863 doi:10.3390/ijms18122532.
              </li>
              <li id="literatura-15">
                Dent Clin North Am. 2013 Oct; 57(4): Pemphigus. Published online 2013 Aug 12. PMCID: PMC3883438 PMID: 24034068.
              </li>
              <li id="literatura-16">
                Int J Surg. 2017 Aug;44:260-268. Povidone iodine in wound healing: A review of current concepts and practices.
              </li>
              <li id="literatura-17">Betadin (məhlul) üçün tibbi istifadə təlimatı. RUP N015282/03.</li>
              <li id="literatura-18">Betadin (məlhəm) üçün tibbi istifadə təlimatı. RUP N015282/02.</li>
              <li id="literatura-19">
                Hoekstra MJ, Westgate SJ, Mueller S. Povidone-iodine ointment demonstrates in vitro efficacy against biofilm
                formation. Int Wound J. 2017 Feb;14(1):172-179. doi: 10.1111/iwj.12578.
              </li>
              <li id="literatura-20">
                Zamora JL. Chemical and microbiologic characteristics and toxicity of povidone-iodine solutions. Am J Surg.
                1986 Mar;151(3):400-6. doi: 10.1016/0002-9610(86)90477-0.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
