import { QuizGotPage } from './app.po';

describe('quiz-got App', () => {
  let page: QuizGotPage;

  beforeEach(() => {
    page = new QuizGotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
