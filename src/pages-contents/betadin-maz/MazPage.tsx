import React from 'react'
import Image from 'next/image'

function MazPage() {
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
                    <span>Главная</span>
                  </a>
                </li>
                <li>
                  <span>БЕТАДИН МАЗЬ ДЛЯ НАРУЖНОГО ПРИМЕНЕНИЯ 10%</span>
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left page-header-left_product">
                <div className="page-header-title page-header-title__product">
                  <h1 className="page-header-product-title">
                    Бетадин® мазь 10% для наружного применения
                  </h1>
                  <Image
                    src="/icon.png"
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
                  <a href="/betadin-maz-instruktsiya/" target="_blank" className="btn btn-green">
                    Инструкция
                  </a>
                </div>

                <div className="page-header-subtitle page-header-subtitle__product">
                  <p>
                    Бетадин<sup>®</sup> — универсальный антисептик широкого спектра действия
                  </p>
                </div>

                <ul>
                  <li>
                    <div className="text">Антисептическое и дезинфицирующее средство</div>
                  </li>
                  <li>
                    <div className="text">Оказывает быстрое бактерицидное действие</div>
                  </li>
                  <li>
                    <div className="text">Активна в отношении грибов, вирусов, простейших</div>
                  </li>
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
                    <div className="text">Способствует заживлению ран, ссадин, ожогов и пролежней</div>
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
                    <div className="text">
                      Лечение
                      <br />
                      инфекционных дерматитов
                    </div>
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
                    <div className="text">Терапия грибковых инфекций кожи</div>
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
                <a href="/betadin-maz-instruktsiya/" target="_blank" className="btn btn-green">
                  Инструкция
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="container-page-product">
          <div className="container page-content">
            <h2 className="h2">Область применения:</h2>

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
                  <div className="text">Обработка ссадин и ран</div>
                  <div className="product-card-link-text">Подробнее</div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">Читайте подробнее:</div>
                  <div className="text">Статьи раздела раны</div>
                </div>
                <a href="/encyclopedia/#rany" target="_blank" className="product-card-link">
                  Подробнее
                </a>
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
                  <div className="text">Лечение бактериальных инфекций кожи</div>
                  <div className="product-card-link-text">Подробнее</div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">Читайте подробнее:</div>
                  <div className="text">Статьи раздела инфекции</div>
                </div>
                <a href="/encyclopedia/#infekcii" target="_blank" className="product-card-link">
                  Подробнее
                </a>
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
                  <div className="text">Обработка трофических язв и пролежней</div>
                  <div className="product-card-link-text">Подробнее</div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">Читайте подробнее:</div>
                  <div className="text">Статьи раздела язвы</div>
                </div>
                <a href="/encyclopedia/#yazvy" target="_blank" className="product-card-link">
                  Подробнее
                </a>
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
                  <div className="text">Обработка ран при ожогах</div>
                  <div className="product-card-link-text">Подробнее</div>
                </div>
                <div className="product-card-back">
                  <div className="product-card-title">Читайте подробнее:</div>
                  <div className="text">Статьи раздела ожоги</div>
                </div>
                <a href="/encyclopedia/#ozhogi" target="_blank" className="product-card-link">
                  Подробнее
                </a>
              </div>
            </div>

            {/* Application Method Section */}
            <h2 className="h2">Способ применения:</h2>

            <div className="product-primenenie product-primenenie-maz">
              <div className="product-premenenie-row product-premenenie-row__two-column">
                <div className="product-premenenie-green product-premenenie-green-full-mobile">
                  <div className="title"></div>
                  <div className="description">
                    На пораженную поверхность мазь наносят тонким слоем 2‑3 раза в сутки.
                  </div>
                </div>
              </div>

              <p className="p">
                В месте применения образуется окрашенная пленка, сохраняющаяся до высвобождения
                всего количества активного йода, что означает прекращение действия препарата.
              </p>

              <p className="p">
                <strong>С осторожностью:</strong> беременность и период кормления грудью,
                хроническая почечная недостаточность.
              </p>

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
              <h2 className="h2">Состав:</h2>
              <h3 className="h3 green-strong">1 г мази содержится:</h3>

              <p>
                100 мг действующего вещества – <strong>повидона йода</strong> (что соответствует
                10,25 мг активного йода), а также вспомогательные вещества: натрия гидрокарбонат,
                макрогол 400, макрогол 4000, макрогол 1000, макрогол 1500, вода очищенная.
              </p>

              <p>
                <strong>Макрогол, входящий в состав мази:</strong>
              </p>

              <ul>
                <li>Обладает раноочищающим действием</li>
                <li>Помогает ускорить сроки заживления</li>
                <li>Улучшает проникновение молекул повидон-йода в места локализации микробов</li>
              </ul>
            </div>

            {/* Other Products Section */}
            <h2 className="h2">Продукты Бетадин</h2>

            <div className="product-another-products">
              <div className="slider-another-card">
                <div className="swiper-wrapper">
                  {/* Product 1 - Раствор */}
                  <div className="swiper-slide product-another-card">
                    <Image
                      src="/product-rastvor-2x-553x512.webp"
                      alt="Раствор для местного и наружного применения"
                      width={277}
                      height={256}
                    />
                    <div className="title">Раствор для местного и наружного применения</div>
                    <a href="/betadin-rastvor/" target="_blank" className="btn btn-green">
                      Подробнее
                    </a>
                  </div>

                  {/* Product 2 - Свечи */}
                  <div className="swiper-slide product-another-card">
                    <Image
                      src="/svechi-553x512.webp"
                      alt="Вагинальные свечи"
                      width={277}
                      height={256}
                    />
                    <div className="title">Вагинальные свечи</div>
                    <a href="/svechi/" target="_blank" className="btn btn-green">
                      Подробнее
                    </a>
                  </div>

                  {/* Product 3 - Мазь (Current) */}
                  <div className="swiper-slide product-another-card product-another-card-current">
                    <Image
                      src="/maz-kartinki-553x512.webp"
                      alt="Мазь для наружного применения"
                      width={277}
                      height={256}
                    />
                    <div className="title">Мазь для наружного применения</div>
                    <p className="p">Вы находитесь на странице данного препарата</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles Section */}
            <div className="h2 h2-read-more" id="chitat-po-teme">
              Полезные статьи про лечение ран, порезов и других заболеваний, при которых помогает
              Бетадин®
            </div>

            <div className="slider-normal">
              <div className="swiper-wrapper">
                {/* Article 1 */}
                <div className="swiper-slide" style={{ marginRight: '29px', transition: '0.3s all ease' }}>
                  <div className="slide-image">
                    <Image
                      src="/obrabotka-ran-prevyu-491x332.webp"
                      alt="Обработка ран - превью"
                      width={246}
                      height={166}
                    />
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Обработка ран</strong>
                    </p>
                    <p>
                      Как правильно обрабатывать раны, чтобы избежать осложнений на поврежденных
                      участках кожи.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/obrabotka-ran/">Подробнее</a>
                    </p>
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
                    <p className="slide-title">
                      <strong>Порезы</strong>
                    </p>
                    <p>
                      Порез — бытовое название небольшой резаной раны. Как и чем обрабатывают такие
                      повреждения?
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/porezy/">Подробнее</a>
                    </p>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="swiper-slide" style={{ marginRight: '29px', transition: '0.3s all ease' }}>
                  <div className="slide-image">
                    <Image
                      src="/jod-prevyu-491x332.webp"
                      alt="Йод-превью"
                      width={246}
                      height={166}
                    />
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Йод</strong>
                    </p>
                    <p>
                      Сферы использования йода. Отличия повидон-йода от спиртового раствора йода.
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/jod/">Подробнее</a>
                    </p>
                  </div>
                </div>

                {/* Article 4 */}
                <div className="swiper-slide" style={{ marginRight: '29px', transition: '0.3s all ease' }}>
                  <div className="slide-image">
                    <Image
                      src="/rany-s-infekcziej-prevyu-491x332.webp"
                      alt="Раны с инфекцией-превью"
                      width={246}
                      height={166}
                    />
                  </div>
                  <div className="slide-body">
                    <p className="slide-title">
                      <strong>Раны с инфекцией</strong>
                    </p>
                    <p>
                      Далеко не все ссадины и порезы заживают быстро и без осложнений. Как лечить
                      инфицированные раны?
                    </p>
                    <p className="slide-more">
                      <a href="/encyclopedia/rany-s-infekciej/">Подробнее</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a className="btn btn-green btn-green-all" href="/encyclopedia/">
              Все статьи
            </a>

            {/* Literature Section */}
            <h2 className="h2">Список литературы</h2>
            <ol className="literature">
              <li id="literature-0">
                Блатун Л.А. Возможности современных мазей в лечении гнойных ран, пролежней,
                трофических язв, 2010
              </li>
              <li id="literature-1">
                Бетадин<sup>®</sup> раствор. Инструкции по медицинскому применению (РН:
                ЛП-№(002589)-(РГ-RU)).
              </li>
              <li id="literature-2">
                Бетадин<sup>®</sup> мазь. Инструкции по медицинскому применению (РН:
                ЛП-№(002552)-(РГ-RU)).
              </li>
              <li id="literature-3">
                Бетадин<sup>®</sup> суппозитории. Инструкции по медицинскому применению (РН:
                ЛП-№(002550)-(РГ-RU)).
              </li>
            </ol>
          </div>
        </div>
      </article>
    </main>
  )
}

export default MazPage