import React, { Component } from 'react';
import AppHeader from '../appHeader/appHeader';
import SearchPanel from '../searchPanel/searchPanel';
import ItemStatusFilter from '../itemStatusFilter/itemStatusFilter';
import TodoList from '../todoList/todoList';
import ItemAddForm from '../itemAddForm/itemAddForm';
import './app.css';

class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, done: false, id: 1 },
      { label: 'Make Awesome App', important: false, done: false, id: 2 },
      { label: 'Have a lunch', important: false, done: false, id: 3 },
    ],
    term: '',
    filter: 'all',
  };

  handleDeleteItem = id => {
    const todos = [...this.state.todoData];
    const index = todos.findIndex(item => item.id === id);
    todos.splice(index, 1);

    this.setState({ todoData: todos });
  };

  handleAddItem = text => {
    const todos = [...this.state.todoData];
    const newItem = {
      label: text,
      important: false,
      done: false,
      id: todos.length + 1,
    };
    todos.push(newItem);

    this.setState({ todoData: todos });
  };

  toggleProperty(id, propName) {
    const todos = [...this.state.todoData];
    const index = todos.findIndex(item => item.id === id);
    todos[index][propName] = !todos[index][propName];
    this.setState({ todoData: todos });
  }

  handleToggleImportant = id => {
    this.toggleProperty(id, 'important');
  };

  handleToggleDone = id => {
    this.toggleProperty(id, 'done');
  };

  handleSearchChange = term => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(i =>
      i.label.toLowerCase().includes(term.toLowerCase())
    );
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.handleSearchChange} />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.handleDeleteItem}
          onToggleImportant={this.handleToggleImportant}
          onToggleDone={this.handleToggleDone}
        />
        <ItemAddForm onItemAdded={this.handleAddItem} />
      </div>
    );
  }
}

export default App;
