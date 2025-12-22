import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

function MazPage() {
  const t = useTranslations('MazPage');
  return (
    <main>
      <article>
        {/* Header Section */}
        <div className="container-page-header">
          <div className="container">
            <div className="page-header">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li>
                  <a href="/">
                    <span>{t('breadcrumb.home')}</span>
                  </a>
                </li>
                <li>
                  <span>{t('breadcrumb.current')}</span>
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left page-header-left_product">
                <div className="page-header-title page-header-title__product">
                  <h1 className="page-header-product-title">{t('header.title')}</h1>
                  <Image
                    src="/icon-230x224.webp"
                    alt="картинка у заголовка"
                    width={115}
                    height={112}
                  />
                </div>

                <div className="page-header-right page-header-right__product page-header-right__product_mobile">
                  <div className="page-header-img page-header-img__product">
                    <Image
                      src="/betadin-maz-banner-2-1203x1230.webp"
                      alt="Бетадин мазь баннер"
                      width={602}
                      height={615}
                      priority
                    />
                  </div>
                  <a href="/betadin-maz-instruktsiya/" target="_blank" className="btn btn-green">{t('header.instruction')}</a>
                </div>

                <div className="page-header-subtitle page-header-subtitle__product">
                  <p>{t('header.subtitle')}</p>
                </div>

                <ul>
                  <li><div className="text">{t('header.list.0')}</div></li>
                  <li><div className="text">{t('header.list.1')}</div></li>
                  <li><div className="text">{t('header.list.2')}</div></li>
                </ul>

                {/* Properties Section */}
                <div className="page-header-properties container-673">
                  <div className="page-header-property">
                    <picture>
                      <Image
                        src="/sposobstvuet-zazhivleniyu-ran-ssadin-ozhogov-i-prolezhnej-2-196x178.webp"
                        alt="Способствует заживлению ран, ссадин, ожогов и пролежней"
                        width={98}
                        height={89}
                      />
                    </picture>
                    <div className="text">{t('header.property.0')}</div>
                  </div>

                  <div className="page-header-property">
                    <picture>
                      <Image
                        src="/lechenie-infekczionnyh-dermatitov-1-194x178.webp"
                        alt="Лечение инфекционных дерматитов"
                        width={97}
                        height={89}
                      />
                    </picture>
                    <div className="text"><span dangerouslySetInnerHTML={{ __html: t.raw('header.property.1') }} /></div>
                  </div>

                  <div className="page-header-property">
                    <picture>
                      <Image
                        src="/terapiya-gribkovyh-infekczij-kozhi-1-196x178.webp"
                        alt="Терапия грибковых инфекций кожи"
                        width={98}
                        height={89}
                      />
                    </picture>
                    <div className="text">{t('header.property.2')}</div>
                  </div>
                </div>
              </div>

              <div className="page-header-right page-header-right__product">
                <div className="page-header-img page-header-img__product">
                  <Image
                    src="/betadin-maz-banner-2-1203x1230.webp"
                    alt="Бетадин мазь баннер"
                    width={602}
                    height={615}
                    priority
                  />
                </div>
                <a href="/betadin-maz-instruktsiya/" target="_blank" className="btn btn-green">{t('header.instruction')}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="container-page-product">
          <div className="container page-content">
            <h2 className="h2">{t('usage.title')}</h2>

            <div className="product-cards">
              {/* Card 1 */}
              <div className="product-card">
                <div className="product-card-front">
                  <picture>
                    <Image
                      src="/obrabotka-ssadin-i-ran-230x212.webp"
                      alt="Обработка ссадин и ран"
                      width={115}
                      height={106}
                    />
                  </picture>
                  <div className="text">{t('usage.card.0')}</div>
                  <div className="product-card-link-text">{t('usage.more')}</div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">{t('usage.readMore')}</div>
                  <div className="text">{t('usage.section.wound')}</div>
                </div>
                <a href="/encyclopedia/#rany" target="_blank" className="product-card-link">{t('usage.more')}</a>
              </div>

              {/* Card 2 */}
              <div className="product-card">
                <div className="product-card-front">
                  <picture>
                    <Image
                      src="/lechenie-bakterialnyh-infekczij-kozhi-230x211.webp"
                      alt="Лечение бактериальных инфекций кожи"
                      width={115}
                      height={106}
                    />
                  </picture>
                  <div className="text">{t('usage.card.1')}</div>
                  <div className="product-card-link-text">{t('usage.more')}</div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">{t('usage.readMore')}</div>
                  <div className="text">{t('usage.section.infection')}</div>
                </div>
                <a href="/encyclopedia/#infekcii" target="_blank" className="product-card-link">{t('usage.more')}</a>
              </div>

              {/* Card 3 */}
              <div className="product-card">
                <div className="product-card-front">
                  <picture>
                    <Image
                      src="/obrabotka-troficheskih-yazv-i-prolezhnej-230x211.webp"
                      alt="Обработка трофических язв и пролежней"
                      width={115}
                      height={106}
                    />
                  </picture>
                  <div className="text">{t('usage.card.2')}</div>
                  <div className="product-card-link-text">{t('usage.more')}</div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">{t('usage.readMore')}</div>
                  <div className="text">{t('usage.section.ulcer')}</div>
                </div>
                <a href="/encyclopedia/#yazvy" target="_blank" className="product-card-link">{t('usage.more')}</a>
              </div>

              {/* Card 4 */}
              <div className="product-card">
                <div className="product-card-front">
                  <picture>
                    <Image
                      src="/obrabotka-ran-pri-ozhogah-230x210.webp"
                      alt="Обработка ран при ожогах"
                      width={115}
                      height={105}
                    />
                  </picture>
                  <div className="text">{t('usage.card.3')}</div>
                  <div className="product-card-link-text">{t('usage.more')}</div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">{t('usage.readMore')}</div>
                  <div className="text">{t('usage.section.burn')}</div>
                </div>
                <a href="/encyclopedia/#ozhogi" target="_blank" className="product-card-link">{t('usage.more')}</a>
              </div>
            </div>

            {/* Application Method Section */}
            <h2 className="h2">{t('method.title')}</h2>

            <div className="product-primenenie product-primenenie-maz">
              <div className="product-premenenie-row product-premenenie-row__two-column">
                <div className="product-premenenie-green product-premenenie-green-full-mobile">
                  <div className="title"></div>
                  <div className="description">{t('method.desc')}</div>
                </div>
              </div>

              <p className="p">{t('method.film')}</p>

              <p className="p"><strong>{t('method.cautionTitle')}</strong> {t('method.caution')}</p>

              <picture>
                <Image
                  src="/maz-1440-990x1048.webp"
                  alt="Способ применения мази"
                  width={495}
                  height={524}
                />
              </picture>
            </div>

            {/* Composition Section */}
            <div className="product-sostav">
              <h2 className="h2">{t('composition.title')}</h2>
              <h3 className="h3 green-strong">{t('composition.subtitle')}</h3>

              <p>{t('composition.text')}</p>

              <p><strong>{t('composition.macrogolTitle')}</strong></p>

              <ul>
                <li>{t('composition.macrogolList.0')}</li>
                <li>{t('composition.macrogolList.1')}</li>
                <li>{t('composition.macrogolList.2')}</li>
              </ul>
            </div>

            {/* Other Products Section */}
            <h2 className="h2">{t('products.title')}</h2>

            <div className="product-another-products">
              <div className="slider-another-card overflow-scroll ">
                <div className="swiper-wrapper">
                  {/* Product 1 - Раствор */}
                  <div className="swiper-slide product-another-card">
                    <Image
                      src="/product-rastvor-2x-553x512.webp"
                      alt="Раствор для местного и наружного применения"
                      width={277}
                      height={256}
                    />
                    <div className="title">{t('products.solution')}</div>
                    <a href="/betadin-rastvor/" target="_blank" className="btn btn-green">{t('usage.more')}</a>
                  </div>

                  {/* Product 2 - Свечи */}
                  <div className="swiper-slide product-another-card">
                    <Image
                      src="/svechi-553x512.webp"
                      alt="Вагинальные свечи"
                      width={277}
                      height={256}
                    />
                    <div className="title">{t('products.suppositories')}</div>
                    <a href="/svechi/" target="_blank" className="btn btn-green">{t('usage.more')}</a>
                  </div>

                  {/* Product 3 - Мазь (Current) */}
                  <div className="swiper-slide product-another-card product-another-card-current">
                    <Image
                      src="/maz-kartinki-553x512.webp"
                      alt="Мазь для наружного применения"
                      width={277}
                      height={256}
                    />
                    <div className="title">{t('products.ointment')}</div>
                    <p className="p">{t('products.current')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles Section */}
            <div className="h2 h2-read-more" id="chitat-po-teme">{t('readMore')}</div>

            <div className="slider-normal">
              <div className="swiper-wrapper">
                {/* Article 1 */}
                <div className="swiper-slide" style={{ marginRight: '29px', transition: '0.3s all ease' }}>
                  <div className="slide-image">
                    <Image
                      src="/obrabotka-ran-prevyu-246x166.webp"
                      alt="Обработка ран - превью"
                      width={246}
                      height={166}
                    />
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{t('articles.0.title')}</strong></p>
                    <p>{t('articles.0.text')}</p>
                    <p className="slide-more"><a href="/encyclopedia/obrabotka-ran/">{t('usage.more')}</a></p>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="swiper-slide" style={{ marginRight: '29px', transition: '0.3s all ease' }}>
                  <div className="slide-image">
                    <Image
                      src="/porezy-prevyu-491x332.webp"
                      alt="Порезы-превью"
                      width={246}
                      height={166}
                    />
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{t('articles.1.title')}</strong></p>
                    <p>{t('articles.1.text')}</p>
                    <p className="slide-more"><a href="/encyclopedia/porezy/">{t('usage.more')}</a></p>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="swiper-slide" style={{ marginRight: '29px', transition: '0.3s all ease' }}>
                  <div className="slide-image">
                    <Image
                      src="/jod-prevyu-246x166 (1).webp"
                      alt="Йод-превью"
                      width={246}
                      height={166}
                    />
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{t('articles.2.title')}</strong></p>
                    <p>{t('articles.2.text')}</p>
                    <p className="slide-more"><a href="/encyclopedia/jod/">{t('usage.more')}</a></p>
                  </div>
                </div>

                {/* Article 4 */}
                <div className="swiper-slide" style={{ marginRight: '29px', transition: '0.3s all ease' }}>
                  <div className="slide-image">
                    <Image
                      src="/rany-s-infekcziej-prevyu-246x166 (1).webp"
                      alt="Раны с инфекцией-превью"
                      width={246}
                      height={166}
                    />
                  </div>
                  <div className="slide-body">
                    <p className="slide-title"><strong>{t('articles.3.title')}</strong></p>
                    <p>{t('articles.3.text')}</p>
                    <p className="slide-more"><a href="/encyclopedia/rany-s-infekciej/">{t('usage.more')}</a></p>
                  </div>
                </div>
              </div>
            </div>

            <a className="btn btn-green btn-green-all" href="/encyclopedia/">{t('articlesAll')}</a>

            {/* Literature Section */}
            <h2 className="h2">{t('literature.title')}</h2>
            <ol className="literature">
              <li id="literature-0">{t('literature.0')}</li>
              <li id="literature-1">{t('literature.1')}</li>
              <li id="literature-2">{t('literature.2')}</li>
              <li id="literature-3">{t('literature.3')}</li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  )
}

export default MazPage