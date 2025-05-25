import {RouterModule, Routes} from '@angular/router';
import {AddNewRouteComponent} from './pages/add-new-route/add-new-route.component';
import {AddNewCompanyComponent} from './pages/add-new-company/add-new-company.component';
import {NgModule} from '@angular/core';
import {AddNewDepotComponent} from './pages/add-new-depot/add-new-depot.component';
import {AddNewStopComponent} from './pages/add-new-stop/add-new-stop.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {path:'admin-dashboard', component: AdminDashboardComponent },
  {path: 'add-company', component: AddNewCompanyComponent},
  {path: 'add-depot', component: AddNewDepotComponent},
  {path: 'add-route', component: AddNewRouteComponent},
  {path: 'add-stop', component: AddNewStopComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path:'register-page', component: RegisterPageComponent },
  {path: '', redirectTo: 'login-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
