import dotenv from 'dotenv';
import Koa from 'koa';
import session from 'koa-session';
import createShopifyAuth from '@shopify/koa-shopify-auth';

dotenv.config();
const { SHOPIFY_SECRET, SHOPIFY_API_KEY } = process.env;

const app = new Koa();

app.use(session(app));

app.keys = [SHOPIFY_SECRET];

app.use(
    createShopifyAuth({
        // your shopify app's api key
        apiKey: SHOPIFY_API_KEY,
        // your shopify app's api secret
        secret: SHOPIFY_SECRET,
        // our app's permissions
        // we need to write products to the user's store
        scopes: ['write_products'],
        // our own custom logic after authentication has completed
        afterAuth(ctx) {
            const { shop, accessToken } = ctx.session;

            console.log('We did it!', shop, accessToken);

            ctx.redirect('/');
        },
    }),
);


app.use(function index(ctx) {
    console.log('Hello Unite updated!!!!! 👋')
    ctx.body = 'Hello Unite updated!! 👋';
});

export default app;