import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news1',
  templateUrl: './news1.page.html',
  styleUrls: ['./news1.page.scss'],
})
export class News1Page implements OnInit {

  newsArticles: any[] = [];
  filteredNews: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe((data: any) => {
      this.newsArticles = data.articles;
      this.filteredNews = data.articles;
    });
  }


  searchNews(event: any) {
    const query = event.target.value.toLowerCase();
    
    if (!query || query.trim() === '') {
      this.filteredNews = this.newsArticles;
      return;
    }

    this.filteredNews = this.newsArticles.filter(article =>
      article.title.toLowerCase().includes(query)
    );
  }

  loadMoreNews(event: { target: { complete: () => void; }; }) {
    this.newsService.getNews().subscribe((data: any) => {
      this.newsArticles = this.newsArticles.concat(data.articles);
      this.filteredNews = this.newsArticles; 
      event.target.complete();
    });
  }

}
