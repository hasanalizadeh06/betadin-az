"use client"
import React, { JSX, useEffect, useState } from 'react'
import '../../styles/template.css'
import { useTranslations } from 'next-intl'

export default function SvechiInstruktsiya(): JSX.Element {
  const t = useTranslations('SvechiInstruktsiyaPage')
    const [openedQuestions, setOpenedQuestions] = useState<number[]>([])
    const [navOpened, setNavOpened] = useState<boolean>(false)
    const [secondaryNavOpened, setSecondaryNavOpened] = useState<boolean>(false)
  
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
                  <span property="name" dangerouslySetInnerHTML={{ __html: t.raw('breadcrumb.title') }} />
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>
            <div className="page-header">
              <div className="page-header-left">
                <div className="page-header-title page-header-title-instruction">
                  <h1 className="page-header-title-text" dangerouslySetInnerHTML={{ __html: t.raw('header.title') }} />
                  <picture>
                    <source srcSet="/icon-230x224.webp" type="image/webp" />
                    <img decoding="async" height={112} width={115} src="/icon-230x224.webp" alt="картинка у заголовка" />
                  </picture>
                </div>
                <div className="page-header-body page-header-body-instruction">
                  <p dangerouslySetInnerHTML={{ __html: t.raw('header.info') }} />
                </div>
                <ul className="page-header-anchors page-header-anchors-detail">
                  <li>
                    <a target="_blank" rel="noreferrer" href="/instrukcziya-betadin-svechi.pdf" dangerouslySetInnerHTML={{ __html: t.raw('header.download') }} />
                  </li>
                  <li>
                    <a href="#pokazaniya" dangerouslySetInnerHTML={{ __html: t.raw('header.anchors.indications') }} />
                  </li>
                  <li>
                    <a href="#protivopokazaniya" dangerouslySetInnerHTML={{ __html: t.raw('header.anchors.contraindications') }} />
                  </li>
                  <li>
                    <a href="#rezhim-dozirovaniya-i-sposob-primeneniya" dangerouslySetInnerHTML={{ __html: t.raw('header.anchors.dosage') }} />
                  </li>
                </ul>
              </div>
              <div className="page-header-right">
                <div className="page-header-img">
                  <picture>
                    <source srcSet="/instrukcziya-betadin-svechi-1-752x634.webp" type="image/webp" />
                    <img fetchPriority="high" decoding="async" height={634} width={752} src="/instrukcziya-betadin-svechi-1-752x634.webp" alt={t.raw('header.imgAlt')} />
                  </picture>
                </div>
              </div>
            </div>

						<nav className={`nav-content${secondaryNavOpened ? " nav-content__open" : ""}`}>
              <ul dangerouslySetInnerHTML={{ __html: t.raw('nav.contentList') }} />
              <div className="nav-content-title nav-content-title-cross" onClick={() => {setSecondaryNavOpened(!secondaryNavOpened)}} dangerouslySetInnerHTML={{ __html: t.raw('nav.contentTitle') }} />
            </nav>
          </div>
        </div>

				<nav className={`nav-content nav-content-fixed${navTitleHidden ? " nav-content-title-hidden" : ""}${navOpened ? " nav-content__open" : ""}`}>
          <ul dangerouslySetInnerHTML={{ __html: t.raw('nav.contentList') }} />
          <div className="nav-content-title nav-content-title-cross" onClick={() => {setNavOpened(!navOpened)}} dangerouslySetInnerHTML={{ __html: t.raw('nav.contentTitle') }} />
        </nav>

        <div className="home-container">
          <div className="new-disclaimer" dangerouslySetInnerHTML={{ __html: t.raw('disclaimer') }} />
        </div>

        <div className="page-content-wrapper">
          <div className="container container-middle page-content">
            <h2 onClick={() => changeStatus(1)} className={`h2 h2-instruction${openedQuestions.includes(1) ? " h2-instruction-inversion" : ""}`} id="obshchaya-informaciya" dangerouslySetInnerHTML={{ __html: t.raw('sections.generalInfo.title') }} />
            <div className="exlude-turbo" style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}}>
              <picture className="banner-betadin banner-circle">
                <source srcSet="/circle-503x505.webp" type="image/webp" />
                <img decoding="async" height={505} width={503} src="/circle-503x505.jpg" alt={t.raw('sections.generalInfo.bannerAlt')} />
              </picture>
            </div>
            <div style={openedQuestions.includes(1) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.generalInfo.content') }} />

            <h2 onClick={() => changeStatus(2)} className={`h2 h2-instruction${openedQuestions.includes(2) ? " h2-instruction-inversion" : ""}`} id="farmakologicheskoe-deystvie" dangerouslySetInnerHTML={{ __html: t.raw('sections.pharmacology.title') }} />
            <div style={openedQuestions.includes(2) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.pharmacology.content') }} />

            <h2 onClick={() => changeStatus(3)} className={`h2 h2-instruction${openedQuestions.includes(3) ? " h2-instruction-inversion" : ""}`} id="pokazaniya" dangerouslySetInnerHTML={{ __html: t.raw('sections.indications.title') }} />
            <div style={openedQuestions.includes(3) ? {display: 'block'} : {display: 'none'}}>
              <ul className="wp-block-list" dangerouslySetInnerHTML={{ __html: t.raw('sections.indications.content') }} />
            </div>

            <h2 onClick={() => changeStatus(4)} className={`h2 h2-instruction${openedQuestions.includes(4) ? " h2-instruction-inversion" : ""}`} id="protivopokazaniya" dangerouslySetInnerHTML={{ __html: t.raw('sections.contraindications.title') }} />
            <div style={openedQuestions.includes(4) ? {display: 'block'} : {display: 'none'}}>
              <div className="list-base">
                <ul dangerouslySetInnerHTML={{ __html: t.raw('sections.contraindications.content') }} />
              </div>
            </div>

            <h2 onClick={() => changeStatus(5)} className={`h2 h2-instruction${openedQuestions.includes(5) ? " h2-instruction-inversion" : ""}`} id="primenenie-pri-beremennosti" dangerouslySetInnerHTML={{ __html: t.raw('sections.pregnancy.title') }} />
            <div style={openedQuestions.includes(5) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.pregnancy.content') }} />

            <h2 onClick={() => changeStatus(6)} className={`h2 h2-instruction${openedQuestions.includes(6) ? " h2-instruction-inversion" : ""}`} id="rezhim-dozirovaniya-i-sposob-primeneniya" dangerouslySetInnerHTML={{ __html: t.raw('sections.dosage.title') }} />
            <p style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.dosage.content') }} />

            <picture className="img-normal" style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}}>
              <source srcSet="/istockphoto-1341663000-2048x2048-2-3-1300x300.webp" type="image/webp" />
              <img loading="lazy" decoding="async" height={150} width={650} src="/istockphoto-1341663000-2048x2048-2-3-1300x300.png" alt={t.raw('sections.dosage.imgAlt')} />
            </picture>

            <div className="two-column" style={openedQuestions.includes(6) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.dosage.instructions') }} />

            <h2 onClick={() => changeStatus(7)} className={`h2 h2-instruction${openedQuestions.includes(7) ? " h2-instruction-inversion" : ""}`} id="pobochnoe-deystvie" dangerouslySetInnerHTML={{ __html: t.raw('sections.sideEffects.title') }} />
            <div style={openedQuestions.includes(7) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.sideEffects.content') }} />

            <h2 onClick={() => changeStatus(8)} className={`h2 h2-instruction${openedQuestions.includes(8) ? " h2-instruction-inversion" : ""}`} id="peredozirovka" dangerouslySetInnerHTML={{ __html: t.raw('sections.overdose.title') }} />
            <div style={openedQuestions.includes(8) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.overdose.content') }} />

            <h2 onClick={() => changeStatus(9)} className={`h2 h2-instruction${openedQuestions.includes(9) ? " h2-instruction-inversion" : ""}`} id="vzaimodeystvie-s-drugimi-lekarstvennymi-sredstvami" dangerouslySetInnerHTML={{ __html: t.raw('sections.interactions.title') }} />
            <div style={openedQuestions.includes(9) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.interactions.content') }} />

            <h2 onClick={() => changeStatus(10)} className={`h2 h2-instruction${openedQuestions.includes(10) ? " h2-instruction-inversion" : ""}`} id="osobye-ukazaniya" dangerouslySetInnerHTML={{ __html: t.raw('sections.special.title') }} />
            <div style={openedQuestions.includes(10) ? {display: 'block'} : {display: 'none'}}>
              <div className="list-base">
                <ul dangerouslySetInnerHTML={{ __html: t.raw('sections.special.content') }} />
              </div>
            </div>

            <h2 onClick={() => changeStatus(11)} className={`h2 h2-instruction${openedQuestions.includes(11) ? " h2-instruction-inversion" : ""}`} id="vliyanie-na-sposobnost-upravlyat-transportnymi-sredstvami-mehanizmami" dangerouslySetInnerHTML={{ __html: t.raw('sections.driving.title') }} />
            <div style={openedQuestions.includes(11) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.driving.content') }} />

            <h2 onClick={() => changeStatus(12)} className={`h2 h2-instruction${openedQuestions.includes(12) ? " h2-instruction-inversion" : ""}`} id="forma-vypuska" dangerouslySetInnerHTML={{ __html: t.raw('sections.release.title') }} />
            <div style={openedQuestions.includes(12) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.release.content') }} />

            <h2 onClick={() => changeStatus(13)} className={`h2 h2-instruction${openedQuestions.includes(13) ? " h2-instruction-inversion" : ""}`} id="srok-godnosti" dangerouslySetInnerHTML={{ __html: t.raw('sections.expiry.title') }} />
            <div style={openedQuestions.includes(13) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.expiry.content') }} />

            <h2 onClick={() => changeStatus(14)} className={`h2 h2-instruction${openedQuestions.includes(14) ? " h2-instruction-inversion" : ""}`} id="usloviya-hraneniya" dangerouslySetInnerHTML={{ __html: t.raw('sections.storage.title') }} />
            <div style={openedQuestions.includes(14) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.storage.content') }} />

            <h2 onClick={() => changeStatus(15)} className={`h2 h2-instruction${openedQuestions.includes(15) ? " h2-instruction-inversion" : ""}`} id="usloviya-otpuska" dangerouslySetInnerHTML={{ __html: t.raw('sections.dispensing.title') }} />
            <div style={openedQuestions.includes(15) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.dispensing.content') }} />

            <h2 onClick={() => changeStatus(16)} className={`h2 h2-instruction${openedQuestions.includes(16) ? " h2-instruction-inversion" : ""}`} id="informaciya-o-proizvoditele" dangerouslySetInnerHTML={{ __html: t.raw('sections.manufacturer.title') }} />
            <div style={openedQuestions.includes(16) ? {display: 'block'} : {display: 'none'}} dangerouslySetInnerHTML={{ __html: t.raw('sections.manufacturer.content') }} />
          </div>
        </div>
      </article>
    </main>
  )
}
