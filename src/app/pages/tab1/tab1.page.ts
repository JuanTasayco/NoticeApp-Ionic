import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article, NoticeResponse } from 'src/app/interfaces/notice.interfaces';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public articles: Article[] = []
  currentPage: number = 1;
  constructor(private noticeService: NoticesService) { }

  ngOnInit(): void {
    this.noticeService.getNotices(this.currentPage).subscribe((response: NoticeResponse) => {
      this.articles = response.articles;
    });
  }

  @ViewChild('scrollInfinite') scrollInfiniteRef !: IonInfiniteScroll;
  loadData(event: any) {
    this.currentPage++;
    this.noticeService.getNotices(this.currentPage).subscribe((response: NoticeResponse) => {
      this.articles.push(...response.articles);
      console.log(response.articles)
      if (response.articles.length === 0) {
        this.scrollInfiniteRef.complete();
        this.scrollInfiniteRef.disabled = true;
      }
      setTimeout(() => {
        event.target.complete();
      }, 500)

    });
  }



}
