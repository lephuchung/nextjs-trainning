import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog page',
    description: 'test metadata blog page'
}

export default function BlogLayout({
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