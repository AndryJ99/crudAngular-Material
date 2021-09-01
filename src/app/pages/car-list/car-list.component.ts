import { Component, OnInit } from '@angular/core';
import {ProxyServiceService} from "../../shared/proxy-service.service";
import {Cars, Users} from "../../models/models";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  carList: Cars[]=[];

  constructor(private proxyApi: ProxyServiceService) { }

  ngOnInit(): void {
    this.proxyApi.getCars().subscribe((carData: Cars[])=>{
        this.carList= [...carData];

      this.carList.map(item => {
        this.proxyApi.getUsersById(item.user_id).subscribe((data: Users)=>{
          item.user_email = data.email;
          item.user_name = data.first_name +" "+ data.last_name;
        });
      });
    });
  }

}
