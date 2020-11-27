import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.sass']
})
export class RegisterDetailsComponent implements OnInit {

  @Input()
  details: any;

  constructor() { }

  ngOnInit() {
  }

}
