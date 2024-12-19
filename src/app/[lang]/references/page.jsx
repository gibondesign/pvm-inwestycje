import "./references.css";
import translations from "@/data/referencesPage";

export default function realizationsPage({ params }) {
	const { lang } = params;

	return (
		<>
			<section>
				<div className="wrapper hero references-hero">
					<div className="hero-text">
						<h1>{translations[lang]?.title || "title!"}</h1>
					</div>
				</div>
			</section>
			<section>
				<div className="wrapper">
					<div className="references">
						{translations[lang].references.map((reference, index) => (
							<div className="reference-item" key={index}>
								<img src={reference.logo} alt="" />
								<hr />
									<h3>{reference.companyName}</h3>
								<div className="detail-box">
									<p>{reference.description}</p>
									<a href={reference.pdfFile} download>
										<button>
											<img
												src="/download-btn.svg"
												alt=""
												className="download-icon"
											/>
										</button>
									</a>
								</div>
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
