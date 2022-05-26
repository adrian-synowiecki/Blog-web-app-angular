import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'app/article-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articleList: Article[] = [];
  isFetching = false;
  @Input() diameter: number = 50;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.isFetching = true;
    this.http
      .get<{ articlesCount: number; articles: Article[] }>(
        'https://conduit.productionready.io/api/articles'
      )
      .subscribe((data) => {
        this.isFetching = false;
        this.articleList = data.articles;
      });
  }
}
