import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsHeadlineComponent } from './news-headline/news-headline.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';

const routes: Routes = [
  {path:'', component:NewsHeadlineComponent},
  {path:'top-NewsHeadline', component:TopHeadlineComponent},
  {path:'*', component:NewsHeadlineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
