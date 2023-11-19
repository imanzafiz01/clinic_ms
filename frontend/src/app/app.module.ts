import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApiserviceService } from './apiservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { ViewinventoryComponent } from './viewinventory/viewinventory.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { UpdateinventoryComponent } from './updateinventory/updateinventory.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ViewpatientComponent,
    AddpatientComponent,
    UpdatepatientComponent,
    ViewinventoryComponent,
    AddinventoryComponent,
    UpdateinventoryComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
