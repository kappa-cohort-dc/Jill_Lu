import { AnimalDashPage } from './app.po';

describe('animal-dash App', () => {
  let page: AnimalDashPage;

  beforeEach(() => {
    page = new AnimalDashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
