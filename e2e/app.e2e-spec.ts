import { MatrixMonstruosaPage } from './app.po';

describe('matrix-monstruosa App', () => {
  let page: MatrixMonstruosaPage;

  beforeEach(() => {
    page = new MatrixMonstruosaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
