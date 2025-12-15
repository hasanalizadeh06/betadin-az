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

export default function VaginalnyeVydeleniyaAz() {
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
                  <Link property="item" typeof="WebPage" href="https://betadin.ru">
                    <span property="name">Ana səhifə</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/">
                    <span property="name">Vaginal ifrazatlar</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Vaginal ifrazatlar</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Vaginal ifrazatlar: səbəbləri və müalicəsi</h1>
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
                <h2 className="page-header-subtitle">Ağ axıntıların yaranma səbəbləri</h2>
                <div className="page-header-body">
                  <p>
                    Vaginal ifrazatlar (və ya ağ axıntılar) — bir neçə cinsiyyət vəzinin fəaliyyətinin nəticəsidir.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#priznaki-patologicheskih-vydeleniy-v-intimnoy-zone">Əlaqəli xəstəliklər</a>
                  </li>
                  <li>
                    <a href="#lechenie-patologicheskih-vydeleniy">Müalicə</a>
                  </li>
                  <li>
                    <a href="#betadin-svechi-pri-lechenii-zabolevaniy-s-patologicheskimi-vydeleniyami">
                      Şamlar
                    </a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/958/3202ae85667e000bebfd249125138becb51c9d4e418a35967dc62ea40c238113-730x615/frame-655-6-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/958/3202ae85667e000bebfd249125138becb51c9d4e418a35967dc62ea40c238113-730x615/frame-655-6-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/images/encyclopedia/vydeleniya-header.jpg"
                      alt="Vaginal ifrazatlar"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}`}>
              <ul>
                <li>
                  <a href="#kakie-byvayut-vydeleniya">Hansı ifrazatlar olur?</a>
                </li>
                <li>
                  <a href="#diagnostika">Diaqnostika</a>
                </li>
                <li>
                  <a href="#lechenie-patologicheskih-vydeleniy">Patoloji ifrazatların müalicəsi</a>
                </li>
                <li>
                  <a href="#profilaktika-patologicheskih-vydeleniy">Patoloji ifrazatların profilaktikası</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
                </li>
                <li>
                  <a href="#literatura">Ədəbiyyat siyahısı</a>
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
          className={`nav-content nav-content-fixed${navTitleHidden ? '' : ' nav-content-title-hidden'}${secondaryNavOpened ? ' nav-content__open' : ''}`}
        >
          <ul>
            <li>
              <a href="#kakie-byvayut-vydeleniya">Hansı ifrazatlar olur?</a>
            </li>
            <li>
              <a href="#diagnostika">Diaqnostika</a>
            </li>
            <li>
              <a href="#lechenie-patologicheskih-vydeleniy">Patoloji ifrazatların müalicəsi</a>
            </li>
            <li>
              <a href="#profilaktika-patologicheskih-vydeleniy">Patoloji ifrazatların profilaktikası</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
            </li>
            <li>
              <a href="#literatura">Ədəbiyyat siyahısı</a>
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
            <p>
              Vaginadan hansı miqdar ifrazatın normal olduğunu və hansının olmadığını necə başa düşmək olar? Normal ifrazatlar necə görünməlidir? Və qadının dərhal ginekoloqa qeydiyyata düşməli olduğunu dərhal başa düşə biləcəyi əlamətlər varmı?
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

            <p>
              Menarxa dövrünün (ilk menstruasiyanın gəlişi) başlanğıcından postmenopauza dövrünün sonunadək, ağ axıntılar normada bütün qadınlarda mövcuddur
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              .
            </p>

            <p>
              Vaginal ifrazatlar — nəmləndirmə yolu ilə infeksiyalardan müdafiə üsulu, həmçinin mikrob, köhnə hüceyrə və seliyin vaginadan "təmizlənməsi"dir. İfrazatların xarakteri həm daxili, həm də xarici faktorlardan asılıdır: yaş, menstrual sikl fazası və cinsi hormonların səviyyəsinin dəyişməsi, hamiləlik, menopauza, cinsi aktivlik, antibiotik və ya hormonal preparatların qəbulu, xroniki xəstəliklərin və stresslərin olması
              <sup>
                <a href="#literatura-0">1,2</a>
              </sup>
              .
            </p>

            <p>
              Məlumdur ki, vaginada xəstəliyin əsas əlamətləri patogen mikroorqanizmlər onun epitel hüceyrələrini zədələdikdə başlayır. Vagina tərəfindən müdafiə mexanizmlərindən biri epitel hüceyrələrinin səthində selik və ifrazatlardan ibarət fiziki baryer təbəqəsinin yaradılmasıdır ki, bu da immun hüceyrələrinin istehsal etdiyi qoruyucu zülallar olan immunoqlobulinlər və digər komponentlərlə zəngindir
              <sup>
                <a href="#literatura-0">1-3</a>
              </sup>
              .
            </p>

            <h2 id="kakie-byvayut-vydeleniya">Vaginal ifrazatların növləri</h2>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1138/00ee12af41e813bafbc879a4e56b79f1b9007e18157f6610c522ec1b887a8dc8-650x0/medical-kit-and-bandaid-509398-488-1-16-650x175.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1138/00ee12af41e813bafbc879a4e56b79f1b9007e18157f6610c522ec1b887a8dc8-650x0/medical-kit-and-bandaid-509398-488-1-16-1300x350.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={175}
                width={650}
                src="/images/encyclopedia/discharge-color.png"
                alt="vaginal ifrazatların rəngi"
              />
            </picture>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1139/c3c37548bbf96b17d267308a2aa76036d9645861f8a22dc02ffa79eb30c46590-650x0/medical-kit-and-bandaid-509398-488-1-17-650x175.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1139/c3c37548bbf96b17d267308a2aa76036d9645861f8a22dc02ffa79eb30c46590-650x0/medical-kit-and-bandaid-509398-488-1-17-1300x350.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={175}
                width={650}
                src="/images/encyclopedia/discharge-consistency.png"
                alt="Vaginal ifrazatların qıvamı"
              />
            </picture>

            <h3 id="normalnye-vaginalnye-vydeleniya">Normal vaginal ifrazatlar</h3>
            <p>Qadının qiymətləndirə biləcəyi bir sıra əlamətlər mövcuddur ki, bunları qiymətləndirdikdən sonra qadın öz ifrazatlarının normal olduğuna əmin ola bilər.</p>

            <div className="big">
              <div className="line">
                <p>
                  <strong>İfrazatların miqdarı:</strong> normada əhəmiyyətsizdir. Demək olar ki, bütün sikl boyunca ifrazatların həcmi təqribən 1 çay qaşığına (5 ml-ə qədər) uyğundur. Sikl ortasında ifrazatların miqdarı artırıla bilər, lakin bu qısamüddətli xarakter daşıyır.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>İfrazatların rəngi:</strong> şəffaf, sikl I fazasında yarımşəffaf və ya II fazada menstruasiyaya yaxın ağımtıl (bəzən yüngül sarımtıl çalarlı).
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Qıvam:</strong> normada ifrazatlar bircins, heç bir qarışıq və komponent olmadan (iri topaqlar, zolaqlar və ya qan izləri yoxdur). Çox vaxt selikli olur, sikl ortasında (ovulyasiya dövründə) selik dartılma xassəsi qazana bilər (xam yumurta ağına oxşayır). Ovulyasiyadan sonra sikl sonuna yaxın ifrazatlar daha qalın xarakter qazana və qıvamına görə kremə oxşaya bilər.
                </p>
              </div>
              <div className="line">
                <p>
                  <strong>Qoxu:</strong> normal ağ axıntılar zəif turş qoxuya malikdir və ya heç qoxusu olmur
                  <sup>
                    <a href="#literatura-0">1,4</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <div className="green">
              <p>
                İfrazatların xarakteri, bir qayda olaraq, menstrual sikl boyunca dəyişir, lakin xəstəlik olmadıqda onlar heç vaxt normal ifrazatlara xas olan xüsusiyyətlərini itirmirlər.
              </p>
            </div>

            <h3 id="priznaki-patologicheskih-vydeleniy-v-intimnoy-zone">
              İntim zonada patoloji ifrazatların əlamətləri
            </h3>

            <div className="list-base">
              <p>Vaginadan olan hər hansı ifrazat həmişə normal ifrazatların etalonı ilə müqayisə edilməlidir. Bu həm həkim, həm də qadın üçün əlverişlidir.</p>
              <p>
                Müxtəlif ginеkoloji xəstəliklərdə olan patoloji ifrazatlar üçün aşağıdakı əlamətlər xarakterikdir:
              </p>
              <ul>
                <li>
                  <strong>İfrazatların miqdarı</strong>: bir sıra ginеkoloji xəstəliklərdə ifrazatlar tez-tez bol olur, onların miqdarı artır və menstrual sikl boyunca dəyişmir (5 ml-dən çox). Bəzən ifrazatlar o qədər çox olur ki, gündəlik prокladkaları bir neçə dəfə dəyişməli olur. Bu zaman qadını cinsi orqanlar bölgəsində daimi nəmlik hissi təqib edir ki, bu da əhəmiyyətli narahatlıq yaradır.
                </li>
                <li>
                  <strong>
                    Xlamidioz kimi infeksiyalar mövcuddur ki, burada ifrazatların miqdarı sikl boyunca dəyişə bilər
                  </strong>
                  . Belə halda əlavə əlamətlərə diqqət yetirmək lazımdır: sidik ifrazı zamanı ağrı, cinsi əlaqə zamanı narahatlıq və ya ağrı, qarın nahiyəsində ağrılı hisslər.
                </li>
                <li>
                  <strong>İfrazatların rəngi</strong>: patoloji ağ axıntıların rəngi müxtəlif ola bilər. Tərkibində qan olan ağ axıntılar parlaq al, tünd və ya qəhvəyi rəngə malikdir. Əgər belə ifrazatlar planlaşdırılmış menstruasiya günlərindən kənarda görünürsə, bu ginеkoloji xəstəliklə əlaqəli ola bilər (endometrioz, uşaqlıqda və ya uşaqlıq boynunda polip, yumurtalıqlarda kistoz törəmələr). Digər səbəblər hormonal həblərin (o cümlədən kontraseptivlərin) qəbulu və ya daxilmatrəki spiralın qoyulması ola bilər ki, bu da bir qayda olaraq müvəqqəti xarakter daşıyır.
                </li>
                <li>
                  Vaginal ifrazatların sarı və ya yaşıl rəngi cinsi infeksiyalarla (CYİ) əlaqəli ola bilər. <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/">Bakterial vaginoz</a> — vaginanın infeksion xəstəliyi — üçün ağ axıntıların çirkli-boz rəngi xarakterikdir. Ağ iri topaqlar olan, kəsmiyə bənzəyən ifrazatlar kandidoza (molyoz) xasdır.
                </li>
              </ul>
            </div>

            <div className="green">
              <p>Menstruasiyadan kənarda qanlı ifrazatların yaranması həmişə mütəxəssis məsləhəti və əlavə müayinə tələb edir.</p>
            </div>

            <div className="list-base">
              <ul>
                <li>
                  <strong>Qıvam</strong>: patoloji ifrazatlar müxtəlif qıvam qazanır: sulu, qalın kremli, "kəsmiyəbənzər".
                </li>
                <li>
                  <strong>Qoxu</strong>: müxtəlif xəstəliklərdə ifrazatlar bir qayda olaraq xoşagəlməz, bəzən kəskin qoxuya malikdir
                  <sup>
                    <a href="#literatura-0">1,4,5</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <div className="green">
              <p>
                Patoloji ifrazatlarla yanaşı xəstəliyin əlavə əlamətləri ola bilər:{' '}
                <a href="https://betadin.ru/encyclopedia/zud-v-intimnoj-zone/">qaşınma</a>, <a href="https://betadin.ru/encyclopedia/zhzhenie-vo-vlagalishche/">yanma</a> hissi, sidik ifrazı və ya cinsi əlaqə zamanı ağrı, xarici cinsi orqanlar bölgəsində qızartı, şiş.
              </p>
            </div>

            <h2 id="diagnostika">Vaginal ifrazatların səbəbinin diaqnostikası</h2>
            <p>
              Patoloji ifrazatlar yarandıqda hər bir qadın mütləq ginekoloq həkimə yazılmalıdır. Qadının özünün qiymətləndirə biləcəyi subyektiv əlamətlərlə yanaşı, həkim müayinə prosesində aşkar edən obyektiv xəstəlik əlamətləri, həmçinin konkret diaqnozu təsdiqləyən məcburi laborator diaqnostika nəticələri də mövcuddur.
            </p>

            <div className="green">
              <p>
                Vagina xəstəliklərinin diaqnostikası həkim qəbulunda şikayətlərin qiymətləndirilməsindən başlayır. Artıq xarakterik şikayətlərə görə həkim bu və ya digər xəstəlikdən şübhələnə bilər.
              </p>
            </div>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>İkinci mərhələ diaqnostika</strong>
                </p>
                <p>
                  Ginekoloji kreслoda müayinə. Həkim iltihab dərəcəsini və ifrazatların xarakterini, əgər varsa, qiymətləndirə bilər. Həmçinin müayinə zamanı həkim sonrakı laborator diaqnostika üçün vaginadan ifrazat götürür.
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Üçüncü mərhələ diaqnostika</strong>
                </p>
                <p>
                  Vaginal ifrazatların laborator tədqiqi. Mikroskop vasitəsilə hüceyrələrin miqdarını və vaginanın mikroflorasının xarakterini müəyyən edirlər. Dəqiq diaqnozu təsdiq etmək üçün əlavə laborator tədqiqat metodları aparıla bilər.
                </p>
              </div>
            </div>

            <p>
              Patoloji ifrazatlar zamanı həkim təyin etməsi əsasında əlavə olaraq instrumental müayinə metodları tövsiyə oluna bilər – kolposkopiya (kolposkop vasitəsilə böyütmə altında uşaqlıq boynu və vaginanın müayinəsi) və USM (ultrasəs müayinəsi) kiçik çanaq orqanlarının
              <sup>
                <a href="#literatura-5">5,6</a>
              </sup>
              .
            </p>

            <h2 id="lechenie-patologicheskih-vydeleniy">Vaginadan patoloji ifrazatların müalicəsi</h2>
            <p>Vaginal ifrazatlara dair şikayətlər ginekoloq qəbulunda ən tez-tez rast gəlinənlərdir.</p>

            <div className="green">
              <p>Patoloji ifrazatların müalicəsi üçün konkret preparatlar yekun diaqnoz qoyulduqdan sonra təyin edilir.</p>
              <p>
                Tez-tez vaginadan patoloji ifrazatlara səbəb olan müxtəlif xəstəliklərin törədicilərin birləşməsi müşahidə edilir
                <sup>
                  <a href="#literatura-6">1,6,7</a>
                </sup>
                .
              </p>
            </div>

            <p>
              Patoloji ifrazatların müalicəsi üçün preparatlar müxtəlif formalarda mövcuddur: daxilə qəbul üçün (kapsul və ya həblər) və ya yerli (<a href="https://betadin.ru/encyclopedia/svechi-ot-vaginita/" title="Vaginitdən şamlar">
                vaginal şamlar
              </a>
              və ya həblər, jellər, kremlər, məhlullar).
            </p>

            <p>
              Ən çox hallarda patoloji vaginal ifrazatların müalicəsi üçün vaginaya yeridilən yerli vasitələr təyin edilir. Yerli preparatlardan istifadə zamanı dərman birbaşa iltihab ocağına daxil olur.
            </p>

            <p>
              Vaginadan ifrazatların tez-tez bir neçə xəstəliyin birləşməsinin əlaməti olmasını (məsələn, bakterial vaginoz və göbələklərin səbəb olduğu kandidozun birləşməsi) nəzərə alsaq, geniş təsir spektrli preparatlara, yəni bir neçə mikroorqanizm növünün məhvini təmin edə biləcək preparatlara üstünlük vermək daha məqsədəuyğundur.
            </p>

            <h3 id="betadin-svechi-pri-lechenii-zabolevaniy-s-patologicheskimi-vydeleniyami">
              Betadin® Şamlar patoloji ifrazatlarla gedən xəstəliklərin müalicəsində
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
                <strong>Betadin®</strong> geniş mikroorqanizm dairəsinə təsir edən vasitədir:
                göbələklər (kandidozun inkişaf səbəbi), qram-müsbət və qram-mənfi bakteriyalar (vaginada iltihab səbəbi) və bir sıra digər mikroorqanizmlər.
              </p>

              <p>
                Vaginadan patoloji ifrazatlarda Betadin<sup>®</sup> vaginal şamlar şəklində tətbiq edilir.
                Bir şam yeridilərkən əsas təsiredici maddədən (<a title="Povidon yod" href="https://betadin.ru/encyclopedia/povidon-jod/">
                  povidon-yod
                </a>
                ) 18-dən 24 mq-a qədər aktiv{' '}
                <a title="Yod" href="https://betadin.ru/encyclopedia/jod/">
                  yod
                </a>
                {' '}ayrılır ki, bu da patogen mikroblarla mübarizədə güclü təsirə malikdir və onların məhvinə kömək edir.
                Patogenlərin əksəriyyəti yodun təsirindən sonra 1 dəqiqə ərzində məhv olur
                <sup>
                  <a href="#literatura-7">8</a>
                </sup>
                .
              </p>

              <p>
                Betadin<sup>®</sup> şamlarının istifadəsi üçün göstərişlər kəskin və ya xroniki vaginit,
                kandidoz, Trichomonas vaginalis tərəfindən törədilən infeksiya (trixomoniaz)dır. Antibiotik və ya steroid preparatlarla müalicədən sonra vagina infeksiyaları. Daha bir göstəriş ginekologiyada cərrahi müdaxilələrdə müxtəlif infeksiyaların profilaktikasıdır.
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
            </div>

            <div className="green">
              <p>
                Yadda saxlamaq lazımdır ki, <strong>Betadin®-in istifadəsi üçün</strong>, yod birləşməsi tərkibində olan, bir sıra məhdudiyyətlər var: hamiləlik və süd vermə dövrü, qalxanvari vəzin funksiyasının hər hansı pozulmasının olması, həmçinin preparatın komponentlərinə qarşı həssaslığın artması.
              </p>
              <p>
                Kəskin vaginitdə, bir qayda olaraq, 7 gün ərzində gecələr vaginaya 1 Betadin<sup>®</sup> şamı təyin edilir. Daha ağır hallarda müalicə daha 7 gün davam etdirilə bilər
                <sup>
                  <a href="#literatura-7">8</a>
                </sup>
                .
              </p>
            </div>

            <h2 id="profilaktika-patologicheskih-vydeleniy">Vaginadan patoloji ifrazatların profilaktikası</h2>
            <div className="list-base">
              <p>
                Çoxsaylı infeksion-iltihabi xəstəliklər patoloji ifrazatlar və vaginanın mikroflorasının pozulması ilə müşayiət olunur. Aşağıdakı profilaktika qaydalarına əməl etmək vacibdir:
              </p>
              <ul>
                <li>Təsadüfi cinsi əlaqələrdən və tez-tez cinsi partnyorların dəyişməsindən imtina etmək</li>
                <li>Düzgün intim gigiyenaya riayət etmək</li>
                <li>
                  Göstərişlər olmadan antibiotiklərin, qlükokortikoidlərin və hormonal preparatların nəzarətsiz tətbiqini məhdudlaşdırmaq
                </li>
                <li>Dar sintetik geyim geyməmək</li>
                <li>
                  Xroniki xəstəliklərin kəskinləşmələrini vaxtında müalicə etmək (məsələn, şəkərli diabet zamanı qanda qlükoza səviyyəsinə nəzarət etmək)
                </li>
                <li>İstənilən ginеkoloji patologiyanı vaxtında müalicə etmək</li>
                <li>Mütəmadi olaraq ginekoloq həkim tərəfindən profilaktik müayinələrdə olmaq</li>
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

            <h3>Qadında patoloji ağ axıntılar yaranarsa, cinsi partnyoru müalicə etmək lazımdırmı?</h3>
            <p>
              Qadında hər hansı patoloji ifrazat yarandıqda ginekoloq həkimə müraciət etmək lazımdır.
              Qadının müayinəsi zamanı hansı konkret xəstəliyin aşkar edilməsindən asılı olaraq, onun
              partnyoru üçün androloq həkimin məsləhəti və lazımi müayinənin aparılması tövsiyə edilir.
              Hər iki cinsi partnyorun müalicəsi qadında patoloji ifrazatların yaranmasının bütün hallarda baş vermir. Bu kliniki vəziyyətdən asılı olaraq fərdi şəkildə həll edilir.
            </p>

            <h3>Qanlı ifrazatlar sikl ortasında yarana bilərmi? Və demək olar ki, hər ay təkrarlana bilərmi?</h3>
            <p>
              Sikl ortasında qanlı ifrazatların yaranması bəzən baş vermiş ovulyasiyanın (yumurta hüceyrəsinin yumurtalıqdan çıxması və onun mayalanmağa hazır olması) normal əlamətidir. Bu zaman qadın, bir qayda olaraq, ovulyasiyanın digər əlamətlərini də hiss edir – daha bol selikli ifrazatlar (xam yumurta ağına oxşar), qarın nahiyəsində əhəmiyyətsiz ağrılar (bəzən yalnız bir tərəfdən), cinsi istəyin artması. Bu zaman ifrazatların özü bol olmur, daha çox qan zolaqları və ya əhəmiyyətsiz ləkələyici ifrazatlardır ki, bunlar patoloji əlamətlərlə müşayiət olunmur, kəskin qoxusu yoxdur və qısamüddətli xarakter daşıyır (sözün əsl mənasında 1, maksimum 2 gün). Hər halda menstruasiyadan kənarda vaginadan qanlı ifrazatların yaranması həkimə şəxsən müraciət tələb edir.
            </p>

            <h3>Yalnız cinsi əlaqədən sonra qanlı ifrazatlar nə barədə şahidlik edə bilər? Bu normaldırmı?</h3>
            <p>
              Qanın yaranması qadının həyatında ilk cinsi əlaqədən sonra müşahidə edilə bilər. Əgər söhbət başqa vəziyyətdən gedirsə, belə qanlı ifrazatlar normal deyil. Tez-tez bu iltihab prosesləri ilə, xüsusən servisit (uşaqlıq boynunda iltihab) ilə əlaqəlidir. Belə simptomları olan qadın həkimə müraciət etməlidir.
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

                <div className="swiper-slide swiper-slide-next">
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
                        src="/images/encyclopedia/svechi-ot-vaginita.png"
                        alt="Vaginitdən şamlar - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Vaginitdən şamlar</strong>
                    </p>
                    <p>
                      Vaginal şamlar formasında yerli preparatlarla vaginitin müalicəsi. Vaginada iltihaba qarşı şamları necə seçmək olar?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/svechi-ot-vaginita/">Ətraflı</a>
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
                        height={166}
                        width={246}
                        src="/povidon-jod-prevyu-620x420.webp"
                        alt="Povidon-yod - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Povidon yod</strong>
                    </p>
                    <p>
                      Povidon-yodun xarakteristikaları və xassələri. Povidon-yod nə üçün istifadə edilir? Povidon-yodlu Betadin® məhlulunun, məlhəmin, şamlarının tətbiq təlimatı.
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
                Qadınların cinsiyyət yollarından patoloji ifrazatlarla müşayiət olunan xəstəliklərin diaqnostikası və müalicəsi üzrə kliniki tövsiyələr /ROAQ/ red. Prilepskaya V. N., Kira E. F. – 2019.
              </li>
              <li id="literatura-1">
                Ledina A. V. Vaginal ifrazatlar: səbəblər, xəstələrin idarə edilməsi alqoritmi və müalicə və profilaktikaya müasir yanaşmalar / MAMALIQ VƏ GİNEKOLOGİYA: xəbərlər, fikirlər, təhsil Cild 7, № 3, 2019, səh 107-111.
              </li>
              <li id="literatura-2">
                Powell AM, Nyirjesy P. New Perspectives on the Normal Vagina and Noninfectious Causes of Discharge.
                Clin Obstet Gynecol. 2015 Sep;58(3):453-63. doi: 10.1097/GRF.0000000000000124. PMID: 26125958.
              </li>
              <li id="literatura-3">
                Hillier SL, Austin M, Macio I, Meyn LA, Badway D, Beigi R. Diagnosis and Treatment of Vaginal Discharge
                Syndromes in Community Practice Settings. Clin Infect Dis. 2021 May 4;72(9):1538-1543. doi:
                10.1093/cid/ciaa260. PMID: 32350529; PMCID: PMC8248297.
              </li>
              <li id="literatura-4">
                Buchta V. Vaginal microbiome. Ceska Gynekol. 2018 Winter;83(5):371-379. English. PMID: 30848142.
              </li>
              <li id="literatura-5">
                Chee WJY, Chew SY, Than LTL. Vaginal microbiota and the potential of Lactobacillus derivatives in
                maintaining vaginal health. Microb Cell Fact. 2020 Nov 7;19(1):203. doi: 10.1186/s12934-020-01464-4.
                PMID: 33160356; PMCID: PMC7648308.
              </li>
              <li id="literatura-6">
                Reiter S, Kellogg Spadt S. Bacterial vaginosis: a primer for clinicians. Postgrad Med. 2019
                Jan;131(1):8-18. doi: 10.1080/00325481.2019.1546534. Epub 2018 Nov 30. PMID: 30424704.
              </li>
              <li id="literatura-7">
                Betadin® suppozitorilər. Tibbi istifadəsinə dair təlimat (QQ: П№015282/01).
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
