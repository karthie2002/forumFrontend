import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  coverImage:string = "../../assets/images/coverImage1.jpg";
  userProfile:string = "https://api.dicebear.com/5.x/lorelei/svg?seed=Snowball"
}
