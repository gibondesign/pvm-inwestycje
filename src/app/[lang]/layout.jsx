import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default async function RootLayout({ children, params }) {
	const lang = params?.lang || 'pl' // Domyślny język to 'pl'

	// Przekierowanie z '/' na '/pl' lub '/en'
	if (!params?.lang) {
		redirect('/pl')
	}
	return (
		<>
			<Navbar lang={lang} />
			<main>{children}</main>
			<Footer lang={lang} />
		</>
	)
}
