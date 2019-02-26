'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GameItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GameItem(_ref) {
  var onAddGame = _ref.onAddGame,
      name = _ref.game.name;

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'p',
      null,
      name
    ),
    _react2.default.createElement(
      'button',
      {
        onClick: function onClick() {
          onAddGame(name);
        }
      },
      'Create product'
    )
  );
}
//# sourceMappingURL=GameItem.js.map