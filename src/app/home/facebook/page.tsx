'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'

const Facebook = () => {
    const router = useRouter()

    const handleOnClickBack = () => {
        router.push('/home')
    }
    return (
        <div>
            <span>Facebook</span>
            <div>
                <button onClick={() => handleOnClickBack()}>Back to homepage</button>
                <Button variant='primary'>Test Bootstrap</Button>
            </div>
        </div>
    )
}

export default Facebook