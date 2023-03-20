import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent {
  sizeFlag: number = 0;
  pattern: string = '../../assets/images/pattern.png';
  url: string = '../../assets/images/user.png';
  technology: string[] = ['C', 'C++'];
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
  }
  uploadFile(event: any) {
    console.log(event.target.files[0]);
    var size = event.target.files[0].size / 1024;
    console.log('Size: ' + event.target.files[0].size / 1024);
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        if (size <= 2000) {
          this.url = event.target.result;
          this.sizeFlag = 0;
        } else {
          this.sizeFlag = 1;
          this.url = '../../assets/images/user.png';
        }
        console.log(this.sizeFlag);
      };
    }
  }
}
