"use client"
import React, { JSX, useEffect, useState } from 'react'
import '../../styles/template.css'

export default function SvechiInstruktsiya(): JSX.Element {
    const [openedQuestions, setOpenedQuestions] = useState<number[]>([])
    const [navOpened, setNavOpened] = useState<boolean>(false)
  
    const changeStatus = (id:number) => {
      if(openedQuestions.includes(id)){
        setOpenedQuestions(openedQuestions.filter(questionId => questionId !== id))
      } else {
        setOpenedQuestions([...openedQuestions, id])
      }
    }

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
                  <span property="name">Бетадин свечи: инструкция по применению</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title page-header-title-instruction">
                  <h1 className="page-header-title-text">Бетадин® свечи: инструкция по применению</h1>
                  <picture>
                    <source srcSet="/instrukcziya-betadin-svechi-1-752x634.webp" type="image/webp" />
                    <img decoding="async" height={112} width={115} src="/instrukcziya-betadin-svechi-1-752x634.webp" alt="картинка у заголовка" />
                  </picture>
                </div>
                <div className="page-header-body page-header-body-instruction">
                  <p>
                    <strong>Регистрационный номер:</strong> ЛП-№(002589)-(РГ-RU)
                    <br />
                    <strong>Торговое название:</strong> БЕТАДИН<sup>®</sup>
                    <br />
                    <strong>МНН:</strong> повидон-йод
                    <br />
                    <strong>Лекарственная форма:</strong> суппозитории вагинальные
                  </p>
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a target="_blank" rel="noreferrer" href="/instrukcziya-betadin-svechi.pdf">Скачать инструкцию</a>
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
                    <source srcSet="/instrukcziya-betadin-svechi-1-752x634.webp" type="image/webp" />
                    <img fetchPriority="high" decoding="async" height={634} width={752} src="/instrukcziya-betadin-svechi-1-752x634.webp" alt="инструкция бетадин свечи" />
                  </picture>
                </div>
              </div>
            </div>

            <nav className="nav-content">
              <ul>
                <li><a href="#obshchaya-informaciya">Общая информация</a></li>
                <li><a href="#farmakologicheskoe-deystvie">Фармакологические свойства</a></li>
                <li><a href="#pokazaniya">Показания к применению</a></li>
                <li><a href="#protivopokazaniya">Противопоказания</a></li>
                <li><a href="#primenenie-pri-beremennosti">Применение при беременности и в период грудного вскармливания</a></li>
                <li><a href="#rezhim-dozirovaniya-i-sposob-primeneniya">Способ применения и дозы</a></li>
                <li><a href="#pobochnoe-deystvie">Побочное действие</a></li>
                <li><a href="#peredozirovka">Передозировка</a></li>
                <li><a href="#vzaimodeystvie-s-drugimi-lekarstvennymi-sredstvami">Взаимодействие</a></li>
                <li><a href="#osobye-ukazaniya">Особые указания</a></li>
                <li><a href="#vliyanie-na-sposobnost-upravlyat-transportnymi-sredstvami-mehanizmami">Влияние на способность управлять</a></li>
                <li><a href="#forma-vypuska">Форма выпуска</a></li>
                <li><a href="#srok-godnosti">Срок годности</a></li>
                <li><a href="#usloviya-hraneniya">Условия хранения</a></li>
                <li><a href="#usloviya-otpuska">Условия отпуска</a></li>
                <li><a href="#informaciya-o-proizvoditele">Информация о производителе</a></li>
              </ul>
              <div className="nav-content-title nav-content-title-cross"> Содержание</div>
            </nav>
          </div>
        </div>

				<nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${navOpened ? " nav-content__open" : ""}`}>
          <ul>
            <li><a href="#obshchaya-informaciya">Общая информация</a></li>
            <li><a href="#farmakologicheskoe-deystvie">Фармакологические свойства</a></li>
            <li><a href="#pokazaniya">Показания к применению</a></li>
            <li><a href="#protivopokazaniya">Противопоказания</a></li>
            <li><a href="#primenenie-pri-beremennosti">Применение при беременности и в период грудного вскармливания</a></li>
            <li><a href="#rezhim-dozirovaniya-i-sposob-primeneniya">Способ применения и дозы</a></li>
            <li><a href="#pobochnoe-deystvie">Побочное действие</a></li>
            <li><a href="#peredozirovka">Передозировка</a></li>
            <li><a href="#vzaimodeystvie-s-drugimi-lekarstvennymi-sredstvami">Взаимодействие</a></li>
            <li><a href="#osobye-ukazaniya">Особые указания</a></li>
            <li><a href="#vliyanie-na-sposobnost-upravlyat-transportnymi-sredstvami-mehanizmami">Влияние на способность управлять</a></li>
            <li><a href="#forma-vypuska">Форма выпуска</a></li>
            <li><a href="#srok-godnosti">Срок годности</a></li>
            <li><a href="#usloviya-hraneniya">Условия хранения</a></li>
            <li><a href="#usloviya-otpuska">Условия отпуска</a></li>
            <li><a href="#informaciya-o-proizvoditele">Информация о производителе</a></li>
          </ul>
					<div className="nav-content-title nav-content-title-cross" onClick={() => {setNavOpened(!navOpened)}}> Содержание</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer"> Информация в статье не&nbsp;заменяет консультацию врача</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <h2 onClick={() => changeStatus(1)} className={`h2 h2-instruction${openedQuestions.includes(1) ? " h2-instruction-inversion" : ""}`} id="obshchaya-informaciya">Общая информация</h2>
            <div className="exlude-turbo" style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
              <picture className="banner-betadin banner-circle">
                <source srcSet="/circle-503x505.webp" type="image/webp" />
                <img decoding="async" height={505} width={503} src="/circle-503x505.jpg" alt="Декоративные элементы" />
              </picture>
            </div>
            <p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}><strong>Состав:</strong> действующее вещество: 200 мг повидон-йода (соответствует 18 — 24 мг активного йода) в каждом вагинальном суппозитории. Вспомогательное вещество: макрогол 1000 2800 мг.</p>
            <p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}><strong>Описание:</strong> Торпедообразные гомогенные суппозитории темно-коричневого цвета.</p>
            <p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}><strong>Фармакотерапевтическая группа:</strong> Антисептическое средство</p>
            <p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}><strong>Код АТХ:</strong> G01AX11</p>

            <h2 onClick={() => changeStatus(2)} className={`h2 h2-instruction${openedQuestions.includes(2) ? " h2-instruction-inversion" : ""}`} id="farmakologicheskoe-deystvie">Фармакологические свойства</h2>
            <div style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>
            <h3 className="h3">Фармакодинамика:</h3>
            <p>Повидон-йод является комплексом йода и полимера поливинилпирролидона, который высвобождает йод в течение определенного времени после его применения. Элементарный йод (I2) обладает сильным гермицидным эффектом. В экспериментах in vitro он быстро уничтожает бактерии, вирусы, грибы и некоторые простейшие организмы. Механизм его действия следующий: свободный йод оказывает быстрый гермицидный эффект, а полимер является депо для йода. При контакте с кожей или слизистыми оболочками из полимера выделяется постоянно возрастающие количества йода. Йод реагирует с окисляемыми -SH и – OH группами аминокислот, входящих в состав ферментов и структурных белков микроорганизмов, инактивируя или разрушая эти белки, приводя к гибели микроорганизмов.</p>
            <p>Большинство микроорганизмов уничтожаются при воздействии in vitro менее чем за 1 минуту, причем основное разрушающее действие приходится на первые 15 — 30 секунд, при этом йод обесцвечивается. Поэтому интенсивность коричневого цвета является индикатором эффективности. Резистентность к препарату неизвестна.</p>
            <p>Антимикробный спектр действия: действующее вещество препарата суппозитории вагинальные Бетадин эффективно воздействует и уничтожает широкий круг микроорганизмов, таких как грамм-положительные и грамм-отрицательные бактерии (бактерицидный эффект), вирусы (вирулицидный эффект), грибы (фунгицидный эффект), некоторые простейшие (протозооцидный эффект) и споры (спороцидный эффект).</p>

            <h3 className="h3">Фармакокинетика:</h3>
            <p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}><strong>Всасывание</strong><br/>Нет данных о системной абсорбции.</p>
            <p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}><strong>Выведение</strong></p>
            <p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>Преимущественно почками.</p>
            <p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}><strong>Повидон</strong></p>
            <p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>Всасывание и тем более выведение повидона почками зависит от его молекулярного веса.</p>
            <p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>Поскольку его молекулярный вес находится в пределах 35000 — 50000, следует ожидать его задержку в организме.</p>
            </div>

            <h2 onClick={() => changeStatus(3)} className={`h2 h2-instruction${openedQuestions.includes(3) ? " h2-instruction-inversion" : ""}`} id="pokazaniya">Показания к применению</h2>
            <ul className="wp-block-list" style={openedQuestions.includes(3) ? {display: 'block'} : {display: 'none'}}>
              <li>Острый или хронический вагинит (смешанные неспецифические инфекции);</li>
              <li>бактериальный вагиноз (вызванный Gardnerella vaginalis);</li>
              <li>кандидоз;</li>
              <li>инфекция, вызванная Trichomonas vaginalis;</li>
              <li>инфекции влагалища после терапии антибиотиками или стероидными препаратами;</li>
              <li>профилактика перед хирургическими или диагностическими вмешательствами во влагалище.</li>
            </ul>

            <h2 onClick={() => changeStatus(4)} className={`h2 h2-instruction${openedQuestions.includes(4) ? " h2-instruction-inversion" : ""}`} id="protivopokazaniya">Противопоказания</h2>
            <div className="list-base" style={openedQuestions.includes(4) ? {display: 'block'} : {display: 'none'}}>
              <ul>
                <li>Повышенная чувствительность к повидон-йоду и другим компонентам препарата;</li>
                <li>нарушение функции щитовидной железы (гипертиреоз) (см. раздел Особые указания);</li>
                <li>другие острые заболевания щитовидной железы;</li>
                <li>герпетиформный дерматит Дюринга;</li>
                <li>перед или во время применения радиоактивного йода для лечения карциномы щитовидной железы или сцинтиграфии;</li>
                <li>беременность и период кормления грудью;</li>
                <li>девушкам, не достигшим подросткового возраста, применение вагинальных суппозиториев Бетадин противопоказано.</li>
              </ul>
            </div>

            <h2 onClick={() => changeStatus(5)} className={`h2 h2-instruction${openedQuestions.includes(5) ? " h2-instruction-inversion" : ""}`} id="primenenie-pri-beremennosti">Применение при беременности и в период грудного вскармливания</h2>
            <p style={openedQuestions.includes(5) ? {display: 'block'} : {display: 'none'}}>Применение повидон-йода во время беременности и в период грудного вскармливания противопоказано, так как всосавшийся йод проходит через плаценту и выделяется в грудное молоко. Кроме того, плод и новорожденный имеют повышенную чувствительность к йоду. В грудном молоке концентрация йода выше, чем в сыворотке крови. Применение йода может вызвать у плода или новорожденного гипотиреоз с повышенной концентрацией тиреотропного гормона (ТТГ). Может возникнуть необходимость контроля функции щитовидной железы у ребенка. У детей следует предотвратить возможность случайного попадания препарата в рот или его проглатывания.</p>

            <p style={openedQuestions.includes(5) ? {display: 'block'} : {display: 'none'}}><strong>Фертильность</strong></p>
            <p style={openedQuestions.includes(5) ? {display: 'block'} : {display: 'none'}}>Суппозитории вагинальные могут обладать спермицидным действием, поэтому при планировании беременности их применение не рекомендуется.</p>

            <h2 onClick={() => changeStatus(6)} className={`h2 h2-instruction${openedQuestions.includes(6) ? " h2-instruction-inversion" : ""}`} id="rezhim-dozirovaniya-i-sposob-primeneniya">Способ применения и дозы</h2>
            <p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}><strong>Интравагинально (для введения во влагалище).</strong></p>
            <p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>Для максимального высвобождения действующего вещества и предотвращения развития местного раздражения рекомендуется смочить суппозиторий водой и вводить его глубоко во влагалище вечером перед сном. Если во время применения суппозитория вагинального начнется менструация, лечение следует продолжать без перерыва, на протяжении назначенного периода времени.</p>
            <p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>По 1 суппозиторию вводить глубоко во влагалище: при остром вагините 1 раз в сутки в течение 7 дней, в более тяжелых случаях или при недостаточном терапевтическом эффекте лечение можно продолжать на протяжении следующих 7 дней 1 раз в сутки. При устойчивых длительных инфекциях лечение может быть более длительным и суппозитории вагинальные можно применять 2 раза в день.</p>
            <p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>Для предоперационной профилактики осложнений инфекционного генеза в гинекологии препарат вводят интравагинально 2 раза в сутки (утром и вечером перед сном) в течение 1-7 дней.</p>
            <p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>Если после лечения улучшения не наступает или симптомы усугубляются или появляются новые симптомы, необходимо проконсультироваться с врачом. Применяйте препарат только согласно тем показаниям, согласно тому способу применения и в тех дозах, которые указаны в инструкции по применению.</p>

            <picture className="img-normal" style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>
              <source srcSet="/istockphoto-1341663000-2048x2048-2-3-650x150.webp" type="image/webp" />
              <img loading="lazy" decoding="async" height={150} width={650} src="/istockphoto-1341663000-2048x2048-2-3-650x150.png" alt="Способ применения и дозы бетадин свечи" />
            </picture>

            <div className="two-column" style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>
              <div className="column">
                <p><strong>Рис. 1</strong></p>
                <p>Отделите, один суппозиторий от ленты, разрывая по перфорации V-образного разреза.</p>
              </div>
              <div className="column">
                <p><strong>Рис. 2</strong></p>
                <p>Достаньте суппозиторий из блистера, одновременно потянув в противоположных направлениях оба конца фольги.</p>
              </div>
            </div>

            <h2 onClick={() => changeStatus(7)} className={`h2 h2-instruction${openedQuestions.includes(7) ? " h2-instruction-inversion" : ""}`} id="pobochnoe-deystvie">Побочное действие</h2>
            <p style={openedQuestions.includes(7) ? {display: 'block'} : {display: 'none'}}>Зуд, гиперемия в месте введения препарата, аллергические реакции.</p>
            <p style={openedQuestions.includes(7) ? {display: 'block'} : {display: 'none'}}>Если у Вас отмечаются побочные эффекты, указанные в инструкции, или они усугубляются, или Вы заметили любые другие побочные эффекты, не указанные в инструкции, сообщите об этом врачу.</p>

            <h2 onClick={() => changeStatus(8)} className={`h2 h2-instruction${openedQuestions.includes(8) ? " h2-instruction-inversion" : ""}`} id="peredozirovka">Передозировка</h2>
            <p style={openedQuestions.includes(8) ? {display: 'block'} : {display: 'none'}}>При применении препарата в соответствии с инструкцией по применению передозировка маловероятна. При чрезмерном применении возможна йодная интоксикация, для которой характерны следующие симптомы: металлический привкус во рту, повышенное слюноотделение, ощущение жжения или боли во рту или глотке, раздражение или отек глаз, кожные реакции, желудочно-кишечные расстройства и диарея, нарушение функции почек и анурия, недостаточность кровообращения, отек гортани со вторичной асфиксией, отек легких, метаболический ацидоз, гипернатриемия.</p>
            <p style={openedQuestions.includes(8) ? {display: 'block'} : {display: 'none'}}>Лечение: симптоматическая и поддерживающая терапия с особым вниманием к электролитному балансу, функции почек и щитовидной железы.</p>

            <h2 onClick={() => changeStatus(9)} className={`h2 h2-instruction${openedQuestions.includes(9) ? " h2-instruction-inversion" : ""}`} id="vzaimodeystvie-s-drugimi-lekarstvennymi-sredstvami">Взаимодействие с другими лекарственными средствами</h2>
            <p style={openedQuestions.includes(9) ? {display: 'block'} : {display: 'none'}}>Комплекс повидон-йод эффективен в диапазоне pH 2 — 7. Взаимодействие комплекса с белками и другими ненасыщенными органическими веществами снижает его эффективность.</p>
            <p style={openedQuestions.includes(9) ? {display: 'block'} : {display: 'none'}}>Не следует применять препарат с другими дезинфицирующими и антисептическими средствами, содержащими окислители, щелочи и катионные поверхностно-активные вещества. Если Вы применяете вышеперечисленные или другие лекарственные препараты (в том числе безрецептурные) перед применением препарата <strong>Бетадин<sup>®</sup></strong> проконсультируйтесь с врачом.<br/>Окислительное действие повидон-йода может привести к ложноположительным результатам различных диагностических проб (например, определение гемоглобина в кале или моче или глюкозы в моче).</p>

            <h2 onClick={() => changeStatus(10)} className={`h2 h2-instruction${openedQuestions.includes(10) ? " h2-instruction-inversion" : ""}`} id="osobye-ukazaniya">Особые указания</h2>
            <div className="list-base" style={openedQuestions.includes(10) ? {display: 'block'} : {display: 'none'}}>
              <ul>
                <li>При длительном применении препарата может развиться раздражение кожи, контактный дерматит или повышенная чувствительность. При появлении признаков местного раздражения и повышенной чувствительности применение препарата следует отменить.</li>
                <li>Нельзя нагревать препарат перед применением.</li>
                <li>У пациентов с заболеваниями щитовидной железы, например зобом, узловым зобом и другими неострыми заболеваниями щитовидной железы, введение значительного количества йода может вызвать гипертиреоз. У таких пациентов применение препарата Бетадин суппозитории вагинальные должно быть ограничено во времени. Если по окончании лечения развиваются признаки гипертиреоза, пациенткам рекомендуется контроль функции щитовидной железы.</li>
                <li>Препарат нельзя применять до и после сцинтиграфии, а также во время лечения карциномы щитовидной железы радиоактивным йодом (см. раздел Противопоказания).</li>
                <li>Особую осторожность следует соблюдать при регулярном применении препарата у пациентов с нарушением функции почек.</li>
                <li>Следует избегать регулярного применения препарата <strong>Бетадин<sup>®</sup></strong> суппозитории вагинальные пациенткам, получающим препараты лития.</li>
                <li>Рекомендуется соблюдать осторожность при введении вагинальных суппозиториев девственницам.</li>
                <li>Суппозитории обладают спермицидным действием, в связи с чем не рекомендуется их применение у женщин, планирующих беременность.</li>
                <li>Рекомендуется также на протяжении курса лечения использовать гигиенические прокладки.</li>
                <li>Окраска на коже и тканях смывается водой. После контакта с препаратом следует избегать его попадания в глаза.</li>
                <li><strong>Дети и подростки</strong><br/>Девочкам, не достигшим подросткового возраста, применение суппозиториев вагинальных <strong>Бетадин<sup>®</sup></strong> противопоказано.</li>
              </ul>
            </div>

            <h2 onClick={() => changeStatus(11)} className={`h2 h2-instruction${openedQuestions.includes(11) ? " h2-instruction-inversion" : ""}`} id="vliyanie-na-sposobnost-upravlyat-transportnymi-sredstvami-mehanizmami">Влияние на способность управлять транспортными средствами, механизмами</h2>
            <p style={openedQuestions.includes(11) ? {display: 'block'} : {display: 'none'}}>Препарат не влияет на способность управлять транспортом или заниматься другими потенциально опасными видами деятельности, требующими повышенной концентрации внимания и быстроты психомоторных реакций.</p>

            <h2 onClick={() => changeStatus(12)} className={`h2 h2-instruction${openedQuestions.includes(12) ? " h2-instruction-inversion" : ""}`} id="forma-vypuska">Форма выпуска</h2>
            <p style={openedQuestions.includes(12) ? {display: 'block'} : {display: 'none'}}>Суппозитории вагинальные 200 мг.</p>
            <p style={openedQuestions.includes(12) ? {display: 'block'} : {display: 'none'}}>По 7 вагинальных суппозиторов в блистере из ПВХ/ПЭ пленки.</p>
            <p style={openedQuestions.includes(12) ? {display: 'block'} : {display: 'none'}}>По 1 или 2 блистера в картонной пачке вместе с инструкцией по применению.</p>

            <h2 onClick={() => changeStatus(13)} className={`h2 h2-instruction${openedQuestions.includes(13) ? " h2-instruction-inversion" : ""}`} id="srok-godnosti">Срок годности</h2>
            <p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}><strong>5 лет. </strong></p>
            <p style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>Не применять после истечения срока годности. </p>

            <h2 onClick={() => changeStatus(14)} className={`h2 h2-instruction${openedQuestions.includes(14) ? " h2-instruction-inversion" : ""}`} id="usloviya-hraneniya">Условия хранения</h2>
            <p style={openedQuestions.includes(14) ? {display: 'block'} : {display: 'none'}}>При температуре <strong>от 5 до 15 °С.</strong></p>
            <p style={openedQuestions.includes(14) ? {display: 'block'} : {display: 'none'}}>В недоступном для детей месте.</p>

            <h2 onClick={() => changeStatus(15)} className={`h2 h2-instruction${openedQuestions.includes(15) ? " h2-instruction-inversion" : ""}`} id="usloviya-otpuska">Условия отпуска</h2>
            <p style={openedQuestions.includes(15) ? {display: 'block'} : {display: 'none'}}>Отпускают без рецепта.</p>

            <h2 onClick={() => changeStatus(16)} className={`h2 h2-instruction${openedQuestions.includes(16) ? " h2-instruction-inversion" : ""}`} id="informaciya-o-proizvoditele">Информация о производителе</h2>
            <div style={openedQuestions.includes(16) ? {display: 'block'} : {display: 'none'}}>
              <h3 className="h3">Держатель регистрационного удостоверения</h3>
              <p>ЗАО «<strong>Фармацевтический завод ЭГИС</strong>», Венгрия</p>
              <p>1106 Будапешт, ул. Керестури, 30-38 ВЕНГРИЯ</p>
              <p><strong>Телефон:</strong> (36-1)803-5555,</p>
              <p><strong>Факс:</strong> (36-1)803-5529</p>
              <h3 className="h3">Производитель</h3>
              <p>ЗАО «<strong>Фармацевтический завод ЭГИС</strong>», Венгрия</p>
              <p>9900, Керменд, ул. Матяш кирай, 65, Венгрия (все стадии производства)</p>
              <p>ПО ЛИЦЕНЗИИ МУНДИФАРМА А.О., БАЗЕЛЬ, ШВЕЙЦАРИЯ</p>
              <h3 className="h3">Организация, принимающая претензии от потребителей: </h3>
              <p>ООО «<strong>ЭГИС-РУС</strong>», Россия</p>
              <p>121552, г. Москва, ул. Ярцевская, д. 19, блок B, этаж 13, телефон: (495) 363-39-66</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
