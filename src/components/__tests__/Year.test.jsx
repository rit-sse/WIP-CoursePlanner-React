import React from 'react';
import { Provider } from 'mobx-react';
import { shallow, mount, render } from 'enzyme';
import { Year } from '../Year';
import { Store } from '../../stores/Store.js';
import { SE } from '../../seed/SE';

// Course fails to shallow render if it's not
// in the context of a droppable, so we mock 
// Draggable to blindly render its children
jest.mock('react-beautiful-dnd', () => ({
  Draggable: ({ children }) => (
    <div>
      { children({dragHandleProps:{}}, {isDragging: false}) }
    </div>
  ),
  Droppable: ({ children }) => (
    <div>
      { children({dragHandleProps:{}}, {isDragging: false}) }
    </div>
  ),
}));

describe('<Year />', () => {
  const myStore = new Store();
  let wrapper;

  beforeEach(() => {
    myStore.seed(SE);
    wrapper = mount(
      <Provider store={myStore}>
        <Year year={myStore.mainPlan.years[0]} />
      </Provider>
    );
  });

  it('Should render with a seeded Year Model', () => {
    expect(wrapper.find('.title span').first().text()).toBe('First Year');
    expect(wrapper.find('.term').length).toBe(2);
  });

  it('Should add a term when you click "+"', () => {
    wrapper.find('.btn').first().simulate('click');
    expect(wrapper.find('.term').length).toBe(3);
  });

});
