import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class ProductService {

  constructor(private _http: HttpClient ) { 

  }


  getAlbum(id: number){
    let url = '../assets/album.json';
    return this._http.get(url).map(response => {
      console.log(response);
      return response;
    });
  }
}
