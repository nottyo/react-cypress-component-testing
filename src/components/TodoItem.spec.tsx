import React from 'react';
import { mount } from '@cypress/react';
import TodoItem, { ITodoItem } from './TodoItem';

describe('TodoItem', () => {
  const item: ITodoItem = {
    id: 1,
    name: 'Learn Cypress',
  };
  it('renders item text', () => {
    mount(<TodoItem item={item} />);
    cy.get('[data-testid="todo-name"]').should('have.text', item.name);
  });

  it('strikethrough text if check the checkbox', () => {
    mount(<TodoItem item={item} />);
    cy.get('[data-testid="todo-checkbox"]').check();
    cy.get('[data-testid="todo-name"]').should('have.css', 'text-decoration', 'line-through solid rgb(153, 153, 153)');
  })
});