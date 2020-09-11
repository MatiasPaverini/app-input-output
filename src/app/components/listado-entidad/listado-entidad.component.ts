import { Component, OnInit } from '@angular/core';

import { PaisesService } from "../../services/paises.service";
import { User } from "../../classes/user";


@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  userArray: User[];
  //user: User;

  constructor(private service: PaisesService) { }

  ngOnInit(): void {
    this.service.getCountry().subscribe((user: any) => {
      console.log(user);
      console.log("En observable");
      this.userArray = user;
    }, error => {
      console.log("Error");
    });
    console.log("Salimos del observable");
  }

}
