import { Component, OnInit } from '@angular/core';
import { AdModel } from 'src/app/models/ad.model';
import { AdService } from 'src/app/services/ad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ads: AdModel [] = [];
  cargando = false;

  constructor( private adService: AdService) { }

  ngOnInit(): void {

    this.cargando = true;
    this.adService.getAds()
    .subscribe((resp: any) => {
      this.ads = resp;
      this.cargando = false;
    });
  }


  borrarAd ( ad: AdModel, i: number ) {

    Swal.fire({
      title: '¡Esta seguro?',
      text: `Esta seguro que desea borrar a ${ ad.title }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.ads.splice(i, 1);
        this.adService.borrarAd ( ad.id ).subscribe();
      }
    });
  }
}
