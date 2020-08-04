// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from '/lib/view/templateMenu.js';
import { changeRoute } from './lib/router.js';




// document.getElementById ('root').innerHTML = menu()
// Document.getElementById ('root').appendChild += home()

const init = () => {
    document.getElementById ('root').innerHTML = menu()

    window.addEventListener('hashchange', ( ) => {
        
        myFunction();
        console.log(window.location.hash);
        changeRoute(window.location.hash);
    })
}

window.addEventListener('load', init)