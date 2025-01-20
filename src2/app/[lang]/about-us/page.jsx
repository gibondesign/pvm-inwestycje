import Link from 'next/link';
import './about.css'
import translations from '@/data/aboutPage';


export default function aboutPage({params}) {
const {lang} = params
    


	return (
		<>
			<section>
				<div className="wrapper hero about-us-hero">
					<div className="hero-text">
						<h1>{translations[lang]?.title || 'title!'}</h1>
					</div>
				</div>
			</section>
			<section>
				<div className="wrapper">
					<div className="about-us-box">
						<img src="/aboutus1-icon.svg" alt="" />
						<p>{translations[lang]?.about1 || 'title!'}</p>
					</div>
					<div className="about-us-box">
						<p>{translations[lang]?.about2 || 'title!'}</p>
						<img src="/aboutus2-icon.svg" alt="" />
					</div>
					<div className="about-us-btns">
						<Link href={`/${lang}/#offer`}>
						<button className='main-btn'>{translations[lang]?.btn1 || 'title!'}</button>
						</Link>
						<Link href={`/${lang}/realizations`}>
						<button className='main-btn'>{translations[lang]?.btn2 || 'title!'}</button>
						</Link>
					</div>
				</div>
			</section>
			
		</>
	)
}

export const generateStaticParams = async () => {
	const langs = ['en', 'pl']; 
	return langs.map((lang) => ({ lang }));
  };