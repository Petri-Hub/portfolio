import Button from '@/ui/base/Button'
import Link from '@/ui/base/Link'
import Text from '@/ui/base/Text'
import Title from '@/ui/base/Title'
import DiagonalLine from '@/ui/components/DiagonalLine'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Fernando Petri | 404'
}

export default function NotFoundPage() {
	return (
		<div className='relative grid size-full place-items-center content-center gap-8 overflow-hidden'>
			<Title className='text-7xl'>404</Title>
			<Text className='w-64 text-center'>
				There is nothing here my fellow traveler. You should go back.
			</Text>
			<Link href={'/'}>
				<Button>Go back</Button>
			</Link>
			<DiagonalLine />
		</div>
	)
}
