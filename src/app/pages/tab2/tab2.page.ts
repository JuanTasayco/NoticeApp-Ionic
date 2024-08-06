import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';
import { Article } from 'src/app/interfaces/notice.interfaces';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'sports', 'technology'];
  selectedCategory: string = this.categories[0];

  articles: Article[] = [];
  constructor(private noticeService: NoticesService) { }
  ngOnInit(): void {

    this.segmentChanged('')  /* esto es cuando tenga api de nuevo */

    /*   this.articles = this.prov; */
  }

  segmentChanged(event: any) {
    this.selectedCategory = event.detail?.value || this.selectedCategory;

    this.noticeService.getNoticesByCategory(this.selectedCategory, this.currentPage).subscribe({
      next: (artclResponse) => {
        console.log('response')
        console.log(artclResponse)
        this.articles = artclResponse;
      }
    })
  }


  /* scrolling logic */
  @ViewChild('refScroll') infiniteScroll !: IonInfiniteScroll;
  currentPage: number = 1;
  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.noticeService.getNoticesByCategory(this.selectedCategory, this.currentPage).subscribe({
      next: (artclResponse) => {
        this.articles.push(...artclResponse);
        if (artclResponse.length === 0) {
          this.infiniteScroll.complete();
          this.infiniteScroll.disabled = true;
        }

        setTimeout(() => {
          event.target.complete();
        }, 500)
      }
    })
  }

  /* esto se borra al final */

}
