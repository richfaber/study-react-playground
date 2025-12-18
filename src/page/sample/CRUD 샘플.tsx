import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { QueryClient, QueryClientProvider, useQuery, useMutation } from 'react-query';

import * as model1type from './model1.tsx';

const queryClient = new QueryClient()

async function getTodo() {

    const { data } = await axios.get<model1type.model1[]>('/api/todo')
    return data

}

async function postTodo(checkedItems: string[]) {

    const { data } = await axios.post<model1type.restFeedback>('/api/todo', { data: checkedItems })
    return data

}

async function patchTodo(checkedItems: string[]) {

    const { data } = await axios.patch<model1type.restFeedback>('/api/todo', { data: checkedItems })
    return data

}

async function deleteTodo(checkedItems: string[]) {

    const { data } = await axios.delete<model1type.restFeedback>('/api/todo', { data: checkedItems })
    return data

}

function OnMounted() {

    const [localTodoList, setLocalTodoList] = useState<model1type.model1[]>([]);

    const [editedItem, setEditedItem] = useState<model1type.model1[]>([]);
    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    const [isListLoaded, setIsListLoaded] = useState(false);

    const { data: todoList, isLoading, isError, refetch: updateTodoList } = useQuery({
        queryKey: ['useQuery'],
        queryFn: getTodo,
        enabled: isListLoaded,
        onSuccess: (data) => {
            setLocalTodoList(data);
            setEditedItem([]);
            setCheckedItems([]);
        },
        onError: () => setIsListLoaded(false)
    })

    const handleCheckboxChange = function (e: React.ChangeEvent<HTMLInputElement>) {

        const id = e.target.value;
        const checked = e.target.checked;

        if (checked) {

            setCheckedItems(prev => [...prev, id]);

        } else {

            setCheckedItems(prev => prev.filter(item => item !== id));

        }

    }

    const postMutation = useMutation(() => postTodo(checkedItems), {

        onSuccess: () => {
            updateTodoList();
            console.log('POST 성공!');
        }

    });

    const patchMutation = useMutation(() => patchTodo(checkedItems), {

        onSuccess: () => {
            updateTodoList();
            console.log('Patch 성공!');
        }

    })

    const deleteMutation = useMutation(() => deleteTodo(checkedItems), {

        onSuccess: () => {
            updateTodoList();
            console.log('Delete 성공!');
        }

    })

    useEffect(() => {

        console.log('editedItem ->', editedItem)

    }, [editedItem])

    const handleValueChange = function (e: React.ChangeEvent<HTMLInputElement>, id: number) {

        const { name, value } = e.target;
        const updateValue = (name == 'age') ? parseInt(value, 10) : value

        setEditedItem(prev => {
            
            const index = prev.findIndex(item => item.id === id);
            if (index >= 0) {
                return prev.map(item =>
                    item.id === id ? { ...item, [name]: updateValue } : item
                );
            }
            return [...prev, { id, [name]: updateValue }];

        })
    
    }

    return (
        <>
            <form name="">
                <ul>
                    {
                        isListLoaded && localTodoList && (

                            localTodoList.map((todo: model1type.model1, idx: number) => {

                                return <li key={idx}>
                                    {/* 리액트는 input 의 고유 value 속성을 사용하는 경우 onChange 를 연결해야만 한다. */}
                                    <input type="checkbox" onChange={handleCheckboxChange} value={`${todo.id}`} />
                                    이름:<input type="text" name="name" onChange={(e) => handleValueChange(e, todo.id)} defaultValue={todo.name} />
                                    나이:<input type="number" name="age" onChange={(e) => handleValueChange(e, todo.id)} defaultValue={todo.age} style={{ width: '30px' }} />

                                    unControllName:<input type="text" name="unControllName" defaultValue={todo.name} />
                                    unControllAge:<input type="number" name="unControllAge" defaultValue={todo.age} style={{ width: '30px' }} />

                                </li>

                            })

                        )
                    }
                </ul>
            </form>

            <button type="button" onClick={() => updateTodoList()}>READ</button>
            <button type="button" onClick={() => postMutation.mutate()}>POST</button>
            <button type="button" onClick={() => patchMutation.mutate()}>PATCH</button>
            <button type="button" onClick={() => deleteMutation.mutate()}>DELETE</button>

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