export default function FeatureBox({ image, title, description }) {
	return (
		<div className="feature-box">
			<div className="img-wrapper">
				<img src={image} alt={title} />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	)
}
