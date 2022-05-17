import React from 'react';
import Header from '../components/Header';
import TaskBar from '../components/TaskBar';
import Table from '../components/Table';
import Footer from '../components/Footer';

const TodoList = () => {
  
  return (
    <>
      <Header />
      <TaskBar />
      <Table />
      <Footer />
    </>
  );
};

export default TodoList;
