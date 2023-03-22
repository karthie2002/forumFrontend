import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotifierService } from '../service/notifier.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent {
  constructor(
    private notifierService: NotifierService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  submitForm = this.formBuilder.group({
    desc: '',
  });

  sizeFlag: number = 0;
  fileFlag: number = 0;
  pattern: string = '../../assets/images/pattern.png';
  url: string = '../../assets/images/user.png';
  technology: string[] = [];
  recommendationControl = new FormControl();
  clearRecommendation(index: number) {
    if (index > -1) {
      this.technology.splice(index, 1);
    }
  }
  addRecommendation(event: Event) {
    event.preventDefault();
    if (event != null) {
      const value: string = this.recommendationControl.value;
      if (value.length > 0) {
        this.technology = [...this.technology, value];
        this.recommendationControl.reset();
      }
    }
    console.log(this.technology);
  }
  uploadFile(event: any) {
    console.log(event.target.files[0].type);
    var type = event.target.files[0].type;
    var size = event.target.files[0].size / 1024;
    // console.log('Size: ' + event.target.files[0].size / 1024);
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        if (size <= 2000) {
          if (type == 'image/jpeg' || type == 'image/png') {
            this.fileFlag = 0;
            this.sizeFlag = 0;
            this.url = event.target.result;
          } else {
            this.fileFlag = 1;
            this.sizeFlag = 1;
            this.notifierService.showNotification(
              'Image type should be JPEG/PNG'
            );
          }
        } else {
          this.sizeFlag = 1;
          this.url = '../../assets/images/user.png';
          this.notifierService.showNotification('Image size cannot exceed 2MB');
        }
        console.log(this.sizeFlag);
      };
    }
  }

  onButtonClick(): void {
    this.router.navigate(['/home-page']);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    let val: any = this.submitForm.value;
    val.profileI = this.url;
    val.tech = this.technology;

    console.log('Your order has been submitted', val);
  }
}
