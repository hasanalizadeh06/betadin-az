"use client"
import React from 'react'
import { useTranslations } from 'next-intl'

const OblastBlocks: React.FC = () => {
    const t = useTranslations('home.oblastBlocks')

    return (
        <div className="container default-pd container-home">
            <div className="bg-green-dark"></div>
            <div className="home-oblast-blocks">
                <div className="home-oblast-block">
                    <picture>
                        <source media="(max-width: 767px)" srcSet="/article-rani-375.webp" />
                        <img decoding="async" src="/article-rani.webp" alt="" />
                    </picture>
                    <div className="home-oblast-block-text">
                        <div className="home-oblast-block-title">{t('block1.title')}</div>
                        <a href="/encyclopedia/obrabotka-ran/" className="btn btn-green-home">{t('block1.link')}</a>
                        <a href="/encyclopedia/obrabotka-ran/" className="link-hide">{t('block1.link')}</a>
                    </div>
                </div>
                <div className="home-oblast-block">
                    <picture>
                        <source media="(max-width: 767px)" srcSet="/article-povidon-375.webp" />
                        <img decoding="async" src="/article-povidon.webp" alt="" />
                    </picture>
                    <div className="home-oblast-block-text">
                        <div className="home-oblast-block-title">{t('block2.title')}</div>
                        <a href="/encyclopedia/povidon-jod/" className="btn btn-green-home">{t('block2.link')}</a>
                        <a href="/encyclopedia/povidon-jod/" className="link-hide">{t('block2.link')}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OblastBlocks
