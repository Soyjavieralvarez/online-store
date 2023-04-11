import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
 exports: [
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule
 ]
})
export class MaterialModule { }
