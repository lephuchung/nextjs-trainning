'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

interface IProps {
    blogs: IBlog[]
}

function MyTable(props: IProps) {
    const { blogs } = props
    return (
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
                            <td>{index + 1}</td>
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
    );
}

export default MyTable;