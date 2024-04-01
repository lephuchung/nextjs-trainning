import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Tiktok test',
    description: 'test metadata Tiktok'
}

export default function TiktokLayout({
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