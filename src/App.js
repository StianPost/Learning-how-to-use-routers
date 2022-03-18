import './App.css';

import { NavLink, Route, Routes } from 'react-router-dom';

import About from './routes/about';
import Contact from './routes/contact';
import Home from './routes/home';
import Layout from './layout/Layout';
import TodoItem from './components/todoitem';
import Todos from './routes/todos';

function App() {
  return (
    <div className='App'>
      <Layout />
    </div>
  );
}

export default App;
