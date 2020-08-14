import { Component, OnInit } from '@angular/core';
import { CONT_MOVCON } from "./models/CONT_MOVCON";

@Component({
  selector: 'kt-movimiento-contable',
  templateUrl: './movimiento-contable.component.html',
  styleUrls: ['./movimiento-contable.component.scss']
})
export class MovimientoContableComponent implements OnInit {
  movimiento:CONT_MOVCON= new CONT_MOVCON();
  editing: {
    allowUpdating: true, // Enables editing
    allowAdding: true, // Enables insertion
    allowDeleting: true // Enables removing
}
  constructor() { }

  ngOnInit() {
    this.GetData();
  }


  GetData(){

   this.movimiento.detalle = [
  ]



}



}
