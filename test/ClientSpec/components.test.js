// __tests__/components.test.js
jest.dontMock('../../src/client/app/console/container.js');

import React from 'react';
import renderer from 'react-test-renderer';
import {ConsoleContainer} from '../../src/client/app/console/container.js';
// var {store} = require('../src/client/app/index.jsx');
import { fromJS } from 'immutable';
import {Provider} from 'react-redux';
import sinon from 'sinon';

jest.mock('react/lib/ReactDefaultInjection')
console.log('console', ConsoleContainer)

function createMockStore(state) {
    return {
      subscribe: () => {},
      dispatch: () => {},
      getState:()=> {
	      return {...state};
      }
    };
  }
      // <Provider store={createMockStore()} >
// console.log('nav', NavContainer)

describe('components', function() {
  describe('<ConsoleContainer />', function() {
  	it('renders correctly', function() {
      var tree = renderer.create(
      <Provider store={createMockStore()} >
      	<ConsoleContainer redux={fromJS({})}/>
      </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});


  // const onButtonClick = sinon.spy();
  // const wrapper = shallow(

  //   <Nav onButtonClick={onButtonClick} />
  // );
  // wrapper.find('button').simulate('click');
  // expect(onButtonClick).to.have.property('callCount', 1);




