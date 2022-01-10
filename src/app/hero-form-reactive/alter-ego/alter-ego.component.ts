import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alter-ego',
  templateUrl: './alter-ego.component.html',
  styleUrls: ['./alter-ego.component.css'],
})
export class AlterEgoComponent implements OnInit {
  @Input()
  externalForm: FormGroup;

  constructor() {}

  ngOnInit() {}
}
