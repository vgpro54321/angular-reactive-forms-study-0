import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../validators/forbidden-name-validator';
import { identityRevealedValidator } from '../validators/identity-revealed-validator';

export class Hero {
  constructor(
    public name: string,
    public alterEgo: string,
    public power: string
  ) {}
}

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css'],
})
export class HeroFormReactiveComponent implements OnInit {
  hero: Hero;

  heroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.hero = new Hero('Superman', 'Clark', 'Flight');
  }

  ngOnInit() {
    this.heroForm = this.fb.group(
      {
        name: this.fb.control(this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          forbiddenNameValidator(/bob/i),
        ]),

        alterEgo: this.fb.control(this.hero.alterEgo, [Validators.required]),

        power: this.fb.control(this.hero.power, [Validators.required]),
      },
      { validators: identityRevealedValidator }
    );

    console.log(this.heroForm.value);
  }
}
