import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllProblems } from '../service/main-page/main-page.service';
@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.scss'],
})
export class QuestionInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  userImg: string = '../../assets/images/user.png';
  userProfile: string =
    'https://www.iwmbuzz.com/wp-content/uploads/2022/07/bff-goals-selena-gomez-celebrates-her-30th-birthday-with-taylor-swift-says-nerdy-and-worthy-2.jpg';
  problemDetails: GetAllProblems = {
    problem: {
      createdAt: 0,
      question: '',
      problemImg: '',
      description: '',
      upvote: 0,
    },
    userProfileImg: '',
    username: '',
    category: '',
  };
  getDate(num: number) {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(num));
  }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.problemDetails = JSON.parse(params.get('json')!);
    });
    
    console.log(this.problemDetails);
  }
  // ngOnDestroy() {
  //   this.router.navigate(['/home-page']);
  // }
}
