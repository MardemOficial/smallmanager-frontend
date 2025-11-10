import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { HomeComponent } from './shared/home/home.component'
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    
    {path: '', component: LoginComponent},
    {path: 'home' ,component: HomeComponent, children: [
           {path: 'dashboard', component: DashboardComponent},
           {path: 'produto', component: ProdutoComponent},
           {path: 'usuario', children: [
                { path: '', component: UserListComponent },
                { path: 'formulario', component: UserFormComponent },
           ]},
    ]},
];
