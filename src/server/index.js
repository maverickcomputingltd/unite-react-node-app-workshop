import dotenv from 'dotenv';
import Koa from 'koa';
import session from 'koa-session';
import createShopifyAuth, {
    createVerifyRequest,
} from '@shopify/koa-shopify-auth';

dotenv.config();

const SHOPIFY_API_KEY = "9738ed0efa4f609fe751bfd9dfb089f4";
const SHOPIFY_SECRET = "5450ec0939fb0d1c7a1d79e28bf48878";

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

// secure all middleware after this line
app.use(createVerifyRequest());

app.use(function index(ctx) {
    console.log('Hello Unite updated aouthd!!!!! 👋')
    ctx.body = 'Hello Unite updated aouthd!! 👋';
});

export default app;