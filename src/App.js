import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import TodoList from './pages/TodoList';
import CreateUser from './pages/CreateUser';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/create" component={ CreateUser } />
      <Route path="/todolist" component={ TodoList } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
};

export default App;
