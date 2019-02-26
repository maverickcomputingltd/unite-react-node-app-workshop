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

var SHOPIFY_API_KEY = "9738ed0efa4f609fe751bfd9dfb089f4";
var SHOPIFY_SECRET = "5450ec0939fb0d1c7a1d79e28bf48878";

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

// secure all middleware after this line
app.use((0, _koaShopifyAuth.createVerifyRequest)());

app.use(function index(ctx) {
    console.log('Hello Unite updated aouthd!!!!! 👋');
    ctx.body = 'Hello Unite updated aouthd!! 👋';
});

exports.default = app;
//# sourceMappingURL=index.js.map