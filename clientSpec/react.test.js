// import React from 'react';
// import { mount, shallow } from 'enzyme';
// // import sinon from 'sinon';
// import { fromJS } from 'immutable';
// import renderer from 'react-test-renderer';
// import {expect} from 'chai';

// jest.dontMock('../src/client/app/home/container.js');

// var  Home = require('../src/client/app/home/container.js').default;
// // var  NavContainer = require('../src/client/app/home/container.js').default;
// import {NavContainer} from '../src/client/app/nav/container.js';
// console.log('home', Home);

// // console.log('NavContainer', Home);
// jest.mock('react/lib/ReactDefaultInjection')

// describe('<Home />', () => {
//   it('renders <Home /> components', () => {
//     const wrapper = shallow(<Home />);
//     // var tree = renderer.create(<NavContainer redux={fromJS({})} />).toJSON();
//     // expect(tree).toMatchSnapshot();

//     console.log('wrapper', wrapper)
//     expect(wrapper.contains(<div />)).to.equal(true);
//     // expect(wrapper.find(NavContainer)).to.have.length(1);
//   });

//   // it('renders an `.icon-star`', () => {
//   //   const wrapper = shallow(<Home />);
//   //   expect(wrapper.find('.icon-star')).to.have.length(1);
//   // });

//   // it('renders children when passed in', () => {
//   //   const wrapper = shallow(
//   //     <Home>
//   //       <div className="unique" />
//   //     </Home>
//   //   );
//   //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
//   // });

//   // it('simulates click events', () => {
//   //   const onButtonClick = sinon.spy();
//   //   const wrapper = shallow(
//   //     <Nav onButtonClick={onButtonClick} />
//   //   );
//   //   wrapper.find('button').simulate('click');
//   //   expect(onButtonClick).to.have.property('callCount', 1);
//   // });
// });