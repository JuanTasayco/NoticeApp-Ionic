import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Article } from '../interfaces/notice.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IonStorageService {
  private _storage: Storage | null = null;
  private _localarticles: Article[] = [];
  private observableArticle = new BehaviorSubject<Article[]>([]);
  constructor(private storage: Storage) {
    this.init();
    this.loadArticles();
  }

  async init() {
    this._storage = await this.storage.create();
    await this.loadArticles();
    this.observableArticle.next(this._localarticles);
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  async saveNewFavoriteArticle(article: Article) {
    if (this._storage) {
      console.log('existe storage para iniciar')
      const exist = this._localarticles.find(localArticle => localArticle.title === article.title)

      if (!exist) {
        this._localarticles.push(article);
        await this._storage?.set('articles', this._localarticles);
        this.observableArticle.next(this._localarticles);
      }
    }

  }

  async loadArticles() {
    if (this._storage) {
      this._localarticles = await this._storage?.get('articles') || [];
    }
  }

  getLocalArticles() {
    return this.observableArticle.asObservable();
  }

  existArticleInStorage(article: Article): boolean {
    const exist: boolean = !!this._localarticles.find((localArticle) => localArticle.title === article.title)
    return exist;
  }

}
