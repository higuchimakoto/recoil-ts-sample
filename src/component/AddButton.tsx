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
import { todoTextFormState } from '../atmos/TodoTextFormAtom';
import { todoTitleFormState } from '../atmos/TodoTitleFormAtom';

// TODO:タスク名、タスクの説明両方入力してないと「追加ボタン」が押せない仕様にする。

export const AddButton: React.FC = () => {
    const todoList: Todo[] = useRecoilValue(todoListState);

    const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
    const todoTextFormValue: string = useRecoilValue(todoTextFormState);

    const setTodoList: SetterOrUpdater<Todo[]> =
        useSetRecoilState(todoListState);

    const setTitleFormValue: SetterOrUpdater<string> =
        useSetRecoilState(todoTitleFormState);

    const setTodoTextValue: SetterOrUpdater<string> =
        useSetRecoilState(todoTextFormState);

    // buttonの活性を切り替えるstateを定義する。
    const [isDisabledButton, setIsDisabledButton]: [
        boolean,
        SetterOrUpdater<boolean>
    ] = useRecoilState(addButtonState);

    const onClick = useCallback(() => {
        setTodoList([
            ...todoList,
            { title: todoTitleFormValue, text: todoTextFormValue },
        ]);

        // タスクを追加したら入力欄は空にする
        setTitleFormValue('');
        setTodoTextValue('');
        setIsDisabledButton(true);
    }, [
        todoList,
        todoTitleFormValue,
        setTodoList,
        setTitleFormValue,
        setIsDisabledButton,
        todoTextFormValue,
        setTodoTextValue,
    ]);

    return (
        <button onClick={onClick} disabled={isDisabledButton}>
            追加
        </button>
    );
};
