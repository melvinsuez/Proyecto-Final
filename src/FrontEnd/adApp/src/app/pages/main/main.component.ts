import { Component, OnInit } from '@angular/core';
import { AdModel } from 'src/app/models/ad.model';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ads: AdModel [] = [];

  constructor( private adService: AdService) { }

  ngOnInit(): void {

    this.adService.getAds()
    .subscribe((resp: any) => {
      this.ads = resp;

    });
  }

}
