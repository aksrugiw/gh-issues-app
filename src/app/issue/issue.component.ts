import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue.service'

@Component({
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  providers: [IssueService]
})
export class IssueComponent implements OnInit {
  private issues: any;

  constructor(private _issueService: IssueService) { }

  ngOnInit() {
    this._issueService.getAllIssues()
      .subscribe(issues => {
        this.issues = issues;
      });
  }

}
