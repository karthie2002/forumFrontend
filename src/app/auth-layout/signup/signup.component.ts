import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import {
  HttpServiceService,
  LogIn,
  SignUp,
} from 'src/app/service/http-service.service';
import { NotifierService } from 'src/app/service/notifier.service';
import { UserCred } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  userCred: UserCred = { username: '', access_token: '', email: '' };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpService: HttpServiceService,
    private notifierService: NotifierService
  ) {}
  submitFormSignUp = this.formBuilder.group({
    n: '',
    p: '',
    e: '',
  });
  @Output() authData = new EventEmitter<boolean>();
  public btnClick(): void {
    this.authData.emit(true);
  }
  onButtonClick(): void {
    this.router.navigate(['/user-details']);
  }
  onSubmit(event: Event) {
    event.preventDefault();
    const smt = this.submitFormSignUp.value;
    const name: string = smt.n as string;
    const password: string = smt.p as string;
    const email: string = smt.e as string;
    const signUpD: SignUp = { name: name, password: password, email: email };
    let jwtToken: string = '';
    const val = this.httpService
      .signUpDetails(signUpD)
      .subscribe((response) => {
        console.log(response);
        if (response.access_token == undefined) {
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
          this.router.navigate(['/user-details']);
        }
      });
  }
}

