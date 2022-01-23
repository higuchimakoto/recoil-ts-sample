import React from 'react';
import './App.css';
import { AddButton } from './component/AddButton';
import { SearchForm } from './component/SearchForm';
import { TitleForm } from './component/TitleForm';
import { TodoList } from './component/TodoList';

export const App: React.FC = () => {
    return (
        <div>
            <div>
                <TitleForm />
                <AddButton />
            </div>
            <SearchForm />
            <TodoList />
        </div>
    );
};
