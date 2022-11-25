import React from 'react';

// Estilos particulares de APP.jsx
import '../styles/sass/App.scss';
import TasksList from './lists/TasksList';

/**
 * Componente APP
 * @returns Componente principal de la aplicación
 */
const App = () => {
    return (
      <div>
        <h1>Bienvenido al proyecto base de React</h1>
        <h2>Estamos usando Webpack, Babel y Eslint</h2>
        {/* Renderizamos nuestro componente TasksList */}
        <TasksList />
      </div>
    );
};

export default App;
