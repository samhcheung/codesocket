/**
 * @author charlie
 * This test is run in the browser.
 */

// define('SimpleTest', [], function() {
//     'use strict';

//     describe("Elvenware Simple Plain Suite", function() {
//         it("expects true to be true", function() {
//             expect(true).toBe(true);
//         });

//         it("expects seven to be seven", function() {
//             expect(7).toBe(7);
//         });
//     });   
    
// });
// console.log('in simple test')
// var React = require('react');
// var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
// var expect = require('expect');
// var Root = require('../Source/client/app/home/container.js'); //my root-test lives in components/__tests__/, so this is how I require in my components.

// describe('root', function () {
// 	console.log('in here', Root)
//  	it('renders without problems', function () {
//     var root = TestUtils.renderIntoDocument(<Root/>);
// 	console.log('in here again')

//     expect(root).toExist();
//   });
// });


var reducer = require('../src/client/app/reducers/groupreducer.js')
console.log('reducer', reducer);

describe('todos reducer', () => {
  it('should return the initial state', () => {
  	console.log('i am reducer', reducer.default)
    expect(
      reducer.default(undefined, {})
    ).toEqual(
      {
        doclist: []
      }
    )
  })

  it('should handle UPDATE_USER', () => {
    expect(
      reducer.default([], {
        type: 'UPDATE_DOC_LIST',
        doclist: ['hi', 'me']
      })
    ).toEqual(
      
        {
          doclist: ['hi', 'me']
        }
      
    )
  })
})