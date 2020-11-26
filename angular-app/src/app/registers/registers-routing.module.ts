import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistersListComponent } from './registers-list/registers-list.component';
import { NbListModule } from '@nebular/theme';


const routes: Routes = [
  { 
    path: 'list/:id', component: RegistersListComponent 
  },
  {
    path: '',
    redirectTo: 'list/1',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NbListModule,
  ],
  exports: [RouterModule]
})
export class RegistersRoutingModule { }
