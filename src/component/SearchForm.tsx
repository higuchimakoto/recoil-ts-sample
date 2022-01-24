import React, { useCallback } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { searchTextFormState } from '../atmos/SearchTextFormAtom';

export const SearchForm: React.FC = () => {
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
