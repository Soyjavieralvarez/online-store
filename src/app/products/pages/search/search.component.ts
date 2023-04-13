import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/interfaces';
import { ProductsService } from '../../services/products.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  term: string = '';
  products: Product[] = []
  productSelected: Product | undefined;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  searching() {
    this.productsService.getSuggestions( this.term.trim() )
    .subscribe( products => this.products = products);
  }

  selectedOption( event: MatAutocompleteSelectedEvent) {

    if(!event.option.value){
      this.productSelected = undefined;
      return;
    }

    const product: Product = event.option.value;
    this.term = product.name;

    this.productsService.getProductForId( product.id! ) 
    .subscribe( product => this.productSelected = product);
  }
}
