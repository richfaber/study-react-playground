import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { model1 } from '../test/model1';


async function update() {

    const { data }  = await axios.patch<model1[]>(`/api/todo`)
    return data

}

function UseMutation() {

    const [list, setList] = useState<model1[]>([])

    const updateMuate = useMutation(update, {
        onSuccess: (res) => {
            setList(res)
        },
        onError: () => {},
        onSettled: () => {}, // 성공실패 무관하게 호출
        onMutate: () => {} // 호출전에 실행
    })


    return (
        {
            
        }
    )
}

export default UseMutation