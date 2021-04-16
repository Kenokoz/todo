import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/appHeader';
import SearchPanel from './components/searchPanel';
import TodoList from './components/todoList';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
