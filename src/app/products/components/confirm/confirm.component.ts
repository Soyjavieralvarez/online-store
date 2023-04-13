import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
constructor( private dialagoRef: MatDialogRef<ConfirmComponent>,
             @Inject(MAT_DIALOG_DATA) public data: Product) {}

ngOnInit(): void {
  
  
}

  delete(){
    this.dialagoRef.close(true);
  }

  close() {
    this.dialagoRef.close();
  }
}
