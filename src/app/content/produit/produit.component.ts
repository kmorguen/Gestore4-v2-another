import { Produit } from './shared/produit';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
 produits : Produit [] = []
  constructor() { 
  }

  ngOnInit(): void {
  }


}
