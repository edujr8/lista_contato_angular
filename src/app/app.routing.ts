
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { ContatosComponent } from './contatos/contatos.component';
import { UsuariosComponent } from "./usuarios/usuarios.component";


const APP_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'contatos',
        component: ContatosComponent
    },
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); 

