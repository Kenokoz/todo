import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/appHeader';
import SearchPanel from './components/searchPanel';
import TodoList from './components/todoList';
import ItemStatusFilter from './components/itemStatusFilter';

import './index.css';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
