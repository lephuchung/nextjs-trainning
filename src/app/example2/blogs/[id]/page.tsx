'use client'
import Link from 'next/link';
import React from 'react'
import Card from 'react-bootstrap/Card';
import useSWR from 'swr';
import Placeholder from 'react-bootstrap/Placeholder';

const BlogDetail = ({ params }: { params: { id: string } }) => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    if (!data || isLoading) {
        return (
            <Card style={{ width: 'lg' }}>
                <Card.Header>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                </Card.Header>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>
            </Card>
        )
    }
    console.log('check props: ', params.id, data);
    return (
        <>
            <Card
                bg={'light'}
                key={'Light'}
                text={'light' === 'light' ? 'dark' : 'white'}
                style={{ width: 'lg' }}
                className="mb-2"
            >
                <Card.Header>{data.author}</Card.Header>
                <Card.Body>
                    <Card.Title> {data.title} </Card.Title>
                    <Card.Text>
                        {data.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default BlogDetail