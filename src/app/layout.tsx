import '@/assets/styles/global.css'
import { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
	title: 'Portfolio'
}

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang='pt-br' className={GeistSans.className}>
			<body>
				<SpeedInsights />
				{children}
			</body>
		</html>
	)
}
