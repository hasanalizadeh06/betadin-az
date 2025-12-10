"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('footer');
    return (
        <footer className="container-page-product">
            <div className="container page-content">
                <Link href="/" className="logo">
                    <Image
                        src="/logo.svg"
                        alt={t('alt.betadin')}
                        width={150}
                        height={40}
                        className="w-auto"
                    />
                </Link>

                {/* About Section */}
                <div className="about">
                    <p>
                        {t('adverse_reaction_notice')}
                    </p>
                    
                    {/* Contacts */}
                    <div className="contacts">
                        <p>{t('contacts.email')}: <a href="mailto:pharmacovigilance@egis.ru" target="_blank" rel="noopener noreferrer">pharmacovigilance@egis.ru</a></p>
                        <p>{t('contacts.phone')}: <a href="tel:+74953633966" target="_blank" rel="noopener noreferrer">+7 (495) 363-39-66</a></p>
                        <p>{t('contacts.form')} <a href="https://pharmacovigilance.egis.ru/" target="_blank" rel="noopener noreferrer">{t('contacts.website')}</a></p>
                    </div>

                    {/* Registration Numbers */}
                    <div className="contacts">
                        <p style={{ color: 'grey' }}>{t('registration.number1')}</p>
                        <p style={{ color: 'grey' }}>{t('registration.number2')}</p>
                        <p style={{ color: 'grey' }}>{t('registration.number3')}</p>
                        <p style={{ color: 'grey' }}>{t('registration.additional')}</p>
                        <p>
                            <a 
                                href="/policy.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {t('registration.privacy_policy')}
                            </a>
                        </p>
                    </div>
                </div>

                {/* Egis Logo Section */}
                <div className="logo-egis">
                    <Image 
                        src="/footer-red.svg"
                        alt=""
                        width={200}
                        height={100}
                        className="background"
                    />
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