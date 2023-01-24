import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  constructor(private http: HttpWrapperService) {}

  getRepos(username: string) {
    return this.http.get('repo/list?' + 'username=' + username);
  }
}
