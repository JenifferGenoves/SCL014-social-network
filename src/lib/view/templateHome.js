import { login } from '../index.js';
export const home = () => {
    const divHome = document.createElement('div');

    const viewHome = `
    <h1>Hola mundirijillo</h1>
    <button id='loginGoogle'>Login con Google</buttom>
    `

    divHome.innerHTML =viewHome;

    const btn =divHome.querySelector('#loginGoogle');
    btn.addEventListener('click', () => {
        login()
    })
 
    return divHome;

}
