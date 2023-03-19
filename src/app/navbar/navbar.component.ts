import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() userProfile: string =
    'https://api.dicebear.com/5.x/lorelei/svg?seed=Snowball';
}
