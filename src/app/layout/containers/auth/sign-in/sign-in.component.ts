import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required),
  });

  resetForm() {
    this.exampleForm.reset();
  }

  submit() {
    // ...
  }
}
