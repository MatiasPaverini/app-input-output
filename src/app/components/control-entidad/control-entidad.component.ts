import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from "../../classes/user";
import { PaisesService } from "../../services/paises.service";

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {
  userArray: User[];
  user:User;
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
  
  pushButton(user) {
    this.user = user;
    console.log(user);
  }

}
