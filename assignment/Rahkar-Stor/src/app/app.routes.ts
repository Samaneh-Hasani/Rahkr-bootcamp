import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { ProducComponent } from './produc/produc.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user/:id',
    component: UserProfileComponent
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'produc',
    loadComponent:()=>import('./produc/produc.component').then((m)=>m.ProducComponent)
  }
];
