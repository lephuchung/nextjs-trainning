
import { Container } from 'react-bootstrap'
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';
export default function BlogDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Container style={{ minHeight: 'calc(100vh - 80px)' }}>
                <Link className='btn btn-primary my-3' href={'/example2/blogs'}>Back to blogs page</Link>
                {children}
            </Container>
        </>

    )
}