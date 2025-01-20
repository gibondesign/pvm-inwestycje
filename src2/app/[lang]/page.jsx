import FeatureBox from '@/components/FeatureBox'
import './home.css'
import Link from 'next/link'
import translations from '@/data/homePage';


export default function HomePage({params}) {
const {lang} = params
    


	return (
		<>
			<section>
				<div className="wrapper hero home-hero">
					<div className="hero-text">
						<h1>{translations[lang]?.title || 'title!'}</h1>
						<p>{translations[lang]?.subtitle || 'subtitle!'}</p>
					</div>
				</div>
			</section>
			<section>
				<div className="wrapper features">
					{translations[lang]?.features.map((feature, index) => (
						<FeatureBox
							key={index} 
							image={feature.img}
							title={feature.title}
							description={feature.description}
						/>
					))}				
				</div>
			</section>
		
			<section>
				<div className="wrapper" id='offer'>
					<h2>{translations[lang]?.offer.title || 'Offer!'}</h2>
					<p className="text-center">{translations[lang]?.offer.description || 'title!'}	
					</p>
				</div>
			</section>
			<section>
				<div className="wrapper">
					<h2 className="green">{translations[lang]?.green.title || 'title!'}</h2>
					<p className="text-center">
					{translations[lang]?.green.description || 'title!'}
					</p>
					<Link href='' >
					<button className='main-btn green-btn'><img src="/leaf-icon.svg" alt="leaf icon" />{translations[lang]?.green.button || 'Sprawdź ofertę'}</button>
					</Link>
<div className="green-gradient">

					<img className="responsive-svg" src="/green-energy.svg" alt="Complex Services" />
</div>
				</div>
			</section>
		</>
	)
}

// Generowanie dynamicznych ścieżek dla home page
export const generateStaticParams = async () => {
	return [{ lang: 'en' }, { lang: 'pl' }]
}
