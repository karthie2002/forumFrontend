import { Component } from '@angular/core';
import { debounceTime } from 'rxjs';
import {
  HttpServiceService,
  InputSearch,
  TextSearchResponse,
} from 'src/app/service/http-service.service';

@Component({
  selector: 'app-text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.scss'],
})
export class TextSearchComponent {
  res: TextSearchResponse[] = [];
  isLoading: number = 1;
  constructor(private httpService: HttpServiceService) {}
  getInputValue(event: Event) {
    let input: any = event.target;
    let smt = input.value;

    const ipText: InputSearch = { text: smt };
    console.log(ipText);

    if (ipText.text.length != 0 && ipText.text != '') {
      this.isLoading = 0;
      this.httpService
        .textSearch(ipText)
        .pipe(debounceTime(1000))
        .subscribe((value: TextSearchResponse[]) => {
          this.res = value;
          this.isLoading = 1;
          console.log(this.res);
        });
    } else {
      this.res = [];
    }
  }
}
