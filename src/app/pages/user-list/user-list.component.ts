import { Component, OnInit } from '@angular/core';
import {ProxyServiceService} from "../../shared/proxy-service.service";
import {Users} from "../../models/models";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: Users[]=[];
  constructor(private proxyapi: ProxyServiceService) { }

  ngOnInit(): void {

    this.proxyapi.getUsers().subscribe((userData: Users[])=>{
        this.userList= [...userData];
      });

  }

}
