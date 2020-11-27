import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersListComponent } from './registers-list/registers-list.component';
import { 
  NbListModule, 
  NbCardModule, 
  NbUserModule, 
  NbButtonModule,
  NbAlertModule,
  NbWindowModule
} from '@nebular/theme';
import { RegisterDetailsComponent } from './register-details/register-details.component';

@NgModule({
  declarations: [
    RegistersListComponent,
    RegisterDetailsComponent
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbButtonModule,
    NbAlertModule,
    NbWindowModule.forChild(),
  ],
  entryComponents: [
    RegisterDetailsComponent
  ],
})
export class RegistersModule { }
