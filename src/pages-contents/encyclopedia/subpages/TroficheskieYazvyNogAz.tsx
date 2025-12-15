"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const TroficheskieYazvyNogAz: React.FC = () => {
  const triggeredRef = useRef<Record<number, boolean>>({
    25: false,
    50: false,
    75: false,
    100: false,
  });
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);
  // Scroll tracking (converted from inline script). Guarded for SSR and when ym is defined.
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      // Goals — use numeric percentages
      const scrollGoals: { [percent: number]: () => void } = {
        25: () =>
          typeof (window as any).ym === "function" &&
          (window as any).ym(37744585, "reachGoal", "Скроллинг25"),
        50: () =>
          typeof (window as any).ym === "function" &&
          (window as any).ym(37744585, "reachGoal", "Скроллинг50"),
        75: () =>
          typeof (window as any).ym === "function" &&
          (window as any).ym(37744585, "reachGoal", "Скроллинг75"),
        100: () =>
          typeof (window as any).ym === "function" &&
          (window as any).ym(37744585, "reachGoal", "Скроллинг100"),
      };

      const checkScroll = () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const docHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight
        );
        const winHeight = window.innerHeight;
        const scrollPercent = Math.floor(
          ((scrollTop + winHeight) / docHeight) * 100
        );
        for (const percent of [25, 50, 75, 100]) {
          if (
            scrollPercent >= percent &&
            !triggeredRef.current[percent as number]
          ) {
            triggeredRef.current[percent as number] = true;
            scrollGoals[percent]?.();
            // eslint-disable-next-line no-console
            console.log(percent);
          }
        }
        if (
          (Object.values(triggeredRef.current) as boolean[]).every((v) => v)
        ) {
          window.removeEventListener("scroll", checkScroll);
        }
      };

      window.addEventListener("scroll", checkScroll);
      return () => window.removeEventListener("scroll", checkScroll);
    } catch (e) {
      // ignore interruption / errors to keep component safe
      // eslint-disable-next-line no-console
      console.warn("Scroll tracking init failed", e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <article>
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
                  <a
                    property="item"
                    typeof="WebPage"
                    href="https://betadin.ru/encyclopedia/"
                  >
                    <span property="name">
                      Ayaqların və aşağı ətrafların trofik xoraları
                    </span>
                  </a>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">
                    Ayaqların və aşağı ətrafların trofik xoraları
                  </span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Ayaqların trofik xoraları: müalicə və qulluq
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      decoding="async"
                      height={112}
                      width={115}
                      src="/icon-230x224.webp"
                      alt="başlıqda şəkil"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Trofik xoranın təyini</h2>
                <div className="page-header-body">
                  <p>
                    Ayaqların trofik xoraları – yaranmış zədələnmə nahiyəsində
                    qan dövranının və toxumaların qidalanmasının pozulması
                    nəticəsində əmələ gələn, yavaş sağalan dəri defektidir.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#prichiny-vozniknoveniya-troficheskih-yazv">
                      Yaranma səbəbləri
                    </a>
                  </li>
                  <li>
                    <a href="#diagnostika-troficheskih-yazv">Diaqnostika</a>
                  </li>
                  <li>
                    <a href="#lechenie-troficheskih-yazv">
                      Müalicə, preparatlar və məlhəmlər
                    </a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <img
                      fetchPriority="high"
                      decoding="async"
                      height={615}
                      width={730}
                      src="https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-730x615.jpg"
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-730x615.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/837/8ea75ea3e371e66550a5bb82833bf2039fc26bd3e9fa9016cbae15b8b3bf4079-730x615/frame-655-8-1460x1230.jpg 2x"
                      alt="Ayaqların trofik xoraları"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
              <ul>
                <li>
                  <a href="#simptomy-troficheskoy-yazvy">
                    Trofik xoranın əlamətləri
                  </a>
                </li>
                <li>
                  <a href="#prichiny-vozniknoveniya-troficheskih-yazv">
                    Trofik xoraların yaranma səbəbləri
                  </a>
                </li>
                <li>
                  <a href="#diagnostika-troficheskih-yazv">
                    Trofik xoraların diaqnostikası
                  </a>
                </li>
                <li>
                  <a href="#lechenie-troficheskih-yazv">
                    Trofik xoraların müalicəsi
                  </a>
                </li>
                <li>
                  <a href="#profilaktika-troficheskih-yazv">
                    Trofik xoraların profilaktikası
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">
                    Tez-tez verilən suallar
                  </a>
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
          className={`nav-content nav-content-fixed${navTitleHidden ? "" : " nav-content-title-hidden"}${secondaryNavOpened ? " nav-content__open" : ""}`}
        >
          <ul>
            <li>
              <a href="#simptomy-troficheskoy-yazvy">
                Trofik xoranın əlamətləri
              </a>
            </li>
            <li>
              <a href="#prichiny-vozniknoveniya-troficheskih-yazv">
                Trofik xoraların yaranma səbəbləri
              </a>
            </li>
            <li>
              <a href="#diagnostika-troficheskih-yazv">
                Trofik xoraların diaqnostikası
              </a>
            </li>
            <li>
              <a href="#lechenie-troficheskih-yazv">
                Trofik xoraların müalicəsi
              </a>
            </li>
            <li>
              <a href="#profilaktika-troficheskih-yazv">
                Trofik xoraların profilaktikası
              </a>
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
          <div className="new-disclaimer">
            Məqalədəki məlumat həkim məsləhətini əvəz etmir
          </div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              "Trofik" termini yunan dilindən tərcümədə qidalanma deməkdir.
              Deməli, bu xəstəlik toxumaların qidalanmasının pozulması ilə
              əlaqədardır.
            </p>
            <p>
              Trofik xoralar tez-tez digər xroniki xəstəliyin fonunda inkişaf
              edir, məsələn, bu şəkərli diabet, variköz xəstəlik və digərləri
              ola bilər.
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
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg"
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.jpg 2x"
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <p>
              Belə defektlər tez-tez patogen mikroorqanizmlərlə infeksiya olunur
              ki, bu da sağalma prosesini daha da ağırlaşdırır. Daha çox trofik
              xoralar aşağı ətrafda yerləşir, lakin digər yerlərdə də rast
              gəlinə bilər.
            </p>
            <p>
              Dərinin bütövlüyünün pozulmasının daha bir növü var —{" "}
              <a href="/encyclopedia/prolezhni/" title="11. Yataq yaraları">
                yataq yarası xorası
              </a>{" "}
              ki, bu, uzun müddətli mexaniki təzyiq nəticəsində yaranan dəri və
              altında yerləşən toxumanın zədələnməsidir
              <sup>
                <a
                  data-type="internal"
                  data-id="#spisok-literatury"
                  href="#spisok-literatury"
                >
                  1
                </a>
              </sup>
              .
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-650x325.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-1300x650.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-650x325.png"
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-650x325.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/1012/254dc11d71b715c46f0ead3a92c04610d60dcb266f55a62367a546e42c1f73f8-650x0/rectangle-212-3-1300x650.png 2x"
                alt="ayaqlarda xoralar"
              />
            </picture>

            <div className="list-base">
              <p>
                Beynəlxalq xəstəliklər təsnifatına <strong>BXT-10</strong> görə
                həkim belə diaqnoz qoyarken koddan istifadə edə bilər:
              </p>
              <ul>
                <li>
                  <strong>L98.4.2</strong> – dərinin trofik xorası
                </li>
                <li>
                  <strong>I83.2</strong> – aşağı ətrafların venalarının variköz
                  genişlənməsi xora və iltihab ilə
                </li>
              </ul>
              <p>
                Epidemioloji tədqiqat məlumatlarına görə – yetkin əhalinin
                təxminən 1-2%-i trofik xoralardan əziyyət çəkir
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                .
              </p>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Yataq yaraları</strong>
                </p>
                <p>
                  Yataq yaraları toxuma sahəsinə uzun müddətli təzyiq
                  nəticəsində əmələ gəlir. Belə zədələnmələri necə müalicə
                  edirlər?
                </p>
                <a
                  href="/encyclopedia/prolezhni/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  height={210}
                  width={310}
                  src="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-310x210.png"
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-310x210.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-310x235/prolezhni-prevyu-620x420.png 2x"
                  alt="yataq yaraları-anons"
                />
              </picture>
            </div>

            <h3 className="h3" id="klassifikaciya-troficheskih-yazv">
              Trofik xoraların təsnifatı
            </h3>
            <div className="list-base">
              <p>
                Trofik xoralar ola bilər
                <sup>
                  <a href="#spisok-literatury">1,2,3</a>
                </sup>
                :
              </p>
              <ul>
                <li>səthi (toxuma zədələnməsi dərinə yayılmadıqda)</li>
                <li>dərin (güclü yayılması olan zədələnmə)</li>
                <li>lokal (bir qayda olaraq, ayrıca kiçik zədələnmə sahəsi)</li>
                <li>sirkulyar (çoxsaylı, ətrafın böyük sahəsini əhatə edən)</li>
              </ul>
            </div>

            <p>
              <strong>
                Trofik xoraların əmələ gəlməsinə səbəb olan xroniki xəstəlikdən
                asılı olaraq onları bölmək olar:
              </strong>
            </p>
            <p>
              <strong>1. Venoz xoralar (venaların damar zədələnməsi):</strong>{" "}
              variköz, posttromboflebit xəstəliyi, Klippel-Trenone sindromu
              (dərin venaların anadangəlmə displaziyaları)
            </p>

            <div className="list-base">
              <p>
                <strong>
                  2. Arterial xoralar (arteriyaların damar zədələnməsi):
                </strong>
              </p>
              <ul>
                <li>
                  arterial qan təchizatının pis olması (periferik damarlar
                  xəstəliyi, ateroskleroz)
                </li>
                <li>diabetik mikroangiopatiyalar</li>
                <li>
                  Parks-Veber-Rubaşov sindromu (anadangəlmə arteriovenoz
                  fistullar və anevrizmalar), həmçinin posttravmatik
                  arteriovenoz fistullar və anevrizmalar
                </li>
              </ul>
            </div>

            <p>
              <strong>
                3. Ətrafda xroniki qan dövranı çatışmazlığı səbəbindən yaranan
                xoralar (damar işemiyası):
              </strong>{" "}
              ateroskleroz, diabetik angiopatiyalar, Martorel sindromu
              (hipertenziv-işemik xoralar)
            </p>
            <p>
              <strong>4. Diabetik xoralar</strong> şəkərli diabetli xəstələrdə
              (qanda yüksək şəkər səviyyəsi xırda damarların və sinirlərin
              zədələnməsinə səbəb olur)
            </p>

            <div className="list-base">
              <p>
                <strong>5. Nevroloji xəstəliklərlə əlaqəli xoralar:</strong>
              </p>
              <ul>
                <li>Gilyen-Barre sindromu</li>
                <li>sirinqomiyeliya (onurğa beynində boşluqlar)</li>
                <li>aşağı ətrafların iflici</li>
                <li>diabetik neyropatiya</li>
                <li>alkoqol polineyrоpatiyası</li>
                <li>
                  baş beyni və periferik sinirlərin travmaları, xəstəlikləri
                </li>
              </ul>
            </div>

            <p>
              <strong>6. Posttravmatik xoralar</strong>, dərinin və yaxın
              toxumaların dərin yaralarının yaranmasına səbəb olan travmalardan
              yaranır
            </p>
            <p>
              <strong>
                7. Orqanizmin immunitətinin ümumi zəifləməsi nəticəsində yaranan
                xoralar:
              </strong>{" "}
              qan pozğunluqları və xəstəlikləri, infeksion xəstəliklər
              (flegmona, dəmir iltihabı), qidalanma rasionunun pozulmasında
            </p>

            <h2 className="h2" id="simptomy-troficheskoy-yazvy">
              Trofik xoranın əlamətləri
            </h2>
            <p>
              Yadda saxlamaq vacibdir ki, xora yaranma əlamətləri onların
              yaranma səbəbindən asılı olaraq fərqlənə bilər. Bir qayda olaraq,
              onların belə ümumi qanunauyğunluqları var:
            </p>

            <div className="big">
              <div className="line">
                <p>
                  Dəri örtüyünün qalınlaşması fonunda mavimtıl ləkənin
                  yaranması.
                </p>
              </div>
              <div className="line">
                <p>
                  Zədələnmə sahəsinin "böyüməsi", zərər görmüş sahənin artması.
                </p>
              </div>
              <div className="line">
                <p>Zədələnmiş sahəyə toxunma və basmada ağrı.</p>
              </div>
              <div className="line">
                <p>
                  Zərər görmüş dəri sahəsi müəyyən müddət xarici görünüşünü
                  dəyişməyə bilər ki, bu da yaranın yavaş sağalmasından xəbər
                  verir.
                </p>
              </div>
              <div className="line">
                <p>
                  Zərər görmüş sahədən narahatlıq əlamətlərinin olması: sancma,
                  ağrı, yandırma, şişkinlik, pulsasiya hissi və ya ağrıyan ağrı,
                  dəri qaşınması, "ağır" ayaqlar hissi
                  <sup>
                    <a href="#spisok-literatury">10</a>
                  </sup>
                  .
                </p>
              </div>
            </div>

            <h2 className="h2" id="prichiny-vozniknoveniya-troficheskih-yazv">
              Ayaqlarda, topuqlarda, ayaq və barmaq xoralarının yaranma
              səbəbləri
            </h2>
            <p>
              Xoraların yaranma səbəbləri çox müxtəlif ola biləcəyindən, ən
              geniş yayılmış olanları nəzərdən keçirmək lazımdır.
            </p>
            <h3 className="h3" id="diabeticheskie-yazvy">
              Diabetik xoralar
            </h3>
            <p>
              <strong>Şəkərli diabet</strong> – orqanizmdə şəkər mübadiləsinin
              pozulması ilə əlaqəli xroniki endokrin xəstəlikdir. Belə uzun
              müddətli pozğunluqlar orqanizmimizin müxtəlif toxumalarında
              dəyişikliklərə səbəb olur. Şəkərli diabetdə xoralar tez-tez aşağı
              ətrafda yaranır.
            </p>
            <div className="green">
              <p>
                Şəkərli diabetli insanlarda xırda damarlar və sinirlər
                zədələnir, yerişin pozulması yaranır, bunun nəticəsində ayağa
                artıq təzyiq düşür. Bu, yumşaq toxumaların travmatizasiyasını
                artırır və xoralanma yaranır.
              </p>
            </div>
            <p>
              Sonra zədələnmiş sahədə uzun müddətli iltihab həssaslığın
              dəyişməsinə səbəb olur. Şəkərli diabetdə insanda toxumaların
              qidalanması pozulur ki, bu da dərinin bərpa prosesinin
              yavaşlamasına səbəb olur, infeksiyanın qoşulması isə yaranın
              gedişini ağırlaşdırır. Bu halda qonşu dəri və toxuma sahələrinin
              cəlb edilməsi ilə zədələnmə sahəsinin genişlənməsi baş verir.
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-1300x650.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-650x325.png"
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-650x325.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/1013/465cd5a4726bf12df3f17fc70bce403a03a31ac6121dec70d9d43b237a578d78-650x0/rectangle-212-4-1300x650.png 2x"
                alt="Diabetik xoralar"
              />
            </picture>
            <p>
              Həmçinin <strong>işemik zədələnmə</strong> (yerli qan dövranı
              pozğunluğu) mümkündür ki, bu da oksigen və sağalma üçün lazım olan
              bütün komponentlərin daxil olmasını azaldaraq yaraların
              sağalmasını pisləşdirir.
            </p>

            <h3 className="h3" id="venoznye-yazvy">
              Venoz xoralar
            </h3>
            <p>
              Xroniki <strong>venoz xoralar</strong> dəri mikrosirkulyasiyasına
              davamlı yüksək venoz təzyiqin nəticələri səbəbindən yaranır.
            </p>
            <p>
              Yaşlı yaş, piylənmə, xoranın böyük sahəsi və xəstə tərəfindən
              kompression terapiyaya əməl edilməməsi xoranın sağalmasına mənfi
              təsir göstərir.
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-1300x650.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-650x325.png"
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-650x325.png 1x, https://betadin.ru/wp-content/uploads/imagesv3/1014/684f46925145c0849e3ae17ac9f0be2ec7db24d5ebdb3bc60f69957bf63c40e6-650x0/rectangle-213-1300x650.png 2x"
                alt="Venoz xoralar"
              />
            </picture>

            <h3 className="h3" id="neyrogennye-yazvy">
              Neyrogen xoralar
            </h3>
            <p>
              Aşağı ətrafların <strong>neyrogen xoralarına</strong> səbəbləri
              sinirin işinin pozulması (neyropatiya) ilə əlaqəli olan bütün
              xoralar aiddir.
            </p>
            <p>
              Ayaq altlıqlarında və ya barmaqların uclarında neyropatik xoralar
              adətən gündəlik fəaliyyət zamanı təkrarlanan yüksək yüklərə məruz
              qalan yerlərdə inkişaf edir. Anormal yük və sürtünmə nöqtələrində
              nasırların əmələ gəlməsi baş verə bilər. Sonradan nasır çatlayır
              və qırılır ki, bu da xoralanmaya səbəb olur. Beləliklə, ətrafda
              nasırlar olduqda xora yaranma riski artır.
            </p>

            <div className="iframe">
              <div className="bg_default bg_green" />
              <div className="h3 h3_green iframe-title">
                Trofik xoraların müalicəsi haqqında qısa videoda izləyin:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/7de01729aaf5056b179900bface5b278/?p=Lc09mJZvNvKBsatikqztqQ"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video: trofik xoraların müalicəsi"
                />
              </div>
              <div className="iframe_desc">
                Siz trofik xoraların yaranmasının mümkün səbəbləri, əlamətləri
                və belə sağalmayan yaraların işlənməsi üsulları haqqında məlumat
                əldə edəcəksiniz.
              </div>
            </div>

            <h2 className="h2" id="diagnostika-troficheskih-yazv">
              Trofik xoraların diaqnostikası
            </h2>
            <div className="list-base">
              <p>
                Xora yarandıqda flebolоq həkimə müraciət etmək lazımdır, o,
                adətən aşağıdakı tədqiqatları əhatə edən kompleks müayinə
                keçirəcək:
              </p>
              <ul>
                <li>ümumi qan analizi</li>
                <li>qanda şəkər səviyyəsi</li>
                <li>protrombin vaxtı (qan laxtasının əmələ gəlmə vaxtı)</li>
                <li>
                  qismən tromboplastin vaxtı – qanın laxtalanma prosesində
                  pozğunluqları aşkar etməyə imkan verən test
                </li>
                <li>böyrək və qaraciyər analizləri</li>
                <li>
                  lipid profili (damar xəstəlikləri riskinin qiymətləndirilməsi
                  üçün)
                </li>
                <li>
                  qlikasiləşmiş hemoqlobin səviyyəsi (müəyyən müddət ərzində
                  qanda şəkər səviyyəsini təhlil etməyə imkan verir)
                </li>
                <li>
                  prealbumin səviyyəsi (xəstənin qidalanma vəziyyətinin
                  qiymətləndirilməsi üçün)
                  <sup>
                    <a href="#spisok-literatury">5</a>
                  </sup>
                </li>
              </ul>
            </div>
            <p>
              Hər il diabetik ayağın həssaslıq səviyyəsinin qiymətləndirilməsini
              aparmaq lazımdır
              <sup>
                <a
                  data-type="internal"
                  data-id="#spisok-literatury"
                  href="#spisok-literatury"
                >
                  5
                </a>
              </sup>
              .
            </p>
            <p>
              Bundan əlavə, arterial qan təchizatının qiymətləndirilməsi
              vacibdir.
            </p>

            <h2 className="h2" id="lechenie-troficheskih-yazv">
              Trofik xoraların müalicəsi
            </h2>
            <div className="green">
              <p>
                Trofik xoraların müalicəsinin uğuru xəstəliyin yaranma səbəbinin
                düzgün müəyyən edilməsindən, həmçinin sağalma prosesinə mane ola
                biləcək yerli və sistemli amillərdən asılıdır.
              </p>
            </div>
            <p>
              Yaranın müalicəsi onun irindən və ölü toxumalardan təmizlənməsi
              ilə başlanır
              <sup>
                <a href="#spisok-literatury">7</a>
              </sup>
              . Yaranın təmizlənməsi başa çatdıqdan sonra trofik xoradakı
              bakteriyaları aradan qaldırmaq üçün{" "}
              <strong>yerli antimikrob terapiyanın</strong> aparılması zəruridir
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              . Bu məqsədlər üçün birbaşa zərər görmüş dəri sahəsinə vurulmuş
              antiseptik məhlullar, məlhəmlər, kremlər və jellər istifadə
              olunur. Müxtəlif yara sarğılarının, məsələn gümüş ionları ilə
              hidroqel sarğılarının istifadəsi mümkündür.
            </p>
            <p>
              Sistemli antibiotiklərin istifadəsi yalnız kəskin infeksion
              fazada, selülit olduqda və ya düzgün işlənmiş yaranın
              sağalmamasında tələb olunur. Onların təyini müalicə edən həkim
              tərəfindən müəyyən edilir
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
            </p>
            <p>
              Ayağın ağır diabetik xoralarının müalicəsində{" "}
              <strong>hiperbarik oksigenləşdirmə</strong> effektivdir – xəstənin
              orqanizminin yüksək təzyiq altında oksigenlə doyması
              <sup>
                <a href="#spisok-literatury">9</a>
              </sup>
              .
            </p>
            <p>
              Yerli tətbiq olunan <strong>böyümə amilləri</strong> sağalmanı
              sürətləndirməyə kömək edir, yeni birləşdirici toxumanın əmələ
              gəlməsini stimullaşdırır və dərinin üst təbəqəsinin bərpasını
              gücləndirir
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
            </p>
            <p>
              Həmçinin zədələnmiş sahənin bərpası üçün{" "}
              <strong>xoradan yükün götürülməsini</strong> təmin etmək lazımdır
              – yataq rejimi, qoltuq dəyənəkləri, gips sarğı, xüsusi ayaqqabı
              <sup>
                <a href="#spisok-literatury">10</a>
              </sup>
              .
            </p>
            <p>
              Çoxlu ölü toxumalarla dərin və geniş zədələnmələrdə{" "}
              <strong>cərrahi müalicə variantları</strong> göstərilir – xoranın
              kənarlarının, nekrotik (ölmüş) toxumaların silinməsi.
            </p>

            <h3
              className="h3"
              id="mestnye-preparaty-dlya-lecheniya-troficheskih-yazv"
            >
              Trofik xoraların müalicəsi üçün yerli preparatlar
            </h3>
            <p>
              Trofik xoraların müalicəsi üçün antiseptik məhlullar, məlhəmlər və
              yerli istifadə üçün digər vasitələr istifadə oluna bilər, yəni:
            </p>
            <div className="big">
              <div className="line">
                <p>
                  Povidon-yod məhlulu ki, qram-müsbət və qram-mənfi
                  bakteriyalara bakterisid təsir göstərir, göbələklərə,
                  viruslara, sadə orqanizmlərə qarşı təsirlidir
                </p>
              </div>
              <div className="line">
                <div>
                  <p>Məlhəmlər:</p>
                  <ul>
                    <li>
                      geniş spektrli antiseptik, antifunqal, antimikrob təsirə
                      malik —{" "}
                      <a href="/encyclopedia/povidon-jod/">povidon-yod</a>
                      məlhəm formasında
                    </li>
                    <li>
                      geniş spektrli antibakterial və bakterisid təsirə malik
                    </li>
                    <li>
                      bakteriostatik (mikroorqanizmlərin çoxalma qabiliyyətinin
                      yatırılması)
                    </li>
                    <li>iltihab əleyhinə, antimikrob təsirə malik</li>
                    <li>
                      yara sağaldıcı, yara təmizləyici, antibakterial təsirə
                      malik proteolitik fermentlər
                    </li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <p>İltihab əleyhinə təsirə malik kremlər</p>
              </div>
              <div className="line">
                <p>Antimikrob təsirə malik aerozollar</p>
              </div>
            </div>

            <p>
              Dəri yaralarının yerli müalicəsi infeksiyanın yatırılmasına və
              sağalmanın sürətləndirilməsinə yönəldilib. Lokal (yerli) vasitələr
              antimikrob xüsusiyyətlərə malikdir, yara sağalma proseslərini
              dəstəkləyir, həmçinin istifadədə rahatdır.
            </p>

            <h4
              className="h4"
              id="primenenie-povidona-yoda-betadin-dlya-lecheniya-troficheskih-yazv"
            >
              Trofik xoraların müalicəsi üçün povidon-yodun (Betadine®) tətbiqi
            </h4>
            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-315x252.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-630x503.webp 2x"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-1853x1832.jpg 2x"
                    width={927}
                    height={916}
                    src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg"
                    alt="Betadine"
                  />
                </picture>
              </div>
              <p>
                Antiseptik vasitə povidon-yod (Betadine<sup>®</sup>) tez-tez
                <a href="/encyclopedia/obrabotka-ran/">
                  yara səthinin işlənməsi
                </a>{" "}
                üçün istifadə olunur. Yod dəri ilə təmasda kompleksdən povidonla
                (dərmanda yodun daşıyıcısı) tədricən azad edilir ki, bu da
                mikroorqanizmlərin ölümünə kömək edir. Yod tərkibli vasitələr öz
                antimikrob təsiri və yeni birləşdirici toxumanın əmələ
                gəlməsinin sürətləndirilməsi hesabına dəri yaralarının
                sağalmasına təsir göstərir
                <sup>
                  <a href="#spisok-literatury">12,13</a>
                </sup>
                .
              </p>
              <p>
                Betadine<sup>®</sup> müxtəlif dərman formaları var. Trofik
                xoraların müalicəsində istifadə olunur:
              </p>
              <ul>
                <li>
                  Su 10% Betadine<sup>®</sup> məhlulu ki, 1:10 nisbətində su ilə
                  həll edilir və ya seyreltilməmiş məhlul tətbiq olunur.
                  Preparat birbaşa trofik xoranın səthinə vurulur. Preparat
                  yandırma və digər xoşagəlməz hisslər yaratmır.
                </li>
                <li>
                  Betadine<sup>®</sup> məlhəmi gündə 1 dəfə xoranın səthinə
                  nazik təbəqə ilə vurulur.
                </li>
              </ul>
              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noreferrer"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  İstifadə təlimatı
                </a>
              </p>
            </div>

            <div className="list-base">
              <p>
                <strong>
                  Betadine<sup>®</sup> preparatının aşağıdakı əks göstərişləri
                  var:
                </strong>
              </p>
              <ul>
                <li>
                  yoda və preparatın digər tərkib hissələrinə yüksək həssaslıq
                </li>
                <li>radioaktiv yodun eyni vaxtda istifadəsi</li>
                <li>qalxanvari vəzin funksiyasının pozulması</li>
                <li>qalxanvari vəzin adenoması</li>
                <li>Dürinq herpetiform dermatiti</li>
                <li>yenidoğulmuş uşaqlarda istifadə</li>
              </ul>
            </div>

            <div className="green">
              <p>
                Bundan əlavə, preparat böyrək xəstəliklərində, hamiləlik və
                laktasiya dövrlərində ehtiyatla istifadə olunur
                <sup>
                  <a href="#spisok-literatury">12,13</a>
                </sup>
                .
              </p>
              <p>
                Geniş antimikrob fəallığı və əlverişli fayda/risk profili
                səbəbindən, povidon-yod kəskin və xroniki yaraların müalicəsində
                təsirli vasitədir
                <sup>
                  <a href="#spisok-literatury">12,13</a>
                </sup>
                .
              </p>
            </div>

            <h2 className="h2" id="profilaktika-troficheskih-yazv">
              Ayaqlarda, ayaqda və ayaq barmaqlarında trofik xoraların əmələ
              gəlməsinin profilaktikası
            </h2>
            <div className="list-base">
              <p>
                Trofik xoraların inkişafının qarşısını almaq üçün aşağıdakı
                profilaktik tədbirlərin yerinə yetirilməsi tövsiyə olunur:
              </p>
              <ul>
                <li>
                  Şəkərli diabetli xəstələr qlikemik nəzarət (qanlarında şəkər
                  səviyyəsinə nəzarət) həyata keçirməli, arterial təzyiqə
                  nəzarət etməlidirlər
                </li>
                <li>
                  Siqaret çəkməkdən və spirt qəbulundan imtina etmək tövsiyə
                  olunur
                </li>
                <li>Ayaqlara diqqətlə qulluq etmək</li>
                <li>
                  Müntəzəm tibbi müayinələrdən keçmək
                  <sup>
                    <a href="#spisok-literatury">9</a>
                  </sup>
                </li>
                <li>
                  Vena xəstəlikləri olan bütün xəstələrə kompression corablardan
                  istifadə etmək lazımdır. Müşayiət edən&nbsp;
                  <strong>
                    işemik xəstəlik olduqda corablardan istifadə etmək olmaz
                    <sup>
                      <a href="#spisok-literatury">1</a>
                    </sup>
                  </strong>
                </li>
              </ul>
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
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg"
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.jpg 2x"
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              Tez-tez verilən suallar
            </h2>
            <h3 className="h3" id="kak-vyglyadit-troficheskaya-yazva-na-noge">
              Ayaqda trofik xora necə görünür?
            </h3>
            <p>
              Trofik xora yavaş sağalan aşağı ətrafın (baldırın, dabanın və ya
              ayağın) nahiyəsində dərin yaradır.
            </p>
            <h3 className="h3" id="kakoy-vrach-lechit-troficheskie-yazvy">
              Hansı həkim trofik xoraları müalicə edir?
            </h3>
            <p>
              Xəstəliyin yaranma səbəbini axtararkən terapevt, endokrinoloq,
              kardioloq məsləhəti lazımdır. Trofik xora – dərinin dərin
              yarasıdır, buna görə dermatoloqla məsləhətləşmək vacibdir. Dəqiq
              diaqnozu cərrah qoya bilər, çünki trofik xoraların əksəriyyəti
              ayaqların qan dövranının pozulması ilə əlaqədardır.
            </p>
            <h3 className="h3" id="chem-mazat-troficheskuyu-yazvu">
              Trofik xoraya nə sürtmək lazımdır?
            </h3>
            <p>
              Trofik xoraların müalicəsi üçün povidon-yod əsaslı məlhəm
              (Betadine<sup>®</sup>) yaxşı nəticə verib. Preparat antibakterial,
              antifunqal, antiviral təsirə malikdir
              <sup>
                <a href="#spisok-literatury">14</a>
              </sup>
              .
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Kraskovskiy Fyodor Yanoviç</p>
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
                  src="https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.png"
                  alt=""
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              Mövzu üzrə oxu
            </div>
            <div className="slider-normal">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
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
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1915/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/prolezhni-prevyu-246x166.png"
                        alt="yataq yaraları-anons"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yataq yaraları</strong>
                    </p>
                    <p>
                      Yataq yaraları toxuma sahəsinə uzun müddətli təzyiq
                      nəticəsində əmələ gəlir. Belə zədələnmələri necə müalicə
                      edirlər?
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/prolezhni/">Ətraflı</a>
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
                      <img
                        loading="lazy"
                        decoding="async"
                        height={210}
                        width={310}
                        src="/povidon-jod-prevyu-620x420.webp"
                        alt="Povidon-yod - anons"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Povidon yod</strong>
                    </p>
                    <p>
                      Povidon-yodun xarakteristikaları və xüsusiyyətləri.
                      Povidon-yod nə üçün istifadə olunur? Povidon-yod tərkibli
                      Betadine<sup>®</sup> məhlulunun, məlhəmin, şamların
                      istifadə təlimatı.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/povidon-jod/">Ətraflı</a>
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <img
                        loading="lazy"
                        decoding="async"
                        height={166}
                        width={246}
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-246x166.png"
                        alt="Йод-превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yod</strong>
                    </p>
                    <p>
                      Yodun istifadə sahələri. Povidon-yodun spirtli yod 
                      məhlulundan fərqləri.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/jod/"> Ətraflı </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="h2" id="spisok-literatury">
              Ədəbiyyat siyahısı
            </h2>
            <ol className="literature">
              <li>
                Puri V, Venkateshwaran N, Khare N. Trophic ulcers-Practical
                management guidelines. Indian J Plast Surg. 2012;45(2):340-351.
                doi:10.4103/0970-0358.101317.
              </li>
              <li>
                Кияшко В.А. Alt ətrafların trofik xoraları.// РМЖ. №4 
                26.02.2003 səh. 221.
              </li>
              <li>
                Гриценко В.В., Орловский П.И., Гавриленков В.И. Venoz 
                etiologiyalı trofik xoraların diaqnostikası və müalicəsinin 
                müasir aspektləri// СПбГМУ nəşriyyatı, 2007.
              </li>
              <li>
                Gloviczki P, Comerota AJ, Dalsing MC, et al. The care of
                patients with varicose veins and associated chronic venous
                diseases: clinical practice guidelines of the Society for
                Vascular Surgery and the American Venous Forum. J Vasc Surg.
                2011;53(5 Suppl):2S-48S. doi:10.1016/j.jvs.2011.01.079.
              </li>
              <li>
                Brem H, Sheehan P, Rosenberg HJ, Schneider JS, Boulton AJ.
                Evidence-based protocol for diabetic foot ulcers. Plast Reconstr
                Surg. 2006;117(7 Suppl):193S-211S.
                doi:10.1097/01.prs.0000225459.93750.29.
              </li>
              <li>
                Dorweiler B, Neufang A, Kreitner KF, Schmiedt W, Oelert H.
                Magnetic resonance angiography unmasks reliable target vessels
                for pedal bypass grafting in patients with diabetes mellitus. J
                Vasc Surg. 2002;35(4):766-772. doi:10.1067/mva.2002.119505.
              </li>
              <li>
                Steed DL, Donohoe D, Webster MW, Lindsley L. Effect of extensive
                debridement and treatment on the healing of diabetic foot
                ulcers. Diabetic Ulcer Study Group. J Am Coll Surg.
                1996;183(1):61-64.
              </li>
              <li>
                White RJ, Cooper R, Kingsley A. Wound colonization and
                infection: the role of topical antimicrobials. Br J Nurs.
                2001;10(9):563-578. doi:10.12968/bjon.2001.10.9.9387.
              </li>
              <li>
                Jeffcoate WJ, Harding KG. Diabetic foot ulcers. Lancet.
                2003;361(9368):1545-1551. doi:10.1016/S0140-6736(03)13169-8.
              </li>
              <li>
                Boulton AJ, Bowker JH, Gadia M, et al. Use of plaster casts in
                the management of diabetic neuropathic foot ulcers. Diabetes
                Care. 1986;9(2):149-152. doi:10.2337/diacare.9.2.149.
              </li>
              <li>
                Ducic I, Felder JM 3rd, Iorio ML. The role of peripheral nerve
                surgery in diabetic limb salvage. Plast Reconstr Surg. 2011;127
                Suppl 1:259S-269S. doi:10.1097/PRS.0b013e31820063d4.
              </li>
              <li>
                Bigliardi PL, Alsagoff SAL, El-Kafrawi HY, Pyon JK, Wa CTC,
                Villa MA. Povidone iodine in wound healing: A review of current
                concepts and practices. Int J Surg. 2017;44:260-268.
                doi:10.1016/j.ijsu.2017.06.073.
              </li>
              <li>
                Wang L, Qin W, Zhou Y, et al. Transforming growth factor β plays
                an important role in enhancing wound healing by topical
                application of Povidone-iodine. Sci Rep. 2017;7(1):991.
                Published 2017 Apr 20. doi:10.1038/s41598-017-01116-5
              </li>
              <li>
                Betadin preparatının (məhlul, məlhəm) tibbi istifadəsinə dair 
                təlimat, QQ П N015282/03, QQ П N015282/02.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
};

export default TroficheskieYazvyNogAz;