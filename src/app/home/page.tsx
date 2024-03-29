'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import hehe from '@/styles/app.module.css'
import haha from '@/styles/noris.module.css'

const HomePage = () => {
    const router = useRouter();
    const handleOnClickBack = () => {
        router.push('/')
    }
    return (
        <div>
            <ul>
                <li className={hehe['test']}>
                    <Link href='/home/facebook'>
                        <span className={haha['test']}>Facebook</span>
                    </Link>
                </li>
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