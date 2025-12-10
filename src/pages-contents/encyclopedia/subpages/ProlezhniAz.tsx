"use client";
import React, { useEffect } from 'react';

const ProlezhniAz: React.FC = () => {
  useEffect(() => {
    // Analytics scroll tracking logic (translated goal names)
    // eslint-disable-next-line no-console
    console.log(1);
    const scrollGoals: { [key: number]: () => void } = {
      25: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Skrol25'),
      50: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Skrol50'),
      75: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Skrol75'),
      100: () => typeof (window as any).ym === 'function' && (window as any).ym(37744585, 'reachGoal', 'Skrol100'),
    };
    const triggered: { [key: number]: boolean } = { 25: false, 50: false, 75: false, 100: false };

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
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <main>
      <div className="container-page-header">
        <div className="container">
          <div className="page-header page-header-breadcrumbs">
            <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://betadin.ru"> <span property="name">Ana səhifə</span> </a>
                <meta property="position" content="1" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="https://betadin.ru/encyclopedia/"> <span property="name">Yataq yaraları</span> </a>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">Yataq yaraları</span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>
          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                <h1 className="page-header-title-text">Yetişkinlərdə və uşaqlarda yataq yaraları: profilaktika və qulluq</h1>
                <picture>
                  <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x" type="image/webp" />
                  <img decoding="async" height={112} width={115} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png.webp" srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.png.webp 2x" alt="başlıq üçün şəkil" />
                </picture>
              </div>
              <h2 className="page-header-subtitle">Yataq yaraları nədir</h2>
              <div className="page-header-body">
                <p>
                  Yataq yaraları — uzun müddət toxumaya təzyiq nəticəsində əmələ gələn yaralardır. Dəri və toxuma zədələndikdə və uzun müddət təzyiqə məruz qaldıqda bəzi bölgələrdə qan dövranı azalır
                  <sup><a href="#spisok-literatury">1</a></sup>.
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li> <a href="#klassifikaciya-prolezhney">Səviyyələr</a> </li>
                <li> <a href="#kak-lechat-prolezhni">Yataq yaralarının müalicəsi</a> </li>
                <li> <a href="#diagnostika-pacienta-s-prolezhnyami">Diaqnostika</a> </li>
              </ul>
            </div>
            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-1460x1230.webp 2x" type="image/webp" />
                  <img fetchPriority="high" decoding="async" height={615} width={730} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-730x615.jpg.webp" srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-730x615.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/951/ae4cd6fa3d5f1521d12c598896e3c99704912e5964f552b851e1b87b47917786-730x615/frame-655-3-1460x1230.jpg.webp 2x" alt="yataq yaraları" />
                </picture>
              </div>
            </div>
          </div>
          <nav className="nav-content">
            <ul>
              <li><a href="#lokalizaciya-prolezhney">Yataq yaralarının yerləşməsi</a></li>
              <li><a href="#simptomy-prolezhney">Yataq yaralarının simptomları</a></li>
              <li><a href="#prichiny-vozniknoveniya-prolezhney">Yaranma səbəbləri</a></li>
              <li><a href="#klassifikaciya-prolezhney">Klassifikasiya</a></li>
              <li><a href="#oslozhneniya-prolezhney">Fəsadlar</a></li>
              <li><a href="#kak-lechat-prolezhni">Necə müalicə olunur?</a></li>
              <li><a href="#diagnostika-pacienta-s-prolezhnyami">Xəstənin diaqnostikası</a></li>
              <li><a href="#otvety-na-voprosy">Suallara cavablar</a></li>
              <li><a href="#spisok-literatury">Ədəbiyyat siyahısı</a></li>
            </ul>
            <div className="nav-content-title nav-content-title-cross"> Mündəricat</div>
          </nav>
        </div>
      </div>

      <nav className="nav-content nav-content-fixed">
        <ul>
          <li><a href="#lokalizaciya-prolezhney">Yataq yaralarının yerləşməsi</a></li>
          <li><a href="#simptomy-prolezhney">Yataq yaralarının simptomları</a></li>
          <li><a href="#prichiny-vozniknoveniya-prolezhney">Yaranma səbəbləri</a></li>
          <li><a href="#klassifikaciya-prolezhney">Klassifikasiya</a></li>
          <li><a href="#oslozhneniya-prolezhney">Fəsadlar</a></li>
          <li><a href="#kak-lechat-prolezhni">Necə müalicə olunur?</a></li>
          <li><a href="#diagnostika-pacienta-s-prolezhnyami">Xəstənin diaqnostikası</a></li>
          <li><a href="#otvety-na-voprosy">Suallara cavablar</a></li>
          <li><a href="#spisok-literatury">Ədəbiyyat siyahısı</a></li>
        </ul>
        <div className="nav-content-title nav-content-title-cross"> Mündəricat</div>
      </nav>

      <div className="home-container">
        <div className="new-disclaimer"> Məqalədəki məlumat həkim məsləhətinin əvəzini tutmur</div>
      </div>

      <div className="page-content-wrapper">
        <div className="container container-middle page-content">
          <p>Adətən yataq yaraları hərəkəti məhdud olan insanlarda daha çox rast gəlinir.</p>
          <p>İCB-10 üzrə yataq yaraları olduqda həkim M70 diaqnozu qoyula bilər — Yüklənmə, həddindən artıq təzyiq və basqı ilə əlaqəli yumşaq toxuma xəstəlikləri.</p>
          <div className="exlude-turbo">
            <picture className="banner-betadin banner-circle">
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x" type="image/webp" />
              <img decoding="async" height={505} width={503} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp" alt="Dekorativ elementlər" />
            </picture>
          </div>
          <p>Son illərin tədqiqatlarına görə, hərəkəti məhdud olan xəstələr arasında bu xəstəliyin yayılması 11,5–32,7% aralığındadır<sup><a href="#spisok-literatury">2</a></sup>.</p>
          <h2 className="h2" id="lokalizaciya-prolezhney">Yataq yaralarının yerləşməsi</h2>
          <p>Yataq yaraları adətən bədənin sərt səthlə təmas etdiyi, eləcə də sümük çıxıntılarının olduğu yerlərdə yaranır: quyruq sümüyü, bud nahiyəsi, çöl baldır, baldır, daban və ayaq, çiyin, dirsəklər və başın arxa tərəfi.</p>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1122/4960b7db2b4d3ebe5c652c4f488599686b1b1285389a00254049c17999b28d81-650x0/medical-kit-and-bandaid-509398-488-1-6-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1122/4960b7db2b4d3ebe5c652c4f488599686b1b1285389a00254049c17999b28d81-650x0/medical-kit-and-bandaid-509398-488-1-6-1300x650.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1122/4960b7db2b4d3ebe5c652c4f488599686b1b1285389a00254049c17999b28d81-650x0/medical-kit-and-bandaid-509398-488-1-6-650x325.png.webp" alt="Yataq yaralarının yerləşməsi" />
          </picture>
          <h2 className="h2" id="simptomy-prolezhney">Yataq yaralarının simptomları</h2>
          <div className="list-base">
            <p>Yataq yaralarının simptomatika prosesin mərhələsindən asılıdır. Hərəkəti məhdud və ya immobil xəstələrdə aşağıdakı əsas əlamətlər yataq yaralarının yaranmasını göstərir:</p>
            <ul>
              <li>Dərinin qızarması</li>
              <li>Səthi dəri yarasının əmələ gəlməsi</li>
              <li>Dərin yaranın meydana gəlməsi (bəlkə qabıqla)</li>
              <li>Doldurulmuş qanla vezikulanın (böyük qabarcığın) yaranması</li>
              <li>Kötü iy</li>
            </ul>
          </div>
          <h2 className="h2" id="prichiny-vozniknoveniya-prolezhney">Yaranma səbəbləri</h2>
          <p>Yataq yaraları xəstənin bədən mövqeyini dəyişə bilməməsi və bədənin müəyyən sahələrində təzyiqin uzun müddət davam etməsi nəticəsində yaranır. Hərəki funksiyaları və şüuru pozulmuş xəstələr həssasdır.</p>
          <h3 className="h3" id="vneshnie-faktory">Xarici faktorlar</h3>
          <p>Xarici amillərə təzyiq, sürtünmə, sürüşmə qüvvəsi və nəm daxildir.</p>
          <h3 className="h3" id="vnutrennie-faktory">Daxili faktorlar</h3>
          <p>Daxili faktorlar kimi qızdırma, malnütrisiya, anemiya və endotelial disfunksiya göstərilir.</p>
          <div className="green">
            <p>Əgər xəstə yatağa bağlıdırsa və hərəkətsizdirsə, yataq yarasının ilkin əlamətləri üçün 2 saat kifayət edə bilər.
              <br /><br />Uzun müddətli təzyiq toxumalarda qan dövranının pozulmasına və toxumalara oksigenin azalmasına səbəb olur. Zamanla qan təchizatı pozulmuş toxuma zəhərli maddələr toplayır və nəticədə yara və nekroz əmələ gəlir.
            </p>
          </div>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1123/4e669e72138c1796b988196b35a59342e12725ec322a47ec0e05ab4b45eea754-650x0/medical-kit-and-bandaid-509398-488-1-7-650x213.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1123/4e669e72138c1796b988196b35a59342e12725ec322a47ec0e05ab4b45eea754-650x0/medical-kit-and-bandaid-509398-488-1-7-1300x426.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={213} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1123/4e669e72138c1796b988196b35a59342e12725ec322a47ec0e05ab4b45eea754-650x0/medical-kit-and-bandaid-509398-488-1-7-650x213.png.webp" alt="Yaranma səbəbləri" />
          </picture>
          <h3 className="h3" id="predraspolagayushchie-faktory">Xəstəliyə meylli edən faktorlar</h3>
          <div className="list-base">
            <p>Yataq yaralarının formalaşmasına kömək edən amillər:</p>
            <ul>
              <li>Nevroloji xəstəliklər</li>
              <li>Ürək-damar xəstəlikləri</li>
              <li>Uzun müddətli anesteziya</li>
              <li>Suyu əskikliyi (dehidratasiya)</li>
              <li>Malnütrisiya</li>
              <li>Hipotoniya</li>
            </ul>
          </div>
          <h2 className="h2" id="klassifikaciya-prolezhney">Yataq yaralarının mərhələləri</h2>
          <div className="big">
            <div className="line">
              <div>
                <p><strong>1-ci mərhələ</strong></p>
                <p>Sümük çıxıntısının yerləşdiyi dəri sahəsində qızartı.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>2-ci mərhələ</strong></p>
                <p>Qızılı-çəhrayı səth yarasının meydana gəlməsi.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>3-cü mərhələ</strong></p>
                <p>Dərinin bütün qatlarının zədələnməsi, əzələ və sümük örtüyü görünmür.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>4-cü mərhələ</strong></p>
                <p>Dərinin bütün qatlarının zədələnməsi və əzələ-sümük strukturlarının aşkar olması.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>Təsnif edilə bilməyən mərhələ</strong></p>
                <p>Yaranın üzərində qalın qabığın olması səbəbindən mərhələni müəyyən etmək çətin olduqda.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p><strong>Dərin toxuma zədələnməsi şübhəsi</strong></p>
                <p>(Dərinlik məlum deyil) — rəngsizlənmiş, zədələnməmiş tünd qanlı və ya tünd-bənövşəyi ləkə və ya qanla dolu qabarcıq.</p>
              </div>
            </div>
          </div>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1124/5db08f51ea5276863e20971a95fbea5d8c27703bfd34fc32cd8577374d877b0c-650x0/medical-kit-and-bandaid-509398-488-1-8-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1124/5db08f51ea5276863e20971a95fbea5d8c27703bfd34fc32cd8577374d877b0c-650x0/medical-kit-and-bandaid-509398-488-1-8-1300x650.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1124/5db08f51ea5276863e20971a95fbea5d8c27703bfd34fc32cd8577374d877b0c-650x0/medical-kit-and-bandaid-509398-488-1-8-650x325.png.webp" alt="Yataq yaralarının təsnifatı" />
          </picture>
          <h2 className="h2" id="oslozhneniya-prolezhney">Yataq yaralarının fəsadları</h2>
          <h3 className="h3" id="vozniknovenie-infekcionnyh-zabolevaniy">İnfeksiyanın yaranması</h3>
          <div className="list-base">
            <p>Yataq yaralarının ən geniş yayılmış fəsadı <strong>infeksiya</strong>dır. Belə sahələrdə yara əmələ gəlir. III və IV dərəcəli yaralar intensiv müalicə tələb edir, çünki fəsadlar həyati təhlükə yarada bilər. Əgər infeksiya dərin toxumalara və sümüyə yayılırsa, nəticələr aşağıdakılar ola bilər:</p>
            <ul>
              <li>Periostit (sümüyü örtən təbəqənin infeksiyası)</li>
              <li>Osteomielit (sümük infeksiyası)</li>
              <li>Septik artrit (oynağın infeksiyası)</li>
              <li>Sinuslərin əmələ gəlməsi</li>
            </ul>
          </div>
          <p>İnfeksiyanın yayılması ölümcül nəticələrə gətirib çıxara bilər...</p>
          <h3 className="h3">Xroniki anemiya və amiloidoz</h3>
          <p>Xroniki yataq yaraları xroniki anemiya və ya ikincili amiloidoza səbəb ola bilər.</p>
          <h3 className="h3">İkincil fəsadlar</h3>
          <p>Əgər fəsadlar müvafiq dərəcədə idarə olunmazsa, ikincil problemlər (hematoma, seroma, abses, postoperativ sepsis) yarana bilər.</p>
          <h2 className="h2" id="kak-lechat-prolezhni">Yataq yaralarının müalicəsi</h2>
          <p>Yataq yaraları aşkarlandıqda dərhal müalicəyə başlamaq lazımdır. Terapiya seçimi yaranın yeri, mərhələsi və fəsadların olması ilə müəyyən edilir.</p>
          <div className="iframe">
            <div className="bg_default bg_green" />
            <div className="h3 h3_green iframe-title">Yataq yaraları haqqında qısa videoya baxın:</div>
            <div className="iframe-container">
              <iframe className="lazyloaded" data-src="https://rutube.ru/play/embed/fa8f8cff35b68d5c8f024cee12b45743/?p=PkU2rTUw0f2w7kXkBCs9vA" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="iframe_desc">Videoda yataq yaralarının qarşısının alınması və infeksion fəsadların minimalizə edilməsi yolları göstərilir.</div>
          </div>
          <h3 className="h3" id="cel-lecheniya">Müalicənin məqsədi:</h3>
          <div className="big">
            <div className="line"><div><p>Toxumalara düşən təzyiqi minimallaşdırmaq</p></div></div>
            <div className="line"><div><p>Yaranın sərt səthlə təmasını azaltmaq</p></div></div>
            <div className="line"><div><p>Yaranı dezinfeksiya etmək</p></div></div>
            <div className="line"><div><p>Zədələnmiş sahədə nəmlik səviyyəsini azaltmaq</p></div></div>
          </div>
          <h3 className="h3">Risk faktorları olan xəstiyə qulluq</h3>
          <p>Təzyiqin azaldılması və dərinin düzgün qulluq edilməsi, yastıqlar və dəstək səthlərinin istifadəsi yataq yaralarının müalicəsində ən effektli yanaşmadır.</p>
          <picture className="img-normal">
            <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1125/3c5d9f1723b9e8c398c4daa2782e0a78b9704a01df1b9883289b9da6767d965c-650x0/medical-kit-and-bandaid-509398-488-1-9-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1125/3c5d9f1723b9e8c398c4daa2782e0a78b9704a01df1b9883289b9da6767d965c-650x0/medical-kit-and-bandaid-509398-488-1-9-1300x650.webp 2x" type="image/webp" />
            <img loading="lazy" decoding="async" height={325} width={650} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1125/3c5d9f1723b9e8c398c4daa2782e0a78b9704a01df1b9883289b9da6767d965c-650x0/medical-kit-and-bandaid-509398-488-1-9-650x325.png.webp" alt="Yataq yaralı xəstələrə qulluq" />
          </picture>
          <p>Dəstək səthləri statik və ya dinamik ola bilər...</p>
          <h3 className="h3" id="echenie-antibiotikami">Antibiotiklərlə müalicə</h3>
          <p>Yaranın təmizlənməsi yataq yaralarının müalicəsinin vacib mərhələsidir. Sistem antibiotiklərin tətbiqi dərin bakterial infeksiyalarda əsaslandırıla bilər.</p>
          <h3 className="h3" id="hirurgicheskii-metod-lecheniya">Cərrahi müalicə metodu</h3>
          <p>Yaranın dərinliyi və ağırlığı cərrahi müdaxilə tələb edib-etməyəcəyini müəyyən edir.</p>
          <h3 className="h3" id="kislorodnaya-terapiya">Oksigen terapiyası</h3>
          <p>Yaranın sağalması üçün hiperbarik oksigen terapiyası ilə bağlı tədqiqatlar mövcuddur.</p>
          <h3 className="h3" id="primenenie-mestnyh-protivomikrobnyh-sredstv">Topikal antimikrob vasitələrin tətbiqi</h3>
          <p>Aktual antimikrob vasitələr arasında antiseptiklər və antibakterial preparatlar var. Əsas aktiv maddə kimi tez-tez povidon-yod istifadə olunur.</p>
          <h3 className="h3" id="lechenie-prolezhney-povidon-yodom-preparaty-pod-nazvaniem-betadin">Yataq yaralarının povidon-yod ilə müalicəsi (Betadin®)</h3>
          <p>Povidon-yod əsasında olan preparatlar geniş spektrli antimikrob təsirə malikdir. Onlar mikroorqanizmlərin hüceyrə divarlarının zədələnməsi ilə işləyir.</p>
          <div className="green"><p>Mühüm: bəzi antiseptiklərin effektivliyinin azalması fəsad riskini artıra bilər. Betadin® müqavimətin formalaşması baxımından aşağı risk göstərir.</p></div>
          <h4 className="h4">Betadin® preparatından yataq yaralarında necə istifadə edirlər?</h4>
          <div className="product-block">
            <div className="banner-product-img"><picture>
              <source media="(max-width: 767px)" srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-315x252.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-630x503.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-927x916/banner-betadin-1853x1832.jpg.webp 2x" width={927} height={916} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-927x916/banner-betadin-927x916.jpg.webp" alt="Betadin" />
            </picture></div>
            <p>Preparatın tətbiq forması müalicə üsulunu müəyyən edir. Yataq yaralarında Betadin® həll və maz formasında istifadə olunur.</p>
            <p>Xarici istifadə üçün məhlul yaraya seyreltilmədən tətbiq olunur. Maz ince qatla gündə 2 dəfə sağlam dərini də əhatə edərək tətbiq edilir.</p>
          </div>
          <h4 className="h4" id="protivopokazaniya-k-ispolzovaniyu-preparatov-betadin">Betadin® istifadə üçün əks göstərişlər</h4>
          <p>Əks göstərişlər arasında aktiv maddəyə qarşı həssaslıq, qalxanvari vəzi adenoması, hipertireoz, Duhring xəstəliyi, radioaktiv yodun tətbiqi var. Preparat vaxtından əvvəl doğulmuş və yenidoğulan uşaqlarda qadağandır. Böyrək xəstəliklərində, hamiləlikdə və laktasiyada ehtiyatla istifadə olunur.</p>
          <div className="buttons"><a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-rastvor-instruktsiya/">Təlimat</a></div>
          <h2 className="h2" id="diagnostika-pacienta-s-prolezhnyami">Yataq yaralı xəstənin müayinəsi</h2>
          <div className="list-base">
            <p>Yataq yaralı xəstədə hansı müayinələrə ehtiyac var? Anamnez toplamaqla başlamaq, sonra yaranın dərinliyini diqqətlə qiymətləndirmək və differensial diaqnostika aparmaq lazımdır.</p>
          </div>
          <h2 className="h2" id="otvety-na-voprosy">Suallara cavablar</h2>
          <h3 className="h3" id="mozhet-li-prolezhen-proyti-bez-lecheniya">Yataq yarası müalicəsiz keçə bilərmi?</h3>
          <p>Xeyr, yataq yarası aşkarlanarsa dərhal müalicəyə başlamaq lazımdır.</p>
          <h3 className="h3" id="pochemu-voznikayut-prolezhni">Yataq yaraları niyə yaranır?</h3>
          <p>Əsas səbəb mexaniki yüklənmə — təzyiq, artan sürtünmə və sürüşmədir.</p>
          <h3 className="h3" id="kakoy-doktor-lechit-prolezhni">Yataq yaralarını hansı həkim müalicə edir?</h3>
          <p>Yataq yaralarının müalicəsi çoxpeşəli yanaşma tələb edir — cərrah, dermatoloq, yara qulluq mütəxəssisi və müvafiq profil üzrə həkimlər daxil edilir.</p>
          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">Kraskaovski Fyodor Yanoviç</p>
              <div className="autor-subtitle" />
              <p className="autor-footer">Məqalə müəllifi</p>
            </div>
            <picture>
              <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-470x406.webp 2x" type="image/webp" />
              <img loading="lazy" decoding="async" height={203} width={235} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.png.webp" alt="" />
            </picture>
          </div>
          <div className="h2 h2-read-more" id="chitat-po-teme">Mövzu üzrə oxu</div>
          <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
            <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
              <div className="swiper-slide swiper-slide-active" style={{ marginRight: '29px' }}>
                <div className="slide-image">
                  <picture>
                    <source srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1916/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/obrabotka-prolezhnej-mazi-и-kremы-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1916/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/obrabotka-prolezhnej-mazi-и-kremы-prevyu-491x332.webp 2x" type="image/webp" />
                    <img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1916/9a600dd2bd3191054405c4fd95ab13cb3c7fd4bf50e5915b105e33b92769aa2c-0x166/obrabotka-prolezhnej-mazi-и-kremы-prevyu-246x166.png.webp" alt="Yara müalicəsi: mazlar və kremlər - önizləmə" />
                  </picture>
                </div>
                <div className="slide-body"><p className="slide-title"><strong>Yara müalicəsi: mazlar və kremlər</strong></p><p>Etkili və təhlükəsiz preparatı seçirik.</p></div>
              </div>
            </div>
          </div>
          <h2 className="h2" id="spisok-literatury">Ədəbiyyat siyahısı</h2>
          <ol className="literature">
            <li id="literature-0">Labeau SO, Afonso E, Benbenishty J, et al. Prevalence, associated factors and outcomes of pressure injuries in adult intensive care unit patients: the DecubICUs study. Intensive Care Med. 2021;47(2):160-169.</li>
            <li id="literature-1">Labeau SO, Afonso E, Benbenishty J, et al. Prevalence...</li>
            <li id="literature-2">Žetmekova J.T., Tanat Z.H., Niyazova B.K., Şarapieva A.M. Profilaktika və yataq yaralarının müalicəsi // Nur-Sultan – 2020.</li>
            <li id="literature-3">Zaidi SRH, Sharma S. Pressure Ulcer. In: StatPearls. Treasure Island (FL): StatPearls Publishing; June 3, 2022.</li>
            <li id="literature-4">Bluestein D, Javaheri A. Pressure ulcers: prevention, evaluation, and management. Am Fam Physician. 2008.</li>
            <li id="literature-5">Norman G, Dumville JC, Moore ZE, Tanner J, Christie J, Goto S. Antibiotics and antiseptics for pressure ulcers. Published 2016.</li>
            <li id="literature-6">Lepelletier D, Maillard JY, Pozzetto B, Simon A. Povidone Iodine: Properties. Antimicrob Agents Chemother. 2020.</li>
            <li id="literature-7">Betadin təlimatı.</li>
            <li id="literature-8">Betadin maz təlimatı.</li>
            <li id="literature-9">Sənəd №123: "Xəstələrin müalicə protokolu. Yataq yaraları"</li>
            <li id="literature-10">Kvashnina D.V. və b.</li>
            <li id="literature-11">Borisov I. V.</li>
            <li id="literature-12">Bigliardi PL et al. Povidone iodine in wound healing. Int J Surg. 2017.</li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default ProlezhniAz;
