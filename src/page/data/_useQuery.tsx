import React from 'react';
import { useQuery } from 'react-query';

function UseQuery() {

    const { data, error, isLoading } = useQuery('fetchData', (res) => {
        console.log('fetch', res)
    })

    if (isLoading) return (<>Loading...</>)
    if (error) return (<>Error: { (error as Error).message }</>)

        return (
            <>
                <pre>
                    { JSON.stringify(data, null, 2) }
                </pre>
            </>
        )

}



export default UseQuery;