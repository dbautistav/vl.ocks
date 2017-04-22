import { VlocksPage } from './app.po';

describe('vlocks App', () => {
  let page: VlocksPage;

  beforeEach(() => {
    page = new VlocksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
