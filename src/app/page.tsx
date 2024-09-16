import Text from '@/ui/base/Text'

export default function Page() {
	return (
		<div className='size-full grid grid-cols-5'>
			<div className='col-span-2 border border-r border-r-fourth p-16'>
				<Text>Hello, i&#39;m</Text>
				<h1 className='text-primary text-4xl font-bold leading-normal'>
					Fernando
					<br />
					Petri
				</h1>
				<Text>
					A passionate Fullstack developer from Brazil who loves the world of
					coding and gaming.
				</Text>
				<Text>I love to develop with:</Text>
				<ul className='list-disc text-third list-inside'>
					<li><Text>Next.js</Text></li>
					<li><Text>React.js</Text></li>
					<li><Text>Typescript</Text></li>
					<li><Text>Express.js</Text></li>
					<li><Text>Mongo DB</Text></li>
					<li><Text>SQL</Text></li>
					<li><Text>Redis</Text></li>
				</ul>
			</div>
			<div className='col-span-3'></div>
		</div>
	)
}
