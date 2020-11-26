import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistersListComponent } from './registers-list/registers-list.component';


const routes: Routes = [
  { path: '', component: RegistersListComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistersRoutingModule { }
