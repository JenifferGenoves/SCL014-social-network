// Nos va a dar la ruta
// LLamamos componentes que queremos ir mostrando

import { home } from './view/templateHome.js';
import { personajes } from './view/templatePersonajes.js';
import { menu } from './view/templateMenu.js';

// exportamos una constante que nos va cambiando las rutas, le vamos a pasar el hash

export const changeRoute = (hash) => {
    if( hash === '#/'){
        return showTemplate(hash)
    } 
    else if ( hash === '#/personajes'){
        return showTemplate(hash)
    } 
    else {
        return showTemplate(hash)
    }
}

// Creamos la función template

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = menu();

    switch (hash) {
        case '#/':
            containerRoot.appendChild(home());
            break;
        case '#/personajes':
            containerRoot.appendChild(personajes());
            break;
        default:
            containerRoot.innerHTML = `<h2>No existe :c <h2/>`

    }
}