import { Component, OnInit, Input } from '@angular/core';
import { IssueService } from './issue.service'

@Component({
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  @Input() issue = null;
  constructor() { }

  ngOnInit() {
  }

}
