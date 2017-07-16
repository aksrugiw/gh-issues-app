import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue/issue.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IssueService]

})
export class AppComponent implements OnInit {
  private currentType = '';
  private allIssues = [];
  private openIssues = [];
  private closedIssues = [];
  private displayedIssues = [];

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
          // console.log(this.openIssues.length);
        });
    this._issueService.getClosedIssues()
        .subscribe(issues => {
          this.closedIssues = issues;
        });
  }

  filterBy(type) {
    this.currentType = type;
    
    if (type === 'all') {
      this.displayedIssues = this.allIssues;
    }
    else if (type === 'open') {
      this.displayedIssues = this.openIssues;
    }
    else if (type === 'closed') {
      this.displayedIssues = this.closedIssues;
    }
  }
}
