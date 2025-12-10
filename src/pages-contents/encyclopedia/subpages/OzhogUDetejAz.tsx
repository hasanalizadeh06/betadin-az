'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

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

export default function OzhogUDetej() {
  // useState for scroll triggers was unused; the effect uses a local `triggered` object.

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
                    <span property="name">Əsas</span>
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
                  <span property="name">Yanıq: ilk yardım və müalicə</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    Uşaqlarda yanıqlar: ilk yardım və effektiv müalicə
                  </h1>
                  <picture>
                    <source
                      srcSet="/icon-115x112.webp 1x, /icon-230x224.webp 2x"
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
                <h2 className="page-header-subtitle">Yanıq növləri</h2>
                <div className="page-header-body">
                  <p>
                    Yanıq — termal, kimyəvi, elektrik və ya şüa təsirindən nəticələnən dəri və toxumaların zədələnməsi.
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#pervaya-pomoshch-pri-ozhoge">Yanıqlarda ilk yardım</a>
                  </li>
                  <li>
                    <a href="#lechenie-ozhogov">Yanıqların müalicəsi</a>
                  </li>
                  <li>
                    <a href="#faza-vospaleniya">İşlənmə üçün antiseptik</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-4-730x615.webp 1x, /kartinka-banner-4-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-4-1460x1230.webp"
                      alt="Uşaqlarda yanıq: ilk yardım, məlhəm, krem, müalicə"
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
                  <a href="#stepeni-tyazhesti-ozhogov">Yanıqların ağırlıq dərəcələri</a>
                </li>
                <li>
                  <a href="#pervaya-pomoshch-pri-ozhoge">Uşaqda yanıqda ilk yardım</a>
                </li>
                <li>
                  <a href="#lechenie-ozhogov">Yanıqların müalicəsi</a>
                </li>
                <li>
                  <a href="#kak-predotvratit-ozhogi-u-detey">Uşaqlarda yanıqların qarşısını necə almaq olar</a>
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
              <a href="#stepeni-tyazhesti-ozhogov">Yanıqların ağırlıq dərəcələri</a>
            </li>
            <li>
              <a href="#pervaya-pomoshch-pri-ozhoge">Uşaqda yanıqda ilk yardım</a>
            </li>
            <li>
              <a href="#lechenie-ozhogov">Yanıqların müalicəsi</a>
            </li>
            <li>
              <a href="#kak-predotvratit-ozhogi-u-detey">Uşaqlarda yanıqların qarşısını necə almaq olar</a>
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
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətini əvəz etmir</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <h3 className="h3" id="vidy-ozhogov">
              Yanıq növləri
            </h3>

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

            <div className="list-base">
              <ul>
                <li>Termal</li>
                <li>Kimyəvi</li>
                <li>Elektrik</li>
                <li>Günəş</li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-2-5-650x150.webp 1x, /istockphoto-1341663000-2048x2048-2-2-5-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-2-5-1300x300.webp"
                alt="Yanıq növləri"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="termicheskie-ozhogi">
              Termal yanıqlar
            </h3>

            <p>
              Ən çox{' '}
              <a href="/encyclopedia/termicheskij-ozhog-kozhi/" title="Dərinin termal yanığı">
                termal yanıqlar
              </a>
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              {' '}rast gəlinir. Onlar dərinin isti mayələr, qaynar su, buxar, qızmış səthlərlə təması və intensiv istilik şüalanmasından, həmçinin alovla qarşılıqlı əlaqədən yaranır.
            </p>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Dərinin termal yanığı</strong>
                </p>
                <p>
                  Termal yanıq yüksək temperaturun dəri və aşağı toxumalara təsirindən yaranır. Necə ilk yardım göstərmək lazımdır və bu cür zədələnmələr nə ilə işlənir?
                </p>
                <a
                  href="/encyclopedia/termicheskij-ozhog-kozhi/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="/termicheskij-ozhog-kozhi-prevyu-310x210.webp 1x, /termicheskij-ozhog-kozhi-prevyu-620x420.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/termicheskij-ozhog-kozhi-prevyu-620x420.webp"
                  alt="Dərinin termal yanığı-önbaxış"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h3 className="h3" id="himicheskie-ozhogi">
              Kimyəvi yanıqlar
            </h3>

            <p>
              <strong>Kimyəvi yanıqlar</strong>
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              {' '}turşu, qələvi məhlullarının dəriyə düşməsi nəticəsində yaranır. Zədələyici təsir aqressiv mayenin dəriyə düşməsi anından kimyəvi reaksiyanın başa çatmasına qədər başlayır. Kimyəvi yanıqların sərhədləri aydındır. Azot turşusunun təsirindən sarı-yaşıl rəngli qabıq (qabıq) əmələ gəlir, kükürd turşusundan – qara rəngli, xlorid turşusundan – açıq sarı rəngli.
            </p>

            <p>Məişət kimyası uşaqlar üçün əlçatmaz yerdə saxlanmalıdır!</p>

            <h3 className="h3" id="elektricheskie-ozhogi">
              Elektrik yanıqları
            </h3>

            <p>
              <strong>Elektroyanıqlar</strong> – elektrotravmanın yerli təzahürləri
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Bir qayda olaraq, elektroyanıqlar və elektrotravma birləşir. Elektrik cərəyanının dəri və yumşaq toxumalara zədələyici təsiri çevrilmiş elektrik enerjisinin istilik enerjisinə cavab olaraq yaranır.
            </p>

            <p>Kiçik uşaqlar elektrik cihazlarına, rozetkалara və çılpaq naqillərə çıxış əldə etməməlidirlər.</p>

            <h3 className="h3" id="solnechnye-ozhogi">
              Günəş yanıqları
            </h3>

            <p>
              <strong>Günəş yanığı</strong>, və ya günəş dermatiti, ultrabənövşəyi (UV) şüalanmanın dəriyə uzun müddətli təsirindən yaranır. Dəri örtüklərinin zədələnmə dərəcəsi şüalanmanın müddətindən və dərinin fototipindən asılıdır. Dəri nə qədər açıq olsa, günəş yanığı bir o qədər tez yarana bilər. Ona görə də günəşə çıxmazdan əvvəl zərif uşaq dərisini xüsusi qoruyucu vasitələrlə işləmək çox vacibdir.
            </p>

            <h2 className="h2" id="stepeni-tyazhesti-ozhogov">
              Yanıqların ağırlıq dərəcələri
            </h2>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-22-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-22-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-22-1300x650.webp"
                alt="Yanıqların ağırlıq dərəcələri"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="ozhog-i-stepeni">
              I dərəcə yanıq
            </h3>

            <p>
              Zədələyici amilə təmasdan dərhal sonra ağrı, yanma yaranır, dəri qızarır, aqressiv təsirə məruz qalan dəri örtüklərinin şişkini görünür.
            </p>

            <h3 className="h3" id="ozhog-ii-stepeni">
              II dərəcə yanıq
            </h3>

            <p>
              II dərəcə yanıqlarda dərinin səthi təbəqəsinin — epidermisinin ölümü baş verir. Dəri parlaq qırmızı rəng alır, şişkinlik görünür, sarımtıl rəngli şəffaf məzmunlu qabarcıqlar əmələ gəlir. Qabarcıqlar açılır, parlaq çəhrayı rəngli yara səthini açır.
            </p>

            <p>
              II dərəcə kimyəvi yanığın xüsusiyyəti qabarcıqların əmələ gəlməməsidir. Dərhal ölmüş epidermis təbəqəsindən qabıq əmələ gəlir və ya səthi dəri təbəqəsi tamamilə rədd edilir.
            </p>

            <h3 className="h3" id="ozhogi-iii-a-stepeni">
              III-a dərəcə yanıqlar
            </h3>

            <p>
              Təkcə epidermisin deyil, həm də dermanın üst təbəqələrinin ölümü baş verir. Qabarcıqlar da əmələ gələ bilər.
            </p>

            <p>
              Buxar və ya isti su ilə qaynayanda III-a dərəcə yanığın əlaməti ağımtıl-boz rəngli örtük, nəm qabıqdır.
            </p>

            <p>Alovla təmasda – quru açıq qəhvəyi qabıq.</p>

            <h3 className="h3" id="ozhogi-iii-b-stepeni">
              III-b dərəcə yanıqlar
            </h3>

            <p>
              Bütün dəri qalınlığının, bəzən də dərialtı piy toxumasının ölümü ilə xarakterizə olunur.
            </p>

            <p>
              Buxar və ya isti su ilə yanıqlarda dəri yumşaq olur, konsistensiyasına görə açıq boz rəngli xəmirə bənzəyir.
            </p>

            <p>Alovla yanıqlarda tünd qəhvəyi rəngli bərk qabıq əmələ gəlir.</p>

            <h3 className="h3" id="ozhogi-iv-stepeni">
              IV dərəcə yanıqlar
            </h3>

            <p>
              Bu mərhələdə təkcə dəri və dərialtı piy toxuması deyil, həm də altında yerləşən əzələlərin qişaları (fassiya), əzələlər, vətərlər və sümüklər ölür. Qabıq qalın, bərk kömürləşmə əlamətləri ilə.
            </p>

            <p>
              Turşu ilə ağır yanıqlarda quru bərk qabıq əmələ gəlir, qələvi ilə yanıqlarda ilk bir neçə gün qabıq yumşaq olur, sonra ya irinli ərimə keçirir, ya da quruyur.
            </p>

            <h2 className="h2" id="pervaya-pomoshch-pri-ozhoge">
              Yanıqda ilk yardım
            </h2>

            <p>Alınan yanığın növündən asılı olaraq ilk yardım alqoritmi bir qədər fərqlənəcək.</p>

            <h3 className="h3" id="pervaya-pomoshch-pri-termicheskih-ozhogah">
              Termal yanıqlarda ilk yardım
            </h3>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>Termal amelin təsirini dayandırmaq.</strong>
                  </p>
                  <p>
                    Qızmış əşya, buxar və ya isti maye ilə təmasda dərhal zədələyici təsir dayandırılır. Açıq alovdan paltar alovlanıbsa – onu su ilə tökürlər, brезент və ya yorğan atırlar.
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Zədələnmiş sahəni soyutmaq.</strong>
                  </p>
                  <p>
                    Termal təsirdən sonra yanmış toxumaları soyutmaq tövsiyə olunur (soyuq su, qar, buzla). Bu tədbir toxumaların temperaturunu azaldır və zədələyici istilik təsirini zəiflədir.
                  </p>
                </div>
              </div>
              <div className="line">
                <p>
                  <strong>Yanmış sahədən paltarı çıxarmaq lazım deyil, onu kəsib ehtiyatla götürmək lazımdır</strong>
                  . Həkim öncəsi mərhələdə <strong>yanığa yapışmış paltarı</strong> sarğı qoymazdan əvvəl{' '}
                  <strong>çıxarmırlar</strong>, qabarcıqları dəlmirlər.
                </p>
              </div>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-3-9-650x150.webp 1x, /istockphoto-1341663000-2048x2048-2-3-9-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-3-9-1300x300.webp"
                alt="Termal yanıqlarda ilk yardım"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3" id="pervaya-pomoshch-pri-elektroozhogah">
              Elektroyanıqlarda ilk yardım
            </h3>

            <p>
              <strong>Elektrik yanıqları üçün</strong> keçiricilərin hissəciklərinin yanması nəticəsində yanmış sahələrin kömürlənməsi və metallaşması xarakterikdir. Elektroyanıqlar paltarın alovlanması səbəbindən tez-tez termal yanıqlarla birləşir.
            </p>

            <p>
              <strong>Dərinin elektrik ilə zədələnməsində lazımdır:</strong>
            </p>

            <div className="big">
              <div className="line">
                <div>
                  <p>
                    <strong>Elektrik cərəyanının təsirini dayandırmaq.</strong>
                  </p>
                  <p>
                    Cihazı və ya naqili elektrik qidasından söndürmək, cərəyan keçirən naqilləri zərərçəkəndən atmaq, çılpaq naqillərdən uzaqlaşdırmaq. İlk yardım göstərən şəxs öz təhlükəsizliyi haqqında düşünməlidir. Elektriki söndürmək üzrə manipulyasiya yerinə yetirməzdən əvvəl əlləri quru parça ilə bükməк, taxta, rezin xalça və ya elektrik keçirməyən başqa hər hansı bir əşyanın üstündə dayanmaq lazımdır
                    <sup>
                      <a href="#spisok-literatury">1</a>
                    </sup>
                    .
                  </p>
                </div>
              </div>
              <div className="line">
                <p>
                  Zərərçəkəni cərəyan mənbəyindən təcrid etdikdən sonra lazım gəldikdə{' '}
                  <strong>süni ağciyərlərin ventilyasiyası və qapalı ürək massajı</strong> aparmaq. Zərərçəkənin burnuna 10% ammonyak məhlulu ilə pambıq yaxınlaşdırmaq
                  <sup>
                    <a href="#spisok-literatury">1</a>
                  </sup>
                  .
                </p>
              </div>
              <div className="line">
                <p>
                  Yanmış sahəni steril sarğı ilə <strong>örtmək</strong>.
                </p>
              </div>
            </div>

            <h3 className="h3" id="pervaya-pomoshch-pri-himicheskih-ozhogah">
              Kimyəvi yanıqlarda ilk yardım
            </h3>

            <div className="big">
              <div className="line">
                <p>
                  Mümkün qədər tez aqressiv maddə ilə islanmış <strong>paltarı çıxarmaq</strong>.
                </p>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Zədələnmiş sahəni yumaq.</strong>
                  </p>
                  <p>
                    10-15 dəqiqə ərzində zərərçəkmiş sahələri çoxlu axar soyuq su ilə yuyurlar. Əgər kimyəvi maddənin dəri ilə təması müəyyən müddət davam edibsə, yuma müddəti 40 dəqiqəyə qədər artırılır.
                  </p>
                </div>
              </div>
              <div className="line">
                <div>
                  <p>
                    <strong>Kimyəvi maddələri neytrallaşdırmaq.</strong>
                  </p>
                  <p>
                    Turşu ilə zədələnmələrdə 2-3% natrium hidrokarbonat (çörək sodasının) məhlulu istifadə olunur, qələvilərin təsirində 2-5% sirkə və ya limon turşusu məhlulu tətbiq edilir.
                  </p>
                </div>
              </div>
              <div className="line">
                <p>
                  Zədələnmiş sahələrə quru aseptik sarğı <strong>qoymaq</strong>.
                </p>
              </div>
            </div>

            <h3 className="h3" id="pervaya-pomoshch-pri-solnechnyh-ozhogah">
              Günəş yanıqlarında ilk yardım
            </h3>

            <p>
              <strong>Günəş</strong> yanığında ilk yardım dəriyə sakitləşdirici və sağaldıcı vasitələrin vurulmasından ibarətdir. Qabarcıqların yaranması zamanı tanin məhlulu və ya palıd qabığının qaynatması ilə nəm-quruyan sarğılar tövsiyə etmək olar
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              . Dermatoloqlar həmçinin allergiyadan vasitələrin (antihistamin vasitələr) qəbulunu məsləhət göstərirlər
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="lechenie-ozhogov">
              Yanıqların müalicəsi
            </h2>

            <div className="list-base">
              <p>
                Müalicə taktikasını müəyyən etmək və zədələnmiş toxumaların bərpasını proqnozlaşdırmaq üçün{' '}
                <strong>yanığın səbəbindən</strong> əlavə müəyyən etmək lazımdır:
              </p>
              <ul>
                <li>
                  <strong>Zədələnmənin dərinliyi</strong>. Bunun üçün dəri örtüklərinin vəziyyəti qiymətləndirilir. Dərinin qızarması
                  və qabarcıqlar II dərəcə yanığın xeyrinə şərh edilir.
                  <br />
                  İynə ilə sancılarkən ağrının olmaması, tüklərin çəkilməsi, yanıq yerinə spirt tərkibli maddə ilə toxunarkən, barmaqla sıxışdırdıqdan sonra "kapilyarların oyunu"nun olmaması – ağır zədələnmənin, ən azı III-a dərəcənin xeyrinədir.
                </li>
                <li>
                  <strong>Zədələnmə sahəsi</strong>. Həkimlər praktikada "doqquzlar qaydası" və "ovuc" istifadə edirlər. Belə ki,
                  baş və bir yuxarı ətraf bədənin ümumi səthindən 9% təşkil edir. Bir aşağı ətraf, bədənin ön və arxa səthi 18%-dən, cinsiyyət orqanları və aralıq — 1%. "Ovuc" qaydasına görə, bütün bədən səthini ovuclarla ölçmək olar, 1 ovucun ölçüsünü bütün bədən sahəsinin 1%-i kimi qəbul edərək.
                </li>
                <li>
                  Dərinlik və zədələnmə sahəsi əsasında həkimlər{' '}
                  <strong>zədələnmə ağırlıq indeksini</strong> hesablayırlar.
                </li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-23-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-23-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-23-1300x650.webp"
                alt="Yanıqların müalicəsi"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              Ağır yanıqlar stasionarda, yanıq şöbəsində müalicə edilməlidir. <br />
              Bəzi hallarda ölmüş toxumaları çıxarmaq, dəri parçasının köçürülməsi üçün ilkin cərrahi işlənmə aparılması tələb olunur.
            </p>

            <div className="iframe">
              <div className="bg_default bg_green"></div>
              <div className="h3 h3_green iframe-title">
                Uşaqlarda yaraların və yanıqların işlənməsi haqqında qısa videoda baxın:
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://rutube.ru/play/embed/b4d481279bdfcbafbb01e36ea31c0c4b/?p=aVSDYD--vLEfYAnNlSgG-Q"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Uşaqlarda yaraların və yanıqların işlənməsi haqqında video"
                ></iframe>
              </div>
              <div className="iframe_desc">
                Videodan uşaqlarda yaraların işlənməsi zamanı narahat hissləri necə minimuma endirmək və hansı vasitənin yandırmadan və sancmadan, lakin zədələnmiş dərini dezinfeksiya edəcəyini öyrənəcəksiniz.
              </div>
            </div>

            <h3 className="h3" id="lechenie-ozhogov-na-raznyh-stadiyah-zazhivleniya">
              Müxtəlif sağalma mərhələlərində yanıqların müalicəsi
            </h3>

            <p>
              Yanmış dərinin bərpası zamanı hər hansı yaraların sağalması kimi eyni proseslər baş verir: <br />
              iltihab mərhələsi, regenerasiya, <br />
              yetişmə (epitelizasiya və çapığın yenidən təşkili).
            </p>

            <p>
              <strong>Yanığın sağalma fazaları</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/medical-kit-and-bandaid-509398-488-1-24-650x325.webp 1x, /medical-kit-and-bandaid-509398-488-1-24-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                src="/medical-kit-and-bandaid-509398-488-1-24-1300x650.webp"
                alt="Yanığın sağalma fazaları"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>
              I dərəcə yanıqların müalicəsi üçün dekspantenol, tanin tərkibli sakitləşdirici kremlər və məlhəmlər istifadə olunur.
              Sağalma bir neçə gün ərzində baş verir.
            </p>

            <p>
              II dərəcə ağırlıqdan başlayan yanıqlar infeksiyaya məruz qalır, çünki dəri bariyeri pozulur. Yara infeksiyasının müalicəsi və profilaktikası üçün antiseptik vasitələr təyin edilir.
            </p>

            <h4 className="h4" id="faza-vospaleniya">
              İltihab fazası
            </h4>

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
                Yanıq yaralarının işlənməsi üçün antiseptik preparatın seçiminə xüsusilə diqqətlə yanaşmaq lazımdır. Vasitə geniş antibakterial təsir spektrinə malik olmalı, tətbiq zamanı təhlükəsiz olmalı, işlənmə zamanı yanma və ya ağrılı hisslər yaratmamalıdır.
              </p>

              <p>
                Bu məqsədlə XX əsrin 70-ci illərindən{' '}
                <a href="/encyclopedia/povidon-jod/">povidon-yod</a> preparatları istifadə olunmağa başlandı, antibakterial, göbələk əleyhinə və virus əleyhinə təsir göstərir
                <sup>
                  <a href="#spisok-literatury">4,7</a>
                </sup>
                . <a href="/encyclopedia/jod/">Yod</a>{' '}
                <a href="/encyclopedia/polivinilpirrolidon/">povidonla</a> kompleksdə hətta açıq yaralara tətbiq zamanı toxumaların yanmasına səbəb olmur. Səthi travmalarda povidon-yod məhlulu və məlhəminin tətbiqi əhəmiyyətli iltihab və infeksiya olmadan yaraların sürətli və keyfiyyətli sağalmasına gətirib çıxarır
                <sup>
                  <a href="#spisok-literatury">5</a>
                </sup>
                .
              </p>

              <p>
                <strong>Povidon-yod</strong> əsasında yara səthlərinin dezinfeksiya işlənməsi üçün{' '}
                <strong>xarici istifadə üçün 10% məhlul <span style={{ color: '#0f780b' }}>Betadin®</span></strong> və{' '}
                <strong>xarici istifadə üçün 10% məlhəm</strong>{' '}
                <strong>
                  <span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span>
                </strong>{' '}tətbiq edilir.
              </p>

              <p>
                Vasitə nazik təbəqə ilə zədələnmiş dəriyə gündə bir neçə dəfə vurulur. Məhlul və ya{' '}
                <strong>məlhəm <span style={{ color: '#0f780b' }}>Betadin®</span></strong> ilə isladılmış salfetlər altında infeksiyalı yaraların müalicəsində, ilk 5-7 gün ərzində şiş və irinli ifrazat azalır, ağrının azalması qeyd olunur
                <sup>
                  <a href="#spisok-literatury">6</a>
                </sup>
                . <strong>
                  <span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span>
                </strong>{' '}
                məhlul və məlhəm bir aylıq uşaqlarda istifadəyə icazə verilir
                <sup>
                  <a href="#spisok-literatury">7</a>
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
                  Təlimat
                </a>
              </p>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>Povidon yod</strong>
                </p>
                <p>
                  Povidon-yodun xarakteristikaları və xüsusiyyətləri. Povidon-yod nə üçün tətbiq edilir? Povidon-yodlu Betadin<sup>®</sup> məhlulu, məlhəmi, şamların tətbiqi üzrə təlimat.
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
                  alt="Povidon-yod - önbaxış"
                  width={310}
                  height={210}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h4 className="h4" id="faza-regeneracii">
              Regenerasiya fazası
            </h4>

            <p>
              Regenerasiya mərhələsində bərpaedici məlhəmlər və kremlər istifadə olunur, məsələn, lantan duzları, buğda su ekstraktı, dekspantenol əsasında vasitələr.
            </p>

            <h4 className="h4" id="faza-sozrevaniya">
              Yetişmə fazası
            </h4>

            <p>
              Çapıq toxumasının yetişməsi yaraların sağalmasının üçüncü fazasında baş verir. Yanığın ağırlığından asılı olaraq çapıq dəyişiklikləri qala bilər. Bu mərhələdə kobud çapıqların inkişafının qarşısını almaq üçün silikon, hialuronidaza əsasında kremlər və gellər istifadə etmək tövsiyə olunur.
            </p>

            <h2 className="h2" id="kak-predotvratit-ozhogi-u-detey">
              Uşaqlarda yanıqların qarşısını necə almaq olar
            </h2>

            <p>
              Uşaqlarda yanıq travmaları daha çox 5 yaşa qədər yaşda rast gəlinir
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . Maraqlı körpələr qaynayan su ilə qazanı öz üzərinə çəkə, barmağını rozetkaya soxа, isti ütüyə toxuna, məişət kimyası vasitələrini töкə və ya püskürдə bilərlər. Kiçik uşaqlarda yanıqların yaranma riski yüksəkdir, bu onların alovun, isti mayelərin, kimyəvi maddələrin təhlükəsini müstəqil qiymətləndirə bilməməsi ilə əlaqədardır.
            </p>

            <div className="list-base">
              <p>
                <strong>Ona görə də uşaqların yanıq yaraları almasının qarşısını almaq üçün tövsiyə olunur:</strong>
              </p>
              <ul>
                <li>kiçik uşağı tək nəzarətsiz buraxmamaq</li>
                <li>
                  kiçik uşaqların olduğu otaqda maraqlı körpələrin barmaqlarını qoruyan rozetkalara xüsusi örtüklər istifadə etmək
                </li>
                <li>
                  fincanları, boşqabları, qazanları, tavаları isti məzmunla uşaqların birbaşa əlçatan zonasında qoymamaq
                </li>
                <li>isitmə radiatorlarını qoruyucu örtüklərlə bağlamaq</li>
                <li>kibriti,打火机ləri yuxarı rəflərdə saxlamaq</li>
                <li>masa üstlərində olan elektrik cihazları su mənbəyindən uzaqda yerləşməlidir</li>
                <li>uşağı qidalandırmazdan əvvəl hazırlanmış qidanın temperaturunu yoxlamaq</li>
                <li>
                  santexnika və şüşələri təmizləmək üçün vasitələri bunun üçün xüsusi ayrılmış, uşaqlar üçün əlçatmaz yerlərdə saxlamaq
                </li>
                <li>
                  3 yaşa qədər uşaqlara paltar olmadan açıq günəşdə qalmaq tövsiyə olunmur. SPF 50+ ilə günəşdən qoruyucu kremlər istifadə etmək tövsiyə olunur
                </li>
              </ul>
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

            <h3 className="h3" id="chto-nelzya-delat-pri-ozhoge-u-detey">
              Uşaqlarda yanıqda nə etmək olmaz?
            </h3>

            <div className="list-base">
              <ul>
                <li>
                  Təzə yanığı yağ və ya vazelin ilə sürtmək olmaz, qabarcıqları dəlmək olmaz, yanığa yapışmış paltarı cırmaq olmaz. Yanıq yerini çoxlu su ilə yumaq olar.
                </li>
                <li>
                  Günəş yanığında xama, kefir və ya digər xalq vasitələrindən istifadə etmək olmaz. Xüsusi vasitələr, məsələn, dekspantenollu vasitələr tətbiq etmək tövsiyə olunur.
                </li>
              </ul>
            </div>

            <h3 className="h3" id="mozhno-li-prokalyvat-puzyri-posle-ozhoga">
              Yanıqdan sonra qabarcıqları dəlmək olarmı?
            </h3>

            <p>
              İnfeksiyanın qarşısını almaq üçün yanıqdan sonra qabarcıqları müstəqil dəlməmək, düzgün müalicə təyin etmək üçün həkimə müraciət etmək daha yaxşıdır. Əgər qabarcıqlar yenə də partlayıbsa, yara səthini xlorheksidin məhlulu ilə yumaq və ya{' '}
              <mark style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#0f780b' }} className="has-inline-color">
                Betadin<sup>®</sup>
              </mark>{' '}məhlulu ilə işləmək lazımdır.
            </p>

            <h3 className="h3" id="kak-dolgo-zazhivayut-ozhogi">
              Yanıqlar nə qədər müddətdə sağalır?
            </h3>

            <p>
              Yanıq zədələnməsinin dərinliyindən asılı olaraq sağalma müddəti fərqli olacaq. I dərəcə yanıqda dəri bir neçə gün ərzində bərpa olunacaq.
            </p>

            <p>
              II dərəcə yanıqlarda, əgər yaraya infeksiya düşməsə, dəri iki həftə ərzində sağalacaq, bu zaman dərinin rənginin müvəqqəti dəyişməsi (piqmentasiya) qala bilər.
            </p>

            <p>
              III və IV dərəcə yanıqlarda sağalma 1,5 aya və daha çox uzana bilər. Adətən çapıqlar və dərinin piqmentasiyasının pozulması qalır.
            </p>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Moşkova Yelena Mixaylovna</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalənin müəllifi</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-203x203.webp 1x, /moshkova-novyj-406x406.webp 2x"
                  type="image/webp"
                />
                <Image
                  src="/moshkova-novyj-406x406.webp"
                  alt="Moşkova Yelena Mixaylovna"
                  width={203}
                  height={203}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="h2 h2-read-more" id="chitat-po-teme">
              Mövzu üzrə oxuyun
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/termicheskij-ozhog-kozhi-prevyu-246x166.webp 1x, /termicheskij-ozhog-kozhi-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/termicheskij-ozhog-kozhi-prevyu-491x332.webp"
                        alt="Dərinin termal yanığı-önbaxış"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Dərinin termal yanığı</strong>
                    </p>
                    <p>
                      Termal yanıq yüksək temperaturun dəri və aşağı toxumalara təsirindən yaranır. Necə ilk yardım göstərmək lazımdır və bu cür zədələnmələr nə ilə işlənir?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/termicheskij-ozhog-kozhi/">Ətraflı</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/polivinilpirrolidon-povidon-prevyu-246x166.webp 1x, /polivinilpirrolidon-povidon-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/polivinilpirrolidon-povidon-prevyu-491x332.webp"
                        alt="Polivinilpirrolidon (povidon) - önbaxış"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Polivinilpirrolidon (povidon)</strong>
                    </p>
                    <p>Polivinilpirrolidon (povidon): tətbiqi, povidon-yod kompleksində istifadəsi.</p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/polivinilpirrolidon/">Ətraflı</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/mazi-i-kremy-ot-ozhogov-prevyu-246x166.webp 1x, /mazi-i-kremy-ot-ozhogov-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <Image
                        src="/mazi-i-kremy-ot-ozhogov-prevyu-491x332.webp"
                        alt="Yanıqlardan məlhəmlər və kremlər-önbaxış"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Yanıqlardan məlhəmlər və kremlər</strong>
                    </p>
                    <p>Yanıqların müalicəsi üçün hansı məlhəmlər var və ən effektivini necə seçmək lazımdır.</p>
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
                Klinik tövsiyələr Termal, kimyəvi yanıqlar. Günəş yanıqları. Tənəffüs yollarının yanıqları//
                MMC Kombustioloqlar Birliyi "Yanıqsız dünya", 2020-ci il.
              </li>
              <li id="literatura-1">
                Mixayloviç V.A., Miroşniçenko A.Q. Təcili tibbi yardım həkimləri üçün bələdçi // MAPO nəşriyyatı, 2007 Sankt-Peterburq.
              </li>
              <li id="literatura-2">
                Butov Yu.S., Skripkina Yu.K., İvanova O. L. Dermatovenerologiya. Milli rəhbərlik// QEOTAR-Media,
                2017 Moskva.
              </li>
              <li id="literatura-3">
                Tibbi istifadə üzrə təlimat DV Betadin<sup>®</sup>, RLS.
              </li>
              <li id="literatura-4">
                Vladimirova O.V., Lavreşin P.M, Vladimirov V.İ., Rıbalko A.Ye., Zıbinskiy İ.A. Səthi və dərin yanıqların müalicəsində povidon-yod preparatının tətbiqi təcrübəsi// Ambulator cərrahiyyə №3/4, 2019.
              </li>
              <li id="literatura-5">
                Mixalskiy V. V., Boqdanov A. Ye., Jilina S. V., Prividentsev A. İ., Anikin A. İ., Ulyanina A. A. İnfeksiyalı yaraların müalicəsində Betadin preparatının tətbiqi// RMJ №29, 23.12.2010.
              </li>
              <li id="literatura-6">
                Tibbi istifadə üzrə təlimat Betadin<sup>®</sup> preparatı, məhlul, QQ P N015282/03.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
