import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import TodoListProvider from './context/TodoListProvider';

const renderWithRouterProvider = (component, route = '/') => {
  const history = createMemoryHistory();
  history.push(route);
  return ({ ...render(
    <TodoListProvider>
      <Router history={ history }>
        {component}
      </Router>
    </TodoListProvider>,
  ),
  history });
};

export default renderWithRouterProvider;
