"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const RanaIliTsarapinaNaRukeAz: React.FC = () => {
  const triggeredRef = useRef<Record<number, boolean>>({ 25: false, 50: false, 75: false, 100: false });
  const [navOpened, setNavOpened] = useState(false);
  const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
  const [navTitleHidden, setNavTitleHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldHide = window.scrollY >= 1000;
      setNavTitleHidden(shouldHide);
      if (shouldHide) {
        setSecondaryNavOpened(false);
      }
    };

    const handleResize = () => {
      setNavOpened(false);
      setSecondaryNavOpened(false);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scrollGoals: { [k: number]: () => void } = {
      25: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг25'),
      50: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг50'),
      75: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг75'),
      100: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Скроллинг100'),
    };
    const checkScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor(((scrollTop + winHeight) / docHeight) * 100);
      for (const percent of [25, 50, 75, 100]) {
        if (scrollPercent >= percent && !triggeredRef.current[percent]) {
          triggeredRef.current[percent] = true;
          scrollGoals[percent]?.();
          // eslint-disable-next-line no-console
          console.log(percent);
        }
      }
      if ((Object.values(triggeredRef.current) as boolean[]).every((v) => v)) {
        window.removeEventListener('scroll', checkScroll);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <main>
      <article>
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
                    <span property="name">Əldə yara və ya cızıq</span>
                  </a>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">Əldə yara və ya cızıq</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">Əldə yara və ya cızıq: ilkin yardım və emal</h1>
                  <picture>
                    <source srcSet="/icon-230x224.webp" type="image/webp" />
                    <Image decoding="async" height={112} width={115} src="/icon-230x224.webp" alt="başlıq şəkli" />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">Əldə yara nədir</h2>
                <div className="page-header-body">
                  <p>
                    Əldə yara və ya cızıq — əl, bilək, önkol və ya çiyində dəri örtüyünün bütövlüyünün pozulmasıdır;
                    bəzən damar və ya sinir zədələnməsi ilə müşayiət oluna bilər.
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="#lechenie-ran-i-carapin-na-ruke">Əllərdə yaraların və cızıqların müalicə algoritmi</a>
                  </li>
                  <li>
                    <a href="#obrabotka-gnoynoy-rany-ili-carapiny">Puslu yaranın və ya cızıqların emalı</a>
                  </li>
                  <li>
                    <a href="#chastaya-rana-eto-rana-na-palce">Barmaq yarası</a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-730x615.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-1460x1230.webp 2x" type="image/webp" />
                    <img fetchPriority="high" decoding="async" height={615} width={730} src="https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-730x615.jpg" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-730x615.jpg 1x,https://betadin.ru/wp-content/uploads/imagesv3/943/fc5c93477c96de2c2e9d47a634623b480832b7dce54378401a70bcd44a2a822a-730x615/frame-655-1460x1230.jpg 2x" alt="Əldə yara və ya cızıq" />
                  </picture>
                </div>
              </div>
            </div>
            <nav className="nav-content">
              <ul>
                <li>
                  <a href="#simptomy-ran-i-carapin-na-ruke">Əllərdə yaraların və cızıqların əlamətləri</a>
                </li>
                <li>
                  <a href="#klassifikaciya-ran-i-carapin-po-stepeni-inficirovannosti-nalichiyu-patogennyh-mikrobov">Yaraların yoluxma dərəcəsinə görə təsnifatı (patogen mikroorqanizmlərin varlığı)</a>
                </li>
                <li>
                  <a href="#priznaki-nagnoeniya">Puslanma əlamətləri</a>
                </li>
                <li>
                  <a href="#klassifikaciya-ran-i-carapin-po-glubine">Yaraların dərinliyə görə təsnifatı</a>
                </li>
                <li>
                  <a href="#chastaya-rana-eto-rana-na-palce">Barmaq yarası</a>
                </li>
                <li>
                  <a href="#rana-nogtevoy-plastiny">Dırnaq lövhəsinin yarası</a>
                </li>
                <li>
                  <a href="#rana-na-kisti">Əlin yarası</a>
                </li>
                <li>
                  <a href="#gnoynaya-rana-ili-carapina-na-ruke">Puslu yara və ya cızıq</a>
                </li>
                <li>
                  <a href="#obrabotka-gnoynoy-rany-ili-carapiny">Puslu yaranın və ya cızıqların emalı</a>
                </li>
                <li>
                  <a href="#lechenie-ran-i-carapin-na-ruke">Yaraların və cızıqların müalicəsi</a>
                </li>
                <li>
                  <a href="#sredstva-dlya-obrabotki-rany">Yaranın emalı üçün vasitələr</a>
                </li>
                <li>
                  <a href="#obrabotka-rany-rastvorom-betadin">Betadin® məhlulu ilə yaranın emalı</a>
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
              <a href="#simptomy-ran-i-carapin-na-ruke">Əllərdə yaraların və cızıqların əlamətləri</a>
            </li>
            <li>
              <a href="#klassifikaciya-ran-i-carapin-po-stepeni-inficirovannosti-nalichiyu-patogennyh-mikrobov">Yaraların yoluxma dərəcəsinə görə təsnifatı</a>
            </li>
            <li>
              <a href="#priznaki-nagnoeniya">Puslanma əlamətləri</a>
            </li>
            <li>
              <a href="#klassifikaciya-ran-i-carapin-po-glubine">Yaraların dərinliyə görə təsnifatı</a>
            </li>
            <li>
              <a href="#chastaya-rana-eto-rana-na-palce">Barmaq yarası</a>
            </li>
            <li>
              <a href="#rana-nogtevoy-plastiny">Dırnaq lövhəsinin yarası</a>
            </li>
            <li>
              <a href="#rana-na-kisti">Əlin yarası</a>
            </li>
            <li>
              <a href="#gnoynaya-rana-ili-carapina-na-ruke">Puslu yara və ya cızıq</a>
            </li>
            <li>
              <a href="#obrabotka-gnoynoy-rany-ili-carapiny">Puslu yaranın və ya cızıqların emalı</a>
            </li>
            <li>
              <a href="#lechenie-ran-i-carapin-na-ruke">Yaraların və cızıqların müalicəsi</a>
            </li>
            <li>
              <a href="#sredstva-dlya-obrabotki-rany">Yaranın emalı üçün vasitələr</a>
            </li>
            <li>
              <a href="#obrabotka-rany-rastvorom-betadin">Betadin® məhlulu ilə yaranın emalı</a>
            </li>
            <li>
              <a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
            </li>
            <li>
              <a href="#spisok-literatury">Ədəbiyyat siyahısı</a>
            </li>
          </ul>
        </nav>
        <div className="home-container">
          <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətinin yerini tutmur</div>
        </div>
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p><strong>Yaralar növləri:</strong></p>
            <div className="two-column">
              <div className="column">
                <p><strong>Yüngül</strong></p>
                <p>Adətən təhlükəsizdir, lakin onları çirklənmədən təmizləmək çox vacibdir.</p>
              </div>
              <div className="column">
                <p>Ağır və yoluxmuş</p>
                <p>Tibbi ilkin yardım və sonra həkimə müraciət tələb edə bilər.</p>
              </div>
            </div>
            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x" type="image/webp" />
                <img decoding="async" height={505} width={503} src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg" alt="Dekorativ elementlər" />
              </picture>
            </div>
            <p>Çoxlu cızıqlar və sürtmələr yüngül olur və müalicəni evdə aparmaq mümkündür.</p>
            <p><strong>Bunun üçün tələb olunur:</strong></p>
            <div className="big">
              <div className="line"><p>Qanı dayandırmaq</p></div>
              <div className="line"><p>Yaranı diqqətlə təmizləmək</p></div>
              <div className="line"><p>Yara üçün bit və ya sarğı qoymaq</p></div>
            </div>
            <picture className="img-normal">
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1077/d62b9581c1fab02149c911cb6f8b85b60e21ff79feb0a695a992127c286b0aa6-650x0/group-552-650x151.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/1077/d62b9581c1fab02149c911cb6f8b85b60e21ff79feb0a695a992127c286b0aa6-650x0/group-552-1300x301.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" height={151} width={650} src="https://betadin.ru/wp-content/uploads/imagesv3/1077/d62b9581c1fab02149c911cb6f8b85b60e21ff79feb0a695a992127c286b0aa6-650x0/group-552-650x151.png" alt="ev şəraitində yaraların müalicəsi" />
            </picture>
            <h2 className="h2" id="simptomy-ran-i-carapin-na-ruke">Əllərdə yaraların və cızıqların əlamətləri</h2>
            <div className="list-base"><ul><li><strong>Dərinin bütövlüyünün pozulması</strong> – yara özü.</li><li><strong>Qanaxma</strong>. Damcı və ya davamlı qanaxma şəklində ola bilər.</li><li><strong>Sinir və ya sümüyün açılması</strong> travma sonrası bu, yara prosesinin ağırlaşdığını göstərir və dərhal həkimə müraciət tələb edir.</li><li><strong>Ağrı hissi</strong>. Ağrı adətən vurğulayıcı xarakter daşıyır.</li><li><strong>Şişkinlik</strong>. Hərəkət qabiliyyətini məhdudlaşdıra bilər.</li></ul></div>
            <div className="iframe"><div className="bg_default bg_green" /><div className="h3 h3_green iframe-title">Əldə yaraya necə baxmaq — qısa videoya baxın:</div><div className="iframe-container"><iframe src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Video: necə yara emal etmək" /></div><div className="iframe_desc">Videoda əlin yaralarının düzgün emal edilməsi və ağırlaşmaların qarşısının alınması haqqında qısa təlimat verilir.</div></div>
            <h2 className="h2" id="klassifikaciya-ran-i-carapin-po-stepeni-inficirovannosti-nalichiyu-patogennyh-mikrobov">Yaraların yoluxma dərəcəsinə görə təsnifatı (patogen mikroorqanizmlərin varlığı)</h2>
            <p><strong>Yoluxmamış</strong> – adətən yalnız əməliyyat sonrası yaranan steril yaralar.</p>
            <div className="two-column"><div className="column"><p><strong>Bakterial çirklənmə olan yaralar (kontaminasiya olunmuş)</strong><sup><a href="#spisok-literatury">1,2,3</a></sup></p><p>Ancaq iltihab əlamətləri (kəskin ağrı, şiş, dəridə istilik artımı) olmayan, qayçı, ağac parçası və s. ilə yaranan yaralar.</p></div><div className="column"><p><strong>Puslu (yoluxmuş) yaralar</strong><sup><a href="#spisok-literatury">1,2,3</a></sup></p><p>Bu yaralar adətən ağır iltihabi proseslə gedir, zərərli mikroorqanizmlər müşahidə olunur, nekroz (toxuma ölümü) və pis qoxulu irinli axıntı ola bilər.</p></div></div>
            <h2 className="h2" id="priznaki-nagnoeniya">Puslanma əlamətləri</h2>
            <div className="list-base"><ul><li>Şişkinlik</li><li>Qızarma</li><li>Nəqədər yaranın ətrafında dəri temperaturunun yüksəlməsi</li></ul></div>
            <h2 className="h2" id="klassifikaciya-ran-i-carapin-po-glubine">Yaraların dərinliyə görə təsnifatı</h2>
            <h3 className="h3" id="poverhnostnye-carapiny-i-rany">Səthi cızıqlar və yaralar</h3>
            <p>Səthi yaralar adətən dərinin üst qatlarının zədələnməsi ilə məhdudlaşır və vaxtında antiseptiklərlə (məsələn, <a href="/encyclopedia/povidon-jod/">povidon-yod</a>) emal edildikdə ciddi təhlükə törətmir.</p>
            <h3 className="h3" id="glubokie-carapiny-i-rany">Dərin cızıqlar və yaralar</h3>
            <p>Dərin yaralarda damar, sinir və ya bağ zədələnməsi riski var. Dəridə hissiyyat dəyişibsə, bu, sinir zədələnməsinə işarədir.</p>
            <p>Hissiyyat qorunub saxlanılsa da barmaq və ya əlin hərəkətində məhdudlaşma varsa, bu, əzələ tendonunun zədələnməsi ola bilər.</p>
            <p>Belə hallarda cərrahla operativ konsultasiya tələb olunur.</p>
            <h2 className="h2" id="chastaya-rana-eto-rana-na-palce">Barmaq yarası</h2>
            <p>Barmaq yarası xüsusilə narahatlıq verə bilər, xüsusilə də dəri qatında yerləşirsə. Bu bölgədə bakteriyaların çoxalması üçün şərait yaranır, ona görə diqqətli müşahidə tələb olunur.</p>
            <div className="list-base"><p><strong>Barmaqda yara olduqda nə etmək lazımdır</strong></p><ul><li>Zədələnmiş nahiyyəni tez-tez povidon-yod tərkibli antiseptiklərlə və ya analoqları ilə emal edin.</li><li>Plasteri tez-tez dəyişdirin.</li></ul></div>
            <p>Barmaq cızığı əllə fəal işləmə səbəbindən daha gec sağala bilər; hərəkətlərin məhdudlaşdırılması faydalıdır.</p>
            <h2 className="h2" id="rana-nogtevoy-plastiny">Dırnaq lövhəsinin yarası</h2>
            <p>Barmaq yarasının mühüm xüsusiyyəti dırnaq lövhəsinin zədələnməsi ehtimalıdır.</p>
            <div className="list-base"><p><strong>Dırnaq</strong> – barmağın vacib komponentidir. Onun funksiyaları:</p><ul><li>Barmağı qoruyur</li><li>Dəqiq barmaq hərəkətlərinə imkan verir</li><li>Barmaq ucunun həssaslığını artırır</li></ul></div>
            <h2 className="h2" id="rana-na-kisti">Əlin yarası</h2>
            <p>Əl ən hərəkətli hissə olduğundan ən çox travmalara məruz qalır.</p>
            <p>Əl yaraları tez-tez yıxılma, fiziki yük və heyvanla təmas nəticəsində yaranır.</p>
            <p>Əldə yaranan yara puslandıqda iltihab çiyinə və önkolun digər hissələrinə yayıla, ağır hallarda isə amputasiya nəticələnə bilər. Buna görə əlin yaralarına xüsusi diqqət yetirilməli və antiseptik məhlullarla mütəmadi emal edilməlidir.</p>
            <h2 className="h2" id="gnoynaya-rana-ili-carapina-na-ruke">Puslu yara və ya cızıq</h2>
            <div className="list-base"><p>Puslanma yaraya aid ağırlaşmadır. Sonrakı mərhələdə aşağıdakılar inkişaf edə bilər<a href="#spisok-literatury"><sup>4,5</sup></a>:</p><ul><li>Abseslər</li><li>Flegmonalar</li></ul></div>
            <p>Bu ağırlaşmalar yara çirklənməsi və zərərli bakteriyaların fəaliyyətindən yaranır. Yaranın içində yad cisimlərin olması, toxuma nekrozu, qan təchizatının pozulması, yaraya düzgün olmayan yanaşma və yanaşı xəstəliklər (məsələn, şəkərli diabet) vəziyyəti pisləşdirə bilər. Yoluxma adətən yaranın yaranmasından 3–5 gün sonra baş verir.</p>
            <div className="block-with-image"><div className="block-with-image__green"><p><strong>Yaraların emalı</strong></p><p>Yaraları düzgün emal etmək və ağırlaşmaların qarşısını almaq üçün tövsiyələr.</p><a href="/encyclopedia/obrabotka-ran/" className="btn btn-green" target="_blank" rel="noreferrer">Ətraflı</a></div>
            <picture>
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-310x235/obrabotka-ran-prevyu-310x210.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-310x235/obrabotka-ran-prevyu-620x420.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" height={210} width={310} src="https://betadin.ru/wp-content/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-310x235/obrabotka-ran-prevyu-310x210.png" alt="Yaraların emalı - prevyu" />
            </picture>
            </div>
            <h2 className="h2" id="obrabotka-gnoynoy-rany-ili-carapiny">Puslu yaranın və ya cızıqların emalı</h2>
            <div className="list-base"><p>Puslu yaranın emalı tibbi personal tərəfindən aparılmalıdır və adətən aşağıdakı mərhələləri əhatə edir:</p><ul><li>Yaranın açılması</li><li>İrinin çıxarılması</li><li>Antiseptiklərlə diqqətli emal</li><li>Drainaj və sorbsiya xüsusiyyətli tamponlarla tamponlama</li></ul></div>
            <picture className="img-normal"><source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3456/ccc7baffdfd9845a17a2be328343c970e04f1370c90e5205b8a22cf97f97067b-650x0/gnoy-ranaat4x-1-650x325.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/3456/ccc7baffdfd9845a17a2be328343c970e04f1370c90e5205b8a22cf97f97067b-650x0/gnoy-ranaat4x-1-1300x650.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/uploads/imagesv3/3456/ccc7baffdfd9845a17a2be328343c970e04f1370c90e5205b8a22cf97f97067b-650x0/gnoy-ranaat4x-1-650x325.png" alt="həkim tərəfindən puslu yaranın emalı" /></picture>
            <p>Yara təmizləndikdən sonra ya ikinci dikişlər qoyulur, ya da yara kənarları ləykoplastırla bağlanır.</p>
            <h2 className="h2" id="lechenie-ran-i-carapin-na-ruke">Yaraların və cızıqların müalicəsi</h2>
            <h3 className="h3" id="pervaya-pomoshch">İlkin yardım</h3>
            <div className="big"><div className="line"><div><p><strong>Yaranı təmizləyin</strong></p><p>Bunun üçün:</p><ul><li>Əlləri yaxşı yuyub qurulayın</li><li>Yaranı təmiz su ilə yaxalayın və ya steril salfetlərdən istifadə edin</li><li>Yaranın ətrafını antiseptik məhlulla təmizləyin, ancaq antiseptikin birbaşa yaraya düşməməsinə diqqət edin</li></ul></div></div><div className="line"><div><p><strong>Qanı dayandırın</strong></p><p>Bu məqsədlə təmiz və quru sorucu material (bint, dəsmal və ya mendil) ilə zədələnmiş nahiyyəyə təzyiq edə bilərsiniz.</p></div></div>
            <div className="line"><div><p><strong>Steril sarğı və ya yara bandajı qoyun</strong></p><p>Sarğı təmiz saxlanılmalı və mütəmadi dəyişdirilməlidir. Yuyunma zamanı yarayı quru saxlamaq üçün su keçirməyən sarğılar istifadə oluna bilər.</p><p><br />Yara sağalan kimi sarğı bir neçə gündən sonra çıxarıla bilər.</p></div></div>
            <div className="line"><div><p><strong>Əgər lazım olarsa ağrıkəsici qəbul edin</strong></p><p>Əgər ilk günlərdə güclü ağrı varsa, reseptsiz satılan ağrıkəsicilər (parasetamol və ya ibuprofen) qəbul etmək olar.</p></div></div></div>
            <h2 className="h2" id="sredstva-dlya-obrabotki-rany">Yaranın emalı üçün vasitələr</h2>
            <p>Yaraların emalı üçün müxtəlif antiseptiklərdən istifadə etmək olar — həm məhlul, həm də məlhəm formasında.</p>
            <div className="list-base"><p><strong>Onlara daxildir:</strong></p><ul><li>Yod əsasında məhlullar, o cümlədən <strong><span style={{color:'#0f780b'}}>Betadin<sup>®</sup></span></strong></li><li>Hidrogen peroksid – H<sub>2</sub>O<sub>2</sub></li><li>Brilliant yaşıl</li><li>Kalium permanganat – KMnO<sub>4</sub></li><li>Xlorheksidin biglukonat</li></ul></div>
            <h2 className="h2" id="obrabotka-rany-rastvorom-betadin">Betadin® məhlulu ilə yaranın emalı</h2>
            <div className="product-block"><div className="banner-product-img"><picture><source media="(max-width: 767px)" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-315x252.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-630x503.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg 1x,https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-1853x1832.jpg 2x" width={927} height={916} src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg" alt="Betadin" /></picture></div><p><a href="/encyclopedia/povidon-jod/" data-type="page" data-id="271">Povidon-yod</a> — povidon və yod kompleksidir; yodun tədricən sərbəst buraxılmasını təmin edir və zədələnmiş toxumaların sağalmasını sürətləndirir<sup><a href="#spisok-literatury">6,7,8</a></sup>.</p>
            <p>Povidon-yod Betadin® məhlulunun əsas təsiredici maddəsidir.</p>
            <p>Bu məhlul qanı yandırmır və yaraya tam tətbiq oluna bilər. Betadin® məhlulunu hətta 1 aylıq körpələrdə də istifadə etmək olar; məhlul dərini qurutmur və xoşagəlməz hiss yaratmır<sup><a href="#spisok-literatury">7</a></sup>.</p>
            <p><strong><span style={{color:'#0f780b'}}>Betadin<sup>®</sup></span></strong> məhlulu bakteriyalara, göbələklərə, sporlar və viruslara qarşı aktivdir.</p>
            <p>Məhluldakı yod yaranın ətrafında qan dövranını stimullaşdırır və sağalmanı sürətləndirir<sup><a href="#spisok-literatury">6,8</a></sup>.</p>
            <p><strong><span style={{color:'#0f780b'}}>Betadin<sup>®</sup></span></strong> asanlıqla sudan yuyulur.</p>
            <p className="buttons"><a className="btn btn-green btn-green-instruction" target="_blank" rel="noreferrer" href="/betadin-rastvor-instruktsiya/">Təlimat</a></p></div>
            <h3 className="h3" id="betadin-dlya-obrabotki-ran-i-carapin-">Betadin® — yaraların və cızıqların emalında</h3>
            <p>Betadin həm süspansiyonsuz, həm də seyreltilmiş formada istifadə edilə bilər<sup><a href="#spisok-literatury">7</a></sup>. 10% məhluldan 1% həll hazırlamaq üçün 1:10 nisbətində seyrelmə yetərlidir (məsələn, 1 ml Betadin® və 10 ml su və ya fizioloji məhlul)<sup><a href="#spisok-literatury">6</a></sup>. Seyreltmək üçün 0.9% NaCl, Ringer məhlulu və ya inyeksiya üçün su istifadə edilə bilər.</p>
            <p>Seyreltmədən sonra yara məhlulla sıxılaraq emal edilir və steril sarğı ilə örtülür.</p>
            <picture className="img-normal"><source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3322/1b5dc8ae5b3144b36af43da5d19cd6c32966aeee334956f988e18d68b941f363-650x0/istockphoto-1341663000-2048x2048-2-7-650x325.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/3322/1b5dc8ae5b3144b36af43da5d19cd6c32966aeee334956f988e18d68b941f363-650x0/istockphoto-1341663000-2048x2048-2-7-1300x650.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/uploads/imagesv3/3322/1b5dc8ae5b3144b36af43da5d19cd6c32966aeee334956f988e18d68b941f363-650x0/istockphoto-1341663000-2048x2048-2-7-650x325.png" alt="Pişik sancması nəticəsində əldə yaranın Betadin məhlulu ilə emalı" /></picture>
            <p>Kalium permanganat bakteriyaları məhv edir, göbələklərə qarşı aktivdir və yara sağalmasını təşviq edir.</p>
            <h3 className="h3" id="obrabotka-rany-perekisyu-vodoroda">Yaranın hidrogen peroksidlə emalı</h3>
            <p>Hidrogen peroksid çirkli yırtıq yaraların və cızıqların emalı üçün uyğundur; köpüklənmə vasitəsilə mexaniki təmizləmə təmin edir. Lakin bu, yaranın kənarlarında qıcıqlanma və iltihaba səbəb ola, zədələnmiş hüceyrələrin daha da parçalanmasına gətirib çıxara bilər və sağalma prosesini çətinləşdirə bilər<sup><a href="#spisok-literatury">9,10</a></sup>.</p>
            <h3 className="h3" id="obrabotka-rany-yodom">Yaranın yodla emalı</h3>
            <p>5% spirtli yod məhlulu quruducu təsir göstərir, lakin yanıcı, sancı hissi yarada bilər.</p>
            <p>Bu təsirləri azaltmaq üçün yod yalnız yara kənarlarına tətbiq edilməlidir, yarının özünə düşməməsinə diqqət edin.</p>
            <div className="exlude-turbo"><picture className="banner-betadin banner-quastion"><source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.webp 1x,https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.webp 2x" type="image/webp" /><img loading="lazy" decoding="async" height={542} width={558} src="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg" alt="Dekorativ elementlər" /></picture></div>
            <h2 className="h2" id="chasto-zadavaemye-voprosy">Tez-tez verilən suallar</h2>
            <h3 className="h3" id="pochemu-ne-zazhivaet-rana-na-ruke">Niyə əlin yarası sağalmır?</h3>
            <p>Adi səthi yara adətən 7–10 gün ərzində sağalır. Əgər bu müddət ərzində sağalma baş vermirsə, irinli fokus, qızarma və istilik artımı müşahidə olunursa, dərhal həkimə müraciət etmək lazımdır.</p>
            <h3 className="h3" id="chem-lechit-porezy-na-rukah">Əllərdə kəsikləri necə müalicə etmək?</h3>
            <p>Kəskin qanaxmanı dayandırmaq, yaranı diqqətlə təmizləmək, antiseptiklə emal etmək və plaster və ya steril sarğı ilə bağlamaq kifayətdir.</p>
            <h3 className="h3" id="chem-mazat-ranu-chtoby-ona-bystree-zatyanulas">Yarayı nə ilə yağlamaq daha tez sağalsın?</h3>
            <p>Yod məhlulları və <strong style={{color:'#0f780b'}}>Betadin<sup>®</sup></strong> yara sağaldıcı xüsusiyyətlərə malikdir<sup><a href="#spisok-literatury">11</a></sup>.</p>
            <p><strong style={{color:'#0f780b'}}>Betadin<sup>®</sup></strong> məlhəmini işə və səyahətə götürmək rahatdır və lazım olduqda yaranın emalı üçün istifadə edilə bilər.</p>
            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">Kraskovski Fyodor Yanoviç</p>
                <div className="autor-subtitle" />
                <p className="autor-footer">Məqalənin müəllifi</p>
              </div>
              <picture>
                <source srcSet="/kraskovskij-novyj-470x406 (1).webp" type="image/webp" />
                <Image loading="lazy" decoding="async" height={203} width={235} src="/kraskovskij-novyj-470x406 (1).webp" alt="Kraskovski Fyodor Yanoviç" />
              </picture>
            </div>
            <div className="h2 h2-read-more" id="chitat-po-teme">Mövzu üzrə oxuyun</div>
            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slide-image">
                    <picture>
                      <source srcSet="/obrabotka-ran-prevyu-246x166.webp" type="image/webp" />
                      <Image loading="lazy" decoding="async" height={166} width={246} src="/obrabotka-ran-prevyu-246x166.webp" alt="Yaraların emalı - önbaxış" />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>Yaraların emalı</strong></p>
                    <p>Yaraları düzgün emal etməyin yolları və ağırlaşmaların qarşısını almaq.</p>
                    <p className="slide-more"><a href="/encyclopedia/obrabotka-ran/">Ətraflı</a></p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source srcSet="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp" type="image/webp" />
                      <Image loading="lazy" decoding="async" height={166} width={246} src="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp" alt="Yara sağaldıcı məlhəm - önbaxış" />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>Yara sağaldıcı məlhəm</strong></p>
                    <p>Sağaldıcı məlhəmlərin növləri və ən effektivini necə seçmək olar.</p>
                    <p className="slide-more"><a href="/encyclopedia/maz-dlya-zazhivleniya-ran/">Ətraflı</a></p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-image">
                    <picture>
                      <source srcSet="/rany-s-infekcziej-prevyu-246x166 (1).webp" type="image/webp" />
                      <Image loading="lazy" decoding="async" height={166} width={246} src="/rany-s-infekcziej-prevyu-246x166 (1).webp" alt="Yoluxmuş yaralar - önbaxış" />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>Yoluxmuş yaralar</strong></p>
                    <p>Bütün cızıqlar və kəsiklər tez və ağırlaşmasız sağalmır. Yoluxmuş yaraları necə müalicə etmək olar?</p>
                    <p className="slide-more"><a href="/encyclopedia/rany-s-infekciej/">Ətraflı</a></p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="h2" id="spisok-literatury">Ədəbiyyat siyahısı</h2>
            <ol className="literature">
              <li id="literature-0">Zavrajanov A. A., Gvozdev M. Yu., Krutova V. A. və b. Rəna və yara prosesi. Tədris-metodik vəsait, Krasnodar 2016.</li>
              <li id="literature-1">Gostişev V. və b. Ümumi cərrahiyyə. GĖOTAR-Media, Moskva 2015.</li>
              <li id="literature-2">Minçenko A. Yaralar. Müalicə və fəsadların profilaktikası. 2014.</li>
              <li id="literature-3">Goryunov S. V., Romashov D. V., Butivşçenko I. A. Puslu cərrahiyyə: atlas. Moskva BİNOM, 2004.</li>
              <li id="literature-4">Hermans MH. Wounds and ulcers: back to the old nomenclature. Wounds. 2010;22(11):289-293.</li>
              <li id="literature-5">Nosenko O. M., Moskalenko T. Ya., Rutinskaya A. V. Povidon-yod (Betadin) müasir akuşerlik-praktikasında. Reproduktiv endokrinologiya.– 2018.</li>
              <li id="literature-6">Betadin məhlulunun tibbi istifadə təlimatı. (RN: P№015282/03).</li>
              <li id="literature-7">Bigliardi PL və b. Povidone iodine in wound healing: A review of current concepts and practices. Int J Surg. 2017;44:260-268.</li>
              <li id="literature-8">Martınov A.I., Kokorin V.A. Daxili təbabət, sübutlara əsaslanan. Praktik Medicine, Krakow, 2018.</li>
              <li id="literature-9">Troşin N. 3% hidrogen peroksid məhlulundan cərrahi müdaxilələrdə necə istifadə etmək olar? RMJ, 2005.</li>
              <li id="literature-10">Borisov I. V. Povidon-yod — tanınmış preparatın yeni imkanları. Yaralar və yara infeksiyaları. 2021.</li>
              <li id="literature-11">Betadin məlici məlhəminin tibbi istifadə təlimatı. (RN: P№015282/02).</li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
};

export default RanaIliTsarapinaNaRukeAz;
