import { YearModel } from '../YearModel';
import { fall, spring } from '../../../seed/stubData';

describe('A Term', () => {
  let myYear;

  beforeEach(() => {
    myYear = new YearModel('First Year', [fall]);
  });

  it('should be able to set title with setTitle()', () => {
    expect(myYear.title).toBe('First Year');

    myYear.setTitle('Second Year');
    expect(myYear.title).toBe('Second Year');
  });

  it('should be able to add a term with addTerm()', () => {
    expect(myYear.terms.length).toBe(1);

    myYear.addTerm(spring);
    expect(myYear.terms.length).toBe(2);
  });

});
