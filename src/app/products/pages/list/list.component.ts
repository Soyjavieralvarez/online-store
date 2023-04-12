import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  products: Product[] = [];

constructor( private productsService: ProductsService) {}

ngOnInit() : void {

  this.productsService.getProducts()
  .subscribe( products => this.products = products);
} 
}
