var groupReducer = require('../../src/client/app/reducers/groupreducer.js').default
console.log(groupReducer)

describe('groupReducer', function() {
	it('should return the initial state', function() {
	  	expect(groupReducer(undefined, {})).toEqual({
	  	  doclist: []
	    });
	});
	 it('should react to an action with the type CHANGE_LOCATION', function() {
	 	var doclist = [1,2]
	 	expect(groupReducer(undefined, {
	 	  type: 'UPDATE_DOC_LIST',
	 	  doclist: doclist
	 	})).toEqual({
	 		doclist: [1,2]
	 	});
  });
});