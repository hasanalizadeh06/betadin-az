import { useTranslations } from 'next-intl';
import React from 'react';

export default function RastvorPage(): React.ReactElement {
	const t = useTranslations("RastvorPage");
	return (
		<article>
			<div className="container-page-header">
				<div className="container">
					<div className="page-header">
						<ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
							<li property="itemListElement" typeof="ListItem">
								<a property="item" typeof="WebPage" href="/">
									<span property="name">{t.raw('breadcrumb.home')}</span>
								</a>
								<meta property="position" content="1" />
							</li>
							<li property="itemListElement" typeof="ListItem">
								<span property="name">{t.raw('breadcrumb.current')}</span>
								<meta property="position" content="3" />
							</li>
						</ol>
					</div>

					<div className="page-header">
						<div className="page-header-left page-header-left_product">
							<div className="page-header-title page-header-title__product">
								<h1 className="page-header-product-title">{t.raw('header.title')}</h1>
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
										alt="картинка у заголовка"
									/>
								</picture>
							</div>

							<div className="page-header-right page-header-right__product page-header-right__product_mobile">
								<div className="page-header-img page-header-img__product">
									<picture>
										<source
											srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-602x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-1203x1230.webp 2x"
											type="image/webp"
										/>
										<img
											fetchPriority="high"
											decoding="async"
											height={615}
											width={602}
											src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-602x615.jpg.webp"
											srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-602x615.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-1203x1230.jpg.webp 2x"
											alt=""
										/>
									</picture>
								</div>
								<a href="/betadin-rastvor-instruktsiya/" target="_blank" rel="noopener noreferrer" className="btn btn-green">{t.raw('header.instruction')}</a>
							</div>

							<div className="page-header-subtitle page-header-subtitle__product">
								<p>{t.raw('header.subtitle')}</p>
							</div>

							<ul>
								<li>
									<div className="text">{t.raw('header.list.0')}</div>
								</li>
								<li>
									<div className="text">{t.raw('header.list.1')}</div>
								</li>
								<li>
									<div className="text">{t.raw('header.list.2')}</div>
								</li>
								<li>
									<div className="text">{t.raw('header.list.3')}</div>
								</li>
							</ul>

							<div className="page-header-properties container-673">
								<div className="page-header-property">
									<picture>
										<img decoding="async" height={89} width={98} src="https://betadin.ru/wp-content/uploads/2022/12/property-rastvor-1.svg" alt="" />
									</picture>
									<div className="text"><span dangerouslySetInnerHTML={{ __html: t.raw('header.property.0') }} /></div>
								</div>

								<div className="page-header-property">
									<picture>
										<img loading="lazy" decoding="async" height={89} width={98} src="https://betadin.ru/wp-content/uploads/2022/12/property-rastvor-2.svg" alt="" />
									</picture>
									<div className="text"><span dangerouslySetInnerHTML={{ __html: t.raw('header.property.1') }} /></div>
								</div>

								<div className="page-header-property">
									<picture>
										<img loading="lazy" decoding="async" height={89} width={98} src="https://betadin.ru/wp-content/uploads/2022/12/property-rastvor-3.svg" alt="" />
									</picture>
									<div className="text"><span dangerouslySetInnerHTML={{ __html: t.raw('header.property.2') }} /></div>
								</div>
							</div>
						</div>

						<div className="page-header-right page-header-right__product">
							<div className="page-header-img page-header-img__product">
								<picture>
									<source
										srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-602x615.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-1203x1230.webp 2x"
										type="image/webp"
									/>
									<img
										fetchPriority="high"
										decoding="async"
										height={615}
										width={602}
										src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-602x615.jpg.webp"
										srcSet="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-602x615.jpg.webp 1x, https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3392/65023c226f370d56b81d4e3f0db929dd18e2194ac73194e6feb10ab0e3c8c8fd-730x615/rastvor-2x-1203x1230.jpg.webp 2x"
										alt=""
									/>
								</picture>
							</div>
							<a href="/betadin-rastvor-instruktsiya/" target="_blank" rel="noopener noreferrer" className="btn btn-green">{t.raw('header.instruction')}</a>
						</div>
					</div>
				</div>
			</div>

			<div className="container-page-product">
				<div className="container page-content">
					<h2 className="h2">{t.raw('usage.title')}</h2>

					<div className="product-cards">
						<div className="product-card">
							<div className="product-card-front">
								<picture>
									<img loading="lazy" decoding="async" height={112} width={115} src="https://betadin.ru/wp-content/uploads/2022/12/card-1.svg" alt="" />
								</picture>
								<div className="text">{t.raw('usage.card.0')}</div>
								<div className="product-card-link-text">{t.raw('usage.more')}</div>
							</div>
							<div className="product-card-back">
								<div className="product-card-title">{t.raw('usage.readMore')}</div>
								<div className="text">{t.raw('usage.section.infection')}</div>
							</div>
							<a href="/encyclopedia/#infekcii" target="_blank" rel="noopener noreferrer" className="product-card-link">{t.raw('usage.more')}</a>
						</div>

						<div className="product-card">
							<div className="product-card-front">
								<picture>
									<img loading="lazy" decoding="async" height={112} width={115} src="https://betadin.ru/wp-content/uploads/2022/12/card-2.svg" alt="" />
								</picture>
								<div className="text">{t.raw('usage.card.1')}</div>
								<div className="product-card-link-text">Подробнее</div>
							</div>
							<div className="product-card-back">
								<div className="product-card-title">Читайте подробнее:</div>
								<div className="text">{t.raw('usage.section.ulcer')}</div>
							</div>
							<a href="/encyclopedia/#yazvy" target="_blank" rel="noopener noreferrer" className="product-card-link">{t.raw('usage.more')}</a>
						</div>

						<div className="product-card">
							<div className="product-card-front">
								<picture>
									<img loading="lazy" decoding="async" height={112} width={115} src="https://betadin.ru/wp-content/uploads/2022/12/card-3.svg" alt="" />
								</picture>
								<div className="text"><span dangerouslySetInnerHTML={{ __html: t.raw('usage.card.2') }} /></div>
								<div className="product-card-link-text">Подробнее</div>
							</div>
							<div className="product-card-back">
								<div className="product-card-title">Читайте подробнее:</div>
								<div className="text">{t.raw('usage.section.iodine')}</div>
							</div>
							<a href="/encyclopedia/#yod" target="_blank" rel="noopener noreferrer" className="product-card-link">{t.raw('usage.more')}</a>
						</div>

						<div className="product-card">
							<div className="product-card-front">
								<picture>
									<img loading="lazy" decoding="async" height={112} width={115} src="https://betadin.ru/wp-content/uploads/2022/12/card-4.svg" alt="" />
								</picture>
								<div className="text">{t.raw('usage.card.3')}</div>
								<div className="product-card-link-text">Подробнее</div>
							</div>
							<div className="product-card-back">
								<div className="product-card-title">Читайте подробнее:</div>
								<div className="text">{t.raw('usage.section.wound')}</div>
							</div>
							<a href="/encyclopedia/#rany" target="_blank" rel="noopener noreferrer" className="product-card-link">{t.raw('usage.more')}</a>
						</div>
					</div>

					<h2 className="h2">{t.raw('method.title')}</h2>

					<div className="product-primenenie">
						<div className="product-premenenie-row product-premenenie-row__two-column">
							<div className="product-premenenie-green">
								<div className="title">{t.raw('method.skin')}</div>
								<div className="description">{t.raw('method.skinDesc')}</div>
							</div>

							<div className="product-premenenie-green">
								<div className="title">{t.raw('method.mucosa')}</div>
								<div className="description">{t.raw('method.mucosaDesc')}</div>
							</div>
						</div>

						<p className="p">{t.raw('method.film')}</p>

						<p className="p"><strong>{t.raw('method.cautionTitle')}</strong> {t.raw('method.caution')}</p>

						<picture>
							<source
								media="(max-width: 767px)"
								srcSet="https://betadin.ru/wp-content/uploads/imagesv3/3415/a501e58da02188193834a90f65bfea59850990f1de01386a3a3b9bcbb92b3534-348x315/rastvor-375px-2x-318x315.webp 1x, https://betadin.ru/wp-content/uploads/imagesv3/3415/a501e58da02188193834a90f65bfea59850990f1de01386a3a3b9bcbb92b3534-348x315/rastvor-375px-2x-636x630.webp 2x"
								type="image/webp"
							/>
							<img
								decoding="async"
								src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3765/1bf1193b6d9410708aa945477e9b9bbc3eef3510b954d0163ce5f2164fb7e4c2-495x524/frame-12901212-495x524.jpg.webp"
								alt=""
							/>
						</picture>
					</div>

					<div className="product-sostav">
						<h2 className="h2">{t.raw('composition.title')}</h2>
						<h3 className="h3 green-strong">{t.raw('composition.subtitle')}</h3>
						<p>{t.raw('composition.text')}</p>
					</div>

					<h2 className="h2">{t.raw('products.title')}</h2>

					<div className="product-another-products">
						<div className="slider-another-card">
							<div className="swiper-wrapper overflow-scroll">
								<div className="swiper-slide product-another-card product-another-card-current swiper-slide-active">
									<picture>
										<img loading="lazy" decoding="async" height={256} width={277} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3422/fe2e0be6e3932eb43ec5a0fe3ece1a6f6a144cf6e001a9aece242e4dd75dfc01-277x256/product-rastvor-2x-277x256.jpg.webp" alt="" />
									</picture>
									<div className="title">{t.raw('products.solution')}</div>
									<p className="p">{t.raw('products.current')}</p>
								</div>

								<div className="swiper-slide product-another-card">
									<picture>
										<img loading="lazy" decoding="async" height={256} width={277} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3721/25b996addabac8c6dfe2ab7543bf9ddb10b9d4d355a5a7b67684a56fbfe6790c-277x256/svechi-277x256.jpg.webp" alt="свечи" />
									</picture>
									<div className="title">{t.raw('products.suppositories')}</div>
									<a href="/svechi/" target="_blank" rel="noopener noreferrer" className="btn btn-green">{t.raw('usage.more')}</a>
								</div>

								<div className="swiper-slide product-another-card">
									<picture>
										<img loading="lazy" decoding="async" height={256} width={277} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/3720/5c2b2b0ba2aebe241f04fffe69e5af4ded6dbfa30b77fb67e7c5c8e5e184fc55-277x256/maz-kartinki-277x256.jpg.webp" alt="мазь-картинки" />
									</picture>
									<div className="title">{t.raw('products.ointment')}</div>
									<a href="/betadin-maz/" target="_blank" rel="noopener noreferrer" className="btn btn-green">{t.raw('usage.more')}</a>
								</div>
							</div>
						</div>
					</div>

					<div className="h2 h2-read-more" id="chitat-po-teme">{t.raw('readMore')}</div>

					<div className="slider-normal">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="slide-image">
									<picture>
										<img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1907/71967bf3d728e39b9e3b677b75ccfac171301a5dce9cd23fdab1f3852599a5d1-0x166/obrabotka-ran-prevyu-246x166.png.webp" alt="Обработка ран - превью" />
									</picture>
								</div>
								<div className="slide-body">
									<p className="slide-title"><strong>{t.raw('articles.0.title')}</strong></p>
									<p>{t.raw('articles.0.text')}</p>
									<p className="slide-more">
										<a href="/encyclopedia/obrabotka-ran/" target="_blank" rel="noopener noreferrer">{t.raw('usage.more')}</a>
									</p>
								</div>
							</div>

							<div className="swiper-slide">
								<div className="slide-image">
									<picture>
										<img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1911/bc49b847578df141edb3f4ac9cf6fac2f0f89ea712aa1c07e36007fd5c4e65a5-0x166/porezy-prevyu-246x166.png.webp" alt="Порезы-превью" />
									</picture>
								</div>
								<div className="slide-body">
									<p className="slide-title"><strong>{t.raw('articles.1.title')}</strong></p>
									<p>{t.raw('articles.1.text')}</p>
									<p className="slide-more">
										<a href="/encyclopedia/porezy/" target="_blank" rel="noopener noreferrer">{t.raw('usage.more')}</a>
									</p>
								</div>
							</div>

							<div className="swiper-slide">
								<div className="slide-image">
									<picture>
										<img loading="lazy" decoding="async" height={166} width={246} src="https://betadin.ru/wp-content/webp-express/webp-images/uploads/imagesv3/1931/7ba5748906b45d52570146d043c89dd0217ee6aee781f9bc31627427463fe0ef-0x166/jod-prevyu-246x166.png.webp" alt="Йод-превью" />
									</picture>
								</div>
								<div className="slide-body">
									<p className="slide-title"><strong>{t.raw('articles.2.title')}</strong></p>
									<p>{t.raw('articles.2.text')}</p>
									<p className="slide-more">
										<a href="/encyclopedia/jod/" target="_blank" rel="noopener noreferrer">{t.raw('usage.more')}</a>
									</p>
								</div>
							</div>
						</div>
					</div>

					<a className="btn btn-green btn-green-all" href="/encyclopedia/" target="_blank" rel="noopener noreferrer">{t.raw('articlesAll')}</a>

					<h2 className="h2">{t.raw('literature.title')}</h2>
					<ol className="literature">
						<li id="literature-0">{t.raw('literature.0')}</li>
						<li id="literature-1">{t.raw('literature.1')}</li>
						<li id="literature-2">{t.raw('literature.2')}</li>
					</ol>
				</div>
			</div>
		</article>
	);
}

