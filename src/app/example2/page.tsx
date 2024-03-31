'use client'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import MyTable from '@/components/table'

const Example2 = () => {

    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        'http://localhost:8000/blogs',
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    if (!data || isLoading) {
        return (
            <div>
                loading...
            </div>
        )
    }

    console.log('check data: ', data);


    // const fetchData = async (url: string) => {
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     console.log('check data: ', data);

    // }
    // useEffect(() => {
    //     fetchData('http://localhost:8000/blogs')
    // }, [])
    return (
        <div>
            <h1>Hahaha, hello world</h1>
            <MyTable
                blogs={data}
            />
        </div>
    )
}

export default Example2