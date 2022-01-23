import { selector } from 'recoil';
import { searchTextFormState } from '../atmos/SearchTextFormAtom';
import { todoListState } from '../atmos/TodoListAtom';
import { Todo } from './../../Todo';

export const searchedTodoListSelector = selector<Todo[]>({
    key: 'searchedTodoListSelector',
    get: ({ get }) => {
        // 引数のgetを使って、Atomから最新の値を取得（タスク一覧）
        const todoList: Todo[] = get(todoListState);

        // 同様に検索フィールドの文字列を取得
        const searchText: string = get(searchTextFormState);

        // 検索フィールドに入力がある場合は、その条件に合致したタスクのみを返却する
        return searchText
            ? todoList.filter((t) => t.title.includes(searchText))
            : todoList;
    },
});
