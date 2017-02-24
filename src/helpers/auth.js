import { ref, firebaseAuth, provider } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((error) => console.log('Oops', error))
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
  .catch((error) => {
      console.log(error)
  })
}

export function fbLogin () {
  return firebaseAuth().signInWithPopup(provider)
  .then((result) => {
     let token = result.credential.accessToken,
         user  = result.user;
  })
  .catch((error) => {
      console.log(error)
  })
}

export function checkAuth() {
  return firebaseAuth().signOut()
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}