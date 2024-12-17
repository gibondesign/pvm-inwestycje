import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default async function RootLayout({ children, params }) {
	const { lang } = params

	return (
		<>
			<Navbar lang={lang} />
			<main>{children}</main>
			<Footer lang={lang} />
		</>
	)
}
