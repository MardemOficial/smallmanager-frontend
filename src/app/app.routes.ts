import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductFormComponent } from './pages/product/product-form.component/product-form.component';
import { ProductListComponent } from './pages/product/product-list.component/product-list.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { HomeComponent } from './shared/home/home.component';
import { PositionListComponent } from './pages/position/position-list.component/position-list.component';
import { PositionFormComponent } from './pages/position/position-form.component/position-form.component';
import { BenefitListComponent } from './pages/benefit/benefit-list.component/benefit-list.component';
import { BenefitFormComponent } from './pages/benefit/benefit-form.component/benefit-form.component';
import { PayrolltaxesFormComponent } from './pages/payrollTaxes/payrolltaxes-form.component/payrolltaxes-form.component';
import { PayrolltaxesListComponent } from './pages/payrollTaxes/payrolltaxes-list.component/payrolltaxes-list.component';
import { EmployeeListComponent } from './pages/employee/employee-list.component/employee-list.component';
import { EmployeeFormComponent } from './pages/employee/employee-form.component/employee-form.component';
import { MaterialFormComponent } from './pages/materials/material-form.component/material-form.component';
import { MaterialListComponent } from './pages/materials/material-list.component/material-list.component';
import { InventoryFormComponent } from './pages/inventory/inventory-form.component/inventory-form.component';
import { InventoryListComponent } from './pages/inventory/inventory-list.component/inventory-list.component';
import { InventoryBalanceComponent } from './pages/inventory/inventory-balance.component/inventory-balance.component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'product',
        children: [
          { path: '', component: ProductListComponent },
          { path: 'form', component: ProductFormComponent },
        ],
      },
      {
        path: 'material',
        children: [
          { path: '', component: MaterialListComponent },
          { path: 'form', component: MaterialFormComponent },
        ],
      },
      {
        path: 'inventory',
        children: [
          { path: '', component: InventoryListComponent },
          { path: 'form', component: InventoryFormComponent },
          { path: 'balance', component: InventoryBalanceComponent },
        ],
      },
      {
        path: 'user',
        children: [
          { path: '', component: UserListComponent },
          { path: 'form', component: UserFormComponent },
        ],
      },
      {
        path: 'employee',
        children: [
          { path: '', component: EmployeeListComponent },
          { path: 'form', component: EmployeeFormComponent },
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
