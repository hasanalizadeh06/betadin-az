 'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function RanySInfekciejAz() {
  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Скроллинг40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Скроллинг80');
        }
      },
    };

    const triggered: Triggered = {
      40: false,
      80: false,
    };

    const checkScroll = () => {
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
          console.log(percent);
        }
      }

      if (Object.values(triggered).every((v) => v)) {
        window.removeEventListener('scroll', checkScroll);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <main>
      <article>
        {/* Header Section */}
        <div className="container-page-header">
          <div className="container">
            {/* Breadcrumb Navigation */}
            <div className="page-header page-header-breadcrumbs">
              <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/">
                    <span property="name">Ana səhifə</span>
                  </a>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/encyclopedia/">
                    <span property="name">Ensiklopediya</span>
                  </a>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">İnfeksiyalı (irinli) yaralar</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    İrinli və infeksiyalı yaralar: əlamətlər və müalicə
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp 1x, /icon-230x224.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      height={112}
                      width={115}
                      src="/icon.png"
                      alt="başlıqdakı şəkil"
                      priority
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Yaralar və infeksiyalar</h2>
                <div className="page-header-body">
                  <p>
                    Hər cizik və kəsik tez sağalmır; bəziləri düzgün qulluq olmadan
                    komplikasiyalar yarada bilər. <Link href="/encyclopedia/porezy/">Kəsiklər</Link>
                    və cızıq qulluq tələb edir.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#simptomy-infekcii-v-rane">Əlamətlər</a>
                  </li>
                  <li>
                    <a href="#lechenie-rany-s-infekciey">Müalicə</a>
                  </li>
                  <li>
                    <a href="#profilaktika-ranevyh-infekciy">Yaraların infeksiyadan qorunması</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/frame-655-10-scaled-730x615.webp 1x, /frame-655-10-scaled-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="/frame-655-10-scaled-730x615.webp"
                      alt="İnfeksiyalı yaralar"
                      priority
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#chto-mozhet-stat-prichinoy-inficirovaniya-rany">
                    Yaraya infeksiya verə biləcək səbəblər
                  </a>
                </li>
                <li>
                  <a href="#simptomy-infekcii-v-rane">Yarada infeksiya əlamətləri</a>
                </li>
                <li>
                  <a href="#oslozhnenie-ranevoy-infekcii-esli-ee-ignorirovat">
                    Əgər infeksiyanı görməməzlikdən gəlsəniz nələr baş verə bilər
                  </a>
                </li>
                <li>
                  <a href="#lechenie-rany-s-infekciey">İnfeksiyalı yaranın müalicəsi</a>
                </li>
                <li>
                  <a href="#betadin-povidon-yod-dlya-lecheniya-ranevyh-infekciy">
                    Betadin® (povidon-yod) — yaraların müalicəsində
                  </a>
                </li>
                <li>
                  <a href="#profilaktika-ranevyh-infekciy">Yaraların infeksiyadan qorunması</a>
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

        {/* Fixed Navigation */}
        <nav className="nav-content nav-content-fixed nav-content-title-hidden">
          <ul>
            <li>
              <a href="#chto-mozhet-stat-prichinoy-inficirovaniya-rany">
                Yaraya infeksiya verə biləcək səbəblər
              </a>
            </li>
            <li>
              <a href="#simptomy-infekcii-v-rane">Yarada infeksiya əlamətləri</a>
            </li>
            <li>
              <a href="#oslozhnenie-ranevoy-infekcii-esli-ee-ignorirovat">
                Əgər infeksiyanı görməməzlikdən gəlsəniz nələr baş verə bilər
              </a>
            </li>
            <li>
              <a href="#lechenie-rany-s-infekciey">İnfeksiyalı yaranın müalicəsi</a>
            </li>
            <li>
              <a href="#betadin-povidon-yod-dlya-lecheniya-ranevyh-infekciy">
                Betadin® (povidon-yod) — yaraların müalicəsində
              </a>
            </li>
            <li>
              <a href="#profilaktika-ranevyh-infekciy">Yaraların infeksiyadan qorunması</a>
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

        {/* Disclaimer */}
        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətinin əvəzi deyil</div>
        </div>

        {/* Main Content */}
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              Hətta kiçik yara belə patogen mikroorqanizmlər tərəfindən infeksiyalaşdıqda
              təhlükəli ola bilər. Həkimlər bu vəziyyəti <strong>yarada infeksiya</strong> adlandırırlar.
              Toxuma infeksiyalaşması yalnız zədələnmiş sahədə deyil, bəzən bütün orqana təsir edə
              və ciddi nəticələrə səbəb ola bilər.
            </p>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={505}
                  width={503}
                  src="/circle-503x505.webp"
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-1-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-1-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/medical-kit-and-bandaid-509398-488-1-1-650x325.webp"
                alt="İrinli yara"
              />
            </picture>

            {/* Section: Causes */}
            <h2 className="h2" id="chto-mozhet-stat-prichinoy-inficirovaniya-rany">
              Yaraya infeksiya verə biləcək səbəblər
            </h2>
            <p>
              Ev şəraitində alınan xəsarətlər və kəsiklər infeksiyalaşma riski yüksək olan qruplardandır
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">1</a>
              </sup>
              . İlk başlarda zədələnmə kiçik görünə bilər, lakin düzgün və vaxtında qulluq edilməzsə
              infeksiya qoşula bilər. Adətən belə komplikasiyalar yara və tikişə düzgün qulluq
              olunmadıqda yaranır. Xroniki infeksiya mənbələrinin mövcudluğu da komplikasiya riskini
              artıra bilər
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <div className="list-base">
              <p>
                <strong>
                  Ümumilikdə həkimlər yaraların sağalmasını çətinləşdirən və infeksiyanın qoşulmasına
                  səbəb olan əsas faktorları belə qruplaşdırırlar
                </strong>
                <sup>
                  <a href="#spisok-literatury">1</a>
                </sup>
              </p>
              <ul>
                <li>Mikrubların yaraya eyni anda çox miqdarda düşməsi (mikrob yükü).</li>
                <li>Orqanizmin müdafiə qabiliyyətinin zəifləməsi (soyuqlama, xroniki xəstəliklər kimi).</li>
                <li>Zədələnmiş sahədə qan dövranının pozulması (məsələn, tourniquet istifadəsi).</li>
                <li>Zədənin alınma şəraiti: travmatik şok və ya çoxlu qan itirilməsi.</li>
                <li>Yaranın böyük ölçülü olması və yad cisim qalıqlarının mövcudluğu.</li>
              </ul>
            </div>

            {/* Symptoms */}
            <h2 className="h2" id="simptomy-infekcii-v-rane">
              Yarada infeksiya əlamətləri
            </h2>
            <p>
              <strong>
                Infeksiyanın əsas əlamətləri: qızartı, şişmə, ağrı və yumşaq toxumalarda istiliyin artması
              </strong>
              .
            </p>
            <p>
              Yarada patogen bakteriyaların çoxalması dərhal iltihabi reaksiyaya səbəb olur.
              Reaksiya yaranın olduğu ərazidən daha geniş sahəyə yayıla bilər. Bu, ümumi zəhərlənmə
              əlamətləri ilə müşayiət oluna bilər: <strong>hərarət, ürəkbulanma, üşütmə, zəiflik</strong>.
            </p>

            <div className="list-base">
              <p>
                Patogenlərin növünə görə reaksiyalar fərqli ola bilər. Aşağıdakılar xüsusilə
                diqqət tələb edir:
              </p>
              <ul>
                <li>
                  <strong>Streptokokk infeksiyasında</strong> daha maye irin əmələ gəlir.
                </li>
                <li>
                  <strong>Stafilokokk infeksiyasında</strong> yara kənarlarında toxuma nekrozu, irin isə
                  daha sıx konsistensiyalı olur.
                </li>
                <li>
                  <strong>Psevdomonas və bağırsaq bakteriyaları</strong> toxuma ölümünə və yaşılmtıl,
                  xoşagəlməz iyli irin əmələ gətirə bilər.
                </li>
                <li>
                  <strong>Qram-mənfi flora və anaeroblar</strong> qan və qanlı qarışıqlı, pis iyli ayrıntı
                  əmələ gətirə bilərlər.
                </li>
              </ul>
            </div>

            <p>
              İrinli iltihabın ilk əlamətləri adətən əməliyyatdan və ya yaralanmadan 2–3 gün sonra
              ortaya çıxır. Əgər pasiyent antibakterial terapiya alırsa, simptomlar 4–6 günə qədər
              gecikə bilər.
            </p>

            <div className="green">
              <p>
                <strong>Vacib!</strong> Evin xaricində alınan yaradan sonra tetanus əleyhinə vaksinasiya
                etmək tövsiyə olunur. Tetanusun gecikmiş forması bəzi hallarda ölümcül ola bilər
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                .
              </p>
            </div>

            <p>
              İrinli proses inkişaf etdikcə abses (irin toplanması, bağlayıcı toxuma kapsulu ilə
              əhatə olunmuş fokal ocaq) formalaşa bilər. Abses sağlam toxumalara yayılmanı məhdudlaşdırır.
            </p>

            <p>
              <strong>Flegmona</strong> — irinli iltihabın yayılmış formasıdır; o, toxuma boşluqları
              boyunca yayıla və bakteriemiya, sepsis kimi sistemik fəsadlara gətirib çıxara bilər.
            </p>

            {/* Complications */}
            <h2 className="h2" id="oslozhnenie-ranevoy-infekcii-esli-ee-ignorirovat">
              Əgər infeksiyanı görməməzlikdən gəlsəniz — mümkün ağırlaşmalar
            </h2>

            <h3 className="h3" id="bakteriemiya">Bakteremiya</h3>
            <p>
              Bakteremiya — bakteriyaların qan dövranına düşməsi vəziyyətidir. Bu mikroorqanizmlər
              qan dövranı vasitəsilə orqanizmə yayıla bilər və endokardit, osteomielit kimi
              təhlükəli xəstəliklərə səbəb ola bilər.
            </p>

            <h3 className="h3" id="sepsis">Sepsis</h3>
            <p>
              <strong>Sepsis</strong> — mikroorqanizmlərin qan dövranına düşməsinə cavab olaraq
              sistemli iltihabi reaksiya. Bu zaman çox sayda və ya yüksək virulentli mikrob
              qan dövranına daxil olur.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-2-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-2-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/medical-kit-and-bandaid-509398-488-1-2-650x325.webp"
                alt="Sepsis"
              />
            </picture>

            <div className="list-base">
              <p>
                <strong>Sistemli iltihabi reaksiya sindromu (SIRS)</strong> aşağıdakı simptomlardan
                ikisinin və ya daha çoxunun mövcudluğu ilə təsdiqlənir
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                :
              </p>
              <ul>
                <li>Temperaturun 38°C və ya 36°C olması</li>
                <li>Ürək döyüntüsünün dəqiqədə 90-dan çox olması</li>
                <li>Nəfəs sayının dəqiqədə 20-dən çox olması və ya hiperventilyasiya</li>
                <li>Leukosit sayının dəyişməsi: 12*10<sup>9</sup>/l və ya 4*10<sup>9</sup>/l və ya
                  yetkin olmayan leykositlərin 10% olması</li>
              </ul>
            </div>

            <p>
              Sepsis diaqnozu infeksiya mənbəyi və iki və ya daha çox SIRS əlamətinin mövcudluğu
              ilə qoyulur.
            </p>

            <p>
              <strong>Ağır sepsis</strong> çoxorqanlı çatışmazlıqla müşayiət olunur. <strong>Septik şok</strong>
              isə dövran və metabolizmdə ciddi pozuntularla xarakterizə olunur və xəstə dərhal
              reanimasiya şöbəsinə yerləşdirilməlidir.
            </p>

            <h3 className="h3" id="mestnye-oslozhneniya-ranevoy-infekcii-">Yerli ağırlaşmalar:</h3>
            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Akut</strong>
                </p>
                <p>irinli kol, flegmona</p>
              </div>
              <div className="column">
                <p>
                  <strong>Xronik</strong>
                </p>
                <p>yumşaq toxuma fistulları, yatma yaraları, bakterial qangrena, osteomielit</p>
              </div>
            </div>

            <p>
              Lokal ağırlaşmalar həm müalicəsiz, həm də yanlış müalicə nəticəsində yarana bilər.
              Məsələn, irin tıxanıqlıq və ya yarın sıx bağlanması nəticəsində yaranan qapanmış axıntı
              uzaqda yerləşən irinli ocağın formalaşmasına səbəb ola bilər.
            </p>

            {/* Treatment */}
            <h2 className="h2" id="lechenie-rany-s-infekciey">İnfeksiyalı yaranın müalicəsi</h2>
            <div className="list-base">
              <p>
                <strong>İnfeksiyalı yaralar adekvat cərrahi emal tələb edir</strong>
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                :
              </p>
              <ul>
                <li>Yaranın geniş miqyasda kəsilməsi (debridman)</li>
                <li>Bütün cib və irin yığıntılarının açılması</li>
                <li>Necə canlı olmayan toxumaların kəsilməsi</li>
                <li>Effektiv drenajın təmin edilməsi</li>
              </ul>
            </div>

            <p>Sonra yaranın mərhələsinə uyğun olaraq lokal terapiya təyin edilir.</p>

            <p>
              Lokal müalicənin məqsədi yaranı təmizləmək, sağalma üçün əlverişli şərait yaratmaq və
              patogen mikrofloranın çoxalmasını dayandırmaqdır
              <sup>
                <a href="#spisok-literatury">3</a>
              </sup>
              . Ənənəvi antiseptiklərə metilen mavisi, furatsilin, yod, hidrogen peroksid daxildir.
              Lakin 3% hidrogen peroksid yalnız müvəqqəti təsir göstərir və sağalmaya mane ola bilər
              <sup>
                <a href="#spisok-literatury">6</a>
              </sup>
              . Müasir antiseptiklər, məsələn povidon-yod (Betadin®), etibarlı dezinfeksiyaedici
              effektə malikdir.
            </p>

            {/* Betadin section */}
            <h2 className="h2" id="betadin-povidon-yod-dlya-lecheniya-ranevyh-infekciy">
              Betadin® (povidon-yod) — yaraların infeksiyalarının müalicəsində
            </h2>

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
                    loading="lazy"
                    width={927}
                    height={916}
                    src="/banner-betadin-927x916.webp"
                    alt="Betadin məhlulu"
                  />
                </picture>
              </div>
              <p>
                Povidon-yod qram-mənfi və qram-müsbət bakteriyalar, protozoalar, viruslar və
                göbələklərə qarşı aktivdir. Cərrahiyyədə povidon-yod məhlulunun əməliyyatdan əvvəl
                tətbiqi yaranın irinlənmə ehtimalını azaldır. Müxtəlif dozaj və formalar yaraların
                irin ayırmasının, ödemin və ağrının azalmasına kömək edir
                <sup>
                  <a href="#spisok-literatury">7</a>
                </sup>
                .
              </p>
              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  Təlimat
                </a>
              </p>
            </div>

            <div className="list-base">
              <p>
                <strong>Cərrahiyyədə povidon-yod (Betadin®) aşağıdakı formalarda tətbiq olunur</strong>
                <sup>
                  <a href="#spisok-literatury">9</a>
                </sup>
                :
              </p>
              <ul>
                <li>10% məhlul xarici tətbiq üçün</li>
                <li>10% məlhəm</li>
                <li>Drenaj sistemlərində tətbiq üçün 10% məhlul 10–100 dəfə seyreltilə bilər</li>
                <li>Vaginal suppositoriyalar — 200 mg</li>
              </ul>
            </div>

            <p>
              <strong>Betadin məhlulu</strong> əməliyyat sahəsini dezinfeksiya etmək və cərrahi
              prosedurdan əvvəl tibb personalının əllərini emal etmək üçün istifadə olunur.
            </p>

            <p>
              <strong>Məhlul və məlhəm</strong> postoperativ yaraların və tikişlərin dezinfeksiyaedici
              baxım və müalicəsində tətbiq olunur.
            </p>

            <p>
              Tədqiqatlara görə, Betadin ilə müalicə olunan infeksiyalı yaralarda ilk 5–7 gün
              ərzində ödem və irinli axıntı azalıb, ağrı yüngülləşir
              <sup>
                <a href="#spisok-literatury">8</a>
              </sup>
              .
            </p>

            <p>
              Vaginal suppositoriyalar planlı ginekoloji əməliyyatlardan əvvəl və ya sonra
              irinli ağırlaşmaların profilaktikası üçün tətbiq edilə bilər.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-7-1-650x325.webp 1x, /istockphoto-1341663000-2048x2048-2-7-1-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="/istockphoto-1341663000-2048x2048-2-7-1-650x325.webp"
                alt="Ev şəraitində irinli yaranın emalı"
              />
            </picture>

            {/* Video Section */}
            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                Yaraları necə düzgün işləməyi qısa videoda izləyin:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="iframe_desc">
                Bu videoda yaraları mikrobardan necə qorumaq və istifadədə narahatlıq hiss etməmək üçün
                hansı vasitələrdən istifadə ediləcəyini öyrənəcəksiniz.
              </div>
            </div>

            {/* Prevention */}
            <h2 className="h2" id="profilaktika-ranevyh-infekciy">Yaraların infeksiyadan qorunması</h2>
            <p>
              Ev şəraitində yaranın infeksiyalaşmasının qarşısını almaq üçün dərhal yaranı antiseptik
              məhlulla yuyun. Spirtli məhlulları yalnız yaranın kənarlarında istifadə etmək məsləhətdir.
            </p>

            <p>
              Planlı əməliyyatlarda öncədən xroniki infeksiya mənbələrini aradan qaldırmaq və dəri
              emalını düzgün aparmaq vacibdir. İnvasiv prosedurlardan əvvəl xəstə və personalın dəri
              dezinfeksiyası aparılmalıdır.
            </p>

            <p>
              Əməliyyatdan sonra irinli ağırlaşmaların profilaktikası üçün qısa kurs antibiotik
              təyin edilə bilər. Əgər irinli komplikasiya yaranarsa, vaxtında fokusun sanasiyası
              aparılmalıdır. İrinli yaraların müalicəsi ixtisaslaşmış tibbi müəssisələrdə həyata keçirilir.
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Yaraların emalı</strong>
                </p>
                <p>
                  Yaraları düzgün emal etməklə complicasiyaların qarşısını necə almaq olar.
                </p>
                <a href="/encyclopedia/obrabotka-ran/" className="btn btn-green" target="_blank">
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="/obrabotka-ran-prevyu-310x210.webp 1x, /obrabotka-ran-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={210}
                  width={310}
                  src="/obrabotka-ran-prevyu-310x210.webp"
                  alt="Yaraların emalı - prevyu"
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
                  loading="lazy"
                  height={542}
                  width={558}
                  src="/quastion-558x542.webp"
                  alt="Dekorativ elementlər"
                />
              </picture>
            </div>

            {/* FAQ */}
            <h2 className="h2" id="chasto-zadavaemye-voprosy">Tez-tez verilən suallar</h2>

            <h3 className="h3" id="chem-mozhno-obrabotat-bytovuyu-ranu">Ev şəraitində yaraları nə ilə emal etmək olar?</h3>
            <p>
              <strong>Yaralanmadan dərhal sonra yaranı yumaq lazımdır.</strong>
            </p>
            <p>
              Bu mərhələdə əsas məqsəd çox miqdarda maye ilə mexaniki şəkildə çirklənməni aradan
              qaldırmaq və yaradakı bakteriya sayını azaltmaqdır. Xlorheksidin məhlulu, 0.9% NaCl və
              soyudulmuş qaynadılmış su uyğundur. Sonra yaraya 10% Betadin tətbiq edib təmiz sarğı
              qoyun; kiçik kanallar üçün tibbi yara lenti istifadə edilə bilər.
            </p>
            <p>
              Kiçik yaralar və cızıq üçün 10% seyrəltilməmiş Betadin məhlulu istifadə oluna bilər.
            </p>
            <p>
              Böyük yaralar və güclü qanaxma zamanı dərhal həkimə müraciət edin.
            </p>

            <h3 className="h3" id="chto-luchshe-vybrat-dlya-prizhiganiya-ssadin">Cızıq üçün nə istifadə etmək məsləhətdir?</h3>
            <p>
              Əksər evdə "zelyonka", fukortsin və ya 5% spirtli yod məhlulu olur. Spirtli yod məhlulu
              birbaşa yara üzərinə tətbiq olunmaz; zelyonka və fukortsin dərini ciddi şəkildə boyaya bilər
              və yanma hissi verə bilər. Müasir seçim isə polismer əsaslı yodlu sulu məhlul — Betadin®
              dir; bu, dərini ləkələmədən, yanma hissi yaratmadan geniş spektrdə təsir göstərir.
            </p>

            <h3 className="h3" id="kak-pacient-mozhet-umenshit-risk-razvitiya-ranevoy-infekcii">Xəstə infeksiyanın riskini necə azalda bilər?</h3>
            <p>Ev xəsarətlərində zədələnmiş sahəni düzgün emal edin.</p>
            <p>Cərrahi müdaxilə sonra həkimin tövsiyələrinə ciddi riayət edin.</p>
            <p>
              Əgər zonada güclü, döyünən ağrı, şişkinliyin artması və ya yaranın ətrafında
              hərarətin yüksəlməsi müşahidə olunarsa — dərhal həkimə müraciət edin.
            </p>

            {/* Author Section */}
            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Moshkova Elena Mixaylovna</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalənin müəllifi</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-203x203.webp 1x, /moshkova-novyj-406x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  height={203}
                  width={203}
                  src="/moshkova-novyj-203x203.webp"
                  alt="Məqalənin müəllifi"
                />
              </picture>
            </div>

            {/* Related Articles Section */}
            <div className="h2 h2-read-more" id="chitat-po-teme">Mövzu üzrə oxu</div>
            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp 1x, /maz-dlya-zazhivleniya-ran-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp"
                        alt="Yaraların sağalması üçün məlhəm - prevyu"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yaraların sağalması üçün məlhəmlər</strong>
                    </p>
                    <p>Hansı məlhəmlər var və ən təsirli necə seçilməlidir.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/maz-dlya-zazhivleniya-ran/">Ətraflı</a>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/obrabotka-ran-prevyu-246x166.webp 1x, /obrabotka-ran-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/obrabotka-ran-prevyu-246x166.webp"
                        alt="Yaraların emalı - prevyu"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yaraların emalı</strong>
                    </p>
                    <p>Yaraları düzgün emal etməklə komplikasiyaların qarşısını almaq olar.</p>
                    <p className="slide-more">
                      <a href="/encyclopedia/obrabotka-ran/">Ətraflı</a>
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
                        loading="lazy"
                        height={166}
                        width={246}
                        src="/povidon-jod-prevyu-246x166.webp"
                        alt="Povidon-yod - prevyu"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Povidon-yod</strong>
                    </p>
                    <p>
                      Povidon-yodun xüsusiyyətləri və tətbiq sahəsi. Betadin® həll, məlhəm və
                      suppositoriyaların istifadə qaydası.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/povidon-jod/">Ətraflı</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* References Section */}
            <h2 className="h2" id="spisok-literatury">Ədəbiyyat siyahısı</h2>
            <ol className="literature">
              <li id="literature-0">
                Пиксин И. Н., Пигачев А. В., Кисткин А. И., Ипполитов И. Ю. Раны и раневая
                инфекция»// Учебное пособие// Саранск 2012.
              </li>
              <li id="literature-1">
                Руднов В.А. Клинические рекомендации по диагностике и лечению тяжелого сепсиса и
                септического шока в лечебно-профилактических организациях Санкт-Петербурга//
                Вестник анестезиологии и реаниматологии 2016;13(5):88-94.
              </li>
              <li id="literature-2">
                Ключевский В.В. Хирургия повреждений//Руководство для фельдшеров, хирургов,
                травматологов// ОАО Рыбинский Дом печати 2004, Ярославль.
              </li>
              <li id="literature-3">
                Инструкция по медицинскому применению метиленовый синий, РЛС.
              </li>
              <li id="literature-4">
                Инструкция по медицинскому применению фурацилин, РЛС.
              </li>
              <li id="literature-5">
                Инструкция по медицинскому применению перекись водорода, РЛС.
              </li>
              <li id="literature-6">
                Кудыкин М.Н. Повидон-йод в основе лечения инфицированных ран// РМЖ, №34 от
                18.12.2013.
              </li>
              <li id="literature-7">
                Михальский В. В., Богданов А. Е., Жилина С. В., Привиденцев А. И., Аникин А. И.,
                Ульянина А. А.. Применение препарата Бетадин в лечении инфицированных ран// РМЖ
                №29 от 23.12.2010.
              </li>
              <li id="literature-8">
                Инструкция по медицинскому применению ЛП Бетадин® (раствор, мазь, суппозиторий)
                РУ П N015282/03, РУ П N015282/02, РУ П N015282/01.
              </li>
              <li id="literature-9">
                РМЖ №25 от 15.12.2005 «Стоит ли так активно использовать 3% раствор перекиси
                водорода при хирургических вмешательствах?» Н. Трошин.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
