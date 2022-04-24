import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkatersService {
  constructor(private http: HttpClient) {}

  data: any = {
    name: '',
    image: '',
    age: '',
    hometown: '',
    category: '',
    id: '',
  };

  getSkaters() {
    return this.http.get('https://backend-skate-app.vercel.app/skaters');
  }

  postSkater(newSkater: any) {
    return this.http.post(
      'https://backend-skate-app.vercel.app/skaters',
      newSkater
    );
  }

  deleteSkater(id: any) {
    return this.http.delete(
      'https://backend-skate-app.vercel.app/skaters' + id
    );
  }

  updateInfo(item: any) {
    this.data = item;
    console.log(this.data);
  }

  putSkater(editedSkater: any, skaterId: any) {
    return this.http.put(
      'https://https://backend-skate-app.vercel.app/skater/' + skaterId,
      editedSkater
    );
  }

  filteredSkater(skater: any) {
    return this.http.get(
      'https://https://backend-skate-app.vercel.app/skater/name/' + skater
    );
  }
}
