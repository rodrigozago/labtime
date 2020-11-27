import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/users.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { NbWindowService } from '@nebular/theme';
import { RegisterDetailsComponent } from '../register-details/register-details.component';

@Component({
  selector: 'app-registers-list',
  templateUrl: './registers-list.component.html',
  styleUrls: ['./registers-list.component.sass']
})
export class RegistersListComponent implements OnInit {
  
  users: User[];
  pageId: number;
  numPages: number;
  pages: number[];
  numRegisters: number;
  error: boolean = false;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private windowService: NbWindowService) {
  }

  showDetails(details) {
    const windowRef = this.windowService.open(RegisterDetailsComponent, { title: 'Detalhes de '+details.nome, context: { details: details} });
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.pageId = id;
        this.usersService.getPage(this.pageId).subscribe(
          res => {
            if(res) {
              this.users = res['resultados'];
              this.numPages = res['paginas'];
              this.pages = Array(this.numPages).fill(1).map((x,i)=>i+1);
              this.numRegisters = res['registros'];
            } else {
              this.error = true;
              throw "Error on get page";
            }
          }
        );
      }
    );
  }

}
