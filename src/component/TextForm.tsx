import React, { useCallback } from 'react';
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from 'recoil';
import { addButtonState } from '../atmos/AddButtonAtom';
import { todoTextFormState } from '../atmos/TodoTextFormAtom';

export const TextForm: React.FC = () => {
    const [todoTextFormValue, setTodoTextFormValue]: [
        string,
        SetterOrUpdater<string>
    ] = useRecoilState(todoTextFormState);

    const setIsDisabledButton: SetterOrUpdater<boolean> =
        useSetRecoilState(addButtonState);

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setTodoTextFormValue(event.target.value);
            event.target.value !== ''
                ? setIsDisabledButton(false)
                : setIsDisabledButton(true);
        },
        [setTodoTextFormValue, setIsDisabledButton]
    );

    return (
        <label htmlFor="">
            タスクの説明
            <input
                type="text"
                value={todoTextFormValue}
                onChange={onChange}
                name="text"
                style={{ margin: 12 }}
            />
        </label>
    );
};
