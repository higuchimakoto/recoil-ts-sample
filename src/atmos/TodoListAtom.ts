import { atom } from 'recoil';
import { Todo } from './../../Todo';

export const todoListState = atom<Todo[]>({
    key: 'todoList',
    default: [{ title: 'one' }, { title: 'two' }, { title: 'three' }],
});
