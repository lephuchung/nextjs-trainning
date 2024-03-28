import Link from 'next/link'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <ul>
                <li><Link href='/home/facebook'>Facebook</Link></li>
                <li><Link href='/home/tiktok'>Tiktok</Link></li>
                <li><Link href='/home/youtube'>Youtube</Link></li>
            </ul>
        </div>
    )
}

export default HomePage