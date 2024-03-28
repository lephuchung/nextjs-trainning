'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

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
            </div>
        </div>
    )
}

export default Facebook