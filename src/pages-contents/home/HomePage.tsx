import React from 'react'
import Header from './sections/Header'
import Second from './sections/Second'
import Preimushestva from './sections/Preimushestva'
import ApplicationArea from './sections/ApplicationArea'
import OblastBlocks from './sections/OblastBlocks'
import FAQ from './sections/FAQ'
import RelatedArticles from './sections/RelatedArticles'
import NewDisclaimer from './sections/NewDisclaimer'
import Literature from './sections/Literature'

function HomePage() {
  return (
    <article>
      <Header />
      <Second />
      <Preimushestva />
      <ApplicationArea />
      <OblastBlocks />
      <FAQ />
      <RelatedArticles />
      <NewDisclaimer />
      <Literature />
    </article>
  )
}

export default HomePage