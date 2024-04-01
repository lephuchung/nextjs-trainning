'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import MyModal from '@/components/modal'
import { useState } from 'react';

interface IProps {
    blogs: IBlog[]
}

function MyTable(props: IProps) {
    const { blogs } = props
    const [show, setShow] = useState<boolean>(false)
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='mb-1' style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h3>
                    Blogs Table
                </h3>
                <Button variant='secondary' onClick={() => handleShow()}>Add new</Button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs && blogs.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                    <Button variant='primary'>Detail</Button>
                                    <Button style={{ margin: '0 5px' }} variant='warning'>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
            <MyModal show={show} setShow={setShow} />
        </div>
    );
}

export default MyTable;