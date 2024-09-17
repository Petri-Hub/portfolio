import { twMerge } from "tailwind-merge";

export default function Code({ children, className }: React.HTMLAttributes<HTMLElement>){
    return <code className={twMerge('text-primary font-mono p-4 px-8 bg-fourth rounded', className)}>ERROR | {children}</code>
}