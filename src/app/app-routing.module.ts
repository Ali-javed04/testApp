import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './components/date/date.component';
import { DetailsTableComponent } from './components/details-table/details-table.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'details',component:DetailsTableComponent
  },
  {
    path:'date', component: DateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
