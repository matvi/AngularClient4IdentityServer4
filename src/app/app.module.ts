import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatSidenavModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatInputModule,
  MatDialog,
  MatDialogRef,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule, } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './_helpers/index';
import { AuthenticationService } from './_services/index';
import { DashboardComponent } from './dashboard';
import { UnauthorizedComponent } from './unauthorized/';
import { AuthService } from './_services/auth.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { routing, authProviders } from './app.routing';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
},
{
    path: 'dashboard',
    component: DashboardComponent
},
{
    path: 'unauthorized',
    component: UnauthorizedComponent
},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnauthorizedComponent,
    DashboardComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    routing,
    MatTableModule,
    MatPaginatorModule,
    // RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [
    LoginComponent,
    AuthenticationService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    authProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
