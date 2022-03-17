import React from 'react';
import { useParams } from 'react-router-dom';

function Todoitem() {
  const params = useParams();
  return <div>This is todoItem {params.todoId}</div>;
}

export default Todoitem;
