import { Component, OnInit } from '@angular/core';
import { Article, NoticeResponse } from 'src/app/interfaces/notice.interfaces';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public articles: Article[] = []

  constructor(private noticeService: NoticesService) { }

  ngOnInit(): void {
    this.noticeService.getNotices().subscribe((response: NoticeResponse) => {
      this.articles = response.articles;
    });
  }

}
