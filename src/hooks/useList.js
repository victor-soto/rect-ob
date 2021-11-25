import { useState } from 'react';

// Hook Personalizado que nos permita gestionar listas de elementos
// en los estados de los componentes
export const useList = (initialValue = []) => {
    // useState para la gesión de la lista
    const [value, setValue] = useState(initialValue);

    // Planteamos las funcionalidades que queremos otorgar a los valores de tipo lista

    // * Añadir elementos a la lista
    const push = (elemento) => {
        setValue((oldValue) => [...oldValue, elemento]);
    };

    // * Eliminar un elemento de la lista
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // * Saber si la lista está vacía
    const isEmpty = () => value.length === 0;

    // TODO: Desarrollar otras funcionalidades de interés para gestión de listas
    // Por ejemplo: Ordenación

    return {
        value, setValue, push, remove, isEmpty,
    };
};
