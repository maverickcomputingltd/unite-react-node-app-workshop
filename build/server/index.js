'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSession = require('koa-session');

var _koaSession2 = _interopRequireDefault(_koaSession);

var _koaShopifyAuth = require('@shopify/koa-shopify-auth');

var _koaShopifyAuth2 = _interopRequireDefault(_koaShopifyAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var _process$env = process.env,
    SHOPIFY_SECRET = _process$env.SHOPIFY_SECRET,
    SHOPIFY_API_KEY = _process$env.SHOPIFY_API_KEY;


var app = new _koa2.default();

app.use((0, _koaSession2.default)(app));

app.keys = [SHOPIFY_SECRET];

app.use((0, _koaShopifyAuth2.default)({
    // your shopify app's api key
    apiKey: SHOPIFY_API_KEY,
    // your shopify app's api secret
    secret: SHOPIFY_SECRET,
    // our app's permissions
    // we need to write products to the user's store
    scopes: ['write_products'],
    // our own custom logic after authentication has completed
    afterAuth: function afterAuth(ctx) {
        var _ctx$session = ctx.session,
            shop = _ctx$session.shop,
            accessToken = _ctx$session.accessToken;


        console.log('We did it!', shop, accessToken);

        ctx.redirect('/');
    }
}));

app.use(function index(ctx) {
    console.log('Hello Unite updated!!!!! 👋');
    ctx.body = 'Hello Unite updated!! 👋';
});

exports.default = app;
//# sourceMappingURL=index.js.map