import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';
import { Article } from 'src/app/interfaces/notice.interfaces';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'sports', 'technology'];
  selectedCategory: string = this.categories[0];

  articles: Article[] = [];
  currentArticles: Article[] = [];
  currentSubscripcion: any;

  @ViewChild('refScroll') infiniteScroll !: IonInfiniteScroll;
  currentPage: number = 1;
  constructor(private noticeService: NoticesService) { }

  ngOnInit(): void {

    this.segmentChanged('')  /* esto es cuando tenga api de nuevo */

    /*   this.articles = this.prov; */
  }

  segmentChanged(event: any) {
    this.currentArticles = [];
    this.selectedCategory = event.detail?.value || this.selectedCategory;
    if (this.infiniteScroll) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = false;
    }

    this.currentSubscripcion = this.noticeService.getNoticesByCategory(this.selectedCategory, this.currentPage).subscribe({
      next: (artclResponse) => {
        /* asigno un clon del response de lo contrario parece que lo recorta y en cada petición el arreglo es más pequeño */
        this.articles = structuredClone(artclResponse);
        this.currentArticles = this.articles.splice(0, 9);

      }
    })
  }


  /* scrolling logic */

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    const nextPart = this.articles.splice(0, 9);
    this.currentArticles.push(...nextPart);
    if (this.articles.length === 0) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
    }

    setTimeout(() => {
      event.target.complete();
    }, 500)
  }



  ngOnDestroy(): void {
    this.currentSubscripcion.unsubscribe();
  }
}


/* onIonInfiniteWithApi() {
      this.currentPage++;
  this.noticeService.getNoticesByCategory(this.selectedCategory, this.currentPage).subscribe({
    next: (artclResponse) => {
      this.articles.push(...artclResponse);
      if (artclResponse.length === 0) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
      }

  
    }
  })

    setTimeout(() => {
    event.target.complete();
  }, 500)  
} */