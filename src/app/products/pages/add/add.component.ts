import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  product: Product = {
    name:'',
    size:'',
    price:'',
    color: '',
    type:'',
    description:'',
    alt_img:'',
  }

  constructor() {}
  ngOnInit(): void {
    
  }
}
