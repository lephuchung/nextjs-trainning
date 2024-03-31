'use client'
import React, { useEffect } from 'react'

const Example2 = () => {
    const fetchData = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();
        console.log('check data: ', data);

    }
    useEffect(() => {
        fetchData('http://localhost:8000/blogs')
    }, [])
    return (
        <div>
            <h1>Hahaha, hello world</h1>
        </div>
    )
}

export default Example2