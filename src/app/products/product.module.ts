import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';





@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    ProductComponent,
    HomeComponent,
    ListComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductModule { }
