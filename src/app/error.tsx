'use client'

import Button from '@/ui/base/Button'
import Code from '@/ui/base/Code'
import Text from '@/ui/base/Text'
import Title from '@/ui/base/Title'
import DiagonalLine from '@/ui/components/DiagonalLine'
import { Metadata } from 'next'

type ErrorPageProps = {
	error: Error
	reset: () => void
}

export const metadata: Metadata = {
	title: 'Fernando Petri | Error'
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
	return (
		<div className='relative grid size-full place-items-center content-center gap-8 overflow-hidden'>
			<Title className='text-7xl'>Error</Title>
			<Text className='w-64 text-center'>
				An unexpected error happened while loading this page.
			</Text>
			<Code>{error.message}</Code>
			<Button onClick={reset}>Try again</Button>
			<DiagonalLine />
		</div>
	)
}
