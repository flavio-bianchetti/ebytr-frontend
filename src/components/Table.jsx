import React, { useContext } from 'react';
import TodoListContext from '../context/TodoListContext';

const Table = () => {
  const {
    todoList,
    selectTaskToUpdate,
    deleteTask,
    updateStatus,
    orderBy,
  } = useContext(TodoListContext);

    return (
      <table
        data-testid="table-tasks"
      >
        <thead>
          <tr>
            <th>id</th>
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
              <td>{ task.id }</td>
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
                        onChange={ () => updateStatus(task.id, 'inProgress') }
                      />
                      Em andamento
                    </label>
                    <label>
                      <input
                        type="radio"
                        checked={ task.status === 'pending' && 'checked' }
                        name={ `status-${task.id}` }
                        onChange={ () => updateStatus(task.id, 'pending') }
                      />
                      Pendente
                    </label>
                    <label>
                      <input
                        type="radio"
                        checked={ task.status === 'finished' && 'checked' }
                        name={ `status-${task.id}` }
                        onChange={ () => updateStatus(task.id, 'finished') }
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
                  onClick={ () => deleteTask(task.id) }
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
  