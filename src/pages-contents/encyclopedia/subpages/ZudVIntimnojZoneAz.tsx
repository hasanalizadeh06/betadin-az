"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ScrollGoals {
  [key: number]: () => void;
}
interface Triggered {
  [key: number]: boolean;
}

export default function ZudVIntimnojZoneAz() {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== "undefined" && window.ym) {
          window.ym(37744585, "reachGoal", "Скроллинг40");
        }
      },
      80: () => {
        if (typeof window !== "undefined" && window.ym) {
          window.ym(37744585, "reachGoal", "Скроллинг80");
        }
      },
    };

    const triggered: Triggered = { 40: false, 80: false };

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

      for (const percent of [40, 80]) {
        if (scrollPercent >= percent && !triggered[percent]) {
          triggered[percent] = true;
          scrollGoals[percent]();
        }
      }

      if (Object.values(triggered).every((v) => v)) {
        window.removeEventListener("scroll", checkScroll);
      }
    }

    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
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
                {...{'typeof': 'BreadcrumbList'}}
              >
                <li property="itemListElement" {...{'typeof': 'ListItem'}}>
                  <Link property="item" href="/" {...{'typeof': 'WebPage'}}>
                    <span property="name">Ana səhifə</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" {...{'typeof': 'ListItem'}}>
                  <Link property="item" href="/encyclopedia/" {...{'typeof': 'WebPage'}}>
                    <span property="name">İntim zonada qaşınma</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" {...{'typeof': 'ListItem'}}>
                  <span property="name">İntim zonada qaşınma</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    İntim zonada qaşınma: səbəblər, müalicə, profilaktika
                  </h1>
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
                <h2 className="page-header-subtitle">
                  İntim zonada qaşınmanın səbəbləri
                </h2>
                <div className="page-header-body">
                  <p>
                    İntim zonada qaşınma – həmişə həkimə müraciət etmək və onun
                    yaranma səbəbini müəyyən etmək üçün əsasdır.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#ginekologicheskie-zabolevaniya-svyazannye-s-zudom-v-oblasti-polovyh-organov">
                      Qaşınma ilə əlaqəli xəstəliklər
                    </a>
                  </li>
                  <li>
                    <a href="#lechenie-zuda-v-intimnoy-zone">
                      İntim zonada qaşınmanın müalicəsi
                    </a>
                  </li>
                  <li>
                    <a href="#profilaktika">Profilaktika</a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1613/979987aa3b9fb78750752310a620b350379a81bd07b7afe95950047d5161bf3f-730x615/kartinka-banner-4-1-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1613/979987aa3b9fb78750752310a620b350379a81bd07b7afe95950047d5161bf3f-730x615/kartinka-banner-4-1-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="https://betadin.ru/wp-content/uploads/imagesv3/1613/979987aa3b9fb78750752310a620b350379a81bd07b7afe95950047d5161bf3f-730x615/kartinka-banner-4-1-730x615.jpg"
                      alt="İntim zonada qaşınma"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
              <ul>
                <li>
                  <a href="#ginekologicheskie-zabolevaniya-svyazannye-s-zudom-v-oblasti-polovyh-organov">
                    Cinsi orqanlar nahiyəsində qaşınma ilə əlaqəli ginekologiya
                    xəstəlikləri
                  </a>
                </li>
                <li>
                  <a href="#diagnostika-prichiny-poyavleniya-zuda-v-intimnoi-zone">
                    Diaqnostika
                  </a>
                </li>
                <li>
                  <a href="#lechenie-zuda-v-intimnoy-zone">
                    İntim zonada qaşınmanın müalicəsi
                  </a>
                </li>
                <li>
                  <a href="#profilaktika">Profilaktika</a>
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
              <a href="#ginekologicheskie-zabolevaniya-svyazannye-s-zudom-v-oblasti-polovyh-organov">
                Cinsi orqanlar nahiyəsində qaşınma ilə əlaqəli ginekologiya
                xəstəlikləri
              </a>
            </li>
            <li>
              <a href="#diagnostika-prichiny-poyavleniya-zuda-v-intimnoi-zone">
                Diaqnostika
              </a>
            </li>
            <li>
              <a href="#lechenie-zuda-v-intimnoy-zone">
                İntim zonada qaşınmanın müalicəsi
              </a>
            </li>
            <li>
              <a href="#profilaktika">Profilaktika</a>
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
              İntim zonada qaşınma müstəqil xəstəlik deyil, bu reproduktiv
              sistemin və ya bütövlükdə orqanizmin hər hansı patoloji
              vəziyyətindən xəbər verə bilən simptomudur.
            </p>
            <div className="list-base">
              <p>
                <strong>
                  Qadınlarda intim zonada narahatlıq və qaşınmanın yaranma
                  səbəblərini 2 qrupa bölmək olar:
                </strong>
              </p>
              <ul>
                <li>Qaşınmanın ginekologiya xarakterli olmayan səbəbləri</li>
                <li>İntim zonada qaşınmanın ginekologiya səbəbləri</li>
              </ul>
            </div>
            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  height={505}
                  width={503}
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg"
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <h3 className="h3">Ginekologiya xarakterli olmayan səbəblər</h3>
            <p>
              Ginekologiya xarakterli olmayan səbəblər xarici cinsi orqanların
              dəri xəstəlikləri (məsələn,{" "}
              <Link href="/encyclopedia/gerpes/" title="Herpes məlhəmi">
                göbələk zədələnmələri
              </Link>
              , sedef xəstəliyi, ekzema), allergik reaksiyalar, orqanizmdə
              sistemli xəstəliklər (məsələn, hepatit), qurd invaziyaları,
              nevroloji xəstəliklər (nevrozlar), uzunmüddətli stress, həmçinin
              həyat tərzinin bir sıra amilləri (məsələn, dar sintetik paltar
              geyinmək) ilə əlaqəli ola bilər
              <sup>
                <a href="#spisok-literatury">1-5</a>
              </sup>
              .
            </p>

            <h3 className="h3">Ginekologiya səbəbləri</h3>
            <p>
              Ən çox xarici cinsi orqanlar nahiyəsində qaşınmanı cinsi yolla
              keçən müxtəlif xəstəliklər törədir. Tezlik baxımından ilk yerdə
              vulvanın (vulvit) və vaginanın (vaginit) infeksion-iltihabi
              xəstəlikləri, vaginanın və xarici cinsi orqanların normal
              mikroflorasının pozulması, həmçinin hormonların disbalansı (bir
              qayda olaraq, reproduktiv orqanlara hormonal təsirin çatışmazlığı)
              dayanır
              <sup>
                <a href="#spisok-literatury">1-5</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1618/181dd6f937caef106b39e902f4466e1235b1637b38c620342524e05140ad6d69-650x0/medical-kit-and-bandaid-509398-488-1-32-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1618/181dd6f937caef106b39e902f4466e1235b1637b38c620342524e05140ad6d69-650x0/medical-kit-and-bandaid-509398-488-1-32-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/1618/181dd6f937caef106b39e902f4466e1235b1637b38c620342524e05140ad6d69-650x0/medical-kit-and-bandaid-509398-488-1-32-650x325.png"
                alt="Qaşınmanın ginekologiya səbəbləri"
              />
            </picture>

            <h2
              className="h2"
              id="ginekologicheskie-zabolevaniya-svyazannye-s-zudom-v-oblasti-polovyh-organov"
            >
              Cinsi orqanlar nahiyəsində qaşınma ilə əlaqəli ginekologiya
              xəstəlikləri
            </h2>
            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>İnfeksion xəstəliklər</strong>
                  </p>
                  <ul>
                    <li>
                      Cinsi yolla keçən infeksiyalar (<strong>CYKİ</strong>:
                      trixomoniaz, xlamidioz, genital herpes, qonorey)
                    </li>
                    <li>Vulvovaginal kandidoz (və ya "ağlıq")</li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Vagina mikroflorasının pozulması</strong>
                  </p>
                  <ul>
                    <li>
                      <Link href="/encyclopedia/bakterialnyj-vaginoz/">
                        Bakterial vaginoz
                      </Link>
                    </li>
                    <li>
                      Uzunmüddətli antibiotik qəbulu fonunda disbakterioz və
                      şərti-patogen floranın həddindən artıq çoxalması
                    </li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Hormonal disbalans</strong>
                  </p>
                  <ul>
                    <li>
                      Menopauza zamanı, yumurtalıqların erkən çatışmazlığında,
                      yumurtalıqlar və uşaqlıq üzərində cərrahi əməliyyatlardan
                      sonra, diyetlər və idmanla həddindən artıq məşğul olma
                      fonunda menstruasiyanın olmaması zamanı qadın cinsi
                      hormonlarının estrogenlərinin təsirinin çatışmazlığı.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Fon ginekologiya xəstəlikləri</strong>
                  </p>
                  <ul>
                    <li>Vulvanın distrofik və iltihabi xəstəlikləri</li>
                    <li>Kondilomalar (papillomalar)</li>
                  </ul>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Vulva və vaginanın prekanser xəstəlikləri</strong>
                  </p>
                  <ul>
                    <li>
                      Epitel hüceyrələrində dəyişikliklərlə əlaqəli displastik
                      xarakterli vulvanın prekanser zədələnməsi (vulva və vagina
                      nahiyəsində intraepitelial neoplaziyalar
                      <sup>
                        <a href="#spisok-literatury">1-5</a>
                      </sup>
                      )
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="green">
              <p>
                Yadda saxlamaq lazımdır ki, intim nahiyədə qaşınma nadir
                hallarda xəstəliyin yeganə təzahürü olur. Bir qayda olaraq, bu
                simptom digər, bu və ya digər patologiya üçün daha xarakterik
                olanlarla birləşir. Məsələn,{" "}
                <strong>hipoestrogeniya zamanı</strong> (estrogenlərin
                çatışmazlığı) nadir hallarda başqa əlamətlər də yaranır: isti
                basmaları, tərləmə, yuxu pozğunluqları, emosional pozğunluqlar.{" "}
                <strong>CYKİ-də qaşınma</strong> vaginadan patoloji ifrazatlarla
                birləşir (sarı və ya yaşıl, xoşagəlməz qoxulu ola bilər).{" "}
                <strong>Vaginitlərdə</strong> (vaginada iltihabi proseslər)
                ağrı, şiş və qızartı yaranır,{" "}
                <strong>bakterial vaginozda</strong> ifrazatlar xarakterik
                "balıq"{" "}
                <Link href="/encyclopedia/zapah-v-intimnoj-zone/">
                  qoxusuna
                </Link>{" "}
                malikdir. <strong>Vulvovaginal kandidoz (ağlıq)</strong> nadir
                hallarda vaginadan bol və ya orta "kəsmik" ifrazatlarla müşayiət
                olunur.
              </p>
            </div>

            <p>
              Son illərdə nadir hallarda ağlığın vaginanın digər iltihabi və
              qeyri-iltihabi xəstəlikləri ilə birləşməsi müşahidə olunur,
              məsələn bakterial vaginozla. Laborator diaqnostikanın aparılması
              zamanı eyni vaxtda patoloji prosesin bir neçə törədicisi aşkar
              edilir
              <sup>
                <a href="#spisok-literatury">7</a>
              </sup>
              .
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Vaginitdən şamlar</strong>
                </p>
                <p>
                  Vaginal şamlar formasında lokal preparatlarla vaginitin
                  müalicəsi. Vaginada iltihaba qarşı şamları necə seçmək olar?
                </p>
                <a
                  href="/encyclopedia/svechi-ot-vaginita/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-310x210.png"
                  alt="Vaginitdən şamlar - önizləmə"
                />
              </picture>
            </div>

            <h2
              className="h2"
              id="diagnostika-prichiny-poyavleniya-zuda-v-intimnoi-zone"
            >
              İntim zonada qaşınmanın yaranma səbəbinin diaqnostikası
            </h2>
            <p>
              İntim zonada qaşınmanın yaranma səbəbini düzgün müəyyən etmək üçün
              həkim qəbulda xəstənin bütün mövcud şikayətlərini qiymətləndirir,
              müayinə aparır, laborator testlər və digər müayinə növləri təyin
              edir.
            </p>

            <div className="green">
              <p>
                Ən çox intim zonada qaşınma şikayətləri ilə ginekoloqa müraciət
                edirlər.
              </p>
            </div>

            <div className="list-base">
              <p>
                <strong>
                  Bunun üçün adi diaqnostika alqoritmi aşağıdakıları əhatə edir:
                </strong>
              </p>
              <ul>
                <li>
                  <strong>Kresloda ginekologiya müayinəsi</strong>. Həkim
                  xəstəliyin başqa hər hansı təzahürlərinin (şiş, qızartı,
                  patoloji ifrazatlar, xoşagəlməz qoxu və digərləri)
                  olub-olmadığını qiymətləndirə biləcək
                </li>
                <li>
                  <strong>
                    Laborator tədqiqat üçün yaxmaların götürülməsi
                  </strong>{" "}
                  (mikroskopik tədqiqat, törədicinin növünü, onun sayını və
                  müxtəlif dərmanların təsirinə reaksiyasını aşkar etmək üçün
                  yaxmadan mikroorqanizmlərin xüsusi mühitlərə əkilməsi)
                </li>
                <li>
                  <strong>Kolposkopiya, vulvoskopiya</strong> (xüsusi alət —
                  kolposkopun köməyi ilə vagina, vulvanın böyütmə altında
                  baxılması)
                </li>
                <li>
                  <strong>
                    Vulvanın dəyişilmiş sahələrinin biopsiyası və sonrakı
                    bioptatın histoloji tədqiqatı
                  </strong>{" "}
                  prekanser/xərçəng zədələnmələrinin diaqnostikası və təsdiqi
                  üçün
                </li>
                <li>
                  Lazım gəldikdə təyin olunur:{" "}
                  <strong>
                    hormonal müayinə, əlaqəli mütəxəssislərin məsləhəti
                  </strong>
                </li>
              </ul>
            </div>

            <h2 className="h2" id="lechenie-zuda-v-intimnoy-zone">
              İntim zonada qaşınmanın müalicəsi
            </h2>
            <p>
              İntim zonada qaşınmanın müşahidə olunduğu xəstəliklərin müalicəsi
              üçün sxem və konkret preparatlar aşkar edilmiş səbəb nəzərə
              alınaraq seçilir.
            </p>

            <div className="list-base">
              <p>
                <strong>
                  Cinsi orqanlar nahiyəsində qaşınmadan xilas olmaq üçün
                  istifadə oluna bilən preparatlar:
                </strong>
              </p>
              <ul>
                <li>
                  <strong>Antibakterial preparatlar</strong> (CYKİ-də təyin
                  olunur). Bir qayda olaraq, belə preparatlar geniş təsir
                  spektrinə malikdir və infeksiyanın törədicisini məhv etməyə
                  yönəldilmişdir.
                </li>
                <li>
                  <strong>Göbələk əleyhinə preparatlar</strong>. Bu dərman qrupu
                  ağlığın törədicisi olan Candida cinsinə aid müxtəlif göbələk
                  növlərinə qarşı məhvedici təsirə malikdir.
                </li>
                <li>
                  <strong>Əvəzedici hormonal terapiya üçün preparatlar</strong>{" "}
                  (ƏHT), təbii qadın cinsi hormonlarının analoqlarını ehtiva
                  edir. Qadın orqanizmində çatışmayan estrogenlərin miqdarını
                  əvəz etmək məqsədilə təyin olunur. Sistemli və ya vaginada
                  lokal tətbiq olunur.
                </li>
                <li>
                  <strong>
                    Faydalı laktobakteriyalar ehtiva edən preparatlar
                  </strong>
                  . Vaginada disbakterioz zamanı faydalı floranın
                  nümayəndələrinin sayını artırmaq məqsədilə təyin olunur.
                </li>
                <li>
                  <strong>Lokal antiseptiklər</strong>. Geniş təsir spektrinə
                  malik preparatlar ki, onlar həm qaşınma ilə müşayiət olunan
                  tez-tez rast gəlinən ayrı-ayrı xəstəliklərdə, həm də qarışıq
                  infeksiyalarda təyin olunur.
                </li>
              </ul>
            </div>

            <h3 className="h3">
              İntim nahiyədə qaşınma ilə müşayiət olunan xəstəliklərin
              müalicəsində Betadin® preparatları
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
                    src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-927x916.jpg"
                    alt="Betadin"
                  />
                </picture>
              </div>
              <p>
                Betadin<sup>®</sup> vasitələri lokal antiseptik preparatlara
                aiddir. Vaginal şamlar,{" "}
                <Link href="/encyclopedia/jod-maz/">məlhəm</Link> və xarici
                istifadə üçün məhlul şəklində buraxılır. Betadin<sup>®</sup>{" "}
                preparatlarının aktiv maddəsi —{" "}
                <Link href="/encyclopedia/povidon-jod/">povidon-yod</Link> olub,
                dərmanın vurulması/yeridilməsi zamanı ondan aktiv{" "}
                <Link href="/encyclopedia/jod/">yod</Link> sərbəst buraxılır.
              </p>
              <p>
                Yod qram-müsbət və qram-mənfi bakteriyalara, viruslara,
                göbələklərə və onların sporlarına, həmçinin bəzi sadəcillərə
                qarşı geniş təsir spektrinə malikdir.
              </p>
              <p>
                Betadin<sup>®</sup> vasitələrinin təsiri törədicilərin həyatı
                üçün vacib olan zülalların strukturunun dağıdılması və sonrakı
                mikroorqanizmlərin hüceyrələrinin məhvinə əsaslanır. Laborator
                tədqiqatlarda Betadin<sup>®</sup> bir dəqiqədən az müddətdə
                çoxlu sayda mikroorqanizmlərə qarşı antiseptik xüsusiyyətlər
                nümayiş etdirdi
                <sup>
                  <a href="#spisok-literatury">8</a>
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
                  İstifadə təlimatı
                </a>
              </p>
            </div>

            <div className="green">
              <p>
                Vulva və vaginanın müxtəlif xəstəlikləri (kandidoz, trixomoniaz)
                diaqnozu qoyulmuş 180 qadın arasında xarici müəlliflərin
                tədqiqatında povidon-yodlu vaginal şamlar həm qısamüddətli
                (müalicənin bitməsindən 5-7 gün sonra), həm də uzunmüddətli
                müşahidədə (müalicənin bitməsindən 3-4 həftə sonra) qaşınma,
                yanma, vaginanın selikli qişasının və xarici cinsi orqanların
                dərisinin qızarması simptomlarını əhəmiyyətli dərəcədə azaltdı
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
                .
              </p>
            </div>

            <div className="list-base">
              <p>
                <strong>
                  Betadin<sup>®</sup> şamları intim nahiyədə qaşınma zamanı
                  geniş istifadə oluna bilər. Onların üstünlükləri hesab edilə
                  bilər:
                </strong>
              </p>
              <ul>
                <li>
                  Simptomları aradan qaldırmaq qabiliyyəti (zərərli
                  mikroorqanizmlərə dağıdıcı təsir hesabına)
                </li>
                <li>Tətbiqin sadəliyi və rahatlığı</li>
                <li>
                  Vulva və vaginanın xəstəlikləri ilə əlaqəli mikroorqanizmlərin
                  əksəriyyətinə geniş təsir spektri
                </li>
                <li>
                  Qadının öz vaginal mikroflorasının bərpası və saxlanması üçün
                  şərait yaratmaq qabiliyyəti
                  <sup>
                    <a href="#spisok-literatury">10</a>
                  </sup>
                  .
                </li>
              </ul>
            </div>

            <div className="list-base">
              <p>
                <strong>
                  Betadin<sup>®</sup>-in tətbiqinin əsas məhdudiyyətləri:
                </strong>
              </p>
              <ul>
                <li>Hamiləlik və laktasiya dövrü</li>
                <li>Qalxanabənzər vəzinin funksiyasının pozulması</li>
                <li>Preparatın komponentlərinə qarşı həssaslıq</li>
              </ul>
            </div>

            <div className="green">
              <p>
                Vaginit və ya vulvovaginal kandidozun müalicəsində Betadin
                <sup>®</sup> şamları 200 mq təyin olunur – gecə üçün vaginaya 1
                şam, 7 gün ərzində.
              </p>
            </div>

            <h2 className="h2" id="profilaktika">
              Qaşınma yaranmasının səbəblərinin profilaktikası
            </h2>
            <p>
              İntim nahiyədə qaşınmanın yaranması üçün ginekologiya və
              qeyri-ginekologiya xarakterli çoxlu səbəblər mövcud olduğundan,
              həkimə müraciət etmək və özünüdiaqnostika və özünümüalicə ilə
              məşğul olmamaq tövsiyə olunur.
            </p>

            <div className="list-base">
              <p>
                Qaşınma ilə müşayiət olunan intim sferanın xəstəliklərinin
                inkişafı riskini azaltmaq üçün profilaktik tədbirlərə riayət
                etmək lazımdır:
              </p>
              <ul>
                <li>
                  Təsadüfi cinsi əlaqələrdən çəkinmək, baryera
                  kontrasepsiyasından (prezervativ) istifadə etmək
                </li>
                <li>Antibiotiklərin nəzarətsiz qəbulunu istisna etmək</li>
                <li>İntim gigiyena qaydalarına riayət etmək</li>
                <li>Sağlam həyat tərzi sürmək</li>
                <li>
                  Hər il mütəxəssislərdə, o cümlədən ginekoloqda dispanser
                  müşahidəsindən keçmək
                </li>
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
                  src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg"
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              Tez-tez verilən suallar
            </h2>

            <h3 className="h3">
              Menstruasiya zamanı və ondan dərhal sonra intim zonada davamlı
              olmayan qaşınma nə ilə əlaqəli ola bilər?
            </h3>
            <p>
              Menstrual qan vaginada iltihaba səbəb ola bilən bakteriyalar da
              daxil olmaqla, bakteriyaların çoxalması üçün yaxşı qidalı
              mühitdir. Menstruasiya zamanı və ondan dərhal sonra şərti-patogen
              mikroorqanizmlərin aktiv çoxalması və xəstəlik simptomlarının
              inkişafı ilə normal mikrofloranın balansında dəyişiklik baş verə
              bilər. Tsikl ortasında və ikinci fazasında estrogenlərin və
              laktobakteriyaların aktiv çoxalmasının təsiri altında
              şərti-patogen mikrobların böyüməsi dayandırıla bilər. Bundan sonra
              simptomlar, məsələn qaşınma yox olur.
            </p>

            <h3 className="h3">
              İntim nahiyədə qaşınma yarandıqda cinsi tərəfdaşın mütləq
              müayinədən keçməsi lazımdırmı?
            </h3>
            <p>
              Cinsi tərəfdaşın müayinəsi və müalicəsi məcburidir, əgər intim
              zonada qaşınmanın infeksion xarakterinə şübhə varsa və ya onun
              yaranmasının infeksion səbəbi artıq müəyyən edilmişdirsə.
            </p>

            <h3 className="h3">
              Vaginada qaşınma zamanı müəyyən diyetə riayət etmək lazımdırmı?
            </h3>
            <p>
              Qidalanmanın hər hansı xüsusiyyətləri intim zonada qaşınmanın
              müalicə vasitəsi deyil, lakin qidalanma rasionunda dəyişikliklər
              immunitətə müsbət təsir hesabına simptomların yüngülləşməsinə
              kömək edə bilər.
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
                  src="https://betadin.ru/wp-content/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-235x203.png"
                  alt="Molçanov Oleq Leonidoviç"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              Mövzu üzrə oxu
            </div>
            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ marginRight: "29px" }}
                >
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
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-0x166/bakterialnyj-vaginoz-prevyu-246x166.png"
                        alt="Bakterial vaginoz - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Bakterial vaginoz</strong>
                    </p>
                    <p>
                      Qadınlarda patoloji ifrazatların təxminən 90% halında
                      bakterial vaginoz diaqnozu qoyulur. Bu xəstəlik niyə
                      yaranır və necə müalicə olunur?
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/bakterialnyj-vaginoz/">Ətraflı</a>
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
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-0x166/lechenie-vaginita-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-0x166/lechenie-vaginita-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1939/25b93ae2ce700be6f2829a81d5c4d5909619919f38a400366ebeeeb3e5202994-0x166/lechenie-vaginita-prevyu-246x166.png"
                        alt="Vaginitin müalicəsi - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Vaginitin müalicəsi</strong>
                    </p>
                    <p>
                      Vaginit — vaginanın selikli qişasının iltihabı nə vaxt
                      yaranır? Bu xəstəliyin yaranma səbəbləri və müalicəsi.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/vaginit/">Ətraflı</a>
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ marginRight: "29px" }}>
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1943/0712bddef472146be1c64ae65c0c0d678ea5a1250eebd4f83c6cd8e96b5e38fb-0x166/zapah-v-intimnoj-zone-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1943/0712bddef472146be1c64ae65c0c0d678ea5a1250eebd4f83c6cd8e96b5e38fb-0x166/zapah-v-intimnoj-zone-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="https://betadin.ru/wp-content/uploads/imagesv3/1943/0712bddef472146be1c64ae65c0c0d678ea5a1250eebd4f83c6cd8e96b5e38fb-0x166/zapah-v-intimnoj-zone-prevyu-246x166.png"
                        alt="İntim zonada qoxu - önizləmə"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>İntim zonada qoxu</strong>
                    </p>
                    <p>
                      Vaginadan qoxular – norma və patologiya. Xoşagəlməz
                      qoxunun yaranması ilə müşayiət olunan xəstəliklərin
                      müalicəsi.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/zapah-v-intimnoj-zone/">Ətraflı</a>
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
                Woelber L, Prieske K, Mendling W, Schmalfeldt B, Tietz HJ,
                Jaeger A. Vulvar pruritus-Causes, Diagnosis and Therapeutic
                Approach. Dtsch Arztebl Int. 2020 Feb 21;116(8):126-133. doi:
                10.3238/arztebl.2020.0126.
              </li>
              <li id="literatura-1">
                Calleja-Agius J, Brincat MP. The urogenital system and the
                menopause. Climacteric. 2015;18 Suppl 1:18-22. doi:
                10.3109/13697137.2015.1078206. PMID: 26366796.
              </li>
              <li id="literatura-2">
                Savas JA, Pichardo RO. Female Genital Itch. Dermatol Clin. 2018
                Jul;36(3):225-243. doi: 10.1016/j.det.2018.02.006. Epub 2018 Apr
                26. PMID: 29929595.
              </li>
              <li id="literatura-3">
                Kesić V, Vieira-Baptista P, Stockdale CK. Early Diagnostics of
                Vulvar Intraepithelial Neoplasia. Cancers (Basel).
                2022;14(7):1822. Published 2022 Apr 4.
                doi:10.3390/cancers14071822
              </li>
              <li id="literatura-4">
                Raef HS, Elmariah SB. Vulvar Pruritus: A Review of Clinical
                Associations, Pathophysiology and Therapeutic Management. Front
                Med (Lausanne). 2021;8: 649402. Published 2021 Apr 7.
                doi:10.3389/fmed.2021.649402
              </li>
              <li id="literatura-5">
                Lambert J. Pruritus in female patients. Biomed Res Int.
                2014;2014:541867. doi: 10.1155/2014/541867. Epub 2014 Mar 10.
                PMID: 24711996; PMCID: PMC3966341.
              </li>
              <li id="literatura-6">
                Urogenital kandidozdan əziyyət çəkən xəstələrin aparılması üzrə
                kliniki tövsiyələr – 2020 //Rusiya dermatovenerologiya və
                kosmetologiya cəmiyyəti, Moskva
              </li>
              <li id="literatura-7">
                Betadin<sup>®</sup> suppozitorilərinin tətbiqi üzrə təlimat QN:
                P №015282/01.
              </li>
              <li id="literatura-8">
                Petersen EE, Weissenbacher ER, Hengst P, et al. Local treatment
                of vaginal infections of varying etiology with dequalinium
                chloride or povidone iodine. A randomised, double-blind,
                active-controlled, multicentric clinical study.
                Arzneimittelforschung. 2002;52(9):706-715.
                doi:10.1055/s-0031-1299955
              </li>
              <li id="literatura-9">
                Wewalka G, Stary A, Bosse B, Duerr HE, Reimer K. Efficacy of
                povidone-iodine vaginal suppositories in the treatment of
                bacterial vaginosis. Dermatology. 2002;204 Suppl 1:79-85. doi:
                10.1159/000057731
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
