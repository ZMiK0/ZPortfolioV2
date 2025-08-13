import { Routes } from '@angular/router';
import { Code } from './pages/code/code';
import { App } from './app';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path:"home",
        component:Home
    },
    {
        path:"code",
        component:Code
    }
];
