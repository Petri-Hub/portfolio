export default function Text({ children }: React.PropsWithChildren) {
	return (
		<p className='text-large font-normal inline-block text-third leading-loose'>
			{children}
		</p>
	)
}
