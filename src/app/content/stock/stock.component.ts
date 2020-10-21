import { AfficheProdService } from './../../core/service/AfficheProd.service';
import { Produit } from '../../core/models/produit';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  opened = true;
  panelOpenState = false;

  produits : Produit [] = []

  produitForm : FormGroup
  constructor( private fb : FormBuilder, private afficheProdService : AfficheProdService ){
    this.produitForm = this.fb.group({
      name : ['',Validators.required],
      quantite : '',
      prixUnitaire : ''
    }) 
  
  }
  onEdit(){

  }

  onDelete(){

  }

  ngOnInit(): void {
  }
}
