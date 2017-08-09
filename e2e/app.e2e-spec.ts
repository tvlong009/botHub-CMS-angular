import { BotHUBCMSPage } from './app.po';

describe('bot-hub-cms App', () => {
  let page: BotHUBCMSPage;

  beforeEach(() => {
    page = new BotHUBCMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
