import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent  {
  @Input() issues;
  @Input() issuesDate;
}
