import Header from '@/components/header'
import Footer from '@/components/footer'
import { Container } from 'react-bootstrap'
import MyTable from '@/components/table'
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
            <Container>
                {children}
            </Container>
            <Footer />
            <ToastContainer />
        </>

    )
}