export default function AccordionHeader({ accordionTitle }) {
	return (
		<button className="accordion-header">
			<img src="/white-arrow-icon.svg" alt="" />
			<h2>{accordionTitle}</h2>
			<img src="/white-arrow-icon.svg" alt="" />
		</button>
	)
}
