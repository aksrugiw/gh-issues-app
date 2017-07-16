import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IssueService } from '../issue/issue.service'

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [IssueService]

})
export class IssueListComponent implements OnInit, OnChanges {
  private allIssues: any;
  private openIssues: any;
  private closedIssues: any;
  private displayedIssues: any;
  @Input() issueType = '';

  constructor(private _issueService: IssueService) { }

  ngOnInit() {
    this._issueService.getAllIssues()
        .subscribe(issues => {
          this.allIssues = issues;
          this.displayedIssues = issues;
        });
    this._issueService.getOpenIssues()
        .subscribe(issues => {
          this.openIssues = issues;
        });
    this._issueService.getClosedIssues()
        .subscribe(issues => {
          this.closedIssues = issues;
        });
  }

  ngOnChanges() {
    if (this.issueType === 'all') {
      this.displayedIssues = this.allIssues;
    }
    else if (this.issueType === 'open') {
      this.displayedIssues = this.openIssues;
    }
    else if (this.issueType === 'closed') {
      this.displayedIssues = this.closedIssues;
    }
  }

}
