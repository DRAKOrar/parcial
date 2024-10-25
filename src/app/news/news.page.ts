import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newsArticles: any[] = [];
  filteredNews: any[] = [];
  selectedCategory: string = 'technology'; 

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNewsByCategory(this.selectedCategory); 
  }

  getNewsByCategory(category: string) {
    this.newsService.getNewsByCategory(category).subscribe(
      (data: any) => {
        if (data.articles.length === 0) {
          console.log('No news articles available for this category.');
        } else {
          this.newsArticles = data.articles;
          this.filteredNews = data.articles;
        }
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

  segmentChanged(event: any) {
    const category = event.detail.value;
    this.getNewsByCategory(category); 
  }

  loadMoreNews(event: { target: { complete: () => void; }; }) {
    this.newsService.getNewsByCategory(this.selectedCategory).subscribe((data: any) => {
      this.newsArticles = this.newsArticles.concat(data.articles);
      this.filteredNews = this.newsArticles; 
      event.target.complete();
    });
  }
}
