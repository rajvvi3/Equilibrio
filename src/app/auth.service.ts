// auth.service.ts

import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, Auth } from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private auth: Auth;

constructor() {
    // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(app);
}

/* The `register` method is a function that allows a user to register with their email and password. */
// Register user
async register(email: string, password: string) {
    try {
        const result = await createUserWithEmailAndPassword(this.auth, email, password);
        console.log(result);
      // Additional logic after successful registration, if needed
    } catch (error) {
        console.error(error);
        alert("Error in Registration!")
        // Error handling
    }
}

/* The `login` method is a function that allows a user to log in with their email and password. */
  // Login user
async login(email: string, password: string) {
try {
    const result = await signInWithEmailAndPassword(this.auth, email, password);
    console.log(result);
    } catch (error) {
    console.error(error);
    alert("Please enter Valid Email Id and Password")
    // Error handling
    }
}

/* The `logout` method is a function that allows a user to log out of their account. */
// Logout user
async logout() {
    try {
    await signOut(this.auth);
    console.log('User signed out successfully');
      // Additional logic after logout, if needed
    } catch (error) {
    console.error(error);
    // Error handling
    }
}

/* The `observeAuthState` method is used to observe the authentication state of the user. It takes a
callback function as a parameter, which will be called whenever the authentication state changes. */
  // Observe the user's authentication state
observeAuthState(callback: (user: any) => void) {
    onAuthStateChanged(this.auth, (user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user);
    } else {
        // User is signed out
        console.log('User is signed out');
    }
    callback(user);
    });
}
}
