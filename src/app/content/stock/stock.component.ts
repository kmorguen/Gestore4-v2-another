import { Produit } from './../produit/shared/produit';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  
  produits : Produit [] = []

  produitForm : FormGroup
  constructor( private fb : FormBuilder ){
    this.produitForm = this.fb.group({
      name : ['',Validators.required],
      quantite : '',
      prixUnitaire : ''
    }) 
  
  }

  ngOnInit(): void {
  }
}
