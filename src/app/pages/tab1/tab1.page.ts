import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article, NoticeResponse } from 'src/app/interfaces/notice.interfaces';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  public articles: Article[] = []
  currentArticles: Article[] = [];
  currentPage: number = 1;
  currentObservable: any;
  constructor(private noticeService: NoticesService) { }

  ngOnInit(): void {
    this.noticeService.getNotices(this.currentPage).subscribe((response: Article[]) => {
      this.articles = response;
      /* logica splice solo para data en duro */
      this.currentArticles = this.articles.splice(0, 9);
    });
  }

  @ViewChild('scrollInfinite') scrollInfiniteRef !: IonInfiniteScroll;

  /* logica para uso de api, no usar, solo tomar como ejemplo */
  loadDataWithApiUse(event: any) {
    this.currentPage++;
    this.currentObservable = this.noticeService.getNotices(this.currentPage).subscribe((response: Article[]) => {
      this.articles.push(...response);
      if (response.length === 0) {
        this.scrollInfiniteRef.complete();
        this.scrollInfiniteRef.disabled = true;
      }
      setTimeout(() => {
        event.target.complete();
      }, 500)

    });
  }

  /* para usar data en duro debido a que la api tiene problemas de cors */
  loadData(event: any) {
    const partArticles = this.articles.splice(0, 9);
    this.currentArticles.push(...partArticles)
    console.log(this.articles)
    if (this.articles.length === 0) {
      this.scrollInfiniteRef.complete();
      this.scrollInfiniteRef.disabled = true;
    }
    setTimeout(() => {
      event.target.complete();
    }, 500)
  }


  ngOnDestroy(): void {
    this.currentObservable.unsubscribe();
  }



}
