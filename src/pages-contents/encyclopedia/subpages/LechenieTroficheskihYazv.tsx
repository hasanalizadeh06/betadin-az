"use client";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Some external analytics `ym` may be present on window
declare const ym: any;

export default function LechenieTroficheskihYazv(): React.ReactElement {
  const t = useTranslations("Blogs.LechenieTroficheskihYazv");
  const [navOpened, setNavOpened] = React.useState<boolean>(false);
  const [secondaryNavOpened, setSecondaryNavOpened] =
    React.useState<boolean>(false);
  const [navTitleHidden, setNavTitleHidden] = React.useState<boolean>(true);

  useEffect(() => {
    console.log(1);
    const scrollGoals: Record<number, () => void> = {
      40: () => ym(37744585, "reachGoal", "Scrolling40"),
      80: () => ym(37744585, "reachGoal", "Scrolling80"),
    };
    const triggered: Record<number, boolean> = { 40: false, 80: false };
    function checkScroll() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const winHeight = window.innerHeight;
      const scrollPercent = Math.floor(
        ((scrollTop + winHeight) / docHeight) * 100
      );
      for (let percent of [25, 50, 75, 100]) {
        if (scrollPercent >= percent && !triggered[percent]) {
          triggered[percent] = true;
          if (typeof scrollGoals[percent] === "function") {
            scrollGoals[percent]();
          }
          console.log(percent);
        }
      }
      if (Object.values(triggered).every((v) => v)) {
        window.removeEventListener("scroll", checkScroll);
      }
    }
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    const checkPosition = () => {
      if (typeof window === "undefined") return;
      const threshold = 1000;
      const scrollY = window.scrollY ?? window.pageYOffset;
      if (scrollY >= threshold) {
        setNavTitleHidden(false);
      } else {
        setNavTitleHidden(true);
        setSecondaryNavOpened(false);
      }
    };

    checkPosition();
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", checkPosition);

    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  return (
    <main>
      <article>
        <div className="container-page-header">
          <div className="container">
            <div className="page-header page-header-breadcrumbs">
              <ol
                className="breadcrumb"
                vocab="https://schema.org/"
                typeof="BreadcrumbList"
              >
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/">
                    <span property="name">{t("breadcrumb.home")}</span>
                  </a>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/encyclopedia/">
                    <span property="name">{t("breadcrumb.encyclopedia")}</span>
                  </a>
                  <meta property="position" content="2" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">{t("breadcrumb.current")}</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title">
                  <h1 className="page-header-title-text">
                    {t("header.title")}
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
                      alt="Header icon"
                      priority
                    />
                  </picture>
                </div>
                <h2 className="page-header-subtitle">{t("header.subtitle")}</h2>
                <div className="page-header-body">
                  <p>{t("header.intro")}</p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a href="/encyclopedia/lechenie-troficheskih-yazv/#diagnostika">
                      {t.raw("header.anchors")[0]}
                    </a>
                  </li>
                  <li>
                    <a href="/encyclopedia/lechenie-troficheskih-yazv/#lechenie-troficheskih-yazv">
                      {t.raw("header.anchors")[1]}
                    </a>
                  </li>
                  <li>
                    <a href="/encyclopedia/lechenie-troficheskih-yazv/#preparaty-dlya-obezzarazhivaniya-i-lecheniya-troficheskih-yazv">
                      {t.raw("header.anchors")[2]}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
					<picture>
						<source srcSet="/kartinka-banner-1-1460x1230.webp, /kartinka-banner-1-1460x1230.webp" type="image/webp" />
						<img decoding="async" height={112} width={115} src="/kartinka-banner-1-1460x1230.webp" srcSet="/kartinka-banner-1-1460x1230.webp, /kartinka-banner-1-1460x1230.webp" alt={t('header.alt')} />
					</picture>
                </div>
              </div>
            </div>
            <nav
              className={`nav-content${navOpened ? " nav-content__open" : ""}`}
            >
              <ul>
                <li>
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/#prichiny-poyavleniya-i-vidy-troficheskih-yazv">
                    {t.raw("nav_headers")[0]}
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/#vidy-troficheskih-yazv">
                    {t.raw("nav_headers")[1]}
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/#diagnostika">
                    {t.raw("nav_headers")[2]}
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/#lechenie-troficheskih-yazv">
                    {t.raw("nav_headers")[3]}
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/#preparaty-dlya-obezzarazhivaniya-i-lecheniya-troficheskih-yazv">
                    {t.raw("nav_headers")[4]}
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/#obrabotka-rastvorom-povidon-yoda-betadin">
                    {t.raw("nav_headers")[5]}
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/#profilaktika">
                    {t.raw("nav_headers")[6]}
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/#chasto-zadavaemye-voprosy">
                    {t.raw("nav_headers")[7]}
                  </a>
                </li>
                <li>
                  <a href="/encyclopedia/lechenie-troficheskih-yazv/#spisok-literatury">
                    {t.raw("nav_headers")[8]}
                  </a>
                </li>
              </ul>
              <div
                className="nav-content-title nav-content-title-cross"
                onClick={() => setNavOpened(!navOpened)}
              >
                {" "}
                {t.raw("tableOfContents")}
              </div>
            </nav>
          </div>
        </div>
        <nav
          className={`nav-content nav-content-fixed${
            navTitleHidden ? " nav-content-title-hidden" : ""
          }${secondaryNavOpened ? " nav-content__open" : ""}`}
        >
          <ul>
            <li>
              <a href="/encyclopedia/lechenie-troficheskih-yazv/#prichiny-poyavleniya-i-vidy-troficheskih-yazv">
                {t.raw("nav_headers_fixed")[0]}
              </a>
            </li>
            <li>
              <a href="/encyclopedia/lechenie-troficheskih-yazv/#vidy-troficheskih-yazv">
                {t.raw("nav_headers_fixed")[1]}
              </a>
            </li>
            <li>
              <a href="/encyclopedia/lechenie-troficheskih-yazv/#diagnostika">
                {t.raw("nav_headers_fixed")[2]}
              </a>
            </li>
            <li>
              <a href="/encyclopedia/lechenie-troficheskih-yazv/#lechenie-troficheskih-yazv">
                {t.raw("nav_headers_fixed")[3]}
              </a>
            </li>
            <li>
              <a href="/encyclopedia/lechenie-troficheskih-yazv/#preparaty-dlya-obezzarazhivaniya-i-lecheniya-troficheskih-yazv">
                {t.raw("nav_headers_fixed")[4]}
              </a>
            </li>
            <li>
              <a href="/encyclopedia/lechenie-troficheskih-yazv/#obrabotka-rastvorom-povidon-yoda-betadin">
                {t.raw("nav_headers_fixed")[5]}
              </a>
            </li>
            <li>
              <a href="/encyclopedia/lechenie-troficheskih-yazv/#profilaktika">
                {t.raw("nav_headers_fixed")[6]}
              </a>
            </li>
            <li>
              <a href="/encyclopedia/lechenie-troficheskih-yazv/#chasto-zadavaemye-voprosy">
                {t.raw("nav_headers_fixed")[7]}
              </a>
            </li>
            <li>
              <a href="/encyclopedia/lechenie-troficheskih-yazv/#spisok-literatury">
                {t.raw("nav_headers_fixed")[8]}
              </a>
            </li>
          </ul>
          <div
            className="nav-content-title nav-content-title-cross"
            onClick={() => setSecondaryNavOpened(!secondaryNavOpened)}
          >
            {" "}
            {t.raw("tableOfContents")}
          </div>
        </nav>
        <div className="home-container">
          <div className="new-disclaimer"> {t("disclaimer")}</div>
        </div>
        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <p>{t("sections.intro_p1")}</p>
            <p>{t("sections.intro_p2")}</p>
            <div className="exlude-turbo">
              <picture className="banner-betadin banner-circle">
                <source
                  srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.webp 2x"
                  type="image/webp"
                />
                <img
                  decoding="async"
                  height={505}
                  width={503}
                  src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp"
                  srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-503x505.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/64ae25138752f082ec07415217f2c831bfe117280e12ff94a1ef5fbdd2a6cad8-503x505/circle-1006x1010.jpg.webp 2x"
                  alt={t("sections.banner_alt")}
                />
              </picture>
            </div>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/999/51ac56565e945c103188e4a6e1405a201ffe14212033ef769ab2eff079697970-650x0/rectangle-212-1-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/999/51ac56565e945c103188e4a6e1405a201ffe14212033ef769ab2eff079697970-650x0/rectangle-212-1-1300x650.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/999/51ac56565e945c103188e4a6e1405a201ffe14212033ef769ab2eff079697970-650x0/rectangle-212-1-650x325.png.webp"
                srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/999/51ac56565e945c103188e4a6e1405a201ffe14212033ef769ab2eff079697970-650x0/rectangle-212-1-650x325.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/999/51ac56565e945c103188e4a6e1405a201ffe14212033ef769ab2eff079697970-650x0/rectangle-212-1-1300x650.png.webp 2x"
                alt={t("sections.picture_alt")}
              />
            </picture>
            <h3 className="h3" id="osnovnye-simptomy">
              {t("sections.symptoms_title")}
            </h3>
            <p>{t("sections.symptoms_p1")}</p>
            <p>{t("sections.symptoms_p2")}</p>
            <h2
              className="h2"
              id="prichiny-poyavleniya-i-vidy-troficheskih-yazv"
            >
              {t("sections.causes_title")}
            </h2>
            <div className="list-base">
              <p>
                {t("sections.causes_intro")}
                <sup>
                  <a href="#spisok-literatury">1</a>
                </sup>
                :
              </p>
              <ul>
                {t.raw("sections.causes_list").map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p>
              {t("sections.multiple_causes")}
              <sup>
                <a
                  href="#spisok-literatury"
                  data-type="internal"
                  data-id="#spisok-literatury"
                >
                  2
                </a>
              </sup>
              .
            </p>
            <h2 className="h2" id="vidy-troficheskih-yazv">
              {t("sections.types_title")}
            </h2>
            <p>
              {t("sections.venous_desc")}{" "}
              <strong>{t("sections.venous_title")}</strong>.
            </p>
            <p>
              <strong>{t("sections.arterial_title")}</strong>{" "}
              {t("sections.arterial_desc")}
            </p>
            <p>
              <strong>{t("sections.neurotrophic_title")}</strong>{" "}
              {t("sections.neurotrophic_desc")}
            </p>
            <p>
              <strong>{t("sections.martorell_title")}</strong>{" "}
              {t("sections.martorell_desc")}
            </p>
            <p>
              <strong>{t("sections.pyogenic_title")}</strong>{" "}
              {t("sections.pyogenic_desc")}
            </p>
            <p>
              <strong>{t("sections.osteomyelitis_title")}</strong>{" "}
              {t("sections.osteomyelitis_desc")}
            </p>
            <div className="iframe">
              <div className="bg_default bg_green" />
              <div className="h3 h3_green iframe-title">
                {t("sections.video_title")}
              </div>
              <div className="iframe-container">
                <iframe
                  className=" lazyloaded"
                  data-src="https://rutube.ru/play/embed/7de01729aaf5056b179900bface5b278/?p=Lc09mJZvNvKBsatikqztqQ"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="iframe_desc">{t("sections.video_desc")}</div>
            </div>
            <h2 className="h2" id="diagnostika">
              {t("sections.diagnosis_title")}
            </h2>
            <p>{t("sections.diagnosis_p1")}</p>
            <div className="list-base">
              <p>
                <strong>{t("sections.diagnosis_intro")}</strong>
              </p>
              <ul>
                {t.raw("sections.diagnosis_list").map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="green">
              <p>
                <strong>
                  {t("sections.diagnosis_important").split(":")[0]}:
                </strong>{" "}
                {t("sections.diagnosis_important")
                  .split(":")
                  .slice(1)
                  .join(":")}
              </p>
            </div>
            <h2 className="h2" id="lechenie-troficheskih-yazv">
              {t("sections.treatment_title")}
            </h2>
            <p>{t("sections.treatment_p1")}</p>
            <p>
              {t("sections.treatment_p2")}
              <sup>
                <a
                  data-type="internal"
                  data-id="#spisok-literatury"
                  href="#spisok-literatury"
                >
                  2
                </a>
              </sup>
              .
            </p>
            <picture className="img-normal">
              <source
                srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1000/4984daa77e7dfc9eaf359e8dff3bfc30204289adb518b0c7e624f635530d0f58-650x0/rectangle-212-2-650x325.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1000/4984daa77e7dfc9eaf359e8dff3bfc30204289adb518b0c7e624f635530d0f58-650x0/rectangle-212-2-1300x650.webp 2x"
                type="image/webp"
              />
              <img
                loading="lazy"
                decoding="async"
                height={325}
                width={650}
                src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1000/4984daa77e7dfc9eaf359e8dff3bfc30204289adb518b0c7e624f635530d0f58-650x0/rectangle-212-2-650x325.png.webp"
                srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1000/4984daa77e7dfc9eaf359e8dff3bfc30204289adb518b0c7e624f635530d0f58-650x0/rectangle-212-2-650x325.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1000/4984daa77e7dfc9eaf359e8dff3bfc30204289adb518b0c7e624f635530d0f58-650x0/rectangle-212-2-1300x650.png.webp 2x"
                alt={t("sections.picture_phases_alt")}
              />
            </picture>
            <h3 className="h3" id="i-faza-ranevogo-processa">
              {t("sections.phase1_title")}
            </h3>
            <div className="list-base">
              <p>{t("sections.phase1_intro")}</p>
              <ul>
                {t.raw("sections.phase1_list").map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p>{t("sections.phase1_p1")}</p>
            <p>{t("sections.phase1_p2")}</p>
            <div className="block-with-image">
              <div className="block-with-image__green">
                <p>
                  <strong>{t("sections.povidon_block_title")}</strong>
                </p>
                <p>{t("sections.povidon_block_desc")}</p>
                <a
                  href="/encyclopedia/povidon-jod/"
                  className="btn btn-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("sections.more_button")}
                </a>
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
                  srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-310x235/povidon-jod-prevyu-310x210.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1935/436b689f199a0485392d5ff3651e37b5502544db9b29a638280805fb9dd9d34a-310x235/povidon-jod-prevyu-620x420.png.webp 2x"
                  alt="Повидон-йод - превью"
                />
              </picture>
            </div>
            <h3 className="h3" id="ii-faza-ranevogo-processa">
              {t("sections.phase2_title")}
            </h3>
            <p>{t("sections.phase2_p1")}</p>
            <h3 className="h3" id="iii-iv-faza-ranevogo-processa">
              {t("sections.phase3_4_title")}
            </h3>
            <p>{t("sections.phase3_4_p1")}</p>
            <p>{t("sections.phase3_4_p2")}</p>
            <h2
              className="h2"
              id="preparaty-dlya-obezzarazhivaniya-i-lecheniya-troficheskih-yazv"
            >
              {t("sections.preparations_title")}
            </h2>
            <p>
              {t("sections.preparations_intro")}
              <sup>
                <a
                  href="#spisok-literatury"
                  data-type="internal"
                  data-id="#spisok-literatury"
                >
                  2
                </a>
              </sup>
              .
            </p>
            <div className="list-base">
              <p>{t("sections.antiseptics_intro")}</p>
              <ul>
                {t
                  .raw("sections.antiseptics_list")
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
              </ul>
            </div>
            <h2 className="h2" id="obrabotka-rastvorom-povidon-yoda-betadin">
              {t("sections.betadin_title")}
            </h2>
            <div className="product-block">
              <div className="banner-product-img">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-315x252.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-630x503.webp 2x"
                    type="image/webp"
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-315x252.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/ff94189c2c00d6423c998599064f31a6bea71a919cbb3ca090580b01c7d3f9b2-315x310/banner-betadin-mobile-630x503.jpg.webp 2x"
                  />
                  <source
                    srcSet="https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-1853x1832.webp 2x"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-1853x1832.jpg.webp 2x"
                    width={927}
                    height={916}
                    src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/04e464e9cc8a608638f512b092c8fd91f774daf10a0f004a7d6e73ce50995b50-928x916/banner-betadin-927x916.jpg.webp"
                    alt={t("sections.betadin_banner_alt")}
                  />
                </picture>
              </div>
              <p>
                {t("sections.betadin_p1")}
                <sup>
                  <a
                    href="#spisok-literatury"
                    data-type="internal"
                    data-id="#spisok-literatury"
                  >
                    15
                  </a>
                </sup>
                .
              </p>
              <p>
                {t("sections.betadin_p2")}
                <sup>
                  <a
                    href="#spisok-literatury"
                    data-type="internal"
                    data-id="#spisok-literatury"
                  >
                    12
                  </a>
                </sup>
                .
              </p>
              <p>
                {t("sections.betadin_p3")}
                <sup>
                  <a
                    href="#spisok-literatury"
                    data-type="internal"
                    data-id="#spisok-literatury"
                  >
                    15
                  </a>
                </sup>
                .
              </p>
              <p>
                {t("sections.betadin_p4")}
                <sup>
                  <a
                    href="#spisok-literatury"
                    data-type="internal"
                    data-id="#spisok-literatury"
                  >
                    14
                  </a>
                </sup>
                .
              </p>
              <p>
                <img
                  loading="lazy"
                  decoding="async"
                  className="alignnone wp-image-3279 size-full"
                  src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/2022/12/prolegni_1.png.webp"
                  alt={t("sections.betadin_img_alt")}
                  width={2600}
                  height={605}
                  srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/2022/12/prolegni_1.png.webp 2600w, https://betadin.ru/wp-content/webp-express/webp-images/uploads/2022/12/prolegni_1-300x70.png.webp 300w, https://betadin.ru/wp-content/webp-express/webp-images/uploads/2022/12/prolegni_1-1024x238.png.webp 1024w, https://betadin.ru/wp-content/webp-express/webp-images/uploads/2022/12/prolegni_1-768x179.png.webp 768w, https://betadin.ru/wp-content/webp-express/webp-images/uploads/2022/12/prolegni_1-1536x357.png.webp 1536w, https://betadin.ru/wp-content/webp-express/webp-images/uploads/2022/12/prolegni_1-2048x477.png.webp 2048w"
                  sizes="(max-width: 2600px) 100vw, 2600px"
                />
              </p>
              <p>
                {t("sections.betadin_p5")}
                <sup>
                  <a
                    href="#spisok-literatury"
                    data-type="internal"
                    data-id="#spisok-literatury"
                  >
                    11
                  </a>
                </sup>
                .
              </p>
              <p className="buttons">
                <a
                  className="btn btn-green btn-green-instruction"
                  target="_blank"
                  href="/betadin-rastvor-instruktsiya/"
                  rel="noopener noreferrer"
                >
                  {t("sections.instruction_button")}
                </a>
              </p>
            </div>
            <h3 className="h3" id="hlorgeksidin">
              {t("sections.chlorhexidine_title")}
            </h3>
            <p>
              {t("sections.chlorhexidine_p1")}
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  4
                </a>
              </sup>
              .
            </p>
            <p>
              {t("sections.chlorhexidine_p2")}
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  13
                </a>
              </sup>
              .
            </p>
            <h3 className="h3" id="perekis-vodoroda">
              {t("sections.hydrogen_peroxide_title")}
            </h3>
            <p>
              {t("sections.hydrogen_peroxide_p1")}
              <sup>
                <a
                  data-type="internal"
                  data-id="#spisok-literatury"
                  href="#spisok-literatury"
                >
                  5
                </a>
              </sup>
              .
            </p>
            <p>
              {t("sections.hydrogen_peroxide_p2")}
              <sup>
                <a
                  data-type="internal"
                  data-id="#spisok-literatury"
                  href="#spisok-literatury"
                >
                  5
                </a>
              </sup>
              .
            </p>
            <h3 className="h3" id="kaliya-permanganat-margancovka">
              {t("sections.permanganate_title")}
            </h3>
            <p>
              {t("sections.permanganate_p1")}
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  6
                </a>
              </sup>
              .
            </p>
            <p>{t("sections.permanganate_p2")}.</p>
            <h3
              className="h3"
              id="rastvor-benzildimetil-miristoilamino-propilammoniya"
            >
              {t("sections.benzyl_title")}
            </h3>
            <p>
              {t("sections.benzyl_p1")}
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  7
                </a>
              </sup>
              .
            </p>
            <h3 className="h3" id="rastvor-oktenidina-digidrohlorid">
              {t("sections.octenidine_title")}
            </h3>
            <p>
              {t("sections.octenidine_p1")}
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  8
                </a>
              </sup>
              .
            </p>
            <p>{t("sections.octenidine_p2")}.</p>
            <p>{t("sections.octenidine_p3")}.</p>
            <h3 className="h3" id="rastvor-eozina">
              {t("sections.eosin_title")}
            </h3>
            <p>
              {t("sections.eosin_p1")}
              <sup>
                <a href="#spisok-literatury" title="#spisok-literatury">
                  10
                </a>
              </sup>
              .
            </p>
            <p>{t("sections.eosin_note")}.</p>
            <h2 className="h2" id="profilaktika">
              {t("sections.prevention_title")}
            </h2>
            <p>{t("sections.prevention_p1")}.</p>
            <p>{t("sections.prevention_p2")}.</p>
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
                  srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-558x542.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/assetsv3/3f5ca5eaa9dd6f783190f88eedc9c12872396029916225a1c533027f8e4345e2-558x542/quastion-1115x1084.jpg.webp 2x"
                  alt={t("sections.banner_decorative_alt")}
                />
              </picture>
            </div>
            <h2 className="h2" id="chasto-zadavaemye-voprosy">
              {t("sections.faq_title")}
            </h2>
            <h3
              className="h3"
              id="kak-chasto-neobhodimo-provodit-obrabotku-troficheskoy-yazvy"
            >
              {t("sections.faq_q1_title")}
            </h3>
            <p>{t("sections.faq_q1_text")}</p>
            <h3 className="h3" id="zarazna-li-troficheskaya-yazva">
              {t("sections.faq_q2_title")}
            </h3>
            <p>{t("sections.faq_q2_text")}</p>
            <h3 className="h3" id="kto-zanimaetsya-lecheniem-troficheskih-yazv">
              {t("sections.faq_q3_title")}
            </h3>
            <p>{t("sections.faq_q3_text")}</p>
            <h3
              className="h3"
              id="kakie-obshchie-rekomendacii-dlya-lyudey-s-troficheskimi-yazvami"
            >
              {t("sections.faq_q4_title")}
            </h3>
            <div className="list-base">
              <ul>
                {t
                  .raw("sections.faq_q4_list")
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
              </ul>
            </div>
            <div className="autor">
              <div className="autor-left">
                <p className="autor-title">{t("sections.author_name")}</p>
                <div className="autor-subtitle" />
                <p className="autor-footer">{t("sections.author_role")}</p>
              </div>
              <picture>
                <source
                  srcSet="/moshkova-novyj-406x406 (1).webp"
                  type="image/webp"
                />
                <Image
                  loading="lazy"
                  decoding="async"
                  height={203}
                  width={203}
                  src="/moshkova-novyj-406x406 (1).webp"
                  alt={t("sections.author_name")}
                />
              </picture>
            </div>
            <div className="h2 h2-read-more" id="chitat-po-teme">
              {t("sections.read_more_title")}
            </div>
            <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ marginRight: "29px" }}
                >
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <img
                        loading="lazy"
                        decoding="async"
                        height={166}
                        width={246}
                        src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-246x166.png.webp"
                        srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-246x166.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-491x332.png.webp 2x"
                        alt="Мазь для лечения трофических язв - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t("sections.slider_article_1_title")}</strong>
                    </p>
                    <p>{t("sections.slider_article_1_desc")}</p>
                    <p className="slide-more">
                      <a href={t.raw("sections.slider_articles")[0].link}>
                        {" "}
                        {t("sections.slider_more")}{" "}
                      </a>
                      <a href={t.raw("sections.slider_articles")[0].link}>
                        {" "}
                        {t("sections.slider_more")}{" "}
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ marginRight: "29px" }}
                >
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="https://betadin.ru/wp-content/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-246x166.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-491x332.webp 2x"
                        type="image/webp"
                      />
                      <img
                        loading="lazy"
                        decoding="async"
                        height={166}
                        width={246}
                        src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-246x166.png.webp"
                        srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-246x166.png.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1906/f713fcfa6402503dcd00f94341c40f959fc2d686b371adb5e2ada995d751dfd0-0x166/maz-dlya-lecheniya-troficheskih-yazv-prevyu-491x332.png.webp 2x"
                        alt="Мазь для лечения трофических язв - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t("sections.slider_article_2_title")}</strong>
                    </p>
                    <p>{t("sections.slider_article_2_desc")}</p>
                    <p className="slide-more">
                      <a href={t.raw("sections.slider_articles")[1].link}>
                        {" "}
                        {t("sections.slider_more")}{" "}
                      </a>
                      <a href={t.raw("sections.slider_articles")[1].link}>
                        {" "}
                        {t("sections.slider_more")}{" "}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ marginRight: "29px" }}>
                  <div className="slide-image">
                    <picture>
                      <source
                        srcSet="/povidon-jod-prevyu-310x210.webp"
                        type="image/webp"
                      />
                      <img
                        loading="lazy"
                        decoding="async"
                        height={210}
                        width={310}
                        src="/povidon-jod-prevyu-310x210.webp"                        alt="Повидон-йод - превью"
                      />
                    </picture>
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>{t("sections.slider_article_3_title")}</strong>
                    </p>
                    <p>{t("sections.slider_article_3_desc")}</p>
                    <p className="slide-more">
                      <a href={t.raw("sections.slider_articles")[2].link}>
                        {" "}
                        {t("sections.slider_more")}{" "}
                      </a>
                      <a href={t.raw("sections.slider_articles")[2].link}>
                        {" "}
                        {t("sections.slider_more")}{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="h2" id="spisok-literatury">
              {t("sections.literatura_title")}
            </h2>
            <ol className="literature">
              <li id="literature-0">
                Шахрай С. В., Семенчук И. Д.Трофические язвы нижних конечностей
                // Минск БГМУ 2009.
              </li>
              <li id="literature-1">
                Савельев В.С. Кириенко А.И. Национальное руководство по хирургии
                // ГЭОТАР-Медиа 2008. Москва.
              </li>
              <li id="literature-2">
                Cтойко Ю. М., Кириенко А. И., Затевахин И. И. и др. Российские
                клинические рекомендации по диагностике и лечению хронических
                заболеваний вен// Флебология 2018;12(3): 146-240.
              </li>
              <li id="literature-3">
                Инструкция по медицинскому применению Хлоргексидин, РЛС.
              </li>
              <li id="literature-4">
                Инструкция по медицинскому применению перекись водорода, РЛС.
              </li>
              <li id="literature-5">
                Инструкция по медицинскому применению калия перманганат, РЛС.
                Инструкция по медицинскому применению калия перманганат,
                РЛС.&nbsp;
              </li>
              <li id="literature-6">
                Инструкция по медицинскому применению Мирамистин, раствор, РЛС.
              </li>
              <li id="literature-7">
                Инструкция по медицинскому применению Октинисепт, раствор, РЛС.
              </li>
              <li id="literature-8">
                Инструкция по медицинскому применению Лавасепт, раствор, РЛС.
              </li>
              <li id="literature-9">
                Инструкция по медицинскому применению Эозина, раствор, РЛС.
              </li>
              <li id="literature-10">
                Михальский В. В., Богданов А. Е., Жилина С. В., Привиденцев А.
                И., Аникин А. И., Ульянина А. А.. Применение препарата Бетадин в
                лечении инфицированных ран//РМЖ №29 от 23.12.2010.
              </li>
              <li id="literature-11">
                Инструкция по медицинскому применению Бетадин Раствор. (РН:
                П№015282/03).
              </li>
              <li id="literature-12">
                Куфтырев Д. М., Косякова К. Г. Устойчивость proteus mirabilis к
                хлоргексидину биглюконату// Здоровье – основа человеческого
                потенциала: проблемы и пути решения №2 (15)/2020.
              </li>
              <li id="literature-13">
                Инструкция по медицинному применению Бетадин, мазь. (РН:
                П№015282/02).
              </li>
              <li id="literature-14">
                Борисов И. В. Повидон-йод – новые возможности знакомого
                препарата // Раны и раневые инфекции 8 (3) 2021, стр. 12-18.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
}
