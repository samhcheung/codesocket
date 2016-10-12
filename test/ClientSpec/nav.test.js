jest.dontMock('../../src/client/app/editor/presentation.js');
import chai from 'chai';
import React from 'react';
import renderer from 'react-test-renderer';
var EditorPresentation = require('../../src/client/app/editor/presentation.js').default;
import {fromJS} from 'immutable';
import {Provider} from 'react-redux';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
var expect = chai.expect;

jest.mock('react/lib/ReactDefaultInjection')

describe('components', function() {
  describe('<EditorContainer />', function() {
  	it('renders correctly', function() {
  		const onButtonClick = sinon.spy();
  		const wrapper = shallow(
  		  <EditorPresentation saveCode={onButtonClick} />
  		);
  		// var header = wrapper.find('div').at(0);
  		wrapper.find('div').at(0).find('#savebutton').simulate('click');
  		expect(onButtonClick.callCount).to.not.equal(0);

    });
  });
});