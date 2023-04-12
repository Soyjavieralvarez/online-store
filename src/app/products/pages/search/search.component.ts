import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  term: string = '';
  products: Product[] = []
  constructor() { }

  ngOnInit(): void {
    
  }
}
