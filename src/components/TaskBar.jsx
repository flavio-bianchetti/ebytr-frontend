import React, { useState, useEffect, useContext } from 'react';
import TodoListContext from '../context/TodoListContext';

const TaskBar = () => {
  const [description, setDescription] = useState('');
  const {
    insertTask,
    taskToUpdate,
    updateTask,
  } = useContext(TodoListContext);

  const addTask = () => {
    insertTask(description, 'inProgress');
    setDescription('');
  };

  const changeTask = () => {
    updateTask(taskToUpdate.id, description);
    setDescription('');
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
        type="button"
        onClick={ () => taskToUpdate.id ? changeTask() : addTask() }
      >
        { taskToUpdate.id ? 'Alterar' : 'Adicionar' }
      </button>
    </form>
  );
}

export default TaskBar;
