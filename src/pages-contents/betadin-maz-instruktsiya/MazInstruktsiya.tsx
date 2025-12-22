"use client"
import React, { useEffect, useState } from 'react'
import '../../styles/template.css'
import { useTranslations } from 'next-intl'

const MazInstruktsiya: React.FC = () => {
  const t = useTranslations('MazInstruktsiyaPage')
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
      const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false)
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
                    <span property="name" dangerouslySetInnerHTML={{ __html: t.raw('breadcrumb.home') }} />
                  </a>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name" dangerouslySetInnerHTML={{ __html: t.raw('breadcrumb.current') }} />
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title page-header-title-instruction">
                  <h1 className="page-header-title-text"><span dangerouslySetInnerHTML={{ __html: t.raw('header.title') }} /></h1>
                <picture>
                    <source srcSet="/icon-230x224.webp" type="image/webp" />
                    <img
                        decoding="async"
                        height={112}
                        width={115}
                        src="/icon-230x224.webp"
                        alt={t.raw('header.imgAlt')}
                    />
                </picture>
                </div>

                <div className="page-header-body page-header-body-instruction">
                  <div dangerouslySetInnerHTML={{ __html: t.raw('header.info') }} />
                </div>

                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="/instrukcziya-betadin-maz.pdf">
                      <span dangerouslySetInnerHTML={{ __html: t.raw('header.download') }} />
                    </a>
                  </li>
                  <li>
                    <a href="#pokazaniya"><span dangerouslySetInnerHTML={{ __html: t.raw('header.anchors.pokazaniya') }} /></a>
                  </li>
                  <li>
                    <a href="#protivopokazaniya"><span dangerouslySetInnerHTML={{ __html: t.raw('header.anchors.protivopokazaniya') }} /></a>
                  </li>
                  <li>
                    <a href="#rezhim-dozirovaniya-i-sposob-primeneniya"><span dangerouslySetInnerHTML={{ __html: t.raw('header.anchors.doz') }} /></a>
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
                      src="/instrukcziya-betadin-maz-2-752x634.webp"
                      alt="инструкция бетадин мазь"
                    />
                  </picture>
                </div>
              </div>
            </div>

						<nav className={`nav-content${secondaryNavOpened ? " nav-content__open" : ""}`}>
              <ul dangerouslySetInnerHTML={{ __html: t.raw('nav.contentList') }} />
              <div className="nav-content-title nav-content-title-cross" onClick={() => {setSecondaryNavOpened(!secondaryNavOpened)}}  dangerouslySetInnerHTML={{ __html: t.raw('nav.contentTitle') }} />
            </nav>
          </div>
        </div>

				<nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${navOpened ? " nav-content__open" : ""}`}>
          <ul>
            <li>
              <a href="#obshchaya-informaciya"><span dangerouslySetInnerHTML={{ __html: t.raw('info.title') }} /></a>
            </li>
            <li>
              <a href="#farmakologicheskoe-deystvie"><span dangerouslySetInnerHTML={{ __html: t.raw('pharm.title') }} /></a>
            </li>
            <li>
              <a href="#pokazaniya"><span dangerouslySetInnerHTML={{ __html: t.raw('indications.title') }} /></a>
            </li>
            <li>
              <a href="#protivopokazaniya"><span dangerouslySetInnerHTML={{ __html: t.raw('contra.title') }} /></a>
            </li>
            <li>
              <a href="#rezhim-dozirovaniya-i-sposob-primeneniya"><span dangerouslySetInnerHTML={{ __html: t.raw('dosage.title') }} /></a>
            </li>
            <li>
              <a href="#pobochnye-effekty"><span dangerouslySetInnerHTML={{ __html: t.raw('side.title') }} /></a>
            </li>
            <li>
              <a href="#vzaimodeystvie"><span dangerouslySetInnerHTML={{ __html: t.raw('interaction.title') }} /></a>
            </li>
            <li>
              <a href="#osobye-ukazaniya"><span dangerouslySetInnerHTML={{ __html: t.raw('special.title') }} /></a>
            </li>
            <li>
              <a href="#forma-vypuska"><span dangerouslySetInnerHTML={{ __html: t.raw('release.title') }} /></a>
            </li>
            <li>
              <a href="#srok-godnosti"><span dangerouslySetInnerHTML={{ __html: t.raw('expiry.title') }} /></a>
            </li>
            <li>
              <a href="#usloviya-hraneniya"><span dangerouslySetInnerHTML={{ __html: t.raw('storage.title') }} /></a>
            </li>
            <li>
              <a href="#usloviya-otpuska"><span dangerouslySetInnerHTML={{ __html: t.raw('releasecond.title') }} /></a>
            </li>
            <li>
              <a href="#informaciya-o-proizvoditele"><span dangerouslySetInnerHTML={{ __html: t.raw('manufacturer.title') }} /></a>
            </li>
          </ul>
          <div className="nav-content-title nav-content-title-cross" onClick={() => {setNavOpened(!navOpened)}}> {t.raw('nav.contentTitle')}</div>
        </nav>

        <div className="home-container">
          <div className="new-disclaimer"><span dangerouslySetInnerHTML={{ __html: t.raw('disclaimer') }} /></div>
        </div>

        <div className="page-content-wrapper">
          <div className="container container-instruction page-content">
            <h2 onClick={() => changeStatus(1)} className={`h2 h2-instruction${openedQuestions.includes(1) ? " h2-instruction-inversion" : ""}`} id="obshchaya-informaciya"><span dangerouslySetInnerHTML={{ __html: t.raw('info.title') }} /></h2>
            <div className="exlude-turbo" style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
              <picture className="banner-betadin banner-circle">
                <img decoding="async" height={505} width={503} src="/circle-503x505.jpg" alt="Декоративные элементы" />
              </picture>
            </div>
            <div style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('info.composition') }} />
            <div style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('info.description') }} />
            <div style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('info.group') }} />
            <div style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('info.atx') }} />

            <h2 onClick={() => changeStatus(2)} className={`h2 h2-instruction${openedQuestions.includes(2) ? " h2-instruction-inversion" : ""}`} id="farmakologicheskoe-deystvie"><span dangerouslySetInnerHTML={{ __html: t.raw('pharm.title') }} /></h2>
            <div style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('pharm.desc') }} />
            <h3 className="h3" style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}}><span dangerouslySetInnerHTML={{ __html: t.raw('pharm.kineticsTitle') }} /></h3>
            <div style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('pharm.kinetics') }} />

            <h2 onClick={() => changeStatus(3)} className={`h2 h2-instruction${openedQuestions.includes(3) ? " h2-instruction-inversion" : ""}`} id="pokazaniya"><span dangerouslySetInnerHTML={{ __html: t.raw('indications.title') }} /></h2>
            <div style={openedQuestions.includes(3) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('indications.list') }} />

            <h2 onClick={() => changeStatus(4)} className={`h2 h2-instruction${openedQuestions.includes(4) ? " h2-instruction-inversion" : ""}`} id="protivopokazaniya"><span dangerouslySetInnerHTML={{ __html: t.raw('contra.title') }} /></h2>
            <div className="list-base" style={openedQuestions.includes(4) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('contra.list') }} />
            <div className="green" style={openedQuestions.includes(4) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('contra.caution') }} />

            <h2 onClick={() => changeStatus(5)} className={`h2 h2-instruction${openedQuestions.includes(5) ? " h2-instruction-inversion" : ""}`} id="rezhim-dozirovaniya-i-sposob-primeneniya"><span dangerouslySetInnerHTML={{ __html: t.raw('dosage.title') }} /></h2>
            <div style={openedQuestions.includes(5) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('dosage.desc') }} />

            <h2 onClick={() => changeStatus(6)} className={`h2 h2-instruction${openedQuestions.includes(6) ? " h2-instruction-inversion" : ""}`} id="pobochnye-effekty"><span dangerouslySetInnerHTML={{ __html: t.raw('side.title') }} /></h2>
            <div style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('side.desc') }} />

            <h2 onClick={() => changeStatus(7)} className={`h2 h2-instruction${openedQuestions.includes(7) ? " h2-instruction-inversion" : ""}`} id="vzaimodeystvie"><span dangerouslySetInnerHTML={{ __html: t.raw('interaction.title') }} /></h2>
            <div style={openedQuestions.includes(7) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('interaction.desc') }} />

            <h2 onClick={() => changeStatus(8)} className={`h2 h2-instruction${openedQuestions.includes(8) ? " h2-instruction-inversion" : ""}`} id="osobye-ukazaniya"><span dangerouslySetInnerHTML={{ __html: t.raw('special.title') }} /></h2>
            <div style={openedQuestions.includes(8) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('special.list') }} />

            <h2 onClick={() => changeStatus(9)} className={`h2 h2-instruction${openedQuestions.includes(9) ? " h2-instruction-inversion" : ""}`} id="forma-vypuska"><span dangerouslySetInnerHTML={{ __html: t.raw('release.title') }} /></h2>
            <div style={openedQuestions.includes(9) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('release.desc') }} />

            <h2 onClick={() => changeStatus(10)} className={`h2 h2-instruction${openedQuestions.includes(10) ? " h2-instruction-inversion" : ""}`} id="srok-godnosti"><span dangerouslySetInnerHTML={{ __html: t.raw('expiry.title') }} /></h2>
            <div style={openedQuestions.includes(10) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('expiry.desc') }} />

            <h2 onClick={() => changeStatus(11)} className={`h2 h2-instruction${openedQuestions.includes(11) ? " h2-instruction-inversion" : ""}`} id="usloviya-hraneniya"><span dangerouslySetInnerHTML={{ __html: t.raw('storage.title') }} /></h2>
            <div style={openedQuestions.includes(11) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('storage.desc') }} />

            <h2 onClick={() => changeStatus(12)} className={`h2 h2-instruction${openedQuestions.includes(12) ? " h2-instruction-inversion" : ""}`} id="usloviya-otpuska"><span dangerouslySetInnerHTML={{ __html: t.raw('releasecond.title') }} /></h2>
            <div style={openedQuestions.includes(12) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('releasecond.desc') }} />

            <h2 onClick={() => changeStatus(13)} className={`h2 h2-instruction${openedQuestions.includes(13) ? " h2-instruction-inversion" : ""}`} id="informaciya-o-proizvoditele"><span dangerouslySetInnerHTML={{ __html: t.raw('manufacturer.title') }} /></h2>
            <div style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('manufacturer.info') }} />
          </div>
        </div>
      </article>
    </main>
  )
}

export default MazInstruktsiya
