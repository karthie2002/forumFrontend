import { Component, Input } from '@angular/core';
import { GetAllProblemsAndReplies } from 'src/app/service/main-page/main-page.service';

@Component({
  selector: 'app-reply-content',
  templateUrl: './reply-content.component.html',
  styleUrls: ['./reply-content.component.scss'],
})
export class ReplyContentComponent {
  @Input() problemDetails: GetAllProblemsAndReplies[] = [];

}
