import { http, HttpResponse } from 'msw';
import { model1 } from '../page/test/model1'

let mockList: model1[] = [
    { id: 1, name: '임꺽정1', age: 20 },
    { id: 2, name: '임꺽정2', age: 21 },
    { id: 3, name: '임꺽정3', age: 22 },
    { id: 4, name: '임꺽정4', age: 23 },
    { id: 5, name: '임꺽정5', age: 24 },
    { id: 6, name: '임꺽정6', age: 25 },
    { id: 7, name: '임꺽정7', age: 26 },
    { id: 8, name: '임꺽정8', age: 27 },
    { id: 9, name: '임꺽정9', age: 28 },
    { id: 10, name: '임꺽정10', age: 29 }
]

export const handlers = [

    http.get('/api/todo', () => HttpResponse.json(mockList)),
    
    http.post('/api/todo', async ({ request }) => {

        const newPost = await request.json() as model1;
        newPost.id = mockList.length + 1;
        mockList.push(newPost)

        return HttpResponse.json(newPost, { status: 201 });

    }),

    http.patch('/api/todo', async ({ request }) => {

        const newPost = await request.json() as model1;
        
        mockList.push(newPost)

        return HttpResponse.json(newPost, { status: 201 });

    }),

    http.delete('/api/todo', async ({ request }) => {

        const checkedPost = await request.json() as string[]
        mockList = mockList.filter(item => !checkedPost.includes( item.id.toString() ))

        return HttpResponse.json({ mockList, checkedPost }, { status: 200 })

    })

]