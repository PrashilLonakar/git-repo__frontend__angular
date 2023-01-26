import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { NotificationService } from '../../core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  userForm: FormGroup | any;
  isSubmit: boolean = false;
  gitUserData: any = {};
  isShow: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _notificationType: NotificationService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userSearch: ['', Validators.required],
    });
  }

  userSearch(event: any) {
    console.log(event.target.value);
    this.isShow = false;
  }

  getUser(username: string) {
    this._userService.getUsers(username).subscribe((response: any) => {
      console.log(response);
      this.isSubmit = false;
      if (response?.body?.created_at) {
        this.isShow = true;
        this._notificationType.showSuccess(
          'User Data Fetch Successfully!',
          'Success'
        );
        this.gitUserData = response?.body;
      } else if (response?.body?.message) {
        this._notificationType.showError(response?.body?.message, 'Error');
      }
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
