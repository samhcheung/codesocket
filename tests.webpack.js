var context = require.context('./test', true, /Test\.js$/);
context.keys().forEach(context);

module.exports = context;