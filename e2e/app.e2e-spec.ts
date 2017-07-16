import { GithubIssueAppPage } from './app.po';

describe('github-issue-app App', function() {
  let page: GithubIssueAppPage;

  beforeEach(() => {
    page = new GithubIssueAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
