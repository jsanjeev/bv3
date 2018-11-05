import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './auth/guard/auth.guard';
import {LoginComponent} from './auth/component/login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard]},
    {path: 'cpvdata', loadChildren: './cpv-data/cpv-data.module#CpvDataModule', canLoad: [AuthGuard]},
    {path: 'brands', loadChildren: './brands/brands.module#BrandsModule', canLoad: [AuthGuard]},
    {path: 'users', loadChildren: './users/users.module#UsersModule', canLoad: [AuthGuard]},
    {path: 'cardorder', loadChildren: './card-order/card-order.module#CardOrderModule', canLoad: [AuthGuard]},
    {path: 'systemstatus', loadChildren: './system-status/system-status.module#SystemStatusModule', canLoad: [AuthGuard]},
    {path: 'analystexport', loadChildren: './analyst-export/analyst-export.module#AnalystExportModule', canLoad: [AuthGuard]},
    {path: '**', redirectTo: 'dashboard'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
