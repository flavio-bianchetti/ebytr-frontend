import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import TodoListContext from './TodoListContext';

const TodoListProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [todoList, setTodoList] = useState([]);
  const [taskToUpdate, setTaskToUpdate] = useState({});
  // idtarefa, descricao, data criação, status( pendente, em andamento, pronto),
  // ordenar por ordem alfabética, ordenar por data de criação, ordenar por status

  useEffect(() => {
    localStorage.setItem('ebytrUser', JSON.stringify(userInfo));
  }, [userInfo]);

  useEffect(() => {
    localStorage.setItem('ebytrTodoList', JSON.stringify(todoList));
  }, [todoList]);

  const requestAccess = (email, password) => {
    //verificar usuário no bd. se não existir, retornar erro.
    // se existir, gravar as informações recebidas junto com o token.
    console.log(password);
    const name = 'Teste';
    const token = '123.456.789';
    setUserInfo({ name, email, token });
  };

  const insertTask = (description, status) => {
    const ordenedTasks = todoList.sort((a, b) => a.id - b.id);
    const lastTask = ordenedTasks[ordenedTasks.length - 1] || { id: 0};
    const id = lastTask.id + 1;
    const date = new Date().toLocaleString();
    const newTodoList = [...todoList, { id, description, date, status }];
    setTodoList(newTodoList);
  };

  const updateTask = (id, description) => {
    const newTodoList = todoList.map((task) => {
      if (task.id === id) {
        task.description = description;
      }
      return task;
    });
    setTodoList(newTodoList);
    setTaskToUpdate({});
  };

  const selectTaskToUpdate = (id, description) => {
    setTaskToUpdate({ id, description });
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  const updateStatus = (id, status) => {
    const newTodoList = todoList.map((task) => {
      if (task.id === id) {
        task.status = status;
      }
      return task;
    });
    setTodoList(newTodoList);
  };

  // solução adaptada do site:
  // https://stackoverflow.com/questions/66147595/sorting-state-array-of-objects-by-object-key-in-react
  const orderBy = (field) => {
    const ordenedTasks = todoList
      .sort((a, b) => {
        if (a[field] < b[field]){
          return -1
        } else if (a[field] > b[field]){
            return 1
        } else {
          return 0
        }
      })
      .map((task) => task);
    console.log(ordenedTasks);
    setTodoList(ordenedTasks);
  };

  const todoListValues = {
    todoList,
    userInfo,
    insertTask,
    requestAccess,
    taskToUpdate,
    updateTask,
    selectTaskToUpdate,
    deleteTask,
    updateStatus,
    orderBy,
  };

  return (
    <TodoListContext.Provider value={ todoListValues }>
      { children }
    </TodoListContext.Provider>
  );
};

TodoListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TodoListProvider;
