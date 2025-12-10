"use client"
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import '../../styles/template.css'

function FaqPage() {
  const t = useTranslations('FaqPage')
  const [openedQuestions, setOpenedQuestions] = useState<number[]>([])

  const changeStatus = (id: number) => {
    if (openedQuestions.includes(id)) {
      setOpenedQuestions(openedQuestions.filter((questionId) => questionId !== id))
    } else {
      setOpenedQuestions([...openedQuestions, id])
    }
  }

  const isOpen = (id: number) => openedQuestions.includes(id)
  return (
    <main>
      <article>
        <div className="container-page-header container-page-header-faq">
          <div className="container">
            <div className="page-header">
              <ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
                <li property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" href="/">
                    <span property="name">{t('breadcrumb.home')}</span>
                  </a>
                  <meta property="position" content="1" />
                </li>
                <li property="itemListElement" typeof="ListItem">
                  <span property="name">{t('breadcrumb.current')}</span>
                  <meta property="position" content="3" />
                </li>
              </ol>
            </div>

            <div className="page-header-faq">
              <h1 className="page-header-title-text page-header-title-text__green">{t('title')}</h1>
              <ul className="page-header-anchors page-header-anchors-faq">
                {t.raw('anchors').map((anchor: any) => (
                  <li key={anchor.id}>
                    <a href={`/betadine-frequently-asked-questions/#${anchor.id}`}>{anchor.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="container-page-product">
          <div className="container default-pd container-faq">
            {['povidon', 'solution', 'ointment', 'suppositories'].map((section) => (
              <div key={section}>
                <h2 className="home-h2" id={t(`sections.${section}.title`).toLowerCase().replace(/\s+/g, '-')}>
                  {t(`sections.${section}.title`)}
                </h2>
                <ul className="home-faq">
                  {t.raw(`sections.${section}.questions`).map((item: any) => (
                    <li
                      key={item.id}
                      className={isOpen(item.id) ? 'home-faq-title-open' : ''}
                    >
                      <h3
                        className="home-faq-title"
                        onClick={() => changeStatus(item.id)}
                        role="button"
                        tabIndex={0}
                      >
                        {item.question}
                      </h3>
                      <div
                        className="home-faq-description"
                        style={isOpen(item.id) ? { display: 'block' } : { display: 'none' }}
                      >
                        {/* Cevaplar HTML içeriği içerebilir */}
                        <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </div>
                      <div className="home-faq-arrow-mobile">
                        <div className="home-faq-arrow-mobile-arrow" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h2 className="h2" id="spisok-literatury">
              {t('literature.title')}
            </h2>
            <ol className="literature">
              {t.raw('literature.items').map((item: string, index: number) => (
                <li key={index} id={`literature-${index}`}>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </main>
  )
}

export default FaqPage
