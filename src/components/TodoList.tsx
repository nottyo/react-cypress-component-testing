import React from 'react';
import { ITodoItem } from './TodoItem';
import TodoItem from './TodoItem';

export interface ITodoListProps {}
export interface ITodoListState {
  items: ITodoItem[];
}

export default class TodoList extends React.Component<ITodoListProps, ITodoListState> {
  private newTodoRef: React.RefObject<HTMLInputElement>;
  constructor(props: ITodoListProps) {
    super(props);
    this.state = {
      items: [],
    }
    this.newTodoRef = React.createRef();
    this.handleOnAddNewItemKeyDown = this.handleOnAddNewItemKeyDown.bind(this);
  }

  handleOnAddNewItemKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'Enter') {
      return;
    }
    if (this.newTodoRef.current?.value) {
      const name = this.newTodoRef.current?.value;
      const { items } = this.state;
      const item: ITodoItem = {
        id: this.state.items.length + 1,
        name,
      };
      items.push(item);
      this.setState({ items });
      this.newTodoRef.current.value = '';
    }
  }

  renderItemList() {
    const todoItems = this.state.items.map((todo: ITodoItem) => {
      return (
        <TodoItem
          key={todo.id}
          item={todo}
        />
      )
    });
    return todoItems;
  }

  render() {
    return (
      <div>
        <section className="todo">
          <header>
            <h1 data-testid="todo-title">todos</h1>
            <input type="text" className="new-todo" name="new-todo" ref={this.newTodoRef}
              id="new-todo" data-testid="new-todo" autoFocus={true}
              onKeyDown={this.handleOnAddNewItemKeyDown} placeholder="Add new todo list here.." />
          </header>
          <div className="todo-items">
            {this.renderItemList()}
          </div>
        </section>
      </div>
    )
  }
}