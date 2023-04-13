import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { Product } from '../../interfaces/interfaces';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
  img{
    width:50%;
    border-radius:5px;
  }
  `],
  styleUrls:['./add.component.scss']
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

  constructor( private productsService: ProductsService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {}

  ngOnInit(): void {

    if ( !this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.productsService.getProductForId( id ))
    )
    .subscribe(product => this.product = product );
  }

  save(){
    if ( this.product.name.trim().length === 0 ) {
      return;
    }

    if ( this.product.id) {
      //Update
      this.productsService.updateProduct( this.product )
      .subscribe( product => console.log('Updating', product))
    } else {
      //Create
      this.productsService.addProduct(this.product)
      .subscribe( product => {
        this.router.navigate([ '/products/edit', product.id ]);
      })
    }
    }

    deleteProduct() {
      this.productsService.deleteProduct( this.product.id! )
      .subscribe( resp => {
        this.router.navigate(['/products']);
      } )
    }
  }
