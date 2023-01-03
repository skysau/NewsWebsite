import { Component, OnInit } from '@angular/core';
import { SkyNewsServiceService } from '../service/sky-news-service.service';

@Component({
  selector: 'app-news-headline',
  templateUrl: './news-headline.component.html',
  styleUrls: ['./news-headline.component.css']
})
export class NewsHeadlineComponent implements OnInit {
  topNews:any =[];
  news:any=[];
       constructor(private skyNewsService:SkyNewsServiceService){}
ngOnInit(){
     this.skyNewsService.getNews().subscribe(result=>{
      this.news=result.articles;

     })
     this.skyNewsService.getTopNewsUrl().subscribe(result=>{
      this.topNews=result.articles;
      
     })
}

}
