import { NxLightPage } from './app.po';

describe('nx-light App', () => {
  let page: NxLightPage;

  beforeEach(() => {
    page = new NxLightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
