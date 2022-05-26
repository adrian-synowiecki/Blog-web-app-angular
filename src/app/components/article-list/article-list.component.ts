import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Article } from 'app/article-list';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() articleList: Article[] = []
  constructor() { }

  ngOnInit(): void {
    console.log(this.articleList)
    console.log('dsada')
  }

}
