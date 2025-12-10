"use client"
import { useTranslations } from 'next-intl';

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
    // For simplicity, static slider (no JS slider logic)
    return (
        <div className="container default-pd">
            <h2 id="preimushchestva-betadin" className="home-h2">
                {t('title')}
            </h2>
            <div className="home-preimushestva">
                <picture>
                    <source
                        media="(max-width: 767px)"
                        srcSet="preimushestva-375.webp"
                    />
                    <img
                        decoding="async"
                        src="/preimushestva.webp"
                        alt=""
                    />
                </picture>
                <div className="slider-home-preimushestva">
                    <div className="swiper-wrapper">
                        {slides.map((slide, idx) => (
                            <div className="swiper-slide" key={idx}>
                                <div className="slide-image">
                                    <picture>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={slide.img.srcSet375}
                                        />
                                        <source
                                            media="(max-width: 1023px)"
                                            srcSet={slide.img.srcSet768}
                                        />
                                        <img
                                            decoding="async"
                                            src={slide.img.src}
                                            alt={slide.img.alt}
                                        />
                                    </picture>
                                </div>
                                <div className="slide-body" dangerouslySetInnerHTML={{ __html: t(slide.translationKey).replace(/\s/g, '\u00A0') }} />
                            </div>
                        ))}
                    </div>
                    {/* Pagination bullets (static for now)
                    <div className="slider-home-preimushestva-pagination">
                        {slides.map((_, idx) => (
                            <span
                                key={idx}
                                className={
                                    "swiper-pagination-bullet" +
                                    (idx === 0 ? " swiper-pagination-bullet-active" : "")
                                }
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Preimushestva;