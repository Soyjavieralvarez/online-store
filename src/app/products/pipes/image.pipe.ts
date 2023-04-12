import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/interfaces';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( product: Product,): string {
    return `assets/products/${ product.id }.jpg`;

    //assets/products/Nike Air Max Flyknit Racer.jpg
  }

}
