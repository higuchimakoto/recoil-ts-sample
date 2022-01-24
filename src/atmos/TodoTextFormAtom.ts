import { atom } from 'recoil';

export const todoTextFormState = atom<string>({
    key: 'todoTextForm',
    default: '',
});
