import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataAccessService {
  constructor(private http: HttpClient) { }

  getTreeData(): Observable<unknown> {
    return this.http.get<unknown>('./assets/data.json');
  }
}
