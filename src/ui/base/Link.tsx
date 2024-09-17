import NextLink, { LinkProps } from 'next/link'

type BaseLinkProps = {
	className?: string
} & LinkProps &
	React.PropsWithChildren

export default function Link({ children, ...props }: BaseLinkProps) {
	return (
		<NextLink className='block font-semibold text-link' {...props}>
			{children}
		</NextLink>
	)
}
