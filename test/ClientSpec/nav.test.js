jest.dontMock('../../src/client/app/editor/presentation.js');

import React from 'react';
import renderer from 'react-test-renderer';
var EditorPresentation = require('../../src/client/app/editor/presentation.js').default;
import {fromJS} from 'immutable';
import {Provider} from 'react-redux';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';


jest.mock('react/lib/ReactDefaultInjection')

describe('components', function() {
  describe('<EditorContainer />', function() {
  	it('renders correctly', function() {
  		const onButtonClick = sinon.spy();
  		const wrapper = shallow(
  		  <EditorPresentation saveCode={()=>{}} onClick={onButtonClick} />
  		);
  		wrapper.find('#savebutton').simulate('click');
  		expect(onButtonClick).to.have.property('callCount', 1);
    });
  });
});