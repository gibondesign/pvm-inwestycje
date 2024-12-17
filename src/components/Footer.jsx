import Image from 'next/image'
import './footer.css'

export default function Footer( {lang}) {

	const translations = {
		en: 'contact',

		pl: 'kontakt',
	}

	const iconSize = 40
	return (
		<footer className="footer">
			<div className="wrapper column">
				<h2>{translations[lang]}</h2>
				<div className="contact-box text-center">
					<h3>Dariusz J. Głowacki MIRCS</h3>
					<div className="contact-box-icons">
						<div className="contact-box-icon">
							<Image src="footer/phone-icon.svg" alt="icon" width={iconSize} height={iconSize} />
							<p>+48 512 697 767</p>
						</div>
						<div className="contact-box-icon">
							<Image src="footer/mail-icon.svg" alt="icon" width={iconSize} height={iconSize} />
							<p>biuro@pvm-inwestycje.pl</p>
						</div>
						<div className="contact-box-icon">
							<Image src="footer/skype-icon.svg" alt="icon" width={iconSize} height={iconSize} />
							<p>darecki.q</p>
						</div>
						<div className="contact-box-icon">
							<Image src="footer/mailbox-icon.svg" alt="icon" width={iconSize} height={iconSize} />
							<p>Głogowa 9 05-462 Dziechciniec</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
