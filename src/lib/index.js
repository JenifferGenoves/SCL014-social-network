/* eslint-disable no-trailing-spaces */
// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  // console.log ('Hola mundo!');
};

// login Google
export const logIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('estas logueado');
      // document.getElementById('containerBackima').style.display = 'none';
      window.location.hash = '#/home';

      // ...
    })
    .catch((error) => {
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

/* Log In con Correo y Contraseña */
export const logInMail = (email, password) => {
  console.log(email, password);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/home';
      // document.getElementById('containerBackima').style.display = 'none';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña erronea.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
};

/* Registro Usuarios con correo y password */

export const registerUser = (nameUser, email, password) => {
  console.log(nameUser, email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({
        displayName: nameUser,
      });
      const configuration = {
        url: 'http://localhost:5000/',
      };
      firebase.auth().currentUser.sendEmailVerification(configuration)
        .then(() => {
          // Email Verification sent!
          // [START_EXCLUDE]
          alert('Correo de verificación enviado. Haz click en el link del correo y podras ingresar a WiT.');
          // [END_EXCLUDE]
        });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/weak-password') {
        alert('La contraseña es muy débil.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
};

// Función para postear

export const post = (title, description) => {
console.log(title, description);
  const fs = firebase.firestore();
  const usuario = () => firebase.auth().currentUser;
  const user = usuario();
  // 
  fs.collection('post').add({
    email: user.email,
    name: user.displayName,
    title: title,
    post: description,
    fecha: new Date(),
    uid: user.uid,

  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// Función para mostrar Post

export const viewPost = () => {

  const fs = firebase.firestore();
  fs.collection("post").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
};