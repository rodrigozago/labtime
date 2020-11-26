import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersListComponent } from './registers-list/registers-list.component';
import { 
  NbListModule, 
  NbCardModule, 
  NbUserModule, 
  NbButtonModule 
} from '@nebular/theme';

@NgModule({
  declarations: [
    RegistersListComponent
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbButtonModule
  ]
})
export class RegistersModule { }
