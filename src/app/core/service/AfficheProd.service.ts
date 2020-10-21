import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../../core/models/produit';
import { Observable } from 'rxjs'

@Injectable()
export class AfficheProdService {
  private headers: HttpHeaders;
  private accessPointUrl: string = '';
  posts: Observable<Produit[]>
    constructor(private http: HttpClient, private produit : Produit) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
     getProduit() {
      this.posts = this.http.get<Produit[]>(this.accessPointUrl)
    }
    getPosts(){
      console.log(this.accessPointUrl);
      return this.http.get(this.accessPointUrl);
    }
    
    addProduit(produit){
      return this.http.post(this.accessPointUrl, JSON.stringify(produit));
    }
    // public add(produit) {
      
    //   return this.http.post(this.accessPointUrl, produit, {headers: this.headers});
    // }
  
    // public remove(produit) {
    //   return this.http.delete(this.accessPointUrl + '/' + produit.id, {headers: this.headers}).subscribe( produit => { console.log (produit)});
    // }
  
    // public update(produit) {
    //   return this.http.put(this.accessPointUrl + '/' + produit.id, produit, {headers: this.headers});
    // }

}
