import './home.css'

export default function Home() {
	return (
		<>
			<section>
				<div className="wrapper hero home-hero">
					<div className="hero-text">
						<h1>Profesjonalne usługi zarządzania inwestycją</h1>
						<p>PVM inwestycje to dostawca profesjonalnych usług technicznych z zakresu zarządzania dla budownictwa.</p>
					</div>
				</div>
			</section>

			<section>
				<div className="wrapper features">
					<div className="feature-box">
						<div className="img-wrapper">
							<img src="/experienced-team.jpg" alt="Complex Services" />
						</div>
						<h3>Doświadczony zespół</h3>
						<p>
							Nasz zespół sprosta najbardziej nietypowym wymaganiom i&nbsp;rozwiązaniom technicznym. Doskonale radzimy
							sobie z niestandardowymi zagadnieniami dotyczącymi inwestycji.
						</p>
					</div>

					<div className="feature-box">
						<div className="img-wrapper">
							<img src="/complex-services.jpg" alt="Complex Services" />
						</div>
						<h3>Kompleksowa obsługa</h3>
						<p>
							Prowadzimy proces inwestycyjny od wykonania prac projektowych, nadzoru nad inwestycją aż po przekazanie
							gotowego obiektu Inwestorowi.
						</p>
					</div>

					<div className="feature-box">
						<div className="img-wrapper">
							<img src="/knowlage-and-experiences.jpg" alt="Complex Services"  />
						</div>
						<div className="text-wrapper">
							<h3>Wiedza i doświadczenie</h3>
							<p>
								Sprawnie zarządzamy procesem budowlanym i inwestycyjnym, gdzie łączymy wiedzę zawodową, techniczną oraz
								znajomość przepisów prawnych i administracyjnych.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="wrapper">
					<h2>Nasza oferta</h2>
					<p className="text-center">
						PVM INWESTYCJE to oferta dla inwestorów, którzy chcieliby zminimalizować wszystkie „niespodzianki” procesu
						inwestycyjnego Nikt nie obiecuje, że proces budowania będzie bezproblemowy, ale uważamy, że połączenie
						praktycznej wiedzy w zakresie projektowania, wykonawstwa z zakresem przygotowania i zarządzania procesami
						inwestycyjnymi daje Państwu gwarancję powodzenia podejmowanych przez nas decyzji.
					</p>
				</div>
			</section>
			<section>
				<div className="wrapper">
					<h2 className="green">Zoptymalizuj koszty energii</h2>
					<p className="text-center">
						Oferujemy innowacyjne produkty, które zmniejszą i zoptymalizują zużycie energii. Z nami obniżysz koszt
						energii elektrycznej i konserwacji urządzeń elektrycznych wydłużając ich żywotność i zmniejszając emisję
						CO2.
					</p>

					<img className="responsive-svg" src="/green-energy.svg" alt="Complex Services" />
				</div>
			</section>
		</>
	)
}
