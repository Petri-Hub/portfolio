import { twMerge } from 'tailwind-merge'

export default function Title({
	children,
	className
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1 className={twMerge('text-4xl font-bold text-primary', className)}>
			{children}
		</h1>
	)
}
