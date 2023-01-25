import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  userForm: FormGroup | any;
  isSubmit: boolean = false;

  constructor(private fb: FormBuilder, private _userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userSearch: ['', Validators.required],
    });
  }

  getUser(username: string) {
    this._userService.getUsers(username).subscribe((response: any) => {
      console.log(response);
      this.isSubmit = false;
    });
  }

  onSubmit() {
    this.isSubmit = true;
    console.log('this.userForm', this.userForm.value);
    if (this.userForm.invalid) {
      return;
    }
    this.getUser(this.userForm.value.userSearch);
  }
}
