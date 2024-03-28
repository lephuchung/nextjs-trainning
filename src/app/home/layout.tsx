export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h3>Home Header hello world</h3>
            {children}
            <h3>Home Footer hello world</h3>
        </>

    )
}