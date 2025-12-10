"use client"
import React from 'react';
import { useTranslations } from 'next-intl';

type Slide = {
  title: string;
  description: string;
  href: string;
  imageAlt?: string;
  imgSrc: string;
};

const RelatedArticles: React.FC = () => {
  const t = useTranslations('home.relatedArticles');
  const slides = t.raw('slides') as Slide[];

  return (
    <div className="container default-pd container-where-buy">
      <div className="home-h2" id="chitat-po-teme">{t('title')}</div>

      <div className="slider-normal">
        <div className="swiper-wrapper">
          {slides.map((s, idx) => (
            <div className="swiper-slide" style={{ marginRight: '29px' }} key={idx}>
              <div className="slide-image">
                <picture>
                  <img loading="lazy" decoding="async" height={166} width={246} src={s.imgSrc} alt={s.imageAlt || ''} />
                </picture>
              </div>
              <div className="slide-body">
                <p className="slide-title"><strong>{s.title}</strong></p>
                <p>{s.description}</p>
                <p className="slide-more">
                  <a href={s.href}> {t('moreText', { defaultValue: 'Подробнее' })} </a>
                  <a href={s.href}> {t('moreText', { defaultValue: 'Подробнее' })} </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="swiper-scrollbar swiper-scrollbar-horizontal">
          <div className="swiper-scrollbar-drag" style={{ width: '100px' }} />
        </div> */}
      </div>
    </div>
  );
};

export default RelatedArticles;