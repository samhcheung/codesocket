import chai from 'chai'
import { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
import { shallow, mount } from 'enzyme'
import React from 'react'
import { createStore } from 'redux'
import {NavContainer} from '../../src/client/app/nav/container.js';
import {NavPresentation} from '../../src/client/app/nav/presentation.js';
import { default as groupReducer } from '../../src/client/app/reducers/groupreducer.js'
import sinon from 'sinon';

function selectDoc(wrapper, item) {
    wrapper.find('Modal').at(0).find('li').at(0).simulate('click')
}
var openModalSpy = sinon.spy();
// doclist
function getMountedAndStore(initialState = undefined) {
    const store = createStore(groupReducer, initialState)
    const context = { store }

    return [mount(<NavContainer openModal={openModalSpy}/>, { context }), store]
}

function getMounted(initialState = undefined) {
    return getMountedAndStore(initialState)[0]
}

function assertItems(wrapper, items) {
    expect(wrapper).to.have.exactly(1).descendants(NavPresentation)
    items.forEach((item, index) => {
        const itemLi = wrapper.find('li').at(index)
        expect(itemLi).to.contain.text(item.item)
        expect(itemLi).to.contain.text(item.done ? 'Not done' : 'Done')
    })
}

describe('Get doc list (Redux integration)', () => {
    it('should render items from the initial state', () => {
        const initialState = {
            doclist: [
                { doc_name: 'doc1'},
                { doc_name: 'doc2' },
            ]
        }
        const wrapper = getMounted(initialState)

        wrapper.find('div').at(0).find('div').at(0).find('#openModal').simulate('click');
        expect(openModalSpy.callCount).to.not.equal(0);

        // assertItems(wrapper, [
        //         { doc_name: 'doc1'},
        //         { doc_name: 'doc2' },
        //     ])
    })

    // it('should add items to a list when calling the addTodo action', () => {
    //     const [wrapper, store] = getMountedAndStore()

    //     store.dispatch(todosActions.addTodo({ item: 'test 1' }))
    //     store.dispatch(todosActions.addTodo({ item: 'test 2' }))

    //     assertItems(wrapper, [{ item: 'test 1' }, { item: 'test 2' }])
    // })

    // it('should mark items as done when calling the toggleTodoDone action', () => {
    //     const initialState = {
    //         todos: [
    //             { item: 'test 1', done: true },
    //             { item: 'test 2' },
    //         ]
    //     }
    //     const [wrapper, store] = getMountedAndStore(initialState)

    //     store.dispatch(todosActions.toggleTodoDone(1))

    //     assertItems(wrapper, [{ item: 'test 1', done: true }, { item: 'test 2', done: true }])
    // })
})