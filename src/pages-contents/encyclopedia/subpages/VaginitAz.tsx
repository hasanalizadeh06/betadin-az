"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const VaginitAz: React.FC = () => {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

  useEffect(() => {
    // Console/debug similar to original script
    // eslint-disable-next-line no-console
    console.log(1);

    const scrollGoals: { [key: number]: () => void } = {
      25: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг25'),
      50: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг50'),
      75: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг75'),
      100: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг100'),
    };
    const triggered: { [key: number]: boolean } = {
      25: false,
      50: false,
      75: false,
      100: false,
    };

    function checkScroll() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor(((scrollTop + winHeight) / docHeight) * 100);
      for (const percent of [25, 50, 75, 100]) {
        if (scrollPercent >= percent && !triggered[percent]) {
          triggered[percent] = true;
          scrollGoals[percent]();
          // eslint-disable-next-line no-console
          console.log(percent);
        }
      }
      if (Object.values(triggered).every((v) => v)) {
        window.removeEventListener('scroll', checkScroll);
      }
    }

    window.addEventListener('scroll', checkScroll);
    // initial check in case it's already scrolled
    checkScroll();

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
      <div className="container-page-header">
        <div className="container">
          <div className="page-header page-header-breadcrumbs">
            <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://betadin.ru">
                  <span property="name">Ana səhifə</span>
                </a>
                <meta property="position" content="1" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/">
                  <span property="name">Vaginitin müalicəsi</span>
                </a>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">Vaginitin müalicəsi</span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>
          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                <h1 className="page-header-title-text">Vaginit: səbəbləri, simptomları və müasir müalicəsi</h1>
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
                    alt="başlıq yanında şəkil"
                  />
                </picture>
              </div>
              <h2 className="page-header-subtitle">Vaginit nədir</h2>
              <div className="page-header-body">
                <p>
                  <strong>Vaginit</strong>, və ya <strong>kolpit</strong>, — bu, bir sıra hallarda infeksiya ilə əlaqəli ola biləcək vaginanın selikli qişasının iltihabıdır.
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li>
                  <a href="https://betadin.ru/encyclopedia/vaginit/#formy-vaginita">Vaginitin formaları</a>
                </li>
                <li>
                  <a href="https://betadin.ru/encyclopedia/vaginit/#lechenie-vaginita">Müalicə</a>
                </li>
                <li>
                  <a href="https://betadin.ru/encyclopedia/vaginit/#profilaktika">Profilaktika</a>
                </li>
              </ul>
            </div>
            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-1460x1230.webp 2x"
                    type="image/webp"
                  />
                  <img
                    fetchPriority="high"
                    decoding="async"
                    height={615}
                    width={730}
                    src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-730x615.jpg.webp"
                    srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-730x615.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2385/270f58c4b6c999c6045b52fae4c180a4fa14bd47ca34fd02a9581afd3517a341-730x615/lechenie-vaginita-2-1-1460x1230.jpg.webp 2x"
                    alt=""
                  />
                </picture>
              </div>
            </div>
          </div>
          <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}`}>
            <ul>
              <li>
                <a href="#prichiny-poyavleniya-vaginita">Vaginitin yaranma səbəbləri</a>
              </li>
              <li>
                <a href="#formy-vaginita">Vaginitin formaları</a>
              </li>
              <li>
                <a href="#simptomy-vaginita">Vaginitin simptomları</a>
              </li>
              <li>
                <a href="#diagnostika">Diaqnostika</a>
              </li>
              <li>
                <a href="#lechenie-vaginita">Vaginitin müalicəsi</a>
              </li>
              <li>
                <a href="#profilaktika">Profilaktika</a>
              </li>
              <li>
                <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
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
            <a href="#prichiny-poyavleniya-vaginita">Vaginitin yaranma səbəbləri</a>
          </li>
          <li>
            <a href="#formy-vaginita">Vaginitin formaları</a>
          </li>
          <li>
            <a href="#simptomy-vaginita">Vaginitin simptomları</a>
          </li>
          <li>
            <a href="#diagnostika">Diaqnostika</a>
          </li>
          <li>
            <a href="#lechenie-vaginita">Vaginitin müalicəsi</a>
          </li>
          <li>
            <a href="#profilaktika">Profilaktika</a>
          </li>
          <li>
            <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
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
          <p>Bu xəstəliyin simptomları — qaşınma, ağrı və cinsiyyət yollarından patoloji ifrazatların olmasıdır.</p>
          <p>
            <strong>Vaginanın selikli qişasının iltihabı</strong>
          </p>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-1300x650.webp 2x"
              type="image/webp"
            />
            <img
              decoding="async"
              height={325}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-650x325.png.webp"
              srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-650x325.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2361/f875762c7a9b99123be48d8cfc9b57b79f42df13aef33f321ade0a5e614c4ebf-650x0/vospalenie-slizistoj-obolochki-vlagalishha-scaled-1300x650.png.webp 2x"
              alt="Vaginanın selikli qişasının iltihabı"
            />
          </picture>
          <div className="exlude-turbo">
            <picture className="banner-betadin banner-circle">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={505}
                width={503}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp"
                srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.jpg.webp 2x"
                alt="Dekorativ elementlər"
              />
            </picture>
          </div>
          <h2 className="h2" id="prichiny-poyavleniya-vaginita">Vaginitin yaranma səbəbləri</h2>
          <div className="list-base">
            <p>Vaginitin yaranma səbəbləri bunlar ola bilər:</p>
            <ul>
              <li>Qorunmasız cinsi əlaqə zamanı <strong>infeksiya ilə</strong> yoluxma.</li>
              <li>Normada vaginada az miqdarda mövcud olan, lakin onların sayının artması zamanı bu xəstəliyin yaranmasına səbəb olan <strong>şərti-patogen mikrobların həddindən artıq çoxalması</strong>.</li>
            </ul>
          </div>
          <p>
            Vaginitin inkişafında vaginanın normal mikroflorasının pozulması, "faydalı" laktobasilllərin miqdarının azalması, vaginanı örtən hüceyrələrin qoruyucu xassələrinin zəifləməsi böyük əhəmiyyət kəsb edir.
          </p>
          <p>
            Şərti-patogen və infeksion mikroorqanizmlər vaginanın üst qatının hüceyrələrini zədələyir və orqanizm tərəfindən iltihab reaksiyasının inkişafı şəklində cavab yaradır. Bu zaman iltihab klassik simptomlar müşahidə olunur: ağrı, şiş və qızartı.
          </p>
          <h2 className="h2" id="formy-vaginita">Vaginitin formaları</h2>
          <div className="two-column">
            <div className="column">
              <h4>Spesifik vaginit</h4>
              <p>Cinsi yolla ötürülən infeksiyalarla yoluxma ilə əlaqəlidir: trixomonadalar, xlamidiyalar və digərləri.</p>
            </div>
            <div className="column">
              <h4>Qeyri-spesifik</h4>
              <p>Şərti-patogen mikroorqanizmlərin, məsələn Candida cinsindən olan göbələklərin çoxalması ilə əlaqəlidir.</p>
              <p>Vaginitin bu forması ən çox rast gəlinir.</p>
            </div>
          </div>
          <div className="list-base">
            <p>
              <strong>Ayrıca fərqləndirilir:</strong>
            </p>
            <ul>
              <li>
                <strong>Atrofik vaginit</strong> (vaginada qoruyucu mexanizmlərin formalaşmasında iştirak edən qadın cinsi hormonları-estrogenlərin böyük yaşda miqdarının azalması ilə əlaqəlidir).
              </li>
              <li>
                <strong>Allergiya fonunda</strong> vaginit.
              </li>
            </ul>
          </div>
          <h2 className="h2" id="simptomy-vaginita">Vaginitin simptomları</h2>
          <p>Mikrob aktivliyi fonunda vaginitin təzahürləri törədicinin növündən, həmçinin xəstəliyin müddəti ilə birbaşa əlaqəli olan prosesin mərhələsindən asılıdır.</p>
          <p><strong>Vaginitin mümkün simptomları:</strong></p>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-1300x650.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={325}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-650x325.png.webp"
              srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-650x325.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3116/da3f8c1ea586e92cace4a531c6f0058237a4998c1f48196434c42c9327e8608b-650x0/vozmozhnye-simptomy-vaginita-1300x650.png.webp 2x"
              alt="Vaginitin mümkün simptomları"
            />
          </picture>
          <div className="big">
            <div className="line">
              <p>
                <strong>İltihabın kəskin mərhələsi</strong> (müddəti 2 aya qədər) cinsi orqanlar bölgəsində narahat edici və bəzən ağrılı hisslərin yaranması, patoloji ifrazatların görünməsi, həmçinin şiş, selikli qişanın qızarması, xarici cinsi orqanların dərisində və selikli qişasında döküntülər ilə xarakterizə olunur.
              </p>
            </div>
            <div className="line">
              <p>Xəstəliyin inkişafı ilə simptomlar bir qədər sakitləşə bilər və sağalmanın başlanğıcı kimi görünə bilər (subkəskin mərhələ, müddəti 2 aydan çox ola bilər).</p>
            </div>
            <div className="line">
              <p>Adekvat müalicə olmadıqda tez-tez xəstəliyin <strong>xroniki</strong> mərhələyə keçməsi baş verir ki, bu zaman simptomlar silinmiş və ifadəsiz xarakter daşıyır (xəstəlik müddəti 6 aydan çox). Belə proses illərlə davam edə bilər.</p>
            </div>
          </div>
          <p>Vaginitin əsas təzahürü — patoloji ifrazatlardır. İltihabın səbəbindən asılı olaraq onlar bol və ya orta (daha nadir hallarda az) ola bilər, müxtəlif rəng və qıvam qazana bilərlər.</p>
          <h2 className="h2" id="diagnostika">Diaqnostika</h2>
          <p>Həkimin vaginitin düzgün müalicəsini təyin etməsi üçün törədicini və xəstəliyin mərhələsini müəyyən etmək lazımdır.</p>
          <p>Vaginada iltihab əlamətləri yarandıqda qadın ginekoloqa müraciət etməlidir.</p>
          <p>Ginekoloq müayinə aparacaq və sonrakı laborator diaqnostika üçün vaginal ifrazatlar götürəcək.</p>
          <h2 className="h2" id="lechenie-vaginita">Vaginitin müalicəsi</h2>
          <p>Dərman preparatlarının düzgün seçilməsi simptomların tez aradan qaldırılması, vaginitin xroniki formaya keçməsinin və ağırlaşmaların yaranmasının qarşısının alınması üçün böyük əhəmiyyət kəsb edir.</p>
          <div className="list-base">
            <p>
              <strong>Müalicə taktikasının seçilməsi asılıdır:</strong>
            </p>
            <ul>
              <li>xəstəliyin gedişindən</li>
              <li>laborator tədqiqatların nəticələrindən və törədicinin müəyyən edilməsindən</li>
              <li>qadının sağlamlıq vəziyyətindən və ümumi immunitetindən</li>
              <li>dərmanın təsir xüsusiyyətlərindən, göstərişlər və əks göstərişlərdən</li>
              <li>xəstənin həkimin tövsiyələrinə dərmanın qəbul tezliyi və müddəti barədə riayət etməsindən</li>
            </ul>
          </div>
          <div className="green">
            <p>Vaginitin müalicəsi ilə mamalıq-ginekologiya həkimi məşğul olur.</p>
          </div>
          <h3 className="h3">Vaginitin müalicəsinin məqsədləri</h3>
          <div className="list-base">
            <p>Spesifik və qeyri-spesifik vaginitlərin müalicəsində əsas məqsədlər bunlardır:</p>
            <ul>
              <li>Şərti-patogen mikroorqanizmlərin sayının normal səviyyəyə endirilməsi və ya törədicilərin tam məhv edilməsi.</li>
              <li>Xəstəlik simptomlarının və vaginada iltihab əlamətlərinin aradan qaldırılması.</li>
              <li>İnfeksiyanın yuxarıya yayılması da daxil olmaqla, mümkün ağırlaşmaların qarşısının alınması.</li>
              <li>Terapiyanın yekun mərhələsində vaginanın normal mikroflorasının bərpası üzrə tədbirlər mümkündür.</li>
            </ul>
          </div>
          <p>2 preparat forması mövcuddur: sistem və yerli — daxilə/inyeksiya şəklində istifadə olunur və ya birbaşa vaginaya yeridilir.</p>
          <h3 className="h3">Spesifik vaginitlərin müalicəsi</h3>
          <p>Spesifik vaginitlərin müalicəsində sistem antibakterial preparatlar təyin edilir, bəzən yerli preparatlarla birlikdə.</p>
          <p>Müalicə müddəti və antibiotikin seçilməsi törədicinin həssaslığından asılıdır. Müalicə hər iki cinsi partnyoru əhatə etməlidir.</p>
          <h3 className="h3">Qeyri-spesifik vaginitlərin müalicəsi</h3>
          <p>Daha çox yerli vasitələr istifadə olunur – kremlər, məlhəmlər, şamlar, vaginal həblər, sulama məhlulları.</p>
          <div className="block-with-image">
            <div className="block-with-image__green">
              <p>
                <strong>Vaginitdən şamlar</strong>
              </p>
              <p>Vaginal şamlar formasında yerli preparatlarla vaginitin müalicəsi. Vaginada iltihaba qarşı şamları necə seçmək olar?</p>
              <a href="https://betadin.ru/encyclopedia/svechi-ot-vaginita/" className="btn btn-green" target="_blank" rel="noreferrer">Ətraflı</a>
            </div>
            <picture>
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-620x420.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={210}
                width={310}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-310x235/svechi-ot-vaginita-prevyu-310x210.png.webp"
                alt="Vaginitdən şamlar - önizləmə"
              />
            </picture>
          </div>
          <h3 className="h3">Vaginitlərin müalicəsi üçün yerli vasitələr</h3>
          <p>Hal-hazırda qeyri-spesifik vaginitlərin müalicəsində həkimlər geniş təsir spektrli dərman vasitələrinə üstünlük verirlər.</p>
          <h3 className="h3">Müxtəlif etiologiyalı vaginitlərin müalicəsində Betadin® şamları</h3>
          <div className="product-block">
            <div className="banner-product-img">
              <picture>
                <source media="(max-width: 767px)" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/e367d1b34f2621dac4bba93779ac51d93fe1d94967f4d45ee45569d04cecb2a0-315x310/banner-betadin-svechi-mobile-315x235.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/e367d1b34f2621dac4bba93779ac51d93fe1d94967f4d45ee45569d04cecb2a0-315x310/banner-betadin-svechi-mobile-630x470.webp 2x" type="image/webp" />
                <img loading="lazy" decoding="async" srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-927x916.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-1853x1832.jpg.webp 2x" width={927} height={916} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/600c344bad55632bc905628c1630f2c683ee68d499b9ea27a939f6c3b462e8ea-928x916/banner-betadin-svechi-927x916.jpg.webp" alt="Betadin" />
              </picture>
            </div>
            <p>
              <strong>Betadin<sup>®</sup></strong> — bu yerli antiseptik preparatdır. Betadin<sup>®</sup> şamlarının aktiv maddəsi — povidon-yoddur.
            </p>
            <p>Qeyd etmək vacibdir ki, povidon-yod — bu xüsusi kompleksdir ki, burada yoda povidon birləşir. Belə birləşmə təsiri artırır.</p>
            <p className="buttons">
              <a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-svechi-instruktsiya/" rel="noreferrer">Təlimat</a>
            </p>
          </div>
          <h4 className="h4">Betadin® vaginal şamlarının təsiri</h4>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2374/5c886975bcdee2f29cf901055b74ab48d5157f79b29beac27387df5212e3cae7-650x0/dejstvie-vaginalnyh-svechej-betadin-scaled-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2374/5c886975bcdee2f29cf901055b74ab48d5157f79b29beac27387df5212e3cae7-650x0/dejstvie-vaginalnyh-svechej-betadin-scaled-1300x650.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2374/5c886975bcdee2f29cf901055b74ab48d5157f79b29beac27387df5212e3cae7-650x0/dejstvie-vaginalnyh-svechej-betadin-scaled-650x325.png.webp" alt="Betadin® vaginal şamlarının təsiri" />
          </picture>
          <p>Şamların istifadəsi üçün məhdudiyyətlər mövcuddur: preparat hamiləlik zamanı və qalxanvari vəzin xəstəliklərində təyin edilmir.</p>
          <h2 className="h2" id="profilaktika">Profilaktika</h2>
          <p>Vaginitlərin profilaktikasından danışarkən iki aspekti ayırmaq olar:</p>
          <div className="two-column">
            <div className="column">
              <p>Vaginada iltihabi xəstəliklərin inkişafının profilaktikası</p>
            </div>
            <div className="column">
              <p>Vaginitlərin ağırlaşmalarının profilaktikası (uşaqlıq və əlavələrinin yuxarıya infeksiyalaşması)</p>
            </div>
          </div>
          <div className="list-base">
            <p>
              <strong>Vaginitin profilaktikası üçün bəzi tövsiyələr:</strong>
            </p>
            <ul>
              <li>Təbii parçadan alt paltarı geyinin və onu hər gün dəyişdirin.</li>
              <li>İntim gigiyena üçün nəzərdə tutulmuş xüsusi vasitələrdən istifadə edin.</li>
              <li>Çimmək və ya idmanla məşğul olduqdan sonra yaş geyimi dərhal dəyişdirin.</li>
              <li>Bağırsaq və vaginal mikrofloranı dəstəkləmək üçün rasionunuza probiotiklər əlavə edin</li>
              <li>İmmuniteti möhkəmləndirin və xroniki xəstəlikləri müalicə edin.</li>
              <li>Baryerli kontrasepsiya haqqında unutmayın.</li>
            </ul>
          </div>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2375/de10cea60c75011c866a80f3e1425aa7c209bc7b55e24bc70a059d2c4efbf974-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-1-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2375/de10cea60c75011c866a80f3e1425aa7c209bc7b55e24bc70a059d2c4efbf974-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-1-1300x300.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={150} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2375/de10cea60c75011c866a80f3e1425aa7c209bc7b55e24bc70a059d2c4efbf974-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-1-650x150.png.webp" alt="Vaginitin profilaktikası üçün bəzi tövsiyələr-1" />
          </picture>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/2376/b2b4dc75ce63880e26e153b947bc0414f65ffd36be0c1a4f09baf3db4bcc5e3b-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-2-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/2376/b2b4dc75ce63880e26e153b947bc0414f65ffd36be0c1a4f09baf3db4bcc5e3b-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-2-1300x300.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={150} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/2376/b2b4dc75ce63880e26e153b947bc0414f65ffd36be0c1a4f09baf3db4bcc5e3b-650x0/nekotorye-rekomendaczii-profilaktiki-vaginita-2-650x150.png.webp" alt="" />
          </picture>
          <p><strong>Yuxarı infeksiyanın profilaktikası üçün</strong> ginеkoloji manipulyasiyalar və cərrahi müdaxilələr zamanı vaginadan həkimlər tez-tez prosedurdan bir neçə gün əvvəl antiseptik preparatlar təyin edirlər. Betadin® şamlarının istifadəsi üçün göstərişlərdən biri vaginada cərrahi və diaqnostik müdaxilələrdən əvvəl profilaktikadır.</p>
          <h2 className="h2" id="chasto-zadavaemye-voprosy">Tez-tez verilən suallar</h2>
          <h3 className="h3">Aparılmış müalicədən sonra nə qədər müddətdən sonra təkrar ginekoloqa müraciət etmək və analizlər təhvil vermək lazımdır?</h3>
          <p>Adətən aparılmış müalicədən sonra nəzarət müayinəsi preparatın istifadəsinin son gününündən ən tez 10 gün sonra təyin edilir. Orta hesabla 10-14 gündən sonra.</p>
          <h3 className="h3">Cinsi partnyoru necə müalicə etmək olar?</h3>
          <p>Qadında vaginitin ilk əlamətləri yarandıqda onun cinsi partnyoru müayinə və sonrakı terapiyanın təyin edilməsi üçün androloq qəbuluna müraciət etməlidir.</p>
          <h3 className="h3">Şikayət olmadıqda nə qədər tez-tez ginekoloqa müraciət etmək lazımdır?</h3>
          <p>Hər hansı şikayət və ginеkoloji xəstəliyin təzahürləri olmadıqda qadına ginekoloq həkim tərəfindən ildə ən azı 1 dəfə profilaktik müayinədən keçməsi tövsiyə olunur.</p>
          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">Molçanov Oleq Leonidoviç</p>
              <div className="autor-subtitle" />
              <p className="autor-footer">Məqalənin müəllifi</p>
            </div>
            <picture>
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-235x203.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-470x406.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" height={203} width={235} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/4378/c21088fc9b529de1e456af0798aaffe6db7ed9c2c32f0de2e757e88274a0ac0c-236x203/molchanov-novyj-235x203.png.webp" alt="" />
            </picture>
          </div>
          <div className="h2 h2-read-more" id="chitat-po-teme">Mövzu üzrə oxumaq</div>
          <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
            <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
              <div className="swiper-slide swiper-slide-active" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source srcSet="/povidon-jod-prevyu-620x420.webp" type="image/webp" />
                    <img loading="lazy" decoding="async" height={210} width={310} src="/povidon-jod-prevyu-620x420.webp" alt="Povidon-yod - önizləmə" />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title"><strong>Povidon yod</strong></p>
                  <p>Povidon-yodun xarakteristikaları və xassələri. Povidon-yod nə üçün istifadə edilir?</p>
                </div>
              </div>
              <div className="swiper-slide swiper-slide-next" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-491x332.webp 2x" type="image/webp" />
                    <img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1942/63ca4e67c93d715c044d92d5544fa6a456082d4933c306201a76926b2bd23093-0x166/vaginalnye-vydeleniya-pervyu-246x166.png.webp" alt="Vaginal ifrazatlar - önizləmə" />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title"><strong>Vaginal ifrazatlar</strong></p>
                  <p>Hansı vaginal ifrazatlar olur və normal ağ axıntıları patoloji olanlardan necə fərqləndirmək olar?</p>
                </div>
              </div>
              <div className="swiper-slide" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-491x332.webp 2x" type="image/webp" />
                    <img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-246x166.png.webp" alt="Vaginitdən şamlar - önizləmə" />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title"><strong>Vaginitdən şamlar</strong></p>
                  <p>Vaginal şamlar formasında yerli preparatlarla vaginitin müalicəsi. Şamları necə seçmək olar?</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="h2" id="spisok-literatury">Ədəbiyyat siyahısı</h2>
          <ol className="literature">
            <li id="literature-0">Paladine HL, Desai UA. Vaginitis: Diagnosis and Treatment. Am Fam Physician. 2018 Mar 1;97(5):321-329.</li>
            <li id="literature-1">Qadınların cinsiyyət yollarından patoloji ifrazatlarla müşayiət olunan xəstəliklərin diaqnostikası və müalicəsi üzrə kliniki tövsiyələr // red.Prilepskaya V.N., Kira E.F.,ROAQ, 2019.</li>
            <li id="literature-2">Neal CM, Kus LH, Eckert LO, Peipert JF. Noncandidal vaginitis: a comprehensive approach to diagnosis and management. Am J Obstet Gynecol. 2020 Feb;222(2):114-122.</li>
            <li id="literature-3">Marnach ML, Wygant JN, Casey PM. Evaluation and Management of Vaginitis. Mayo Clin Proc. 2022 Feb;97(2):347-358.</li>
            <li id="literature-4">Stika CS. Atrophic vaginitis. Dermatol Ther. 2010 Sep Oct;23(5):514-22.</li>
            <li id="literature-5">Şireva Yu.V., Sandakova E.A., Karpunina T.İ. Qeyri-spesifik aerob vaginit.</li>
            <li id="literature-6">Vaginitis in Nonpregnant Patients: ACOG Practice Bulletin, Number 215. Obstet Gynecol. 2020;135(1):e1-e17.</li>
            <li id="literature-7">Betadin® suppozitorilər. Tibbi istifadəsinə dair təlimat (QQ: П№015282/01).</li>
            <li id="literature-8">Petersen EE, Weissenbacher ER, Local treatment of vaginal infections with dequalinium chloride or povidone iodine. Arzneimittelforschung. 2002;52(9):706-715.</li>
            <li id="literature-9">Haas DM, Morgan S et al. Vaginal preparation with antiseptic solution before cesarean section for preventing postoperative infections. Cochrane Database Syst Rev. 2018;7(7):CD007892.</li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default VaginitAz;
