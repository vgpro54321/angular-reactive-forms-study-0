import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],

    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),

    aliases: this.fb.array([this.fb.control('', [Validators.required])]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  onUpdateProfile() {
    this.profileForm.patchValue({
      firstName: 'Oscar',
      address: {
        city: 'Irvine',
      },
    });
  }

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(): void {
    this.aliases.push(this.fb.control('', [Validators.required]));
  }

  removeAliasAt(index: number): void {
    this.aliases.removeAt(index);
  }
}
