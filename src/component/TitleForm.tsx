import e from 'express';
import React, { useCallback } from 'react';
import {
    SetterOrUpdater,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from 'recoil';
import { addButtonState } from '../atmos/AddButtonAtom';
import { todoTitleFormState } from '../atmos/TodoTitleFormAtom';

export const TitleForm: React.FC = () => {
    // useRecoilValueでtodoTitleStateの値を取得
    const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);

    // useSetRecoilStateでtodoTitleFormStateの値を更新するSetter関数を取得
    const setTodoTitleFormValue: SetterOrUpdater<string> =
        useSetRecoilState(todoTitleFormState);

    // isButtonDisabledを更新する関数を呼び出す必要がある。
    const setIsDisabledButton: SetterOrUpdater<boolean> =
        useSetRecoilState(addButtonState);

    // テキストフィールドのonChange処理
    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            // 先に取得したsetTodoTitleFormValueに対して更新したい値を渡して実行
            setTodoTitleFormValue(event.target.value);
            event.target.value !== ''
                ? setIsDisabledButton(false)
                : setIsDisabledButton(true);
        },
        [setTodoTitleFormValue, setIsDisabledButton]
    );

    return (
        <label>
            タスク名：
            <input
                type="text"
                value={todoTitleFormValue}
                onChange={onChange}
                name="title"
                style={{ margin: 12 }}
            />
        </label>
    );
};
