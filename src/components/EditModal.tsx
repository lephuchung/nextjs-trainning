'use client'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
    showEdit: boolean
    setShowEdit: (value: boolean) => void
    blogEdit: IBlog | null
    setBlogEdit: (value: IBlog | null) => void
}

const EditModal = (props: IProps) => {
    const { showEdit, setShowEdit, blogEdit, setBlogEdit } = props
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        if (blogEdit && blogEdit.id) {
            setId(blogEdit.id)
            setTitle(blogEdit.title)
            setAuthor(blogEdit.author)
            setContent(blogEdit.content)
        }

    }, [blogEdit])
    const handleClose = () => {
        setShowEdit(false);
        setTitle('');
        setAuthor('');
        setBlogEdit(null);
        setContent('');
    }

    const handleOnChangeTitle = (event: any) => {
        setTitle(event?.target.value)
    }

    const handleOnChangeAuthor = (event: any) => {
        setAuthor(event?.target.value)
    }

    const handleOnChangeContent = (event: any) => {
        setContent(event?.target.value)
    }

    const handleOnClickUpdate = () => {
        if (!title) {
            toast.error('Missing title');
            return
        }
        if (!author) {
            toast.error('Missing author');
            return
        }
        if (!content) {
            toast.error('Missing content');
            return
        }
        let data = { title, author, content };
        // console.log('check data: ', data);
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => {
            if (res) {
                toast.success('Edit success!');
                handleClose();
                mutate('http://localhost:8000/blogs')
            }
        });
    }

    return (
        <>
            <Modal
                show={showEdit}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit a blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Hello world" value={title} onChange={(event) => handleOnChangeTitle(event)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Noris Nora" value={author} onChange={(event) => handleOnChangeAuthor(event)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={7} value={content} onChange={(event) => handleOnChangeContent(event)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleOnClickUpdate()}>Update</Button>
                </Modal.Footer>
            </Modal>
            {/* {console.log('check: ', Title, Author, Content)} */}
        </>
    );
}

export default EditModal