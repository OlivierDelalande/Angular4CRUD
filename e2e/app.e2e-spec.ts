import { Angular4FirebasePage } from './app.po';

describe('angular4-firebase App', () => {
  let page: Angular4FirebasePage;

  beforeEach(() => {
    page = new Angular4FirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
