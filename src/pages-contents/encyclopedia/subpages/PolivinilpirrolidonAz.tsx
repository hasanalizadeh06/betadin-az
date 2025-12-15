'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ScrollGoals {
	[key: number]: () => void;
}

interface Triggered {
	[key: number]: boolean;
}

export default function PolivinilpirrolidonAz() {
	const [scrollTriggered, setScrollTriggered] = useState<Triggered>({
		40: false,
		80: false,
	});
	const [navOpened, setNavOpened] = useState(false);
	const [secondaryNavOpened, setSecondaryNavOpened] = useState(false);
	const [navTitleHidden, setNavTitleHidden] = useState(false);

	useEffect(() => {
		const scrollGoals: ScrollGoals = {
			40: () => {
				if (typeof window !== 'undefined' && (window as any).ym) {
					(window as any).ym(37744585, 'reachGoal', 'Скроллинг40');
				}
			},
			80: () => {
				if (typeof window !== 'undefined' && (window as any).ym) {
					(window as any).ym(37744585, 'reachGoal', 'Скроллинг80');
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

		const handleScroll = () => {
			const shouldHideTitle = window.scrollY >= 1000;
			setNavTitleHidden(shouldHideTitle);

			if (shouldHideTitle) {
				setSecondaryNavOpened(false);
			}
		};

		const handleResize = () => {
			setNavOpened(false);
			setSecondaryNavOpened(false);
		};

		window.addEventListener('scroll', checkScroll);
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', checkScroll);
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
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
										Ana səhifə
									</Link>
									<meta property="position" content="1" />
								</li>
								<li property="itemListElement" typeof="ListItem">
									<Link property="item" typeof="WebPage" href="/encyclopedia/">
										Ensiklopediya
									</Link>
									<meta property="position" content="2" />
								</li>
								<li property="itemListElement" typeof="ListItem">
									<span property="name">Polivinilpirrolidon (povidon)</span>
									<meta property="position" content="3" />
								</li>
							</ol>
						</div>

						<div className="page-header">
							<div className="page-header-left">
								<div className="page-header-title">
									<h1 className="page-header-title-text">
										Polivinilpirrolidon (povidon): tətbiqi və xüsusiyyətləri
									</h1>
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
								<h2 className="page-header-subtitle">Povidonun (polivinilpirrolidonun) kəşfi</h2>
								<div className="page-header-body">
									<p>
										Povidon — tibdə və apteklərdə geniş istifadə olunan neytral polimerdir. Onun
										molekullarına qoşulmuş iyod forması antiseptik xüsusiyyətlərə malikdir, eyni
										zamanda iyodun sorulmasını və toksikliyini azaldır.
									</p>
								</div>

								<ul className="page-header-anchors page-header-anchors-detail">
									<li>
										<a href="#oblasti-primeneniya-polivinilpirrolidona">Tətbiq sahələri</a>
									</li>
									<li>
										<a href="#kompleks-povidon-yoda">Povidon-iyod kompleksi</a>
									</li>
									<li>
										<a href="#preparaty-betadin">Betadin® preparatları</a>
									</li>
								</ul>
							</div>

							<div className="page-header-right">
								<div className="page-header-img">
									<picture>
										<source
											srcSet="/polivinilpirrolidon-povidon-730x615.webp 1x, /polivinilpirrolidon-povidon-1460x1230.webp 2x"
											type="image/webp"
										/>
										<Image
											src="/polivinilpirrolidon-povidon-1460x1230.webp"
											alt="Polivinilpirrolidon"
											width={730}
											height={615}
											fetchPriority="high"
											decoding="async"
										/>
									</picture>
								</div>
							</div>
						</div>

						<nav className={`nav-content ${navOpened ? 'nav-content__open' : ''}`}>
							<ul>
								<li>
									<a href="#oblasti-primeneniya-polivinilpirrolidona">Tətbiq sahələri</a>
								</li>
								<li>
									<a href="#kompleks-povidon-yoda">Povidon-iyod kompleksi</a>
								</li>
								<li>
									<a href="#preparaty-betadin">Betadin® preparatları</a>
								</li>
								<li>
									<a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
								</li>
							</ul>
							<div
								className="nav-content-title nav-content-title-cross"
								onClick={() => setNavOpened((prev) => !prev)}
							>
								Mündəricat
							</div>
						</nav>
				</div>
			</div>

			<nav
					className={`nav-content nav-content-fixed ${secondaryNavOpened ? 'nav-content__open' : ''} ${navTitleHidden ? '' : 'nav-content-title-hidden'}`}
				>
					<ul>
						<li>
							<a href="#oblasti-primeneniya-polivinilpirrolidona">Polivinilpirrolidonun tətbiq sahələri</a>
						</li>
						<li>
							<a href="#kompleks-povidon-yoda">Povidon-iyod kompleksi</a>
						</li>
						<li>
							<a href="#preparaty-betadin">Betadin® preparatları</a>
						</li>
						<li>
							<a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
						</li>
					</ul>
					<div
						className="nav-content-title nav-content-title-cross"
						onClick={() => setSecondaryNavOpened((prev) => !prev)}
					>
						Mündəricat
					</div>
				</nav>

				<div className="home-container">
					<div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətinin əvəzini vermir</div>
				</div>

				<div className="page-content-wrapper">
					<div className="container container-middle page-content">
						<h2 className="h2" id="oblasti-primeneniya-polivinilpirrolidona">
							Polivinilpirrolidonun tətbiq sahələri
						</h2>

						<div className="exlude-turbo">
							<picture className="banner-betadin banner-circle">
								<source
									srcSet="/circle-503x505.webp 1x, /circle-1006x1010.webp 2x"
									type="image/webp"
								/>
								<Image
									src="/circle-1006x1010.webp"
									alt="Dekorativ elementlər"
									width={503}
									height={505}
									decoding="async"
								/>
							</picture>
						</div>

						<div className="list-base">
							<p>
								<strong>
									Tibb və farmakologiyada povidon aşağıdakı məqsədlərlə istifadə olunur:
								</strong>
							</p>
							<ul>
								<li>
									Adsorbent və detoksikasiya vasitəsi; qida zəhərlənmələri və bəzi infeksiyalarda
									toksinlərin bağlanmasında istifadə olunur. Povidon ağızdan qəbul edildikdə qan
									dövranına sorulmadığından orqanizmdən dəyişməz halda çıxarılır və 1 yaşdan yuxarı
									uşaqlarda da tətbiq edilə bilər.
								</li>
								<li>Qanın yerinə istifadə oluna bilən həcim artırıcı maddə kimi.</li>
								<li>Dərman tabletlərin istehsalında stabilləşdirici və bağlayıcı komponent.</li>
								<li>Krem, diş pastası və kosmetika məhsullarında qalınlaşdırıcı kimi.</li>
								<li>Kontakt linzaların və oftalmoloji preparatların istehsalında istifadə olunur.</li>
								<li>
									İyod ilə birləşdikdə (povidon-iyod) effektiv antiseptik daşıyıcısı olur və
									geniş spektrli dezinfeksiya təsiri göstərir.
								</li>
							</ul>
						</div>

						<h2 className="h2" id="kompleks-povidon-yoda">Povidon-iyod kompleksi</h2>

						<p>
							Molekulyar iyodun povidonun üzərinə qoşulması dezinfeksiya təsirini saxlayır,
							iyodun sorulmasını azaldır və preparatın sabitliyini artırır. Povidon-iyod Ümumdünya
							Səhiyyə Təşkilatının əsas dərmanlar siyahısına daxil edilib.
						</p>

						<p>
							XX əsrin ortalarından povidon-iyod bir çox hallarda bakteriyalara, göbələklərə,
							viruslara və protozoal infeksiyalara qarşı geniş spektrli antiseptik kimi istifadə
							olunmağa başlandı.
						</p>

						<p>
							Povidon-iyodun dezinfeksiyaedici təsiri sürətlidir: bakteriyalar, viruslar və göbələklər
							adətən 15–30 saniyə ərzində məhv olur, bəzi protozoalar isə bir dəqiqə daxilində
							məhv edilə bilər.
						</p>

						<div className="iframe">
							<div className="bg_default bg_green"></div>
							<div className="h3 h3_green iframe-title">Povidon-iyodun xassələri haqqında qısa video</div>
							<div className="iframe-container">
								<iframe
									src="https://rutube.ru/play/embed/0a6f51914ace517a00dc6b45a2729b1c/?p=I10FestkzGDK8ldkHNqYrQ"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									title="Povidon-iyod haqqında video"
								></iframe>
							</div>
							<div className="iframe_desc">
								Videodan povidon-iyodun nə olduğu, hansı təsirləri göstərdiyi və yaraların
								necə dezinfeksiya olunduğu barədə məlumat əldə edə bilərsiniz.
							</div>
						</div>

						<h2 className="h2" id="preparaty-betadin">Betadin® preparatları</h2>

						<p>
							Povidon-iyod əsasında Betadin® ticarət markası altında həll, məlhəm və vaginal
							şamlar istehsal olunur.
						</p>

						<picture className="img-normal">
							<source
								srcSet="/preparaty-betadin-1-650x325.webp 1x, /preparaty-betadin-1-1300x650.webp 2x"
								type="image/webp"
							/>
							<Image
								src="/preparaty-betadin-1-1300x650.webp"
								alt="Betadin preparatları"
								width={650}
								height={325}
								loading="lazy"
								decoding="async"
							/>
						</picture>

						<h3 className="h3">Betadin® 10% həlli</h3>

						<div className="product-block">
							<div className="banner-product-img">
								<picture>
									<source
										media="(max-width: 767px)"
										srcSet="/banner-betadin-mobile-315x252.webp 1x, /banner-betadin-mobile-630x503.webp 2x"
										type="image/webp"
									/>
									<source
										srcSet="/banner-betadin-927x916.webp 1x, /banner-betadin-1853x1832.webp 2x"
										type="image/webp"
									/>
									<Image
										src="/banner-betadin-1853x1832.webp"
										alt="Betadin"
										width={927}
										height={916}
										loading="lazy"
										decoding="async"
									/>
								</picture>
							</div>

							<p>
								<strong>Betadin həlli aşağı məqsədlər üçün istifadə olunur:</strong>
							</p>

							<ul>
								<li>Yaraların dezinfeksiyası və müalicəsi, cərrahi əməliyyatlarda istifadə.</li>
								<li>Dəri üzərində göbələk, virus və irinli iltihabların müalicəsi.</li>
								<li>Qıcıqlanma və infeksiya riskinin olduğu yerlərdə antiseptik emal.</li>
								<li>Cərrahi müdaxilə öncəsi dəri antisepsiyası.</li>
								<li>Drenaj və sond yerləşdirilən bölgələrin qulluq məqsədləri.</li>
								<li>Stomatologiyada müxtəlif antiseptik prosedurlar üçün.</li>
							</ul>

							<p>
								<strong>Yaraların dezinfeksiyası:</strong> 10% Betadin həlli seyreltilmədən istifadə
								oluna bilər; adətən yaraya gündə 1–2 dəfə tətbiq olunur və müalicə müddəti
								individual olaraq təyin edilir.
							</p>

							<p>
								<strong>Drenaj sistemlərində</strong> 10% həll 10–100 dəfə seyreltilərək istifadə
								oluna bilər.
							</p>

							<p className="buttons">
								<a
									className="btn btn-green btn-green-instruction"
									target="_blank"
									rel="noopener noreferrer"
									href="/betadin-rastvor-instruktsiya/"
								>
									Təlimat
								</a>
							</p>
						</div>

						<h3 className="h3">Betadin® məlhəmi</h3>

						<div className="product-block">
							<div className="banner-product-img">
								<picture>
									<source
										media="(max-width: 767px)"
										srcSet="/banner-betadin-maz-mobile-315x226.webp 1x, /banner-betadin-maz-mobile-630x451.webp 2x"
										type="image/webp"
									/>
									<source
										srcSet="/banner-betadin-maz-927x916.webp 1x, /banner-betadin-maz-1853x1832.webp 2x"
										type="image/webp"
									/>
									<Image
										src="/banner-betadin-maz-1853x1832.webp"
										alt="Betadin"
										width={927}
										height={916}
										loading="lazy"
										decoding="async"
									/>
								</picture>
							</div>

							<p>
								<strong>Betadin məlhəmi aşağı hallarda istifadə olunur:</strong>
							</p>

							<ul>
								<li>İrinli dəri xəstəliklərinin müalicəsi (furunkul, absess və s.).</li>
								<li>Yara və trofik ülserlərin müalicəsi.</li>
								<li>Yaraların irinlənməsi riski olduqda, cərrahi və gündəlik yaraların qayğısında.</li>
								<li>Kəsiklər və cızıq yaraların sağalmasına kömək üçün.</li>
								<li>Fərqli dərəcəli yanıqlarda tətbiq edilə bilər.</li>
								<li>Candida albicans kimi göbələk törədicilərinə qarşı təsir göstərir.</li>
							</ul>

							<p>
								Məlhəmin tərkibində povidon-iyod mikroorqanizmlərə qarşı təsir göstərir, makrogol
								isə irinli mayeni cəlb etməyə kömək edir.
							</p>

							<p className="buttons">
								<a
									className="btn btn-green btn-green-instruction"
									target="_blank"
									rel="noopener noreferrer"
									href="/betadin-maz-instruktsiya/"
								>
									Təlimat
								</a>
							</p>
						</div>

						<h3 className="h3">Betadin® vaginal şamları</h3>

						<div className="product-block">
							<div className="banner-product-img">
								<picture>
									<source
										media="(max-width: 767px)"
										srcSet="/banner-betadin-svechi-mobile-315x235.webp 1x, /banner-betadin-svechi-mobile-630x470.webp 2x"
										type="image/webp"
									/>
									<source
										srcSet="/banner-betadin-svechi-927x916.webp 1x, /banner-betadin-svechi-1853x1832.webp 2x"
										type="image/webp"
									/>
									<Image
										src="/banner-betadin-svechi-1853x1832.webp"
										alt="Betadin"
										width={927}
										height={916}
										loading="lazy"
										decoding="async"
									/>
								</picture>
							</div>

							<p>
								<strong>Vaginal şamlar aşağı hallarda təyin olunur:</strong>
							</p>

							<ul>
								<li>Akut və xroniki vaginitlərin müalicəsi.</li>
								<li>Kandidoz (molkitsa) müalicəsi.</li>
								<li>Trichomoniasis müalicəsi.</li>
								<li>Cərrahi və diaqnostik müdaxilə öncəsi profilaktik istifadə.</li>
							</ul>

							<p>
								Akut vaginitlərdə adətən 1 şam gündə 1 dəfə, 7–14 gün müddətində tətbiq edilir.
							</p>

							<p className="buttons">
								<a
									className="btn btn-green btn-green-instruction"
									target="_blank"
									rel="noopener noreferrer"
									href="/betadin-svechi-instruktsiya/"
								>
									Təlimat
								</a>
							</p>
						</div>

						<div className="block-with-image">
							<div className="block-with-image__green">
								<p>
									Məlhəm əsaslı iyod preparatları: təsir mexanizmi və tətbiq sahələri.
								</p>
								<a
									href="/encyclopedia/jod-maz/"
									className="btn btn-green"
									target="_blank"
									rel="noopener noreferrer"
								>
									Ətraflı
								</a>
							</div>
							<picture>
								<source
									srcSet="/maz-na-osnove-joda-prevyu-246x166 (1).webp, /maz-na-osnove-joda-prevyu-246x166 (1).webp"
									type="image/webp"
								/>
								<Image
									src="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
									alt="Məlhəm - prevyu"
									width={310}
									height={210}
									loading="lazy"
									decoding="async"
								/>
							</picture>
						</div>

						<h3 className="h3">Povidon-iyod əsaslı vasitələrlə istifadə zamanı ehtiyat tədbirləri</h3>

						<ul className="wp-block-list">
							<li>Həll və məlhəmin gözə düşməsindən qaçınmaq lazımdır.</li>
							<li>Dərinin qaşınması və qızarması müşahidə olunarsa, istifadə dayandırılmalıdır.</li>
							<li>Qalxanvari vəzinin xəstəlikləri zamanı yalnız həkim məsləhəti ilə istifadə edilməlidir.</li>
							<li>Radioaktiv iyod müalicəsindən əvvəl istifadə tövsiyə edilmir.</li>
							<li>Hamiləlik və südvermə dövründə istifadə məhdudlaşdırıla bilər – həkimə müraciət edin.</li>
						</ul>

						<p>
							Yaraların sağalması prosesinin bütün mərhələlərində məlhəm forması tez-tez üstünlük
							təşkil edir, çünki bu forma antimikrob preparatın yarada daha uzun təsir müddəti
							təmin etməsinə kömək edir.
						</p>

						<h2 className="h2" id="chasto-zadavaemye-voprosy">Tez-tez verilən suallar</h2>

						<h3 className="h3">Povidon komponentləri toksikdirmi?</h3>

						<p>
							Povidon özü inert və zəhərsiz polimerdir. Iyod povidonla birləşdikdə qan dövranına
							demək olar ki, keçmir, ona görə də vasitə yetkinlərdə və 1 aylıqdan yuxarı uşaqlarda
							istifadə edilə bilər. Yenə də qalxanvari vəz xəstəlikləri və digər xüsusi hallar
							zamanı həkim məsləhəti vacibdir.
						</p>

						<h3 className="h3">Povidon-iyodun dezinfeksiyaedici təsiri nə vaxt sona çatır?</h3>

						<p>
							Betadin tətbiq edildikdə tətbiq olunan sahada sarı-qəhvəyi rəngli nazik bir film
							qalır. Məhsulun təsiri itdikcə bu rəng yavaş-yavaş yox olur.
						</p>

						<h3 className="h3">Hansı formanı seçmək daha yaxşıdır — həll yoxsa məlhəm?</h3>

						<p>
							Seçim göstəricilər və həkim tövsiyələrinə əsaslanır. Məsələn, kiçik kəsik və cızıqların
							təcili antiseptik emalı üçün 10% Betadin həlli uyğundur; irinli yara hallarında isə
							məlhəm daha məqsədəuyğundur.
						</p>

						<div className="h2 h2-read-more" id="chitat-po-teme">Oxumağa davam et</div>

						<div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
							<div className="swiper-wrapper">
								<div className="swiper-slide swiper-slide-active">
									<div className="slide-image">
										<picture>
											<source
												srcSet="/povidon-jod-prevyu-620x420.webp"
												type="image/webp"
											/>
											<Image
												src="/povidon-jod-prevyu-620x420.webp"
												alt="Povidon-iyod - önbaxış"
												width={246}
												height={166}
												loading="lazy"
												decoding="async"
											/>
										</picture>
									</div>
									<div className="slide-body">
										<p className="slide-title">
											<strong>Povidon iyod</strong>
										</p>
										<p>
											Povidon-iyodun xüsusiyyətləri və xassələri. Povidon-iyod nə üçün istifadə olunur?
											Betadin® həll, məlhəm, şamların istifadə təlimatı.
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
												srcSet="/svechi-ot-vaginita-prevyu-246x166 (1).webp, /svechi-ot-vaginita-prevyu-246x166 (1).webp"
												type="image/webp"
											/>
											<Image
												src="/svechi-ot-vaginita-prevyu-246x166 (1).webp"
												alt="Vaginitdən şamlar - önbaxış"
												width={246}
												height={166}
												loading="lazy"
												decoding="async"
											/>
										</picture>
									</div>
									<div className="slide-body">
										<p className="slide-title">
											<strong>Vaginitdən şamlar</strong>
										</p>
										<p>
											Vaginal şam formasında yerli preparatlarla vaginitin müalicəsi.
											Vaginada iltihab üçün şamları necə seçmək olar?
										</p>
										<p className="slide-more">
											<Link href="/encyclopedia/svechi-ot-vaginita/">Ətraflı</Link>
										</p>
									</div>
								</div>

								<div className="swiper-slide">
									<div className="slide-image">
										<picture>
											<source
												srcSet="/maz-na-osnove-joda-prevyu-246x166 (1).webp, /maz-na-osnove-joda-prevyu-246x166 (1).webp"
												type="image/webp"
											/>
											<Image
												src="/maz-na-osnove-joda-prevyu-246x166 (1).webp"
												alt="İyod əsaslı məlhəm - önbaxış"
												width={246}
												height={166}
												loading="lazy"
												decoding="async"
											/>
										</picture>
									</div>
									<div className="slide-body">
										<p className="slide-title">
											<strong>İyod əsaslı məlhəm</strong>
										</p>
										<p>
											İyod əsaslı məlhəm: təsir mexanizmi, tətbiq sahəsi. Müxtəlif dəri
											xəstəliklərinin müalicəsi üçün povidon-iyod əsaslı Betadin® məlhəmi.
										</p>
										<p className="slide-more">
											<Link href="/encyclopedia/jod-maz/">Ətraflı</Link>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="autor">
							<div className="autor-left">
								<p className="autor-title">Moshkova Elena Mihaylovna</p>
								<p className="autor-footer">Məqalənin müəllifi</p>
							</div>
							<picture>
								<source
									srcSet="/moshkova-novyj-406x406 (1).webp"
									type="image/webp"
								/>
								<Image
									src="/moshkova-novyj-406x406 (1).webp"
									alt="Moshkova Elena Mihaylovna"
									width={203}
									height={203}
									loading="lazy"
									decoding="async"
								/>
							</picture>
						</div>

						<h2 className="h2" id="spisok-literatury">İstinadlar</h2>

						<ol className="literature">
							<li id="literatura-0">Sidelkovskaya F.P., "N-vinilpyrrolidone və onun polimerlərinin kimyası", Moskva, 1970.</li>
							<li id="literatura-1">Jilyakova E.T., et al. Kolloid formulyasiyalarda istifadə olunan qalınlaşdırıcılar. 2016.</li>
							<li id="literatura-2">Borisov I.V., "Povidon-iyod — yeni imkanlar", 2021.</li>
							<li id="literatura-3">Povidon-iyod həllinin tibbi istifadəsi üzrə təlimat. GRLS.</li>
							<li id="literatura-4">Lebedev N.N. və digərləri. İnfeksiyalaşmış yaraların ambulator müalicəsi, 2018.</li>
							<li id="literatura-5">Gavrilenko Yu.V. Betadin həllinin uşaqlarda istifadəsinin effektivliyi, 2014.</li>
							<li id="literatura-6">Betadin istifadə təlimatları (həll, məlhəm, şamlar).</li>
						</ol>
					</div>
				</div>
			</article>
		</main>
	);
}

