import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyNewsServiceService } from './service/sky-news-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skyNews';
  searchKey='';
  topNews:any =[];
  constructor(private skyNewsService:SkyNewsServiceService){}
ngOnInit(){

}
  
  onSearch(){
    this.skyNewsService.getTopNewsUrl().subscribe(result=>{
      result?.articles?.forEach((elsements: { title: any; }) => {
              if((elsements.title.toLocaleLowerCase()).includes(this.searchKey.toLocaleLowerCase())){
       this.topNews.push(elsements); 
       console.log(result)
      }
      });

 console.log(this.topNews)
 
})

  }
}
