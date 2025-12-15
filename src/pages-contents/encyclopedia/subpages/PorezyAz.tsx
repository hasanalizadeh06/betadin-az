'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ScrollGoals {
	[key: number]: () => void;
}

interface Triggered {
	[key: number]: boolean;
}

export default function PorezyAz() {
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

		const checkScroll = () => {
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
					console.log(percent);
				}
			}

			if (Object.values(triggered).every((v) => v)) {
				window.removeEventListener('scroll', checkScroll);
			}
		};

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
				{/* Header Section */}
				<div className="container-page-header">
					<div className="container">
						{/* Breadcrumb Navigation */}
						<div className="page-header page-header-breadcrumbs">
							<ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
								<li property="itemListElement" typeof="ListItem">
									<a property="item" typeof="WebPage" href="/">
										<span property="name">Ana səhifə</span>
									</a>
									<meta property="position" content="1" />
								</li>
								<li property="itemListElement" typeof="ListItem">
									<a property="item" typeof="WebPage" href="/encyclopedia/">
										<span property="name">Ensiklopediya</span>
									</a>
									<meta property="position" content="2" />
								</li>
								<li property="itemListElement" typeof="ListItem">
									<span property="name">Kəsiklər</span>
									<meta property="position" content="3" />
								</li>
							</ol>
						</div>

						<div className="page-header">
							<div className="page-header-left">
								<div className="page-header-title">
									<h1 className="page-header-title-text">Kəsiklər: ilk yardım və düzgün qulluq</h1>
									<picture>
										<source srcSet="/icon-230x224.webp 1x, /icon-230x224.webp 2x" type="image/webp" />
										<Image height={112} width={115} src="/icon.png" alt="başlıq şəkli" priority />
									</picture>
								</div>
								<h2 className="page-header-subtitle">Kəsiklər haqqında faktlar</h2>
								<div className="page-header-body">
									<p>
										Kəsik — kəsici predmetin dəriyə təsiri nəticəsində yaranan mexaniki zədələnmədir
										<sup>
											<a href="#spisok-literatury">1,2,3</a>
										</sup>
										.
									</p>
									<p>Kiçik kəsiklər gündəlik danışıqda sadəcə 'kəsik' adlanır.</p>
								</div>
								<ul className="page-header-anchors page-header-anchors-detail">
									<li>
										<a href="#pomoshch-pri-porezah">Kəsiklərdə ilk yardım</a>
									</li>
									<li>
										<a href="#algoritm-obrabotki-poreza-rastvorom-i-mazyu-betadin">Kəsiyin emalı alqoritmi</a>
									</li>
									<li>
										<a href="#fazy-zazhivleniya-poreza">Kəsiklərin sağalma mərhələləri</a>
									</li>
								</ul>
							</div>

							<div className="page-header-right">
								<div className="page-header-img">
									<picture>
										<source srcSet="/kartinka-banner-1460x1230.webp" type="image/webp" />
										<Image fetchPriority="high" height={1230} width={1460} src="/kartinka-banner-1460x1230.webp" alt="Kəsiklər" priority />
									</picture>
								</div>
							</div>
						</div>

						{/* Navigation Menu */}
						<nav className={`nav-content ${navOpened ? 'nav-content__open' : ''}`}>
							<ul>
								<li>
									<a href="#osobennosti-stroeniya-kozhi">Dərinin quruluş xüsusiyyətləri</a>
								</li>
								<li>
									<a href="#porezy-v-zavisimosti-ot-glubiny">Dərinliyə görə kəsiklər</a>
								</li>
								<li>
									<a href="#pomoshch-pri-porezah">Kəsiklərdə yardım</a>
								</li>
								<li>
									<a href="#kak-opredelit-povrezhdenie-sosuda">Damar zədələnməsini necə müəyyən etmək olar</a>
								</li>
								<li>
									<a href="#fazy-zazhivleniya-poreza">Kəsiklərin sağalma fazaları</a>
								</li>
								<li>
									<a href="#faktory-vliyayushchie-na-zazhivlenie-ran">Sağalmaya təsir edən amillər</a>
								</li>
								<li>
									<a href="#lechenie-porezov">Kəsiklərin müalicəsi</a>
								</li>
								<li>
									<a href="#mazi">Məlhəmlər</a>
								</li>
								<li>
									<a href="#algoritm-obrabotki-poreza-rastvorom-i-mazyu-betadin">Betadin ilə emal alqoritmi</a>
								</li>
								<li>
									<a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
								</li>
								<li>
									<a href="#spisok-literatury">İstinadlar</a>
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

				{/* Fixed Navigation */}
				<nav
					className={`nav-content nav-content-fixed ${secondaryNavOpened ? 'nav-content__open' : ''} ${navTitleHidden ? '' : 'nav-content-title-hidden'}`}
				>
					<ul>
						<li>
							<a href="#osobennosti-stroeniya-kozhi">Dərinin quruluş xüsusiyyətləri</a>
						</li>
						<li>
							<a href="#porezy-v-zavisimosti-ot-glubiny">Dərinliyə görə kəsiklər</a>
						</li>
						<li>
							<a href="#pomoshch-pri-porezah">Kəsiklərdə yardım</a>
						</li>
						<li>
							<a href="#kak-opredelit-povrezhdenie-sosuda">Damar zədələnməsini necə müəyyən etmək olar</a>
						</li>
						<li>
							<a href="#fazy-zazhivleniya-poreza">Kəsiklərin sağalma fazaları</a>
						</li>
						<li>
							<a href="#faktory-vliyayushchie-na-zazhivlenie-ran">Sağalmaya təsir edən amillər</a>
						</li>
						<li>
							<a href="#lechenie-porezov">Kəsiklərin müalicəsi</a>
						</li>
						<li>
							<a href="#mazi">Məlhəmlər</a>
						</li>
						<li>
							<a href="#algoritm-obrabotki-poreza-rastvorom-i-mazyu-betadin">Betadin ilə emal alqoritmi</a>
						</li>
						<li>
							<a href="#chasto-zadavaemye-voprosy">Tez-tez verilən suallar</a>
						</li>
						<li>
							<a href="#spisok-literatury">İstinadlar</a>
						</li>
					</ul>
					<div
						className="nav-content-title nav-content-title-cross"
						onClick={() => setSecondaryNavOpened((prev) => !prev)}
					>
						Mündəricat
					</div>
				</nav>

				{/* Disclaimer */}
				<div className="home-container">
					<div className="new-disclaimer">Məqalədəki məlumat həkim məsləhətinin əvəzini vermir</div>
				</div>

				{/* Main Content */}
				<div className="page-content-wrapper">
					<div className="container container-middle page-content">
						{/* First Image */}
						<picture className="img-normal">
							<source srcSet="/medical-kit-and-bandaid-509398-488-1-18-1300x740.webp" type="image/webp" />
							<Image height={740} width={1300} src="/medical-kit-and-bandaid-509398-488-1-18-1300x740.webp" alt="Dərin yara" />
						</picture>

						<div className="exlude-turbo">
							<picture className="banner-betadin banner-circle">
								<source srcSet="/circle-503x505.webp" type="image/webp" />
								<Image loading="lazy" height={505} width={503} src="/circle-503x505.webp" alt="Dekorativ elementlər" />
							</picture>
						</div>

						<h3 className="h3" id="bytovye-predmety-kotorymi-chashche-vsego-mozhno-poluchit-porez">Ən çox kəsik yaradan ev əşyaları:</h3>
						<div className="list-base">
							<ul>
								<li>Bıçaq</li>
								<li>Tıraş pıçaqları</li>
								<li>Şüşə parçaları</li>
								<li>Kağızın kənarı</li>
							</ul>
						</div>

						{/* Section: Особенности строения кожи */}
						<h2 className="h2" id="osobennosti-stroeniya-kozhi">Dərinin quruluş xüsusiyyətləri</h2>
						<p>
							<strong>Dəri</strong> — insan orqanizminin ən böyük orqanlarından biridir. O, elastik və
							kifayət qədər möhkəmdir, bədən hissələrində qalınlıq və struktur baxımından fərqlənir.
							Dəri əsasən <strong>epidermis və dermis</strong> olmaqla iki qatdan ibarətdir.
						</p>

						<picture className="img-normal">
							<source srcSet="/medical-kit-and-bandaid-509398-488-1-19-1300x651.webp" type="image/webp" />
							<Image loading="lazy" height={651} width={1300} src="/medical-kit-and-bandaid-509398-488-1-19-1300x651.webp" alt="Dərinin quruluşu" />
						</picture>

						<div className="two-column">
							<div className="column">
								<p>
									<strong>Epidermis</strong>
								</p>
								<p>Epidermis dərinin səthi qatıdır və bir neçə hüceyrə qatından ibarətdir.</p>
							</div>
							<div className="column">
								<p>
									<strong>Dermis</strong>
								</p>
								<p>
									Dermis epidermisin altında yerləşir və elastin lifləri ilə kollagen liflərindən
									ibarətdir; burada yağ vəziləri, saç follikulları, sinirlər və qan damarları
									yerləşir.
								</p>
							</div>
						</div>

						<p>Kəsiklər epidermisə və ya dermisə təsir edə bilər.</p>

						{/* Section: Порезы в зависимости от глубины */}
						<h2 className="h2" id="porezy-v-zavisimosti-ot-glubiny">Dərinliyə görə kəsiklər</h2>
						<div className="two-column">
							<div className="column">
								<p>
									<strong>Yüngül kəsiklər</strong>
								</p>
								<p>
									Yüngül kəsiklər dəri səthinin üz qatlarını keçən zədələnmələrdir. Vaxtında düzgün
									emal edildikdə infeksiya riski aşağıdır.
								</p>
								<p>Belə zədələnmələr dırnaqlar, metal parçası və ya budaqlar tərəfindən yaranmış ola bilər.</p>
								<p>Adətən yüngül kəsikləri ev şəraitində müalicə etmək mümkündür, əsas odur ki, yara çirklənməsin.</p>
							</div>
							<div className="column">
								<p>
									<strong>Dərin kəsiklər</strong>
								</p>
								<p>Dərin kəsiklər dərinin bütün qatlarını keçir.</p>
								<p>
									Onlar adətən bıçaq, tıraş pıçağı, şüşə parçası və ya metalın iti kənarı kimi
									əşyaların təsiri ilə yaranır. Yara içində çirklənmə varsa, onu diqqətə almaq lazımdır.
								</p>
								<p>Əgər zədələnmə geniş və dərin görsənirsə, tikiş tələb oluna bilər — həkimə müraciət edin.</p>
							</div>
						</div>

						<div className="green">
							<p>
								<strong>Kəsiklər üçün ilkin yardım tələb olunur.</strong>
							</p>
							<p>
								<strong>Damarı zədələyən dərin kəsiklər təcili tibbi müdaxilə tələb edir.</strong>
							</p>
						</div>

						{/* Section: Помощь при порезах */}
						<h2 className="h2" id="pomoshch-pri-porezah">Kəsiklərdə yardım</h2>
						<div className="list-base">
							<p>
								<strong>
									Kəsik zamanı ilkin yardım üçün lazım olan əsas tədbirlər:
									<sup>
										<a href="#spisok-literatury">2,3</a>
									</sup>
									:
								</strong>
							</p>
							<ul>
								<li>Steril və ya təmiz ləpəli materialla yaranı təmizləyin (məsələn, steril qazlıqlı)</li>
								<li>Yara üzərinə təzyiq edərək qanaxmanı dayandırın</li>
								<li>Yaranı fizioloji məhlul və ya təmiz su ilə yuyun</li>
								<li>
									Yaranı antiseptiklə, məsələn <span style={{ color: '#0f780b' }}>Betadin<sup>®</sup></span> həlli ilə işləyin
								</li>
								<li>Təmizlənmiş yaraya steril sarğı qoyun</li>
								<li>Yaranın təmizliyinə nəzarət edin və dəyişiklikləri izləyin</li>
							</ul>
						</div>

						{/* Video Section */}
						<div className="iframe">
							<div className="bg_default bg_green"></div>
							<div className="h3 h3_green iframe-title">Kəsiklərin emalı haqqında qısa video</div>
							<div className="iframe-container">
								<iframe
									src="https://rutube.ru/play/embed/8314874a89912f6b1013b956c27b80dc/?p=S00uuqCAOQ5PAjEEREaaHQ"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<div className="iframe_desc">
								Videoda kiçik kəsiklərin də düzgün emal edilməsinin niyə vacib olduğu, həmçinin
								istifadəsi rahat və az narahatlıq yaradan antiseptiklər göstərilir.
							</div>
						</div>

						{/* Section: Как определить повреждение сосуда */}
						<h2 className="h2" id="kak-opredelit-povrezhdenie-sosuda">Damar zədələnməsini necə müəyyən etmək olar</h2>
						<p>
							Əgər kəsik dərin və qanaxma dayanmırsa, əksər hallarda damar zədələnməsi baş verib.
							Bu halda peşəkar tibbi yardım tələb olunur.
						</p>

						<div className="two-column">
							<div className="column">
								<p>
									<strong>Arteriya qanaxması:</strong>
								</p>
								<p>qan açıq-qırmızı və püskürmə şəklində axır</p>
							</div>
							<div className="column">
								<p>
									<strong>Vena qanaxması:</strong>
								</p>
								<p>qan tünd-qırmızı və yavaş şəkildə axır</p>
							</div>
						</div>

						<div className="list-base">
							<p>
								<strong>Xəstəxanaya aparılarkən nə etmək lazımdır:</strong>
							</p>
							<ul>
								<li>Yaranı steril sarğı ilə örtün və damar üzərinə təzyiq göstərməyə davam edin</li>
								<li>Zədələnmiş hissəni ürək səviyyəsindən yuxarı qaldırın, əgər mümkündürsə</li>
								<li>Əgər sarğı qanla doyubsa, onu çıxarmayın — üzərinə yeni təmiz sarğı qoyun</li>
							</ul>
						</div>

						{/* Section: Фазы заживления пореза */}
						<h2 className="h2" id="fazy-zazhivleniya-poreza">Kəsiklərin sağalma fazaları</h2>
						<p>Kəsiklərin sağalmasında dörd əsas faza ayırd edilir:</p>

						<div className="big">
							<div className="line">
								<div>
									<p>
										<strong>Eksudasiya fazası</strong>
									</p>
									<p>Damar divarından maye çıxışı və yarada yığılması</p>
								</div>
							</div>
							<div className="line">
								<div>
									<p>
										<strong>Resorbsiya fazası</strong>
									</p>
									<p>Yaradan mayenin geri sorulması</p>
								</div>
							</div>
							<div className="line">
								<div>
									<p>
										<strong>Proliferasiya fazası</strong>
									</p>
									<p>Yeni toxumanın formalaşması</p>
								</div>
							</div>
							<div className="line">
								<div>
									<p>
										<strong>Regenerasiya fazası</strong>
									</p>
									<p>Yaranın bərpası</p>
								</div>
							</div>
						</div>

						<div className="green">
							<p>
								<strong>İlk iki fazada iltihab prosesi gedir.</strong>
							</p>
						</div>

						<p>
							İltihab dəri zədələndikdə orqanizmin müdafiə reaksiyasıdır: zədələnmiş sahəni əhatələyir
							və bərpa prosesini başladır. Bu proses zədələnmənin ağırlığından asılı olaraq
							günlərdən həftələrə və ya daha uzun müddət davam edə bilər.
						</p>

						<div className="list-base">
							<p>
								<strong>Kəsik sağaldıqca müşahidə olunan proseslər:</strong>
							</p>
							<ul>
								<li>Yara meydana gəldikdə qan damarları daralır, qan laxtalanır və qanaxma azalır.</li>
								<li>
									Sonra damarlar genişlənir, infeksiya ilə mübarizə aparmaq üçün ağ qan hüceyrələri
									yaranmış sahəyə toplanır — bu iltihab əlamətləri ilə müşayiət olunur.
								</li>
								<li>Yeni kollagen lifləri və damarlar formalaşaraq toxumanın bərpasına kömək edir.</li>
								<li>Yara kənarları daralır və ölçüsü kiçilir.</li>
								<li>Səthi hüceyrələr bir-birinə doğru miqrasiya edərək yeni dəri meydana gətirir.</li>
								<li>Qəsdin dərinliyinə görə, bəzən çapıq qala bilər; çapıq toxuması normal dəridən fərqli ola bilər.</li>
							</ul>
						</div>

						{/* Section: Факторы, влияющие на заживление ран */}
						<h2 className="h2" id="faktory-vliyayushchie-na-zazhivlenie-ran">Sağalmaya təsir edən amillər</h2>
						<div className="list-base">
							<p>
								Yaraların sağalma sürəti fərdi xüsusiyyətlərdən və ətraf amillərdən asılıdır. Əsas amillərə
								aşağıdakılar daxildir:
							</p>
							<ul>
								<li>Ümumi sağlamlıq vəziyyəti</li>
								<li>Yaş — yaşlı insanlarda sağalma daha yavaşdır</li>
								<li>İmmun sisteminin vəziyyəti</li>
								<li>Düzgün qidalanma</li>
								<li>Hava və iqlim şəraiti</li>
								<li>Yaranın infeksiyalaşma dərəcəsi</li>
								<li>Zərərli vərdişlər (siqaret, alkoqol və s.)</li>
								<li>Əlaqəli xəstəliklər (məsələn, şəkərli diabet)</li>
							</ul>
						</div>

						{/* Section: Лечение порезов */}
						<h2 className="h2" id="lechenie-porezov">Kəsiklərin müalicəsi</h2>
						<p>
							Kəsiklərin müalicəsində müxtəlif təsir mexanizmlərinə və formasına malik dərmanlar istifadə olunur
							<sup>
								<a href="#spisok-literatury">4,5,6</a>
							</sup>
							.
						</p>

						{/* Subsection: Растворы */}
						<h3 className="h3" id="rastvory">Həllər</h3>

						<h4 className="h4" id="povidon-yod">Povidon-iyod</h4>
						<div className="product-block">
							<div className="banner-product-img">
								<picture>
									<source media="(max-width: 767px)" srcSet="/banner-betadin-927x916.webp" type="image/webp" />
									<Image loading="lazy" width={927} height={916} src="/banner-betadin-927x916.webp" alt="Betadin" />
								</picture>
							</div>
							<p>
								Betadin® həlli 10% konsentrasiyada istehsal olunur. Kəsiklərin emalında preparat seyreltmədən və ya 1:10 nisbətində seyreldilərək 1% həll kimi istifadə edilə bilər
								<sup>
									<a href="#spisok-literatury">2,3</a>
								</sup>
								. Seyriltmə üçün fizioloji məhlul, Ringer məhlulu və ya injeksiya üçün su istifadə edilə bilər.
							</p>
							<p>
								<a href="/encyclopedia/povidon-jod/">Povidon-iyod</a> antiseptik, antiviral, antifungal və antiprotozoal təsirə malikdir.
							</p>
							<p>Gram-mənfi və gram-müsbət bakteriyalara qarşı aktivdir.</p>
							<p>
								5% spirtli iyod məhlulundan fərqli olaraq, povidon-iyod birbaşa kəsiyə tətbiq edilə bilər — o yanğı hissi yaratmır və toxuma regenerasiyasına mane olmur.
							</p>
							<p className="buttons">
								<a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-rastvor-instruktsiya/">
									Təlimat
								</a>
							</p>
						</div>

						<h3 className="h3" id="hlorgeksidina-biglyukonat">Xlorheksidin biglyukonat</h3>
						<p>
							Xlorheksidin bakteriyalara, göbələklərə və viruslara qarşı təsir göstərən antiseptikdir. Kəsiklərin emalında 0.2–0.5% su məhlulu tövsiyə olunur; spirt əsaslı məhlullar yanma hissi yarada və sağalmaya mane ola bilər.
						</p>

						<h3 className="h3" id="perekis-vodoroda">Hidrojen peroksid</h3>
						<p>
							3% məhlulu istifadə olunur. Hidrojen peroksid qanaxmanı dayandırmağa kömək edir və yara içindəki çirkləri mexaniki olaraq qaz baloncuklarının əmələ gəlməsi ilə təmizləyə bilər. Lakin allergik reaksiyalar riski mövcuddur.
						</p>

						{/* Section: Мази */}
						<h2 className="h2" id="mazi">Məlhəmlər</h2>

						<h3 className="h3" id="povidon-yod-2">Povidon-iyod</h3>
						<div className="product-block">
							<div className="banner-product-img">
								<picture>
									<source media="(max-width: 767px)" srcSet="/banner-betadin-maz-927x916.webp" type="image/webp" />
									<Image loading="lazy" width={927} height={916} src="/banner-betadin-maz-927x916.webp" alt="Betadin məlhəm" />
								</picture>
							</div>
							<p>
								Betadin® məlhəmi 100 mg povidon-iyod ehtiva edir. Məlhəm geniş spektrli antimikrob təsirə malikdir, iltihabı azaldır və yaraların sağalmasını sürətləndirir.
							</p>
							<p>
								Məlhəmin istifadə rahatlığı onu daşımaq və ehtiyac olduqda tətbiq etmək üçün əlverişlidir — okslyuziya sarğıları altında da istifadə oluna bilər.
							</p>
							<p className="buttons">
								<a className="btn btn-green btn-green-instruction" target="_blank" href="/betadin-maz-instruktsiya/">
									Təlimat
								</a>
							</p>
						</div>

						<div className="green">
							<p>
								Klinik tədqiqatlar göstərib ki, 1% həll və 10% məlhəmin kombinasiyası kəsiklərin və yaraların müalicəsində yüksək klinik effekt verir
								<sup>
									<a href="#spisok-literatury">5</a>
								</sup>
								.
							</p>
						</div>

						<h3 className="h3" id="dekspantenol">Dekspantenol</h3>
						<p>
							Dekspantenol (vitamin B5 törəməsi) dərini nəmləndirir, bariyer funksiyasını möhkəmləndirir, iltihabı azaldır və yara sağalmasını stimullaşdırır
							<sup>
								<a href="#spisok-literatury">7</a>
							</sup>
							.
						</p>

						<h3 className="h3" id="hloramfenikol-i-dioksometiltetragidropirimidin">Xloramfenikol və digər komponentlər</h3>
						<p>
							Bu maddələr geniş antibakterial və iltihab əleyhinə təsirə malikdir, yara daxilinə nüfuz edir və sağalmaya kömək edir. Lakin bəzi hallarda kontakt dermatit və digər yan təsirlər yaranmaq ehtimalı var
							<sup>
								<a href="#spisok-literatury">8</a>
							</sup>
							.
						</p>

						{/* Section: Алгоритм обработки пореза */}
						<h2 className="h2" id="algoritm-obrabotki-poreza-rastvorom-i-mazyu-betadin">Betadin ilə kəsiyin emalı alqoritmi</h2>
						<div className="big">
							<div className="line">
								<div>
									<p>
										<strong>Bütün lazım olanları hazırlayın</strong>
										<sup>
											<a href="#spisok-literatury">5,6</a>
										</sup>
										:
									</p>
									<ul>
										<li>Yaranı təmizləmək üçün vasitə (0.9% fizioloji məhlul və ya təmiz su)</li>
										<li>10% Betadin® həlli və ya hazırlanmış 1% Betadin həlli</li>
										<li>Betadin məlhəmi</li>
										<li>Qazlıqlar, sarğı və plaster</li>
									</ul>
								</div>
							</div>
							<div className="line">
								<p>
									<strong>Əllərinizi yuyun və lazım gələrsə əlcəklər geyinin</strong>
								</p>
							</div>
							<div className="line">
								<div>
									<p>
										<strong>Yaranı aşağıdakı qaydada emal edin:</strong>
									</p>
									<ul>
										<li>Yaranı fizioloji məhlul və ya su ilə yuyun.</li>
										<li>Çirkləri və yad cisimləri çıxarın — qazlıqdan "uc" əmələ gətirərək çıxarmaq olar.</li>
										<li>Yaranı 10% və ya hazırlanmış 1% Betadin həlli ilə işləyin; yara yumşaq hərəkətlərlə silinsin.</li>
										<li>Yara üzərinə nazik təbəqə ilə Betadin məlhəmi tətbiq edin və steril sarğı ilə bağlayın.</li>
										<li>Proseduru sağalana qədər təkrarlayın.</li>
									</ul>
								</div>
							</div>
						</div>

						<picture className="img-normal">
							<source srcSet="/rectangle-213-1-1300x301.webp" type="image/webp" />
							<Image loading="lazy" height={301} width={1300} src="/rectangle-213-1-1300x301.webp" alt="Kəsiyin emalı" />
						</picture>

						<div className="exlude-turbo">
							<picture className="banner-betadin banner-quastion">
								<source srcSet="/quastion-558x542.webp" type="image/webp" />
								<Image loading="lazy" height={542} width={558} src="/quastion-558x542.webp" alt="Dekorativ elementlər" />
							</picture>
						</div>

						{/* Section: Часто задаваемые вопросы */}
						<h2 className="h2" id="chasto-zadavaemye-voprosy">Tez-tez verilən suallar</h2>

						<h3 className="h3" id="chto-delat-esli-porezalsya">Kəsildikdə nə etmək lazımdır?</h3>
						<p>
							Əsas odur, panikaya düşməyin. Yaranı su və ya fizioloji məhlulla yuyun, antiseptiklə
							işləyin (məsələn, Betadin® həlli) və lazım gələrsə məlhəmdən istifadə edin. Əgər
							qanaxmanı dayandırmaq mümkün deyilsə, yara uzun müddət sağalmır və ya irinlənmə varsa —
							həkimə müraciət edin.
						</p>

						<h3 className="h3" id="chem-obrabotat-porez">Kəsiyi ilə nəyi işləmək olar?</h3>
						<p>
							Kəsiyi antiseptiklərlə emal etmək lazımdır. Sulu antiseptiklər (məsələn, Betadin həlli)
							bütün yara sahəsini emal etmək üçün əlverişlidir; spirt əsaslı vasitələr yalnız yara kənarına
							tətbiq edilməlidir. Emaldan sonra Betadin məlhəmi yara sağalmasını sürətləndirə bilər.
						</p>

						<h3 className="h3" id="kak-ostanovit-krov-pri-poreze">Kəsikdə qanı necə dayandırmaq olar?</h3>
						<p>
							Yaranı təmizlədikdən sonra steril sarğı ilə örtün və yaranın üzərinə təzyiq edin, zədələnmiş
							hissəni ürək səviyyəsindən yuxarı qaldırın. Əgər qan püskürür və dayanmırsa, dərhal tibbi yardım
							axtarın.
						</p>

						{/* Author Section */}
						<div className="autor">
							<div className="autor-left">
								<p className="autor-title">Kraskovski Fyodor Yanoviç</p>
								<div className="autor-subtitle"></div>
								<p className="autor-footer">Məqalənin müəllifi</p>
							</div>
							<picture>
								<source srcSet="/kraskovskij-novyj-470x406 (1).webp" type="image/webp" />
								<Image loading="lazy" height={406} width={470} src="/kraskovskij-novyj-470x406 (1).webp" alt="Müəllif" />
							</picture>
						</div>

						{/* Related Articles Section */}
						<div className="h2 h2-read-more" id="chitat-po-teme">Oxumağa davam et</div>
						<div className="slider-normal swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
							<div className="swiper-wrapper">
								<div className="swiper-slide swiper-slide-active">
									<div className="slide-image">
										<picture>
											<source srcSet="/obrabotka-ran-prevyu-246x166.webp 1x, /obrabotka-ran-prevyu-491x332.webp 2x" type="image/webp" />
											<Image loading="lazy" height={166} width={246} src="/obrabotka-ran-prevyu-246x166.webp" alt="Yaraların emalı - prevyu" />
										</picture>
									</div>
									<div className="slide-body">
										<p className="slide-title"><strong>Yaraların emalı</strong></p>
										<p>Komplikasiyaların qarşısını almaq üçün yaraları necə düzgün emal etmək lazım olduğunu oxuyun.</p>
										<p className="slide-more"><a href="/encyclopedia/obrabotka-ran/">Ətraflı</a></p>
									</div>
								</div>

								<div className="swiper-slide">
									<div className="slide-image">
										<picture>
											<source srcSet="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp 1x, /maz-dlya-zazhivleniya-ran-prevyu-491x332.webp 2x" type="image/webp" />
											<Image loading="lazy" height={166} width={246} src="/maz-dlya-zazhivleniya-ran-prevyu-246x166.webp" alt="Yaraların sağalması üçün məlhəmlər - prevyu" />
										</picture>
									</div>
									<div className="slide-body">
										<p className="slide-title"><strong>Yaraların sağalması üçün məlhəmlər</strong></p>
										<p>Hansı məlhəmlər mövcuddur və ən effektivini necə seçmək olar.</p>
										<p className="slide-more"><a href="/encyclopedia/maz-dlya-zazhivleniya-ran/">Ətraflı</a></p>
									</div>
								</div>

								<div className="swiper-slide">
									<div className="slide-image">
										<picture>
											<source srcSet="/rany-s-infekcziej-prevyu-246x166 (1).webp" type="image/webp" />
											<Image loading="lazy" height={166} width={246} src="/rany-s-infekcziej-prevyu-246x166 (1).webp" alt="İnkişaf etmiş infeksiyalı yaralar - prevyu" />
										</picture>
									</div>
									<div className="slide-body">
										<p className="slide-title"><strong>İnkişaf etmiş infeksiyalı yaralar</strong></p>
										<p>Bütün kəsiklər problemsiz sağalmaya bilər — infeksiyalı yaraların müalicəsi barədə oxuyun.</p>
										<p className="slide-more"><a href="/encyclopedia/rany-s-infekciej/">Ətraflı</a></p>
									</div>
								</div>
							</div>
						</div>

						{/* References Section */}
						<h2 className="h2" id="spisok-literatury">İstinadlar</h2>
						<ol className="literature">
							<li id="literature-0">Zavrajanov A. A., Gvozdev M. Yu., Krutova V. A. Yaralar və rani proses. Krasnodar, 2016.</li>
							<li id="literature-1">Gostişçev V.K. və b. Ümumi cərrahiyyə. GEOTAR-Media, Moskva 2005.</li>
							<li id="literature-2">Vasiliev V. K., Popov A. P. Ümumi cərrahiyyə. SPb., 2014.</li>
							<li id="literature-3">Harkevich D. A. Farmakologiya. M., 2009.</li>
							<li id="literature-4">Lebedev N. N. və digərləri. İnfeksion yaraların ambulatory müalicəsi üzrə alqoritm. 2018.</li>
							<li id="literature-5">Nosenko O. M. və digərləri. Betadin (povidon-iyod) istifadə təcrübələri. 2018.</li>
							<li id="literature-6">Proksch E. və digərləri. Dekspantenol haqqında icmal. J Dermatolog Treat. 2017.</li>
							<li id="literature-7">Romita P. və digərləri. Xloramfenikol ilə əlaqəli allergik kontakt dermatit. Contact Dermatitis. 2019.</li>
							<li id="literature-8">Betadin® həllinin tibbi tətbiqi üzrə təlimat (RN: P№015282/03).</li>
							<li id="literature-9">Borisov I. V. Povidon-iyod — tanış preparatın yeni imkanları. 2021.</li>
							<li id="literature-10">Betadin® məlhəm üçün istifadə təlimatı (RN: P№015282/02).</li>
							<li id="literature-11">Bigliardi L.P. et al. Povidone iodine in wound healing. Int J Surg. 2017.</li>
						</ol>
					</div>
				</div>
			</article>
		</main>
	);
}

