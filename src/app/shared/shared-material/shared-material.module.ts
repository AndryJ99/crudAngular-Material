import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {TableModule} from "primeng/table";

const MATERIAL_IMPORT = [
  MatToolbarModule,
  HttpClientModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule
];

@NgModule({
  declarations: [],
  imports: [...MATERIAL_IMPORT],
  exports:[...MATERIAL_IMPORT],
  providers: [
      TableModule
  ]
})
export class SharedMaterialModule { }
