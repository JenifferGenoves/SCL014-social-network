/* Aquí va recuperación de contraseña */

export const recover = () => {
  const viewRecover = `
<h1>Escribe tú correo electrónico y te enviaremos un link para reestablecer tu contraseña</h1>
<br> <br>
input type="email" id="email" class="infoBox" required></input>
<br> <br>
<input type="submit" id="resendpass" value="Enviar"></input>
`;
  return viewRecover;
};
