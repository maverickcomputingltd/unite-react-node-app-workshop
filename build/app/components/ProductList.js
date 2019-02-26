'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductList;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductList(_ref) {
  var _ref$products = _ref.products,
      products = _ref$products === undefined ? [] : _ref$products;

  var productItems = products.map(function (_ref2) {
    var title = _ref2.title,
        id = _ref2.id;
    return _react2.default.createElement(
      'li',
      { key: '' + id },
      title
    );
  });

  return _react2.default.createElement(
    'ul',
    null,
    productItems
  );
}
//# sourceMappingURL=ProductList.js.map