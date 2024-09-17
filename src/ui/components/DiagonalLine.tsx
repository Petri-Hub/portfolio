import { twMerge } from 'tailwind-merge'

export default function DiagonalLine({
	className
}: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			className={twMerge(
				'absolute bottom-0 right-0 aspect-square -z-10 w-1/2 max-w-96',
				className
			)}>
			<span className='absolute  left-1/2 top-1/2 h-full w-px -translate-y-1/2  rotate-45 scale-150 bg-fourth'></span>
		</span>
	)
}
