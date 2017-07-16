import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class IssueService {
  private _baseUrl = 'https://api.github.com/repos/angular/angular/issues';

  constructor(private _http: Http) { }

  getAllIssues() {
    return this._http.get(this._baseUrl)
      .map(res => res.json());
  }

  getOpenIssues() {
    return this._http.get(this._baseUrl + '?state=open')
      .map(res => res.json());
  }

  getClosedIssues() {
    return this._http.get(this._baseUrl + '?state=closed')
      .map(res => res.json());
  }

}
