import Header from '@/components/header'
import Footer from '@/components/footer'
import { Container } from 'react-bootstrap'
import MyTable from '@/components/table'
export default function Ex2Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>

    )
}