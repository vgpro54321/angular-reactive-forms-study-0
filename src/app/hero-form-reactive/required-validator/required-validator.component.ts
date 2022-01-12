import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-required-validator',
  templateUrl: './required-validator.component.html',
  styleUrls: ['./required-validator.component.css'],
})
export class RequiredValidatorComponent implements OnInit {
  @Input()
  errors: any;

  @Input()
  errorMessage: string;

  constructor() {}

  ngOnInit() {}
}
