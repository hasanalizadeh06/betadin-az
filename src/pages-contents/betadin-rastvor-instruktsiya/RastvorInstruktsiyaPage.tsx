"use client"
import React, { useState, useEffect } from 'react'
import '../../styles/template.css'

const RastvorInstruktsiyaPage: React.FC = () => {
	const [openedQuestions, setOpenedQuestions] = useState<number[]>([])
	const changeStatus = (id:number) => {
		if(openedQuestions.includes(id)){
			setOpenedQuestions(openedQuestions.filter(questionId => questionId !== id))
		} else {
			setOpenedQuestions([...openedQuestions, id])
		}
	}
	
	const [navOpened, setNavOpened] = useState<boolean>(false)
	const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false)
	const [navTitleHidden, setNavTitleHidden] = useState<boolean>(true)
	useEffect(() => {
		const checkPosition = () => {
			if (typeof window === 'undefined') return
			const threshold = 1000 
			const scrollY = window.scrollY ?? window.pageYOffset
			if (scrollY >= threshold) {
				setNavTitleHidden(false)
			} else {
				setNavTitleHidden(true)
				setSecondaryNavOpened(false)
			}
		}

		// initial check
		checkPosition()

		window.addEventListener('scroll', checkPosition)
		window.addEventListener('resize', checkPosition)

		return () => {
			window.removeEventListener('scroll', checkPosition)
			window.removeEventListener('resize', checkPosition)
		}
	}, [])

	return (
		<main>
			<article>
				<div className="container-page-header">
					<div className="container">
						<div className="page-header page-header-breadcrumbs">
							<ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
								<li property="itemListElement" typeof="ListItem">
									<a property="item" typeof="WebPage" href="/">
										<span property="name">Главная</span>
									</a>
									<meta property="position" content="1" />
								</li>
								<li property="itemListElement" typeof="ListItem">
									<span property="name">Бетадин раствор: инструкция по применению</span>
									<meta property="position" content="3" />
								</li>
							</ol>
						</div>

						<div className="page-header">
							<div className="page-header-left">
								<div className="page-header-title page-header-title-instruction">
									<h1 className="page-header-title-text">Бетадин® раствор: инструкция по применению</h1>
									<picture>
										<img
											decoding="async"
											height={112}
											width={115}
											src="/instrukcziya-betadin-rastvor-752x634.webp"
											alt="картинка у заголовка"
										/>
									</picture>
								</div>

								<div className="page-header-body page-header-body-instruction">
									<p>
										<strong>Регистрационный номер:</strong>&nbsp;ЛП-№(002550)-(РГ-RU)
										<br />
										<strong>Торговое название:</strong>&nbsp;БЕТАДИН<sup>®</sup>
										<br />
										<strong>МНН:</strong>&nbsp;повидон-йод
										<br />
										<strong>Лекарственная форма:</strong>&nbsp;раствор для местного и наружного применения 10%
									</p>
								</div>

								<ul className="page-header-anchors page-header-anchors-detail">
									<li>
										<a target="_blank" rel="noopener noreferrer" href="/instrukcziya-betadin-rastvor-1.pdf">
											Скачать инструкцию
										</a>
									</li>
									<li>
										<a href="#pokazaniya">Показания</a>
									</li>
									<li>
										<a href="#protivopokazaniya">Противопоказания</a>
									</li>
									<li>
										<a href="#rezhim-dozirovaniya-i-sposob-primeneniya">Дозировка</a>
									</li>
								</ul>
							</div>

							<div className="page-header-right">
								<div className="page-header-img">
									<picture>
										<img
											fetchPriority="high"
											decoding="async"
											height={634}
											width={752}
											src="/instrukcziya-betadin-rastvor-752x634.webp"
											alt="инструкция бетадин раствор"
										/>
									</picture>
								</div>
							</div>
						</div>

						<nav className={`nav-content${navOpened ? " nav-content__open" : ""}`}>
							<ul>
								<li>
									<a href="#obshchaya-informaciya">Общая информация</a>
								</li>
								<li>
									<a href="#farmakologicheskoe-deystvie">Фармакологическое действие</a>
								</li>
								<li>
									<a href="#pokazaniya">Показания</a>
								</li>
								<li>
									<a href="#protivopokazaniya">Противопоказания</a>
								</li>
								<li>
									<a href="#rezhim-dozirovaniya-i-sposob-primeneniya">Режим дозирования и способ применения</a>
								</li>
								<li>
									<a href="#pobochnye-effekty">Побочные эффекты</a>
								</li>
								<li>
									<a href="#vzaimodeystvie">Взаимодействие</a>
								</li>
								<li>
									<a href="#osobye-ukazaniya">Особые указания</a>
								</li>
								<li>
									<a href="#forma-vypuska">Форма выпуска</a>
								</li>
								<li>
									<a href="#srok-godnosti">Срок годности</a>
								</li>
								<li>
									<a href="#usloviya-hraneniya">Условия хранения</a>
								</li>
								<li>
									<a href="#usloviya-otpuska">Условия отпуска</a>
								</li>
								<li>
									<a href="#informaciya-o-proizvoditele">Информация о производителе</a>
								</li>
							</ul>
							<div className="nav-content-title nav-content-title-cross"  onClick={() => {setNavOpened(!navOpened)}}> Содержание</div>
						</nav>
					</div>
				</div>

				<nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${secondaryNavOpened ? " nav-content__open" : ""}`}>
					<ul>
						<li>
							<a href="#obshchaya-informaciya">Общая информация</a>
						</li>
						<li>
							<a href="#farmakologicheskoe-deystvie">Фармакологическое действие</a>
						</li>
						<li>
							<a href="#pokazaniya">Показания</a>
						</li>
						<li>
							<a href="#protivopokazaniya">Противопоказания</a>
						</li>
						<li>
							<a href="#rezhim-dozirovaniya-i-sposob-primeneniya">Режим дозирования и способ применения</a>
						</li>
						<li>
							<a href="#pobochnye-effekty">Побочные эффекты</a>
						</li>
						<li>
							<a href="#vzaimodeystvie">Взаимодействие</a>
						</li>
						<li>
							<a href="#osobye-ukazaniya">Особые указания</a>
						</li>
						<li>
							<a href="#forma-vypuska">Форма выпуска</a>
						</li>
						<li>
							<a href="#srok-godnosti">Срок годности</a>
						</li>
						<li>
							<a href="#usloviya-hraneniya">Условия хранения</a>
						</li>
						<li>
							<a href="#usloviya-otpuska">Условия отпуска</a>
						</li>
						<li>
							<a href="#informaciya-o-proizvoditele">Информация о производителе</a>
						</li>
					</ul>
					<div className="nav-content-title nav-content-title-cross" onClick={() => {setSecondaryNavOpened(!secondaryNavOpened)}}> Содержание</div>
				</nav>

				<div className="home-container">
					<div className="new-disclaimer"> Информация в статье не&nbsp;заменяет консультацию врача</div>
				</div>

				<div className="page-content-wrapper">
					<div className="container container-instruction page-content">
						<h2 onClick={() => changeStatus(1)} className={`h2 h2-instruction${openedQuestions.includes(1) ? " h2-instruction-inversion" : ""}`} id="obshchaya-informaciya">Общая информация</h2>
						<p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
							<strong>Состав:</strong>&nbsp;1 мл раствора содержит 100 мг повидон-йода (что соответствует 10 мг активного йода), вспомогательные вещества: глицерол, ноноксинол 9, лимонная кислота, безводная, натрия гидрофосфат (динатрия гидрофосфат), натрия гидроксид, вода очищенная.
						</p>
						<p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
							<strong>Описание:</strong>&nbsp;раствор темно-коричневого цвета с запахом йода.
						</p>
						<p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
							<strong>Фармакотерапевтическая группа:</strong>&nbsp;Антисептическое средство.
						</p>
						<p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
							<strong>Код АТХ:</strong>&nbsp;D08AG02
						</p>

						<h2 onClick={() => changeStatus(2)} className={`h2 h2-instruction${openedQuestions.includes(2) ? " h2-instruction-inversion" : ""}`} id="farmakologicheskoe-deystvie">Фармакологическое действие</h2>
						<p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>
							Антисептическое и дезинфицирующее средство. Высвобождаясь из комплекса с поливинилпирролидоном при контакте с кожей и слизистыми, йод образует с белками клетки бактерий йодамины, коагулирует их и вызывает гибель микроорганизмов. Оказывает быстрое бактерицидное действие на грамположительные и грамотрицательные бактерии (за исключением M.tuberculosis). Эффективен в отношении грибов, вирусов, простейших.
						</p>
						<h3 className="h3" style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>Фармакокинетика:</h3>
						<p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>При местном применении почти не происходит реабсорбции йода.</p>

						<h2 onClick={() => changeStatus(3)} className={`h2 h2-instruction${openedQuestions.includes(3) ? " h2-instruction-inversion" : ""}`} id="pokazaniya">Показания</h2>
						<ul className="wp-block-list" style={openedQuestions.includes(3) ? {display: 'block'} : {display: 'none'}}>
							<li>Лечение и профилактика раневых инфекций в хирургии, травматологии, комбустиологии, стоматологии.</li>
							<li>Лечение бактериальных, грибковых и вирусных инфекций кожи, профилактика суперинфекции в дерматологической практике.</li>
							<li>Обработка пролежней, трофических язв, диабетической стопы.</li>
							<li>Дезинфекция кожи и слизистых пациентов при подготовке к оперативным вмешательствам, инвазивным исследованиям (пункции, биопсии, инъекции и т.д.).</li>
							<li>Дезинфекция кожи вокруг дренажей, катетеров, зондов.</li>
							<li>Дезинфекция полости рта при стоматологических операциях.</li>
							<li>Дезинфекция родовых путей, при проведении «малых» гинекологических операций (искусственное прерывание беременности, введение внутриматочной спирали (ВМС), коагуляция эрозии и полипа и т.д.).</li>
						</ul>

						<h2 onClick={() => changeStatus(4)} className={`h2 h2-instruction${openedQuestions.includes(4) ? " h2-instruction-inversion" : ""}`} id="protivopokazaniya">Противопоказания</h2>
						<div className="list-base" style={openedQuestions.includes(4) ? {display: 'block'} : {display: 'none'}}>
							<p></p>
							<ul>
								<li>Повышенная чувствительность к йоду и другим составляющим препарата.</li>
								<li>Нарушение функции щитовидной железы (гипертиреоз) (см.раздел «Особые указания»).</li>
								<li>Аденома щитовидной железы.</li>
								<li>Герпетиформный дерматит Дюринга.</li>
								<li>Одновременное применение радиоактивного йода.</li>
								<li>Недоношенные и новорожденные дети.</li>
							</ul>
							<p></p>
						</div>
						<div className="green" style={openedQuestions.includes(4) ? {display: 'block'} : {display: 'none'}}>
							<p>
								<strong>С осторожностью: </strong>
							</p>
							<p>беременность и период кормления грудью, хроническая почечная недостаточность.</p>
							<p>
								Применение <strong>Бетадина не рекомендуется с 3-го месяца беременности и во время лактации</strong>.
							</p>
							<p>
								При необходимости в этих случаях лечение возможно <strong>под индивидуальным медицинским контролем</strong>.
							</p>
						</div>

						<h2 onClick={() => changeStatus(5)} className={`h2 h2-instruction${openedQuestions.includes(5) ? " h2-instruction-inversion" : ""}`} id="rezhim-dozirovaniya-i-sposob-primeneniya">Режим дозирования и способ применения</h2>
						<p style={openedQuestions.includes(5) ? {display: 'block'} : {display: 'none'}}>Для обработки кожи и слизистых применяют в неразбавленном виде для смазывания, промывания или в качестве влажного компресса.</p>
						<p style={openedQuestions.includes(5) ? {display: 'block'} : {display: 'none'}}>Для применения в дренажных системах 10% раствор разбавляют от 10 до 100 раз. Раствор приготавливают непосредственно перед применением, разбавленные растворы не хранят.</p>

						<h2 onClick={() => changeStatus(6)} className={`h2 h2-instruction${openedQuestions.includes(6) ? " h2-instruction-inversion" : ""}`} id="pobochnye-effekty">Побочные эффекты</h2>
						<p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>При частом применении на большой площади раненой поверхности и слизистых оболочках, может произойти системная реабсорбция йода, что может отразиться на тестах функциональной активности щитовидной железы.</p>
						<p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>Реакции повышенной чувствительности к препарату, возможно проявление аллергической реакции (гиперемия, жжение, зуд, отек, боль), что требует отмены препарата.</p>

						<h2 onClick={() => changeStatus(7)} className={`h2 h2-instruction${openedQuestions.includes(7) ? " h2-instruction-inversion" : ""}`} id="vzaimodeystvie">Взаимодействие</h2>
						<p style={openedQuestions.includes(7) ? {display: 'block'} : {display: 'none'}}>Несовместим с другими дезинфицирующими и антисептическими средствами, особенно содержащими щелочи, ферменты и ртуть.</p>
						<p style={openedQuestions.includes(7) ? {display: 'block'} : {display: 'none'}}>В присутствии крови бактерицидное действие может уменьшаться, однако при увеличении концентрации раствора, бактерицидная активность может быть увеличена.</p>

						<h2 onClick={() => changeStatus(8)} className={`h2 h2-instruction${openedQuestions.includes(8) ? " h2-instruction-inversion" : ""}`} id="osobye-ukazaniya">Особые указания</h2>
						<ul className="wp-block-list" style={openedQuestions.includes(8) ? {display: 'block'} : {display: 'none'}}>
							<li>При нарушениях функции щитовидной железы применение препарата возможно только под строгим наблюдением врача.</li>
							<li>Применение препарата у новорожденных детей возможно только в случае необходимости, после исследования функции щитовидной железы.</li>
							<li>Следует соблюдать осторожность при регулярном применении <br />на поврежденной коже у больных с хронической почечной недостаточностью.</li>
							<li>Не нагревать перед употреблением.</li>
							<li>В месте применения образуется окрашенная пленка, сохраняющаяся <br />до высвобождения всего количества активного йода, что означает прекращение действия препарата.</li>
							<li>Окраска на коже и тканях легко смывается водой.</li>
							<li>Не использовать при укусах насекомых, домашних и диких животных.</li>
						</ul>

						<h2 onClick={() => changeStatus(9)} className={`h2 h2-instruction${openedQuestions.includes(9) ? " h2-instruction-inversion" : ""}`} id="forma-vypuska">Форма выпуска</h2>
						<p style={openedQuestions.includes(9) ? {display: 'block'} : {display: 'none'}}>
							По <strong>30, 120 и 1000</strong> мл препарата во <strong>флакон из полиэтилена зеленого цвета</strong>, снабженный капельницей из бесцветного полиэтилена и навинчивающейся пробкой из белого пропилена с контролем первого вскрытия.
						</p>
						<p style={openedQuestions.includes(9) ? {display: 'block'} : {display: 'none'}}>
							Флаконы по <strong>30 мл</strong> и <strong>120 мл</strong> помещаются в картонную пачку вместе<br />с инструкцией по применению.
						</p>
						<p style={openedQuestions.includes(9) ? {display: 'block'} : {display: 'none'}}>
							На флакон по <strong>1000 мл</strong> наклеивается две этикетки и прикрепляется инструкция, флакон в картонную пачку не вкладывается.
						</p>

						<h2 onClick={() => changeStatus(10)} className={`h2 h2-instruction${openedQuestions.includes(10) ? " h2-instruction-inversion" : ""}`} id="srok-godnosti">Срок годности</h2>
						<p style={openedQuestions.includes(10) ? {display: 'block'} : {display: 'none'}}><strong>3 года. </strong></p>
						<p style={openedQuestions.includes(10) ? {display: 'block'} : {display: 'none'}}>Открытый флакон хранить не более 3 месяцев.</p>
						<p style={openedQuestions.includes(10) ? {display: 'block'} : {display: 'none'}}>Не использовать после истечения срока годности указанного на упаковке.</p>

						<h2 onClick={() => changeStatus(11)} className={`h2 h2-instruction${openedQuestions.includes(11) ? " h2-instruction-inversion" : ""}`} id="usloviya-hraneniya">Условия хранения</h2>
						<p style={openedQuestions.includes(11) ? {display: 'block'} : {display: 'none'}}>При температуре <strong>не выше 25 °С</strong>.</p>
						<p style={openedQuestions.includes(11) ? {display: 'block'} : {display: 'none'}}>Хранить в недоступном для детей месте.</p>

						<h2 onClick={() => changeStatus(12)} className={`h2 h2-instruction${openedQuestions.includes(12) ? " h2-instruction-inversion" : ""}`} id="usloviya-otpuska">Условия отпуска</h2>
						<p style={openedQuestions.includes(12) ? {display: 'block'} : {display: 'none'}}>Отпускают без рецепта</p>

						<h2 onClick={() => changeStatus(13)} className={`h2 h2-instruction${openedQuestions.includes(13) ? " h2-instruction-inversion" : ""}`} id="informaciya-o-proizvoditele">Информация о производителе</h2>
						<h3 className="h3" style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>Держатель регистрационного удостоверения</h3>
						<p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>ЗАО <strong>«Фармацевтический завод ЭГИС»</strong>, Венгрия</p>
						<p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>1106 Будапешт, ул. Керестури, 30-38 ВЕНГРИЯ</p>
						<p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}><strong>Телефон:</strong> (36-1)803-5555,</p>
						<p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}><strong>Факс:</strong> (36-1)803-5529</p>
						<h3 className="h3" style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>Производитель</h3>
						<p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>ЗАО «<strong>Фармацевтический завод ЭГИС»</strong>, Венгрия</p>
						<p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>9900, Керменд, ул. Матяш кирай, 65, Венгрия (все стадии производства)</p>
						<p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>ПО ЛИЦЕНЗИИ МУНДИФАРМА А.О., БАЗЕЛЬ, ШВЕЙЦАРИЯ</p>
						<h3 className="h3" style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>Претензии потребителей следует направлять по адресу:</h3>
						<p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>ООО <strong>«ЭГИС-РУС»</strong>, Россия</p>
						<p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>121552, г. Москва, ул. Ярцевская, д. 19, блок B, этаж 13, телефон: (495) 363-39-66</p>
					</div>
				</div>
			</article>
		</main>
	)
}

export default RastvorInstruktsiyaPage

