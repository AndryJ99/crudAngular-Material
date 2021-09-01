import {Component, OnInit, ViewChild} from '@angular/core';
import {Cars, Insurance, Users} from "./models/models";
import {ProxyServiceService} from "./shared/proxy-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crudAngularMaterial';
  subTitle :string = '';

    @ViewChild('sidenav') drawer?: MatDrawer;

  constructor(private proxy: ProxyServiceService, public router: Router, private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
      this.subTitle = this.activatedRoute.snapshot.children[0].data.subtitle;

  }

    goTo(id: string){
        if(this.drawer){
            this.drawer.close();
        }
        this.router.navigateByUrl(id).then(()=>{
            console.log(this.activatedRoute.snapshot.children[0].data.subtitle);
            this.subTitle = this.activatedRoute.snapshot.children[0].data.subtitle;
        });

    }


}
