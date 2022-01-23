import React, { useCallback, useState } from 'react';
import {
    SetterOrUpdater,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from 'recoil';
import { searchTextFormState } from '../atmos/SearchTextFormAtom';

export const SearchForm: React.FC = () => {
    // atom（searchTextFormState）を取得
    // const searchTextFormValue: string = useRecoilValue(searchTextFormState);

    // // searchTextFormStatenoの更新関数を取得
    // const setSearchTextFormValue: SetterOrUpdater<string> =
    //     useSetRecoilState(searchTextFormState);

    // これも多分同義
    const [value, setValue]: [string, SetterOrUpdater<string>] =
        useRecoilState(searchTextFormState);

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        },
        [setValue]
    );

    return (
        <label>
            検索：
            <input
                type="text"
                value={value}
                onChange={onChange}
                name="title"
                style={{
                    margin: 12,
                }}
            />
        </label>
    );
};
