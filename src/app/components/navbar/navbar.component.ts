import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GetUserProfileInterface,
  NavbarService,
} from 'src/app/service/navbar/navbar.service';

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
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private navbarService: NavbarService) {}
  @Input() userProfile: string = '../../../assets/images/user.png';
  @Input() isShown: boolean = true;
  ngOnInit(): void {
    this.navbarService
      .getUserProfile()
      .subscribe((value: GetUserProfileInterface | 'Unauthorized') => {
        if (value != 'Unauthorized') {
          this.userProfile = value.profileImg;
        }
      });
  }

  onClick() {
    this.router.navigate(['/login-layout']);
    localStorage.removeItem('userData');
  }
}
