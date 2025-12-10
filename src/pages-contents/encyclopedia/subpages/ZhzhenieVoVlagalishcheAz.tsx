"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function ZhzhenieVoVlagalishcheAz() {
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
                  <Link
                    property="item"
                    typeof="WebPage"
                    href="https://betadin.ru"
                  >
                    <span property="name">Ana səhifə</span>
                  </Link>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <Link
                    property="item"
                    typeof="WebPage"
                    href="https://betadin.ru/encyclopedia/"
                  >
                    <span property="name">Vaginada yanma</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Vaginada yanma</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Vaginada yanma: səbəbləri və aradan qaldırılması
                  </h1>
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      height={112}
                      width={115}
                      src="/images/encyclopedia/zhzhenie-icon.png"
                      alt="başlıq yanında şəkil"
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">
                  Simptomu vaginada yanma ola biləcək ən tez-tez rast gəlinən
                  xəstəliklər
                </h2>
                <div className="page-header-body">
                  <p>
                    Vaginada yanma — bu vulva və vaginanın müxtəlif xəstəlikləri
                    üçün xarakterik simptomdur
                    <sup>
                      <a href="#literatura-0">1</a>
                    </sup>
                    .
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#osnovnye-zabolevaniya-provociruyushchie-poyavlenie-zuda">
                      Əlaqəli xəstəliklər
                    </a>
                  </li>
                  <li>
                    <a href="#diagnostika-prichiny-zhzheniya-vo-vlagalishcha">
                      Diaqnostika
                    </a>
                  </li>
                  <li>
                    <a href="#lechenie-zhzheniya-vo-vlagalishche">Müalicə</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/956/bd06c86e5eddc63d50a5a339cef4864270991804991fe3a97d218c69b5846030-730x615/frame-655-5-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/956/bd06c86e5eddc63d50a5a339cef4864270991804991fe3a97d218c69b5846030-730x615/frame-655-5-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/images/encyclopedia/zhzhenie-header.jpg"
                      alt="Vaginada yanma"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#diagnostika-prichiny-zhzheniya-vo-vlagalishcha">
                    Vaginada yanmanın səbəblərinin diaqnostikası
                  </a>
                </li>
                <li>
                  <a href="#lechenie-zhzheniya-vo-vlagalishche">
                    Vaginada yanmanın müalicəsi
                  </a>
                </li>
                <li>
                  <a href="#profilaktika-poyavleniya-zhzheniya-vo-vlagalishche">
                    Vaginada yanmanın yaranmasının profilaktikası
                  </a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">
                    Tez-tez verilən suallar
                  </a>
                </li>
                <li>
                  <a href="#literatura">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross">
                Məzmun
              </div>
            </nav>
          </div>
        </div>

        <nav className="nav-content nav-content-fixed">
          <ul>
            <li>
              <a href="#diagnostika-prichiny-zhzheniya-vo-vlagalishcha">
                Vaginada yanmanın səbəblərinin diaqnostikası
              </a>
            </li>
            <li>
              <a href="#lechenie-zhzheniya-vo-vlagalishche">
                Vaginada yanmanın müalicəsi
              </a>
            </li>
            <li>
              <a href="#profilaktika-poyavleniya-zhzheniya-vo-vlagalishche">
                Vaginada yanmanın yaranmasının profilaktikası
              </a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
            </li>
            <li>
              <a href="#literatura">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross">
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
              Vaginada yanma ilə müşayiət olunan xəstəliklər, bir qayda olaraq,
              ginekoloq həkimə, daha nadir hallarda dəri-zöhrəvi xəstəliklər
              üzrə həkimə müraciət səbəbi olur. Əvvəlcə yanmanın səbəbi ola
              biləcək təhlükəli infeksiya növlərini, məsələn cinsi yolla
              ötürülən infeksiyaları (CYİ) istisna etmək lazımdır.
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

            <div className="list-base">
              <p>
                <strong>
                  Vaginada yanma bunlar tərəfindən törədilə bilər:
                </strong>
              </p>
              <ul>
                <li>Xlamidiyalar</li>
                <li>Mikoplazmalar</li>
                <li>Herpes</li>
                <li>Trixomonadalar</li>
                <li>Atrofiya</li>
                <li>Bakterial vaginoz</li>
                <li>Allergiya</li>
                <li>Kandidoz</li>
                <li>Aerob vaginit</li>
                <li>Qonoreya</li>
              </ul>
            </div>

            <p>
              Lakin daha tez-tez hallarda xəstəliyin səbəbi normada vaginada
              yaşayan mikroorqanizmlərdir. Amma müxtəlif səbəblərdən onlar
              özlərini kifayət qədər aqressiv göstərə bilər və intim narahatlıq
              simptomlarını törədə bilərlər.
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1134/b404729e1f410d5a97bdf9cd23ca209810ff6736cc618aedf9543d6dfed64b23-650x0/medical-kit-and-bandaid-509398-488-1-13-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1134/b404729e1f410d5a97bdf9cd23ca209810ff6736cc618aedf9543d6dfed64b23-650x0/medical-kit-and-bandaid-509398-488-1-13-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/microorganisms.png"
                alt="vaginada mikroorqanizmlər"
              />
            </picture>

            <div className="list-base">
              <h3 id="osnovnye-zabolevaniya-provociruyushchie-poyavlenie-zuda">
                <strong>
                  Normal floranın aqressivlik göstərməsi ilə əlaqəli vaginada
                  qaşınmanın yaranmasını törədən əsas xəstəlikləri nəzərdən
                  keçirək.
                </strong>
              </h3>
            </div>

            <h4 id="aerobnyy-vaginit">Aerob vaginit</h4>
            <p>
              Aerob vaginit — bu normada daha az miqdarda rast gəlinməli olan
              mikroorqanizmlərin sayının artması zamanı yaranan vaginanın
              selikli qişasının iltihabıdır. Statistika göstərir ki, xəstəlik
              kifayət qədər tez-tez, əsasən 21 yaşdan 30 yaşa qədər qadınlarda
              (32,3%) rast gəlinir
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
              .
            </p>
            <p>
              Aerob vaginitli xəstədə mikrobioloji analizlərdə bağırsaq çöpü
              (Escherichia coli), enterokokklar, B qrupu streptokokklar
              (Streptococcus agalactiae) və stafilokokklar (Staphylococcus
              aureus) rast gəlinəcək
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
              . Bütün bu mikroorqanizmlər az miqdarda orqanizmimizin hər yerində
              rast gəlinə bilər. Ona görə də aerob vaginit "klassik"
              infeksiyalara aid deyil.
            </p>
            <div className="green">
              <p>
                Aerob vaginitdə vaginada yanma ilə tez-tez birləşən{" "}
                <strong>simptomlar</strong>: çürük qoxulu bol ifrazatlar, ümumi
                narahatlıq, seks zamanı narahat edici hisslər.
              </p>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Bakterial vaginoz</strong>
                </p>
                <p>
                  Qadınlarda patoloji ifrazatların demək olar ki, 90% hallarda
                  bakterial vaginoz diaqnozu qoyulur. Bu xəstəlik niyə yaranır
                  və onu necə müalicə etmək olar?
                </p>
                <a
                  href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-310x235/bakterialnyj-vaginoz-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1944/ae089bb1e24c2f6788955cdbbdf454b609431b73e92335baf2caf6992cb0fed5-310x235/bakterialnyj-vaginoz-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="/images/encyclopedia/bakterialnyj-vaginoz.png"
                  alt="Bakterial vaginoz - önizləmə"
                />
              </picture>
            </div>

            <h4 id="bakterialnyy-vaginoz">Bakterial vaginoz</h4>
            <p>
              <a
                href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/"
                title="Bakterial vaginoz"
              >
                Bakterial vaginoz
              </a>
              – tez-tez vaginada yanma ilə təzahür edən xəstəlikdir. Bakterial
              vagiozun səbəbi, aerob vaginit kimi, normada vaginada olan müəyyən
              bakteriyaların həddindən artıq çoxalmasıdır. Lakin qeyd etmək
              vacibdir ki, bakterial vaginozda bununla eyni vaxtda "yaxşı" və
              "faydalı" bakteriyaların – laktobakteriyaların miqdarı azalır. Bu
              xəstəlikdə mikrobioloji analizlərdə tez-tez çox miqdarda
              Gardnerella vaginalis görmək olar
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              . Bu ən çox immunitetin zəifləməsi, xroniki xəstəliklərin
              kəskinləşməsi, intim gigiyena qaydalarına düzgün riayət edilməməsi
              səbəbindən baş verir. Beləliklə, bu xəstəlik bütövlükdə normal
              mikrofloranın nisbətinin pozulması ilə xarakterizə olunur və
              vaxtında müalicə tələb edir ki, bu da ağırlaşma risklərini
              əhəmiyyətli dərəcədə azaldır.
            </p>
            <div className="green">
              <p>
                Bakterial vaginozda vaginada yanma ilə tez-tez birləşən{" "}
                <strong>simptomlar</strong>: qələvi yuyucu vasitələrlə (duş
                jelləri, sabun) yuyulduqdan və ya cinsi əlaqədən sonra güclənə
                bilən çürük balıq qoxulu ifrazatlar
                <sup>
                  <a href="#literatura-7">8</a>
                </sup>
                . Digər təzahürlər (qaşınma, ağrılılıq və yanma) nadir hallarda
                görünür.
              </p>
            </div>

            <h4 id="molochnica">Kandidoz</h4>
            <p>
              Vulvovagin kandidoz, əvvəlki təsvir edilən xəstəliklər kimi,
              vaginanın normal mikroflorasının pozulmasının nəticəsidir. Demək
              olar ki, hər bir qadının həyatında ən azı bir kandidoz epizodu
              olub. Bu halda bu xəstəliyin inkişaf səbəbi Candida cinsindən olan
              göbələklərdir
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
              . Ən tez-tez rast gəlinən təmsilçi Candida albicans-dır. Daha
              nadir hallarda kandidozun səbəbi eyni cinsdən olan digər
              göbələklərdir (8—20% hallarda) — C. glabrata, C. tropicalis, C.
              krusei
              <sup>
                <a href="#literatura-7">8</a>
              </sup>
              . Tədqiqatların göstərdiyi kimi, C. albicans ilə müqayisədə daha
              nadir növlərin olması xəstəliyin daha ağır gedişi üçün əlverişsiz
              faktordur. Konkret xəstədə hansı kandidoz növünün rast gəlindiyini
              dəqiq öyrənmək mikrobioloji tədqiqat vasitəsilə çətinlik yaratmır.
            </p>
            <div className="green">
              <p>
                Kandidozda vaginada yanma ilə tez-tez birləşən{" "}
                <strong>simptomlar</strong>: kəsmiyə oxşar ifrazatlar, seks
                zamanı narahatlıq, bəzən sidik ifrazı zamanı ağrılı hisslər
                müşahidə oluna bilər.
              </p>
            </div>

            <h4 id="atroficheskie-processy-vulvy-i-vlagalishcha">
              Vulva və vaginanın atrofik prosesləri
            </h4>
            <p>
              Cinsi orqanların yanması yaşla əlaqəli proseslər – atrofiya
              fonunda fizioloji səbəblərlə şərtləndirilə bilər.
            </p>
            <p>
              Daha çox bu yumurtalıqların "söndürülməsi" ilə əlaqəli
              estrogenlərin (müəyyən hormon növü) çatışmazlığı fonunda
              postmenopauza dövründə özünü göstərir. Oxşar təzahürlər gənc yaşda
              da hansısa xəstəlik fonunda yumurtalıqların funksiyasının
              pozulması zamanı rast gəlinə bilər.
            </p>
            <p>
              Vulva və vaginanın selikli qişasında yaşla əlaqəli atrofik
              proseslərdə yanma ilə birlikdə qurulıq, cinsi orqanlar bölgəsində
              narahatlıq, istidə basmaları, gecə tərləmə, yuxunun pozulması və
              digər simptomlar rast gəlinəcək
              <sup>
                <a href="#literatura-8">9</a>
              </sup>
              .
            </p>

            <h3 id="zhzhenie-vo-vlagalishche-vyzvannoe-allergicheskoy-reakciey">
              Allergik reaksiya tərəfindən törədilən vaginada yanma
            </h3>
            <p>
              Nadir hallarda cinsi orqanlar bölgəsində xoşagəlməz simptomu intim
              gigiyena üçün istifadə olunan vasitələrə, lubrikantlara və ya
              vaginal dərman preparatlarına allergik reaksiya törədə bilər.
            </p>

            <h3 id="zhzhenie-vo-vlagalishche-vyzvannoe-infekciyami-peredavaemymi-polovym-putem-ippp">
              Cinsi yolla ötürülən infeksiyalar (CYİ) tərəfindən törədilən
              vaginada yanma
            </h3>
            <p>
              Yadda saxlamaq vacibdir ki, vaginada yanmanın dəqiq səbəbini
              yalnız həkim müayinə və laborator diaqnostika əsasında müəyyən edə
              bilər!
            </p>

            <h4 id="hlamidiynaya-infekciya-hlamidioz">
              Xlamidiya infeksiyası (xlamidioz)
            </h4>
            <p>
              Bu infeksiyanın törədicisi Chlamidia trahomatis – bakteriya və
              viruslar arasında ara mövqe tutan, yəni hər ikisinin xassələrinə
              malik olan mikroorqanizmdir
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
              . Daha çox 25 yaşdan kiçik insanlar xlamidiozdan əziyyət çəkirlər
              <sup>
                <a href="#literatura-3">4</a>
              </sup>
              . Risk faktorları bunlardır: cinsi partnyorların tez-tez
              dəyişməsi, prezervativ istifadə edilmədən təsadüfi cinsi əlaqələr.
              Qadınların 70–95%-də xəstəlik heç bir simptom olmadan gedə bilər.
              Daha nadir hallarda irinli qarışıqlı selikli ifrazatlar, ağrılı
              seks, qaşınma, cinsi orqanların yanması, ağrılı sidik ifrazı,
              qarının aşağı hissəsində ağrı hissləri və menstrual sikl pozuntusu
              müşahidə olunur
              <sup>
                <a href="#literatura-3">4</a>
              </sup>
              .
            </p>

            <h4 id="gonoreya">Qonoreya</h4>
            <p>
              Qonokokkların (Neisseria gonorrhoeae) törətdiyi qonoreya cinsi
              yolla ötürülən ən geniş yayılmış infeksiyalardan biridir. Hər il
              dünyada təqribən 60 milyon qonoreya halı qeydə alınır
              <sup>
                <a href="#literatura-4">5</a>
              </sup>
              . Xarakterik şikayətlər: irinli ifrazatlar, qaşınma, cinsi
              orqanların yanması, seks zamanı ağrı, sidik ifrazı zamanı
              ağrılılıq, qarının aşağı hissəsində sızlayan ağrılar
              <sup>
                <a href="#literatura-4">5</a>
              </sup>
              .
            </p>

            <h4 id="trihomoniaz">Trixomoniaz</h4>
            <p>
              Trixomoniaz – parazit (Trihomonas Vaginalis) tərəfindən törədilən
              infeksiya
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
              . Hər il trixomoniazla xəstələnən 250 milyona qədər insan qeydə
              alınır
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
              . Adətən xəstələri cinsi yollardan boz-sarı və ya bəzən yaşılımtıl
              rəngli ifrazatlar (ifrazatlar köpüklü ola bilər), xoşagəlməz qoxu,
              cinsiyyət orqanlarında qaşınma və yanma, sidik ifrazı və cinsi
              əlaqə zamanı ağrı, qarın alt hissəsində narahatlıq narahat edir
              <sup>
                <a href="#literatura-5">6</a>
              </sup>
              .
            </p>

            <h4 id="mikoplazmennaya-infekciya">Mikoplazma infeksiyası</h4>
            <p>
              Mycoplasma genitalium – uretra (sidik kanalı), uşaqlıq boynu və
              həmçinin kiçik çanaq orqanlarının iltihabına səbəb olan
              patogendir. Mikoplazma infeksiyası ədəbiyyat məlumatlarına görə
              bütün iltihabi ginekologiya xəstəliklərinin 10%-dən 45%-ə qədərini
              təşkil edir. Yoluxmuş qadınların yarısının heç bir şikayəti yoxdur
              <sup>
                <a href="#literatura-0">1</a>
              </sup>
              . Şikayətlər arasında: selik-irinli xarakterli ifrazatlar, vagina
              və aralıq nahiyəsi dərisində qaşınma, yanma (nadir hallarda),
              sidik ifrazı zamanı ağrı, xoşagəlməz hisslər qeyd olunur.
            </p>

            <h4 id="genitalnyy-gerpes">Genital herpes</h4>
            <p>
              Genital herpes – xroniki viral xəstəlikdir. Törədicisi sadə herpes
              virusunun II və/və ya I tipidir. Halların 70%-də yoluxma
              asimptomatik gedişli olan cinsi tərəfdaşdan baş verir, genital
              herpesin əsas hiylgərliyi buradadır
              <sup>
                <a href="#literatura-6">7</a>
              </sup>
              . İnfeksiyanın əsas ötürülmə yolu – cinsi yoldur. Herpes
              viruslarının ifrazı görünən elementlərin olmaması zamanı da,
              məsələn, uşaqlıq boynu, uretra və ya ağız boşluğu sahəsində baş
              verə bilər
              <sup>
                <a href="#literatura-2">3</a>
              </sup>
              . Herpes uretra, vagina, uşaqlıq boynu, sidik kisəsi və düz
              bağırsağı zədələyə bilir.
            </p>

            <h4 id="chto-vazhno-znat-pro-genitalnyy-gerpes">
              Genital herpes haqqında nəyi bilmək vacibdir?
            </h4>
            <p>
              İlkin epizod parlaq klinik təzahürlərlə, nadir hallarda
              intoksikasiya əlamətləri (zəiflik və bədən hərarətinin 38 °C-yə
              qədər qalxması) ilə xarakterizə olunur. Dəri və selikli
              qişalardakı səpkilər tipikdir, onlar şəffaf məzmunlu elementlər
              (qabarcıqlar) kimi görünür. Qabarcıqlar partladıqdan sonra kiçik
              yaralar, kiçik ölçülü eroziyalar əmələ gəlir.
            </p>
            <p>
              Genital herpesdə səpgi ağrı, yanma və göründüyü yerdə narahatlıqla
              müşayiət oluna bilər
              <sup>
                <a href="#literatura-6">7</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1135/32a452bbaf2054d06d610e1d41bda606d7ee1f7e233aacdd02f2ede8b215e0ff-650x0/medical-kit-and-bandaid-509398-488-1-14-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1135/32a452bbaf2054d06d610e1d41bda606d7ee1f7e233aacdd02f2ede8b215e0ff-650x0/medical-kit-and-bandaid-509398-488-1-14-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/herpes.png"
                alt="Genital herpes"
              />
            </picture>

            <div className="green">
              <p>
                <strong>
                  Əgər qadın vaginada yanma yaranmazdan əvvəl təsadüfi
                  qorunmasız cinsi əlaqələrə malik olubsa və ya tərəfdaşını
                  dəyişibsə, o zaman cinsi yolla keçən infeksiyaları istisna
                  etmək üçün ginekoloqda müayinə keçirmək lazımdır.
                </strong>
              </p>
            </div>

            <h2 id="diagnostika-prichiny-zhzheniya-vo-vlagalishcha">
              Vaginada yanmanın səbəbinin diaqnostikası
            </h2>
            <p>
              Cinsi orqanlarda yanma, həmçinin cinsi yollardan ifrazat,
              narahatlıq, qaşınma, cinsiyyət orqanlarında ağrı kimi simptomlar
              yarandıqda dərhal ginekoloq həkiminə müraciət etmək lazımdır.
            </p>

            <div className="list-base">
              <p>
                Qəbulda həkim xəstəliyin səbəbini araşdırmaq və müəyyən etmək
                üçün yaxma götürəcəkdir. Diaqnostika üçün aşağıdakı metodlardan
                istifadə oluna bilər:
              </p>
              <ul>
                <li>
                  <strong>Mikroskopik metod</strong>. Həkim birbaşa mikroskop
                  altında xəstəliyin törədicisinin növünü müəyyən edir.
                </li>
                <li>
                  <strong>Mikroorqanizmlərin əkilməsi</strong> - törədicini və
                  onun antimikotiklərə (göbələk əleyhinə preparatlara)
                  həssaslığını müəyyən etmək üçün vaginal yaxmanın xüsusi qidalı
                  mühitlərə əkilməsi.
                </li>
                <li>
                  <strong>PCR diaqnostikası</strong> (polimeraz zəncir
                  reaksiyası) – DNT molekuluna görə mikroorqanizmlərin
                  laboratoriya identifikasiyasının müasir metodu.
                </li>
              </ul>
            </div>

            <h2 id="lechenie-zhzheniya-vo-vlagalishche">
              Vaginada yanmanın müalicəsi
            </h2>
            <div className="green">
              <p>
                <strong>
                  Vaginada yanmanın müalicəsi müayinə və onun dəqiq səbəbinin
                  müəyyən edilməsindən sonra həkim tərəfindən təyin edilməlidir.
                </strong>
              </p>
            </div>

            <p>
              Bir qayda olaraq, ginekoloq həkim şam, məlhəm, vaginal tabletlər
              şəklində lokal preparatlar təyin edir. Müəyyən vəziyyətlərdə
              (məsələn, cinsi yolla keçən infeksiyanın təsdiqlənməsi zamanı)
              ağız yolu ilə qəbul edilən sistemik təsirli preparatlar yazılır.
            </p>

            <div className="green">
              <p>
                <strong>
                  Cinsi yolla keçən infeksiyaların müalicəsini
                  dermatovenerologiya həkimi aparır.
                </strong>
              </p>
            </div>

            <p>
              Vaginada yanma ilə müşayiət oluna bilən iltihabi vaginal
              xəstəliklərin müalicəsi üçün lokal vasitələr infeksiya və
              iltihabın ocağına birbaşa yaxınlıq, həmçinin sistemik (bütün
              orqanizmə təsir edən) yan təsirlərin olmaması hesabına bir sıra
              üstünlüklərə malikdir.
            </p>

            <h3 id="betadin-dlya-lecheniya-zhzheniya-vo-vlagalishche">
              Vaginada yanmanın müalicəsi üçün Betadin®
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
                Nadir hallarda vulva və vaginanın iltihabi xəstəliklərinin
                müalicəsində{" "}
                <a href="https://betadin.ru/encyclopedia/svechi-ot-molochnicy/">
                  povidon-yod
                </a>{" "}
                əsasında{" "}
                <a href="https://betadin.ru/encyclopedia/povidon-jod/">
                  şamlar
                </a>{" "}
                istifadə olunur –{" "}
                <span style={{ color: "#0f780b" }}>
                  <strong>Betadin®</strong>
                </span>
                <sup>
                  <a href="#literatura-9">10</a>
                </sup>
                .{" "}
                <span style={{ color: "#0f780b" }}>
                  <strong>Betadin®</strong>
                </span>{" "}
                preparatının aktiv maddəsi (aktiv{" "}
                <a href="https://betadin.ru/encyclopedia/jod/">yod</a>)
                qram-müsbət və qram-mənfi mikroorqanizmlərin, virusların,
                sadəcillərin, göbələklərin və sporların məhv edilməsinə kömək
                edir. Bu xüsusiyyətlərə görə{" "}
                <span style={{ color: "#0f780b" }}>
                  <strong>Betadin®</strong>
                </span>{" "}
                yanma ilə müşayiət olunan vaginanın əsas xəstəliklərinin
                müalicəsi üçün uyğundur (kompleks terapiyanın tərkibində və ya
                müstəqil olaraq)
                <sup>
                  <a href="#literatura-9">10</a>
                </sup>
                .
              </p>

              <p>
                <strong>Şamların təyini üçün göstərişlər</strong>{" "}
                <span style={{ color: "#0f780b" }}>
                  <strong>Betadin®</strong>
                </span>
                : kəskin və ya xroniki{" "}
                <a href="https://betadin.ru/encyclopedia/vaginit/">vaginit</a>{" "}
                (vagina selikli qişasının iltihabı), vagina və vulvanın
                kandidozu (ağlıq), trixomoniaz, antibakterial və ya hormonal
                terapiyadan sonra vaginanın infeksiyaları, həmçinin
                ginekologiyada əməliyyatlar və manipulyasiyalardan əvvəl
                profilaktika məqsədilə.
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

            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1136/d0f06c09d0d370144d1ea31e2fa6b348362477322fe013b487229104d94ce2d0-650x0/medical-kit-and-bandaid-509398-488-1-15-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1136/d0f06c09d0d370144d1ea31e2fa6b348362477322fe013b487229104d94ce2d0-650x0/medical-kit-and-bandaid-509398-488-1-15-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/images/encyclopedia/treatment.png"
                alt="Şamlarla vaginal yanmanın müalicəsi"
              />
            </picture>

            <p>
              Vaginanın selikli qişasının mürəkkəbləşməmiş iltihabında gündə 1
              dəfə 1 vaginal şam olmaq üzrə 1 həftə ərzində tətbiq etmək
              lazımdır. Xəstəliyin ağır formaları olduqda müalicə daha bir həftə
              davam etdirilə bilər (cəmi 14 gün)
              <sup>
                <a href="#literatura-9">10</a>
              </sup>
              .
              <br />
              Yadda saxlamaq lazımdır ki,{" "}
              <mark
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "#0f780b",
                }}
              >
                <strong>Betadin®</strong>
              </mark>{" "}
              şamlarının tətbiqi hamiləlik və südəmə dövründə əks göstərişdir.{" "}
              <mark
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "#0f780b",
                }}
              >
                <strong>Betadin®</strong>
              </mark>{" "}
              şamlarının tətbiqinin digər məhdudiyyətləri qalxanabənzər vəzi
              xəstəlikləri və yoda qarşı allergik reaksiyalardır
              <sup>
                <a href="#literatura-9">10</a>
              </sup>
              .
            </p>

            <h2 id="profilaktika-poyavleniya-zhzheniya-vo-vlagalishche">
              Vaginada yanmanın yaranmasının profilaktikası
            </h2>
            <div className="list-base">
              <ul>
                <li>
                  Ginekoloqu müntəzəm ziyarət (şikayət olmadıqda ildə 1 dəfə)
                </li>
                <li>Özünümüalicənin istisna edilməsi</li>
                <li>
                  Antibakterial preparatlarla müalicə yalnız həkimin təyinatı
                  ilə
                </li>
                <li>Baryera kontrasepsiyasının istifadəsi (prezervativ)</li>
                <li>
                  Təsadüfi cinsi əlaqələrdən və tez-tez cinsi tərəfdaş
                  dəyişməkdən çəkinmək
                </li>
                <li>
                  Ümumi immunitetin möhkəmləndirilməsi, xroniki xəstəliklərə
                  nəzarət
                </li>
                <li>
                  Düzgün intim gigiyena (neytral və ya turşulu pH-lı xüsusi
                  vasitələr)
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
                  src="/images/decorative/question.jpg"
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <h2 id="chasto-zadavaemye-voprosy">Tez-tez verilən suallar</h2>

            <h3 id="bespokoit-zhzhenie-bez-vydeleniy-iz-polovyh-putey-mozhet-li-eto-byt-simptomom-infekcii">
              Cinsi yollardan ifrazat olmadan yanma narahat edir. Bu,
              infeksiyanın simptomu ola bilərmi?
            </h3>
            <p>
              Bəli, əlbəttə. Cinsi yolla keçən bir çox infeksiya asimptomatik
              gedişə malik ola və ya subkəskin gedişli (yalnız bir simptomla,
              məsələn, cinsiyyət orqanlarında yanma ilə təzahür edə) bilər.
              Təhlükə ondadır ki, vaxtında müalicə olunmayan infeksiya
              yayılmağa, uşaqlığı, uşaqlıq borularını, yumurtalıqları, kiçik
              çanaq orqanlarının hüceyrələrini əhatə edə bilər. Uzunmüddətli
              perspektivdə uşaqlıq əlavələrində yapışma prosesinin yaranması
              təhlükəsi var ki, bu da sonsuzluğa və ya maşayadankənar hamiləliyə
              səbəb ola bilər.
            </p>

            <h3 id="bespokoit-zhzhenie-v-promezhnosti-pri-otsutstvii-patologii-v-mazke-na-floru">
              Florada yaxmada patologiya olmadıqda aralıq nahiyəsində yanma
              narahat edir.
            </h3>
            <p>
              Bu halda cinsi yolla keçən infeksiyaları, vagina və vulvanın
              selikli qişasının atrofik proseslərini, allergik reaksiyanı və
              digər səbəbləri istisna etmək üçün təkrar ginekoloq həkiminə
              müraciət etmək lazımdır. Daha dəqiq PCR-diaqnostika keçirmək
              mümkündür.
            </p>

            <h3 id="mozhno-li-vylechit-zud-i-zhzhenie-vo-vlagalishche-v-domashnih-usloviyah">
              Vaginada qaşınma və yanmanı evdə müalicə etmək olarmı?
            </h3>
            <p>
              Özünümüalicə ilə məşğul olmaq olmaz, əks halda proses yüksələn
              yolla kiçik çanaqın digər orqanlarına yayıla bilər ki, bu da
              fəsadların yaranması, xəstəliyin xroniki mərhələyə keçməsi ilə
              təhlükəlidir.
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
                      Hansı vaginal ifrazatlar olur və normal ifrazatları
                      patoloji olanlardan necə fərqləndirmək olar?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/vaginalnye-vydeleniya/">
                        Ətraflı
                      </a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide swiper-slide-next">
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
                      Vaginit — vaginanın selikli qişasının iltihabı nə vaxt
                      yaranır? Bu xəstəliyin yaranma səbəbləri və müalicəsi.
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/vaginit/">
                        Ətraflı
                      </a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
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
                      Qadınlarda patoloji ifrazatların təxminən 90% halında
                      bakterial vaginoz diaqnozu qoyulur. Bu xəstəlik niyə
                      yaranır və necə müalicə olunur?
                    </p>
                    <p className="slide-more">
                      <a href="https://betadin.ru/encyclopedia/bakterialnyj-vaginoz/">
                        Ətraflı
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="literatura">Ədəbiyyat siyahısı</h2>
            <ol className="literature">
              <li id="literatura-0">
                Savelyeva G. M., Suxix G. T., Serov V. N., Radzinskiy V. E Milli
                rəhbərlik «Ginekologiya» // GEOTAR-Media 2020, Moskva.
              </li>
              <li id="literatura-1">
                Kliniki tövsiyələr «Uşaqlıq boynunun, vaginanın, vulvanın
                iltihabi xəstəlikləri»// ROAG, 2021.
              </li>
              <li id="literatura-2">
                Petersen E.E. Mamalıq və ginekologiyada infeksiyalar// MEDpress
                inform, Moskva 2007.
              </li>
              <li id="literatura-3">
                Kliniki tövsiyələr «Xlamidiya infeksiyası»
              </li>
              <li id="literatura-4">
                Kliniki tövsiyələr «Qonokok infeksiyası» 2021.
              </li>
              <li id="literatura-5">
                Kliniki tövsiyələr «Urogenital trixomoniaz» 2021.
              </li>
              <li id="literatura-6">
                Kliniki tövsiyələr «Anogenital herpetik viral infeksiya» 2021.
              </li>
              <li id="literatura-7">
                Qadınlarda cinsi yollardan patoloji ifrazatlarla müşayiət olunan
                xəstəliklərin diaqnostikası və müalicəsi üzrə kliniki
                tövsiyələr, 2019.
              </li>
              <li id="literatura-8">
                Kliniki tövsiyələr «Qadınlarda menopauza və klimakterik
                vəziyyət»// ROAG 2021.
              </li>
              <li id="literatura-9">
                Betadin® preparatının tibbi tətbiqi üzrə təlimat,
                suppozitorilər, QN: P№015282/01.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
