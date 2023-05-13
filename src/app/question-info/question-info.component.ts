import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  GetAllProblemsAndReplies,
  MainPageService,
} from '../service/main-page/main-page.service';
import {
  HttpServiceService,
  upVoteContent,
  upVoteGet,
} from 'src/app/service/http-service.service';
@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.scss'],
})
export class QuestionInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mainPageService: MainPageService,
    private httpService: HttpServiceService
  ) {}

  userImg: string = '../../assets/images/user.png';

  isZoom: boolean = false;
  imgView: boolean = false;
  userProfile: string =
    'https://www.iwmbuzz.com/wp-content/uploads/2022/07/bff-goals-selena-gomez-celebrates-her-30th-birthday-with-taylor-swift-says-nerdy-and-worthy-2.jpg';
  problemDetails: GetAllProblemsAndReplies[] = [];
  upvoteCounter: number = 0;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.mainPageService
        .GetAllQuestionsAndReplyForMainPage(JSON.parse(params.get('json')!))
        .subscribe((value: GetAllProblemsAndReplies[]) => {
          this.problemDetails = value;
          console.log(value[0].replyMain[0]);
          this.getUpV();
        });
    });
  }
  onClickUpvote() {
    const localUser = localStorage.getItem('userData');
    const l = JSON.parse(localUser!);
    const username = l.username;
    const question = this.problemDetails[0].problem.question;

    const upvContent: upVoteContent = {
      username: username,
      question: question,
    };
    this.httpService.upVoteFunction(upvContent).subscribe((response) => {
      // console.log(response);
    });
    // console.log(this.upvoteCounter);
  }
  zoomImage() {
    this.isZoom = !this.isZoom;
  }
  getUpV() {
    if (
      this.problemDetails[0].problem.question &&
      this.problemDetails[0].problem
    ) {
      const question = this.problemDetails[0].problem.question;
      // console.log(question + 'dfdsfgf');
      const q: upVoteGet = { question: question };
      this.httpService.upVoteGetFunc(q).subscribe((response) => {
        // console.log(response);
        this.upvoteCounter = response.count;
      });
    }
  }
}
