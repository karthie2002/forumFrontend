import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss'],
})
export class UsercardComponent {
  @Input() url: any = '';
  @Input() username: any = '';
  @Input() userdesc: any = '';
  @Input() tech: any = [];
  // url: string = '../../assets/images/user.png';
  // username: string = 'karthi';
  // userdesc: string =
  // 'Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her genre-spanning discography, songwriting and artistic reinventions have received critical praise and wide media coverage. Born in West Reading, Pennsylvania, Swift moved to Nashville at age 14 to become a country artist. She signed a songwriting deal with Sony/ATV Music Publishing in 2004 and a recording contract with Big Machine Records in 2005. Her 2006 self-titled debut album made her the first female country singer to write a U.S. platinum-certified album.C++';

  // tech: string[] = ['c', 'c++'];
}
