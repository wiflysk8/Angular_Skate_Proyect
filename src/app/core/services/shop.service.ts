import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("https://proyect-node-sage.vercel.app/skate")
    }

    postShop(newSkater: any){
      return this.http.post("https://proyect-node-sage.vercel.app/skate", newSkater)
    }

    deleteShop(id:any){
      return this.http.delete("https://proyect-node-sage.vercel.app/skate/" + id);
    }

}
