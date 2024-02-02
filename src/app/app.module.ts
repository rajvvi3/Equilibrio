import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';


/* The code `const app = initializeApp(environment.firebaseConfig);` initializes the Firebase app using
the configuration provided in the `environment.firebaseConfig` object. This allows the application
to connect to the Firebase services. */
const app = initializeApp(environment.firebaseConfig);
const auth = getAuth(app);

/* The `const appRoutes: Routes` is an array of route configurations for the Angular router. It defines
the routes for the application. */
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

/* The AppModule class is the main module of the application, which declares and imports components,
modules, and services, and provides the root component for bootstrapping the application. */
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
