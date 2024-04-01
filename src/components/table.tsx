'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import MyModal from '@/components/modal'
import { useState } from 'react';
import EditModal from './EditModal';
import Link from 'next/link';

interface IProps {
    blogs: IBlog[]
}

function MyTable(props: IProps) {
    const { blogs } = props;

    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => setShow(true);

    const [blogEdit, setBlogEdit] = useState<IBlog | null>(null);
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const handleOnClickEdit = () => {
        setShowEdit(true);
    };

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
                                    <Link className='btn btn-primary' href={`/example2/blogs/${item.id}`}>Detail</Link>
                                    <Button style={{ margin: '0 5px' }} variant='warning' onClick={() => { handleOnClickEdit(); setBlogEdit(item) }}>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
            <MyModal show={show} setShow={setShow} />
            <EditModal showEdit={showEdit} setShowEdit={setShowEdit} blogEdit={blogEdit} setBlogEdit={setBlogEdit} />
        </div >
    );
}

export default MyTable;