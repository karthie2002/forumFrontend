import { Component, Input } from '@angular/core';
import {
  GetAllProblemsAndReplies,
  MainPageService,
} from 'src/app/service/main-page/main-page.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {
  HttpServiceService,
  replyQuestion,
} from 'src/app/service/http-service.service';
import { NotifierService } from 'src/app/service/notifier.service';

@Component({
  selector: 'app-reply-content',
  templateUrl: './reply-content.component.html',
  styleUrls: ['./reply-content.component.scss'],
})
export class ReplyContentComponent {
  @Input() question: string = '';
  submitTrue: number = 1;
  loadTrue: number = 1;
  replyQ: replyQuestion = { username: '', question: '', content: '' };
  defaultUrl: string = '../../assets/images/user.png';
  problemDetails: GetAllProblemsAndReplies[] = [];

  constructor(
    private route: ActivatedRoute,
    private mainPageService: MainPageService,
    private formBuilder: FormBuilder,
    private httpService: HttpServiceService,
    private notifierService: NotifierService
  ) {}
  submitForm = this.formBuilder.group({
    ip: '',
  });
  onSubmit(event: Event) {
    this.submitTrue = 0;
    event.preventDefault();
    let s: any = localStorage.getItem('userData');
    let a = JSON.parse(s);
    console.log(a.username);
    const smt = this.submitForm.value;

    const name: string = smt.ip as string;
    this.replyQ.username = a.username;
    this.replyQ.content = name;
    this.replyQ.question = this.question;
    console.log('replyyy:' + this.replyQ.content);
    const val = this.httpService
      .replyQues(this.replyQ)
      .subscribe((response) => {
        this.route.queryParamMap.subscribe((params) => {
          this.mainPageService
            .GetAllQuestionsAndReplyForMainPage(JSON.parse(params.get('json')!))
            .subscribe((value: GetAllProblemsAndReplies[]) => {
              this.problemDetails = value;
              this.submitTrue = 1;
            });
        });
      });
    this.submitForm.reset();
  }
  ngOnInit(): void {
    this.loadTrue = 1;
    this.route.queryParamMap.subscribe((params) => {
      this.mainPageService
        .GetAllQuestionsAndReplyForMainPage(JSON.parse(params.get('json')!))
        .subscribe((value: GetAllProblemsAndReplies[]) => {
          this.problemDetails = value;
          this.loadTrue = 0;
          console.log(this.problemDetails);
        });
    });
  }
}
