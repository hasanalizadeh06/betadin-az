"use client"
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface RichText {
  text: string;
  betadin?: string;
  instructionLink?: {
    title: string;
    href: string;
    text: string;
  };
}

const FAQ: React.FC = () => {
    const t = useTranslations('home.faq')
    const [openedItems, setOpenedItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        if (openedItems.includes(index)) {
            setOpenedItems(openedItems.filter(i => i !== index));
        } else {
            setOpenedItems([...openedItems, index]);
        }
    }

    const renderRichText = (richText: RichText) => {
        let text = richText.text;
        if (richText.betadin) {
            text = text.replace(/\{betadin\}/g, richText.betadin);
        }
        if (richText.instructionLink) {
            text = text.replace(/\{instructionLink\}/g, 
                `<a href="${richText.instructionLink.href}" title="${richText.instructionLink.title}" target="_blank" rel="noopener">${richText.instructionLink.text}</a>`
            );
        }
        return <div dangerouslySetInnerHTML={{ __html: text }} />;
    }

    return (
        <div className="container default-pd container-where-buy">
            <h2 className="home-h2">{t('title')}</h2>
            <ul className="home-faq">
                <li className={
                    openedItems.includes(0) ? "home-faq-title-open" : ""
                } onClick={() => toggleItem(0)}>
                    <h3 className="home-faq-title">
                        {renderRichText(t.raw('item1.question'))}
                    </h3>
                    <div className="home-faq-description">
                        {renderRichText(t.raw('item1.answer'))}
                    </div>
                    <div className="home-faq-arrow-mobile">
                        <div className="home-faq-arrow-mobile-arrow"></div>
                    </div>
                </li>
                <li className={
                    openedItems.includes(1) ? "home-faq-title-open" : ""
                } onClick={() => toggleItem(1)}>
                    <h3 className="home-faq-title">
                        {renderRichText(t.raw('item2.question'))}
                    </h3>
                    <div className="home-faq-description">
                        {renderRichText(t.raw('item2.answer'))}
                    </div>
                    <div className="home-faq-arrow-mobile">
                        <div className="home-faq-arrow-mobile-arrow"></div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FAQ
