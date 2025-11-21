import useSWR from 'swr';

function DataFetch() {

    if (isLoading) return (<>Loading...</>)
    if (error) return (<>Error: { (error as Error).message }</>)

    return (
        <>

        </>
    )
}

export default DataFetch