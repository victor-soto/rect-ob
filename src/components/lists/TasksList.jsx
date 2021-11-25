import React, { useRef, useState } from 'react';
import { useList } from '../../hooks/useList';

const Taskslist = () => {
    const tasks = useList([]);
    const [newTask, setNewTask] = useState('');
    const newTaskRef = useRef();

    // Submit del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        tasks.push(newTask);
        setNewTask('');
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
          <input ref={newTaskRef} onChange={handleInputChange} placeholder="Nueva Tarea" type="text" />
          <button type="submit" disabled={!newTask}>
            {tasks.isEmpty() ? 'Crea tu primera tarea' : 'Crear otra tarea'}
          </button>
        </form>
        {/* Renderizamos la lista de tareas */}
        { tasks.isEmpty()
            ? (<p>Enhorabuena. No tienes tareas pendientes</p>)
            : (
              <ul>
                {tasks.value.map((task, index) => (
                  <li key={index}>
                    <input type="checkbox" onClick={() => tasks.remove(index)} defaultChecked={false} />
                    { task }
                  </li>
                  ))}
              </ul>
            )}
      </div>
    );
};

export default Taskslist;
