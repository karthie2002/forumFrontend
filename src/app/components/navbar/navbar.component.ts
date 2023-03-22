import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          width: '0px',
        })
      ),
      state(
        'out',
        style({
          width: '96px',
        })
      ),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out')),
    ]),
  ],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  @Input() userProfile: string =
    'https://api.dicebear.com/5.x/lorelei/svg?seed=Snowball';
  @Input() isShown: boolean = true;

  onClick() {
    this.router.navigate(['/login-layout']);
    localStorage.removeItem('userData');
  }
}
