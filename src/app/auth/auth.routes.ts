import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { SignupBusinessFormComponent } from './pages/signup-business-form/signup-business-form.component';
export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component : LoginFormComponent
      },
      {
        path: 'signup',
        component : SignupFormComponent
      },
      {
        path: 'signup_company',
        component : SignupBusinessFormComponent
      }
    ]
  },
];
