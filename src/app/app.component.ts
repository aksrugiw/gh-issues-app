import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue/issue.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IssueService]

})
export class AppComponent implements OnInit {
  currentType = 'all';
  allIssues = [];
  allIssuesLength = 0;
  openIssues = [];
  openIssuesLength = 0;
  closedIssues = [];
  closedIssuesLength = 0;
  displayedIssues = [];
  issuesDate = [];

  constructor(private _issueService: IssueService) { }

  ngOnInit() {
    this._issueService.getAllIssues()
        .subscribe(issues => {
          this.allIssues = this.groupData(issues);
          this.allIssuesLength = issues.length;
          this.displayedIssues = this.groupData(issues);
    console.log(this.allIssues);
        });
    this._issueService.getOpenIssues()
        .subscribe(issues => {
          this.openIssues = this.groupData(issues);
          this.openIssuesLength = issues.length;
        });
    this._issueService.getClosedIssues()
        .subscribe(issues => {
          this.closedIssues = this.groupData(issues);
          this.closedIssuesLength = issues.length;
        });
    
  }

  groupData(data) {
    let arr = [];
    let groupIssues = [];
    for (let issue of data) {
      let shortDate = issue.created_at ? issue.created_at.split('T')[0] : null;
      arr.push( shortDate );
    }
    this.issuesDate = Array.from(new Set(arr));

    for (let issue of data) {
      for (let i=0; i< this.issuesDate.length; i++) {
        let shortDate = issue.created_at ? issue.created_at.split('T')[0] : null;
        if(shortDate === this.issuesDate[i]) {
          if(groupIssues[i]) {
            groupIssues[i].push(issue);
          }
          else {
            groupIssues[i] = [issue];
          }
        }
        
      }
    }
    
    return groupIssues;
    
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
