'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = new _koa2.default();

app.use(function index(ctx) {
  console.log('Hello Unite 👋');
  ctx.body = 'Hello Unite 👋';
});

exports.default = app;
//# sourceMappingURL=index.js.map