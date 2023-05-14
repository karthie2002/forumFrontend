import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import {
  HttpServiceService,
  LogIn,
  Responses,
} from 'src/app/service/http-service.service';
import { NotifierService } from 'src/app/service/notifier.service';

export interface UserCred {
  username: string;
  access_token: String;
  email: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  res_flag: number = 0;
  userCred: UserCred = { username: '', access_token: '', email: '' };
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpService: HttpServiceService,
    private notifierService: NotifierService
  ) {}
  submitFormLogin = this.formBuilder.group({
    n: '',
    p: '',
  });
  @Output() authData = new EventEmitter<boolean>();
  public btnClick(): void {
    this.authData.emit(false);
  }

  onSubmit(event: Event) {
    this.res_flag = 1;
    event.preventDefault();
    const smt = this.submitFormLogin.value;
    const name: string = smt.n as string;
    const password: string = smt.p as string;
    const loginD: LogIn = { name: name.trim(), password: password.trim() };
    let jwtToken: string = '';
    const val = this.httpService
      .loginUserDetails(loginD)
      .subscribe((response) => {
        console.log(response);
        if (response.access_token == undefined) {
          this.res_flag = 0;
          this.notifierService.showNotification(response as any);
        } else {
          jwtToken = response.access_token as string;
          console.log(jwtToken);
          const decodedToken: any = jwt_decode(jwtToken);

          this.userCred.access_token = jwtToken;
          this.userCred.username = decodedToken.sub;
          this.userCred.email = decodedToken.email;
          console.log(this.userCred);
          localStorage.setItem('userData', JSON.stringify(this.userCred));
          this.res_flag = 0;
          this.router.navigate(['/home-page']);
        }
      });
  }
}
