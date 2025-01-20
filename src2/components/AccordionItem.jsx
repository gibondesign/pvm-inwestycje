export default function AccordionItem({image, imageAlt, title,description,gallery}) {
	return (
		<div className="accordion-item">
			<img src={image} alt={imageAlt} className="accordion-img" />
			<h3 className="accordion-title">{title}</h3>
			<p>{description}</p>
		</div>
	)
}
