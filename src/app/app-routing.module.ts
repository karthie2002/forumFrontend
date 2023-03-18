import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './auth-layout/login-layout/login-layout.component';
import { LoginComponent } from './auth-layout/login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  { path: 'login-layout', component: LoginLayoutComponent },
  { path: 'main-page', component: MainpageComponent },
  { path: 'user-details', component: UserdetailsComponent },
  { path: '', redirectTo: '/login-layout', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [UserdetailsComponent];
