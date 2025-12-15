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

export default function Piodermiya() {
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

    const handleScroll = () => {
      const shouldHideTitle = window.scrollY >= 1000;
      setNavTitleHidden(shouldHideTitle);

      if (shouldHideTitle) {
        setSecondaryNavOpened(false);
      }
    };

    const handleResize = () => {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    };

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('scroll', handleScroll);
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
                  <span property="name">Piodermiya: müalicə/məlhəm/krem/vasitələr</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Piodermiya: növləri, simptomları, müalicəsi</h1>
                  <picture>
                    <source
                      srcSet="/icon-230x224.webp"
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
                <h2 className="page-header-subtitle">Piodermiya törədiciləri</h2>
                <div className="page-header-body">
                  <p>
                    Piodermiyalar (piodermitlər) – dəri örtüklərinin müxtəlif iltihablı irinli xəstəliklərinin ümumiləşdirilmiş adı
                    <sup>
                      <a href="#spisok-literatury">1</a>
                    </sup>
                    .
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#vidy-piodermiy">Növləri</a>
                  </li>
                  <li>
                    <a href="#simptomy">Simptomlar</a>
                  </li>
                  <li>
                    <a href="#lechenie-piodermii">Müalicə</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/kartinka-banner-1-1460x12302.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/kartinka-banner-1-1460x12302.webp"
                      alt="Piodermiya: müalicə, məlhəmlər, kremlər, vasitələr"
                      width={730}
                      height={615}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content ${navOpened ? 'nav-content__open' : ''}`}>
              <ul>
                <li>
                  <a href="#prichiny-poyavleniya-piodermii">Piodermiyanın yaranma səbəbləri</a>
                </li>
                <li>
                  <a href="#vidy-piodermiy">Piodermiya növləri</a>
                </li>
                <li>
                  <a href="#simptomy">Simptomlar</a>
                </li>
                <li>
                  <a href="#diagnostika">Diaqnostika</a>
                </li>
                <li>
                  <a href="#lechenie-piodermii">Piodermiyanın müalicəsi</a>
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
                onClick={() => setNavOpened((prev) => !prev)}
              >
                Mündəricat
              </div>
            </nav>
          </div>
        </div>

        <nav
          className={`nav-content nav-content-fixed ${secondaryNavOpened ? 'nav-content__open' : ''} ${navTitleHidden ? '' : 'nav-content-title-hidden'}`}
        >
          <ul>
            <li>
              <a href="#prichiny-poyavleniya-piodermii">Piodermiyanın yaranma səbəbləri</a>
            </li>
            <li>
              <a href="#vidy-piodermiy">Piodermiya növləri</a>
            </li>
            <li>
              <a href="#simptomy">Simptomlar</a>
            </li>
            <li>
              <a href="#diagnostika">Diaqnostika</a>
            </li>
            <li>
              <a href="#lechenie-piodermii">Piodermiyanın müalicəsi</a>
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
            onClick={() => setSecondaryNavOpened((prev) => !prev)}
          >
            Mündəricat
          </div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətini əvəz etmir</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>
              İnfeksiyanın törədiciləri qızılı və ya epidermal stafilokokklar,
              korinebakteriyalar, streptokokklar və digər mikroorqanizmlər ola bilər
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="prichiny-poyavleniya-piodermii">
              Piodermiyanın yaranma səbəbləri
            </h2>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="/circle-503x505.webp"
                  type="image/webp"
                />
                <Image
                  src="/circle-503x505.webp"
                  alt="Dekorativ elementlər"
                  width={503}
                  height={505}
                  decoding="async"
                />
              </picture>
            </div>

            <p>
              Yoluxma zərərli mikroorqanizmlərın ətraf mühitdən dəriyə düşməsi və ya dəridə yaşayan şərti-patogen mikroorqanizmlərin aktivləşməsi nəticəsində baş verir. Belə ki, normada dəridə epidermal stafilokokklar yaşayır, qızılı stafilokokku isə burun selikli qişasında, qoltuq və qasıq qıvrımlarında aşkar etmək olar
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              . İrinli xəstəliklərdə xəstədə dəridə şərti-patogen mikroorqanizmlərin sayında artım müşahidə olunur.
            </p>

            <p>
              Piodermiyanın inkişafına mikrotravmalar (o cümlədən qaşınma fonunda dərinin qaşınmasında), dərinin yerli immunitetinin azalması, yağdan təmizləyən xarici istifadə vasitələrinin uzunmüddətli istifadəsi, artmış tərləmə, hipotermiya, qanda şəkər səviyyəsinin yüksəlməsi, xroniki infeksiya ocaqları kömək edir.
            </p>

            <h2 className="h2" id="vidy-piodermiy">
              Piodermiya növləri
            </h2>

            <p>
              <strong>Xəstəliyin gedişinə görə</strong> piodermiyalar bunlara bölünür:
            </p>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Kəskin</strong>
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Xroniki</strong>
                </p>
              </div>
            </div>

            <p>
              <strong>İrinli iltihabın dərinliyinə görə:</strong>
            </p>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>Səthi</strong>
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Dərin</strong>
                </p>
              </div>
            </div>

            <p>
              <strong>Yaranma mexanizminə görə:</strong>
            </p>

            <div className="two-column">
              <div className="column">
                <p>
                  <strong>İlkin</strong>
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>İkincili</strong>
                </p>
                <p>
                  (başqa dəri xəstəliyinin ağırlaşması kimi: atopik dermatit, ekzema,
                  ekssudativ psoriaz və digərləri)
                </p>
              </div>
            </div>

            <div className="list-base">
              <p>
                <strong>Xəstəliyin törədicisinin (patogenin) növünə görə:</strong>
              </p>
              <ul>
                <li>
                  <strong>Stafilodermiyalar (stafilokokklarla törədilir):</strong>
                  <br />
                  ostiofollikulit,{' '}
                  <a href="/encyclopedia/follikulit/">follikulit</a>, sikos vulqar, vezikulopustulyoz,{' '}
                  <a href="/encyclopedia/puzyrchatka/">qabarcıqlılıq</a> yenidoğulmuşların, eksfoliativ
                  dermatit yenidoğulmuşların, stafilokokk yanmış dəri sindromu, stafilokokk toksik şok sindromu, <a href="/encyclopedia/furunkul/">furunkul</a>,{' '}
                  <a href="/encyclopedia/karbunkul/">karbunkul</a>, abses, psevdofurunkulyoz,{' '}
                  <a href="/encyclopedia/gidradenit/">hidradenit</a>, piogen qranuloma.
                </li>
                <li>
                  <strong>Streptodermiyalar (streptokokklarla törədilir):</strong>
                  <br />
                  <a href="/encyclopedia/impetigo/">İmpetiqo</a> streptokokk, impetiqo streptokokk
                  bullyoz, çat impetiqo (əyilmə), sadə liken, səthi paronixiya,
                  intertriginoz streptodermiya, gicgah, adi ektima.
                </li>
                <li>
                  <strong>Qarışıq streptostafilodermiyalar:</strong>
                  <br />
                  impetiqo streptostafilokokk.
                </li>
              </ul>
            </div>

            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>İmpetiqo</strong>
                </p>
                <p>
                  İmpetiqo — geniş yayılmış dəri infeksiyası. O niyə yaranır və onu necə düzgün müalicə etmək lazımdır?
                </p>
                <a href="/encyclopedia/impetigo/" className="btn btn-green" target="_blank" rel="noopener noreferrer">
                  Ətraflı
                </a>
              </div>
              <picture>
                <source
                  srcSet="/impetigo-prevyu-246x166.webp"
                  type="image/webp"
                />
                <Image
                  src="/impetigo-prevyu-246x166.webp"
                  alt="İmpetiqo-önbaxış"
                  width={246}
                  height={166}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <h2 className="h2" id="simptomy">
              Piodermiyanın simptomları
            </h2>

            <p>Hər bir piodermiya növünün müxtəlif simptomatikası var.</p>

            <h3 className="h3">Stafilodermiyalar</h3>

            <h4 className="h4">Follikulit</h4>

            <p>
              <strong>Follikulit</strong> – tük follikulunun kəskin iltihabı, dəri örtüyünün tük bitən istənilən sahəsində, o cümlədən tük tüklərində yarana bilər. Tük follikulu nahiyəsində qırmızımtıl rəngli kiçik iltihablı düyün əmələ gəlir. Bir neçə gündən sonra düyün sarı rəngli məzmunlu irinli şişə çevrilir. Quruyaraq, irinlilər qabıq əmələ gətirir.
            </p>

            <h4 className="h4">Sikos vulqar</h4>

            <p>
              <strong>Sikos vulqar</strong> – bığ, saqqal, qaş, qasıq, qoltuq qıvrımları nahiyəsində tük follikullarının xroniki iltihabı. Bu lokalizasiyalarda follikulit əlamətləri əmələ gəlir: düyün, irinli şiş, eroziya, follikullar nahiyəsində qabıqlar. Zədələnmiş follikullardan asanlıqla tüklər çəkilir. İltihabın aradan qaldırılmasından sonra çapıqlar qalmır.
            </p>

            <h4 className="h4">Stafilokokk yanmış dəri sindromu</h4>

            <p>
              Bu xəstəliyə yenidoğulmuşlar və 5 yaşa qədər uşaqlar tutulur. Stafilokokklar dərinin səthi təbəqəsində hüceyrələr arasında əlaqələri dağıdan eksfoliativ toksin istehsal edir. Nəticədə maye ilə dolu yarıqlar əmələ gəlir, yuxarıdan isə boş, asanlıqla cırılan örtük formalaşır. Zamanla qabarcıqların ölçüsü artır. Qabarcıqların açılmasında dəri örtüyü "qaynayan" görünüş alır.
            </p>

            <h4 className="h4">Furunkul</h4>

            <p>
              Furunkul – tük follikulunun, yağ vəzinin və dərialtı piy toxumasının kəskin irinli iltihabı. Ən başlanğıcda dəri prosesi follikulitə bənzəyə bilər. Lakin zamanla sıxlıq artır, ölçüsü böyüyür, iltihablı element kəskin ağrılı olur, şiş güclənir. İltihabın mərkəzində irin əmələ gəlir, onun çıxmasından sonra ölmüş hüceyrələrdən çubuq və çapıqla sağalan xora görünür.
            </p>

            <p>
              Bir neçə furunkulun birləşməsinə <strong>karbunkul</strong> deyilir. Dəridə bir neçə ayrı furunkulun peyda olduğu vəziyyət{' '}
              <strong>furunkulyoz</strong> adlanır. Furunkulyoz xroniki gedişə malik ola bilər.
            </p>

            <p>
              <strong>Psevdofurunkulyozdan</strong> zəifləmiş uşaqlar əziyyət çəkir. Artmış tərləmə təşviq edici amildir. Adətən dərinin baş, arxa, omba, budun arxa səthində səpgilərin yerləşməsi. Səpgi gilas daşı ölçüsündə, durğun rəngli iltihablar və çoxsaylı xırda abseslərlə təmsil olunur.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/mask-group-2-650x350.webp"
                type="image/webp"
              />
              <Image
                src="/mask-group-2-650x350.webp"
                alt="Stafilodermiyalar"
                width={650}
                height={350}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h4 className="h4">Abses</h4>

            <p>
              <strong>Abses</strong> – dərinin, dərialtı toxumanın, əzələ toxumasının dərin irinli iltihabı. Ağrılı dəri sıxlaşması zamanla mərkəzi hissədə yumşalır – irinlə dolu boşluq əmələ gəlir. Abseslərdə tez-tez toxumaların ölümü yaranır.
            </p>

            <h4 className="h4">Piogen qranuloma (botriomikoma)</h4>

            <p>
              Piogen qranuloma kiçik travma fonunda yaranan lak səthi olan qırmızı rəngli həcmli əmələdir. Əmələnmə ölçüləri diametrdə bir neçə millimetrə çata bilər. Tez-tez piogen qranulomalar qanaya bilər. Zədələnmə ocağında stafilokokklar və qarışıq flora aşkar olunur.
            </p>

            <h3 className="h3">Streptodermiyalar</h3>

            <h4 className="h4">İmpetiqo Foks</h4>

            <p>
              <strong>İmpetiqo streptokokk (impetiqo Foks)</strong> qırmızı rəng fonunda 1 sm-ə qədər ölçüdə bulanıq məzmunlu qabarcıqların peyda olması ilə özünü göstərir. İrinlilər sarı rəngli qabıqlara qurutur. Müalicə olmazsa xəstəlik irəliləyir — belə ocaqların sayı artır.
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-5-650x325.webp"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-5-650x325.webp"
                alt="İmpetiqo Foks"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h4 className="h4">Çat impetiqo</h4>

            <p>
              Çat şəklində çat adətən ağız künclərinin dərisində yaranır, bu zaman bu nahiyə şişkin, qırmızı rəngdə olur. Xəstələr zədələnmə nahiyəsində ağrılılıq qeyd edirlər. Streptokokk impetiqo həmçinin burun qanadlarının əsasında, göz künclərlərində olur.
            </p>

            <h4 className="h4">Sadə liken</h4>

            <p>
              Sadə liken – üz və əl dərisində səthdə ağımtıl nazik pulcuqları olan çəhrayı rəngli yuvarlaq ləkələr peyda olur. Lakin bədənin digər nahiyələri də zədələnə bilər. Daha çox uşaqlar xəstələnir.
            </p>

            <h4 className="h4">Səthi paronixiya</h4>

            <p>
              Dırnaq ətrafı qatın dərisi iltihablı olur, şişir, ağrılılıq peyda olur. Bulanıq məzmunlu qabarcıq əmələ gəlir. Basarkən dırnaq ətrafı qatın altından irin damcıları ayrılır. Bu patologiyaya görə dırnaq lövhəsi deformasiya ola bilər. Streptokokk paronixiyasının inkişafına dar ayaqqabı geyərkən dərinin sürtünməsi, pedikürda mikrotravmalar kömək edir.
            </p>

            <h4 className="h4">Gicgah xəstəliyi</h4>

            <p>
              <strong>Gicgah</strong> – qızdırma, zəhərlənmə və dərinin, dərialtı toxumanın və səthi limfa damarlarının iltihablı zədələnməsi ilə xarakterizə olunan kəskin infeksion xəstəlik. Törədici A qrupu β-hemolitik streptokokklardır.
            </p>
<p>
              Daha çox proses baldırda, üzdə, əllərdə, gövdədə lokallaşır. Əvvəlcə halsızlıq,
              titrətmə, baş ağrısı, əzələ ağrısı yaranır, bədən temperaturu 38–40 °C-yə qədər yüksəlir. Zədələnmə
              nahiyəsində dartılma hissi, yanma, ağrı, dərinin qızarması yaranır. İltihab sərhədləri
              aydındır, dəri parlaq qırmızı, şişmiş, ağrılıdır. Bəzən qabarcıqlar,
              abseslər əmələ gələ bilər.
            </p>

            <p>
              <strong>Sipil iltihabı</strong>
            </p>

            <picture className="img-normal">
              <source
                srcSet="/istockphoto-1341663000-2048x2048-2-6-650x325.webp"
                type="image/webp"
              />
              <Image
                src="/istockphoto-1341663000-2048x2048-2-6-650x325.webp"
                alt="Sipil iltihabı"
                width={650}
                height={325}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h4 className="h4">Selülit</h4>

            <p>
              <strong>Selülit</strong> – dəri və dərialtı piy toxumasının streptostafılokokk təbiətli
              kəskin iltihab prosesi. İltihab ocağı kəskin ağrılı, şişmiş, isti, qırmızı
              rəngdədir. Ocaq sərhədləri aydındır. Xəstələrdə titrətmə müşahidə olunur. Selülit dəri örtüyünün istənilən
              sahəsində yarana bilər. Eyni zamanda insanda belə xəstəliklərin olması,
              <br />
              məsələn şəkərli diabet, qaraciyər sirrozu, onkoloji xəstəliklər, böyrək çatışmazlığı selülit inkişafı
              riskini artırır.
            </p>

            <h4 className="h4">Streptokokk və stafilokokk infeksiyası ilə əlaqəli impetiqo</h4>

            <p>
              Qırmızı rəngli ləkələr fonunda pustullar (irinli qabarlar) yaranır. İrinli qabarlar açılır və eroziyalar
              əmələ gəlir, zamanla "bal qabıqları" ilə örtülür. Təxminən bir həftədən sonra qabıqlar düşür,
              soyulan dəri açılır.
            </p>

            <h3 className="h3">Digər piodermiyalar</h3>

            <h4 className="h4">Alloponun vegetativ piodermiyası</h4>

            <p>
              Bu piodermiya formasında çoxsaylı irinli qabarlar əmələ gəlir, açılır və ziyilli
              böyümələr yaranır. Ocaqlar birləşərək iri lövhələr əmələ gətirir. Xəstəliyin tez-tez tutduğu yerlər –
              başın tüklü hissəsi, dodaqlar, qoltuqaltı qıvrımlar və cinsiyyət orqanları.
            </p>

            <h4 className="h4">Çapıq əmələ gətirən follikulit</h4>

            <p>
              Tük follikullarında iltihab yaranır, bu da onların ölümünə və nəticədə,
              daimi alopesiyaya (keçəlliyə) səbəb olur. Bu xəstəlikdə ən çox stafilokokklar aşkar edilir.
            </p>

            <h4 className="h4">Qanqrenoz piodermiya</h4>

            <p>
              <strong>Qanqrenoz piodermiya</strong> irinli məzmunlu kiçik iltihab elementi ilə
              başlayır və sonradan irinli ifrazatlı xora əmələ gəlir. Xora defekti
              diametrdə sürətlə böyüyür. Xoranın kənarları dəri səthindən yuxarıda olur. Halların 80%-də
              bu xəstəlik vaskülit, leyközlər, Kron xəstəliyi, bədxassəli limfomalarla
              birləşir
              <sup>
                <a href="#spisok-literatury">1</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="diagnostika">
              Piodermiyaların diaqnostikası
            </h2>

            <p>
              Piodermiyadan şübhələnmək üçün irinli məzmunlu qabarcıqların, irinli qabıqların olması kifayətdir. Xəstəliyin
              ağır gedişində bədən temperaturu yüksələ bilər, limfatik düyünlər
              böyüyür.
            </p>

            <div className="list-base">
              <p>
                <strong>Laboratoriya tədqiqatlarına böyük əhəmiyyət verilir, məsələn:</strong>
              </p>
              <ul>
                <li>Ümumi qan analizi (ESR dəyişikliyi, leykositlərin sayının artması).</li>
                <li>
                  Törədicinin növünü və onun antibiotiklərə həssaslığını müəyyən etmək üçün dəri səthindən və ya
                  irinli ifrazatdan bakterioloji əkilmə.
                </li>
                <li>
                  Şəkər səviyyəsinin müəyyən edilməsi, İİV-ə görə müayinə – infeksiyaların inkişafına
                  şərait yaradan amillər kimi.
                </li>
                <li>
                  Bəzi piodermiyaların bu xəstəliyin təzahürləri ilə oxşarlığına görə sifilis üzrə müayinə.
                </li>
              </ul>
            </div>

            <p>Uzun müddət sağalmayan xora defektləri olduqda cərrah həkimə məsləhət üçün müraciət etmək tövsiyə olunur.</p>

            <h2 className="h2" id="lechenie-piodermii">
              Piodermiyanın müalicəsi
            </h2>

            <p>
              İnfeksiya ocaqlarını təmizləmək üçün antiseptik <br />və antibakterial
              xarici vasitələr təyin edilir
              <sup>
                <a href="#spisok-literatury">2</a>
              </sup>{' '}
              .
            </p>

            <h3 className="h3">Povidon-yod (Betadin® məhlul və məlhəm)</h3>

            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    srcSet="/banner-betadin-927x916.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/banner-betadin-927x916.webp"
                    alt="Betadin"
                    width={927}
                    height={916}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <p>
                Povidon-yod dərinin bakterial infeksiyalarının müalicəsi, dermatoloji təcrübədə
                superinfeksiyanın profilaktikası üçün müasir antiseptik vasitədir. <a href="/encyclopedia/jod/">Yod</a> molekulu
                inert daşıyıcıya – <a href="/encyclopedia/polivinilpirrolidon/">povidona</a> birləşdirilib, bu da tərkibdən spirti
                istisna etməyə imkan verir, lakin eyni zamanda yodun antiseptik təsirini saxlayır. Kompleksdən sərbəst
                buraxılan aktiv yod bakteriya hüceyrəsinin zülalları ilə qarşılıqlı təsirdə olur, bu zülalları
                inaktiv edir və ya məhv edir, bu da mikroorqanizmlərin ölümünə səbəb olur.
              </p>

              <p>
                Povidon-yod <span style={{ color: '#0f780b' }}>
                  Betadin<sup>®</sup>
                </span> məhlul və məlhəminin tərkibinə daxildir. Bu vasitələr bakteriyalara, viruslara, tək hüceyrəli mikroorqanizmlərə, göbələk
                infeksiyasına qarşı aktivdir
                <sup>
                  <a href="#spisok-literatury">10</a>
                </sup>
                .
              </p>

              <p>
                İrinli elementlərin emalı üçün <span style={{ color: '#0f780b' }}>
                  Betadin<sup>®</sup>
                </span>{' '}
                məhlulu seyreltilməmiş halda gündə 2 dəfə tətbiq edilir. Yara səthinə çəkildikdə preparat
                yanma törətmir. Məhlulun sarı-qəhvəyi rəngi emal sahəsini nəzarət etməyə imkan verir.
                Eyni zamanda dəri və toxumalardakı rəng asanlıqla su ilə yuyulur.
              </p>

              <p>
                Təmizləmək və irinin qalıqlarını "çəkmək" üçün <span style={{ color: '#0f780b' }}>
                  Betadin<sup>®</sup>
                </span> məlhəmi istifadə edilir.
                <a href="/encyclopedia/povidon-jod/">Povidon-yod</a> zərərli mikroorqanizmlərin ölümünə səbəb olur,
                məlhəmin tərkibinə daxil olan makroqol isə iltihablı elementdən irinin axınını
                yaxşılaşdırmağa kömək edir
                <sup>
                  <a href="#spisok-literatury">11</a>
                </sup>
                . <span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span> məlhəmi xora defektinə
                ehtiyatla paylanır (sürtülmür) gündə 2-3 dəfə və sarğı edilir.
              </p>

              <p>
                <span style={{ color: '#0f780b' }}>
                  Betadin<sup>®</sup>
                </span> məhlulu və ya məlhəmi ilə isladılmış salfetlər altında
                infeksiyalaşmış yaraların müalicəsində ilk 5-7 gün ərzində şiş və irinli ifrazatın miqdarı azalırdı, ağrının
                azalması qeyd olunurdu
                <sup>
                  <a href="#spisok-literatury">3</a>
                </sup>
                .
              </p>

              <p>
                <span style={{ color: '#0f780b' }}>
                  Betadin<sup>®</sup>
                </span>{' '}
                xəttinin dərman vasitələri yüksək təhlükəsizlik profilinə malikdir: yerli tətbiqdə yodun
                reabsorbsiyası demək olar ki, baş vermir. Buna görə də preparatlar böyüklər və bir aylıq
                yaşdan uşaqlarda istifadəyə icazə verilir
                <sup>
                  <a href="#spisok-literatury">10</a>
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

            <h3 className="h3">Xlorgeksidin</h3>

            <p>
              Xlorgeksidin biqlukonat məhlulu dezinfeksiyaedici <br />və antiseptik təsirə malikdir.
              İrinli elementlərin, eroziyaların, xoraların, infeksiyalaşmış yanıqların və s. emalı zamanı istifadə olunur.
              Bakteriyalara qarşı aktivdir, 10 dəqiqə ekspoziya zamanı antigöbələk aktivliyi göstərir
              <sup>
                <a href="#spisok-literatury">4</a>
              </sup>
              .
            </p>

            <h3 className="h3">Hidrogen peroksid</h3>

            <p>
              3% hidrogen peroksid su məhlulu mikroorqanizmləri yaradan mexaniki yolla
              çıxara və kimyəvi reaksiya nəticəsində əmələ gələn qabarcıqlar hesabına onları yaradan kənara çıxara bilər
              <sup>
                <a href="#spisok-literatury">5</a>
              </sup>
              .
              <br />
              Məhlulun yara səthi ilə qarşılıqlı təsiri zamanı çürümə florası ilə törədilən infeksiyalar üçün
              öldürücü olan aktiv oksigen ayrılır. Lakin mikrobların miqdarının azalması müvəqqəti baş verir,
              yəni sterilizasiya effekti yoxdur. Vasitə hava keçirməyən (okklüziv)
              sarğılar altında tətbiq edilə bilməz.
            </p>

            <h3 className="h3">Antibakterial məlhəmlər və kremlər</h3>

            <div className="list-base">
              <p>
                Piodermiyalarda antibakterial kremlər/məlhəmlər təyin edilməsi göstərilir
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                .
              </p>
            </div>

            <h3 className="h3">Kombinə olunmuş preparatlar</h3>

            <div className="list-base">
              <p>
                Kəskin iltihab halında iltihab əleyhinə hormonlar olan
                kombinə olunmuş preparatların təyin edilməsi tələb oluna bilər
                <sup>
                  <a href="#spisok-literatury">2</a>
                </sup>
                .
              </p>
            </div>

            <h2 className="h2" id="profilaktika">
              Piodermiyaların profilaktikası
            </h2>

            <div className="list-base">
              <p>Piodermiyaların qarşısını almaq üçün çox vacibdir:</p>
              <ul>
                <li>Mikrotravmaları və sürtünmələri vaxtında antiseptik vasitələrlə emal etmək.</li>
                <li>Təbii nəfəs alan materiallardan rahat geyim və ayaqqabı geyinmək.</li>
                <li>Şəxsi gigiyena qaydalarına riayət etmək.</li>
                <li>
                  Dərinin qoruyucu baryerini məhv edən və onu xarici mühitin
                  aqressiv amillərinə həssas edən dəriyə yağdan təmizləyici spirtli məhlulların
                  istifadəsini artıq etməmək.
                </li>
                <li>Qanda şəkər səviyyəsinə nəzarət etmək.</li>
                <li>Dəridə müxtəlif səpgilər olduqda vaxtında həkimə müraciət etmək.</li>
              </ul>
            </div>

            <div className="exlude-turbo">
              <picture className="banner-betadin banner-quastion">
                <source
                  srcSet="/quastion-558x542.webp"
                  type="image/webp"
                />
                <Image
                  src="/quastion-558x542.webp"
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

            <h3 className="h3">Piodermiyada daxilə qəbul üçün antibiotiklər nə üçün təyin edilir?</h3>

            <p>
              Piodermiyanın ağır gedişində, irinləməni dəstəkləyən yanaşı patologiyanın olması və/və ya
              xəstənin həyatı üçün təhlükə yaradan ağırlaşma riski zamanı həkim sistemli
              antibakterial terapiyanın təyin edilməsi barədə qərar qəbul edə bilər.
            </p>

            <h3 className="h3">Piodermiyada dərini islatmaq olarmı?</h3>

            <p>
              Piodermiyanın növündən asılı olaraq su prosedurları ilə bağlı tövsiyələr fərqlənəcək. Lakin yadda
              saxlamaq lazımdır ki, dərinin yuyulması səpgilərin digər sahələrə yayılmasına
              səbəb ola bilər.
            </p>

            <h3 className="h3">Niyə bəzi insanlarda tez-tez piodermiyalar yaranır?</h3>

            <div className="list-base">
              <p>Piodermiyanın yaranma səbəbləri bunlarla əlaqəli ola bilər:</p>
              <ul>
                <li>
                  İnsanın peşə fəaliyyəti: xüsusi qoruyucu uniforma və ayaqqabı geyinmək hava
                  mübadiləsinin pozulmasına, artıq tərləməyə və dərinin maserasiyasına səbəb olur.
                </li>
                <li>
                  Şəxsi gigiyena qaydalarına riayət edilməməsi və əksinə, dərinin qoruyucu
                  xassələrinin zədələnməsinə səbəb olan aktiv təmizləyici qulluq.
                </li>
                <li>
                  Ağır yanaşı patologiya, məsələn, kompensasiya olunmamış şəkərli diabet,
                  immun sisteminin pozğunluqları.
                </li>
              </ul>
            </div>

            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Moşkova Yelena Mixaylovna</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalənin müəllifi</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-406x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  src="/moshkova-novyj-406x406 (1).webp"
                  alt="Moşkova Yelena Mixaylovna"
                  width={203}
                  height={203}
                  loading="lazy"
                  decoding="async"
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
                        srcSet="/gidradenit-lechenie-mazi-kremy-sredstva-pervyu-246x166.webp"
                        type="image/webp"
                      />
                      <Image
                        src="/gidradenit-lechenie-mazi-kremy-sredstva-pervyu-246x166.webp"
                        alt="Hidradenit: müalicə, məlhəmlər, kremlər, vasitələr-önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Hidradenit: müalicə, məlhəmlər, kremlər, vasitələr</strong>
                    </p>
                    <p>
                      Simptomlar, yaranma səbəbləri və hidranitin müalicəsi — dərin ağrılı düyünlərin
                      əmələ gəlməsi ilə tük follikullarının iltihab xəstəliyi.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/gidradenit/">Ətraflı</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/impetigo-prevyu-246x166.webp"
                        type="image/webp"
                      />
                      <Image
                        src="/impetigo-prevyu-246x166.webp"
                        alt="İmpetiqo-önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>İmpetiqo</strong>
                    </p>
                    <p>
                      İmpetiqo — geniş yayılmış dəri infeksiyası. Niyə yaranır və onu necə düzgün
                      müalicə etmək lazımdır?
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/impetigo/">Ətraflı</Link>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166%20(1).webp"
                        type="image/webp"
                      />
                      <Image
                        src="/karbunkul-lechenie-mazi-kremy-sredstva-prevyu-246x166%20(1).webp"
                        alt="Karbunkul: müalicə, məlhəmlər, kremlər, vasitələr-önizləmə"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Karbunkul: müalicə, məlhəmlər, kremlər, vasitələr</strong>
                    </p>
                    <p>
                      Karbunkul: yaranma səbəbləri, simptomlar, müalicə üsulları. Karbunkulun müalicəsi üçün
                      Betadin® antiseptik preparatları.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/karbunkul/">Ətraflı</Link>
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
                Butov Yu.S., Skripkin Yu. K., İvanova O. L., «Dermatovenerologiya» Milli rəhbərlik //
                GEOTAR Media 2017, Moskva.
              </li>
              <li id="literatura-1">
                MMM Rusiya dermatovenerologiya və kosmetologiya cəmiyyəti Piodermiyalar üzrə klinik tövsiyələr
                – 2020-ci il.
              </li>
              <li id="literatura-2">
                Mixalskiy V.V., Boqdanov A.Ye, Jilina S.V., Prividentsev A.İ, Anikin A.İ., Ulyanina A.A.
                İnfeksiyalaşmış yaraların müalicəsində Betadin® preparatının tətbiqi // RMJ №29 23.12.2010.
              </li>
              <li id="literatura-3">Xlorgeksidin dərman preparatının tibbi tətbiq üzrə təlimat, RLS.</li>
              <li id="literatura-4">Hidrogen peroksid dərman preparatının tibbi tətbiq üzrə təlimat, RLS.</li>
              <li id="literatura-5">Kalium permanqanat dərman preparatının tibbi tətbiq üzrə təlimat, RLS.</li>
              <li id="literatura-6">Futsidin krem/məlhəm dərman preparatının tibbi tətbiq üzrə təlimat, RLS.</li>
              <li id="literatura-7">Baktroban məlhəm dərman preparatının tibbi tətbiq üzrə təlimat, RLS.</li>
              <li id="literatura-8">Gentamisin məlhəmi dərman preparatının tibbi tətbiq üzrə təlimat, RLS.</li>
              <li id="literatura-9">
                Betadin<sup>®</sup> (məhlul, məlhəm) dərman preparatının tətbiq üzrə təlimat. RQ П№015282/03, RQ П№015282/02.
              </li>
              <li id="literatura-10">
                Blatun L. A. Yaraların yerli medikamentoz müalicəsi. Cərrahiyyə. N. İ. Piroqov adına jurnal. 2011;(4):51
                59.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
