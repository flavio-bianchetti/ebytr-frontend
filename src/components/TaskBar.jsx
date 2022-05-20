import React, { useState, useEffect, useContext } from 'react';
import TodoListContext from '../context/TodoListContext';
import { setData, updateData } from '../services/request';

const TaskBar = () => {
  const [description, setDescription] = useState('');
  const {
    userInfo,
    insertTask,
    taskToUpdate,
    // updateTask,
  } = useContext(TodoListContext);

  const addTask = () => {
    const { id, token } = userInfo;
    setData(token, '/todolist', { userId: id, description, status: 'inProgress' })
      .then((response) => {
        insertTask(response.description, response.status);
        setDescription('');
      }).catch((err) => {
        console.error(err);
        window.alert('Ocorreu um erro durante a gravação da tarefa. Favor tentar novamente.');
        setDescription('');
    });
  };

  const changeTask =  () => {
    const { id, token } = userInfo;
    updateData(token, `/todolist/task/${id}`, { description, status: '*' })
      .then((response) => {
        insertTask(response.description, response.status);
        setDescription('');
      }).catch((err) => {
        console.error(err);
        window.alert('Ocorreu um erro durante a alteração da tarefa. Favor tentar novamente.');
        setDescription('');
      });
  };

  useEffect(() => {
    if (taskToUpdate.id) {
      setDescription(taskToUpdate.description);
    }
  }, [taskToUpdate]);

  return (
    <form>
      <label htmlFor="task-label">
        Tarefa:
        <input
          className="task-input"
          data-testid="input-task"
          value={ description }
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Digite sua tarefa"
        />
      </label>
      <button
        className="submit-button"
        data-testid="button-submit"
        type="submit"
        onClick={ () => taskToUpdate.id ? changeTask() : addTask() }
      >
        { taskToUpdate.id ? 'Alterar' : 'Adicionar' }
      </button>
    </form>
  );
}

export default TaskBar;
