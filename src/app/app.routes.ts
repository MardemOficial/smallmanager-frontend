import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { HomeComponent } from './shared/home/home.component';
import { PositionListComponent } from './pages/position/position-list.component/position-list.component';
import { PositionFormComponent } from './pages/position/position-form.component/position-form.component';
import { BenefitListComponent } from './pages/benefit/benefit-list.component/benefit-list.component';
import { BenefitFormComponent } from './pages/benefit/benefit-form.component/benefit-form.component';
import { PayrolltaxesFormComponent } from './pages/payrollTaxes/payrolltaxes-form.component/payrolltaxes-form.component';
import { PayrolltaxesListComponent } from './pages/payrollTaxes/payrolltaxes-list.component/payrolltaxes-list.component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'produto', component: ProdutoComponent },
      {
        path: 'user',
        children: [
          { path: '', component: UserListComponent },
          { path: 'form', component: UserFormComponent },
        ],
      },
      {
        path: 'position',
        children: [
          { path: '', component: PositionListComponent },
          { path: 'form', component: PositionFormComponent },
        ],
      },
      {
        path: 'benefit',
        children: [
          { path: '', component: BenefitListComponent },
          { path: 'form', component: BenefitFormComponent },
        ],
      },
      {
        path: 'payrolltaxe',
        children: [
          { path: '', component: PayrolltaxesListComponent },
          { path: 'form', component: PayrolltaxesFormComponent },
        ],
      },
    ],
  },
];
