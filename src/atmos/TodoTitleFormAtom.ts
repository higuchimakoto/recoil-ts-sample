import { atom } from 'recoil';

export const todoListFormState = atom<string>({
    key: 'todoTitleForm',
    default: '',
});

