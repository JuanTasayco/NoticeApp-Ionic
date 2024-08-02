import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ArticleComponent, ArticlesComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ComponentsModule { }
