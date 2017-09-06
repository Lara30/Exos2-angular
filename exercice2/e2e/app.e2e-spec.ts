import { Exo2Page } from './app.po';

describe('exo2 App', () => {
  let page: Exo2Page;

  beforeEach(() => {
    page = new Exo2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
