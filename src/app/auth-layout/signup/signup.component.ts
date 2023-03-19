import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private router: Router) {}
  @Output() authData = new EventEmitter<boolean>();
  public btnClick(): void {
    this.authData.emit(true);
  }
  onButtonClick(): void {
    this.router.navigate(['/user-details']);
  }
}
