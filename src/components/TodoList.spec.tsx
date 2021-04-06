import React from 'react';
import { mount } from '@cypress/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders header title text', () => {
    mount(<TodoList />);
    cy.get('[data-testid="todo-title"]').should('have.text', 'todos');
  });

  it('renders add new todo input text', () => {
    mount(<TodoList />);
    cy.get('[data-testid="new-todo"]').should('have.attr', 'placeholder', 'Add new todo list here..');
  });

  it('can add new todo item with enter key', () => {
    mount(<TodoList />);
    const todo = 'Learn Cypress Component Testing';
    cy.get('[data-testid="new-todo"]').type(`${todo}{ENTER}`);
    cy.get('[data-testid="todo-checkbox"]').should('exist');
    cy.get('[data-testid="todo-name"]').should('have.text', todo);
  });
});