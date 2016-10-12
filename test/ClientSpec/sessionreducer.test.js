var sessionReducer = require('../../src/client/app/reducers/sessionreducer.js')

describe('todos reducer', () => {
  it('should return the initial state', () => {
  	console.log('i am reducer', sessionReducer.default)
    expect(
      sessionReducer.default(undefined, {})
    ).toEqual(
      {
       socket: null,
       room: '',
       quill: null,
       modalopen: false,
       videoChannelReady: false,
       pc: null,
       buffer: [],
       serverquill: null,
       quillHistory: '',
       inFlightOp: [],
       incomingOp: {},
       serverState: '',
       rejectedOp: {}
      }
    )
  })

  it('should handle UPDATE_REJECTEDOP', () => {
    expect(
      sessionReducer.default([], {
        type: 'UPDATE_REJECTEDOP',
        rejectedOp: {op: [
          {retain: 2},
          {insert: 'h'}
        ]}
      })
    ).toEqual(
      {
        rejectedOp: {op: [
          {retain: 2},
          {insert: 'h'}
        ]}
      }
    )
  })
})