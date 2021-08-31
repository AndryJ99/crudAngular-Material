import {Component, OnInit, ViewChild} from '@angular/core';
import {Cars, Insurance, Users} from "./models/models";
import {ProxyServiceService} from "./shared/proxy-service.service";
import {Router} from "@angular/router";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crudAngularMaterial';
  // userList: Users[] = [];
  // carList: Cars[] = [];
  // insuranceList: Insurance[] = [];
    @ViewChild('sidenav') drawer?: MatDrawer;

    childClicked: string = "";
  constructor(private proxy: ProxyServiceService, public router: Router){
  }

  ngOnInit(): void {
    // this.proxy.getUsers().subscribe((userData: Users[])=>{
    //   this.userList= [...userData];
    // });
    //
    // this.proxy.getCars().subscribe((carData: Cars[])=>{
    //   this.carList= [...carData];
    // });
    //
    // this.proxy.getInsurances().subscribe((insuranceData: Insurance[])=>{
    //   this.insuranceList= [...insuranceData];
    //   this.insuranceList.map(item => {
    //       this.proxy.getUsersById(item.user_id).subscribe((data: Users)=>{
    //           item.user_email = data.email;
    //       })
    //       this.proxy.getCarById(item.car_id).subscribe((data: Cars)=>{
    //           item.car_make = data.car_make;
    //           item.car_model = data.car_model;
    //       })
    //   });
    //   console.log(insuranceData);
    // });

  }

    goTo(id: string){
        if(this.drawer){
            this.drawer.close();
        }
        this.router.navigateByUrl(id).then(()=>{
            console.log(this.router.url);
        });

    }


}
