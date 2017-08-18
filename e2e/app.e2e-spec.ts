import { CodeCardsPage } from './app.po';

describe('code-cards App', () => {
  let page: CodeCardsPage;

  beforeEach(() => {
    page = new CodeCardsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
