import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { QueryClient, QueryClientProvider, useQuery, useMutation } from 'react-query';

import type * as model1type from './model1.tsx';

const queryClient = new QueryClient()

async function getTodo() {

    const { data } = await axios.get<model1type.model1[]>('/api/todo')
    return data

}

async function postTodo() {

    const { data } = await axios.post<model1type.restFeedback>('/api/todo')
    return data

}

async function patchTodo() {

    const { data } = await axios.patch<model1type.restFeedback>('/api/todo')
    return data

}

async function deleteTodo() {

    const { data } = await axios.delete<model1type.restFeedback>('/api/todo')
    return data

}

function OnMounted() {

    const [ isListLoaded, setIsListLoaded ] = useState(false);

    const { data: todoList, isLoading, isError, refetch:updateTodoList } = useQuery({
        queryKey: ['useQuery'],
        queryFn: getTodo,
        enabled: isListLoaded,
        onSuccess: () => setIsListLoaded(true),
        onError: () => setIsListLoaded(false)
    })

    const postMutation = useMutation(postTodo, {

        onSuccess: () => {
            // POST 성공 시, todo 목록을 자동으로 다시 가져옵니다.
            handler.read();
            console.log('POST 성공!');
        }

    });

    const patchMutation = useMutation(patchTodo, {

        onSuccess: () => {
            // POST 성공 시, todo 목록을 자동으로 다시 가져옵니다.
            handler.read();
            console.log('Patch 성공!');
        }

    })

    const deleteMutation = useMutation(deleteTodo, {

        onSuccess: () => {
            // POST 성공 시, todo 목록을 자동으로 다시 가져옵니다.
            handler.read();
            console.log('Patch 성공!');
        }

    })

    const handler = {

        read() {
            updateTodoList()
        },

    }


    return (
        <>
            <ul>
                {
                    isListLoaded && todoList && (
                        todoList?.map((todo: model1type.model1, idx: number) => {
                            return <li key={idx}>{todo.name} {todo.age}</li>
                        })
                    )
                }
            </ul>

            <button type="button" onClick={ () => updateTodoList() }>READ</button>
            <button type="button" onClick={ () => postMutation.mutate() }>POST</button>
            <button type="button" onClick={ () => patchMutation.mutate() }>PATCH</button>
            <button type="button" onClick={ () => deleteMutation.mutate() }>DELETE</button>

        </>
    )

}

function CRUD() {


    return (
        <>
            <QueryClientProvider client={queryClient}>
                <OnMounted />
            </QueryClientProvider>
        </>
    )

}

export default CRUD;