import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-news2',
  templateUrl: './news2.page.html',
  styleUrls: ['./news2.page.scss'],
})
export class News2Page implements OnInit {

  newsArticles: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe((data: any) => {
      this.newsArticles = data.articles;
    });
  }

}
