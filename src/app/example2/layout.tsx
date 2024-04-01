import Header from '@/components/header'
import Footer from '@/components/footer'
import { Container } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Ex2Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <Container style={{ minHeight: 'calc(100vh - 80px)' }}>
                {children}
            </Container>
            <Footer />
            <ToastContainer />
        </>

    )
}