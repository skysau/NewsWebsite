import { Component, OnInit } from '@angular/core';
import { SkyNewsServiceService } from '../service/sky-news-service.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {
  topNews:any =[];
       constructor(private skyNewsService:SkyNewsServiceService){}
ngOnInit(){
     this.skyNewsService.getTopNewsUrl().subscribe(result=>{
      this.topNews=result.articles;
      
     })
}
}