import { atom } from 'recoil';
import { Todo } from './../../Todo';

export const todoListState = atom<Todo[]>({
    key: 'todoList',
    default: [
        { title: 'one', text: 'タスク1です。' },
        { title: 'two', text: 'タスク２です。' },
        { title: 'three', text: 'タスク３です。' },
    ],
});

