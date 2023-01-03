import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsHeadlineComponent } from './news-headline/news-headline.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { HttpClientModule }  from '@angular/common/http';
import { SkyNewsServiceService } from './service/sky-news-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsHeadlineComponent,
    TopHeadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SkyNewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
