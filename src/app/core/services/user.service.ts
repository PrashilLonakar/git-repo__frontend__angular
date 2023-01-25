import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpWrapperService) {}

  getUsers(username: string) {
    return this.http.get('git-user?' + 'username=' + username);
  }
}
