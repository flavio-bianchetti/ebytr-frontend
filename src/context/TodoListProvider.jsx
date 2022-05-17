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

  const todoListValues = {
    todoList,
    userInfo,
    insertTask,
    requestAccess,
    taskToUpdate,
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
