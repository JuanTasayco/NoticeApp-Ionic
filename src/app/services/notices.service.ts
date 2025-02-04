import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, NoticeResponse } from '../interfaces/notice.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  private pathUrl: string = 'https://newsapi.org/v2/'
  constructor(private httpClient: HttpClient) { }

  getNotices(data?: any): Observable<NoticeResponse> {
    const queryParams = new HttpParams()
      .set('country', data?.country || 'us')
      .set('category', data?.business || 'business')
    return this.httpClient.get<NoticeResponse>(`${this.pathUrl}top-headlines?${queryParams}`)
  }

  getNoticesByCategory(category: string, page: number): Observable<Article[]> {
    console.log(page)
    return this.httpClient.get<NoticeResponse>(`${this.pathUrl}top-headlines`,
      { params: { category, country: 'us', page } }
    ).pipe(
      map(response => response.articles),
      catchError(() => of([])));
  }

}
