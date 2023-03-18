import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
// ...

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  @Output() authData = new EventEmitter<boolean>();
  public btnClick(): void {
    this.authData.emit(false);
  }
  onButtonClick(): void {
    this.router.navigate(['/user-details']);
  }
}
