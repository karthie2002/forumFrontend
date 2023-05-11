import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  GetAllProblemsAndReplies,
  MainPageService,
} from '../service/main-page/main-page.service';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.scss'],
})
export class QuestionInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mainPageService: MainPageService
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.mainPageService
        .GetAllQuestionsAndReplyForMainPage(JSON.parse(params.get('json')!))
        .subscribe((value: GetAllProblemsAndReplies[]) => {
          this.problemDetails = value;
          console.log(value[0].replyMain[0]);
        });
    });
  }
  userImg: string = '../../assets/images/user.png';
  userProfile: string =
    'https://www.iwmbuzz.com/wp-content/uploads/2022/07/bff-goals-selena-gomez-celebrates-her-30th-birthday-with-taylor-swift-says-nerdy-and-worthy-2.jpg';
  problemDetails: GetAllProblemsAndReplies[] = [];
}
