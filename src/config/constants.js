import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDea5QhSfiMHsXnAJMMNxGFQP6w_fPi-g4",
  authDomain: "resplendent-inferno-6591.firebaseapp.com",
  databaseURL: "https://resplendent-inferno-6591.firebaseio.com",
}

firebase.initializeApp(config)


export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()