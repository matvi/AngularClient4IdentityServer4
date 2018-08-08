import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { UnauthorizedComponent } from './unauthorized/';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { AuthGuardService } from './_services/auth-guard.service';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
    { path: 'unauthorized', component: UnauthorizedComponent},
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }

];
export const authProviders = [
    AuthGuardService,
    AuthService
];

export const routing = RouterModule.forRoot(appRoutes);

