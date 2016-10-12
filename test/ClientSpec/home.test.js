
import chai from 'chai'
import { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
import { shallow, mount } from 'enzyme'
import React from 'react'
import { createStore } from 'redux';
import {default as Home} from '../../src/client/app/home/container.js';
import {NavContainer} from '../../src/client/app/nav/container.js';

describe('TodoApp (un-decorated)', () => {
    describe('rendering', () => {
        it('should render correctly', () => {
            const wrapper = shallow(<Home />)
            console.log('descendants', wrapper.descendants)
            expect(wrapper).to.have.exactly(1).descendants('main')
        })
    })
})

