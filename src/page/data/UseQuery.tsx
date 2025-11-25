import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

interface model1 {
    name: string;
}

async function fetchData() {
    const { data } = await axios.get('/api/read')
    return data
}

function UseQuery() {

    const { data, error, isLoading } = useQuery({
        queryKey: 'fetchData',
        queryFn: fetchData
    })

    if (isLoading) return (<>Loading...</>)
    if (error) return (<>Error: {(error as Error).message}</>)

    return (
        <>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </>
    )

}



export default UseQuery;