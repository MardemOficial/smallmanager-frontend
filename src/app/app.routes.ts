import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HomeComponent } from './shared/home/home.component'

export const routes: Routes = [
    
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent, children: [
           {path: 'dashboard', component: DashboardComponent},
           {path: 'produto', component: ProdutoComponent},
           {path: 'usuario', component: UsuarioComponent}
    ]}

];
