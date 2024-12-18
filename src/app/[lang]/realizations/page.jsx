import Link from 'next/link'
import './realizations.css'
import translations from '@/data/realizationsPage'
import AccordionItem from '@/components/AccordionItem'
import AccordionHeader from '@/components/AccordionHeader'

export default function realizationsPage({ params }) {
	const { lang } = params

	return (
		<>
			<section>
				<div className="wrapper hero realizations-hero">
					<div className="hero-text">
						<h1>{translations[lang]?.title || 'title!'}</h1>
					</div>
				</div>
			</section>
			<section>
				<div className="wrapper">
					{/* Mapowanie dla każdego elementu w realizations */}
					{translations[lang]?.realizations.map((realization, realizationIndex) => (
						<div className='realization' key={realizationIndex}>
							{/* Render nagłówka akordeonu */}
							<AccordionHeader accordionTitle={realization.accordionHeader || 'title!'} />

							{/* Render elementów w akordeonie */}
							<div className="realizations">
								{realization.items.map((item, itemIndex) => (
									<AccordionItem
										key={itemIndex} // Klucz wymagany dla każdego dziecka w mapowaniu
										image={item.img} // Obraz
										imageAlt={item.title} // Alt tekst
										title={item.title} // Tytuł elementu
										description={item.description} // Opis elementu
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export const generateStaticParams = async () => {
	const langs = ['en', 'pl']
	return langs.map(lang => ({ lang }))
}
