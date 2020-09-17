import { Component, OnInit, Input } from '@angular/core';

import { User } from "../../classes/user";
@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }



}
