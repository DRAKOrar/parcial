import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey = 'be64a1b1567b4c14ac9c4b23e80efdcb';
  
  apiUrl = 'https://newsapi.org/v2/top-headlines?country=us';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}&apiKey=${this.apiKey}`);
  }

  getNewsByCategory(category: string): Observable<any> {
    const url = `${this.apiUrl}?category=${category}&country=us&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
