import './App.css';

import { NavLink, Route, Routes } from 'react-router-dom';

import About from './routes/about';
import Contact from './routes/contact';
import Home from './routes/home';
import TodoItem from './components/todoitem';
import Todos from './routes/todos';

function App() {
  return (
    <div className='App'>
      <nav>
        <NavLink
          to='/'
          style={({ isActive }) => {
            return {
              display: 'block',
              color: isActive ? 'red' : '',
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          style={({ isActive }) => {
            return {
              display: 'block',
              color: isActive ? 'red' : '',
            };
          }}
        >
          About
        </NavLink>
        <NavLink
          to='/contact'
          style={({ isActive }) => {
            return {
              display: 'block',
              color: isActive ? 'red' : '',
            };
          }}
        >
          Contact
        </NavLink>
        <NavLink
          to='/todos'
          style={({ isActive }) => {
            return {
              display: 'block',
              color: isActive ? 'red' : '',
            };
          }}
        >
          Todos
        </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/todos' element={<Todos />}>
          <Route path=':todoId' element={<TodoItem />} />
        </Route>
        <Route path='*' element={<div>Page not foud</div>} />
      </Routes>
    </div>
  );
}

export default App;
