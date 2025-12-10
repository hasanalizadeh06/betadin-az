"use client";
import React, { useEffect } from 'react';

const ObrabotkaRanAz: React.FC = () => {
  useEffect(() => {
    // Analytics scroll tracking logic adapted from the original script
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
      for (let percent of [25, 50, 75, 100]) {
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
    // initial check in case the page is already scrolled
    checkScroll();
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <main>
      <script>{"console.log(1);"}</script>
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
                  <span property="name">Yaraların işlənməsi</span>
                </a>
                <meta property="position" content="2" />
              </li>
              <li property="itemListElement" typeof="ListItem">
                <span property="name">Yaraların işlənməsi</span>
                <meta property="position" content="3" />
              </li>
            </ol>
          </div>
          <div className="page-header">
            <div className="page-header-left">
              <div className="page-header-title">
                <h1 className="page-header-title-text">Yaraların işlənməsi: antiseptiklər, alqoritmlər, tövsiyələr</h1>
                <picture>
                  <source
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.webp 2x"
                    type="image/webp"
                  />
                  <img
                    decoding="async"
                    height={112}
                    width={115}
                    src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png.webp"
                    srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-115x112.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/994/da2be7790dac0732b628bb7213ed123ebbb60d0de77775855cefa7f12f9e4576-115x112/icon-230x224.png.webp 2x"
                    alt="başlıq üçün şəkil"
                  />
                </picture>
              </div>
              <h2 className="page-header-subtitle">Yara nədir</h2>
              <div className="page-header-body">
                <p>
                  Yara — xarici təsir nəticəsində dəri və ya daxili toxumaların zədələnməsidir
                  <strong>
                    <sup>
                      <a href="#spisok-literatury">1,2,3</a>
                    </sup>
                  </strong>
                  .
                </p>
              </div>
              <ul className="page-header-anchors page-header-anchors-detail">
                <li>
                  <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#pervichnaya-obrabotka-rany">Birincil yara emalı</a>
                </li>
                <li>
                  <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#hirurgicheskaya-obrabotka-rany">Cərrahi işlənmə</a>
                </li>
                <li>
                  <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#kakie-vidy-sredstv-dlya-obrabotki-ran-naibolee-rasprostraneny">Həllər və antiseptiklər</a>
                </li>
              </ul>
            </div>
            <div className="page-header-right">
              <div className="page-header-img">
                <picture>
                  <source
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1032/97afaf188378d32fe74c7c654890dca2811b9c066b298911728fc32b33174004-730x615/obrabotka-ran-730x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1032/97afaf188378d32fe74c7c654890dca2811b9c066b298911728fc32b33174004-730x615/obrabotka-ran-1460x1230.webp 2x"
                    type="image/webp"
                  />
                  <img
                    fetchPriority="high"
                    decoding="async"
                    height={615}
                    width={730}
                    src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1032/97afaf188378d32fe74c7c654890dca2811b9c066b298911728fc32b33174004-730x615/obrabotka-ran-730x615.jpg.webp"
                    srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1032/97afaf188378d32fe74c7c654890dca2811b9c066b298911728fc32b33174004-730x615/obrabotka-ran-730x615.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1032/97afaf188378d32fe74c7c654890dca2811b9c066b298911728fc32b33174004-730x615/obrabotka-ran-1460x1230.jpg.webp 2x"
                    alt="Yaraların işlənməsi"
                  />
                </picture>
              </div>
            </div>
          </div>
          <nav className="nav-content">
            <ul>
              <li>
                <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#prichiny-poyavleniya-ran">Yaraların yaranma səbəbləri</a>
              </li>
              <li>
                <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#klassifikaciya-ran">Yaraların təsnifatı</a>
              </li>
              <li>
                <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#zazhivlenie-rany">Yaranın sağalması</a>
              </li>
              <li>
                <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#vidy-obrabotki-rany">Yaranın işlənmə növləri</a>
              </li>
              <li>
                <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#hirurgicheskaya-obrabotka-rany">Hansı hallarda yara işlənməlidir</a>
              </li>
              <li>
                <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#kakie-vidy-sredstv-dlya-obrabotki-ran-naibolee-rasprostraneny">Yaraların işlənməsində ən çox istifadə olunan vasitələr hansılardır?</a>
              </li>
              <li>
                <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#obrabotka-rany-rastvorom-betadin">Yaranın Betadin® həlli ilə işlənməsi</a>
              </li>
              <li>
                <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
              </li>
              <li>
                <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#spisok-literatury">Ədəbiyyat siyahısı</a>
              </li>
            </ul>
            <div className="nav-content-title nav-content-title-cross"> Məzmun</div>
          </nav>
        </div>
      </div>

      <p />
      <nav className="nav-content nav-content-fixed">
        <ul>
          <li>
            <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#prichiny-poyavleniya-ran">Yaraların yaranma səbəbləri</a>
          </li>
          <li>
            <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#klassifikaciya-ran">Yaraların təsnifatı</a>
          </li>
          <li>
            <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#zazhivlenie-rany">Yaranın sağalması</a>
          </li>
          <li>
            <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#vidy-obrabotki-rany">Yaranın işlənmə növləri</a>
          </li>
          <li>
            <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#hirurgicheskaya-obrabotka-rany">Hansı hallarda yara işlənməlidir</a>
          </li>
          <li>
            <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#kakie-vidy-sredstv-dlya-obrabotki-ran-naibolee-rasprostraneny">Yaraların işlənməsində ən çox istifadə olunan vasitələr hansılardır?</a>
          </li>
          <li>
            <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#obrabotka-rany-rastvorom-betadin">Yaranın Betadin® həlli ilə işlənməsi</a>
          </li>
          <li>
            <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
          </li>
          <li>
            <a href="https://betadin.ru/encyclopedia/obrabotka-ran/#spisok-literatury">Ədəbiyyat siyahısı</a>
          </li>
        </ul>
        <div className="nav-content-title nav-content-title-cross"> Məzmun</div>
      </nav>
      <div className="home-container">
        <div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətinin yerinə keçmir</div>
      </div>
      <div className="page-content-wrapper">
        <div className="container container-middle page-content">
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3340/8e99f6c6bbfa9d70ef2bd656524e3d387868c2e0dc9981f5e085a7e489b1f3d0-650x0/rana-pravkaat4x-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/3340/8e99f6c6bbfa9d70ef2bd656524e3d387868c2e0dc9981f5e085a7e489b1f3d0-650x0/rana-pravkaat4x-1300x650.webp 2x"
              type="image/webp"
            />
            <img
              decoding="async"
              height={325}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3340/8e99f6c6bbfa9d70ef2bd656524e3d387868c2e0dc9981f5e085a7e489b1f3d0-650x0/rana-pravkaat4x-650x325.png.webp"
              srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3340/8e99f6c6bbfa9d70ef2bd656524e3d387868c2e0dc9981f5e085a7e489b1f3d0-650x0/rana-pravkaat4x-650x325.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3340/8e99f6c6bbfa9d70ef2bd656524e3d387868c2e0dc9981f5e085a7e489b1f3d0-650x0/rana-pravkaat4x-1300x650.png.webp 2x"
              alt="Dərin cırılmış yara"
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
          <h2 className="h2" id="prichiny-poyavleniya-ran">Yaraların yaranma səbəbləri</h2>
          <div className="list-base">
            <ul>
              <li>Təsadüfi hadisə</li>
              <li>Cərrahi müdaxilə</li>
              <li>Müharibə hərəkətləri</li>
            </ul>
          </div>
          <h2 className="h2" id="klassifikaciya-ran">Yaraların təsnifatı</h2>
          <p>
            <strong>
              Dərinin zədələnmə dərəcəsinə görə yaralar aşağıdakı növlərə bölünür
              <sup>
                <a href="#spisok-literatury">1,2,3</a>
              </sup>
              :</strong>
          </p>
          <div className="two-column">
            <div className="column">
              <p>
                <strong>Açıq</strong>
              </p>
              <p>Dəri və ya selikli qişanın zədələnməsi ilə müşayiət olunur. İnfeksiyaya yoluxa bilər.</p>
            </div>
            <div className="column">
              <p>
                <strong>Qapalı</strong>
              </p>
              <p>Dəri və selikli qişa zədələnmədən dərin toxumalar zədələnir.</p>
            </div>
          </div>
          <p>
            Yüngül xəsarətlər, sürtmə və cızıqlar və ciddi yaralar — oynaq, sinir, böyük qan damarları və daxili orqanların zədələnməsi — ola bilər ki, bunların müalicəsi üçün xəstənin təcili hospitalizasiyası tələb olunur.
          </p>
          <p>
            <strong>Yaralar infeksiyalaşmaya görə belə ola bilər:</strong>
          </p>
          <div className="two-column">
            <div className="column">
              <p>
                <strong>İnfeksiyalaşmış</strong>
              </p>
              <p>Zədə zamanı infeksiyalaşmış yaralar</p>
              <p>
                <br />Zədələnmədən bir müddət sonra infeksiyalaşmış yaralar
              </p>
            </div>
            <div className="column">
              <p>
                <strong>İnfeksiyalaşmamış</strong>
              </p>
              <p>Yarada zərərli mikroorqanizmlər yoxdur</p>
            </div>
          </div>
          <p>Yadda saxlayın ki, yaraya düşən infeksiya aşağıdakı kimi ağırlaşmalara səbəb ola bilər:</p>
          <ul className="wp-block-list">
            <li>qazlı gangrena</li>
            <li>stafilokok infeksiyası</li>
            <li>tetanus</li>
          </ul>
          <h2 className="h2" id="symptomy-rany">Yarada yaranan simptomlar</h2>
          <ul className="wp-block-list">
            <li>Ağrı</li>
            <li>Qanaxma</li>
            <li>Açılma (dəri kənarlarının ayrılması)</li>
            <li>
              Zədələnmiş hissənin funksiyasının pozulması
              <strong>
                <sup>
                  <a href="#spisok-literatury">1,2,3</a>
                </sup>
              </strong>
            </li>
          </ul>
          <h2 className="h2" id="zazhivlenie-rany">Yaranın sağalması</h2>
          <p>
            Yaranın sağalması toxuma zədələnməsinin dərəcəsindən və mikroblarla çirklənmə olub-olmamasından asılı olaraq birincili və ya ikincili şəkildə baş verir
            <strong>
              <sup>
                <a href="#spisok-literatury">1,2,3</a>
              </sup>
            </strong>
            .
          </p>
          <div className="two-column">
            <div className="column">
              <p>
                Əgər zədələnmə kənarları sağlam və hamardır, bir-birindən 0,5-1 sm məsafədədirsə və ya yara əməliyyat nəticəsində yaranıbsa və tikişlərlə bağlanırsa, onda yara birincili şəkildə sağalacaq.
              </p>
            </div>
            <div className="column">
              <p>
                Əgər yara geniş toxuma defektlərinə malikdirsə və birincili bağlama mümkün deyilsə, yaxud yara infeksiyası, irinləmə varsa, o zaman yara ikincili şəkildə sağalaraq kobud çapıq əmələ gətirə bilər.
              </p>
            </div>
          </div>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1034/baa00466debf326179c4d887846bb0c99208e81ea4f7744952132511fe1e7039-650x0/istockphoto-1341663000-2048x2048-2-2-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1034/baa00466debf326179c4d887846bb0c99208e81ea4f7744952132511fe1e7039-650x0/istockphoto-1341663000-2048x2048-2-2-1300x300.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={150}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1034/baa00466debf326179c4d887846bb0c99208e81ea4f7744952132511fe1e7039-650x0/istockphoto-1341663000-2048x2048-2-2-650x150.png.webp"
              alt="Birincili sağalma"
            />
          </picture>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1035/1232fce8e5f5e99a1185d030b9b7b8fefff3d60a74155e15a393c371f832bbba-650x0/istockphoto-1341663000-2048x2048-2-3-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1035/1232fce8e5f5e99a1185d030b9b7b8fefff3d60a74155e15a393c371f832bbba-650x0/istockphoto-1341663000-2048x2048-2-3-1300x300.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={150}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1035/1232fce8e5f5e99a1185d030b9b7b8fefff3d60a74155e15a393c371f832bbba-650x0/istockphoto-1341663000-2048x2048-2-3-650x150.png.webp"
              alt="İkincili sağalma"
            />
          </picture>
          <div className="green">
            <p>
              <strong>Sadə</strong>, komplikasiyasız və <strong>infeksiyalaşmamış yara</strong> ev şəraitində müalicə oluna bilər.
              <br />
              <br />
              <strong>Dərin</strong>, infeksiyalaşmış yaralar <strong>təxirəsalınmaz ilkin yardım</strong> və <strong>sonrakı tibbi müayinə</strong> tələb edir.
            </p>
          </div>
          <div className="iframe">
            <div className="bg_default bg_green" />
            <div className="h3 h3_green iframe-title">Yaraları necə və hansı vasitələrlə emal etmək — qısa videoya baxın:</div>
            <div className="iframe-container">
              <iframe
                className="lazyloaded"
                data-src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="iframe_desc">Videodan yara emalı alqoritmi və vaxtında dezinfeksiya üçün lazım olan vasitələr barədə məlumat əldə edəcəksiniz.</div>
          </div>
          <h2 className="h2" id="vidy-obrabotki-rany">Yaranın işlənmə növləri</h2>
          <h3 className="h3" id="pervichnaya-obrabotka-rany">Birincil yara emalı</h3>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1036/f6374b36e2c670e2fd35ed033e727cf326d6b76d9a479b0ea1f21000f151e311-650x0/istockphoto-1341663000-2048x2048-2-3-1-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1036/f6374b36e2c670e2fd35ed033e727cf326d6b76d9a479b0ea1f21000f151e311-650x0/istockphoto-1341663000-2048x2048-2-3-1-1300x300.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={150}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1036/f6374b36e2c670e2fd35ed033e727cf326d6b76d9a479b0ea1f21000f151e311-650x0/istockphoto-1341663000-2048x2048-2-3-1-650x150.png.webp"
              alt="Birincil yara emalı"
            />
          </picture>
          <p>
            İlk növbədə yaradan görünən çirkləri çıxarmaq, sonra isə antiseptik ilə emal etmək lazımdır. Emaldan sonra yara təkrar çirklənməsinin qarşısını almaq üçün bint və ya yara lenti ilə sarın.
          </p>
          <h3 className="h3" id="obrabotku-rany-v-domashnih-usloviyah-mozhno-opisat-v-6-prostyh-shagah">Evdə yara emalı 6 sadə addatda</h3>
          <div className="big">
            <div className="line">
              <div>
                <p>
                  <strong>Addım № 2. Qanaxmanı dayandırmaq</strong>
                </p>
                <p>
                  Qanaxmanı dayandırmaq üçün yaraya təmiz parça və ya bint ilə təzyiq tətbiq etmək olar.
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Addım № 2. Qanaxmanı dayandırmaq</strong>
                </p>
                <p>
                  Qanaxmanı dayandırmaq üçün yaraya təmiz parça və ya bint ilə təzyiq tətbiq etmək olar.
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Addım № 3. Yarayı təmizləmək</strong>
                </p>
                <p>
                  Yarayı təmiz su ilə yumaq kifayətdir. Sabunu yalnız yaranın ətrafında istifadə etmək olar. Yarayı təmizləmək üçün 0,9% natrium xlorid məhlulu da uyğundur. Marlanı məhlulla isladıb zədələnmiş sahəni silin.
                </p>
                <p>
                  Əgər yara küçədə düşmə nəticəsində yaranıbsa və yara içinə yad cisimlər daxil olubsa, onları çıxarmaq lazımdır — yad cismlər infeksiya törədə bilər. Steril bintdən iti uclu konus hazırlayıb və ya əvvəlcədən 70% spirtlə dezinfeksiya olunmuş pensetdən istifadə edin.
                </p>
                <p>
                  Yarayı təmizlədikdən sonra infeksiyanın qarşısını almaq üçün zədələnmiş sahəni antiseptiklə emal etmək lazımdır. Bunun üçün povidon-iyod su məhlulu —
                  <a href="https://betadin.ru/encyclopedia/povidon-jod/">povidon-iyod</a>
                  (<span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span>) tövsiyə olunur; bu, peroksid, spirtli iyod məhlulları və yaşıl boya ilə müqayisədə yanma hissi yaratmır və yaranın bütün səthinə tətbiq oluna bilər.
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Addım № 4. Yaranı bağlamaq</strong>
                </p>
                <p>
                  Növbəti addım — yarayı qorumaqdır. Zədələnmiş sahəyə steril sarğı qoyun və bintlə fiksasiya edin. Bu dəri ətrafını qoruyacaq, yaranın böyüməsinin qarşısını alacaq və sağalma prosesini sürətləndirəcək uyğun təzyiq göstərəcək.
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Addım № 5. Sarğıni dəyişmək</strong>
                </p>
                <p>
                  Sarğı hər gün ən azı bir dəfə dəyişdirilməlidir. Sarğı dəyişdirərkən əvvəlcədən əlləri yaxşıca yuyun, yarayı təmizləyin və steril sarğı tətbiq edin.
                </p>
                <p>Əgər yara qanamaqda davam edirsə və ya sarımtıl ifrazatlar görünürsə, həkimə müraciət edin.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Addım № 6. Simptomları müşahidə etmək</strong>
                </p>
                <p>
                  Güclü ağrı, pis qoxu, qalın sarımtıl ifrazatlar, yaranın ətrafında dəri rənginin qaralması — bunlar mürəkkəb sağalma əlamətləridir. Belə halda dərhal həkimə müraciət etmək lazımdır.
                </p>
              </div>
            </div>
          </div>
          <h3 className="h3" id="hirurgicheskaya-obrabotka-rany">Cərrahi yara emalı</h3>
          <p>Cərrahi yara emalı vaxtından asılı olaraq müxtəlif ola bilər:</p>
          <p>Erkən — zədələnmədən ilk 24 saat ərzində aparılan.</p>
          <p>Gecikmiş — yaranın ikinci sutkasında aparılan.</p>
          <p>Gec — ikinci sutkadan sonra aparılan.</p>
          <p>
            <strong>Həkim tərəfindən cərrahi emalın əsas mərhələləri</strong>
          </p>
          <div className="big">
            <div className="line">
              <div>
                <p>
                  <strong>Yara boşluğunun kəsilməsi</strong>
                </p>
                <p>Yaranın kənarlarını daha yaxşı öyrənmək üçün onları kəsmək lazımdır.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Yaradan yad cisimlərin çıxarılması</strong>
                </p>
                <p>Yaraya ilişən yad cisimlər sağalmaya mane olur və bakterial infeksiya yarada bilər. Bütün yad cisimlər çıxarılmalıdır.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Ölmüş toxumanın kəsilib götürülməsi</strong>
                </p>
                <p>Ölmüş toxuma da sağalmaya mane olduğundan çıxarılır.</p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Zədələnmiş toxuma/ orqan üzərində əməliyyat</strong>
                </p>
                <p>
                  Əgər yara dərin və böyük bir damarı zədələyirsə, həkimlər qanaxmanı dayandırmalı və bütövlüyü bərpa etməlidirlər.
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Drenajların qoyulması</strong>
                </p>
                <p>
                  Əgər yarada infeksiya əlamətləri varsa, yaranan ifrazatı uzaqlaşdırmaq üçün drenaj qoyula bilər. Drenajlar mütəmadi olaraq dəyişdirilməlidir.
                </p>
              </div>
            </div>
            <div className="line">
              <div>
                <p>
                  <strong>Yaranın bağlanması</strong>
                </p>
                <p>Adətən bu mərhələdə tikiş qoyulur. Tikiş texnikasını həkim zədənin növünə görə müəyyən edir.</p>
              </div>
            </div>
          </div>
          <h2 className="h2" id="hirurgicheskaya-obrabotka-rany-2">Hansı hallarda yara işlənməlidir</h2>
          <h3 className="h3" id="obrabotka-rany-posle-operacii">Əməliyyatdan sonra yara emalı:</h3>
          <div className="big">
            <div className="line">
              <p>Plasteri götürün, zədələnmiş sahəni yara yuma vasitəsi ilə təmizləyin. 0.9% natrium xlorid məhlulu ideal seçimdir.</p>
            </div>
            <div className="line">
              <p>Yarayı steril salfetlərlə yumşaq hərəkətlərlə qurudun. İnfeksiyanın qarşısını almaq üçün zədələnmiş sahəni antiseptiklə, məsələn
                <strong>
                  <span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span>
                </strong>
                ilə emal etmək tövsiyə olunur.
              </p>
            </div>
            <div className="line">
              <p>
                Yeni plaster yapışdırın.<strong>
                <sup>
                  <a href="#spisok-literatury">3,4,5</a>
                </sup>
                </strong>
              </p>
            </div>
          </div>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1037/ac63bb0bf597ca306fa9c796a051e5b7d61a8e0d8bcdefa7002d810215350124-650x0/istockphoto-1341663000-2048x2048-2-3-2-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1037/ac63bb0bf597ca306fa9c796a051e5b7d61a8e0d8bcdefa7002d810215350124-650x0/istockphoto-1341663000-2048x2048-2-3-2-1300x300.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={150}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1037/ac63bb0bf597ca306fa9c796a051e5b7d61a8e0d8bcdefa7002d810215350124-650x0/istockphoto-1341663000-2048x2048-2-3-2-650x150.png.webp"
              alt="Əməliyyatdan sonra yara emalı"
            />
          </picture>
          <div className="green">
            <p>
              Əgər duş qəbul etmək istəyirsinizsə, plasteri su prosedurlarından əvvəl götürün.
              <br />
              <br />
              Yaranı yumamaq məsləhət deyil.
              <br />
              <br />
              Hamama getmək yalnız tikişlər götürüldükdən sonra mümkündür — adətən 7–15-ci günlərdə.
            </p>
          </div>
          <h3 className="h3" id="obrabotka-rany-posle-udaleniya-rodinki">Qiymti çıxarıldıqdan sonra yara emalı</h3>
          <p>Qayğı sadədir: 4–7 gün ərzində yarayı antiseptik məhlullarla emal etmək lazımdır.</p>
          <p>Qabığın düşməsindən sonra proseduru dayandırmaq olar.</p>
          <div className="green">
            <p>
              <strong>Vacib!</strong>
            </p>
            <p>
              <strong>Qabığı islatmaq</strong> və ya yumşaltmaq olmaz. <br />Su ilə qabığın üzərinə gəzməməsinə diqqət yetirin.
              <br />
              <br />
              <strong>Qabığı özünüz çıxarmayın</strong>, əks halda çapıq qalacaq. Qabıq öz-özünə düşməlidir.
            </p>
          </div>
          <h3 className="h3" id="obrabotka-rany-posle-ukusa-zhivotnyh">Heyvan dişləməsindən sonra yara emalı</h3>
          <div className="big">
            <div className="line">
              <p>
                Yarayı dərhal sabunlu su ilə və ya hər hansı alkalin məhlulla yuyun. Bu mühit bəzi virusların (məsələn, bəşənlik) həyat qabiliyyətini azalda bilər.
              </p>
            </div>
            <div className="line">
              <p>
                Yarənin kənarlarını antiseptik məhlullarla emal edin: 70% spirt məhlulu, 5% iyod məhlulu, <strong>
                  <span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span>
                </strong> və ya 3% hidrogen peroksid məhlulu.
              </p>
            </div>
            <div className="line">
              <p>Steril sarğı və ya yapışqan sarğı tətbiq edin.</p>
            </div>
            <div className="line">
              <p>Əgər heyvanın peyvəndlənmə vəziyyəti məlum deyilsə, travmatologiya nöqtəsinə müraciət edib bəşənlik əleyhinə peyvənd olunmaq lazım ola bilər.</p>
            </div>
          </div>
          <h2 className="h2" id="kakie-vidy-sredstv-dlya-obrabotki-ran-naibolee-rasprostraneny">Yaraların işlənməsində istifadə olunan vasitələr, məhlullar və antiseptiklər</h2>
          <div className="list-base">
            <p>Yaraların işlənməsi üçün antiseptik olaraq istifadə edilə bilər<strong>
              <sup>
                <a href="#spisok-literatury">1,2,3</a>
              </sup>
            </strong>:
            </p>
            <ul>
              <li>İyod əsasında məhlullar, o cümlədən <strong><span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span></strong></li>
              <li>Hidrogen peroksid</li>
              <li>Xlorheksidin biglükonat</li>
              <li>Kalium permanganat və digər</li>
            </ul>
          </div>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3314/bbb102d68694e1b216e9f519dce827aafc9d8aa7981685844aaedbdd86eea7b2-650x0/istockphoto-1341663000-2048x2048-2-9-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/3314/bbb102d68694e1b216e9f519dce827aafc9d8aa7981685844aaedbdd86eea7b2-650x0/istockphoto-1341663000-2048x2048-2-9-1300x650.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={325}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3314/bbb102d68694e1b216e9f519dce827aafc9d8aa7981685844aaedbdd86eea7b2-650x0/istockphoto-1341663000-2048x2048-2-9-650x325.png.webp"
              alt="Antiseptik məhlullar"
            />
          </picture>
          <figure>
            <table>
              <thead>
                <tr>
                  <th>
                    <strong>Məhlul</strong>
                  </th>
                  <th>
                    <strong>Müsbət cəhətləri</strong>
                  </th>
                  <th>
                    <strong>Mənfi cəhətləri</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Betadin<sup>®</sup></strong>
                  </td>
                  <td>
                    Su əsaslı məhlul, dərini qıcıqlandırmır, yaranın sağalmasına kömək edir, uzun müddətli təsirə malikdir.
                    <sup>
                      <a title="#spisok-literatury" href="#spisok-literatury">2,3,6</a>
                    </sup>
                    Dəridən yaxşı yuyulur.
                  </td>
                  <td>Xüsusi xəstələr üçün tətbiq məhdudiyyətləri ola bilər (təlimata baxın)
                    <sup>
                      <a title="#spisok-literatury" href="#spisok-literatury">11,12</a>
                    </sup>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Hidrogen peroksid</strong>
                  </td>
                  <td>Yarayı mexaniki şəkildə təmizləyir</td>
                  <td>Yarada qıcıqlanma və iltihaba səbəb ola bilər, hüceyrə parçalanmasına gətirib çıxararaq regenerasiyanı ləngidir
                    <sup>
                      <a title="#spisok-literatury" href="#spisok-literatury">13</a>
                    </sup>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>İyod (spirtli məhlul)</strong>
                  </td>
                  <td>Aşağı qiymət və əlçatanlıq</td>
                  <td>Dərini qurudur, soyulma yarada bilər, yalnız yaranın kənarlarını emal etmək tövsiyə olunur
                    <sup>
                      <a title="#spisok-literatury" href="#spisok-literatury">2,14</a>
                    </sup>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Xlorheksidin biglükonat</strong>
                  </td>
                  <td>Bəzi bakteriyalar, viruslar və göbələklərə qarşı aktivdir</td>
                  <td>Dəri səpkisi, qaşınma, fotosensibilizasiya və nadir hallarda anafilaksiya yarada bilər
                    <sup>
                      <a title="#spisok-literatury" href="#spisok-literatury">15</a>
                    </sup>
                  </td>
                </tr>
              </tbody>
            </table>
          </figure>
          <p>&nbsp;</p>
          <h2 className="h2" id="obrabotka-rany-rastvorom-betadin">Yaranın povidon-iyod (Betadin®) antiseptik məhlulu ilə emalı</h2>
          <div className="product-block">
            <div className="banner-product-img">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-315x252.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-630x503.webp 2x"
                  type="image/webp"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-1853x1832.jpg.webp 2x"
                  width={927}
                  height={916}
                  src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg.webp"
                  alt="Betadin"
                />
              </picture>
            </div>
            <p>
              <strong>
                <span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span>
              </strong> 10% povidon-iyod su məhluludur və adətən sancı və qaşınma hissi yaratmır.
            </p>
            <p>Paketdəki iyod yaranın sağalmasını sürətləndirə bilər.</p>
            <p>
              <strong>
                <span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span>
              </strong> məhlul povidon (polivinilpirrolidon) ilə birləşmiş iyod tərkibli maddə ehtiva edir ki, bu da iyodun tədricən ayrılmasını təmin edir.
            </p>
            <p>
              <strong>
                <span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span>
              </strong> dəridən sadə su ilə asanlıqla yuyulur.
            </p>
            <p className="buttons">
              <a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-rastvor-instruktsiya/">
                İstifadə təlimatı
              </a>
            </p>
          </div>
          <h3 className="h3" id="algoritm-deystviy-pri-obrabotke-rany-rastvorom-betadin">Yaranın Betadin® məhlulu ilə emal alqoritmi</h3>
          <p>
            <strong>Betadin<sup>®</sup></strong> yaraların emalında həm konsentrat, həm də seyreltilmiş halda istifadə oluna bilər.
          </p>
          <p>
            10% məhluldan 1% məhlul hazırlamaq üçün 1:10 nisbətində seyrelmə etmək lazımdır (məsələn, 1 ml <strong>Betadin<sup>®</sup></strong> + 10 ml su və ya fizyoloji məhlul).
          </p>
          <p>Seyreltdikdən sonra marla ilə sürtmə hərəkətləri ilə yaraya tətbiq edin və sonra steril sarğı ilə bağlayın.</p>
          <picture className="img-normal">
            <source
              srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3309/9b8b1b2ff74aa5dd0676e917321ea03ff4b7adfb1fb08386e0cc655d20ceb33c-650x0/istockphoto-1341663000-2048x2048-2-6-650x150.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/3309/9b8b1b2ff74aa5dd0676e917321ea03ff4b7adfb1fb08386e0cc655d20ceb33c-650x0/istockphoto-1341663000-2048x2048-2-6-1300x300.webp 2x"
              type="image/webp"
            />
            <img
              loading="lazy"
              decoding="async"
              height={150}
              width={650}
              src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3309/9b8b1b2ff74aa5dd0676e917321ea03ff4b7adfb1fb08386e0cc655d20ceb33c-650x0/istockphoto-1341663000-2048x2048-2-6-650x150.png.webp"
              alt="Yaranın antiseptiklə emal sxemi"
            />
          </picture>
          <div className="block-with-image">
            <div className="block-with-image__green">
              <p>
                <strong>Povidon-iyod</strong>
              </p>
              <p>Povidon-iyodun xassələri və xüsusiyyətləri. Povidon-iyod nə üçün istifadə olunur? Betadin<sup>®</sup> məhlulu, məlhəmi və şamları üçün istifadə təlimatı.</p>
              <a href="https://betadin.ru/encyclopedia/povidon-jod/" className="btn btn-green" target="_blank">Ətraflı</a>
            </div>
            <picture>
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-310x235/povidon-jod-prevyu-310x210.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-310x235/povidon-jod-prevyu-620x420.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={210}
                width={310}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-310x235/povidon-jod-prevyu-310x210.png.webp"
                alt="Povidon-iyod — önizləmə"
              />
            </picture>
          </div>
          <h3 className="h3" id="obrabotka-rany-perekisyu-vodoroda">Yaranın hidrogen peroksidlə emalı</h3>
          <p>Hidrogen peroksid — H<sub>2</sub>O<sub>2</sub> — yaranın üzərində mexaniki şəkildə mikroorqanizmləri aradan qaldıra bilər, reaksiyada yaranan qabarcıqlar vasitəsilə onları yaradan çıxarır.</p>
          <h3 className="h3" id="obrabotka-rany-yodom">Yaranın iyodla emalı</h3>
          <p>İyod adətən 5% spirt məhlulu şəklində olur; iyodla emal zamanı yanma hissi, dəri quruması və soyulma ola bilər. Narahatlığı azaltmaq üçün yalnız yaranın kənarlarını emal etmək tövsiyə olunur.</p>
          <div className="green">
            <p>
              Əgər dərmanlar yoxdursa, onları soda və ya adi duz məhlulu ilə əvəz etmək olar.
              <br />Yara steril olmayan əşya ilə dəysə, orada həmişə bakteriyalar olacaq.
            </p>
          </div>
          <div className="exlude-turbo">
            <picture className="banner-betadin banner-quastion">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={542}
                width={558}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg.webp"
                alt="Dekorativ element"
              />
            </picture>
          </div>
          <h2 className="h2" id="chasto-zadavaemye-voprosy">Tez-tez verilən suallar</h2>
          <h3 className="h3" id="kak-obrabotat-ranu">Yarayı necə emal etmək?</h3>
          <p>İlk olaraq yarayı yuyun, antiseptik məhlullarla dezinfeksiya edin və steril sarğı tətbiq edin.</p>
          <p>Əgər infeksiya əlamətləri görünürsə və yara uzun müddət sağalmırsa, dərhal həkimə müraciət edin.</p>
          <h3 className="h3" id="mozhno-li-obrabatyvat-ranu-mazyu-esli-da-to-kakoy">Yarayı məlhəmlə emal etmək olarmı və hansı məlhəm?</h3>
          <p>Mərhələnin sağalması zamanı antibakterial və sağalmanı sürətləndirən məlhəmlər tətbiq etmək olar. Məsələn, Betadin<sup>®</sup> məlhəmi antiseptik və dezinfeksiyaedici xüsusiyyətlərə malikdir və makrogol sayəsində yaranın içindəki çirkləri (irin, mayelər, ölmüş hüceyrələr) çıxarmağa kömək edir.</p>
          <div className="autor">
            <div className="autor-left">
              <p className="autor-title">Kraskovski Fyodor Yanoviç</p>
              <div className="autor-subtitle" />
              <p className="autor-footer">Məqalənin müəllifi</p>
            </div>
            <picture>
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-470x406.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={203}
                width={235}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/4377/3484383e613339ca1e8d23db36434c23a55f91c619c074ad383292c99606fedb-236x203/kraskovskij-novyj-235x203.png.webp"
                alt=""
              />
            </picture>
          </div>
          <div className="h2 h2-read-more" id="chitat-po-teme">Mövzu ilə bağlı oxuyun</div>
          <div className="slider-normal">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-slide-active">
                <div className="slide-image">
                  <picture>
                    <source
                      srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-491x332.webp 2x"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      height={166}
                      width={246}
                      src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-0x166/povidon-jod-prevyu-246x166.png.webp"
                      alt="Povidon-iyod — önizləmə"
                    />
                  </picture>
                </div>
                <div className="slide-body">
                  <p className="slide-title">
                    <strong>Povidon-iyod</strong>
                  </p>
                  <p>Povidon-iyodun xassələri və istifadə məqsədləri. Məhlulun, məlhəmin və şamların istifadə təlimatı.</p>
                  <p className="slide-more"> <a href="https://betadin.ru/encyclopedia/povidon-jod/"> Ətraflı </a> </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="h2" id="spisok-literatury">Ədəbiyyat siyahısı</h2>
          <ol className="literature">
            <li id="literature-0">Zavrazhanov A. A., Gvozdev M. Yu., Krutova V. A. və b. Yaralar və yara prosesi. KubGMU, 2016.</li>
            <li id="literature-1">Gostişev V. və b. Ümumi cərrahiyyə. — GEOTAR-Media, 2005.</li>
            <li id="literature-2">Vasiliev V. K., Popov A. P., Tsybikzhapov A. D. Ümumi cərrahiyyə. — 2014.</li>
            <li id="literature-3">Enoch S., Price P. Cellular, molecular and biochemical differences in the pathophysiology of healing between acute wounds, chronic wounds and wounds in the aged //World Wide Wounds. – 2004. – T.13. – S.1-17.</li>
            <li id="literature-4">Cooper P. A review of different wound types and their principles of management in Wound Healing: a systematic approach to advanced wound healing and management. – 2005.</li>
            <li id="literature-5">Nosenko O. M., Moskalenko T. Ya., Rutinskaya A. V. Povidon-iyod (Betadin®) müasir akusher-ginekologiyada //REPRODUCTIVE ENDOCRINOLOGY. – 2018. – №44. – S.43-48.</li>
            <li id="literature-6">Betadin® məhlulunun tibbi tətbiqi üzrə təlimat, RU P N015282/03.</li>
            <li id="literature-7">Betadin® məlhəminin tibbi tətbiqi üzrə təlimat, RU P N015282/02.</li>
            <li id="literature-8">Yaremchuk A.A., Khishova O.M., Polovko N.P. Piyli yaraların ilkin fazasında çoxkomponentli məlhəmin tərkibinin əsaslandırılması. Vestnik farmatsii №3 (57) 2012.</li>
            <li id="literature-9">Akhtyamova N.E. Az hərəkətli xəstələrdə yatalak yaraların müalicəsi // RMJ. 2015. №00. S.1–1.</li>
            <li id="literature-10">Paul Lorenz Bigliardi. Povidone iodine in wound healing: A review of current concepts and practices. International Journal of Surgery 44 (2017) 260e268.</li>
            <li id="literature-11">Koroleva I. A., Kozhukhov A. A. Povidon-iyodun oftalmologiyada rolu. "RMJ" №1, 26.02.2018.</li>
            <li id="literature-12">Troshin N. Cərrahi müdaxilələrdə 3% hidrogen peroksid məhlulundan bu qədər aktiv istifadə etmək lazımdırmı? "RMJ" №25, 15.12.2005.</li>
            <li id="literature-13">Tibbi tətbiq üçün təlimat. İyod, xarici istifadə üçün məhlul, [spirtli]. (RN: LP-002039).</li>
            <li id="literature-14">Tibbi tətbiq üçün təlimat. Xlorheksidin Medisorb (RN: LP-005766).</li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default ObrabotkaRanAz;
