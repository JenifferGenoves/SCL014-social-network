export const personajes = () => {
    const divPersonajes = document.createElement('div');
    
    const viewPersonajes = `
    <h3>Hola Flanders</h3>
    `

    divPersonajes.innerHTML =viewPersonajes;
 
    return divPersonajes;

}
