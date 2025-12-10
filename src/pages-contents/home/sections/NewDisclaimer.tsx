"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

const NewDisclaimer: React.FC = () => {
    const t = useTranslations('home');

    return (
        <div className="home-container">
            <div className="new-disclaimer">
                {t('newDisclaimer')}
            </div>
        </div>
    );
}

export default NewDisclaimer;
