import React, { useContext, useEffect, useState } from 'react';
import TodoListContext from '../context/TodoListContext';

const Footer = () => {
  const { todoList } = useContext(TodoListContext);
  const [tasksQuantity, setTasksQuantity] = useState([0, 0, 0]);

  useEffect(() => {
    const newTasksQuantity = [0, 0, 0];
    todoList.forEach((task) => {
      if (task.status === 'inProgress') {
        newTasksQuantity[0] += 1;
      } else if (task.status === 'pending') {
        newTasksQuantity[1] += 1;
      } else if (task.status === 'finished') {
        newTasksQuantity[2] += 1;
      }
    });
    setTasksQuantity(newTasksQuantity);
  }, [todoList]);

  return (
    <footer>
      <div>
        Em andamento: <span>{ tasksQuantity[0] }</span>
      </div>
      <div>
        Pendentes: <span>{ tasksQuantity[1] }</span>
      </div>
      <div>
        Concluídas: <span>{ tasksQuantity[2] }</span>
      </div>
    </footer>
  );
}

export default Footer;
