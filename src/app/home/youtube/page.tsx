'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Youtube = () => {
    const router = useRouter()

    const handleOnClickBack = () => {
        router.push('/home')
    }
    return (
        <div>
            <span>Youtube</span>
            <div>
                <button onClick={() => handleOnClickBack()}>
                    Back to homepage
                </button>
            </div>
        </div>
    )
}

export default Youtube