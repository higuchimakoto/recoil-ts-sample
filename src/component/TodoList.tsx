import React from 'react';
import { useRecoilValue } from 'recoil';
import { Todo } from '../../Todo';
import { searchedTodoListSelector } from '../selectors/SearchedTodoListSelector';

export const TodoList: React.FC = () => {
    // useRecoilValueにsearchedTodoListSelectorを渡す
    // 返される値はsearchedTodoListSelectorのget()で定義した通りTodo[]
    const list: Todo[] = useRecoilValue(searchedTodoListSelector);

    return (
        <div>
            <p>タスク一覧</p>
            <ul>
                {list.map((todo: Todo, i: number) => {
                    return <li key={`${todo.title}_${i}`}>{todo.title}</li>;
                })}
            </ul>
        </div>
    );
};
