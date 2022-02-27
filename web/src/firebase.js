/* eslint-disable @typescript-eslint/no-unused-vars */
//Firebase.js has website firebase configuration and auth helper function

import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9rrcMPbtvPt8u2HJJR4bEhVSIr3FS4PU',
  authDomain: 'project-7d222.firebaseapp.com',
  projectId: 'project-7d222',
  storageBucket: 'project-7d222.appspot.com',
  messagingSenderId: '28810062297',
  appId: '1:28810062297:web:293a22977fa9ae942fd1c8',
  measurementId: 'G-0WC5P5SPFL',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  login_hint: 'user@example.com',
  prompt: 'select_account',
})

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const signInWithGoogle = () => {
  console.log('google', provider)
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // The signed-in user info.
      const user = result.user
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
    })
}

const signUp = async (name, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (err) {
    alert(err.message)
  }
}
const resetPwd = async (email) => {
  try {
    await sendPasswordResetEmail(email)
    alert('Password reset link sent!')
  } catch (err) {
    alert(err.message)
  }
}

const logout = () => {
  signOut(auth)
}
export { auth, db, signIn, signInWithGoogle, signUp, resetPwd, logout }
