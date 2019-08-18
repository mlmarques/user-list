import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() user: User
  
  constructor() {}

  ngOnInit() {}

}
