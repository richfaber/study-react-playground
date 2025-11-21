import React, { useState, useEffect } from 'react';

type User = {
    id: number;
    name: string;
}

function anotherAPI() {

    // Fetch API 라고 가정하고
    return Promise.resolve({ 
        ok: true, 
        json: () => ([{ id: 1, name: '우뢰매' }, { id: 2, name: '산기슭' }])
    })

}

function FetchAPI() {
    
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        anotherAPI()
            .then(res => {

                if( !res.ok ) {
                    throw new Error('Network response was not ok');
                }

                return res.json()

            })
            .then(data => {

                setUsers( data );
                
            })
            .finally(() => {

                setLoading( false );

            })

    })

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

    return (
        <>
            <ul>

            {
                users.map(user => (
                    <li key={ user.id }>{ user.name }</li>
                ))
            }

            </ul>

        </>
    )
}

export default FetchAPI