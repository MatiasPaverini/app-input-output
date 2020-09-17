import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from "../../classes/user";


@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() userArray: User[] = [];
  @Output() selectedUser: EventEmitter<any> = new EventEmitter<any>();

  displayColumns: string[] = ['id', 'email']

  dataSource = this.userArray;

  constructor() { }

  ngOnInit(): void {
    
  }

  public show(user: User) {
    console.log(user)
    this.selectedUser.emit(user);
  }

}
