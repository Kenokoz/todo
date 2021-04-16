import React, { Component } from 'react';
import AppHeader from '../appHeader/appHeader';
import SearchPanel from '../searchPanel/searchPanel';
import ItemStatusFilter from '../itemStatusFilter/itemStatusFilter';
import TodoList from '../todoList/todoList';

import './app.css';

class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ],
  };

  handleDeleteItem = id => {
    const todos = [...this.state.todoData];
    const index = todos.findIndex(item => item.id === id);
    todos.splice(index, 1);

    this.setState({ todoData: todos });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.handleDeleteItem}
        />
      </div>
    );
  }
}

export default App;
