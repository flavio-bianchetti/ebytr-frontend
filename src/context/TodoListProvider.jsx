import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import TodoListContext from './TodoListContext';

const TodoListProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('ebytrUser')));
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('ebytrTodoList')));
  const [taskToUpdate, setTaskToUpdate] = useState({});

  useEffect(() => {
    localStorage.setItem('ebytrUser', JSON.stringify(userInfo));
  }, [userInfo]);

  useEffect(() => {
    localStorage.setItem('ebytrTodoList', JSON.stringify(todoList));
  }, [todoList]);

  const initialization = () => {
    setUserInfo({});
    setTodoList([]);
  };

  const requestAccess = (id, email, name, token) => {
    setUserInfo({ id, email, name, token });
  };

  const insertTask = (description, status) => {
    const ordenedTasks = todoList.sort((a, b) => a.id - b.id);
    const lastTask = ordenedTasks[ordenedTasks.length - 1] || { id: 0};
    const id = lastTask.id + 1;
    // solução adaptada do site:
    //
    const date = new Date().toLocaleString(
      'pt-BR',
      {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      },
    );
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
        if (a[field] < b[field]) {
          return -1
        } else if (a[field] > b[field]) {
            return 1
        } else {
          return 0
        }
      })
      .map((task) => task);
    setTodoList(ordenedTasks);
  };

  const todoListValues = {
    initialization,
    todoList,
    setTodoList,
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
