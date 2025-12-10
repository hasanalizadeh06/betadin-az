"use client"
import React, { useEffect, useState } from 'react'
import '../../styles/template.css'

const MazInstruktsiya: React.FC = () => {
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
                  <span property="name">Бетадин мазь: инструкция по применению</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title page-header-title-instruction">
                  <h1 className="page-header-title-text">Бетадин® мазь: инструкция по применению</h1>
                <picture>
                    <source srcSet="/instrukcziya-betadin-maz-2-752x634.webp" type="image/webp" />
                    <img
                        decoding="async"
                        height={112}
                        width={115}
                        src="/instrukcziya-betadin-maz-2-752x634.webp"
                        alt="картинка у заголовка"
                    />
                </picture>
                </div>

                <div className="page-header-body page-header-body-instruction">
                  <p>
                    <strong>Регистрационный номер:</strong> ЛП-№(002552)-(РГ-RU)
                    <br />
                    <strong>Торговое название:</strong> БЕТАДИН<sup>®</sup>
                    <br />
                    <strong>МНН:</strong> повидон-йод
                    <br />
                    <strong>Лекарственная форма:</strong> мазь для наружного применения 10%
                  </p>
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="/instrukcziya-betadin-maz.pdf">
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
                      src="/instrukcziya-betadin-maz-2-752x634.jpg"
                      alt="инструкция бетадин мазь"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <nav className={`nav-content`}>
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
              <div className="nav-content-title nav-content-title-cross"> Содержание</div>
            </nav>
          </div>
        </div>

				<nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${navOpened ? " nav-content__open" : ""}`}>
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
          <div className="nav-content-title nav-content-title-cross" onClick={() => {setNavOpened(!navOpened)}}> Содержание</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer"> Информация в статье не&nbsp;заменяет консультацию врача</div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-instruction page-content">
            <h2 onClick={() => changeStatus(1)} className={`h2 h2-instruction${openedQuestions.includes(1) ? " h2-instruction-inversion" : ""}`} id="obshchaya-informaciya">Общая информация</h2>
            <div className="exlude-turbo" style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
              <picture className="banner-betadin banner-circle">
                <img decoding="async" height={505} width={503} src="/circle-503x505.jpg" alt="Декоративные элементы" />
              </picture>
            </div>
            <p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
              <strong>Состав:</strong> в 1 г мази содержится 100 мг действующего вещества – повидона йода (что соответствует 10,25 мг активного йода), а также вспомогательные вещества: натрия гидрокарбонат, макрогол 400, макрогол 4000, макрогол 1000, макрогол 1500, вода очищенная.
            </p>
            <p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
              <strong>Описание:</strong> Гомогенная мазь коричневого цвета со слабым запахом йода.
            </p>
            <p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
              <strong>Фармакотерапевтическая группа:</strong> Антисептическое средство
            </p>
            <p style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
              <strong>Код АТХ:</strong> D08AG02
            </p>

            <h2 onClick={() => changeStatus(2)} className={`h2 h2-instruction${openedQuestions.includes(2) ? " h2-instruction-inversion" : ""}`} id="farmakologicheskoe-deystvie">Фармакологическое действие</h2>
            <p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>
              Антисептическое и дезинфицирующее средство. Высвобождаясь из комплекса с поливинилпирролидоном при контакте с кожей и слизистыми, йод образует с белками клетки бактерий йодамины, коагулирует их и вызывает гибель микроорганизмов. Оказывает быстрое бактерицидное действие на грамположительные и грамотрицательные бактерии (за исключением M.tuberculosis). Эффективен в отношении грибов, вирусов, простейших.
            </p>
            <h3 className="h3" style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>Фармакокинетика:</h3>
            <p style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}>При местном применении почти не происходит реабсорбции йода.</p>

            <h2 onClick={() => changeStatus(3)} className={`h2 h2-instruction${openedQuestions.includes(3) ? " h2-instruction-inversion" : ""}`} id="pokazaniya">Показания</h2>
            <ul className="wp-block-list" style={openedQuestions.includes(3) ? {display: 'block'} : {display: 'none'}}>
              <li>Ссадины</li>
              <li>Раны</li>
              <li>Бактериальные и грибковые инфекции кожи</li>
              <li>Ожоги</li>
              <li>Трофические язвы</li>
              <li>Пролежни</li>
              <li>Инфекционные дерматиты</li>
            </ul>

            <h2 onClick={() => changeStatus(4)} className={`h2 h2-instruction${openedQuestions.includes(4) ? " h2-instruction-inversion" : ""}`} id="protivopokazaniya">Противопоказания</h2>
            <div className="list-base" style={openedQuestions.includes(4) ? {display: 'block'} : {display: 'none'}}>
              <ul>
                <li>Повышенная чувствительность к йоду и другим составляющим препарата.</li>
                <li>Нарушение функции щитовидной железы (гипертиреоз) (см.раздел «Особые указания»).</li>
                <li>Аденома щитовидной железы.</li>
                <li>Герпетиформный дерматит Дюринга.</li>
                <li>Одновременное применение радиоактивного йода.</li>
                <li>Недоношенные и новорожденные дети.</li>
              </ul>
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
            <p style={openedQuestions.includes(5) ? {display: 'block'} : {display: 'none'}}>Наружно, на пораженную поверхность мазь наносят тонким слоем 2-3 раза в сутки, можно использовать под окклюзионные повязки.</p>

            <h2 onClick={() => changeStatus(6)} className={`h2 h2-instruction${openedQuestions.includes(6) ? " h2-instruction-inversion" : ""}`} id="pobochnye-effekty">Побочные эффекты</h2>
            <p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>При частом применении на большой площади раневой поверхности и слизистых оболочках, может произойти системная реабсорбция йода, что может отразиться на тестах функциональной активности щитовидной железы.</p>
            <p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>Реакции повышенной чувствительности к препарату, возможно проявление аллергической реакции (гиперемия, жжение, зуд, отек, боль), что требует отмены препарата.</p>

            <h2 onClick={() => changeStatus(7)} className={`h2 h2-instruction${openedQuestions.includes(7) ? " h2-instruction-inversion" : ""}`} id="vzaimodeystvie">Взаимодействие</h2>
            <p style={openedQuestions.includes(7) ? {display: 'block'} : {display: 'none'}}>Несовместим с другими дезинфицирующими и антисептическими средствами, особенно содержащими щелочи, ферменты и ртуть.</p>
            <p style={openedQuestions.includes(7) ? {display: 'block'} : {display: 'none'}}>При присутствии крови бактерицидное действие может уменьшаться, однако при увеличении концентрации препарата, бактерицидная активность может быть увеличена.</p>

            <h2 onClick={() => changeStatus(8)} className={`h2 h2-instruction${openedQuestions.includes(8) ? " h2-instruction-inversion" : ""}`} id="osobye-ukazaniya">Особые указания</h2>
            <ul className="wp-block-list" style={openedQuestions.includes(8) ? {display: 'block'} : {display: 'none'}}>
              <li>При нарушениях функции щитовидной железы применение препарата возможно только под строгим наблюдением врача.</li>
              <li>Применение препарата у новорожденных детей возможно только в случае необходимости, после исследования функции щитовидной железы.</li>
              <li>Следует соблюдать осторожность при регулярном применении <br />на поврежденной коже у больных с хронической почечной недостаточностью.</li>
              <li>В месте применения образуется окрашенная пленка, сохраняющаяся <br />до высвобождения всего количества активного йода, ее исчезновение означает прекращение действия препарата.</li>
              <li>Окраска на коже и тканях легко смывается водой.</li>
              <li>Не использовать при укусах насекомых, домашних и диких животных.</li>
              <li>Избегать попадания препарата в глаза.</li>
            </ul>

            <h2 onClick={() => changeStatus(9)} className={`h2 h2-instruction${openedQuestions.includes(9) ? " h2-instruction-inversion" : ""}`} id="forma-vypuska">Форма выпуска</h2>
            <p style={openedQuestions.includes(9) ? {display: 'block'} : {display: 'none'}}>20 г мази помещают в алюминиевую литографированную тубу с белым завинчивающимся колпачком из полиэтилена. 1 тубу вместе с инструкцией по применению упаковывают в картонную пачку.</p>

            <h2 onClick={() => changeStatus(10)} className={`h2 h2-instruction${openedQuestions.includes(10) ? " h2-instruction-inversion" : ""}`} id="srok-godnosti">Срок годности</h2>
            <p style={openedQuestions.includes(10) ? {display: 'block'} : {display: 'none'}}><strong>3 года. </strong></p>
            <p style={openedQuestions.includes(10) ? {display: 'block'} : {display: 'none'}}>После первого вскрытия хранить не более 2 лет. </p>
            <p style={openedQuestions.includes(10) ? {display: 'block'} : {display: 'none'}}>Не использовать после истечения срока годности.</p>

            <h2 onClick={() => changeStatus(11)} className={`h2 h2-instruction${openedQuestions.includes(11) ? " h2-instruction-inversion" : ""}`} id="usloviya-hraneniya">Условия хранения</h2>
            <p style={openedQuestions.includes(11) ? {display: 'block'} : {display: 'none'}}>Хранить при температуре от 15 до 25°С, в недоступном для детей месте.</p>

            <h2 onClick={() => changeStatus(12)} className={`h2 h2-instruction${openedQuestions.includes(12) ? " h2-instruction-inversion" : ""}`} id="usloviya-otpuska">Условия отпуска из аптек</h2>
            <p style={openedQuestions.includes(12) ? {display: 'block'} : {display: 'none'}}>Без рецепта.</p>

            <h2 onClick={() => changeStatus(13)} className={`h2 h2-instruction${openedQuestions.includes(13) ? " h2-instruction-inversion" : ""}`} id="informaciya-o-proizvoditele">Информация о производителе</h2>
            <div style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}}>
              <h3 className="h3">Держатель регистрационного удостоверения</h3>
              <p>ЗАО «<strong>Фармацевтический завод ЭГИС</strong>», Венгрия</p>
              <p>1106 Будапешт, ул. Керестури, 30-38 ВЕНГРИЯ</p>
              <p><strong>Телефон:</strong> (36-1)803-5555,</p>
              <p><strong>Факс:</strong> (36-1)803-5529</p>
              <h3 className="h3">Производитель</h3>
              <p>ЗАО «<strong>Фармацевтический завод ЭГИС</strong>», Венгрия</p>
              <p>9900, Керменд, ул. Матяш кирай, 65, Венгрия (все стадии производства)</p>
              <p>ПО ЛИЦЕНЗИИ МУНДИФАРМА А.О., БАЗЕЛЬ, ШВЕЙЦАРИЯ</p>
              <h3 className="h3">Организация, принимающая претензии потребителей:</h3>
              <p>ООО «<strong>ЭГИС-РУС</strong>», Россия</p>
              <p>121552, г. Москва, ул. Ярцевская, д. 19, блок B, этаж 13, телефон: (495) 363-39-66</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

export default MazInstruktsiya
