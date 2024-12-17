import Link from 'next/link'

import './navbar.css'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar( {lang}) {
	

	const translations = {
		en: { about: 'about us', realizations: 'realizations' },
		pl: { about: 'o nas', realizations: 'realizacje' },
	}

	return (
		<nav>
			<div className="navbar">
				<img src="/navbar-logo.png" alt="PVM Logo" />
				<ul className="menu">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href={`/${lang}/about-us`}>{translations[lang].about}</Link>
					</li>
					<li><Link href="/realizations">{translations[lang].realizations}</Link></li>
					<li>Energetics</li>
					<li>References</li>
					<li>Contact</li>
				</ul>
				<LanguageSwitcher />
			</div>
		</nav>
	)
}
