import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth-layout/login/login.component';
import { QuestionComponent } from './components/question/question.component';
import { LoginLayoutComponent } from './auth-layout/login-layout/login-layout.component';
import { SignupComponent } from './auth-layout/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    MainpageComponent,
    SidebarComponent,
    NavbarComponent,
    QuestionComponent,
    LoginLayoutComponent,
    SignupComponent,
    HomepageComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatIconModule],
})
export class AppModule {}
