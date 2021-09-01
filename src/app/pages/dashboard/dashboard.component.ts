import { Component, OnInit } from '@angular/core';
import {ProxyServiceService} from "../../shared/proxy-service.service";
import {Cars, Insurance, Users} from "../../models/models";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  insuranceList: Insurance[] = [];


  constructor(private proxyApi: ProxyServiceService) { }

  ngOnInit(): void {

    this.proxyApi.getInsurances().subscribe((insuranceData: Insurance[])=>{
      this.insuranceList= [...insuranceData];
      this.insuranceList.map(item => {
          this.proxyApi.getUsersById(item.user_id).subscribe((data: Users)=>{
              item.user_email = data.email;
          });
          this.proxyApi.getCarById(item.car_id).subscribe((data: Cars)=>{
              item.car_make = data.car_make;
              item.car_model = data.car_model;
          })
      });
    });

  }

}
