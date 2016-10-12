var userReducer = require('../../src/client/app/reducers/userreducer.js')

describe('todos reducer', () => {
  it('should return the initial state', () => {
  	console.log('i am reducer', userReducer.default)
    expect(
      userReducer.default(undefined, {})
    ).toEqual(
      {
       userName: '',
       myInserts: [],
       isInitiator: false
      }
    )
  })

  it('should handle SET_INITIATOR', () => {
    expect(
      userReducer.default([], {
        type: 'SET_INITIATOR',
        isInitiator: true
      })
    ).toEqual(
      {
        isInitiator: true
      }
    )
  })
})