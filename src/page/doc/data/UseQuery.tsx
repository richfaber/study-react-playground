import axios from 'axios';
import React from 'react';
import { useQuery, QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient()

interface model1 {
    name: string;
}

async function fetchData() {
    const { data } = await axios.get('/api/read')
    return data
}

function DataFecth() {

    const { data, error, isLoading } = useQuery({
        queryKey: 'fetchData',
        queryFn: fetchData
    })

    if (isLoading) return (<>Loading...</>)
    if (error) return (<>Error: {(error as Error).message}</>)
    
    return (
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    )

}

function UseQuery() {


    return (
        <>
            <QueryClientProvider client={queryClient}>
                <DataFecth />
            </QueryClientProvider>
        </>
    )

}

export default UseQuery;