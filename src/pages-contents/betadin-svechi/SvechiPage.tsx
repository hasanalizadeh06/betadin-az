import React from "react";
import { useTranslations } from "next-intl";

export default function SvechiPage() {
  const t = useTranslations("SvechiPage");
  return (
    <main>
      <article>
        <div className="container-page-header">
          <div className="container">
            <div className="page-header">
              <ol
                className="breadcrumb"
                vocab="https://schema.org/"
                typeof="BreadcrumbList"
              >
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/">
                    <span property="name">{t.raw("breadcrumb.home")}</span>
                  </a>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">{t.raw("breadcrumb.current")}</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left page-header-left_product">
                <div className="page-header-title page-header-title__product page-header-title__product_svechi">
                  <h1 className="page-header-product-title">
                    {t.raw("header.title")}
                  </h1>
                </div>
                <div className="page-header-right page-header-right__product page-header-right__product_mobile">
                  <div className="page-header-img page-header-img__product">
                    {/* Replace src with file from `public/` if you add it. */}
                    <picture>
                      <img
                        decoding="async"
                        height={615}
                        width={602}
                        src="/izobrazhenie-1-1203x1230.webp"
                        alt=""
                      />
                    </picture>
                  </div>
                  <a
                    href="/betadin-svechi-instruktsiya/"
                    target="_blank"
                    className="btn btn-green"
                  >
                    {t.raw("header.instruction")}
                  </a>
                </div>
                <div
                  className="page-header-subtitle page-header-subtitle__product_svechi"
                  dangerouslySetInnerHTML={{ __html: t.raw("header.subtitle") }}
                ></div>
                <ul>
                  <li>
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: t.raw("header.list.0"),
                      }}
                    ></div>
                  </li>
                  <li>
                    <div className="text">{t.raw("header.list.1")}</div>
                  </li>
                  <li>
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: t.raw("header.list.2"),
                      }}
                    ></div>
                  </li>
                </ul>

                <div className="page-header-properties container-673">
                  <div className="page-header-property">
                    <picture>
                      <img
                        decoding="async"
                        height={89}
                        width={98}
                        src="/property-svechi-1-196x178.webp"
                        alt=""
                      />
                    </picture>
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: t.raw("header.property.0"),
                      }}
                    ></div>
                  </div>
                  <div className="page-header-property">
                    <picture>
                      <img
                        decoding="async"
                        height={89}
                        width={98}
                        src="/property-svechi-2-196x178.webp"
                        alt=""
                      />
                    </picture>
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: t.raw("header.property.1"),
                      }}
                    ></div>
                  </div>
                  <div className="page-header-property">
                    <picture>
                      <img
                        decoding="async"
                        height={89}
                        width={97}
                        src="/property-svechi-3-194x178.webp"
                        alt=""
                      />
                    </picture>
                    <div className="text">{t.raw("header.property.2")}</div>
                  </div>
                </div>
              </div>

              <div className="page-header-right page-header-right__product">
                <div className="page-header-img page-header-img__product">
                  <picture>
                    <img
                      decoding="async"
                      height={615}
                      width={602}
                      src="/izobrazhenie-1-1203x1230.webp"
                      alt=""
                    />
                  </picture>
                </div>
                <a
                  href="/betadin-svechi-instruktsiya/"
                  target="_blank"
                  className="btn btn-green"
                >
                  {t.raw("header.instruction")}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-page-product">
          <div className="container page-content">
            <h2 className="h2">{t.raw("usage.title")}</h2>
            <div className="product-cards">
              <div className="product-card">
                <div className="product-card-front">
                  <picture>
                    <img
                      loading="lazy"
                      decoding="async"
                      height={105}
                      width={115}
                      src="/card-svechi-1-2x-230x210.webp"
                      alt=""
                    />
                  </picture>
                  <div className="text">{t.raw("usage.card.0")}</div>
                  <div className="product-card-link-text">
                    {t.raw("usage.more")}
                  </div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">
                    {t.raw("usage.readMore")}
                  </div>
                  <div className="text">
                    {t.raw("usage.section.suppositories")}
                  </div>
                </div>
                <a
                  href="/encyclopedia/vaginit/"
                  target="_blank"
                  className="product-card-link"
                >
                  {t.raw("usage.more")}
                </a>
              </div>

              <div className="product-card">
                <div className="product-card-front">
                  <picture>
                    <img
                      loading="lazy"
                      decoding="async"
                      height={105}
                      width={115}
                      src="/card-svechi-2-2x-230x210.webp"
                      alt=""
                    />
                  </picture>
                  <div className="text">{t.raw("usage.card.1")}</div>
                  <div className="product-card-link-text">
                    {t.raw("usage.more")}
                  </div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">
                    {t.raw("usage.readMore")}
                  </div>
                  <div className="text">
                    {t.raw("usage.section.suppositories")}
                  </div>
                </div>
                <a
                  href="/encyclopedia/smeshannye-infekcii-v-ginekologii/"
                  target="_blank"
                  className="product-card-link"
                >
                  {t.raw("usage.more")}
                </a>
              </div>

              <div className="product-card">
                <div className="product-card-front">
                  <picture>
                    <img
                      loading="lazy"
                      decoding="async"
                      height={105}
                      width={115}
                      src="/card-svechi-3-2x-230x210.webp"
                      alt=""
                    />
                  </picture>
                  <div className="text">{t.raw("usage.card.2")}</div>
                  <div className="product-card-link-text">
                    {t.raw("usage.more")}
                  </div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">
                    {t.raw("usage.readMore")}
                  </div>
                  <div className="text">
                    {t.raw("usage.section.suppositories")}
                  </div>
                </div>
                <a
                  href="/encyclopedia/svechi-ot-molochnicy/"
                  target="_blank"
                  className="product-card-link"
                >
                  {t.raw("usage.more")}
                </a>
              </div>

              <div className="product-card">
                <div className="product-card-front">
                  <picture>
                    <img
                      loading="lazy"
                      decoding="async"
                      height={105}
                      width={115}
                      src="/card-svechi-4-2x-230x210.webp"
                      alt=""
                    />
                  </picture>
                  <div className="text">{t.raw("usage.card.3")}</div>
                  <div className="product-card-link-text">
                    {t.raw("usage.more")}
                  </div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">
                    {t.raw("usage.readMore")}
                  </div>
                  <div className="text">
                    {t.raw("usage.section.suppositories")}
                  </div>
                </div>
                <a
                  href="/encyclopedia/zhzhenie-vo-vlagalishche/"
                  target="_blank"
                  className="product-card-link"
                >
                  {t.raw("usage.more")}
                </a>
              </div>
            </div>

            <h2 className="h2">{t.raw("method.title")}</h2>
            <div className="product-primenenie product-primenenie-svechi">
              <div className="product-premenenie-row product-premenenie-row__two-column">
                <div className="product-premenenie-green product-premenenie-override-blue">
                  <div
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: t.raw("method.acuteTitle"),
                    }}
                  ></div>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: t.raw("method.acuteDesc"),
                    }}
                  ></div>
                </div>
                <div className="product-premenenie-green product-premenenie-override-blue">
                  <div
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: t.raw("method.chronicTitle"),
                    }}
                  ></div>
                  <div className="description">
                    {t.raw("method.chronicDesc")}
                  </div>
                </div>
              </div>
              <p
                className="p p-border-blue"
                dangerouslySetInnerHTML={{ __html: t.raw("method.note") }}
              ></p>

              <picture>
                <img
                  decoding="async"
                  src="/svechi-use-1024px-2x-840x900.webp"
                  alt=""
                />
              </picture>

              <div className="product-svechi-instructiya">
                <h3 className="h3 h3_green">
                  {t.raw("method.instructionTitle")}
                </h3>
                <div className="big">
                  <div className="line line_blue">
                    {t.raw("method.instruction.0")}
                  </div>
                  <div className="line line_blue">
                    {t.raw("method.instruction.1")}
                  </div>
                  <div className="line line_blue">
                    {t.raw("method.instruction.2")}
                  </div>
                  <div className="line line_blue">
                    {t.raw("method.instruction.3")}
                  </div>
                </div>
                <div className="p p-border-blue">
                  <p>{t.raw("method.instructionNote")}</p>
                </div>
              </div>

              <div className="product-sostav product-sostav-svechi">
                <h2 className="h2">{t.raw("composition.title")}</h2>
                <h3 className="h3 green-strong">
                  {t.raw("composition.subtitle")}
                </h3>
                <strong>{t.raw("composition.iodine")}</strong>
                <br />
                <strong>{t.raw("composition.excipient")}</strong>
              </div>

              <h2 className="h2">{t.raw("products.title")}</h2>
              <div className="product-another-products" >
                <div className="slider-another-card overflow-scroll swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
                  <div
                    className="swiper-wrapper"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div
                      className="swiper-slide product-another-card swiper-slide-active"
                      style={{ marginRight: 30 }}
                    >
                      <picture>
                        <source
                          srcSet="/product-rastvor-2x-553x512 (1).webp 1x, /product-rastvor-2x-553x512.webp 2x"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          height={256}
                          width={277}
                          src="/product-rastvor-2x-553x512.webp"
                          alt=""
                        />
                      </picture>
                      <div className="title">{t.raw("products.solution")}</div>
                      <a
                        href="/betadin-rastvor/"
                        target="_blank"
                        className="btn btn-green"
                      >
                        {t.raw("usage.more")}
                      </a>
                    </div>

                    <div
                      className="swiper-slide product-another-card product-another-card-current swiper-slide-next"
                      style={{ marginRight: 30 }}
                    >
                      <picture>
                        <source
                          srcSet="/svechi-553x512.webp 1x, /svechi-553x512.webp 2x"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          height={256}
                          width={277}
                          src="/svechi-553x512.webp"
                          alt="свечи"
                        />
                      </picture>
                      <div className="title">
                        {t.raw("products.suppositories")}
                      </div>
                      <p className="p">{t.raw("products.current")}</p>
                    </div>

                    <div
                      className="swiper-slide product-another-card"
                      style={{ marginRight: 30 }}
                    >
                      <picture>
                        <source
                          srcSet="/maz-kartinki-553x512.webp 1x, /maz-kartinki-553x512.webp 2x"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          height={256}
                          width={277}
                          src="/maz-kartinki-553x512.webp"
                          alt="мазь-картинки"
                        />
                      </picture>
                      <div className="title">{t.raw("products.ointment")}</div>
                      <a
                        href="/betadin-maz/"
                        target="_blank"
                        className="btn btn-green"
                      >
                        {t.raw("usage.more")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h2 h2-read-more" id="chitat-po-teme">
                {t.raw("readMore")}
              </div>

              <div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
                <div
                  className="swiper-wrapper"
                >
                  <div className="swiper-slide swiper-slide-active">
                    <div className="slide-image">
                      <picture
                        style={{display:"contents"}}
                      >
                        <source
                          srcSet="/vaginalnye-vydeleniya-pervyu-246x166 (1).webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          height={166}
                          width={246}
                          src="/vaginalnye-vydeleniya-pervyu-246x166 (1).webp"
                          alt="Vaginal ifrazatlar - prevyu"
                        />
                      </picture>
                    </div>
                    <div className="slide-body">
                      <p className="slide-title">
                        <strong>{t.raw("articles.0.title")}</strong>
                      </p>
                      <p>{t.raw("articles.0.text")}</p>
                      <p className="slide-more">
                        <a href="/encyclopedia/vaginalnye-vydeleniya/">
                          {t.raw("usage.more")}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide swiper-slide-next">
                    <div className="slide-image">
                      <picture style={{display:"contents"}}>
                        <source
                          srcSet="/lechenie-vaginita-prevyu-246x166 (1).webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          height={166}
                          width={246}
                          src="/lechenie-vaginita-prevyu-246x166 (1).webp"
                          alt="Vaginitin müalicəsi - prevyu"
                        />
                      </picture>
                    </div>
                    <div className="slide-body">
                      <p className="slide-title">
                        <strong>{t.raw("articles.1.title")}</strong>
                      </p>
                      <p>{t.raw("articles.1.text")}</p>
                      <p className="slide-more">
                        <a href="/encyclopedia/vaginit/">
                          {t.raw("usage.more")}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="slide-image">
                      <picture style={{display:"contents"}}>
                        <source
                          srcSet="/zhzhenie-vo-vlagalishhe-prevyu-491x332.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          height={166}
                          width={246}
                          src="/zhzhenie-vo-vlagalishhe-prevyu-491x332.webp"
                          alt="Vaginal yanma - prevyu"
                        />
                      </picture>
                    </div>
                    <div className="slide-body">
                      <p className="slide-title">
                        <strong>{t.raw("articles.2.title")}</strong>
                      </p>
                      <p>{t.raw("articles.2.text")}</p>
                      <p className="slide-more">
                        <a href="/encyclopedia/zhzhenie-vo-vlagalishche/">
                          {t.raw("usage.more")}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="slide-image">
                      <picture style={{display:"contents"}}>
                        <source
                          srcSet="/zhzhenie-vo-vlagalishhe-prevyu-491x332.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          height={166}
                          width={246}
                          src="/zhzhenie-vo-vlagalishhe-prevyu-491x332.webp"
                          alt="Intim zonada qaşınma - prevyu"
                        />
                      </picture>
                    </div>
                    <div className="slide-body">
                      <p className="slide-title">
                        <strong>{t.raw("articles.3.title")}</strong>
                      </p>
                      <p>{t.raw("articles.3.text")}</p>
                      <p className="slide-more">
                        <a href="/encyclopedia/zud-v-intimnoj-zone/">
                          {t.raw("usage.more")}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="h2">{t.raw("literature.title")}</h2>
              <ol className="literature">
                <li
                  dangerouslySetInnerHTML={{ __html: t.raw("literature.0") }}
                ></li>
                <li
                  dangerouslySetInnerHTML={{ __html: t.raw("literature.1") }}
                ></li>
                <li
                  dangerouslySetInnerHTML={{ __html: t.raw("literature.2") }}
                ></li>
                <li
                  dangerouslySetInnerHTML={{ __html: t.raw("literature.3") }}
                ></li>
                <li
                  dangerouslySetInnerHTML={{ __html: t.raw("literature.4") }}
                ></li>
              </ol>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
