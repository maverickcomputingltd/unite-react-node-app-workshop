'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GameList;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GameItem = require('./GameItem');

var _GameItem2 = _interopRequireDefault(_GameItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GameList(_ref) {
  var _ref$games = _ref.games,
      games = _ref$games === undefined ? [] : _ref$games,
      onAddGame = _ref.onAddGame;

  var gameItems = games.map(function (game) {
    return _react2.default.createElement(_GameItem2.default, { key: game.name, game: game, onAddGame: onAddGame });
  });

  return _react2.default.createElement(
    'ul',
    null,
    gameItems
  );
}
//# sourceMappingURL=GameList.js.map