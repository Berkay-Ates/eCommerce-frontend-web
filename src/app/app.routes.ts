import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        loadComponent: () => {
            return import('../app/features/welcome/welcome').then((m) => m.Welcome);
        },
    },  
    {
        path:'login',
        pathMatch:'full',
        loadComponent: () => {
            return import('../app/features/login/login').then((m) => m.Login);
        },
    },
    {
        path:'register',
        pathMatch:'full',
        loadComponent: () => {
            return import('../app/features/register/register').then((m) => m.Register);
        },
    }

];
