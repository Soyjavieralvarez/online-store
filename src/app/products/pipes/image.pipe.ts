import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/interfaces';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( product: Product,): string {

    if(!product.id && !product.alt_img) {
      return 'assets/no-image.png';
    } else if (product.alt_img) {
      return product.alt_img;
    } else {
      return `assets/products/${ product.id }.jpg`;
    }


    
  }

}
