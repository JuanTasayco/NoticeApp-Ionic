import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/notice.interfaces';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article!: Article;
  @Input() i: number = 0;
  constructor() { }


  async redirectToUrl(url: string) {
    /*     console.log('url')
        if (url) window.open(url, '_blank') */
    await Browser.open({ url })
  }
}
