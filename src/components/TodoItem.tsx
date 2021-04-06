import React from 'react';
import '../App.css';

export interface ITodoItem {
  id: number,
  name: string,
} 

export interface ITodoItemProps {
  item: ITodoItem,
}

export default class TodoItem extends React.Component<ITodoItemProps> {
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" data-testid="todo-checkbox" className="checkbox" name="done" id={this.props.item.name}/>
        <label className="todo-item-label" data-testid="todo-name" htmlFor={this.props.item.name}>{this.props.item.name}</label>
      </div>
    );
  }
}