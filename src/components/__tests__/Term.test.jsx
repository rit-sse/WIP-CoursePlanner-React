import React from 'react';
import { Provider } from 'mobx-react';
import { shallow, mount, render } from 'enzyme';
import { Term } from '../Term';
import { TermModel } from '../../stores/models/TermModel';
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

describe('<Term />', () => {
  const myStore = new Store();
  let wrapper;

  beforeEach(() => {
    myStore.seed(SE);
    wrapper = mount(
      <Provider store={myStore}>
        <Term term={myStore.mainPlan.years[0].terms[0]} />
      </Provider>
    );
  });

  it('Should render with a seeded Term Model', () => {
    expect(wrapper.find('.title').text()).toBe('Fall');
    expect(wrapper.find('.credits-sum').text()).toBe('16 Credits');
    expect(wrapper.find('.course').length).toBe(6);
  });

  it('Should add a new child course when you click "+"', () => {
    wrapper.find('.btn').simulate('click');
    expect(wrapper.find('.course').length).toBe(7);

    wrapper.find('.btn').simulate('click');
    expect(wrapper.find('.course').length).toBe(8);
  });

});
