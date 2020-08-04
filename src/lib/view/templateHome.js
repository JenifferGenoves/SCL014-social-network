export const home = () => {
    const divHome = document.createElement('div');

    const viewHome = `
    <h1>Hola mundirijillo</h1>
    `

    divHome.innerHTML =viewHome;
 
    return divHome;

}
