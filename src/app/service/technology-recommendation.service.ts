import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TechnologyRecommendationService {
  private searchSubject = new BehaviorSubject<string>('');
  results$: Observable<string[]>;

  constructor(private http: HttpClient) {
    this.results$ = this.searchSubject.asObservable().pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.search(query))
    );
  }

  search(query: string): Observable<string[]> {
    return this.http.get<string[]>(`https://forum-backend-azure.vercel.app/`);
  }

  updateSearchQuery(query: string) {
    this.searchSubject.next(query);
  }
}
