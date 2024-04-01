import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Facebook test',
    description: 'test metadata Facebook'
}

export default function FBLayout({
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