import { Component, OnInit } from '@angular/core';
import { serveur } from 'src/Model/serveur';

@Component({
  selector: 'app-servers-management',
  templateUrl: './servers-management.component.html',
  styleUrls: ['./servers-management.component.css']
})
export class ServersManagementComponent implements OnInit {

  listServeur=[
    new serveur("Production server" , "small" , "critical" , new Date(2021,2,16)) ,
    new serveur("Testing server" , "medium" , "stable" , new Date(2021,2,8)) ,
    new serveur("Developement server" , "large" , "offline" , new Date(2021,2,10)) ,
    new serveur("Production server" , "small" , "stable" , new Date(2021,2,16))
  ]

  constructor() { }

  ngOnInit(): void {

  }

  getClass(status : string){
    return {
      'list-group-item-success' : status == 'stable' ? true : false ,
      'list-group-item-warning' : status == 'offline' ? true : false ,
      'list-group-item-danger' : status == 'critical' ? true : false
    }
  }

}
