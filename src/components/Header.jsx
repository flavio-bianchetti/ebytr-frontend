import React, { useContext } from 'react';
import TodoListContext from '../context/TodoListContext';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const { userInfo } = useContext(TodoListContext);
  const history = useHistory();
  return (
    <header>
        <div>
            <p>{ userInfo.name }</p>
            <p>{ userInfo.email }</p>
        </div>
        <div>
            <h1>Ebytr - To Do List</h1>
        </div>
        <div>
            <button
                type="button"
                onClick={ () => history.push('/') }
            >
              Sair
            </button>
        </div>
    </header>
  );
};

export default Header;
