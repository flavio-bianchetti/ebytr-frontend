import React, { useContext } from 'react';
import Header from '../components/Header';
import TaskBar from '../components/TaskBar';
import Table from '../components/Table';
import Footer from '../components/Footer';
import TodoListContext from '../context/TodoListContext';
import { useHistory } from 'react-router-dom';

const TodoList = () => {
  const { userInfo } = useContext(TodoListContext);
  const history = useHistory();
  return (
    <>
      { !userInfo.id && history.push('/')  }
      <Header />
      <TaskBar />
      <Table />
      <Footer />
    </>
  );
};

export default TodoList;
