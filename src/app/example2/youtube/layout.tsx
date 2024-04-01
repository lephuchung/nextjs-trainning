import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Youtube test',
    description: 'test metadata Youtube'
}

export default function YtbLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}