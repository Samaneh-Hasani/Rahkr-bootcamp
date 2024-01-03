import { Routes } from '@angular/router';
import { TaskFormComponent } from './Tasks/task-form/task-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterFormComponent } from './login/register-form/register-form.component';

export const routes: Routes = [
    {
        path: "task",
        component: TaskFormComponent
    },
    {
        path: "login",
        component: LoginFormComponent
    },
    {
        path: "register",
        component: RegisterFormComponent
    }
];


