import { twMerge } from 'tailwind-merge'

export default function Text({
	children,
	className
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={twMerge(
				'text-base font-normal leading-relaxed text-third',
				className
			)}>
			{children}
		</p>
	)
}
