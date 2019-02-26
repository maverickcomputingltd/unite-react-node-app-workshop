'use strict';

require('isomorphic-fetch');

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$env$PORT = process.env.PORT,
    PORT = _process$env$PORT === undefined ? 3000 : _process$env$PORT;

// start the server on the given port

_server2.default.listen(PORT, function () {
  console.log('\uD83D\uDE80 Listening on port ' + PORT);
});
//# sourceMappingURL=index.js.map