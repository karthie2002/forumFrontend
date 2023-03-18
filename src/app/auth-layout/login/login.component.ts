import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() authData = new EventEmitter<boolean>();
  public btnClick(): void {
    this.authData.emit(false);
  }
}
