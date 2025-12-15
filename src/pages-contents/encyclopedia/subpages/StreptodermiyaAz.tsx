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

export default function StreptodermiyaAz() {
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
                    <span property="name">Streptodermiya</span>
                  </Link>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Streptodermiya</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Streptodermiya: səbəbləri, əlamətləri, müalicəsi</h1>
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
                <h2 className="page-header-subtitle">Streptodermiya nədir?</h2>
                <div className="page-header-body">
                  <p>
                    <strong>Streptodermiya</strong> – streptokokk bakteriyalarının səbəb olduğu dərinin infeksion xəstəliyidir. 
                    Ən çox hallarda iltihabın ocağından A qrupu streptokokklar ayrılır ki, onlar da birincili streptodermiyaların 
                    səbəbidir. Bu törədici digər qrupların nümayəndələrindən daha yoluxucudur
                    <sup>
                      <a href="#edebiyyat-siyahisi">1</a>
                    </sup>
                    . Streptokokkdan əlavə, xəstədə qızılı stafilokokk və bağırsaq bakteriyaları 
                    (qarışıq flora) aşkar edilə bilər ki, bu da ikincili infeksiyalar üçün xarakterikdir
                    <sup>
                      <a href="#edebiyyat-siyahisi">1</a>
                    </sup>
                    .
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#streptodermiya-yaranma-sebəbləri">Streptodermiya səbəbləri</a>
                  </li>
                  <li>
                    <a href="#streptodermiya-novləri">Streptodermiya növləri</a>
                  </li>
                  <li>
                    <a href="#streptodermiya-mualicəsi">Streptodermiya müalicəsi</a>
                  </li>
                </ul>
              </div>

              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source
                      srcSet="/banner-streptodermiya-730x615.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/banner-streptodermiya-730x615.webp"
                      alt="Streptodermiya"
                      width={730}
                      height={615}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content${navOpened ? ' nav-content__open' : ''}${navTitleHidden ? ' nav-content-title-hidden' : ''}`}>
              <ul>
                <li>
                  <a href="#streptodermiya-yaranma-sebəbləri">Streptodermiya yaranma səbəbləri?</a>
                </li>
                <li>
                  <a href="#streptodermiya-xususiyyətləri">Streptodermiya xüsusiyyətləri</a>
                </li>
                <li>
                  <a href="#streptodermiya-novləri">Streptodermiya növləri</a>
                </li>
                <li>
                  <a href="#streptodermiya-mualicəsi">Streptodermiya müalicəsi</a>
                </li>
                <li>
                  <a href="#streptodermiya-profilaktikasi">Streptodermiya profilaktikası</a>
                </li>
                <li>
                  <a href="#tez-tez-verilən-suallar">Populyar suallar</a>
                </li>
                <li>
                  <a href="#edebiyyat-siyahisi">Ədəbiyyat siyahısı</a>
                </li>
              </ul>
              <div className="nav-content-title nav-content-title-cross" onClick={() => setNavOpened((prev) => !prev)}>Məzmun</div>
            </nav>
          </div>
        </div>

        <nav className={`nav-content nav-content-fixed${secondaryNavOpened ? ' nav-content__open' : ''}${navTitleHidden ? '' : ' nav-content-title-hidden'}`}>
          <ul>
            <li>
              <a href="#streptodermiya-yaranma-sebəbləri">Streptodermiya yaranma səbəbləri?</a>
            </li>
            <li>
              <a href="#streptodermiya-xususiyyətləri">Streptodermiya xüsusiyyətləri</a>
            </li>
            <li>
              <a href="#streptodermiya-novləri">Streptodermiya növləri</a>
            </li>
            <li>
              <a href="#streptodermiya-mualicəsi">Streptodermiya müalicəsi</a>
            </li>
            <li>
              <a href="#streptodermiya-profilaktikasi">Streptodermiya profilaktikası</a>
            </li>
            <li>
              <a href="#tez-tez-verilən-suallar">Populyar suallar</a>
            </li>
            <li>
              <a href="#edebiyyat-siyahisi">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => setSecondaryNavOpened((prev) => !prev)}>Məzmun</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətini əvəz etmir</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <h2 className="h2" id="streptodermiya-yaranma-sebəbləri">
              Streptodermiya yaranma səbəbləri
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

            <div className="list-base">
              <p>Streptodermiya yaranmasına səbəb olan amillər:</p>
              <ul>
                <li>dəri örtüyünün bütövlüyünün pozulması (mikrotravmalar, sürtülmələr, yara yerləri)</li>
                <li>gigiyenaya əməl olunmaması, tərləmə</li>
                <li>uşaq yaşı (çünki uşaqlarda dərinin pH-ı qələvidir)</li>
                <li>cərrahi tikişlərin, yanıqların, fistul yollarının olması</li>
                <li>
                  immunitetin zəifləməsinə səbəb olan ümumi somatik patologiya
                  <sup>
                    <a href="#edebiyyat-siyahisi">2</a>
                  </sup>
                </li>
              </ul>
            </div>

            <h2 className="h2" id="streptodermiya-xususiyyətləri">
              Streptodermiya xüsusiyyətləri
            </h2>

            <div className="list-base">
              <p>
                A qrupu streptokokkların səbəb olduğu birincili streptodermiya xüsusiyyətləri
                <sup>
                  <a href="#edebiyyat-siyahisi">1</a>
                </sup>
                :
              </p>
              <ul>
                <li>dərinin ifadəli şişməsi</li>
                <li>cüzi ifrazat (eksudasiya)</li>
                <li>infeksiya limfa və qan damarları ilə yayılır</li>
              </ul>
            </div>

            <picture className="img-normal">
              <source
                srcSet="/streptodermiya-illyustracziya-s-1-1at4x-650x151.webp"
                type="image/webp"
              />
              <Image
                src="/streptodermiya-illyustracziya-s-1-1at4x-650x151.webp"
                alt="Uşaqda streptodermiya inkişafı"
                width={650}
                height={151}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h2 className="h2" id="streptodermiya-novləri">
              Streptodermiya növləri
            </h2>

            <div className="list-base">
              <p>
                A qrupu streptokokkların səbəb olduğu xəstəliklər
                <sup>
                  <a href="#edebiyyat-siyahisi">1</a>
                </sup>
                :
              </p>
              <ul>
                <li>İmpetiqo</li>
                <li>Ektima</li>
                <li>Qabarıqlı distal daktilit</li>
                <li>Streptokokk yara yeri</li>
                <li>Streptokokk vulvovaginit</li>
                <li>Perianal streptokokk selülit</li>
                <li>Selülit (dərialtı piy toxumasının iltihabı)</li>
                <li>Kəskin limfangit</li>
                <li>Streptokokk qanqrenası</li>
              </ul>
            </div>

            <p>
              Düyünlü eritema, multiform eritema, damcı psoriazı, vaskülitin səbəbi də 
              orqanizmdə streptokokk infeksiyası ocağının olması ola bilər
              <sup>
                <a href="#edebiyyat-siyahisi">1</a>
              </sup>
              .
            </p>

            <h3 className="h3">İmpetiqo</h3>

            <p>
              İmpetiqo — çox yoluxucu xəstəlikdir, daha çox məktəbəqədər yaşlı uşaqlar xəstələnir, 
              lakin böyüklərdə də rast gəlinir. Dəridə qabıqla örtülmüş iltihab ocaqları yaranır. 
              Dəri səpkiləri ağrısız ola bilər və ya qaşınma və dəri yanması yarada bilər
              <sup>
                <a href="#edebiyyat-siyahisi">1</a>
              </sup>
              . Ağız boşluğunun selikli qişası, dodaqların qırmızı kənarı da zədələnə bilər
              <sup>
                <a href="#edebiyyat-siyahisi">3</a>
              </sup>
              .
            </p>

            <h3 className="h3">Ağız guşəsi (yarıqvari impetiqo)</h3>

            <p>
              Ağız və/və ya gözlərin guşələrində, həmçinin burun qanadlarının kökündə dəri qızarır, 
              şişkinlik yaranır, yarıqvari eroziya formalaşır. Ağız guşələrində dodaqların davamlı 
              hərəkəti və tüpürcəklə islanma səbəbindən qabıq pis əmələ gəlir. Xəstəlik xroniki 
              gedişə malik ola bilər
              <sup>
                <a href="#edebiyyat-siyahisi">2</a>
              </sup>
              .
            </p>

            <h3 className="h3">Ektima</h3>

            <p>
              İhmal edilmiş, daim travmaya məruz qalan impetiqo nəticəsində əmələ gəlir. 
              Qalın qabıqlı eroziya və xoraların formalaşması ilə xarakterizə olunur. 
              Kultural tədqiqat metodunda A qrupu streptokokklar və stafilokokk aşkar edilir
              <sup>
                <a href="#edebiyyat-siyahisi">1</a>
              </sup>
              .
            </p>

            <h3 className="h3">Streptokokk paronixiyası</h3>

            <p>
              Travma fonunda, məsələn, çapıqların dişlənməsi, manikür/pedikür edilməsi zamanı 
              dırnaq kənarı diyircəyinin iltihabı. Qızartı, ağrı yaranır, irinli məzmunlu 
              qabarcıq (pustula) formalaşır
              <sup>
                <a href="#edebiyyat-siyahisi">2</a>
              </sup>
              .
            </p>

            <h2 className="h2" id="streptodermiya-mualicəsi">
              Streptodermiya müalicəsi
            </h2>

            <p>
              Səthî streptodermiyalar xarici antiseptik və antibakterial vasitələrlə müalicə olunur
              <sup>
                <a href="#edebiyyat-siyahisi">2</a>
              </sup>
              .
            </p>

            <h3 className="h3">Səthī streptodermiyaların işlənməsi üçün Betadine® məhlulu</h3>

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
                <strong>Povidon-yod</strong>, Betadine preparatları xəttinin tərkib maddəsidir
                <sup>®</sup>
                <sup>
                  <a href="#edebiyyat-siyahisi">11</a>
                </sup>
                :
              </p>
              <ul>
                <li>
                  antibakterial, antifunqal, antiviral təsirə malikdir, sadə mikroorqanizmlərin məhvinə kömək edir
                </li>
                <li>
                  praktiki olaraq qan dövranına sorulmur, buna görə də zədələnmiş dərinin geniş sahələrində istifadə olunur
                </li>
                <li>
                  qəhvəyi rəngli nazik təbəqə əmələ gətirir, dərini davamlı rəngləmir və istənilən vaxt su ilə tamamilə yuyula bilər
                </li>
              </ul>

              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/betadin-rastvor-instruktsiya/"
                >
                  İstifadə təlimatı
                </a>
              </p>
            </div>

            <div className="green">
              <p>
                <strong>Betadine®</strong> məhlulu spirt ehtiva etmir, buna görə də zədələnmiş dəridə istifadə zamanı yandırmır
                <sup>
                  <a href="#edebiyyat-siyahisi">11</a>
                </sup>
                .
              </p>
            </div>

            <h3 className="h3">Streptodermiyada fukorsinin istifadəsi</h3>

            <p>
              <strong>Fukorsin</strong> bakterial və göbələk infeksiyasının törədicilərini məhv edir, gündə 2-4 dəfə istifadə edilməsi tövsiyə olunur. Tərkib maddələri: bor turşusu, fenol, rezorsin, fuksin. Çəhrayı rəngli maye, xarici istifadədə dərini davamlı rəngləyir və paltarı ləkələyir. Fenolun toksik təsiri səbəbindən geniş sahələrdə istifadə edilmir
              <sup>
                <a href="#edebiyyat-siyahisi">6</a>
              </sup>
              .
            </p>

            <h3 className="h3">Streptodermiyada zelyonkanın tətbiqi</h3>

            <p>
              <strong>Zelyonka (barlı yaşıl 1%)</strong> — yaşıl rəngli spirt məhlulu, yalnız qram-müsbət bakteriyaları məhv edir, sağlam dərini də əhatə edərək ocaqlara vurulur. Yandırma hissi yaradır, dərini rəngləyir
              <sup>
                <a href="#edebiyyat-siyahisi">7</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/od-a4-2at4x-650x167.webp"
                type="image/webp"
              />
              <Image
                src="/od-a4-2at4x-650x167.webp"
                alt="Zelyonka"
                width={650}
                height={167}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Streptodermiyada salisil turşusu</h3>

            <p>
              <strong>Salisil turşusunun spirt məhlulu</strong> antiseptik və iltihab əleyhinə təsirə malikdir, xarici istifadədə dərini sancır, qan dövranına sorula bilər. Vasitə hamilə qadınlara, əmizdirən analara və 1 yaşa qədər uşaqlara göstərilmir
              <sup>
                <a href="#edebiyyat-siyahisi">8</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/saliczilovaya-kislota-1-scaled-650x150.webp"
                type="image/webp"
              />
              <Image
                src="/saliczilovaya-kislota-1-scaled-650x150.webp"
                alt="Salisil turşusu"
                width={650}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <h3 className="h3">Streptodermiyada marqansovka məhlulu ilə işləmə</h3>

            <p>
              <strong>Marqansovkanın su məhlulu</strong> istifadədən dərhal əvvəl hazırlanır. Bunun üçün kalium permanqanat kristalları təmiz suda həll edilir. Təsir mexanizmi mikroorqanizmlərin hüceyrə divarının dağılması ilə əlaqədardır. Antiseptik məqsədlərlə 0,1%-5% konsentrasiyada istifadə olunur. Yaraların yandırılması və dezinfeksiyası üçün 5% məhlul hazırlanır (5 q quru kalium permanqanat 100 ml təmiz suda, distillə olunmuş suda həll edilir). İnfeksiya olunmuş ocaqların yuyulması üçün 0,1% istifadə olunur
              <sup>
                <a href="#edebiyyat-siyahisi">9</a>
              </sup>
              .
            </p>

            <picture className="img-normal">
              <source
                srcSet="/od-a3-2at4x-650x166.webp 1x, /od-a3-2at4x-1300x332.webp 2x"
                type="image/webp"
              />
              <Image
                src="/od-a3-2at4x-1300x332.webp"
                alt="Kalium permanqanat"
                width={650}
                height={166}
                loading="lazy"
                decoding="async"
              />
            </picture>

            <p>Hazırda kalium permanqanatın pərakəndə əczaçılıq şəbəkəsində satışı məhdudlaşdırılıb.</p>

            <h3 className="h3">Streptodermiyada xlorheksidin biqlukonat</h3>

            <p>
              <strong>Xlorheksidin biqlukonat məhlulu 0,05%</strong> bakterial və göbələk infeksiyasının törədicilərini məhv edir. Zədələnmiş dəridə istifadə zamanı yandırmır. Yaxşı dözülür, bəzən allergik reaksiyalar mümkündür. Xəstəyə dərmanın dərinin günəş işığına həssaslığını artırdığı barədə xəbərdarlıq edilməlidir. 18 yaşdan kiçik şəxslərə ehtiyatla təyin edilir
              <sup>
                <a href="#edebiyyat-siyahisi">10</a>
              </sup>
              .
            </p>

            <h3 className="h3">Streptodermiya müalicəsi üçün simptomatik preparatlar</h3>

            <p>
              <strong>Dəri prosesi yayılmışdırsa</strong>, həkim xarici antibakterial kremlər/məlhəmlər təyin edə bilər.
            </p>

            <p>
              Bəzi hallarda <strong>güclü qaşınma və ifadəli iltihab zamanı</strong> antibiotik və steroid iltihab əleyhinə maddə (hormon) olan kombinə edilmiş xarici vasitələr təyin edilir.
            </p>

            <p>
              <strong>Streptodermiya ağır gedişində</strong>, bədən istiliyinin yüksəlməsi, titrəmə zamanı penisillin, sefalosporin, tetrasiklin, aminoqlukozid qrupundan olan preparatlarla sistemli antibakterial terapiya göstərilir. Bütün müalicə müddətində su prosedurlarının məhdudlaşdırılması tövsiyə olunur.
            </p>

            <h2 className="h2" id="streptodermiya-profilaktikasi">
              Streptodermiya profilaktikası
            </h2>

            <p>
              Streptodermiya profilaktikasının əsası infeksiyanın daxilolma qapılarının: sürtülmələrin, kəsiklərin, yaraların vaxtında işlənməsidir. Risk qrupuna şəkərli diabet, immunçatışmazlıq, qaraciyər sirrozu, onkoloji xəstəlikləri olan xəstələrin daxil olduğunu nəzərə alaraq, bu xəstəliklərin müalicəsi və öz dəri örtüyünə daha qayğıkeş və diqqətli münasibət zəruridir. Vaxtında başlanılan müalicə infeksion dəri prosesinin yayılmasının tez aradan qaldırılmasına, həmçinin həyat üçün təhlükəli ağırlaşmaların (məsələn, qan zəhərlənməsi) ehtimalını azaltmağa imkan verir.
            </p>

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

            <h2 className="h2" id="tez-tez-verilən-suallar">
              Suallara cavablar
            </h2>

            <h3 className="h3">Streptodermiya necə başlayır?</h3>

            <p>
              Streptodermiya klinik mənzərəsi yüngül formalardan ağır formalara qədər dəyişir. Klinik mənzərənin dəyişkənliyini nəzərə alsaq, diaqnozu müstəqil olaraq düzgün qoymaq əksər hallarda mümkün deyil. Bir qayda olaraq, iltihabi elementlər səthi, qabıqla örtülü olur. Sağlam dəri sahələrinə yayılma meyli var, ağrılı hisslər olmaya da bilər. Adətən xəstəliyin başlanğıcı ilə əvvəlki dəri travması arasında əlaqə müəyyən edilir.
            </p>

            <h3 className="h3">Streptodermiyada hansı həkimə müraciət edilir?</h3>

            <p>
              Səthī streptodermiya müalicəsi ilə dermatoloq-veneroloq məşğul olur. Zərurət yarandıqda əlaqəli mütəxəssislərin: terapevtin, stomatoloqun (xroniki infeksiya ocaqlarını aşkar etmək üçün), endokrinoloq, cərrahın konsultasiyası göstərilə bilər.
            </p>

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

            <div className="h2 h2-read-more" id="movzu-uzre-oxu">
              Mövzu üzrə oxu
            </div>

            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/prevyubanner-infekczionnyj-dermatit-246x166.webp"
                        type="image/webp"
                      />
                      <Image
                        src="/prevyubanner-infekczionnyj-dermatit-246x166.webp"
                        alt="İnfeksion dermatit anons"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>İnfeksion dermatit</strong>
                    </p>
                    <p>
                      İnfeksion dermatit: müalicə və preparatlar haqqında hər şey
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/infekcionnyy-dermatit/">Ətraflı</Link>
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
                        src="/povidon-jod-prevyu-620x420.webp"
                        alt="Povidon-yod - anons"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Povidon yod</strong>
                    </p>
                    <p>
                      Povidon-yodun xarakteristikaları və xüsusiyyətləri. Povidon-yod nə üçün istifadə olunur? Povidon-yod tərkibli Betadine<sup>®</sup> məhlulunun, məlhəmin, şamların istifadə təlimatı.
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
                        alt="Piodermiya: müalicə, məlhəmlər, kremlər, vasitələr - anons"
                        width={246}
                        height={166}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Piodermiya: müalicə, məlhəmlər, kremlər, vasitələr</strong>
                    </p>
                    <p>
                      Piodermiya yaranma səbəbləri, əlamətləri, növləri və müalicə üsulları. İrinli xəstəliklərin profilaktikası.
                    </p>
                    <p className="slide-more">
                      <Link href="/encyclopedia/piodermiya/">Ətraflı</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="h2" id="edebiyyat-siyahisi">
              Ədəbiyyat siyahısı
            </h2>

            <ol className="literature">
              <li id="literatura-0">
                Klinik praktikada Fitzpatrik Dermatologiyası, ikinci nəşr, 3-cü cild, 2018-ci il.
              </li>
              <li id="literatura-1">
                Piodermiyalı xəstələrin aparılması üzrə Federal klinik tövsiyələr. Ümumrusiya ictimai təşkilatı "Rusiya dermatoloq-veneroloqlar və kosmetoloqlar cəmiyyəti". Moskva. 2015-ci il.
              </li>
              <li id="literatura-2">
                Butov Yu.S., Skripkin Yu.K., İvanova O.L., Dermatovenerologiya. Milli rəhbərlik. 2017-ci il.
              </li>
              <li id="literatura-3">
                Fernández G., Martínez Q., Bernácer B., Sarasa C. La gangrena estreptocócica y la así llamada «enfermedad de
                las bacterias devoradoras de carne». Una infectión rara y devastadora [Streptokokk qanqrenası və belə adlandırılan "ət yeyən bakteriyalar xəstəliyi". Nadir və dağıdıcı xəstəlik]. Rev Clin, xüsusilə 1999, fevral; 199 (2):84-8. İspan dili. PMID: 10216400.
              </li>
              <li id="literatura-4">
                Lipatov K.V., Komarova Ye.A., Quryanov R.A., Yumşaq toxumaların streptokokk nekrotikləşdirici infeksiyasının diaqnostikası və cərrahi müalicəsi. Ümumi cərrahiyyə kafedrası ГБОУ ВПО "Birinci Moskva Dövlət Tibb Universiteti adı İ. M. Seçenov". Rusiya Səhiyyə Nazirliyi, "Yaralar və yara infeksiyaları" — professor B.M. Kostyuçenko adına jurnal, DOI: 10.17650/2408-9613-2015-2-1-6-12.
              </li>
              <li id="literatura-5">
                Dərman vasitələri reyestri, Fukorsin məhlulunun rəsmi təlimatı.
              </li>
              <li id="literatura-6">
                Dərman vasitələri reyestri, 1% barlı yaşıl məhlulunun rəsmi təlimatı.
              </li>
              <li id="literatura-7">
                Dərman vasitələri reyestri, salisil turşusunun spirt məhlulunun rəsmi təlimatı.
              </li>
              <li id="literatura-8">
                Dərman vasitələri reyestri, kalium permanqanat məhlulu hazırlamaq üçün tozun rəsmi təlimatı.
              </li>
              <li id="literatura-9">
                Dərman vasitələri reyestri, xlorheksidin biqlukonat preparatının rəsmi təlimatı.
              </li>
              <li id="literatura-10">
                Betadine Məhlulunun tibbi tətbiqi üzrə təlimat. QN: П№015282/03.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}