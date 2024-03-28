'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomePage = () => {
    const router = useRouter();
    const handleOnClickBack = () => {
        router.push('/')
    }
    return (
        <div>
            <ul>
                <li><Link href='/home/facebook'>Facebook</Link></li>
                <li><Link href='/home/tiktok'>Tiktok</Link></li>
                <li><Link href='/home/youtube'>Youtube</Link></li>
            </ul>
            <div>
                <button onClick={() => handleOnClickBack()}>
                    Back to main title
                </button>
            </div>
        </div>
    )
}

export default HomePage