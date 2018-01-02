import React from 'react';
import { Course } from '../Course';
import { CourseModel } from '../../stores/models/CourseModel';
import { Store } from '../../stores/Store.js';
import { shallow, mount, render } from 'enzyme';

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

describe('<Course />', () => {
  const myCourseModel = new CourseModel('SW Architectures & Requirements', 'SWEN', '444', 3);
  const myStore = new Store();
  const wrapper = mount(<Course course={myCourseModel} store={myStore} />);

  it('Should render with a default Course Model', () => {
    expect(wrapper.find('.header-text').text()).toBe(`${myCourseModel.dept} ${myCourseModel.num}`);
    expect(wrapper.find('.name').text()).toBe(myCourseModel.name);
    expect(wrapper.find('.credits').text()).toBe(`[${myCourseModel.credits}]`);
  });
});
