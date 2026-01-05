"use client"
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

const Preimushestva = () => {
    const t = useTranslations('home.advantages');
    const slides = [
        { translationKey: 'slides.fights_infections' },
        { translationKey: 'slides.no_burning' },
        { translationKey: 'slides.wide_usage' },
        { translationKey: 'slides.easy_wash' },
        { translationKey: 'slides.family_friendly' },
    ];
    return (
        <div className="container default-pd">
            <h2 id="preimushchestva-betadin" className="home-h2">
                {t('title')}
            </h2>
            <div className="home-preimushestva-list-layout">
                <div className="home-preimushestva-list-img">
                    <picture>
                        <img
                            decoding="async"
                            src="/preimushestva.webp"
                            alt=""
                        />
                    </picture>
                </div>
                <ul className="home-preimushestva-list">
                    {slides.map((slide, idx) => (
                        <li key={idx} className="home-preimushestva-list-item">
                            <span dangerouslySetInnerHTML={{ __html: t(slide.translationKey) }} />
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
                .home-preimushestva-list-layout {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 48px;
                    flex-wrap: wrap;
                }
                .home-preimushestva-list-img {
                    flex: 5 1 0%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .home-preimushestva-list-img img {
                    max-width: 100%;
                    width: 100%;
                    height: auto;
                }
                .home-preimushestva-list {
                    flex: 1 1 0%;
                    max-width: 320px;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .home-preimushestva-list-item {
                    background: #f7f9f8;
                    border-radius: 12px;
                    padding: 18px 24px;
                    font-size: 1.08rem;
                    color: #1B7B2C;
                    box-shadow: 0 2px 8px rgba(27,123,44,0.06);
                    font-weight: 500;
                    transition: box-shadow 0.2s;
                }
                .home-preimushestva-list-item:hover {
                    box-shadow: 0 4px 16px rgba(27,123,44,0.13);
                }
                @media (max-width: 900px) {
                    .home-preimushestva-list-layout {
                        flex-direction: column;
                        gap: 32px;
                    }
                    .home-preimushestva-list-img img {
                        max-width: 180px;
                    }
                    .home-preimushestva-list {
                        max-width: 100%;
                        flex: 1 1 100%;
                    }
                }
            `}</style>
        </div>
    );
}

export default Preimushestva;