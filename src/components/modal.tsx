'use client'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

interface IProps {
    show: boolean
    setShow: (value: boolean) => void
}

function MyModal(props: IProps) {
    const { show, setShow } = props
    const [Title, setTitle] = useState<string>('');
    const [Author, setAuthor] = useState<string>('');
    const [Content, setContent] = useState<string>('');
    const handleClose = () => {
        setShow(false);
        setTitle('');
        setAuthor('');
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

    const handleOnClickSave = () => {
        let data = { Title, Author, Content };
        console.log('check data: ', data);
        setTitle('');
        setAuthor('');
        setContent('');
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Hello world" value={Title} onChange={(event) => handleOnChangeTitle(event)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Noris Nora" value={Author} onChange={(event) => handleOnChangeAuthor(event)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={7} value={Content} onChange={(event) => handleOnChangeContent(event)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleOnClickSave()}>Save</Button>
                </Modal.Footer>
            </Modal>
            {/* {console.log('check: ', Title, Author, Content)} */}
        </>
    );
}

export default MyModal;