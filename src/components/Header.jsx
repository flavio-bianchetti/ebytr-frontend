import React, { useContext } from 'react';
import TodoListContext from '../context/TodoListContext';

const Header = () => {
  const { userInfo } = useContext(TodoListContext);
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
            <button>Sair</button>
        </div>
    </header>
  );
};

export default Header;