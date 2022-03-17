import { Link, Outlet } from 'react-router-dom';

import React from 'react';

function Todos() {
  const todoList = [
    { id: 1, title: 'this is a title' },
    { id: 2, title: 'this is a another title' },
    { id: 3, title: 'this is the 3rd title' },
  ];
  return (
    <div>
      <h2>Todos</h2>
      <div>
        {todoList.map(({ id, title }) => {
          return (
            <Link key={id} to={`/todos/${id}`}>
              <p>{title}</p>
            </Link>
          );
        })}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Todos;
