import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdComponent } from './pages/ad/ad.component';
import { AdsComponent } from './pages/ads/ads.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [

  { path: 'ads', component: AdsComponent},
  { path: 'ad/:id', component: AdComponent},
  { path: '**', component: MainComponent},
//  { path: '**', pathMatch: 'full', redirectTo: 'ads' }

]


@NgModule({
  imports: [ 
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
