import React, { useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useList } from '../../hooks/useList';

const TasksList = () => {
  const tasks = useList([]);
  const counter = useCounter([])
  const [newTask, setNewTask] = useState('')
  const newTaskRef = useRef()

  // Submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    tasks.push(newTask)
    setNewTask('')
  };

  // Gestionamos los cambios en el nombre la tarea a incluir
  const handleInputChange = () => {
    setNewTask(newTaskRef.current.value);
  };

  return (
    <div>
      <h3>Tu lista de tareas</h3>
      {/* Renderizamos formulario para crear tareas */}
      <form onSubmit={handleSubmit}>
        <input
          ref={newTaskRef}
          onChange={handleInputChange}
          placeholder="Nueva Tarea"
          type="text"
        />
        <button type="submit" disabled={!newTask}>
          {tasks.isEmpty() ? 'Crea tu primera tarea' : 'Crear otra tarea'}
        </button>
      </form>
      {/* Renderizamos la lista de tareas */}
      {tasks.isEmpty() ? (
        <p>Enhorabuena. No tienes tareas pendientes</p>
      ) : (
        <>
          <button type="button" onClick={tasks.sortList}>Sort List</button>
          <button type="button" onClick={tasks.reverseList}>Reverse List</button>
          <ul>
            {tasks.value.map((task, index) => (
              <li key={index}>
                <input type="checkbox" onClick={() => tasks.remove(index)} />
                {task}
              </li>
            ))}
          </ul>
        </>
      )}
      <h3>Counter</h3>
      <button type="button" onClick={() => counter.increment(1)}>Increase by one</button>
      <button type="button" onClick={() => counter.decrement(1)}>Decrease by one</button>
      <button type="button" onClick={counter.reset}>Reset</button>
      <p>
        { `Current Value: ${counter.value}` }
      </p>
    </div>
  );
};

export default TasksList;
