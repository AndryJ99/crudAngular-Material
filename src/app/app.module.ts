import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedMaterialModule} from "./shared/shared-material/shared-material.module";
import {SharedComponentModule} from "./shared/shared-component/sharedComponent.module";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MatTableModule} from "@angular/material/table";
@NgModule({
  declarations: [
    AppComponent,
      DashboardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedMaterialModule,
        SharedComponentModule,
        MatTableModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
