import { NgModule } from '@angular/core';
import {CarListComponent} from "../../pages/car-list/car-list.component";
import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import { UserListComponent } from '../../pages/user-list/user-list.component';
import {SharedMaterialModule} from "../shared-material/shared-material.module";



@NgModule({
    declarations: [
      CarListComponent,
      DashboardComponent,
      UserListComponent
    ],
    imports: [
      SharedMaterialModule
    ],
    exports: [],
    providers: [],
})
export class SharedComponentModule { }
