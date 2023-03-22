import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';
export interface GetDetails {
  name: string;
  profileImg: string;
  desc: string;
  technology: string[];
}
export interface GetAllDetails extends GetDetails {
  email: string;
}

const urlBase: string = 'https://forum-backend-azure.vercel.app/user/';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getAllDataForDescription(
    name: string,
    token: string
  ): Observable<GetAllDetails[]> {
    const url = `${urlBase}getUserDetails`;
    const descHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<GetAllDetails[]>(
        url,
        {
          name: name,
        },
        { headers: descHeader }
      )
      .pipe(retry(0), catchError(this.handleError));
  }

  saveAllDataofDesc(
    name: string,
    desc: string,
    profileImg: string,
    technology: string[],
    token: string
  ) {
    const url = `${urlBase}updateDetails`;
    const descHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    console.log({
      name: name,
      desc: desc,
      profileImg: profileImg,
      technology: technology,
    });
    return this.http
      .post<GetDetails[]>(
        url,
        {
          name: name,
          desc: desc,
          profileImg: profileImg,
          technology: technology,
        },
        { headers: descHeader }
      )
      .pipe(retry(0), catchError(this.handleError));
  }
  private handleError(error: Error) {
    console.log(error);

    return throwError(() => error);
  }
}
