import { AnonymousNotesAngPage } from './app.po';

describe('anonymous-notes-ang App', () => {
  let page: AnonymousNotesAngPage;

  beforeEach(() => {
    page = new AnonymousNotesAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
