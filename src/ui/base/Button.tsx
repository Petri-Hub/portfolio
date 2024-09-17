import { twMerge } from 'tailwind-merge'

export default function Button({
	children,
	className
}: React.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className={twMerge(
				'rounded bg-secondary duration-100 hover:bg-fourth border border-solid border-fourth px-6 py-2 text-base font-medium text-primary',
				className
			)}>
			{children}
		</button>
	)
}
