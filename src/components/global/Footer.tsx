"use client"
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('footer');
    return (
        <footer className="container-page-product">
            <div className="container page-content">
                {/* Privacy Policy Link */}
                <div className="privacy-policy">
                    <a 
                        href="/policy.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {t('privacy_policy')}
                    </a>
                </div>

                {/* Company Info Section */}
                <div className="about">
                    <p>{t('company_info')}</p>
                    <p>{t('address')}</p>
                    <p>{t('phone_label')}: <a href="tel:+994124881061" target="_blank" rel="noopener noreferrer">{t('phone')}</a></p>
                    <p><a href="https://pharmacovigilance.egis.ru/" target="_blank" rel="noopener noreferrer">{t('form_text')}</a></p>
                </div>

                {/* Phone Number Display */}
                <div className="phone-display">
                    <a href="tel:+994124881061" target="_blank" rel="noopener noreferrer">{t('phone')}</a>
                </div>

                {/* Egis Logo Section */}
                <div className="logo-egis">
                    <Image 
                        src="/egis-logo.svg"
                        alt={t('alt.egis')}
                        width={120}
                        height={40}
                        className="logo-egis-logo"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;