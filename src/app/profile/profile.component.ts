import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from '../service/notifier.service';
import {
  GetAllDetails,
  GetDetails,
  ProfileService,
} from '../service/profile/profile.service';
import { Router } from '@angular/router';
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
  coverImage: string = '../../assets/images/banner-gradient1.png';
  userProfile: string = '';
  technology: string[] = [];
  recommendationControl = new FormControl({ value: '', disabled: true });
  isEdit: boolean = false;
  isZoom: boolean = false;

  constructor(
    private notifierService: NotifierService,
    private profileService: ProfileService,
    private router: Router
  ) {}
  profileForm = new FormGroup({
    name: new FormControl({ value: '', disabled: true }),
    email: new FormControl({ value: '', disabled: true }, Validators.email),
    desc: new FormControl({ value: '', disabled: true }),
  });
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.profileService
      .getAllDataForDescription()
      .subscribe((value: GetAllDetails[] | 'Unauthorized') => {
        if (value !== 'Unauthorized') {
          this.profileForm.setValue({
            name: value[0].name,
            email: value[0].email,
            desc: value[0].desc,
          });
          this.userProfile = value[0].profileImg;
          this.technology = value[0].technology;
        } else {
          localStorage.removeItem('userData');
          this.router.navigate(['/login-layout']);
        }
      });
  }
  onEdit(event: Event) {
    event.preventDefault();
    this.isEdit = true;
    this.profileForm.controls.desc.enable();
    this.recommendationControl.enable();
  }
  onCancel(event: Event) {
    event.preventDefault();
    this.getData();
    this.disableAllFields();
  }
  disableAllFields() {
    this.isEdit = false;
    this.profileForm.controls.desc.disable();
    this.recommendationControl.disable();
    this.recommendationControl.reset();
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
  removeUploadedImg(event: Event) {
    event.preventDefault();
    this.userProfile = '';
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
  clearRecommendation(index: number, event: Event) {
    event.preventDefault();
    if (index > -1) {
      this.technology.splice(index, 1);
    }
  }

  zoomImage() {
    this.isZoom = !this.isZoom;
  }

  onSubmitUserDetails(event: Event) {
    event.preventDefault();
    this.disableAllFields();
    const values: FormValue = JSON.parse(
      JSON.stringify(this.profileForm.value)
    );
    this.profileService
      .saveAllDataofDesc(values.desc, this.userProfile, this.technology)
      .subscribe((value: GetDetails[]) => {
        // this.profileForm.get('desc')?.setValue(value[0].desc);
        this.userProfile = value[0].profileImg;
        this.technology = value[0].technology;
      });
  }
}
