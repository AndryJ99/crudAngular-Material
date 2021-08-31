import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {CarListComponent} from "./pages/car-list/car-list.component";
import {UserListComponent} from "./pages/user-list/user-list.component";

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },{
    path: 'car-list', component: CarListComponent
  },{
    path: 'user-list', component: UserListComponent
  },
  {path:'',redirectTo:'dashboard', pathMatch: 'full' },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
