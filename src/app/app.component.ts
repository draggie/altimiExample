import { Component, OnInit } from '@angular/core';
import { DataAccessService } from './core/data-access.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ExampleProjectAltimi';
  data: Observable<unknown>;

  constructor(private dataAccessService: DataAccessService) {
  }

  ngOnInit() {
    this.data = this.dataAccessService.getTreeData();
  }
}
