'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ScrollGoals {
  [key: number]: () => void;
}

interface Triggered {
  [key: number]: boolean;
}

export default function RanyUDetejAz() {
  const [isScrollTracked, setIsScrollTracked] = useState(false);

  useEffect(() => {
    const scrollGoals: ScrollGoals = {
      40: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Skrol40');
        }
      },
      80: () => {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(37744585, 'reachGoal', 'Skrol80');
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
    setIsScrollTracked(true);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
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
                  <span property="name">Uşaqlarda yaralar, dişləmələr və sıyrıqlar</span>
                </Link>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">Uşaqlarda yaralar, dişləmələr və sıyrıqlar</span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>

          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                  <h1 className="page-header-title-text">
                  Uşaqlarda yaralar, dişləmələr və sıyrıqlar: müalicə və qulluq
                </h1>
                <picture>
                  <source
                    srcSet="/icon-230x224.webp 1x"
                    type="image/webp"
                  />
                  <Image
                    height={112}
                    width={115}
                    src="/icon.png"
                    alt="başlıq şəkli"
                  />
                </picture>
              </div>
              <h2 className="page-header-subtitle">Uşaqlarda yaranın növləri</h2>
              <div className="page-header-body">
                <p>
                  Aktivlik və maraq səbəbindən uşaqlar tez-tez travma alırlar. <strong>Yaralar</strong>
                  dərinin, selikli qişaların, dərialtı yağ toxumasının, əzələlərin və digər orqan
                  hissələrinin bütövlüyünün pozulması nəticəsində yaranır.
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li>
                  <a href="#pervaya-pomoshch-rebenku-pri-poverhnostnyh-ranah">
                    Uşağa ilkin yardım
                  </a>
                </li>
                <li>
                  <a href="#rastvor-betadin-povidon-yod-dlya-dezinfekcii-detskih-ran">
                    Yaraların və dişləmələrin dezinfeksiyası üçün vasitələr
                  </a>
                </li>
                <li>
                  <a href="#process-zazhivleniya-detskih-ran">Uşaqlarda yaraların və dişləmələrin sağalması</a>
                </li>
              </ul>
            </div>

            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source
                    srcSet="/frame-655-1-1460x1230.webp 2x"
                    type="image/webp"
                  />
                  <Image
                    fetchPriority="high"
                    height={615}
                    width={730}
                    src="/frame-655-1-730x615.webp"
                    alt="Uşaqlarda yaralar"
                  />
                </picture>
              </div>
            </div>
          </div>

          <nav className="nav-content">
            <ul>
              <li>
                <a href="#harakternye-priznaki-ran">Yaranın xarakterik əlamətləri</a>
              </li>
              <li>
                <a href="#pervaya-pomoshch-rebenku-pri-poverhnostnyh-ranah">
                  Səthi yaralarda uşağa ilkin yardım
                </a>
              </li>
              <li>
                <a href="#process-zazhivleniya-detskih-ran">Uşaqlarda yaraların sağalma prosesi</a>
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
                <a href="#harakternye-priznaki-ran">Yaranın xarakterik əlamətləri</a>
              </li>
              <li>
                <a href="#pervaya-pomoshch-rebenku-pri-poverhnostnyh-ranah">
                  Səthi yaralarda uşağa ilkin yardım
                </a>
              </li>
              <li>
                <a href="#process-zazhivleniya-detskih-ran">Uşaqlarda yaraların sağalma prosesi</a>
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
        <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətinin yerini tutmaz</div>
      </div>

      <div className="page-content-wrapper">
        <div className="container container-middle page-content">
          <p>
            Yalnız dəri səthinin zədələndiyi yaralar <strong>sıyrıqlar</strong>
            <sup>
              <a href="#literatura-0">1</a>
            </sup>
            .
          </p>

          <p>
            <strong>Yaraların növləri</strong>
          </p>

          <div className="exlude-turbo">
            <picture className="banner-betadin banner-circle">
              <source
                srcSet="/circle-1006x1010.webp 2x"
                type="image/webp"
              />
              <Image
                height={505}
                width={503}
                src="/circle-503x505.webp"
                alt="Bəzək elementləri"
              />
            </picture>
          </div>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-4-1300x300.webp 2x"
              type="image/webp"
            />
              <Image
              loading="lazy"
              height={150}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-4-650x150.webp"
              alt="Yaraların növləri"
            />
          </picture>

          <picture className="img-normal">
            <source
              srcSet="/medical-kit-and-bandaid-509398-488-1-3-1300x650.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={325}
              width={650}
              src="/medical-kit-and-bandaid-509398-488-1-3-650x325.webp"
              alt="Yaraların növləri 2"
            />
          </picture>

          <p>
            Uşaqlarda yaralar kiçik ola bilər (cızıq, sıyrıq, kiçik
            <Link href="/encyclopedia/porezy/" title="7. Kəsiklər">
              kəsiklər
            </Link>
            ) və ya ciddi ola bilər, həyatı təhlükə altına alan vəziyyətlərə: kütləvi qan itkisi,
            şok vəziyyəti gətirib çıxara bilər.
          </p>

          <p>
            Yarə infeksiyasının yüksək riski nəzərə alınaraq <strong>dişlənmiş yaralara</strong>
            xüsusi diqqətlə yanaşmaq lazımdır. Sahibsiz pişik, it və ya vəhşi heyvanların dişləmələri
            ağır viral komplikasiya – quduzluğa səbəb ola bilər. Buna görə heyvanda quduzluq şübhəsi
            olduqda və ya heyvanın tüpürcəyinin təzə və ya mövcud yaranın üzərinə düşmə riski varsa,
            zərərçəkmiş uşağı antirabik serum üçün tibbi müəssisəyə aparmaq lazımdır.
          </p>

          <p>
            İlan və zəhərli həşəratların sancmaları da təhlükəlidir və dərhal tibbi yardım tələb
            edir. Belə yaralar tibbdə <strong>zəhərlənmiş yaralar</strong>
            <sup>
              <a href="#literatura-0">1</a>
            </sup>
            .
          </p>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-12-1300x650.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={325}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-12-650x325.webp"
              alt="Uşağa başqa uşağın dişləməsi zamanı ilkin yardım"
            />
          </picture>

          <p>
            <strong>Kəsilmiş yaralar</strong> (kəsiklər) iti kəsici alətlərlə yaranır. Bu yaranın kənarları
            düz olur, yara kanalı açıqdır. Kənarların sıx birləşməsi şərti ilə kəsilmiş yaralar yaxşı
            sağalır. Buna görə də hər cür yaraların cərrahi müalicəsində həkimlər düz kəsilmiş kənarlar
            yaratmağa çalışırlar.
          </p>

          <p>
            <strong>Doğranmış yaralar</strong> – ağır, iti əşyaların (balta, kürek və s.) təsiri nəticəsində
            yaranır. Onlar kifayət qədər dərin olur və böyük qan damarlarının və daxili orqanların
            zədələnmə riski yüksəkdir. Doğranmış yara güclü ağrı, əhəmiyyətli qanaxma və açıq vəziyyətlə
            xarakterizə olunur.
          </p>

          <p>
            <strong>Əzilmə-cırılma yaraları</strong> yıxılma və ya ağır küt əşyanın zərbəsi nəticəsində
            yarana bilər. Bu tip yaraların kənarları düzensiz olur.
          </p>

          <p>
            Yaralar <strong>delici və delici-kəsici</strong> ola bilər. Bu cür yaralar tez-tez
            nüfuzedici və ağırlaşmış olur.
          </p>

          <p>
            Yaranın infeksiyası inkişaf etdikdə, lokal iltihab simptomlarından əlavə irinli ifrazatlar
            meydana gəlir və ümumi vəziyyətdə pisləşmə müşahidə oluna bilər: zəiflik, hərarətin
            yüksəlməsi, titrəmə, iştahanın azalması və ürək döyüntülərinin sürətlənməsi.
          </p>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-11-1300x300.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={150}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-11-650x150.webp"
              alt="Başqa uşaq dişlədikdə uşağa ilkin yardım"
            />
          </picture>

          <div className="block-with-image">
            <div className="block-with-image__green">
              <p>
                <strong>İnfeksiyalı yaralar</strong>
              </p>
              <p>
                Hər sıyrıq və kəsik sürətlə və ağırlaşmadan sağalmır. İnfeksiyalaşmış yaralar necə
                müalicə olunur?
              </p>
              <Link href="/encyclopedia/rany-s-infekciej/" className="btn btn-green" target="_blank">
                Ətraflı
              </Link>
            </div>
            <picture>
              <source
                srcSet="/rany-s-infekcziej-prevyu-620x420.webp 2x"
                type="image/webp"
              />
                <Image
                  loading="lazy"
                  height={150}
                  width={650}
                  src="/istockphoto-1341663000-2048x2048-2-3-3-650x150.webp"
                  alt="Uşaqların səthi yaralarının müalicə ardıcıllığı"
                />
            </picture>
          </div>

          <h2 className="h2" id="harakternye-priznaki-ran">
            Yaranın xarakterik əlamətləri
          </h2>

          <p>
            Hər növ yara üçün xarakterikdir: <strong>ağrı</strong>, görünən <strong>açıq yara</strong>
            və <strong>qanaxma</strong>.
          </p>

          <p>
            Ağrı hisslərinin intensivliyi sinir liflərinin sayına və zədələnmə dərəcəsinə bağlıdır.
            Səthi yarada ağrı yalnız travma anında yaranır və nisbətən tez keçir. Əgər ağrı güclüdür və
            uzun müddət keçmirsə, bu gözlə görünməyən zədələnmə və daxili toxumalarda sinir reseptorlarının
            həddən artıq qıcıqlanması ilə əlaqəlidir.
          </p>

          <p>
            Yaralanma nəticəsində qanaxma xarici və daxili ola bilər (qan toxumalara və ya bədən
            boşluqlarına axa bilər). Qanaxmanın həcmi və müddəti zədələnmənin sahəsinə, dərinliyinə və
            qan laxtalanması sisteminin vəziyyətinə bağlıdır.
          </p>

          <div className="list-base">
            <p>
              <strong>Ağır yaraların əlamətləri:</strong>
            </p>
            <ul>
              <li>
                şok vəziyyəti, oksigen çatışmazlığı ilə nəfəs darlığı və nəticədə şüurun pozulması
              </li>
              <li>ağrı şoku</li>
              <li>yarada infeksiya və sonrakı ağırlaşmalar</li>
            </ul>
          </div>

          <div className="green">
            <p>
              Yaranın <strong>infeksiyalaşdığını</strong> artan
              <strong> nabzlanan ağrı, şişlik və irinli ifrazat</strong> göstərəcək. Zədələnmiş
              nahiyənin dərisi toxunuşa isti olacaq.
            </p>
          </div>

          <div className="iframe">
            <div className="bg_default bg_green"></div>
            <div className="h3 h3_green iframe-title">
              Uşağın yaralarının müalicə alqoritmini qısa videoda izləyin:
            </div>
            <div className="iframe-container">
              <iframe
                className="lazyloaded"
                src="https://rutube.ru/play/embed/b4d481279bdfcbafbb01e36ea31c0c4b/?p=aVSDYD--vLEfYAnNlSgG-Q"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="iframe_desc">
              Videodan uşağa narahatlıq vermədən hansı antiseptiklərlə yaranı dezinfeksiya etmək
              mümkün olduğunu öyrənəcəksiniz.
            </div>
          </div>

          <h2 className="h2" id="pervaya-pomoshch-rebenku-pri-poverhnostnyh-ranah">
            Səthi yaralarda uşağa ilkin yardım
          </h2>

          <p>
            Kəsiklərdə, sıyrıqlarda və cızıqda əsas məqsəd defektin mümkün qədər tez sağalmasını
            təmin etmək və yaraya patogen mikroorqanizmlərin yoluxmasının qarşısını almaqdır.
          </p>

          <p>
            <strong>Uşaqların səthi yaralarının müalicə ardıcıllığı</strong>
          </p>

          <div className="big">
            <div className="line">
              <div>
                  <p>
                  <strong>Yuma</strong>
                </p>
                <ol>
                  <li>İlıq su + sabun</li>
                  <li>Xlorheksidin/furasilin/hidrojen peroksid 3% məhlulu</li>
                  <li>Yaranı qurudun: salfet ilə yüngülcə səpin</li>
                </ol>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Dezinfeksiya</strong>
                </p>
                <p>
                  Yod və brilliant-yaşıl antiseptik (zelyonka) yanma və ağrı yarada bilər.
                  <br />
                  <strong>
                    Məhlul <span style={{ color: '#0f780b' }}>Betadin®</span>
                   </strong>
                </p>
                <ul>
                  <li>ağrı vermir</li>
                  <li>sancıtmır</li>
                  <li>yandırmır</li>
                  <li>dərini daimi boyamır</li>
                </ul>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Sarğı/Plastr qoyulması</strong>
                </p>
                <p>Plastr və ya sarğı — mikrobların daxil olmasının qarşısını alır.</p>
                <p>
                  <br />
                  Plastrsız yara daha tez sağalır, lakin mikroblar daxil ola bilər.
                </p>
              </div>
            </div>
          </div>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-3-3-1300x300.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={150}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-3-3-650x150.webp"
              alt="Uşaqların səthi yaralarının müalicə ardıcıllığı"
            />
          </picture>

          <h3 className="h3" id="rastvor-betadin-povidon-yod-dlya-dezinfekcii-detskih-ran">
            Betadin® məhlulu (povidon-yod) – uşaqların yaralarının dezinfeksiyası üçün
          </h3>

          <div className="product-block">
            <div className="banner-product-img">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/banner-betadin-927x916.webp 2x"
                  type="image/webp"
                />
                <Image
                  height={916}
                  width={927}
                  src="/banner-betadin-927x916.webp"
                  alt="Betadin"
                />
              </picture>
            </div>
            <p>Povidon-yod əsaslı məhlul (Betadin®):</p>
            <ul>
              <li>antiseptik və dezinfeksiyaedici təsirə malikdir</li>
              <li>bakteriya, virus, protozoa və göbələk infeksiyalarının məhv edilməsinə kömək edir</li>
              <li>xarici və yerli tətbiqdə praktiki olaraq qan dövranına sovrulmur</li>
            </ul>
            <p className="buttons">
              <Link
                className="btn btn-green btn-green-instruction"
                href="/betadin-rastvor-instruktsiya/"
              >
                Təlimat
              </Link>
            </p>
          </div>

          <div className="green">
            <p>
              Uşaqların yaralarını dezinfeksiya etmək üçün <Link href="/encyclopedia/povidon-jod/">povidon-yod</Link>
              məhlulundan – <strong>
                <span style={{ color: '#0f780b' }}>Бетадин®</span>
              </strong> istifadə etmək olar. Bu məhluldakı yod xüsusi kompleksin tərkibinə daxil olur.
              Yodun kompleksdən tədricən ayrılması onun antimikrob fəaliyyətini uzadır; yod mikroorqanizmlərin
              zülalları ilə birləşərək onların məhvinə səbəb olur
              <sup>
                <a href="#literatura-5">6</a>
              </sup>
              .
            </p>
          </div>

          <p>
            Məhlul <strong>
              <span style={{ color: '#0f780b' }}>Betadin®</span>
            </strong> spirt tərkibli deyil, buna görə də dərini sancıtmır və yandırmır, hətta yeni yaranı da.
          </p>

          <p>
            Preparat yara infeksiyasının bir çox törədicilərinə qarşı aktivdir. Gram-müsbət və
            gram-mənfi bakteriyalara bakterisid təsir göstərir. Göbələklərə, viruslara, protozoalara və
            mikroorqanizmlərin sporlarına qarşı da aktivdir
            <sup>
              <a href="#literatura-6">7</a>
            </sup>
            . Yaraların və sıyrıqların emalında 10% konsentrat <strong>
              <span style={{ color: '#0f780b' }}>Betadin®</span>
            </strong> istifadə edilə bilər
            <sup>
              <a href="#literatura-1">2</a>
            </sup>
            .
          </p>

          <div className="green">
            <p>
              <strong>
                Betadin®-in uşaqlarda istifadəsinə dair ehtiyat tədbirləri və əks göstərişlər
              </strong>
              <br />
              Betadin® məhlulunun gözə düşməsinə yol verməyin! Dəridə qaşınma və ya qızarma
              baş verərsə, bu antiseptikin istifadəsini dayandırın. Vasitə yeni doğulmuş körpələrdə
              (28 gündən kiçik) və qalxanabənzər vəzi xəstəliyi olan şəxslərdə istifadə üçün əks göstərişdir
              <sup>
                <a href="#literatura-1">2</a>
              </sup>
              .
            </p>
          </div>

          <h3 className="h3" id="promyvanie-rany-s-pomoshchyu-drugih-farmakologicheskih-sredstv">
            Yaranın digər farmakoloji vasitələrlə yuyulması
          </h3>

          <p>
            Yara kanalını xlorheksidin, furasilin və ya 3% hidrojen peroksid məhlulu ilə yumaq olar
            (hidrojen peroksidin istifadəsi yaranın sağalma müddətini uzada bilər
            <sup>
              <a href="#literatura-8">8</a>
            </sup>
            <sup>
              <a href="#literatura-8">9</a>
            </sup>
            ). Əgər dərman vasitələri yoxdursa, təmiz soyudulmuş qaynadılmış su istifadə oluna bilər.
          </p>

          <h3 className="h3" id="nalozhenie-povyazki-posle-obrabotki-rany">
            Yaranı emaldan sonra sarğı qoyulması
          </h3>

          <p>
            Emaldan sonra yaranın üzərinə təmiz sarğı və ya tibbi plastır qoyulur, bu da açıq yarayı
            zərərli mikroorqanizmlərdən qoruyur. Sarğıları vaxtında təmizlərlə dəyişmək lazımdır.
          </p>

          <p>
            Sağalma dövründə infeksiyanın riskini azaltmaq üçün <strong>
              Бетадин® мазı
            </strong> istifadə edilə bilər. İnfeksiyalaşmış yaralara Betadin® məhlulu və ya maz ilə
            isladılmış salfetlər tətbiq edildikdə ilk 5–7 gün ərzində şişkinlik, irinli ifrazatın miqdarı
            və ağrı azalır
            <sup>
              <a href="#literatura-2">3</a>
            </sup>
            . Sağalma prosesini sürətləndirmək üçün Betadin® mazı gün ərzində 2–3 dəfə nazik qatla
            yara səthinə tətbiq etmək olar; lazım gəldikdə sarğı altında da istifadə etmək mümkündür
            <sup>
              <a href="#literatura-1">2</a>
            </sup>
            .
          </p>

          <div className="green">
            <p>
              <strong>
                Ağır yaralarda, qanaxma olduqda, yaralanma yeri torpaq və ya digər yad cisimlərlə
                çirkləndikdə <strong>dərcikcə həkimə müraciət etmək</strong> məsləhətdir.
              </strong>
            </p>
          </div>

          <h2 className="h2" id="process-zazhivleniya-detskih-ran">
            Uşaqlarda yaraların sağalma prosesi
          </h2>

          <div className="list-base">
              <p>
              <strong>Yaranın sağalması mərhələlərlə baş verir</strong>
              <sup>
                <a href="#literatura-4">4</a>
              </sup>
              :
            </p>
            <ul>
              <li>İltihab fazası</li>
              <li>Regenerasiya fazası</li>
              <li>Yetişmə fazası</li>
            </ul>
          </div>

          <picture className="img-normal">
            <source
              srcSet="/istockphoto-1341663000-2048x2048-2-3-4-1300x300.webp 2x"
              type="image/webp"
            />
            <Image
              loading="lazy"
              height={150}
              width={650}
              src="/istockphoto-1341663000-2048x2048-2-3-4-650x150.webp"
              alt="Uşaqların yaralarının sağalma prosesi"
            />
          </picture>

          <h3 className="h3" id="i-faza-vospaleniya">
            I. İltihab fazası
          </h3>

          <p>
            Yaralanmadan sonra zədələnmiş bölgəyə qan axır, 5–10 dəqiqə ərzində damarlar daralır,
            qan laxtası əmələ gəlir və qanaxma dayanır. Yaralanmadan sonra ilk 72 saat ərzində
            damar keçirmə qabiliyyətinin artması nəticəsində qızarma, şişkinlik və ağrı, həmçinin
            ətraf toxumalarda temperaturun artması müşahidə oluna bilər.
          </p>

          <p>
            Bütün bu müddət ərzində yaraya xüsusi müdafiəedici immun hüceyrələri – leykositlər axın
            edir və sonradan bakteriyaları məhv edirlər. Qabıq əmələ gəlir. İnfeksiya olmadıqda
            leykositlərin sayı azalır. Zədələnmiş damarların yerinə yeni damarların formalaşması və yeni
            toxuma hissələrinin yaranması prosesi baş verir.
          </p>

          <h3 className="h3" id="ii-faza-regeneracii">
            II. Regenerasiya fazası
          </h3>

          <p>
            Zədələnmiş toxumaların ətrafındakı şişkinliyin azalması ikinci fazanın – sağalma
            (regenerasiya) başlanğıcının göstəricisidir.
          </p>

          <p>
            Yaraların sağalması adətən 5 gündən 3 həftəyədək davam edir. Yeni damarların
            yaranması ilə yanaşı kollagen sintezi – toxumaların “tikinti elementi” aktivləşir. Bu
            mərhələnin başlaması gözlə görünür – yaranın kənarları bir-birinə doğru çəkilir. Travmanın
            yerləşməsindən asılı olaraq sağalma sürəti dəyişə bilər
            <sup>
              <a href="#literatura-4">5</a>
            </sup>
            . Hərəkətli bədən hissələrində və oynaqlar ətrafında sağalma daha ləng olur. Dərinin kənar
            toxumalarının ayrılma riskini azaltmaq üçün tikişlərin götürülməsi üçün təxmini müddətlər
            mövcuddur. Məsələn, üz və boyun dəri tikişləri 2–5 gün sonra, daban tikişləri isə təxminən
            iki həftə sonra götürülür.
          </p>

          <h3 className="h3" id="iii-faza-sozrevaniya">
            III. Yetişmə fazası
          </h3>

          <p>
            Bu fazada çapıq toxuması yetişir. Növbəti 3 ay ərzində çapıq açılaraq daha yumşaq
            olur və vizual olaraq ətraf sağlam dəri nahiyələrindən fərqlənməyə bilər.
          </p>

          <div className="exlude-turbo">
            <picture className="banner-betadin banner-quastion">
              <source
                srcSet="/quastion-1115x1084.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={542}
                width={558}
                src="/quastion-558x542.webp"
                alt="Bəzək elementləri"
              />
            </picture>
          </div>

          <h2 className="h2" id="chasto-zadavaemye-voprosy">
            Tez-tez verilən suallar
          </h2>

          <h3 className="h3" id="posle-zazhivleniya-rany-ostalsya-obemnyy-nekrasivyy-rubec-kak-uluchshit-vneshniy-vid">
            Yar sağalandan sonra həcmli çatıq qaldısa, xarici görünüşü necə yaxşılaşdırmaq olar?
          </h3>

          <p>
            Zamanla çapıqlar yumşalır və düzləşir. Əgər bu baş vermirsə, hipertrofik və ya keloid
            çapıq əmələ gəlmiş ola bilər – bu, fibroz toxumasının patoloji artımıdır. Bu hallar
            dermatoloq-kosmetoloq tərəfindən müalicə olunur. Silikon əsaslı xüsusi vasitələr,
            iltihabəleyhinə hormonların fokus daxilinə vurulan inyeksiyaları təyin edilir, bəzən isə
            cərrahi eksizyon tələb oluna bilər.
          </p>

          <h3 className="h3" id="kak-dolgo-sohranyaetsya-bol-v-oblasti-rany">
            Yar nahiyəsində ağrı nə qədər davam edir?
          </h3>

          <p>
            Ağrı müddəti zədələnmənin xarakterindən və həcmidən asılıdır. İlk 5 gün ərzində ağrının
            tədricən azalması gözlənilir. Əgər bu baş vermirsə, həkimə müraciət etmək lazımdır; yara
            irinlənə bilər.
          </p>

          <h3 className="h3" id="skolko-dney-nuzhno-obrabatyvat-ranu-antiseptikom">
            Yaranı neçə gün antiseptiklə işləmək lazımdır?
          </h3>

          <p>Cərrahi yaranın baxımı üzrə müalicə həkiminin tövsiyələrinə əməl etmək lazımdır.</p>

          <p>
            Kiçik məişət yaralarını dezinfeksiya edərkən, emal qabığının formalaşmasına qədər (adətən 5–7
            gün) davam edilir. Sonra antiseptik emal tələb olunmaya bilər, çünki qabıq yarını infeksiyadan
            qoruyur. Əsas odur ki, qabığın vaxtından əvvəl düşməsinə imkan verməyəsiniz.
          </p>

          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">Moşkova Elena Mixaylovna</p>
                <div className="autor-subtitle"></div>
                <p className="autor-footer">Məqalənin müəllifi</p>
            </div>
            <picture>
              <source
                srcSet="/moshkova-novyj-406x406.webp 2x"
                type="image/webp"
              />
              <Image
                loading="lazy"
                height={203}
                width={203}
                src="/moshkova-novyj-203x203.webp"
                alt="Moşkova Elena Mixaylovna"
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
                      srcSet="/rany-s-infekcziej-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      loading="lazy"
                      height={166}
                      width={246}
                      src="/rany-s-infekcziej-prevyu-246x166.webp"
                      alt="İnfeksiyalı yaralar - önizləmə"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>İnfeksiyalı yaralar</strong>
                  </p>
                  <p>
                    Hər sıyrıq və kəsik sürətlə və ağırlaşmasız sağalmır. İnfeksiyalaşmış yaralar necə müalicə
                    olunur?
                  </p>
                  <p className="slide-more">
                    <Link href="/encyclopedia/rany-s-infekciej/">Ətraflı</Link>
                  </p>
                </div>
              </div>

              <div className="swiper-slide swiper-slide-next">
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="/povidon-jod-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      loading="lazy"
                      height={166}
                      width={246}
                      src="/povidon-jod-prevyu-246x166.webp"
                      alt="Povidon-yod - önizləmə"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Povidon-yod</strong>
                  </p>
                  <p>
                    Povidon-yodun xüsusiyyətləri və təsiri. Povidon-yod nə üçün istifadə olunur?
                    Məhlulun, mazın və şamların istifadə təlimatı.
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
                      srcSet="/chem-obrabotat-ranu-rebenku-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <Image
                      loading="lazy"
                      height={166}
                      width={246}
                      src="/chem-obrabotat-ranu-rebenku-prevyu-246x166.webp"
                      alt="Uşağın yarasını necə dezinfeksiya etmək - önizləmə"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Uşağın yarasını necə dezinfeksiya etmək</strong>
                  </p>
                  <p>Təhlükəsiz və effektiv vasitə seçimi uşaqların yaralarının emalı üçün.</p>
                  <p className="slide-more">
                    <Link href="/encyclopedia/chem-obrabotat-ranu-rebenku/">Ətraflı</Link>
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
              Михайловича В.А., Мирошниченко А.Г. Руководство для врачей скорой медицинской помощи//
              4е издание//Издательство МАПО, 2007.
            </li>
            <li id="literatura-1">
              Инструкция по медицинскому применению ЛП Бетадин® (раствор, мазь), РУ П№015282/03,
              П№015282/02.
            </li>
            <li id="literatura-2">
              РМЖ №29 от 23.12.2010 «Применение препарата Бетадин® в лечении инфицированных ран»
              авторы: В.В. Михальский, А.Е.Богданов, С.В.Жилина, А.И Привиденцев, А.И.Аникин, А.А.
              Ульянина.
            </li>
            <li id="literatura-3">
              Михальский В. В., Богданов А. Е., Жилина С. В., Привиденцев А. И., Аникин А. И.,
              Ульянина А. А.. Применение препарата Бетадин в лечении инфицированных ран// РМЖ №29 от
              23.12.2010.
            </li>
            <li id="literatura-4">
              Ключевский В.В. Хирургия повреждений//Руководство для фельдшеров, хирургов,
              травматологов// ОАО Рыбинский Дом печати 2004, Ярославль.
            </li>
            <li id="literatura-5">
              Bigliardi P.L. et al. Povidone iodine in wound healing: A review of current concepts and
              practices International Journal of Surgery 44, 2017.
            </li>
            <li id="literatura-6">
              Борисов И. В. Повидон-йод – новые возможности знакомого препарата//Раны и раневые
              инфекции 2021, 8 (3): 12-18.
            </li>
            <li id="literatura-7">
              Мартынов А.И., Кокорин В.А., Внутренняя медицина, основанная на доказательствах//
              Практическая Медицина, Краков, Польша 2018.
            </li>
            <li id="literatura-8">
              Трошин Н. Стоит ли так активно использовать 3% раствор перекиси водорода при
              хирургических вмешательствах? //РМЖ №25 от 15.12.2005.
            </li>
          </ol>
        </div>
      </div>
    </article>
  );
}
