import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/interfaces';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  term: string = '';
  products: Product[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  searching() {
    this.productsService.getProducts()
    .subscribe( products => this.products = products);
  }
}
