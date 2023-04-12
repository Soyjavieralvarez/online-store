import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  product!: Product;

  constructor (private activatedRoute: ActivatedRoute,
        private productsService: ProductsService,
        private router: Router){ }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id})  => this.productsService.getProductForId(id) )
    )
    .subscribe( product => this.product = product)
  }

  goBack() {
    this.router.navigate(['/products/list']);
  }
}