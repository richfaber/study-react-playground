import React, { useState, useEffect } from 'react';

function anotherAPI() {

    // Fetch API 라고 가정하고
    return Promise.resolve({ json: () => ({ a: 10, b: 20 }) })

}

function DataFetch() {
    const [data, setData] = useState<{ a: number, b: number }>({ a: 0, b: 0});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        anotherAPI()
            .then(res => res.json())
            .then(data => {

                setData(data)

            })
            .catch(error => {

                setError(error);
                setLoading(false);

            })
            .finally(() => {

                setLoading(false)

            })

    }, [])

    return (
        <>
            데이터: { data.a } { data.b }
        </>
    )

    
}

export default DataFetch;