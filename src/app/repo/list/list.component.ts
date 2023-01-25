import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/core/services/repo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  repos: any = [];
  constructor(private repoService: RepoService) {}

  ngOnInit(): void {
    this.getRepo('prashil1');
  }

  getRepo(username: string) {
    this.repoService.getRepos(username).subscribe(
      (res: any) => {
        console.log('username', username);
        console.log('res', res);
        let respo = res;
        let val = [];
        respo.map((item: any) => {
          val.push(item);
        });
        this.repos = res;
        console.log('this.repos', this.repos);
      },
      (err) => {}
    );
  }
}
