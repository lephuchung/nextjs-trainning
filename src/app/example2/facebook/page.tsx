'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'

const Facebook = () => {
    const router = useRouter()

    const handleOnClickBack = () => {
        router.push('/example2')
    }
    return (
        <div>
            <span>Facebook page</span>
            <div>
                <Button variant='primary' onClick={() => handleOnClickBack()}>Back to home page</Button>
            </div>
        </div>
    )
}

export default Facebook