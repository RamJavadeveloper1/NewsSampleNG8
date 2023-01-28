import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

   private apiKey = 'b8a494445c434aad83b0855ba3237f0e';
   private articleUrl = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}`;

   

  async getNews(source: string) {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${this.apiKey}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getArticle(articleId: string): Promise<any> {
    try {
      const response = await axios.get(`${this.articleUrl}&q=${articleId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }



}
