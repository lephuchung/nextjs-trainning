'use client'
import useSWR from 'swr'
import MyTable from '@/components/table'
import { mutate } from 'swr'

const Blogs = () => {
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
        <MyTable
            blogs={data?.sort((a: any, b: any) => b.id - a.id)}
        />
    )
}

export default Blogs