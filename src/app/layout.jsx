import './globals.css'
import './fonts.css'
	
export const metadata = {
	title: 'PVM Inwestycje',
	description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
		

	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	)
}
