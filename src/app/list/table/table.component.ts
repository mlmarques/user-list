import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/User';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() users: User[] = []
  
  constructor() {}

  ngOnInit() {}

}
