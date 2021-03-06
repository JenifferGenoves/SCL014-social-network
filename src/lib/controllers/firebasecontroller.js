/* Funciones de Firebase */

/* login  con mail  y contraseña */

export const logIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  /* This gives you a Google Access Token. You can use it to access the Google API. */
  firebase.auth().signInWithPopup(provider).then((result) => {
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
};
