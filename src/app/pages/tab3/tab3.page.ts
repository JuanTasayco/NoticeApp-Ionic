import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/notice.interfaces';
import { IonStorageService } from 'src/app/services/ion-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  favoriteArticles: Article[] = [];
  constructor(private ionStorage: IonStorageService) { }

  ngOnInit() {

    this.ionStorage.getLocalArticles().subscribe(response => {
      if (response.length > 0) {
        this.favoriteArticles = response;
      }
    })
  }



}
