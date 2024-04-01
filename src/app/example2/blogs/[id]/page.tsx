import React from 'react'

const BlogDetail = ({ params }: { params: { id: string } }) => {
    console.log('check props: ', params.id);
    return (
        <div>BlogDetail - {params.id}</div>
    )
}

export default BlogDetail