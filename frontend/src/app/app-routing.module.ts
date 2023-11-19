import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { FaqComponent } from './faq/faq.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { ViewinventoryComponent } from './viewinventory/viewinventory.component';
import { UpdateinventoryComponent } from './updateinventory/updateinventory.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'addpatient', component: AddpatientComponent},
  {path: 'viewpatient', component: ViewpatientComponent},
  {path: 'updatepatient', component: UpdatepatientComponent},
  { path: 'updatepatient/:id', component: UpdatepatientComponent },
  {path: 'addinventory', component: AddinventoryComponent},
  {path: 'viewinventory', component: ViewinventoryComponent},
  {path: 'updateinventory', component: UpdateinventoryComponent},
  { path: 'updateinventory/:id', component: UpdateinventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
