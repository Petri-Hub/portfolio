import Link from '@/ui/base/Link'
import Text from '@/ui/base/Text'
import Title from '@/ui/base/Title'
import DiagonalLine from '@/ui/components/DiagonalLine'

export default function Page() {
	const favoriteTechnologies = [
		'Next.js',
		'React.js',
		'Typescript',
		'Express.js',
		'Mongo DB',
		'SQL',
		'Redis'
	]

	return (
		<div className='grid size-full grid-cols-5 overflow-y-auto overflow-x-hidden'>
			<div className='p-12 col-span-5 h-screen border border-r-fourth md:col-span-2 md:p-16'>
				<Text className='mb-2'>Hello, i&#39;m</Text>
				<Title className='mb-4 leading-tight'>
					Fernando
					<br />
					Petri
				</Title>
				<Text className='mb-6 max-w-64'>
					A passionate Fullstack developer from Brazil who loves the world of
					coding and gaming.
				</Text>
				<Text className='mb-6'>I love to develop with:</Text>
				<ul className='list-inside list-disc text-third'>
					{favoriteTechnologies.map((name) => (
						<li key={name}>
							<Text className='inline-block'>{name}</Text>
						</li>
					))}
				</ul>
			</div>
			<div className='relative col-span-5 h-screen overflow-hidden p-12 md:col-span-3 md:p-16'>
				<Title className='mb-6'>
					Under
					<br />
					Construction
				</Title>
				<Text className='mb-6'>This website is currently being built.</Text>
				<Text className='mb-6'>
					In this mean time, why don&#39;t
					<br />
					you connect with me?
				</Text>
				<div className='mb-6 space-y-2'>
					<Link href='https://www.linkedin.com/in/fernando-petri/'>
						LinkedIn
					</Link>
					<Link href='https://github.com/Petri-Hub'>Github</Link>
				</div>
				<Text>Let&#39;s talk!</Text>
				<DiagonalLine className='w-full max-w-none' />
				<Text className='absolute bottom-0 right-0 p-12 font-medium text-primary'>
					v1.0.0
				</Text>
			</div>
		</div>
	)
}
