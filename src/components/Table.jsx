import React, { useContext, useEffect } from 'react';
import TodoListContext from '../context/TodoListContext';
import { updateData, deleteData, requestData } from '../services/request';
import { useHistory } from 'react-router-dom';

const Table = () => {
  const {
    userInfo,
    todoList,
    setTodoList,
    selectTaskToUpdate,
    deleteTask,
    updateStatus,
    orderBy,
  } = useContext(TodoListContext);
  const history = useHistory();

  useEffect(() => {
    if (userInfo.id) {
      requestData(
        userInfo.token,
        `/todolist/${userInfo.id}`,
      ).then((response) => {
        setTodoList(response);
      }).catch((err) => {
        console.error(err);
        window.alert('Você precisa estar logado para acessar esta página.');
        history.push('/');
      });
    }
  }, []);

  const updateStatusTask = async (idTask, description, status) => {
    try {
      const { token } = userInfo;
      await updateData(token, `/todolist/task/${idTask}`, { description, status });
      updateStatus(idTask, status);
    } catch (err) {
      console.error(err);
      window.alert('Ocorreu um erro durante a alteração da tarefa. Favor tentar novamente.');
    }
  };

  const deleteTodoTask = async (idTask) => {
    try {
      const { token } = userInfo;
      await deleteData(token, `/todolist/task/${idTask}`);
      deleteTask(idTask);
    } catch (err) {
      console.error(err);
      window.alert('Ocorreu um erro durante a exclusão da tarefa. Favor tentar novamente.');
    }
  };

    return (
      <table
        data-testid="table-tasks"
      >
        <thead>
          <tr>
            <th
              onClick={() => orderBy('description')}
            >
              descrição
            </th>
            <th
              onClick={() => orderBy('date')}
            >
              data
            </th>
            <th
              onClick={() => orderBy('status')}
            >
              status
            </th>
            <th>ação</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((task) => (
            <tr
              key={ task.id }
            >
              <td>{ task.description }</td>
              <td>{ task.date }</td>
              <td> 
                {
                  <div>
                    <label>
                      <input
                        type="radio"
                        checked={ task.status === 'inProgress' && 'checked' }
                        name={ `status-${task.id}` }
                        onChange={ () => updateStatusTask(task.id, task.description, 'inProgress') }
                      />
                      Em andamento
                    </label>
                    <label>
                      <input
                        type="radio"
                        checked={ task.status === 'pending' && 'checked' }
                        name={ `status-${task.id}` }
                        onChange={ () => updateStatusTask(task.id, task.description, 'pending') }
                      />
                      Pendente
                    </label>
                    <label>
                      <input
                        type="radio"
                        checked={ task.status === 'finished' && 'checked' }
                        name={ `status-${task.id}` }
                        onChange={ () => updateStatusTask(task.id, task.description, 'finished') }
                      />
                      Finalizada
                    </label>
                  </div>
                }
              </td>
              <td>
                <button
                  onClick={ () => selectTaskToUpdate(task.id, task.description) }
                >
                  Alterar
                </button>
                <button
                  onClick={ () => deleteTodoTask(task.id) }
                >
                  Excluir
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;
  