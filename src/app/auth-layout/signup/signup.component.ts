import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @Output() authData = new EventEmitter<boolean>();
  public btnClick(): void {
    this.authData.emit(true);
  }
}
