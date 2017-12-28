
describe('The interactive plan view', () => {
  it('should be able to add a year', () => {
    browser.url('http://localhost:3000');
    expect(browser.getTitle()).to.equal('Plan Your Courses');

  });
});
