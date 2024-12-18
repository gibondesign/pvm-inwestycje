import Link from "next/link";

import "./navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang }) {
	const translations = {
		en: {
			home: "home",
			about: "about us",
			realizations: "realizations",
			contact: "Contact",
		},
		pl: {
			home: "Strona główna",
			about: "o nas",
			realizations: "realizacje",
			contact: "Kontakt",
		},
	};

	return (
		<nav>
			<div className="navbar">
				<Link href={`/${lang}`}>
					<img src="/navbar-logo.png" alt="PVM Logo" />
				</Link>
				<ul className="menu">
					<li>
						<Link href={`/${lang}`}>{translations[lang].home}</Link>
					</li>
					<li>
						<Link href={`/${lang}/about-us`}>{translations[lang].about}</Link>
					</li>
					<li>
						<Link href={`/${lang}/realizations`}>
							{translations[lang].realizations}
						</Link>
					</li>

					{/* <li>Energetics</li> */}
					{/* <li>References</li> */}
					<li>
						<a href="#contact">{translations[lang].contact}</a>
					</li>
				</ul>
				<LanguageSwitcher />
			</div>
		</nav>
	);
}
