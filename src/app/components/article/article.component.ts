import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/notice.interfaces';
import { Browser } from '@capacitor/browser';
import { IonStorageService } from 'src/app/services/ion-storage.service';
import { ActionSheetController } from '@ionic/angular';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  @Input() i: number = 0;

  constructor(private ionStorage: IonStorageService, private actionSheet: ActionSheetController) { }

  ngOnInit(): void {
    if (!this.article.urlToImage) {
      this.article.urlToImage = "assets/no-img.avif"
    }
  }

  async redirectToUrl(url: string) {
    await Browser.open({ url })
  }

  async onOpenMenu() {
    const actionSheet = await this.actionSheet.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Compartir',
          icon: 'share-outline',
          handler: () => {
            this.shared();
          }
        },
        {
          text: this.existArticle() ? 'Quitar de favoritos' : 'Favorito',
          icon: this.existArticle() ? 'heart' : 'heart-outline',
          handler: () => {
            this.saveNewFavorite();
          }
        }
      ]
    })

    actionSheet.present();
  }

  /* lógico compartir */
  async shared() {
    await Share.share({
      title: this.article.title,
      text: this.article.description || '',
      url: this.article.url,
      dialogTitle: this.article.author || ''
    })
  }

  /* logica favoritos */
  saveNewFavorite() {
    this.ionStorage.saveNewFavoriteArticle(this.article);
  }

  existArticle(): boolean {
    return this.ionStorage.existArticleInStorage(this.article);
  }
}
