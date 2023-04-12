import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

constructor( private productsService: ProductsService) {}

ngOnInit() : void {

  this.productsService.getProducts()
  .subscribe( resp => console.log( resp ));
} 
}
