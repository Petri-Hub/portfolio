import Link from "@/ui/base/Link"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: 'Fernando Petri | 404'
}

export default function Page() {
	return (
		<div className="size-full grid place-items-center content-center gap-8">
			<h1 className="text-primary font-bold text-7xl">404</h1>
			<p className="text-third text-large w-[250px] leading-relaxed text-center">
				There is nothing here my fellow traveler, <Link href={'/'}>go back</Link>.
			</p>
		</div>
	)
}
