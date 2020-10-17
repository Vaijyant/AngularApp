import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../models';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  @Input()
  personList: Person[];

  constructor() { }

  ngOnInit(): void {
  }

}
