import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersListComponent } from './registers-list/registers-list.component';

@NgModule({
  declarations: [RegistersListComponent],
  imports: [
    CommonModule,
    RegistersRoutingModule
  ]
})
export class RegistersModule { }
