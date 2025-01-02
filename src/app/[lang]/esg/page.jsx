import "./esg.css";
import translations from "@/data/esgPage";

export default function esgPage({ params }) {
	const { lang } = params;

	return (
		<>
			<section>
				<div className="wrapper hero esg-hero">
					<div className="hero-text">
						<h1>{translations[lang]?.title || "title!"}</h1>
					</div>
				</div>
			</section>
			<section>
				<div className="wrapper">
					<h2>{translations[lang]?.section1.sectionTitle || "title!"}</h2>
					<ul className="pros-list">
						{translations[lang]?.section1.features.map((feature, idx) => (
							<li className="feature" key={idx}>
								<img src="/green-leaf-icon.svg" alt="" />
								<p>{feature}</p>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section>
				<div className="wrapper">
					<div className="energy-hub">
						<div className="energy-hub-title round-box">
							<h2>{translations[lang]?.section2.sectionTitle || "title!"}</h2>
						</div>
						<ul className="energy-hub-features round-box">
							{translations[lang]?.section2.features.map((feature, idx) => (
								<li className="feature" key={idx}>
									<img src="/green-leaf-icon.svg" alt="" />
									<p>{feature}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<section>
				<div className="wrapper">
					<h2>{translations[lang]?.section3.sectionTitle || "title!"}</h2>
					<div className="esg-features">
						{translations[lang]?.section3.features.map((feature, idx) => (
							<div className="esg-feature" key={idx}>
								<div className="esg-feature-icon">
									<img src={feature.icon} alt={feature.featureName} />
								</div>
								<h3>{feature.featureName}</h3>
								<p>{feature.featureDescription}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export const generateStaticParams = async () => {
	const langs = ["en", "pl"];
	return langs.map((lang) => ({ lang }));
};
