
"use client";
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const EncyclopediaPage: React.FC = () => {
	const t = useTranslations('EncyclopediaPage')
	const anchors = t.raw('anchors') as { id: string; title: string }[]
	const sections = t.raw('sections') as Record<
		string,
		{ title: string; items: { href: string; title: string }[] }
	>
	const sectionOrder = ['yazvy', 'prolezhni', 'rany', 'ozhogi', 'yod', 'infekcii', 'svechi']

	return (
		<main>
			<div className="container-page-header">
				<div className="container">
					<div className="page-header">
						<ol className="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
							<li property="itemListElement" typeof="ListItem">
								<a property="item" typeof="WebPage" href="/"> <span property="name">{t('breadcrumb.home')}</span></a>
								<meta property="position" content="1" />
							</li>
							<li property="itemListElement" typeof="ListItem">
								<span property="name">{t('breadcrumb.current')}</span>
								<meta property="position" content="3" />
							</li>
						</ol>
					</div>
				</div>
			</div>

			<div className="container-page-header green-bg">
				<div className="container">
					<div className="page-header">
						<h1 className="h2">{t('title')}</h1>
						<ul className="page-header-anchors">
							{anchors && anchors.map((a) => (
								<li key={a.id}><a href={`#${a.id}`}>{a.title}</a></li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className="container-page-header n-pr">
				<div className="container">
					<div className="page-header page-header-article-list page-content">
						{sectionOrder.map((key) => {
							const section = sections?.[key]
							if (!section) return null
							return (
								<div className="cardContentWrapper" key={key}>
									<h2 className="h2" id={key}>{section.title}</h2>
									<ul>
										{section.items && section.items.map((it, idx) => (
											<li key={idx}><Link href={it.href}>{it.title}</Link></li>
										))}
									</ul>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</main>
	)
}

export default EncyclopediaPage
