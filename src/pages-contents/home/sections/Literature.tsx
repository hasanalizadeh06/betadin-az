"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

const Literature: React.FC = () => {
    const t = useTranslations('home.literature');
    const items = t.raw('items') as string[];

    return (
        <div className="page-content-wrapper">
            <div className="container container-middle page-content">
                <h2 className="h2">{t('title')}</h2>
                <p className="literature">{t('note')}</p>
                <ol className="literature">
                    {items.map((it, idx) => (
                        <li id={`literature-${idx}`} key={idx}>{it}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Literature;
