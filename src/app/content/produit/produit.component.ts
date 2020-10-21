import { AfficheProdService } from './../../core/service/AfficheProd.service';
import { Produit } from '../../core/models/produit';
import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
 produits : Produit []
 
 opened = true;
  panelOpenState = false;
  
  constructor(private afficheProdService : AfficheProdService, private http : HttpClient) { 
  }

  ngOnInit(): void {
    // this.afficheProdService.getPosts()
    //     .subscribe(response => {
    //       this.produits = response;
    //     });
  }


}
