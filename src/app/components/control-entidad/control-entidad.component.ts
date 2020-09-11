import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  @Input() userArray = [];

  displayColumns: string[] = ['id', 'email']

  dataSource = this.userArray;

  constructor() { }

  ngOnInit(): void {
    
  }

  show(user) {
    console.log(user)
  }

}
