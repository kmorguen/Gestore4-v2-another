import { PRODUITS } from '../content/produit/shared/produit-data';
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../content/produit/shared/produit';
import { Observable } from 'rxjs'

@Injectable()
export class AfficheProdService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://jsonplaceholder.typicode.com/todos/1';
  posts: Observable<Produit[]>
    constructor(private http: HttpClient, private produit : Produit) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
     getProduit() {
      this.posts = this.http.get<Produit[]>(this.accessPointUrl)
    }
  
    public add(produit) {
      
      return this.http.post(this.accessPointUrl, produit, {headers: this.headers});
    }
  
    public remove(produit) {
      return this.http.delete(this.accessPointUrl + '/' + produit.id, {headers: this.headers}).subscribe( produit => { console.log (produit)});
    }
  
    public update(produit) {
      return this.http.put(this.accessPointUrl + '/' + produit.id, produit, {headers: this.headers});
    }
}