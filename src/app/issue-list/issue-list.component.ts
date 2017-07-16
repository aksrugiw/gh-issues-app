import { Component, OnInit, Input } from '@angular/core';
import { IssueService } from '../issue/issue.service'

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [IssueService]

})
export class IssueListComponent implements OnInit {
  private issues: any;
  @Input() issueType = 'closed';

  constructor(private _issueService: IssueService) { }

  ngOnInit() {
    if (this.issueType == 'all') {
        this._issueService.getAllIssues()
        .subscribe(issues => {
          this.issues = issues;
        });
    }
    else if (this.issueType == 'open') {
        this._issueService.getOpenIssues()
        .subscribe(issues => {
          this.issues = issues;
        });
    }
    else if (this.issueType == 'closed') {
        this._issueService.getClosedIssues()
        .subscribe(issues => {
          this.issues = issues;
        });
    }
  }

}
