import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth-layout/login/login.component';
import { QuestionComponent } from './components/question/question.component';
import { LoginLayoutComponent } from './auth-layout/login-layout/login-layout.component';
import { SignupComponent } from './auth-layout/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    SidebarComponent,
    NavbarComponent,
    QuestionComponent,
    LoginLayoutComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
