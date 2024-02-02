import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, Auth } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showSignIn = true; // Default to showing the login form

  // Form fields
  fullName!: string;
  contactNumber!: string;
  email!: string;
  password!: string;

  ngOnInit(): void {
    this.authService.observeAuthState(user => {
      if (user) {
        console.log('User is signed in:', user);
      } else {
        console.log('User is signed out');
      }
    });
  }

  constructor( private authService: AuthService ) {}

  toggleAuthMode() {
    this.showSignIn = !this.showSignIn;
  }

  onSubmit() {
    if (this.showSignIn) {
      this.authService.login(this.email, this.password);
      console.log('Login with', this.email, this.password);
    } else {
      this.authService.register(this.email, this.password);
      console.log('Register with', this.fullName, this.contactNumber, this.email, this.password);
    }
  }
}
