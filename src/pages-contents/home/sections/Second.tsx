"use client"

import React from 'react';
import { useTranslations } from 'next-intl';

const Second: React.FC = () => {
    const t = useTranslations('home.second.products');
    return (
        <div className="container default-pd">
            <div className="home-cards">
                <div className="home-card home-card_green">
                    <picture>
                        <img 
                            decoding="async" 
                            src="/rastvor-product.webp" 
                            alt={t('solution.alt')}
                        />
                    </picture>
                    <div style={{marginTop: "10px"}} className="home-card-title">
                        {t('solution.title')}
                    </div>
                    <div className="home-card-text">
                        {t('solution.description')}
                    </div>
                    <a href="/betadin-rastvor/" className="btn btn-green-cards">
                        {t('learn_more')}
                    </a>
                    <a href="/betadin-rastvor/" className="link-hide">
                        {t('learn_more')}
                    </a>
                </div>

                <div className="home-card home-card_red">
                    <picture>
                        <img 
                            decoding="async" 
                            src="/maz-product.webp" 
                            alt={t('ointment.alt')}
                        />
                    </picture>
                    <div style={{marginTop: "10px"}} className="home-card-title">
                        {t('ointment.title')}
                    </div>
                    <div className="home-card-text">
                        {t('ointment.description')}
                    </div>
                    <a href="/betadin-maz/" className="btn btn-green-cards">
                        {t('learn_more')}
                    </a>
                    <a href="/betadin-maz/" className="link-hide">
                        {t('learn_more')}
                    </a>
                </div>

                <div className="home-card home-card_blue">
                    <picture>
                        
                        <img 
                            decoding="async" 
                            src="/svechi-product.webp" 
                            alt={t('suppositories.alt')}
                        />
                    </picture>
                    <div style={{marginTop: "10px"}} className="home-card-title">
                        {t('suppositories.title')}
                    </div>
                    <div className="home-card-text">
                        {t('suppositories.description')}
                    </div>
                    <div className="wrapper-btn">
                        <a href="/svechi/" className="btn btn-green-cards">
                            {t('learn_more')}
                        </a>
                    </div>
                    <a href="/svechi/" className="link-hide">
                        {t('learn_more')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Second;