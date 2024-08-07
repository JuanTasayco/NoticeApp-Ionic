import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, NoticeResponse } from '../interfaces/notice.interfaces';
import { storedArticlesByCategory } from '../data/mock-news';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  private pathUrl: string = 'https://newsapi.org/v2/'
  constructor(private httpClient: HttpClient) { }

  getNotices(page: number): Observable<Article[]> {
    const queryParams = new HttpParams()
      .set('country', 'us')
      .set('category', 'business')
      .set('page', page)
    /*   return this.httpClient.get<NoticeResponse>(`${this.pathUrl}top-headlines?${queryParams}`); */
    return of(storedArticlesByCategory['business'].articles as Article[])
  }

  getNoticesByCategory(category: string, page: number): Observable<Article[]> {
    /*     return this.httpClient.get<NoticeResponse>(`${this.pathUrl}top-headlines`,
          { params: { category, country: 'us', page } }
        ).pipe(
          map(response => response.articles),
          catchError(() => of([]))); */
    return of(storedArticlesByCategory[category].articles as Article[])

  }

}
