import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SkyNewsServiceService {

  constructor(private httpClient:HttpClient) { }
  newsApiUrl ="https://newsapi.org/v2/everything?q=bitcoin&apiKey=00c5eb83ed2a4fd3add33ea85c514a5b"
  topNewsUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=00c5eb83ed2a4fd3add33ea85c514a5b"
  
  getNews():Observable<any>{
    return this.httpClient.get(this.newsApiUrl);

  };
  getTopNewsUrl():Observable<any>{
    return this.httpClient.get(this.topNewsUrl);

  }

}
