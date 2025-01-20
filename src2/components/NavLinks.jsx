import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const translations = {
	en: {
		home: "home",
		about: "about us",
		realizations: "realizations",
		contact: "Contact",
		references: "References",
		esg: "ESG",
	},
	pl: {
		home: "Strona główna",
		about: "o nas",
		realizations: "realizacje",
		contact: "Kontakt",
		references: "Referencje",
		esg: "ESG",
	},
};

export default function NavLinks({ lang, onLinkClick }) {
	return (
		<>
			
				<li onClick={onLinkClick}>
					<Link href={`/${lang}`}>{translations[lang].home}</Link>
				</li>
				<li  onClick={onLinkClick}>
					<Link href={`/${lang}/about-us`}>{translations[lang].about}</Link>
				</li>
				<li  onClick={onLinkClick}>
					<Link href={`/${lang}/realizations`}>
						{translations[lang].realizations}
					</Link>
				</li>
				<li  onClick={onLinkClick}>
					<Link href={`/${lang}/references`}>
						{translations[lang].references}
					</Link>
				</li>
				<li  onClick={onLinkClick}>
					<Link href={`/${lang}/esg`}>{translations[lang].esg}</Link>
				</li>

				<li  onClick={onLinkClick}>
					<a href="#contact">{translations[lang].contact}</a>
				</li>
				
		</>
	);
}
