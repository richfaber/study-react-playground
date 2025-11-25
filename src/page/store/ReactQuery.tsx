import * as React from 'react';
import axios, { AxiosError } from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

// refetchOnWindowFocus
// refetchOnMount
// refetchOnReconnect
// staleTime
// cacheTime

interface D1 {
    name: string,
    description: string
}

const queryClient = new QueryClient();

const fetchData = async () => {
    const { data } = await axios.get<D1>('api/user');
    return data
}

function ReactQuery() {

    const { isLoading, error, data } = useQuery<D1, AxiosError>({

        queryKey: 'user',
        queryFn: fetchData

    });

    if( isLoading ) return 'loading'
    if(error) return 'An error has occurred: ' + error.message

    return (
        <QueryClientProvider client={queryClient}>

            <div>
                <h1>{data?.name}</h1>
                <p>{data?.description}</p>
            </div>

        </QueryClientProvider>
    )


}

export default ReactQueryExam