import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    // private httpService: HttpServiceService
  ) {}
  submitFormLogin = this.formBuilder.group({
    username: '',
    password: '',
  });
  @Output() authData = new EventEmitter<boolean>();
  public btnClick(): void {
    this.authData.emit(false);
  }

  onSubmit(event: Event) {
    event.preventDefault();

    console.log('Your order has been submitted', this.submitFormLogin.value);
    // this.router.navigate(['/user-details']);
    const smt = this.submitFormLogin.value;
    // const val = this.httpService.loginUserDetails(
    //   this.submitFormLogin.value as LogIn
    // );
    // console.log(val);
  }
}
