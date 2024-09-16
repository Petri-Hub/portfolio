'use client'

import Link from "@/ui/base/Link"

export default function Page() {
	return (
		<div className="size-full grid place-items-center content-center gap-8">
			<h1 className="text-primary font-bold text-7xl">Error</h1>
			<p className="text-third text-large w-[250px] leading-relaxed text-center">
         Something went wrong while loading this page. <Link href={'/'}>Go back</Link>.
			</p>
		</div>
	)
}