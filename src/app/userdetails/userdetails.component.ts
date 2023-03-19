import { Component } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent {
  pattern: string = '../../assets/images/pattern.png';
  url: string = '../../assets/images/user.png';
  isClick: boolean = false;
  techCount: number = 0;
  checkboxestech = [
    {
      id: '8',
      label: 'Asia',
      isChecked: true,
    },
    {
      id: '9',
      label: 'Europe',
      isChecked: false,
    },
    {
      id: '10',
      label: 'North America',
      isChecked: false,
    },
    {
      id: '11',
      label: 'South America',
      isChecked: false,
    },
    {
      id: '12',
      label: 'Australia',
      isChecked: false,
    },
    {
      id: '13',
      label: 'Africa',
      isChecked: true,
    },
  ];

  uploadFile(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        console.log(this.url);
      };
    }
  }
}
