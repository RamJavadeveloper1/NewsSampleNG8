import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/articles';
import { NewsService } from '../../news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  articles : Articles [] = [];
  
  ngOnInit(): void {
    this.newsService.getNews('in')
      .then(data => {
        this.articles = data.articles;
      });
  }

}
