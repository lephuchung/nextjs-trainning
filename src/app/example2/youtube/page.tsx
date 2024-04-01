'use client'
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from 'react-bootstrap'

const Youtube = () => {
    const router = useRouter()

    const handleOnClickBack = () => {
        router.push('/example2')
    }
    return (
        <div>
            <span>Youtube page</span>
            <div>
                <Button variant='primary' onClick={() => handleOnClickBack()}>Back to home page</Button>
            </div>
        </div>
    )
}

export default Youtube