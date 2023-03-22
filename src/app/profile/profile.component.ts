import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from '../service/notifier.service';
import {
  GetAllDetails,
  GetDetails,
  ProfileService,
} from '../service/profile/profile.service';
export interface FormValue {
  name: string;
  email: string;
  desc: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  coverImage: string = '../../assets/images/coverImage1.jpg';
  // userProfile: string =
  //   'https://www.iwmbuzz.com/wp-content/uploads/2022/07/bff-goals-selena-gomez-celebrates-her-30th-birthday-with-taylor-swift-says-nerdy-and-worthy-2.jpg';
  userProfile: string = '';
  // username: string = 'Akash';
  // email: string = 'akash2003m@gmail.com';
  technology: string[] = ['C', 'C++'];
  recommendationControl = new FormControl();

  isZoom: boolean = false;

  constructor(
    private notifierService: NotifierService,
    private profileService: ProfileService
  ) {}
  profileForm = new FormGroup({
    name: new FormControl({ value: '', disabled: true }),
    email: new FormControl({ value: '', disabled: true }, Validators.email),
    desc: new FormControl(''),
  });
  ngOnInit() {
    this.profileService
      .getAllDataForDescription(
        'Akash',
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrYXNoMjAwM21AZ21haWwuY29tIiwic3ViIjoiQWthc2giLCJpYXQiOjE2Nzk0NjgyOTksImV4cCI6MTY3OTUyMjI5OX0.Pia2ZXXTkSXZT1h80U486dQvozcyuK3z5DC9MouU5es`
      )
      .subscribe((value: GetAllDetails[]) => {
        this.profileForm.setValue({
          name: value[0].name,
          email: value[0].email,
          desc: value[0].desc,
        });
        this.userProfile = value[0].profileImg;
        this.technology = value[0].technology;
      });
  }
  insertImg(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      if (
        file.size / 1048576 <= 2 &&
        (file.type.match('image/png*') ||
          file.type.match('image/jpg*') ||
          file.type.match('image/jpeg*'))
      ) {
        reader.onload = () => {
          console.log(reader.result);
          this.userProfile = reader.result as string;
        };
      } else {
        if (file.size / 1048576 > 2) {
          this.notifierService.showNotification('Image size cannot exceed 2MB');
        } else {
          this.notifierService.showNotification(
            'Image type should be JPEG/PNG'
          );
        }
      }
    }
  }

  addRecommendation(event: Event) {
    event.preventDefault();
    if (event != null) {
      const value: string = this.recommendationControl.value || '';
      if (value.length > 0) {
        this.technology = [...this.technology, value];
        this.recommendationControl.reset();
      }
    }
  }
  clearRecommendation(index: number) {
    if (index > -1) {
      this.technology.splice(index, 1);
    }
  }

  zoomImage() {
    this.isZoom = !this.isZoom;
  }

  onSubmitUserDetails(event: Event) {
    event.preventDefault();
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrYXNoMjAwM21AZ21haWwuY29tIiwic3ViIjoiQWthc2giLCJpYXQiOjE2Nzk0NjgyOTksImV4cCI6MTY3OTUyMjI5OX0.Pia2ZXXTkSXZT1h80U486dQvozcyuK3z5DC9MouU5es`;
    const values: FormValue = JSON.parse(
      JSON.stringify(this.profileForm.value)
    );
    this.profileService
      .saveAllDataofDesc(
        'Akash',
        values.desc,
        this.userProfile,
        this.technology,
        token
      )
      .subscribe((value: GetDetails[]) => {
        // this.profileForm.get('desc')?.setValue(value[0].desc);
        this.userProfile = value[0].profileImg;
        this.technology = value[0].technology;
      });
  }
}
