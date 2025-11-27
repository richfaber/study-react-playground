import { http, HttpResponse } from 'msw';
import { model1 } from '../page/test/model1'

const dummyModel1: model1[] = Array.from({ length: 10 }, (_, idx) => ({
    name: '임꺽정' + idx,
    age: Math.random() * 101
}))

export const handlers = [
    
    http.get('/api/todo', () => HttpResponse.json(dummyModel1) )

]