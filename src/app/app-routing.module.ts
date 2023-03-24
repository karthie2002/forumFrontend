import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './auth-layout/login-layout/login-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionInfoComponent } from './question-info/question-info.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  { path: 'login-layout', component: LoginLayoutComponent },
  { path: 'home-page', component: HomepageComponent },
  { path: 'user-details', component: UserdetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'question-info', component: QuestionInfoComponent },
  { path: '', redirectTo: '/login-layout', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  UserdetailsComponent,
  ProfileComponent,
  QuestionInfoComponent,
];
