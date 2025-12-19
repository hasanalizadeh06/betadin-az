"use client"
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

const Preimushestva = () => {
    const t = useTranslations('home.advantages');
    
        const slides = [
        {
            img: {
                src: "/img-1.svg",
                srcSet768: "/img-1-768.svg",
                srcSet375: "/img-768.svg",
                alt: "",
            },
            translationKey: 'slides.fights_infections'
        },
        {
            img: {
                src: "/img-2.svg",
                srcSet768: "/img-2-768.svg",
                srcSet375: "/img-768.svg",
                alt: "",
            },
            translationKey: 'slides.no_burning'
        },
        {
            img: {
                src: "/img-3.svg",
                srcSet768: "/img-3-768.svg",
                srcSet375: "/img-768.svg",
                alt: "",
            },
            translationKey: 'slides.wide_usage'
        },
        {
            img: {
                src: "/img-4.svg",
                srcSet768: "/img-4-768.svg",
                srcSet375: "/img-768.svg",
                alt: "",
            },
            translationKey: 'slides.easy_wash'
        },
        {
            img: {
                src: "/img-5.svg",
                srcSet768: "/img-5-768.svg",
                srcSet375: "/img-768.svg",
                alt: "",
            },
            translationKey: 'slides.family_friendly'
        },
    ];
    // Mobile slider logic
    const [activeIdx, setActiveIdx] = useState(0);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleDotClick = (idx: number) => {
        setActiveIdx(idx);
        // Scroll to the slide on mobile
        if (slideRefs.current[idx] && window.innerWidth <= 768) {
            slideRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="container default-pd">
            <h2 id="preimushchestva-betadin" className="home-h2">
                {t('title')}
            </h2>
            <div className="home-preimushestva">
                <picture>
                    <img
                        decoding="async"
                        src="/preimushestva.webp"
                        alt=""
                    />
                </picture>
                <div className="slider-home-preimushestva">
                    <div className="swiper-wrapper">
                        {slides.map((slide, idx) => (
                            <div
                                className="swiper-slide"
                                key={idx}
                                ref={el => { slideRefs.current[idx] = el; }}
                                style={{ display: (window.innerWidth <= 768 && idx !== activeIdx) ? 'none' : undefined }}
                            >
                                <div className="slide-image">
                                    <picture>
                                            <img
                                                decoding="async"
                                                src={
                                                    window.innerWidth < 767
                                                    ? "/img-768.svg"
                                                    : slide.img.src
                                                }
                                                alt={slide.img.alt}
                                            />
                                    </picture>
                                </div>
                                <div style={idx == 0 ? {width: "10px", padding: "0px !important", fontSize: "12px"} : undefined} className="slide-body"  dangerouslySetInnerHTML={{ __html: t(slide.translationKey) }} />
                            </div>
                        ))}
                    </div>
                    {/* Mobile-only pagination dots */}
                    <div className="slider-home-preimushestva-pagination-mobile" style={{ display: window.innerWidth <= 768 ? 'flex' : 'none', justifyContent: 'center', marginTop: 16 }}>
                        {slides.map((_, idx) => (
                            <span
                                key={idx}
                                onClick={() => handleDotClick(idx)}
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    background: idx === activeIdx ? '#1B7B2C' : '#E0E0E0',
                                    margin: '0 4px',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                    border: idx === activeIdx ? '2px solid #1B7B2C' : '2px solid #E0E0E0',
                                    transition: 'background 0.2s, border 0.2s',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 769px) {
                    .slider-home-preimushestva-pagination-mobile {
                        display: none !important;
                    }
                    .swiper-slide {
                        display: block !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default Preimushestva;