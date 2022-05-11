import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import TodoList from './pages/TodoList';

function App() {
  return (
    <Routes>
      <Route path="/todolist" element={ <TodoList /> } />
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default App;
