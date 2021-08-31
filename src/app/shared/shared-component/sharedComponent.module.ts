import { NgModule } from '@angular/core';
import {CarListComponent} from "../../pages/car-list/car-list.component";
import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import { UserListComponent } from '../../pages/user-list/user-list.component';



@NgModule({
    declarations: [
        CarListComponent,

        UserListComponent
    ],
    imports: [
    ],
    exports: [],
    providers: [],
})
export class SharedComponentModule { }
