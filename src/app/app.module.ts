import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './auth-layout/login/login.component';
import { QuestionComponent } from './components/question/question.component';
import { LoginLayoutComponent } from './auth-layout/login-layout/login-layout.component';
import { SignupComponent } from './auth-layout/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageZoomComponent } from './components/image-zoom/image-zoom.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotifierComponent } from './components/notifier/notifier.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionInfoComponent } from './question-info/question-info.component';
import { TextSearchComponent } from './components/text-search/text-search.component';
import { UsercardComponent } from './components/usercard/usercard.component';
import { ProblemcardComponent } from './components/problemcard/problemcard.component';
import { ReplyContentComponent } from './components/reply-content/reply-content.component';
import { DropDownProfileComponent } from './components/drop-down-profile/drop-down-profile.component';
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
    ImageZoomComponent,
    HamburgerComponent,
    NotifierComponent,
    QuestionInfoComponent,
    TextSearchComponent,
    UsercardComponent,
    ProblemcardComponent,
    ReplyContentComponent,
    DropDownProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatIconModule],
})
export class AppModule {}
