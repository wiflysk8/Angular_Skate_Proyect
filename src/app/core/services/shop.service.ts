import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://backend-skate-app.vercel.app');
  }

  postShop(newSkater: any) {
    return this.http.post('https://backend-skate-app.vercel.app', newSkater);
  }

  deleteShop(id: any) {
    return this.http.delete('https://backend-skate-app.vercel.app' + id);
  }
}
