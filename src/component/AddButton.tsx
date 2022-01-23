import React, { useCallback } from 'react';
import {
    SetterOrUpdater,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from 'recoil';
import { Todo } from '../../Todo';
import { addButtonState } from '../atmos/AddButtonAtom';
import { todoListState } from '../atmos/TodoListAtom';
import { todoTitleFormState } from '../atmos/TodoTitleFormAtom';

export const AddButton: React.FC = () => {
    const todoList: Todo[] = useRecoilValue(todoListState);

    const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);

    const setTodoList: SetterOrUpdater<Todo[]> =
        useSetRecoilState(todoListState);

    const setTitleFormValue: SetterOrUpdater<string> =
        useSetRecoilState(todoTitleFormState);

    // buttonの活性を切り替えるstateを定義する。
    const isDisabledButton: boolean = useRecoilValue(addButtonState);

    const onClick = useCallback(() => {
        setTodoList([...todoList, { title: todoTitleFormValue }]);

        // タスクを追加したら入力欄は空にする
        setTitleFormValue('');
    }, [todoList, todoTitleFormValue, setTodoList, setTitleFormValue]);

    return (
        <button onClick={onClick} disabled={isDisabledButton}>
            追加
        </button>
    );
};

// テキストが未入力の時は、ボタンを非活性にする。文字が入ってたらボタンを活性にする。

// 入力値の値を判定する。
// テキスト入力欄の入力状態を監視する。state
