import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdModel } from '../models/ad.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private url = 'http://localhost:3000';

  constructor( private http: HttpClient) { }


  crearAd( ad: AdModel ) {
      return this.http.post(`${ this.url }/advert`, ad)
        .pipe(
          map ( (resp: any) => {
            ad.id = resp.id;
            return ad;
          })
        );
  }

  actualizarAd(ad: AdModel) {
    return this.http.put(`${ this.url }/advert/${ ad.id }`, ad);
  }


borrarAd ( id: string ) {

  return this.http.delete(`${ this.url }/advert/${ id }`);
}

  getAd( id: string){
    return this.http.get(`${ this.url }/advert/${ id }`);
  }

  getAds(){
    return this.http.get(`${ this.url }/advert`)
    .pipe(
      delay(500)
    );
  }

}
