'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ScrollGoals { [key: number]: () => void; }
interface Triggered { [key: number]: boolean; }

export default function SmeshannyeInfekciiVGinekologiiAz() {
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) {
        setNavTitleHidden(true);
        setSecondaryNavOpened(false);
      } else {
        setNavTitleHidden(false);
      }
    };

    const handleResize = () => {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Sürüşdürmə40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && window.ym) {
          window.ym(37744585, 'reachGoal', 'Sürüşdürmə80');
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
    return () => { window.removeEventListener('scroll', checkScroll); };
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
                    <span property="name">Ginekologiyada qarışıq infeksiyalar</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Ginekologiyada qarışıq infeksiyalar</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Ginekologiyada qarışıq infeksiyalar: müalicə və profilaktika</h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
                      type="image/webp"
                    />
                    <Image
                      height={112}
                      width={115}
                      src="/icon-230x224.webp"
                      alt="başlıqda şəkil"
                    />
                  </picture>
                </div>
                <div className="page-header-body">
                  <p>
                    Vaginal ifrazatlar və intim zonada digər xoşagəlməz simptomlarla əlaqəli şikayətlər bütün dünyada ginekoloqa müraciətlər strukturunda aparıcı mövqeləri tutur
                    <sup><a href="#spisok-literatury">1</a></sup>. Bu şikayətlərin əsas səbəbi hər yaşda qadınlar arasında rast gəlinən vulvovaginal infeksiyalardır.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#vidy-infekciy">İnfeksiya növləri</a>
                  </li>
                  <li>
                    <a href="#lechenie-vulvovaginalnyh-infekciy">Vulvovaginal infeksiyaların müalicəsi</a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4114/1935a4fe3a99b44700d2362c8c0228592ddad450dbdd73da4b19f3e28c466ccf-730x615/banner-smeshannye-infekczii-v-ginekologii-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4114/1935a4fe3a99b44700d2362c8c0228592ddad450dbdd73da4b19f3e28c466ccf-730x615/banner-smeshannye-infekczii-v-ginekologii-1460x1230.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      fetchPriority="high"
                      height={615}
                      width={730}
                      src="https://betadin.ru/wp-content/uploads/imagesv3/4114/1935a4fe3a99b44700d2362c8c0228592ddad450dbdd73da4b19f3e28c466ccf-730x615/banner-smeshannye-infekczii-v-ginekologii-730x615.jpg"
                      alt="Ginekologiyada qarışıq infeksiyalar"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}${navTitleHidden ? ' nav-content-title-hidden' : ''}`}>
              <ul>
                <li>
                  <a href="#vidy-infekciy">İnfeksiya növləri</a>
                </li>
                <li>
                  <a href="#zdorovyy-mikrobiom-vlagalishcha">Vaginanın sağlam mikrobiomu</a>
                </li>
                <li>
                  <a href="#faktory-riska-vulvovaginalnyh-infekciy">Vulvovaginal infeksiyaların risk faktorları</a>
                </li>
                <li>
                  <a href="#bakterialnyy-vaginoz">Bakterial vaginoz</a>
                </li>
                <li>
                  <a href="#vulvovaginalnyy-kandidoz-vvk">Vulvovaginal kandidoz (VVK)</a>
                </li>
                <li>
                  <a href="#nespecificheskiy-vulvovaginit-nv">Qeyri-spesifik vulvovaginit (NV)</a>
                </li>
                <li>
                  <a href="#smeshannye-infekcii">Qarışıq infeksiyalar</a>
                </li>
                <li>
                  <a href="#lechenie-vulvovaginalnyh-infekciy">Vulvovaginal infeksiyaların müalicəsi</a>
                </li>
                <li>
                  <a href="#chasto-zadavaemye-voprosy">Populyar suallar</a>
                </li>
                <li>
                  <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened((prev) => !prev)}>Məzmun</div>
            </nav>
          </div>
        </div>
        <nav className={`nav-content nav-content-fixed${secondaryNavOpened ? ' nav-content__open' : ''}${navTitleHidden ? '' : ' nav-content-title-hidden'}`}>
          <ul>
            <li>
              <a href="#vidy-infekciy">İnfeksiya növləri</a>
            </li>
            <li>
              <a href="#zdorovyy-mikrobiom-vlagalishcha">Vaginanın sağlam mikrobiomu</a>
            </li>
            <li>
              <a href="#faktory-riska-vulvovaginalnyh-infekciy">Vulvovaginal infeksiyaların risk faktorları</a>
            </li>
            <li>
              <a href="#bakterialnyy-vaginoz">Bakterial vaginoz</a>
            </li>
            <li>
              <a href="#vulvovaginalnyy-kandidoz-vvk">Vulvovaginal kandidoz (VVK)</a>
            </li>
            <li>
              <a href="#nespecificheskiy-vulvovaginit-nv">Qeyri-spesifik vulvovaginit (NV)</a>
            </li>
            <li>
              <a href="#smeshannye-infekcii">Qarışıq infeksiyalar</a>
            </li>
            <li>
              <a href="#lechenie-vulvovaginalnyh-infekciy">Vulvovaginal infeksiyaların müalicəsi</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Populyar suallar</a>
            </li>
            <li>
              <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened((prev) => !prev)}>Məzmun</div>
        </nav>
        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətini əvəz etmir</div>
        </div>
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <h2 className="h2" id="vidy-infekciy">
              Vaginal infeksiya növləri
            </h2>
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
            <div className="list-base">
              <p>Bu və ya digər xəstəliyin törədici növündən asılı olaraq aşağıdakıları ayırmaq olar:</p>
              <ul>
                <li>Göbələk infeksiyası</li>
                <li>Bakterial infeksiya (məsələn, streptokok)</li>
                <li>Virus infeksiyası (məsələn, sadə herpes virusu ilə əlaqəli)</li>
                <li>Cinsi yolla ötürülən spesifik infeksiyalar (CYÖI) (xlamidioz, trixomoniaz və s.)</li>
              </ul>
            </div>
            <div className="list-base">
              <p>Bu gün ən geniş yayılmış vulvovaginal infeksiyalar (VVİ) bunlardır:</p>
              <ul>
                <li>Vulvovaginal kandidoz («ağ axıntı»)</li>
                <li>Bakterial vaginoz</li>
                <li>Aerob vaginit</li>
                <li>
                  Trixomoniaz, həmçinin xlamidiya vulvovaginiti (CYÖI-yə aiddir)
                  <sup><a href="#spisok-literatury">2</a></sup>
                </li>
              </ul>
            </div>
            <p>
              Ayrıca qeyd etmək lazımdır ki, bu gün vulvovaginal infeksiyalar getdikcə daha çox polietioloji proses (eyni anda bir neçə törədici tərəfindən törədilən) kimi nəzərdən keçirilir. Yəni ginеkolоji patologiya strukturunda əsas əhəmiyyəti qarışıq infeksiyalar adlanan proseslər əldə edir
              <sup><a href="#spisok-literatury">3</a></sup>.
            </p>
            <p>
              İstənilən vulvovaginal infeksiyalar hamiləlik zamanı ağırlaşmaların inkişafı riski və qadın sağlamlığı üçün mümkün mənfi uzunmüddətli nəticələrlə (sonsuzluq, xroniki iltihablanma) əlaqələndirilir. Bu xəstəliklərin simptomları çox vaxt qadının gündəlik həyatında narahatlıq yaradır
              <sup><a href="#spisok-literatury">4,5</a></sup>.
            </p>

            <h2 className="h2" id="zdorovyy-mikrobiom-vlagalishcha">
              Vaginanın sağlam mikrobiomu
            </h2>
            <p>
              Qadının vaginası elə qurulmuşdur ki, cinsi sferanı infeksion agentlərin daxil olmasından və çoxalmasından qoruyur. Vaginada böyük miqdarda «faydalı» laktobakteriyalar yerləşir ki, onlar öz həyat fəaliyyətləri sayəsində «faydasız» flora üçün yararsız olan turş mühiti saxlayırlar.
            </p>
            <p>
              Bundan əlavə, «faydalı» laktobakteriyalar birbaşa xəstəlik törədən mikroorqanizmlərlə rəqabət aparır və bu mübarizə nəticəsində onları sıxışdırıb çıxarırlar. Norma olaraq hər qadında mütləq olan vaginal ifrazatlar onu təmizləyir, təsadüfən daxil olmuş mikrobların çıxarılmasına kömək edir.
            </p>
            <p>
              Stress, xroniki xəstəliklər, hormonal dəyişikliklər zamanı «faydalı» floranın miqdarının azalması nəticəsində infeksion agentlərlə yoluxma və ya kiçik miqdarda vaginada olan şərti-patogen floranın aktivləşməsi riski artır.
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4147/ac4f82694e63bbc0b1f843fe5e4e4ffd558885d426cc8c52fecaf60bd3a093c8-650x0/illyustracziya-si-2at4x-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4147/ac4f82694e63bbc0b1f843fe5e4e4ffd558885d426cc8c52fecaf60bd3a093c8-650x0/illyustracziya-si-2at4x-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/4147/ac4f82694e63bbc0b1f843fe5e4e4ffd558885d426cc8c52fecaf60bd3a093c8-650x0/illyustracziya-si-2at4x-650x150.png"
                alt="Risk qrupu"
              />
            </picture>
            <p>
              Vaginanın mikroflora təbii balansının pozulması və ya aqressiv mikrobun daxil olması (məsələn, cinsi yolla ötürülən infeksiyalarda) zamanı müdafiə mexanizmləri öhdəsindən gəlmir və infeksion xəstəliyin simptomları yaranır
              <sup><a href="#spisok-literatury">6</a></sup>.
            </p>

            <h2 className="h2" id="faktory-riska-vulvovaginalnyh-infekciy">
              Vulvovaginal infeksiyaların risk faktorları
            </h2>
            <div className="list-base">
              <p>Vulvovaginal infeksiya yaranma riski aşağıdakı hallarda artır:</p>
              <ul>
                <li>şəxsi gigiyena qaydalarına riayət edilməməsi</li>
                <li>
                  xroniki xəstəliklərin ağırlaşması və orqanizm üçün digər əlverişsiz şəraitdə
                  <sup><a href="#spisok-literatury">7</a></sup>
                </li>
                <li>cinsi həyata erkən başlama</li>
                <li>tez-tez cinsi partnyorların dəyişməsi</li>
              </ul>
            </div>

            <h2 className="h2" id="bakterialnyy-vaginoz">
              Bakterial vaginoz
            </h2>
            <p>
              Bakterial vaginoz infeksion qeyri-iltihablanma xəstəliyidir. O, spontan olaraq, vaginanın normal mikroflorasının pozulması kimi yarana bilər. Məhz bakterial vaginoz qadınlarda xoşagəlməz ifrazatların meydana gəlməsinin ən tez-tez səbəbidir
              <sup><a href="#spisok-literatury">7</a></sup>.
            </p>
            <p>
              Bakterial vaginoz «faydalı» laktobakteriyaların sayının kəskin azalması və şərti-patogen mikroorqanizmlərin (Gardnerella vaginalis və digərlərinin) çoxalması ilə xarakterizə olunur.
            </p>
            <div className="list-base">
              <p>Bakterial vaginoz özünü aşağıdakı əlamətlərlə göstərir:</p>
              <ul>
                <li>xoşagəlməz «balıq» qoxusu olan boz-ağ vaginal ifrazatlar</li>
                <li>intim zonada və bəzən qarın altında narahatçılıq hissləri</li>
                <li>
                  bəzən vaginal ifrazatlara qaşınma, xarici cinsiyyət orqanlarının qıcıqlanması və sidik ifrazı zamanı ağrı əlavə olunur
                </li>
                <li>
                  vaginadan götürülmüş yaxmalarının laborator müayinəsi zamanı nəticələr laktobakteriyaların yoxluğunu və ya cüzi miqdarını, böyük miqdarda şərti-patogen floranı göstərir
                  <sup><a href="#spisok-literatury">7,9</a></sup>
                </li>
              </ul>
            </div>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4109/9e87f1c097fbc414c2e07a1ea421cfe4936f73a15d2b63740784cbf94930e1bf-650x0/smeshannye-infekczii-v-ginekologiiat4x-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4109/9e87f1c097fbc414c2e07a1ea421cfe4936f73a15d2b63740784cbf94930e1bf-650x0/smeshannye-infekczii-v-ginekologiiat4x-1300x300.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={150}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/4109/9e87f1c097fbc414c2e07a1ea421cfe4936f73a15d2b63740784cbf94930e1bf-650x0/smeshannye-infekczii-v-ginekologiiat4x-650x150.png"
                alt="Bakterial vaginozun əlamətləri"
              />
            </picture>

            <h2 className="h2" id="vulvovaginalnyy-kandidoz-vvk">
              Vulvovaginal kandidoz (VVK)
            </h2>
            <p>
              Vulvovaginal infeksiyalar arasında tezlik üzrə bakterial vaginozdan sonra ikinci yeri kandidoz tutur. Vulvovaginal kandidoz vaginanın selikli qişası və xarici cinsiyyət orqanlarının dərisinin Candida cinsi göbələklərlə zədələnməsi nəticəsində yaranır. Çox vaxt xəstəlik ümumi və yerli (vaginada) immunitetin zəifləməsi, xroniki xəstəliklərin ağırlaşması zamanı yaranır, tez-tez şəkərli diabetli qadınlarda və hamiləlik dövründə baş verir. Eyni zamanda, vulvovaginal kandidoz nadir hallarda vaginanın mikroflorasının pozulması və laktobakteriyaların miqdarının azalması ilə əlaqələndirilir
              <sup><a href="#spisok-literatury">10,11</a></sup>.
            </p>
            <div className="list-base">
              <p>Vulvovaginal kandidozun simptomları:</p>
              <ul>
                <li>vizual müayinə zamanı qırmızılaşma, vaginanın selikli qişası və xarici cinsiyyət orqanlarının dərisinin şişməsi, vaginanın selikli qişasında ağ təbəqə müşahidə olunur</li>
                <li>vaginadan götürülmüş yaxmalarının laborator müayinəsi zamanı Candida cinsi göbələklərin güclənmiş böyüməsi, spor və göbələk miselləri qeyd olunur</li>
              </ul>
            </div>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4315/9bb42e2072609d9c023d70021ff8724ecc7787e03a577ffbe72b0421f63b4c18-650x0/simptomy-vulvovaginalnogo-kandid-scaled-650x152.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4315/9bb42e2072609d9c023d70021ff8724ecc7787e03a577ffbe72b0421f63b4c18-650x0/simptomy-vulvovaginalnogo-kandid-scaled-1300x303.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={152}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/4315/9bb42e2072609d9c023d70021ff8724ecc7787e03a577ffbe72b0421f63b4c18-650x0/simptomy-vulvovaginalnogo-kandid-scaled-650x152.png"
                alt="Vulvovaginal kandidozun simptomları"
              />
            </picture>

            <h2 className="h2" id="nespecificheskiy-vulvovaginit-nv">
              Qeyri-spesifik vulvovaginit (NV)
            </h2>
            <p>
              <strong>Qeyri-spesifik vulvovaginit</strong> – şərti-patogen floranın həddindən artıq çoxalması ilə əlaqəli infeksion-iltihablanma prosesidir. Sonuncu normada kiçik miqdarda vaginada mövcuddur, lakin müəyyən şəraitdə (immunitetin zəifləməsi, stress, soyuqlaşma) aqressiv davrana, selikli qişa və vulvanın dərisini zədələyərək xəstəliyin simptomlarına səbəb ola bilər
              <sup><a href="#spisok-literatury">12</a></sup>.
            </p>
            <div className="list-base">
              <p>Qeyri-spesifik vulvovaginitin xarakterik əlamətləri bunlardır:</p>
              <ul>
                <li>cinsiyyət orqanları nahiyəsində müxtəlif narahatçılıq hissləri (ağrı, qaşınma, yanma)</li>
                <li>anormal vaginal ifrazatlar (adətən bol, xoşagəlməz qoxulu, sarımtıl və ya yaşılımtıl rəngli, qalın və ya köpüklü konsistensiyalı ola bilər)</li>
                <li>cinsi təmas zamanı ağrı</li>
                <li>kontakt qanamaları (cinsi akt zamanı cüzi həcmdə qanlı ifrazatlar)</li>
                <li>sidik ifrazı zamanı ağrı</li>
                <li>vizual müayinədə vaginanın selikli qişasının qırmızılaşması, şişməsi, selikli qişada xoralanmalar ola bilər</li>
                <li>
                  vaginadan götürülmüş yaxmalarda laborator müayinədə «faydalı» floranın miqdarının cüzi azalması, şərti-patogen floranın yüksək miqdarı (10<sup>5</sup> KOE/ml-dən çox), həmçinin iltihablanma əlamətləri (leykositlərin artmış miqdarı) müəyyən edilir
                  <sup><a href="#spisok-literatury">1,12</a></sup>
                </li>
              </ul>
            </div>

            <h2 className="h2" id="smeshannye-infekcii">
              Qarışıq infeksiyalar
            </h2>
            <p>
              Son illərdə qarışıq infeksiyalar adlanan infeksiyaların yayılması meyli artır, belə ki, vaginadan götürülmüş yaxmaların laborator təhlilində eyni anda bir neçə xəstəliyin «günahkarları» aşkar edilir (məsələn, Gardnerella vaginalis və Candida cinsi göbələklərin və ya məsələn, böyük miqdarda göbələklər və aerob mikrobların artmış miqdarı).
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4110/3f8a06ad02064f76154feb8ed8a4271641e5d2a0d99f19558efe16475cca6b8a-650x0/illyustracziya-si-3at4x-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4110/3f8a06ad02064f76154feb8ed8a4271641e5d2a0d99f19558efe16475cca6b8a-650x0/illyustracziya-si-3at4x-1300x650.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/uploads/imagesv3/4110/3f8a06ad02064f76154feb8ed8a4271641e5d2a0d99f19558efe16475cca6b8a-650x0/illyustracziya-si-3at4x-650x325.png"
                alt="Ginekologiyada qarışıq infeksiyaların təzahürləri"
              />
              </picture>
        <p>
          Eyni zamanda klinik mənzərə (xəstəliyin simptomları) «silinmiş», qeyri-müəyyən ola bilər və ginekoloq üçün ilkin diaqnozu müəyyən etmək çətin olur. Belə hallarda xəstəliyin diaqnostikası üçün qarışıq infeksiyaların bütün məlum törədicilərini aşkar edə bilən laborator müayinələr və testlər istifadə olunur
          <sup><a href="#spisok-literatury">3,13</a></sup>.
        </p>

        <h2 className="h2" id="lechenie-vulvovaginalnyh-infekciy">
          Vulvovaginal infeksiyaların müalicəsi
        </h2>
        <h3 className="h3">Vulvovaginal infeksiyaların müalicəsi ilə əlaqəli problemlər və onların həlli yolları</h3>
        <div className="big">
          <div className="line">
            <p>
              <strong>Qarışıq infeksiyaların yüksək tezliyi.</strong> Bununla əlaqədar olaraq vulvovaginal infeksiyaların məlum törədicilərinə qarşı geniş təsir spektrinə malik preparatlar ən tələbat olanlar hesab edilir.
            </p>
          </div>
          <div className="line">
            <p>
              <strong>Müalicə zamanı «faydalı» laktobakteriyaların ölümü.</strong> Vulvovaginal infeksiyaların müalicəsi üçün preparat seçərkən «faydalı» laktobakteriyaları saxlaya bilən vasitələrə üstünlük verilir.
            </p>
          </div>
          <div className="line">
            <p>
              <strong>Müalicəyə qarşı rezistentliyin (davamlılığın) inkişafının yüksək tezliyi.</strong> Vulvovaginal infeksiyaları alışqanlıq törətməyən və törədicilərin rezistentliyi yaranmayan preparatlarla müalicə etmək vacibdir
              <sup><a href="#spisok-literatury">1,3,7,12</a></sup>.
            </p>
          </div>
        </div>

        <h3 className="h3">Spesifik infeksiyaların (CYÖI) müalicəsi</h3>
        <p>
          Cinsi yolla ötürülən infeksiyaların müalicəsi ilə dəqiq diaqnoz qoyulduqdan sonra mamalıq-ginеkoloq məşğul olur. Həkim nəzarəti altında hər iki partnyorun müalicəsi tələb olunur. Adətən müəyyən törədiciyə həssas olan antibakterial preparatlar istifadə olunur. Terapiyanın müddəti fərdi olaraq müəyyən edilir
          <sup><a href="#spisok-literatury">7</a></sup>.
        </p>

        <h3 className="h3">Vulva və vaginanın qeyri-spesifik infeksiyalarının, o cümlədən qarışıq etiologiyalı infeksiyaların müalicəsi</h3>
        <p>
          Qeyri-spesifik etiologiyalı vulvovaginal infeksiyaların (vulvovaginal kandidoz, qeyri-spesifik vaginitlər və qarışıq infeksiyalar) müalicəsi üçün müxtəlif preparatlar istifadə olunur. Onlardan biri vaginal supozitoriyalar şəklində buraxılan <strong>Betadin<sup>®</sup></strong>-dir.
        </p>

        <h4 className="h4">Vulvovaginal infeksiyaların müalicəsində Betadin® şamları</h4>
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
            Betadin<sup>®</sup> şamları bu gün vulvovaginal infeksiyaların müalicəsi üçün geniş təsir spektrinə malik preparatlara qoyulan əsas tələblərə cavab verir
            <sup><a href="#spisok-literatury">14</a></sup>.
          </p>
          <p>
            Bu preparatın tərkibində 200 mq povidon-yod var. Bu, aktiv komponent olan yod üçün rezervuar və stabilizator olan maddədir ki, bunun sayəsində onun tətbiqində daimi və maksimum təsir əldə edilir. Yod suppozitoriyadan azad olunur və geniş mikroorqanizm dairəsinə, o cümlədən Candida cinsi göbələklərə, Gardnerella vaginalis-ə, Streptococcus spp.-yə, Staphylococcus spp.-yə və vulvovaginal infeksiyaların digər törədicilərinə təsir göstərir.
          </p>
          <p>
            Betadin-in təyininə qarşı göstərişlər hamiləlik, ana südü ilə qidalandırma dövrü və qalxanabənzər vəzin funksiyasının pozulmasıdır
            <sup><a href="#spisok-literatury">15</a></sup>.
          </p>
          <p>Şam formasında Betadin<sup>®</sup> preparatı ilə müalicə sxemləri müxtəlif ola bilər. Bu konkret diaqnozdan, xəstəliyin müddətindən, ağırlaşmanın olması və ya olmamasından asılıdır.</p>
          <p className="buttons">
            <a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-svechi-instruktsiya/">
              Təlimat
            </a>
          </p>
        </div>

        <div className="green">
          <p>Qeyri-spesifik vulvovaginal infeksiyanın müalicəsi nümunəsi:</p>
          <p>
            <strong>Kəskin vaginitdə</strong> Betadin<sup>®</sup> şamları (200mq) 7 gün ərzində gecə 1 şam vaginaya dərin yeridilir. Zərurət yarandıqda müalicə daha 7 gün uzadıla bilər.
          </p>
          <p>
            <strong>Davamlı infeksiyalar olduqda</strong> 1 Betadin<sup>®</sup> şamı (200mq) daha uzun müddət gündə 2 dəfə vaginaya yeridilir.
          </p>
        </div>

        <h4 className="h4">Şamların tətbiqinin xüsusiyyətləri</h4>
        <div className="list-base">
          <ul>
            <li>Şam yeridiləndən sonra həmişə ən azı 15 dəqiqə uzanmış vəziyyətdə qalmaq lazımdır ki, şam əriyə bilsin.</li>
            <li>Bu müddət keçdikdən sonra maddənin müəyyən hissəsi axıb çıxa bilər. Bu normaldır və preparatın təsirindən çox təsir etmir.</li>
            <li>Zərurət olduqda axıb çıxan artıqları salfetlə silin və ya ilıq su ilə yuyun. Bütün müalicə kursu ərzində gigiyenik prokladlardan istifadə etmək tövsiyə olunur.</li>
          </ul>
        </div>

        <div className="green">Əgər kurs zamanı aybaşı başlayarsa – Betadin<sup>®</sup> şamları ilə müalicə kursunu kəsməyə dəyməz.</div>

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
          Suallara cavablar
        </h2>
        <h3 className="h3">Müalicədən sonra vaginadan təkrar yaxma götürmək lazımdırmı və nə vaxt?</h3>
        <p>
          Müalicə kursu keçirildikdən sonra ginekoloqu təkrar ziyarət etmək və laborator müayinə üçün vaginadan yaxma götürmək tövsiyə olunur. Müalicə bitdikdən sonra bunu ən tez 5 gün sonra etmək tövsiyə olunur (aybaşı olmadıqda).
        </p>

        <h3 className="h3">Vaginanın qarışıq infeksiyalarında müalicə müddəti artırmı?</h3>
        <p>
          Müalicənin müddəti eyni anda bir neçə amildən asılıdır: bu, infeksiyanın ilk epizodudurmu, onun müddəti, simptomların ifadəliliyi, ağırlaşma əlamətləri var, yoxsa yox.
        </p>

        <div className="autor">
          <div className="autor-left">
            <p className="autor-title">Averkova Viktoriya Gennadyevna</p>
            <div className="autor-subtitle"></div>
            <p className="autor-footer">Məqalənin müəllifi</p>
          </div>
          <picture>
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4376/56e6a225648069ae3d29575f0c63962510fad57b2d134dd89075765b86a40ada-236x203/averkova-novyj-203x203.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4376/56e6a225648069ae3d29575f0c63962510fad57b2d134dd89075765b86a40ada-236x203/averkova-novyj-406x406.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={203}
              width={203}
              src="https://betadin.ru/wp-content/uploads/imagesv3/4376/56e6a225648069ae3d29575f0c63962510fad57b2d134dd89075765b86a40ada-236x203/averkova-novyj-203x203.png"
              alt="Averkova Viktoriya Gennadyevna"
            />
          </picture>
        </div>

        <div className="h2 h2-read-more" id="chitat-po-teme">
          Mövzu üzrə oxuyun
        </div>
        <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
          <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
            <div className="swiper-slide swiper-slide-active" style={{ marginRight: '29px' }}>
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
                <p>Qadınlarda patoloji ifrazatların demək olar ki, 90% hallarında bakterial vaginoz diaqnozu qoyulur. Bu xəstəlik nə üçün yaranır və necə müalicə edilir?</p>
                <p className="slide-more">
                  <a href="/encyclopedia/bakterialnyj-vaginoz/">Ətraflı</a>
                </p>
              </div>
            </div>
            <div className="swiper-slide swiper-slide-next" style={{ marginRight: '29px' }}>
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
                    src="https://betadin.ru/wp-content/uploads/imagesv3/1940/6cbec5936b718bcebf5ac2d5575b3d917cf1fedc04f71557b998a8f0c4361b69-0x166/svechi-ot-vaginita-prevyu-246x166.png"
                    alt="Vaginitdən şamlar - önizləmə"
                  />
                </picture>
              </div>
              <div className="slide-body">
                <p className="slide-title">
                  <strong>Vaginitdən şamlar</strong>
                </p>
                <p>Vaginal şamlar formasında yerli preparatlarla vaginitin müalicəsi. Vaginadakı iltihablanmadan şamları necə seçmək olar?</p>
                <p className="slide-more">
                  <a href="/encyclopedia/svechi-ot-vaginita/">Ətraflı</a>
                </p>
              </div>
            </div>
            <div className="swiper-slide" style={{ marginRight: '29px' }}>
              <div className="slide-image">
                <picture>
                  <source
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1945/d32c4af611d78c7356ca7fc4887a8b02ada3237f837bf57db2a450b1bbc5eeaa-0x166/svechi-ot-molochniczy-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1945/d32c4af611d78c7356ca7fc4887a8b02ada3237f837bf57db2a450b1bbc5eeaa-0x166/svechi-ot-molochniczy-prevyu-491x332.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    loading="lazy"
                    height={166}
                    width={246}
                    src="https://betadin.ru/wp-content/uploads/imagesv3/1945/d32c4af611d78c7356ca7fc4887a8b02ada3237f837bf57db2a450b1bbc5eeaa-0x166/svechi-ot-molochniczy-prevyu-246x166.png"
                    alt="Ağ axıntıdan şamlar - önizləmə"
                  />
                </picture>
              </div>
              <div className="slide-body">
                <p className="slide-title">
                  <strong>Ağ axıntıdan şamlar</strong>
                </p>
                <p>Ağ axıntıdan hansı şamlar olur və onlar nə ilə fərqlənirlər.</p>
                <p className="slide-more">
                  <a href="/encyclopedia/svechi-ot-molochnicy/">Ətraflı</a>
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
            Mashburn J. Vaginal infections update. J Midwifery Womens Health. 2012 Nov-Dec;57(6):629-634. doi: 10.1111/j.1542-2011.2012.00246.x. Epub 2012 Oct 24. PMID: 23094602.
          </li>
          <li id="literatura-1">
            Reid G, Bruce AW. Urogenital infections in women: can probiotics help? Postgrad Med J. 2003 Aug;79(934):428-32. doi: 10.1136/pmj.79.934.428. PMID: 12954951; PMCID: PMC1742800.
          </li>
          <li id="literatura-2">
            Borovikov İ.O., Kutsenko İ.İ., Rubinina E.R. Qadınlarda urogenital traktın qarışıq infeksiyalarının klinik idarə edilməsi təcrübəsi. RMJ. Ana və uşaq. 2018;1:26–32. DOI: 10.32364/2618-8430-2018-1-1-26-32. Ravel J., Gajer P., Abdo Z., Schneider G. Vaginal microbiome of reproductive-age women. Proc Natl Acad Sci USA. 2011;108(1):4680–4687. DOI: 10.1073/pnas.1002611107.
          </li>
          <li id="literatura-3">
            Voronova O.A. Vaginal patologiyası və cinsi yolla ötürülən infeksiyaları olan xəstələrin reabilitasiya mərhələsində innovativ texnologiyaların tətbiqi. II Ümumrusiya Dermatovenoroqlar Konqresinin tezisləri. Sankt-Peterburq, 2007.
          </li>
          <li id="literatura-4">
            Radzinski V.E., Kipyatkova N.Q., Muxtarova A.V. Abort təhlükəsi və vaxtından əvvəl doğuş zamanı genital biosenozlar. Rusiya Xalqların Dostluğu Universiteti Xəbərləri. Seriya: Tibb. 2009
          </li>
          <li id="literatura-5">
            Buchta V. Vaginal microbiome. Ceska Gynekol. 2018 Winter;83(5):371-379. English. PMID: 30848142.
          </li>
          <li id="literatura-6">
            Savelyeva Q.M., Suxix Q.T., Serova V.N. və b. Ginekologiya. Milli təlimat. 2-ci nəşr. M.: QEOTAR-Media, 2017.
          </li>
          <li id="literatura-7">
            Eggers M. Infectious Disease Management and Control with Povidone Iodine. Infect Dis Ther. 2019 Dec;8(4):581-593. doi: 10.1007/s40121-019-00260-x. Epub 2019 Aug 14. Erratum in: Infect Dis Ther. 2019 Aug 22;: PMID: 31414403; PMCID: PMC6856232.
          </li>
          <li id="literatura-8">
            Romero Herrero D, Andreu Domingo A. Vaginosis bacteriana. Bacterial vaginosis. Enferm Infecc Microbiol Clin. 2016 Jul;34 Suppl 3:14-8. Spanish. doi: 10.1016/S0213-005X(16)30214-2. PMID: 27474242.
          </li>
          <li id="literatura-9">
            Mtibaa L., Fakhfakh N., Kallel A., Belhadj S., Belhaj Salah N., Bada N., Kallel K. Vulvovaginal candidiasis: Etiology, symptomatology and risk factors. J Mycol Med. 2017 Jun;27(2):153-158. doi: 10.1016/j.mycmed.2017.01.003. Epub 2017 Mar 15. PMID: 28314677.
          </li>
          <li id="literatura-10">
            Urogenital kandidozlu xəstələrin müalicəsi üzrə federal klinik tövsiyələr. ROAQ. Moskva, 2020-ci il.
          </li>
          <li id="literatura-11">
            Perlamutrov Y.N., Çernova N.İ. Qeyri-spesifik vaginit və servisitin müalicə effektivliyinin artırılması imkanları. Müalicə edən həkim. 2014. № 12. S. 79–82.
          </li>
          <li id="literatura-12">
            Bebneva T.N., Dobretsova T.A. Qarışıq vaginal infeksiyalar: yeni ideologiya. Mama-ginekoloq praktikasında qeyri-spesifik vaginal infeksiyalar. İnformasiya bülleteni. V.E. Radzinski, A.M. Saviçevanın red. M.: StatusPraesens; 2016.
          </li>
          <li id="literatura-13">
            Boqomazova İ.M., Belousova V.S., Maksimov M.L. Bakterial vaginozda Betadin<sup>®</sup> preparatının istifadəsinin effektivliyi. RMJ, 2014-cü il.
          </li>
          <li id="literatura-14">
            Betadin suppozitoriyalar tibbi tətbiq təlimatı. RN: P№015282/01.
          </li>
        </ol>
      </div>
    </div>
  </article>
</main>
  );
}
