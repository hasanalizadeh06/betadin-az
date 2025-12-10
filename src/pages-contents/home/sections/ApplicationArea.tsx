"use client"
import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

const ApplicationArea = () => {
    const t = useTranslations('home.application');
    return (
        <div className="container default-pd">
            <h2 className="home-h2">{t('title')}</h2>
            <div className="home-oblast">
                <Link href="/encyclopedia/#rany" className="btn btn-green-line">{t('areas.wounds')}</Link>
                <Link href="/encyclopedia/rany-u-detej/" className="btn btn-green-line">{t('areas.children_scratches')}</Link>
                <Link href="/encyclopedia/#ozhogi" className="btn btn-green-line">{t('areas.burns')}</Link>
                <Link href="/encyclopedia/#infekcii" className="btn btn-green-line">{t('areas.skin_infections')}</Link>
                <Link href="/encyclopedia/#prolezhni" className="btn btn-green-line">{t('areas.bedsores')}</Link>
            </div>
        </div>
    );
};

export default ApplicationArea;
