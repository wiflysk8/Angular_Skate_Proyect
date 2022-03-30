import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkatersService {

  constructor(private http: HttpClient) { }

  data: any = {
    name:"",
    image:"",
    age: "",
    hometown: "",
    category: "",
    id:""
  };



  getSkaters(){
    return this.http.get("https://proyect-node-sage.vercel.app/skater")
    }

  postSkater(newSkater: any){
    return this.http.post("https://proyect-node-sage.vercel.app/skater", newSkater)
  }

  deleteSkater(id:any){
    return this.http.delete("https://proyect-node-sage.vercel.app/skater/" + id);
  }

  updateInfo(item: any) {
    this.data = item;
    console.log(this.data)
  }

  putSkater(editedSkater: any, skaterId: any){
    return this.http.put("https://proyect-node-sage.vercel.app/skater/" + skaterId, editedSkater)
  }

  filteredSkater(skater:any){
    return this.http.get("https://proyect-node-sage.vercel.app/skater/name/" + skater);
  }
}
