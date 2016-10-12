 module.exports.oTransform = function(newObj, bridge, callback){
    console.log('newObj', newObj);
    console.log('old', bridge);
    console.log('how many in buffer', bridge.length);
    var newOp = newObj.op[0];
    for(var i = 0; i < bridge.length; i++){
      console.log('otransform came here once-----------')
      var oldHistory = bridge[i].history;
      var oldOp = bridge[i].op[0];
      //oldop is an array of arrays of one op
      console.log('oldOp', oldOp);

      var newInsertion = newOp.retain;
      var oldInsertion = oldOp.retain;

      console.log('newInsertion', newInsertion);
      console.log('oldinsertion', oldInsertion);
      if(newInsertion >= oldHistory.length){
        newInsertion = oldHistory.length - 1;
      }
      oldHistory = oldHistory.slice(0, newInsertion) + newObj.op[1].insert + oldHistory.slice(newInsertion);

      if(newInsertion > oldInsertion){
        newInsertion++;
        newOp.retain = newInsertion;
      } else {
        oldInsertion++;
        oldOp.retain = oldInsertion;
        console.log('buffer history before', oldHistory)
      }


      console.log('buffer history after', oldHistory)
      bridge[i].history = oldHistory;
      console.log('2buffer', bridge);
      console.log('2op', newObj.op[0].retain);
    }
    //update buffer
    console.log('final update op', newObj)
    console.log('final update bridge', bridge)
    callback(newObj, bridge);

    // if(oldOp.)
    //if item has insert as key
    //ir item has retain as key
  }