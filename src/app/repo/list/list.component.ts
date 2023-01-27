import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RepoService } from 'src/app/core/services/repo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  repos: any = [];
  constructor(
    private repoService: RepoService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((queryParams: Params) => {
      this.getRepo(queryParams['username']);
    });
  }

  getRepo(username: string) {
    this.repoService.getRepos(username).subscribe(
      (res: any) => {
        console.log('username', username);
        console.log('res', res);
        this.repos = res;
        console.log('this.repos', this.repos);
      },
      (err) => {}
    );
  }
}
